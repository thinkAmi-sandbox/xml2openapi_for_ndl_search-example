import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parseXmlToJson } from "../src/xml/parseXml";

const xmlPath = resolve("openspec", "example_response.xml");
const xml = readFileSync(xmlPath, "utf-8");
const json = parseXmlToJson(xml, { keepExtraResponseData: false }) as {
	searchRetrieveResponse?: {
		diagnostics?: {
			diagnostic?: unknown;
		};
		records?: {
			record?: unknown;
		};
	};
};

const records = json.searchRetrieveResponse?.records?.record;
if (!Array.isArray(records)) {
	throw new Error("records.record is not an array");
}

const diagnostics = json.searchRetrieveResponse?.diagnostics?.diagnostic;
if (diagnostics !== undefined && !Array.isArray(diagnostics)) {
	throw new Error("diagnostics.diagnostic is not an array");
}

const firstRecord = records[0] as {
	recordData?: {
		dc?: {
			subject?: unknown;
		};
	};
};

const subjects = firstRecord?.recordData?.dc?.subject;
if (subjects !== undefined && !Array.isArray(subjects)) {
	throw new Error("recordData.dc.subject is not an array");
}

console.log("Array validation passed");
