## ADDED Requirements
### Requirement: xml2dcclient CLI
システムは `xml2dcclient <xml>` の単一コマンドでXML入力からAPIクライアント生成までを一括実行しなければならない（SHALL）。

#### Scenario: CLI 実行
- **WHEN** 利用者が `xml2dcclient` にXMLファイルパスを渡す
- **THEN** XMLの読み込みからクライアント生成までの処理が順番に実行される

### Requirement: 中間生成物の非出力
システムはCLI実行時に中間生成物（JSON, TypeScript, JSON Schema, OpenAPI）をファイル出力しないこと（SHALL）。

#### Scenario: 中間ファイルの省略
- **WHEN** `xml2dcclient` を実行する
- **THEN** 中間生成物のファイルが作成されない

### Requirement: クライアント生成の完了
システムはCLI実行で生成したAPIクライアントを `src/client/` に出力しなければならない（SHALL）。

#### Scenario: 出力先の固定
- **WHEN** CLIでクライアント生成が完了する
- **THEN** 生成物が `src/client/` に保存される
