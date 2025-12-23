# xml-json-conversion Specification

## Purpose
TBD - created by archiving change add-xml-json-conversion. Update Purpose after archive.
## Requirements
### Requirement: 名前空間の正規化
システムは、XML要素名の名前空間を無視してJSONプロパティ名を生成しなければならない（SHALL）。

#### Scenario: 名前空間付き要素の変換
- **WHEN** 要素名が名前空間を含む（例: `dc:title`）
- **THEN** JSONプロパティ名から名前空間を除去する（例: `title`）

### Requirement: 属性とテキストの表現
システムは、属性を `@_` に、テキストノードを `#text` に格納しなければならない（SHALL）。

#### Scenario: 属性とテキストの抽出
- **WHEN** 要素が属性またはテキストを持つ
- **THEN** 属性は `@_`、テキストは `#text` として出力される

### Requirement: 数値の型変換
システムは、数値として解釈可能な要素値/属性値をJSONの数値型として出力しなければならない（SHALL）。

#### Scenario: 数値フィールド
- **WHEN** 件数や位置を示す要素が数値のみで構成される
- **THEN** JSONの値は文字列ではなく数値になる

### Requirement: 繰り返し要素の配列化
システムは、繰り返し要素を単一の場合でも配列として表現しなければならない（SHALL）。

#### Scenario: 単一要素の繰り返し
- **WHEN** 繰り返し要素が1件のみ出現する
- **THEN** JSONの値は単一要素ではなく配列になる

#### Scenario: Recordsコンテナ
- **WHEN** `records` に1件以上の `record` 要素が含まれる
- **THEN** JSONでは `records.record` が配列として表現される

### Requirement: extraResponseDataの扱い
システムは `extraResponseData` をデフォルトで無視し、保持する場合は生文字列として扱わなければならない（SHALL）。

#### Scenario: 任意の追加データ
- **WHEN** `extraResponseData` が存在する
- **THEN** 明示的に保持しない限りJSON出力に含めない

