# ndlsearch-paths Specification

## Purpose
TBD - created by archiving change add-ndlsearch-paths. Update Purpose after archive.
## Requirements
### Requirement: SRU エンドポイントの定義
システムは OpenAPI 3.1 の `paths` に `/api/sru` の GET 定義を追加しなければならない（SHALL）。

#### Scenario: GET エンドポイント
- **WHEN** OpenAPI を出力する
- **THEN** `/api/sru` の GET が含まれている

### Requirement: 固定値パラメータ
システムは `operation=searchRetrieve` と `maximumRecords=10` を固定値のクエリパラメータとして定義しなければならない（SHALL）。

#### Scenario: 固定値の制約
- **WHEN** `/api/sru` のクエリパラメータを定義する
- **THEN** `operation` と `maximumRecords` は固定値制約を持つ

### Requirement: query パラメータの必須条件
システムは `query` を必須のクエリパラメータとして定義し、title または isbn のどちらかを含む形式に制約しなければならない（SHALL）。

#### Scenario: query 必須
- **WHEN** `/api/sru` を呼び出す
- **THEN** `query` が必須として扱われる

### Requirement: query の内容制約
システムは `query` の内容を title もしくは isbn の単一条件として表現しなければならない（SHALL）。

#### Scenario: title 検索
- **WHEN** title 条件を指定する
- **THEN** `query` は `title="<文字列>"` 形式になる

#### Scenario: isbn 検索
- **WHEN** isbn 条件を指定する
- **THEN** `query` は `isbn="<10桁または13桁>"` 形式になる

### Requirement: レスポンスの定義
システムは `/api/sru` のレスポンスとして `200` と `application/xml` を定義しなければならない（SHALL）。

#### Scenario: XML レスポンス
- **WHEN** `/api/sru` のレスポンスを定義する
- **THEN** `application/xml` のレスポンスが含まれている

