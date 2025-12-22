import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { generateTypesFromJson } from "../src/pipeline/quicktype";

const inputPath = resolve("openspec", "example_response.json");
const outputPath = resolve("src", "types", "example_response.ts");
const topLevelName = "SearchRetrieveResponse";

if (!existsSync(inputPath)) {
	throw new Error(`Input JSON not found: ${inputPath}`);
}

mkdirSync(resolve("src", "types"), { recursive: true });

const run = async () => {
	const json = JSON.parse(readFileSync(inputPath, "utf-8")) as unknown;
	const output = await generateTypesFromJson(json, { topLevelName });
	writeFileSync(outputPath, output);
};

run().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
