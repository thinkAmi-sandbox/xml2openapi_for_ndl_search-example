# TypeScript→JSON Schema 生成

## 目的
TypeScript 型定義から JSON Schema を生成し、OpenAPI 3.1 変換の前段として利用する。

## 入力と出力
- 入力: CLI内で生成したTypeScript型定義
- 出力: メモリ上のJSON Schema（ファイル出力は行わない）

## 生成方針
- typia の `typia.json.schemas<..., "3.1">()` で v3.1 互換スキーマコレクションを生成する
- コレクションから `components.schemas.SearchRetrieveResponse` を抽出する
- 単一スキーマでは `#/components/schemas/...` の参照を `#/$defs/...` に置換する
- 単一スキーマに `$schema: "https://json-schema.org/draft/2020-12/schema"` を付与する

## 実行手順
この処理は `xml2dcclient` の内部で実行されるため、単体の手動実行は不要。
