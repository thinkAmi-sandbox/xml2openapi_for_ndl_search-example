# 変更: TypeScript型定義からJSON Schemaを生成

## Why
`src/types/example_response.ts` の型定義をJSON Schemaへ変換し、OpenAPI 3.1 生成の前段として利用するため。

## What Changes
- typia を用いて OpenAPI v3.1 互換のスキーマコレクションを生成する
- 生成されたコレクションからトップレベル型（`SearchRetrieveResponse`）の単一JSON Schemaを抽出する
- 出力先を `src/schema/example_response.schema.json` とする
- スキーマコレクションは `src/schema/example_response.collection.json` に常時出力する
- typia 利用のための依存追加とTypeScript transformer設定を行う

## Impact
- 影響する仕様: typescript-json-schema
- 影響するコード: JSON Schema生成スクリプト/CLI、TypeScriptビルド設定
