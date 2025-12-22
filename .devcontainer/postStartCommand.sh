#!/bin/sh
set -eu

npm install -g pnpm@latest-10

# 今回のスクリプト用（最重要）
export PNPM_HOME="$HOME/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"


# 永続化（bash / login shell 用）
# postStartCommandの特性上、PNPM設定後の起動時にも呼ばれるため、ガードしておく
# また、JetBrainsのdevcontainerはログインシェルなので、 .bashrc が読まれない可能性があるため、 .profile を使う
grep -q 'PNPM_HOME' "$HOME/.profile" || {
  echo 'export PNPM_HOME="$HOME/.local/share/pnpm"' >> "$HOME/.profile"
  echo 'export PATH="$PNPM_HOME:$PATH"' >> "$HOME/.profile"
}

# setup は「失敗しても無視」でOK（非対話のため）
pnpm setup || true

pnpm add -g @openai/codex@latest
pnpm add -g @fission-ai/openspec@latest