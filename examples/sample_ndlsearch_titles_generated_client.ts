import { createClient, createConfig } from "../src/client/client";
import type { SruRecord } from "../src/xml/parseSruXml";
import { parseSruXml } from "../src/xml/parseSruXml";

const sleep = (ms: number) =>
	new Promise<void>((resolve) => {
		setTimeout(resolve, ms);
	});

const createXmlClient = () =>
	createClient(
		createConfig({
			baseUrl: "https://ndlsearch.ndl.go.jp",
		}),
	);

const fetchTitles = async () => {
	// JetBrains IDE プラグイン開発実践ガイド
	const query = 'title="JetBrains"';
	// const query = 'isbn=9784295604167';
	const client = createXmlClient();
	const raw = await client.get({
		url: "/api/sru",
		query: {
			operation: "searchRetrieve",
			maximumRecords: 10,
			query,
		},
		parseAs: "text",
		responseStyle: "data",
	});
	const data = parseSruXml(String(raw)) as {
		searchRetrieveResponse?: {
			records?: {
				record?: SruRecord[];
			};
		};
	};

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
