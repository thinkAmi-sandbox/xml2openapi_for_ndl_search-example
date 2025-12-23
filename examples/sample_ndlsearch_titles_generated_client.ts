import { createClient, createConfig } from "../src/client/client";
import { getSru } from "../src/client";
import type { SearchRetrieveResponse } from "../src/client";
import { parseSruXml } from "../src/xml/parseSruXml";

const sleep = (ms: number) =>
	new Promise<void>((resolve) => {
		setTimeout(resolve, ms);
	});

const fetchTitles = async () => {
	const query = 'title="JetBrains"';
	const client = createClient(
		createConfig({
			baseUrl: "https://ndlsearch.ndl.go.jp",
		}),
	);
	const raw = await getSru({
		query: {
			operation: "searchRetrieve",
			maximumRecords: 10,
			query,
		},
		parseAs: "text",
		responseStyle: "data",
		client,
	});
	const data = parseSruXml(String(raw)) as SearchRetrieveResponse;

	const records = data.searchRetrieveResponse?.records?.record ?? [];
	const titles = records
		.map((record) => record.recordData?.dc?.title)
		.filter((title): title is string => Boolean(title));

	for (const title of titles) {
		console.log(title);
	}

	const waitMs = 2000 + Math.floor(Math.random() * 1000);
	await sleep(waitMs);
};

fetchTitles().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
