import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { createClient } from "@hey-api/openapi-ts";
import { convertJsonSchemaToOpenApiDocument } from "../openapi/convertJsonSchemaToOpenApi";
import { parseXmlToJson } from "../xml/parseXml";
import { generateTypesFromJson } from "./quicktype";
import { generateJsonSchemaFromTypes } from "./typiaSchema";

export type XmlToClientOptions = {
	xmlPath: string;
	outputDir?: string;
	rootTypeName?: string;
	openApiVersion?: string;
	baseUrl?: string;
	openApiOutputPath?: string;
};

const runStep = async <T>(
	name: string,
	step: () => Promise<T> | T,
): Promise<T> => {
	try {
		return await step();
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		throw new Error(`${name}に失敗しました: ${message}`);
	}
};

export const runXmlToClient = async (options: XmlToClientOptions) => {
	const rootTypeName = options.rootTypeName ?? "SearchRetrieveResponse";
	const outputDir = options.outputDir
		? resolve(options.outputDir)
		: resolve("src", "client");
	const baseUrl = options.baseUrl ?? "https://ndlsearch.ndl.go.jp/api/sru";
	const openApiVersion = options.openApiVersion ?? "1.0.0";
	const openApiOutputPath = options.openApiOutputPath
		? resolve(options.openApiOutputPath)
		: resolve("openapi", "openapi.json");

	const xml = await runStep("XMLの読み込み", () =>
		readFileSync(options.xmlPath, "utf-8"),
	);
	const json = await runStep("XMLのJSON変換", () =>
		parseXmlToJson(xml, { keepExtraResponseData: false }),
	);
	const typeSource = await runStep("TypeScript型定義の生成", () =>
		generateTypesFromJson(json, { topLevelName: rootTypeName }),
	);
	const schemaResult = await runStep("JSON Schemaの生成", () =>
		generateJsonSchemaFromTypes(typeSource, rootTypeName),
	);
	const openApiDocument = await runStep("OpenAPIの生成", () =>
		convertJsonSchemaToOpenApiDocument(schemaResult.schema, {
			version: openApiVersion,
		}),
	);
	await runStep("OpenAPIの書き出し", () => {
		mkdirSync(dirname(openApiOutputPath), { recursive: true });
		writeFileSync(
			openApiOutputPath,
			`${JSON.stringify(openApiDocument, null, 2)}\n`,
		);
	});

	await runStep("クライアント生成", async () => {
		await createClient({
			input: openApiDocument,
			output: outputDir,
			plugins: [
				"@hey-api/typescript",
				{
					name: "@hey-api/sdk",
					client: "@hey-api/client-fetch",
				},
				{
					name: "@hey-api/client-fetch",
					baseUrl,
				},
			],
		});
	});
};
