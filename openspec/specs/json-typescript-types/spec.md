# json-typescript-types Specification

## Purpose
TBD - created by archiving change add-json-typescript-types. Update Purpose after archive.
## Requirements
### Requirement: quicktype による型生成
システムは `openspec/example_response.json` を quicktype で TypeScript 型定義に変換しなければならない（SHALL）。

#### Scenario: JSONから型生成
- **WHEN** `openspec/example_response.json` を入力する
- **THEN** TypeScript の型定義が生成される

### Requirement: 出力先の固定
システムは生成された型定義を `src/types/example_response.ts` に出力しなければならない（SHALL）。

#### Scenario: 出力ファイル
- **WHEN** 型定義が生成される
- **THEN** `src/types/example_response.ts` が上書きされる

### Requirement: type 形式の出力
システムは quicktype の出力を `type` 形式で生成しなければならない（SHALL）。

#### Scenario: type 形式
- **WHEN** 型定義を生成する
- **THEN** `interface` ではなく `type` を用いて出力される

### Requirement: トップレベル型名
システムはトップレベル型名を `SearchRetrieveResponse` として生成しなければならない（SHALL）。

#### Scenario: 型名の固定
- **WHEN** 型定義を生成する
- **THEN** 生成されたトップレベル型名は `SearchRetrieveResponse` となる

### Requirement: quicktype オプション
システムは後続処理で扱いやすい最小構成の quicktype オプションを使用しなければならない（SHALL）。

#### Scenario: 出力オプション
- **WHEN** quicktype を実行する
- **THEN** `--just-types`、`--prefer-types`、`--no-enums`、`--no-date-times`、`--no-uuids` が有効になる

