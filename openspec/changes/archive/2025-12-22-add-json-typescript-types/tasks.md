## 1. 提案の確認
- [x] 1.1 quicktype の出力先を `src/types/example_response.ts` として固定する。
- [x] 1.2 quicktype の出力オプション（`--just-types`、`--prefer-types`、`--no-enums`、`--no-date-times`、`--no-uuids`）を確定する。
- [x] 1.3 生成するトップレベル型名を `SearchRetrieveResponse` とする。

## 2. 実装
- [x] 2.1 JSON→TypeScript変換スクリプト/CLIを追加する。
- [x] 2.2 `openspec/example_response.json` から型定義を生成し、出力を保存する。
- [x] 2.3 生成結果が `type` として出力されることを検証する。

## 3. ドキュメント
- [x] 3.1 JSON→TypeScript変換ルールと quicktype オプションを文書化する。
- [x] 3.2 出力先と上書き方針を明記する。
