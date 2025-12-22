# XML→JSON変換ルール（SRUレスポンス）

## 目的
XMLレスポンスを安定したJSON形に変換し、後段の型生成とOpenAPIスキーマ生成を安定させる。

## 変換ルール
- 名前空間は無視する（例: `dc:title` → `title`）
- 属性は `attr_`、テキストノードは `#text` に格納する
- 数値として解釈可能な値は数値型に変換する
- `trimValues: true` を有効化し、空白のみの `#text` を抑制する
- 繰り返し要素は単一でも配列化する
- `extraResponseData` はデフォルトで無視する。保持が必要な場合は生文字列で保持する

## 繰り返し要素（現時点）
- `searchRetrieveResponse.records.record`
- `searchRetrieveResponse.diagnostics.diagnostic`
- `searchRetrieveResponse.records.record.recordData.dc.subject`

## 生成例
`scripts/convert-example.ts` により `openspec/example_response.xml` を `openspec/example_response.json` に変換する。
