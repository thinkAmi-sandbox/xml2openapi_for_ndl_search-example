import { resolve } from "node:path";
import { createClient } from "@hey-api/openapi-ts";

const inputPath = resolve("src", "schema", "example_response.openapi.json");
const outputPath = resolve("src", "client");

const run = async () => {
	await createClient({
		input: inputPath,
		output: outputPath,
		plugins: [
			"@hey-api/typescript",
			{
				name: "@hey-api/sdk",
				client: "@hey-api/client-fetch",
			},
			{
				name: "@hey-api/client-fetch",
				baseUrl: "https://ndlsearch.ndl.go.jp",
			},
		],
	});
};

run().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
