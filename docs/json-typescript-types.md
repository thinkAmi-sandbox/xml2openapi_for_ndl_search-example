# JSON→TypeScript型定義の生成

## 目的
JSONサンプルからTypeScript型定義を生成し、後続のJSON Schema生成に利用する。

## 入力と出力
- 入力: `openspec/example_response.json`
- 出力: `src/types/example_response.ts`（生成のたびに上書き）

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
`ts-node` 経由で以下を実行する。

```bash
./node_modules/.bin/ts-node scripts/convert-json-to-types.ts
```
