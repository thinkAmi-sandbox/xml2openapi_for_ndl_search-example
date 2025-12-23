## ADDED Requirements
### Requirement: typia によるスキーマ生成
システムは typia を利用して TypeScript 型定義から OpenAPI v3.1 互換のスキーマコレクションを生成しなければならない（SHALL）。

#### Scenario: v3.1 スキーマ生成
- **WHEN** `src/types/example_response.ts` を入力する
- **THEN** v3.1 互換のスキーマコレクションが生成される

### Requirement: 単一スキーマの抽出
システムは生成されたスキーマコレクションから `SearchRetrieveResponse` の単一JSON Schemaを抽出しなければならない（SHALL）。

#### Scenario: トップレベルスキーマ抽出
- **WHEN** スキーマコレクションを処理する
- **THEN** `components.schemas.SearchRetrieveResponse` が単一スキーマとして取り出される

### Requirement: 出力先の固定
システムは抽出したJSON Schemaを `src/schema/example_response.schema.json` に出力しなければならない（SHALL）。

#### Scenario: 出力ファイル
- **WHEN** JSON Schemaが生成される
- **THEN** `src/schema/example_response.schema.json` が上書きされる

### Requirement: スキーマコレクションの保存
システムは生成したスキーマコレクションを `src/schema/example_response.collection.json` に出力しなければならない（SHALL）。

#### Scenario: コレクション出力
- **WHEN** スキーマコレクションが生成される
- **THEN** `src/schema/example_response.collection.json` が上書きされる

### Requirement: 変換パイプラインの整合
システムは `@openapi-contrib/json-schema-to-openapi-schema` が扱いやすい形式で単一JSON Schemaを出力しなければならない（SHALL）。

#### Scenario: 後続変換への適合
- **WHEN** 生成したJSON Schemaを後続処理に渡す
- **THEN** 追加の手作業なしでOpenAPI変換の入力として利用できる
