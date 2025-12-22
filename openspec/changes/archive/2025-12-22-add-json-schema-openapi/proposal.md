# 変更: JSON Schema から OpenAPI 3.1 スキーマを生成

## Why
JSON Schema を OpenAPI 3.1 の一般的な形式へ変換し、後続で orval などのツールに渡せる状態にするため。

## What Changes
- `src/schema/example_response.schema.json` を入力として OpenAPI 3.1 形式へ変換する
- 最小構成の OpenAPI 3.1 ドキュメント（`openapi`/`info`/`paths`/`components.schemas`）を出力する
- 出力形式は機械処理を優先して JSON とする
- 出力先を `src/schema/example_response.openapi.json` に固定する
- 変換処理は内部ユーティリティとして提供し、後続パイプラインから利用できるようにする

## Impact
- 影響する仕様: json-schema-openapi
- 影響するコード: JSON Schema → OpenAPI 変換ユーティリティ、変換スクリプト
