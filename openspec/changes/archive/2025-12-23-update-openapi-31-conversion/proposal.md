# Change: JSON Schema 2020-12 を直接 OpenAPI 3.1 として取り込む

## Why
現在の変換は `@openapi-contrib/json-schema-to-openapi-schema` を前提としているが、同ライブラリは draft-04/3.0 向けであり、typia が出力する JSON Schema 2020-12 を OpenAPI 3.1 に正しく変換できない。OpenAPI 3.1 では JSON Schema 2020-12 を Schema Object として直接利用できるため、変換処理を自前実装へ切り替えたい。

## What Changes
- `@openapi-contrib/json-schema-to-openapi-schema` の依存と利用を廃止する
- JSON Schema 2020-12 を OpenAPI 3.1 の `components.schemas` に直接取り込む変換処理を実装する
- 関連仕様（json-schema-openapi / typescript-json-schema）を更新する

## Impact
- Affected specs: json-schema-openapi, typescript-json-schema
- Affected code: src/openapi/convertJsonSchemaToOpenApi.ts, package.json
