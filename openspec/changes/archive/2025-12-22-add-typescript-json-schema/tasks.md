## 1. 提案の確認
- [x] 1.1 出力先を `src/schema/example_response.schema.json` として固定する。
- [x] 1.2 トップレベル型名を `SearchRetrieveResponse` とする。
- [x] 1.3 typia による v3.1 互換スキーマ生成と単一スキーマ抽出方針を確定する。
- [x] 1.4 スキーマコレクションの出力先を `src/schema/example_response.collection.json` として固定する。

## 2. 実装
- [x] 2.1 typia と必要な transformer 依存を追加する。
- [x] 2.2 tsconfig などビルド設定を更新し、typia transformer を有効化する。
- [x] 2.3 TypeScript 型定義からスキーマコレクションを生成するスクリプト/CLIを追加する。
- [x] 2.4 スキーマコレクションを `src/schema/example_response.collection.json` に保存する。
- [x] 2.5 コレクションから `SearchRetrieveResponse` を抽出し、単一JSON Schemaとして保存する。
- [x] 2.6 生成結果を保存し、OpenAPI変換に利用できる形式であることを確認する。

## 3. ドキュメント
- [x] 3.1 JSON Schema 生成ルールと typia オプションを文書化する。
- [x] 3.2 出力先と上書き方針（単一スキーマ/コレクションの両方）を明記する。
