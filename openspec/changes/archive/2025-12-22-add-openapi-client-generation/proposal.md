# 変更: OpenAPI から API クライアントを生成

## Why
`src/schema/example_response.openapi.json` を元に API クライアントを生成し、後続で NDL API を扱うための基盤を用意するため。

## What Changes
- `@hey-api/openapi-ts` を用いて OpenAPI から TypeScript クライアントを生成する
- ベースURLを `https://ndlsearch.ndl.go.jp/api/sru` に固定する
- 生成出力先を `src/client/` に固定する
- 実行は内部スクリプトとして提供し、CLI 統合は後続対応とする
- ランタイム互換性を優先して fetch ベースのクライアントを選択する

## Impact
- 影響する仕様: openapi-client-generation
- 影響するコード: クライアント生成スクリプト
