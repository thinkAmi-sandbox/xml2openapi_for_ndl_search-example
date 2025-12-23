# json-schema-openapi Specification

## Purpose
TBD - created by archiving change add-json-schema-openapi. Update Purpose after archive.
## Requirements
### Requirement: JSON Schema から OpenAPI 3.1 への変換
システムは JSON Schema 2020-12 を OpenAPI 3.1 の Schema Object として直接取り込み、OpenAPI 3.1 形式のドキュメントを構成しなければならない（SHALL）。

#### Scenario: 2020-12 互換の取り込み
- **WHEN** JSON Schema 2020-12 を入力する
- **THEN** Schema Object を `components.schemas` に格納した OpenAPI 3.1 ドキュメントが生成される

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
システムは OpenAPI 3.1 形式の出力を `openapi/openapi.json` に上書き保存しなければならない（SHALL）。

#### Scenario: 出力ファイル
- **WHEN** 変換が完了する
- **THEN** `openapi/openapi.json` が上書きされる

### Requirement: SRUパスの固定定義
システムは OpenAPI 3.1 ドキュメントの `paths` に `/api/sru` のGETエンドポイントを定義しなければならない（SHALL）。

#### Scenario: パス定義
- **WHEN** OpenAPI スキーマを出力する
- **THEN** `/api/sru` のGETが `paths` に含まれている

### Requirement: SRUクエリパラメータ
システムは `/api/sru` のGETに `operation`, `query`, `maximumRecords` のクエリパラメータを定義しなければならない（SHALL）。

#### Scenario: パラメータ定義
- **WHEN** `/api/sru` の仕様を確認する
- **THEN** `operation`, `query`, `maximumRecords` がクエリパラメータとして定義されている

### Requirement: SRUレスポンス
システムは `/api/sru` のGETレスポンスに `application/xml` の200レスポンスを定義しなければならない（SHALL）。

#### Scenario: レスポンス定義
- **WHEN** `/api/sru` のレスポンス仕様を確認する
- **THEN** 200レスポンスの `application/xml` が定義されている

