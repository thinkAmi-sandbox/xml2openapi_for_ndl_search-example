# Change: SRU固定パスをOpenAPIに付与する

## Why
OpenAPI 3.1 をファイル出力しているが、`paths` が空のため他言語向けのクライアント生成や検証に活用しづらい。
SRU専用ツールとして `/api/sru` のGETのみを固定定義し、必要最低限のクエリパラメータとXMLレスポンスを明示したい。

## What Changes
- OpenAPI 3.1 の `paths` に `/api/sru` のGET定義を追加する
- クエリパラメータは `operation`, `query`, `maximumRecords` の3つに限定する
- レスポンスは 200 のみで `application/xml` を返す定義とする
- OpenAPI更新後にAPIクライアントを再生成し、サンプルコードを新しい型に合わせて更新する

## Impact
- Affected specs: json-schema-openapi
- Affected code: src/openapi/convertJsonSchemaToOpenApi.ts, src/client/*, examples/sample_ndlsearch_titles_generated_client.ts
