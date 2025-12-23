# Change: xml2dcclient CLI でXMLからクライアント生成までを一括実行する

## Why
既存の scripts 配下の処理が分断されており、手動で複数コマンドを実行しなければならないため、実行と検証が煩雑になっている。
XML入力からAPIクライアント生成までを単一CLIで完結させ、開発者体験と実行の一貫性を高めたい。

## What Changes
- `xml2dcclient <xml>` の単一CLIでXMLからAPIクライアント生成までを実行する
- 変換パイプラインの中間生成物はデフォルトでファイル出力せず、メモリ上で受け渡す
- 既存の file-based 前提の仕様を、CLI一括実行に適合する形へ更新する

## Impact
- Affected specs: cli-orchestration, json-typescript-types, typescript-json-schema, json-schema-openapi, openapi-client-generation
- Affected code: scripts/*, src/ 配下の変換処理, CLI エントリポイント
