import { client } from "./client/client.gen";
import { parseXmlToJson } from "./xml/parseXml";

const sleep = (ms: number) =>
	new Promise<void>((resolve) => {
		setTimeout(resolve, ms);
	});

const fetchTitles = async () => {
	const query = 'title="桜"';
	const xml = await client.get({
		url: "/api/sru",
		query: {
			operation: "searchRetrieve",
			maximumRecords: 10,
			query,
		},
		parseAs: "text",
		responseStyle: "data",
	});

	if (typeof xml !== "string") {
		throw new Error("Expected XML response as text.");
	}

	const parsed = parseXmlToJson(xml) as {
		searchRetrieveResponse?: {
			records?: {
				record?: Array<{
					recordData?: string;
				}>;
			};
		};
	};

	const records = parsed.searchRetrieveResponse?.records?.record ?? [];
	const titles = records
		.map((record) => {
			if (!record.recordData) {
				return undefined;
			}

			const inner = parseXmlToJson(record.recordData) as {
				dc?: {
					title?: string;
				};
			};

			return inner.dc?.title;
		})
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
