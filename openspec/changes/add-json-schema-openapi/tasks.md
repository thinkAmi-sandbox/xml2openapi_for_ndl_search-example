## 1. 提案の確認
- [x] 1.1 入力スキーマを `src/schema/example_response.schema.json` として固定する。
- [x] 1.2 OpenAPI 3.1 の最小構成（`openapi`/`info`/`paths`/`components.schemas`）で出力する方針を確定する。
- [x] 1.3 出力形式を JSON として固定する。
- [x] 1.4 出力先を `src/schema/example_response.openapi.json` として固定する。

## 2. 実装
- [x] 2.1 JSON Schema → OpenAPI 3.1 変換ユーティリティを追加する。
- [x] 2.2 変換用のスクリプトを追加し、`example_response.schema.json` を OpenAPI 形式へ変換する。
- [x] 2.3 変換結果を `src/schema/example_response.openapi.json` に保存する。
- [x] 2.4 `$ref` と `components.schemas` の整合（`#/components/schemas/...`）を保証する。

## 3. 検証
- [x] 3.1 出力 JSON が OpenAPI 3.1 の基本構造を満たすことを確認する。
- [x] 3.2 Biome を実行し、エラーが出ないことを確認する。
