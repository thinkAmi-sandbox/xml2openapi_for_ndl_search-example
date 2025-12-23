## Context
quicktype で生成した TypeScript 型定義から JSON Schema を作成し、OpenAPI 3.1 変換に繋げる。OpenAPI 3.1 との互換性を優先し、typia の v3.1 形式スキーマ生成を採用する。

## Goals / Non-Goals
- Goals: OpenAPI v3.1 互換の JSON Schema を生成する。後続ライブラリが扱える単一スキーマ形式に変換する。
- Non-Goals: JSON Schema Draft 2020-12 の完全準拠を保証する詳細検証。

## Decisions
- Decision: typia の `json.schemas<..., "3.1">()` を使い、v3.1 互換のスキーマコレクションを生成する。
  - Why: OpenAPI 3.1 のスキーマ形式と互換性が高い。
- Decision: 生成されたコレクションから `components.schemas.SearchRetrieveResponse` を抽出し、単一JSON Schemaとして保存する。
  - Why: `@openapi-contrib/json-schema-to-openapi-schema` が単一スキーマを扱いやすい。
- Decision: 出力ファイルは `src/schema/example_response.schema.json` とする。
  - Why: 一時生成物を整理し、後続処理の入力パスを固定できる。
- Decision: スキーマコレクションは `src/schema/example_response.collection.json` に常時出力する。
  - Why: 変換途中の内容を確認でき、デバッグが容易になる。
- Decision: typia の導入に伴い、TypeScript transformer 設定を追加する。
  - Why: typia のスキーマ生成はコンパイル時変換が必要。

## Risks / Trade-offs
- typia の導入によりビルド構成が増える。
- スキーマ抽出時に参照関係（$ref）を維持するため、`components.schemas` の依存解決が必要になる可能性がある。

## Open Questions
- 抽出対象スキーマの依存解決方針（関連型を同一ファイルに埋め込むか、componentsごと保持するか）。
