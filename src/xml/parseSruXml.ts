import { parseXmlToJson } from "./parseXml";

export type SruRecordData = {
	dc?: {
		title?: string;
		creator?: string;
		subject?: string[];
		description?: string[] | string;
		publisher?: string[] | string;
		language?: string;
	};
};

export type SruRecord = {
	recordSchema?: string;
	recordPacking?: string;
	recordData?: SruRecordData;
	recordPosition?: number;
};

type SruRecordRaw = Omit<SruRecord, "recordData"> & {
	recordData?: string;
};

type SruResponseRaw = {
	searchRetrieveResponse?: {
		records?: {
			record?: SruRecordRaw[];
		};
	};
};

export type SruResponse = {
	searchRetrieveResponse?: {
		records?: {
			record?: SruRecord[];
		};
	};
};

export const parseSruXml = (xml: string): SruResponse => {
	const raw = parseXmlToJson(xml) as SruResponseRaw;
	const records = raw.searchRetrieveResponse?.records?.record;
	if (!records) {
		return raw as SruResponse;
	}

	const normalized = records.map((record) => {
		if (!record.recordData) {
			return record as SruRecord;
		}

		const inner = parseXmlToJson(record.recordData) as SruRecordData;
		return {
			...record,
			recordData: inner,
		} satisfies SruRecord;
	});

	return {
		...raw,
		searchRetrieveResponse: raw.searchRetrieveResponse
			? {
					...raw.searchRetrieveResponse,
					records: raw.searchRetrieveResponse.records
						? {
								...raw.searchRetrieveResponse.records,
								record: normalized,
							}
						: raw.searchRetrieveResponse.records,
				}
			: raw.searchRetrieveResponse,
	};
};
