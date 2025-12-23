## 1. 提案の確認
- [x] 1.1 `/api/sru` の GET を単一エンドポイントとして定義する。
- [x] 1.2 `operation=searchRetrieve` と `maximumRecords=10` を固定値パラメータとして扱う。
- [x] 1.3 `query` は title または isbn のどちらか必須とする。
- [x] 1.4 `query` の title は文字列、isbn は10桁または13桁の文字列とする。
- [x] 1.5 レスポンスは `200` と `application/xml` のみを定義する。

## 2. 実装
- [x] 2.1 OpenAPI の `paths` に `/api/sru` の GET 定義を追加する。
- [x] 2.2 `query` パラメータのスキーマと制約を反映する。
- [x] 2.3 `operation` と `maximumRecords` の固定値制約を反映する。

## 3. 検証
- [x] 3.1 OpenAPI が SDK 生成に必要な `paths` を含むことを確認する。
- [x] 3.2 Biome を実行し、エラーが出ないことを確認する。
