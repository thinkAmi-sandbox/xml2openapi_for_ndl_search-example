import { XMLParser } from "fast-xml-parser";

export type XmlParseOptions = {
	keepExtraResponseData?: boolean;
};

const ARRAY_JPATHS = new Set([
	"searchRetrieveResponse.records.record",
	"searchRetrieveResponse.diagnostics.diagnostic",
	"searchRetrieveResponse.records.record.recordData.dc.subject",
]);

const parser = new XMLParser({
	attributeNamePrefix: "attr_",
	textNodeName: "#text",
	ignoreAttributes: false,
	removeNSPrefix: true,
	parseTagValue: true,
	parseAttributeValue: true,
	trimValues: true,
	isArray: (name, jpath) => {
		if (ARRAY_JPATHS.has(jpath)) {
			return true;
		}

		return name === "record" && jpath.endsWith(".records.record");
	},
});

const extractExtraResponseData = (xml: string): string | null => {
	const match = xml.match(/<extraResponseData>([\s\S]*?)<\/extraResponseData>/);
	return match ? match[1] : null;
};

export const parseXmlToJson = (xml: string, options: XmlParseOptions = {}) => {
	const parsed = parser.parse(xml) as Record<string, unknown>;
	const root = parsed.searchRetrieveResponse as
		| Record<string, unknown>
		| undefined;
	if (!root) {
		return parsed;
	}

	if (options.keepExtraResponseData) {
		const raw = extractExtraResponseData(xml);
		if (raw !== null) {
			root.extraResponseData = raw;
		}
	} else {
		delete root.extraResponseData;
	}

	return parsed;
};
