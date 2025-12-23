## MODIFIED Requirements
### Requirement: 中間生成物の非出力
システムはCLI実行時に中間生成物（JSON, TypeScript, JSON Schema）をファイル出力しないこと（SHALL）。

#### Scenario: 中間ファイルの省略
- **WHEN** `xml2dcclient` を実行する
- **THEN** JSON/TypeScript/JSON Schema のファイルが作成されない

#### Scenario: 旧スクリプトの排除
- **WHEN** リポジトリのソースを確認する
- **THEN** 中間生成物の作成を目的とした旧スクリプトや固定出力ファイルが含まれていない
