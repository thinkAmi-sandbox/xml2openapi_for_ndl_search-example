# JSON→TypeScript型定義の生成

## 目的
JSONサンプルからTypeScript型定義を生成し、後続のJSON Schema生成に利用する。

## 入力と出力
- 入力: XMLから変換されたJSONデータ（CLI内で生成）
- 出力: メモリ上のTypeScript型定義（ファイル出力は行わない）

## quicktype 実行オプション
- `--lang ts`
- `--src-lang json`
- `--just-types`
- `--prefer-types`
- `--no-enums`
- `--no-date-times`
- `--no-uuids`
- `--top-level SearchRetrieveResponse`

## 実行手順
この処理は `xml2dcclient` の内部で実行されるため、単体の手動実行は不要。
