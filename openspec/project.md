# Project Context

## Purpose

XMLを返すAPIに対して、以下を行えるツールを作成する

- レスポンスされたXMLから、OpenAPIスキーマのバージョン3.1を自動生成する
- OpenAPIスキーマから、APIのTypeScriptクライアントを作成する
- ツールはCLIとして、Node.jsの環境で実行可能とする



## Tech Stack

- TypeScript
  - @types/nodeやts-nodeも使う
- Node.js
- OpenAPI Schema version 3.1
- XMLからOpenAPIスキーマの変換経路は以下を想定。ただし、不適切な場合はライブラリを差し替えても良い
  - XML → JSON
    - fast-xml-parser
  - JSON → TypeScriptの型定義
    - quicktype
  - TypeScriptの型定義 → JSON Schema
    - typia（OpenAPI v3.1 互換スキーマコレクションの生成）
  - JSON Schema → OpenAPIスキーマ 3.1
    - JSON Schema 2020-12 を OpenAPI 3.1 の Schema Object として直接取り込む
- CLIとして実行可能にする
  - `xml2openapi <ベースとなるXMLファイル>` というイメージ
    - commander.js を利用する


## Project Conventions

### Code Style

- Lint・FormatterはBiomeに従うものとする
  - コードを実装した後に、Biomeの実行を必ず行う

### Language

- 仕様/設計/タスク/提案などのドキュメントは日本語で作成する
- ユーザーへの回答も日本語で行う

### Architecture Patterns

- CLIで動くものとする

### Testing Strategy

以下を実現する。ただし、テストコードでの確認が難しい場合は手動でのテストとする。

- XMLのレスポンスがOpenAPIスキーマとして作成できること
- OpenAPIスキーマからOpenAPIクライアントを生成できること
- 

### Git Workflow

- `git commit` や `git push` はユーザーのみが行える
- `git diff` などの差分検知については、誰もが行って良い


## Domain Context
[Add domain-specific knowledge that AI assistants need to understand]

## Important Constraints

- Biomeを実行してエラーが出なくなるまでが実装とする
- JSON Schema は OpenAPI v3.1 互換の形式を優先し、typia で生成したスキーマコレクションから単一スキーマを抽出して利用する

## External Dependencies

- XMLを返すAPIとしては、以下の2つを想定している
  - 開発環境
    - Mockaroo API
  - 本番環境
    - NDL API
- ただし、最初は example_response.xmlがJSON Schemaになるところまででよい
