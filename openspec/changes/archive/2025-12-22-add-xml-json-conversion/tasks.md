## 1. 提案の確認
- [x] 1.1 ユーザー提供情報と `openspec/example_response.xml` をもとに、繰り返し要素の一覧を確定する。
- [x] 1.2 変換ルール（名前空間、属性/テキスト、数値、`extraResponseData`）を確定する。

## 2. 実装
- [x] 2.1 fast-xml-parserの設定（配列化、数値変換）を追加する。
- [x] 2.2 `openspec/example_response.xml` をJSONへ変換し、出力を保存して確認できるようにする。
- [x] 2.3 主要な繰り返し要素が常に配列になることを検証する軽量なテスト/スクリプトを追加する。

## 3. ドキュメント
- [x] 3.1 XML→JSON変換ルールと繰り返し要素の一覧をドキュメント化する。
- [x] 3.2 `extraResponseData` の扱いを明記する。
