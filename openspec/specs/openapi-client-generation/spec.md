# openapi-client-generation Specification

## Purpose
TBD - created by archiving change add-openapi-client-generation. Update Purpose after archive.
## Requirements
### Requirement: OpenAPI からのクライアント生成
システムはメモリ上の OpenAPI 3.1 ドキュメントを入力として `@hey-api/openapi-ts` により TypeScript クライアントを生成しなければならない（SHALL）。

#### Scenario: クライアント生成
- **WHEN** OpenAPI クライアント生成を実行する
- **THEN** `@hey-api/openapi-ts` によりクライアントが生成される

### Requirement: fetch ベースの出力
システムは fetch ベースのランタイムで利用できるクライアントを生成しなければならない（SHALL）。

#### Scenario: fetch ランタイム
- **WHEN** クライアント生成を行う
- **THEN** fetch を前提としたコードが出力される

#### Scenario: レスポンス変換
- **WHEN** XMLレスポンスを受け取る
- **THEN** `responseTransformer` によりパース済みデータが返る

### Requirement: ベースURLの固定
システムは生成するクライアントのベースURLを `https://ndlsearch.ndl.go.jp/api/sru` に固定しなければならない（SHALL）。

#### Scenario: ベースURL設定
- **WHEN** クライアント生成を行う
- **THEN** ベースURLが `https://ndlsearch.ndl.go.jp/api/sru` として設定される

### Requirement: 出力先の固定
システムは生成したクライアントを `src/client/` に保存しなければならない（SHALL）。

#### Scenario: 出力ディレクトリ
- **WHEN** クライアント生成が完了する
- **THEN** `src/client/` に生成物が保存される

### Requirement: 実行形態の限定
システムはクライアント生成をCLIから呼び出せる内部処理として提供しなければならない（SHALL）。

#### Scenario: CLI 統合
- **WHEN** `xml2dcclient` を実行する
- **THEN** クライアント生成処理がCLIの一部として実行される

