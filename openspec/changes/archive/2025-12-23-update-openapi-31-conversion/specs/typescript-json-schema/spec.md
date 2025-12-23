## MODIFIED Requirements
### Requirement: typia によるスキーマ生成
システムはメモリ上の TypeScript 型定義を入力として typia で OpenAPI v3.1 互換のスキーマコレクションを生成しなければならない（SHALL）。

#### Scenario: v3.1 スキーマ生成
- **WHEN** 生成済みの TypeScript 型定義を入力する
- **THEN** v3.1 互換のスキーマコレクションが生成される

### Requirement: 単一スキーマの抽出
システムは生成されたスキーマコレクションから `SearchRetrieveResponse` の単一JSON Schemaを抽出しなければならない（SHALL）。

#### Scenario: トップレベルスキーマ抽出
- **WHEN** スキーマコレクションを処理する
- **THEN** `components.schemas.SearchRetrieveResponse` が単一スキーマとして取り出される

### Requirement: 出力先の固定
システムは抽出したJSON Schemaをファイルに保存せず、メモリ上で後続処理へ渡さなければならない（SHALL）。

#### Scenario: メモリ受け渡し
- **WHEN** JSON Schemaが生成される
- **THEN** ファイル出力は行わず、メモリ上で保持される

### Requirement: スキーマコレクションの保存
システムは生成したスキーマコレクションをファイルに保存せず、メモリ上で保持しなければならない（SHALL）。

#### Scenario: コレクションの保持
- **WHEN** スキーマコレクションが生成される
- **THEN** ファイル出力は行わず、メモリ上で保持される

### Requirement: 変換パイプラインの整合
システムは OpenAPI 3.1 の Schema Object として直接利用できる JSON Schema 2020-12 を出力しなければならない（SHALL）。

#### Scenario: 2020-12 互換
- **WHEN** JSON Schemaを生成する
- **THEN** OpenAPI 3.1 でそのまま取り込める形式になる
