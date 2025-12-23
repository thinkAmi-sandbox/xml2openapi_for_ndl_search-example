# Change: OpenAPI 3.1 スキーマのファイル出力を追加する

## Why
現在のOpenAPI 3.1スキーマはメモリ上にのみ保持されており、他言語のAPIクライアント生成などに再利用しづらい。
CLI実行時にOpenAPI 3.1スキーマをファイル出力して、他ツールから参照できる状態にしたい。

## What Changes
- OpenAPI 3.1 スキーマを `openapi/openapi.json` に常に上書き出力する
- 中間生成物の非出力要件から OpenAPI を除外し、JSON/TypeScript/JSON Schema は引き続き非出力とする
- 仕様とドキュメントに出力先を明記する

## Impact
- Affected specs: cli-orchestration, json-schema-openapi
- Affected code: src/pipeline/xmlToClient.ts, docs/xml2dcclient.md
