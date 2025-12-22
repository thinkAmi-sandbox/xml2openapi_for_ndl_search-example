# Change: CLI統合後の不要アーティファクトを整理する

## Why
CLI化により中間生成物や旧スクリプトが不要になっているが、ソースやサンプルが残っており混乱の原因となる。
使用されていないファイルを削除して、CLIの実行経路に合わせた構成に整理したい。

## What Changes
- `scripts/` 配下の旧変換スクリプトを削除する
- 旧サンプル `examples/sample_ndlsearch_titles.ts` と `src/ndlsearch/createSruClient.ts` を削除する
- 中間生成物の固定ファイル（`src/schema/`, `src/types/`）を削除する
- ドキュメントおよび仕様サンプル（`docs/*`, `openspec/example_response.xml` など）は残す

## Impact
- Affected specs: cli-orchestration
- Affected code: scripts/*, src/schema/*, src/types/*, src/ndlsearch/createSruClient.ts, examples/sample_ndlsearch_titles.ts
