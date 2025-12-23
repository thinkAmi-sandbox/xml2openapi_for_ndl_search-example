# 変更: サンプルで内部XMLまでパース

## Why
NDL SRU レスポンスの `recordData` が XML 文字列として返るため、title 抽出に必要な内部XMLのパースをサンプル側で完結させる。

## What Changes
- サンプル実装で `recordData` の内部XMLを追加パースする
- title 抽出処理を内部XMLの構造に合わせて取得する

## Impact
- 影響する仕様: ndlsearch-sample-app
- 影響するコード: `src/sample_ndlsearch_titles.ts`
