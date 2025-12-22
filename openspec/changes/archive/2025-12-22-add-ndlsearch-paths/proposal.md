# 変更: NDL SRU API の paths 定義を追加

## Why
`src/schema/example_response.openapi.json` に `paths` を定義し、SDK生成とアプリ実装に必要なエンドポイント情報を揃えるため。

## What Changes
- `paths` に `/api/sru` の GET 定義を追加する
- `operation` と `maximumRecords` を固定値パラメータとして扱う
- `query` を title または isbn のどちらか必須として定義する
- レスポンスは `application/xml` を返す前提で `200` のみを定義する

## Impact
- 影響する仕様: ndlsearch-paths
- 影響するコード: OpenAPI スキーマ生成物
