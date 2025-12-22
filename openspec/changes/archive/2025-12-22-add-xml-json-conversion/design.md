## Context
SRU APIのXMLレスポンスをJSONに変換し、その後にTypeScript型やOpenAPI Schema 3.1を生成する。単一のサンプルから安定した型を導けるよう、JSONの形を一定に保つ必要がある。

## Goals / Non-Goals
- Goals: 配列形の安定化、属性/テキストの扱いの一貫性、数値の正しい型変換、最小限の後処理。
- Non-Goals: XMLの完全忠実な保存、`extraResponseData` の構造化。

## Decisions
- Decision: 要素名の名前空間は無視する。
  - Why: `dc:title` のようなキーは後段で扱いづらいため、`title` のように短くして可読性を上げる。
  - Trade-off: 将来的に名前空間が異なる同名要素が追加された場合に衝突する可能性がある。
- Decision: 属性は `@_`、テキストは `#text` に格納する。
  - Why: fast-xml-parserの一般的な形式であり、ノードと属性の区別が明確になる。
- Decision: 数値は数値型に変換する。
  - Why: 件数や位置などは数値として扱った方が型推論とスキーマ生成が安定する。
- Decision: 繰り返し要素は単一でも配列化する。
  - Why: 単一/複数の揺れによる型の不安定化を防ぐ。
- Decision: `extraResponseData` は基本的に無視し、保持する場合は生文字列とする。
  - Why: 構造が定義されていないため。

## Risks / Trade-offs
- 名前空間を無視することで、将来的な要素名の衝突リスクがある。
- 配列化の対象リストが不足すると型が不安定になるため、SRU仕様に基づく確認が必要。

## Open Questions
- `records.record` 以外に繰り返し要素があるかを `openspec/ndlsearch_api_20250326.pdf` から確認する必要がある。
