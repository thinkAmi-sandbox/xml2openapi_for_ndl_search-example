# xml2dcclient CLI

## 目的
XMLファイルを入力として、OpenAPIクライアント生成までを1コマンドで実行する。

## 使い方

```bash
xml2dcclient <xmlファイルパス>
```

## 挙動
- XMLを読み込んでJSONに変換する
- JSONからTypeScript型定義を生成する
- TypeScript型定義からJSON SchemaとOpenAPI 3.1を生成する
- OpenAPIドキュメントから `src/client/` にクライアントを生成する
- 中間生成物はファイルに保存しない

## 生成物の構成
- `src/client/` 直下: 公開用の入口（型とSDKの再エクスポート）
- `src/client/client/`: HTTPクライアント実装と設定の統合
- `src/client/core/`: 認証やシリアライズなどの共通基盤

## CLIの内部構成
- `src/cli/`: CLIの入口（引数処理と実行フローの起点）
- `src/pipeline/`: XML→JSON→TypeScript→JSON Schema→OpenAPI→クライアント生成の統合パイプライン
- `src/xml/`: XML解析ロジック（SRUレスポンスのJSON化）
- `src/openapi/`: JSON Schema→OpenAPI 3.1変換ユーティリティ

## 例

```bash
xml2dcclient openspec/example_response.xml
```
