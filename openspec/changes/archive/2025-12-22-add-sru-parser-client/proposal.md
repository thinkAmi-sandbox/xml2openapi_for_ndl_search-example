# 変更: SRU専用パーサーとクライアント変換の追加

## Why
SRUレスポンスの `recordData` 内部XMLを1回の呼び出しで構造化し、APIクライアントでもパース済みデータを扱えるようにするため。

## What Changes
- SRU専用のXMLパーサーを追加し、内部XMLまで一括変換する
- APIクライアントで `responseTransformer` を用いてパース済みデータを返す
- サンプル実装はSRU専用パーサー経由でtitleを取得する

## Decisions
- 本プロジェクトの目的は「XMLレスポンスを型付きのTypeScriptオブジェクトとして扱いやすくする」ことに置く。
- JSONからXMLへの復元は行わず、GETによる取得のみを想定する。
- 厳密なXML仕様の表現は行わず、`fast-xml-parser` で情報が落ちることは許容する。
- OpenAPIの型はパース後（JSON化後）の構造に合わせる方針とし、`application/xml` との厳密な一致は優先しない。

## Impact
- 影響する仕様: ndlsearch-sample-app, openapi-client-generation
- 影響するコード: SRUパーサー、クライアント生成設定、サンプル実装
