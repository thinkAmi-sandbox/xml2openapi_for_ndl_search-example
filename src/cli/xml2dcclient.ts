#!/usr/bin/env ts-node
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { Command } from "commander";
import { runXmlToClient } from "../pipeline/xmlToClient";

const program = new Command();

program
	.name("xml2dcclient")
	.argument("<xml>", "変換対象のXMLファイル")
	.action(async (xmlPath) => {
		const resolvedPath = resolve(xmlPath);
		if (!existsSync(resolvedPath)) {
			console.error(`XMLファイルが見つかりません: ${resolvedPath}`);
			process.exitCode = 1;
			return;
		}

		try {
			await runXmlToClient({ xmlPath: resolvedPath });
			console.log("クライアント生成が完了しました。");
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			console.error(message);
			process.exitCode = 1;
		}
	});

program.parse();
