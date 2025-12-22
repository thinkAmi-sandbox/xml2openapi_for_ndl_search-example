export type SearchRetrieveResponse = {
	searchRetrieveResponse: SearchRetrieveResponseClass;
};

export type SearchRetrieveResponseClass = {
	version: number;
	numberOfRecords: number;
	nextRecordPosition: number;
	records: Records;
};

export type Records = {
	record: Record[];
};

export type Record = {
	recordSchema: string;
	recordPacking: string;
	recordData: RecordData;
	recordPosition: number;
};

export type RecordData = {
	dc: Dc;
};

export type Dc = {
	title: string;
	subject?: string[];
	language: string;
	attr_schemaLocation: string;
	creator?: string;
};
