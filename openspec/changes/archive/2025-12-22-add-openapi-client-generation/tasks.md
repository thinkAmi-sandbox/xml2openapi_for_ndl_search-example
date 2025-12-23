## 1. 提案の確認
- [x] 1.1 入力 OpenAPI を `src/schema/example_response.openapi.json` として固定する。
- [x] 1.2 ベースURLを `https://ndlsearch.ndl.go.jp/api/sru` に固定する。
- [x] 1.3 出力先を `src/client/` として固定する。
- [x] 1.4 fetch ベースのクライアント生成方針を確定する。
- [x] 1.5 実行はスクリプトのみとし、CLI 統合は対象外とする。

## 2. 実装
- [x] 2.1 `@hey-api/openapi-ts` を用いたクライアント生成スクリプトを追加する。
- [x] 2.2 生成結果を `src/client/` に保存する。
- [x] 2.3 ベースURLが生成コードに反映されることを確認する。

## 3. 検証
- [x] 3.1 生成物が `fetch` ベースであることを確認する。
- [x] 3.2 Biome を実行し、エラーが出ないことを確認する。
