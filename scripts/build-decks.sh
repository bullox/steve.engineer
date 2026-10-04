#!/usr/bin/env bash
# Build the Marp decks in slides/<course>/*.md into public/teaching/<course>/,
# as self-contained HTML (for embedding) and PDF (for download):
#
#   slides/imageomics2026/safe-ethical-legal.md
#     → public/teaching/imageomics2026/slides/safe-ethical-legal/index.html
#     → public/teaching/imageomics2026/slides/safe-ethical-legal.pdf
#
#   scripts/build-decks.sh                 # every deck
#   scripts/build-decks.sh slides/x/y.md   # one deck
#
# The theme comes from the Flight Lab Marp template checked out beside this
# repository (BristolFlightLab/flightlab-marp-template, with `npm install` run
# in it); set MARP_TEMPLATE to use a checkout elsewhere. Pictures go in
# slides/<course>/assets/ and are referenced as assets/<file>. PDF export needs
# Chrome, Chromium or Edge. Built output is committed: Cloudflare doesn't run this.
set -euo pipefail
cd "$(dirname "$0")/.."
TEMPLATE="${MARP_TEMPLATE:-../flightlab-marp-template}"
MARP="$TEMPLATE/node_modules/.bin/marp"
[ $# -gt 0 ] || set -- slides/*/*.md
for src in "$@"; do
  course="$(basename "$(dirname "$src")")"
  name="$(basename "$src" .md)"
  out="public/teaching/$course/slides"
  mkdir -p "$out/$name"
  for asset in $(grep -oE 'assets/[A-Za-z0-9._-]+' "$src" | sort -u); do
    mkdir -p "$out/$name/assets" && cp "slides/$course/$asset" "$out/$name/$asset"
  done
  "$MARP" --no-stdin --html --theme-set "$TEMPLATE/themes" -o "$out/$name/index.html" "$src"
  "$MARP" --no-stdin --html --allow-local-files --theme-set "$TEMPLATE/themes" --pdf -o "$out/$name.pdf" "$src"
done
