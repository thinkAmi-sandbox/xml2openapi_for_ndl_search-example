# 変更: SRUレスポンスのXML→JSON変換ルールを追加

## Why
XMLレスポンスをJSONへ安定して変換しないと、後段のツール（quicktype、ts-json-schema-generator、json-schema-to-openapi-schema）で型やスキーマが不安定になります。変換ルールを明確化し、安定したJSON形に揃える必要があります。

## What Changes
- fast-xml-parser を用いたXML→JSON変換ルールを定義する
- 名前空間、属性/テキストの扱い、数値変換の方針を決める
- 繰り返し要素の配列化ルールを定義する
- `extraResponseData` は無視、または保持する場合は生文字列として扱う

## Impact
- 影響する仕様: xml-json-conversion
- 影響するコード: 今後のパーサ設定および変換パイプライン（本提案では実装しない）
