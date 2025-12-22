## MODIFIED Requirements
### Requirement: fetch ベースの出力
システムは fetch ベースのランタイムで利用できるクライアントを生成しなければならない（SHALL）。

#### Scenario: fetch ランタイム
- **WHEN** クライアント生成を行う
- **THEN** fetch を前提としたコードが出力される

#### Scenario: レスポンス変換
- **WHEN** XMLレスポンスを受け取る
- **THEN** `responseTransformer` によりパース済みデータが返る
