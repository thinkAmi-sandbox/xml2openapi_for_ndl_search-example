## MODIFIED Requirements
### Requirement: JSON Schema から OpenAPI 3.1 への変換
システムは JSON Schema 2020-12 を OpenAPI 3.1 の Schema Object として直接取り込み、OpenAPI 3.1 形式のドキュメントを構成しなければならない（SHALL）。

#### Scenario: 2020-12 互換の取り込み
- **WHEN** JSON Schema 2020-12 を入力する
- **THEN** Schema Object をそのまま `components.schemas` に格納した OpenAPI 3.1 ドキュメントが生成される

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
システムは OpenAPI 3.1 ドキュメント内の参照が `components.schemas` と整合する形で扱えるよう正規化しなければならない（SHALL）。

#### Scenario: $ref の整合
- **WHEN** 変換結果を参照解決する
- **THEN** Schema Object の参照が解決可能である

### Requirement: 出力先の固定
システムは OpenAPI 3.1 形式の出力をファイルに保存せず、メモリ上で後続処理へ渡さなければならない（SHALL）。

#### Scenario: メモリ受け渡し
- **WHEN** 変換が完了する
- **THEN** ファイル出力は行わず、メモリ上で保持される
