import { createClient, createConfig } from "../client/client/index";
import type { RequestOptions } from "../client/client/types.gen";
import { parseSruXml } from "../xml/parseSruXml";

const parseSruData = async (data: unknown) => {
	if (typeof data === "string") {
		return parseSruXml(data);
	}

	if (data instanceof Blob) {
		const text = await data.text();
		return parseSruXml(text);
	}

	return data;
};

export const createSruClient = () => {
	const client = createClient(
		createConfig({
			baseUrl: "https://ndlsearch.ndl.go.jp",
			responseTransformer: async (data: unknown) => parseSruData(data),
		}),
	);

	return {
		...client,
		get: async (options: RequestOptions) => {
			const config = client.getConfig();
			const responseStyle = options.responseStyle ?? config.responseStyle;
			const parseAs = options.parseAs ?? "text";

			const result = await client.get({
				...options,
				parseAs,
			});

			if (responseStyle === "data") {
				return parseSruData(result);
			}

			if (result && typeof result === "object" && "data" in result) {
				return {
					...result,
					data: await parseSruData((result as { data: unknown }).data),
				};
			}

			return result;
		},
	};
};
