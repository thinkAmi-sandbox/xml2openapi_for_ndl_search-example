## MODIFIED Requirements
### Requirement: title の抽出
システムはパース後のデータから title をすべて抽出し、コンソールに出力しなければならない（SHALL）。

#### Scenario: title 出力
- **WHEN** JSON を処理する
- **THEN** 取得した title がすべて表示される

#### Scenario: 内部XMLの解釈
- **WHEN** `recordData` が XML 文字列として返る
- **THEN** 内部XMLをパースして title を抽出する
