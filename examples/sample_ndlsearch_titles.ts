import { createSruClient } from "../src/ndlsearch/createSruClient";
import type { SruRecord } from "../src/xml/parseSruXml";

const sleep = (ms: number) =>
	new Promise<void>((resolve) => {
		setTimeout(resolve, ms);
	});

const fetchTitles = async () => {
	const query = 'title="桜"';
	const client = createSruClient();
	const data = (await client.get({
		url: "/api/sru",
		query: {
			operation: "searchRetrieve",
			maximumRecords: 10,
			query,
		},
		responseStyle: "data",
	})) as {
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
