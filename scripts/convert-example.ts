import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { parseXmlToJson } from "../src/xml/parseXml";

const xmlPath = resolve("openspec", "example_response.xml");
const jsonPath = resolve("openspec", "example_response.json");

const xml = readFileSync(xmlPath, "utf-8");
const json = parseXmlToJson(xml, { keepExtraResponseData: false });

writeFileSync(jsonPath, `${JSON.stringify(json, null, 2)}\n`);
