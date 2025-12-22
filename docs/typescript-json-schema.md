# TypeScript→JSON Schema 生成

## 目的
TypeScript 型定義から JSON Schema を生成し、OpenAPI 3.1 変換の前段として利用する。

## 入力と出力
- 入力: `src/types/example_response.ts`
- 出力（コレクション）: `src/schema/example_response.collection.json`（常時上書き）
- 出力（単一スキーマ）: `src/schema/example_response.schema.json`（常時上書き）

## 生成方針
- typia の `typia.json.schemas<..., "3.1">()` で v3.1 互換スキーマコレクションを生成する
- コレクションから `components.schemas.SearchRetrieveResponse` を抽出する
- 単一スキーマでは `#/components/schemas/...` の参照を `#/$defs/...` に置換する
- 単一スキーマに `$schema: "https://json-schema.org/draft/2020-12/schema"` を付与する

## 実行手順
`ts-node` 経由で以下を実行する（typia の transformer はスクリプト内で適用する）。

```bash
./node_modules/.bin/ts-node scripts/convert-types-to-schema.ts
```
