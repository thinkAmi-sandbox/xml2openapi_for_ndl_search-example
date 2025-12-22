# 変更: JSON→TypeScript型定義の生成を追加

## Why
XML→JSON変換後のデータからTypeScript型定義を安定的に生成できるようにし、後続のJSON Schema生成・OpenAPI変換に繋げるため。

## What Changes
- quicktype による JSON → TypeScript 型定義の生成手順を追加する
- 生成先を `src/types/example_response.ts` とし、実行ごとに上書きできるようにする
- トップレベル型名を `SearchRetrieveResponse` とする
- 後続処理で扱いやすい出力オプション（`--just-types`、`--prefer-types`、`--no-enums`、`--no-date-times`、`--no-uuids`）を定義する

## Impact
- 影響する仕様: json-typescript-types
- 影響するコード: JSON→TypeScript型生成のスクリプト/CLI（本提案では実装しない）
