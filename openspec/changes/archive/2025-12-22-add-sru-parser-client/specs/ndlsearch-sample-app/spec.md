## MODIFIED Requirements
### Requirement: title の抽出
システムはパース後のデータから title をすべて抽出し、コンソールに出力しなければならない（SHALL）。

#### Scenario: title 出力
- **WHEN** JSON を処理する
- **THEN** 取得した title がすべて表示される

#### Scenario: SRU専用パーサーの利用
- **WHEN** SRUレスポンスを処理する
- **THEN** SRU専用パーサーの結果から title を抽出する
