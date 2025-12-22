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

## 例

```bash
xml2dcclient openspec/example_response.xml
```
