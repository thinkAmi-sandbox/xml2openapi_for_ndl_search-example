type JsonObject = Record<string, unknown>;

type ConvertOptions = {
	title?: string;
	version?: string;
};

const rewriteRef = (ref: string): string => {
	if (ref.startsWith("#/$defs/")) {
		const defName = ref.slice("#/$defs/".length);
		return `#/components/schemas/${defName}`;
	}
	if (ref.startsWith("#/definitions/")) {
		const defName = ref.slice("#/definitions/".length);
		return `#/components/schemas/${defName}`;
	}
	return ref;
};

const normalizeRefs = (value: unknown): unknown => {
	if (Array.isArray(value)) {
		return value.map((entry) => normalizeRefs(entry));
	}

	if (!value || typeof value !== "object") {
		return value;
	}

	const entries = Object.entries(value as JsonObject);
	const normalized: JsonObject = {};

	for (const [key, entry] of entries) {
		if (key === "$ref" && typeof entry === "string") {
			normalized[key] = rewriteRef(entry);
			continue;
		}

		normalized[key] = normalizeRefs(entry);
	}

	return normalized;
};

const extractDefs = (schema: JsonObject): Record<string, JsonObject> => {
	const defs = schema.$defs ?? schema.definitions;
	if (!defs || typeof defs !== "object") {
		return {};
	}

	const entries = Object.entries(defs as Record<string, unknown>);
	const result: Record<string, JsonObject> = {};
	for (const [name, value] of entries) {
		if (value && typeof value === "object") {
			result[name] = value as JsonObject;
		}
	}

	return result;
};

const stripRootMeta = (schema: JsonObject): JsonObject => {
	const {
		$schema: _schema,
		$defs: _defs,
		definitions: _definitions,
		...rest
	} = schema;
	return rest;
};

export const convertJsonSchemaToOpenApiDocument = (
	schema: JsonObject,
	options: ConvertOptions = {},
): JsonObject => {
	if (!schema || typeof schema !== "object") {
		throw new Error("Input schema must be an object.");
	}

	const rootName =
		typeof schema.title === "string" && schema.title.trim().length > 0
			? schema.title
			: (options.title ?? "RootSchema");
	const infoVersion = options.version ?? "1.0.0";
	const rootSchema = normalizeRefs(stripRootMeta(schema)) as JsonObject;

	if (!rootSchema.title) {
		rootSchema.title = rootName;
	}

	const defs = extractDefs(schema);
	const components: Record<string, JsonObject> = {};
	for (const [name, value] of Object.entries(defs)) {
		components[name] = normalizeRefs(value) as JsonObject;
	}

	components[rootName] = rootSchema;

	return {
		openapi: "3.1.0",
		info: {
			title: rootName,
			version: infoVersion,
		},
		paths: {},
		components: {
			schemas: components,
		},
	};
};
