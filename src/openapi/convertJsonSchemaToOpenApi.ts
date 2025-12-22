import { convertSync } from "@openapi-contrib/json-schema-to-openapi-schema";

type JsonObject = Record<string, unknown>;

type ConvertOptions = {
	title?: string;
	version?: string;
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
			normalized[key] = entry
				.replace("#/$defs/", "#/components/schemas/")
				.replace("#/definitions/", "#/components/schemas/");
			continue;
		}

		normalized[key] = normalizeRefs(entry);
	}

	return normalized;
};

const extractDefs = (schema: JsonObject): JsonObject => {
	const defs = schema.$defs ?? schema.definitions;
	if (!defs || typeof defs !== "object") {
		return {};
	}

	return defs as JsonObject;
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

	const defs = extractDefs(schema);
	const rootSchema = stripRootMeta(schema);
	const convertedRoot = convertSync(rootSchema, {
		cloneSchema: true,
	}) as unknown as JsonObject;

	if (!convertedRoot.title) {
		convertedRoot.title = rootName;
	}

	const components: JsonObject = {};
	for (const [name, definition] of Object.entries(defs)) {
		if (!definition || typeof definition !== "object") {
			continue;
		}

		const converted = convertSync(definition, {
			cloneSchema: true,
		}) as unknown as JsonObject;
		components[name] = converted;
	}

	components[rootName] = convertedRoot;

	const normalizedComponents = normalizeRefs(components) as JsonObject;

	return {
		openapi: "3.1.0",
		info: {
			title: rootName,
			version: infoVersion,
		},
		paths: {},
		components: {
			schemas: normalizedComponents,
		},
	};
};
