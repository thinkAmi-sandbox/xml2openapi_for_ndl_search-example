## MODIFIED Requirements
### Requirement: JSON Schema から OpenAPI 3.1 への変換
システムはメモリ上のJSON Schemaを入力として OpenAPI 3.1 形式のスキーマへ変換しなければならない（SHALL）。

#### Scenario: 変換実行
- **WHEN** JSON Schema 変換を実行する
- **THEN** OpenAPI 3.1 形式のスキーマが生成される

### Requirement: OpenAPI ドキュメントの最小構成
システムは出力する OpenAPI 3.1 ドキュメントに `openapi`、`info`、`paths`、`components.schemas` を含めなければならない（SHALL）。

#### Scenario: ドキュメント構造
- **WHEN** OpenAPI スキーマを出力する
- **THEN** 必須セクションが含まれている

### Requirement: 出力形式の固定
システムは出力する OpenAPI 3.1 ドキュメントを JSON 形式のデータとして保持しなければならない（SHALL）。

#### Scenario: JSON 形式
- **WHEN** OpenAPI スキーマを出力する
- **THEN** JSON 形式として扱える

### Requirement: 参照形式の正規化
システムは変換後の参照が `#/components/schemas/...` 形式で解決できるよう正規化しなければならない（SHALL）。

#### Scenario: $ref の整合
- **WHEN** 変換結果を参照解決する
- **THEN** `#/components/schemas/...` で参照できる

### Requirement: 出力先の固定
システムは OpenAPI 3.1 形式の出力をファイルに保存せず、メモリ上で後続処理へ渡さなければならない（SHALL）。

#### Scenario: メモリ受け渡し
- **WHEN** 変換が完了する
- **THEN** ファイル出力は行わず、メモリ上で保持される
