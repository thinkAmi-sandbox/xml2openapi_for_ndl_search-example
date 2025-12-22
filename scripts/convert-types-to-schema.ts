import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { generateJsonSchemaFromTypes } from "../src/pipeline/typiaSchema";

const schemaDir = resolve("src", "schema");
const collectionPath = resolve(schemaDir, "example_response.collection.json");
const schemaPath = resolve(schemaDir, "example_response.schema.json");
const rootName = "SearchRetrieveResponse";
const typesPath = resolve("src", "types", "example_response.ts");

mkdirSync(schemaDir, { recursive: true });

const typesSource = readFileSync(typesPath, "utf-8");
const { collection, schema } = generateJsonSchemaFromTypes(
	typesSource,
	rootName,
);

writeFileSync(collectionPath, `${JSON.stringify(collection, null, 2)}\n`);
writeFileSync(schemaPath, `${JSON.stringify(schema, null, 2)}\n`);
