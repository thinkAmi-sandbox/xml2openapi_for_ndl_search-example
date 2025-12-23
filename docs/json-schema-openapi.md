# JSON Schema 2020-12 → OpenAPI 3.1

## 目的
JSON Schema 2020-12 を OpenAPI 3.1 の Schema Object としてそのまま取り込み、OpenAPIドキュメントを構成する。

## 入力と出力
- 入力: JSON Schema 2020-12
- 出力: OpenAPI 3.1 ドキュメント（メモリ上のJSONデータ）

## 方針
- JSON Schema の `$defs` を `components.schemas` に展開し、`$ref` を `#/components/schemas/...` に正規化する
- ルートスキーマも `components.schemas` に格納する
- OpenAPI 3.1 の `openapi` / `info` / `paths` / `components.schemas` を含める
- 変換時に draft-04 / 3.0 への変換は行わない
