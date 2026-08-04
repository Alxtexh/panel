#!/usr/bin/env bash
#
# Publish @panelkit/panel to GitHub Packages.
#
# WHY THIS IS A SCRIPT AND NOT A README LINE. `npm publish` on a scoped package
# with no `.npmrc` in scope silently targets npmjs.com, where the scope is not
# ours - so it fails with a 404 that reads as "the package does not exist"
# rather than as "you published to the wrong registry". The publishConfig in
# package.json fixes the target; this fixes everything around it.
#
# The token needs `write:packages`. Set it in the environment; nothing here
# writes it to disk.
#
#   GITHUB_TOKEN=ghp_... scripts/publish-npm.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/packages/ui"

fail() { echo "FAIL: $*" >&2; exit 1; }

[[ -n "${GITHUB_TOKEN:-}" ]] || fail "GITHUB_TOKEN is not set - it needs write:packages."

version="$(node -p "require('./package.json').version")"
name="$(node -p "require('./package.json').name")"

# A DIRTY TREE PUBLISHES SOMETHING NOBODY CAN REPRODUCE. The tag says one thing
# and the tarball contains another, and there is no way afterwards to tell which
# a given install got.
if [[ -n "$(git -C "$ROOT" status --porcelain)" ]]; then
    fail "Working tree is not clean - a published version must match a commit."
fi

# THE TAG MUST EXIST FIRST, so `npm install @panelkit/panel@0.8.3` and
# `git checkout v0.8.3` name the same code.
git -C "$ROOT" rev-parse "v${version}" >/dev/null 2>&1 \
    || fail "No tag v${version} - tag the release before publishing it."

echo "==> Publishing ${name}@${version} to GitHub Packages"

# `--userconfig` with a temp file rather than writing ~/.npmrc: a token in a
# home-directory file outlives the reason it was there.
npmrc="$(mktemp)"
trap 'rm -f "$npmrc"' EXIT

cat > "$npmrc" <<NPMRC
@panelkit:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
NPMRC

npm publish --userconfig "$npmrc"

echo "==> Published. Consumers install it with:"
echo "    npm install ${name}@${version}"
