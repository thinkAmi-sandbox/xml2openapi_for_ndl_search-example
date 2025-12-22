# ndlsearch-sample-app Specification

## Purpose
TBD - created by archiving change add-ndlsearch-sample-app. Update Purpose after archive.
## Requirements
### Requirement: サンプルアプリの追加
システムは `src/` 配下に NDL SRU API のサンプル実装を追加しなければならない（SHALL）。

#### Scenario: サンプル配置
- **WHEN** サンプル実装を追加する
- **THEN** `src/` 配下に配置される

### Requirement: XML 取得とパース
システムは NDL SRU API にアクセスして XML レスポンスを取得し、JSON にパースしなければならない（SHALL）。

#### Scenario: XML から JSON へ
- **WHEN** API レスポンスを受け取る
- **THEN** XML が JSON にパースされる

### Requirement: title の抽出
システムはパース後のデータから title をすべて抽出し、コンソールに出力しなければならない（SHALL）。

#### Scenario: title 出力
- **WHEN** JSON を処理する
- **THEN** 取得した title がすべて表示される

#### Scenario: 内部XMLの解釈
- **WHEN** `recordData` が XML 文字列として返る
- **THEN** 内部XMLをパースして title を抽出する

### Requirement: 実行形態の固定
システムはサンプル実装を `ts-node` で実行できる形で提供しなければならない（SHALL）。

#### Scenario: ts-node 実行
- **WHEN** `ts-node` で実行する
- **THEN** サンプルが実行できる

### Requirement: 動作確認時の待機
システムは動作確認時に1リクエストが完了するたび、2〜3秒のランダム待機を入れてアクセス頻度を抑えなければならない（SHALL）。

#### Scenario: 待機の挿入
- **WHEN** リクエストが完了する
- **THEN** 次の処理まで2〜3秒のランダム待機が挿入される

