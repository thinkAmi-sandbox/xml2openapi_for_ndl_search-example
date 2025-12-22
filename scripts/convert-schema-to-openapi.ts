import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { convertJsonSchemaToOpenApiDocument } from "../src/openapi/convertJsonSchemaToOpenApi";

const schemaPath = resolve("src", "schema", "example_response.schema.json");
const outputPath = resolve("src", "schema", "example_response.openapi.json");

const schema = JSON.parse(readFileSync(schemaPath, "utf-8")) as Record<
	string,
	unknown
>;

const openApiDocument = convertJsonSchemaToOpenApiDocument(schema, {
	version: "1.0.0",
});

mkdirSync(resolve("src", "schema"), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(openApiDocument, null, "\t")}\n`);
