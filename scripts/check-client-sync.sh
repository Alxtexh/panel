#!/usr/bin/env bash
#
# Fail when packages/panel/resources/client is out of sync with packages/ui.
#
# Consumers install Vue screens and kit assets from the Composer package's
# resources/client mirror. Editing packages/ui without `make sync-client`
# ships a stale client half. CI and maintainers run this so drift fails loud.
#
# Compared (source of truth for the mirror):
#   - package.json
#   - inertia/ (excluding *.spec.ts, which sync-client deletes from the mirror)
#
# Dist is NOT byte-compared: Vite rebuilds are not bit-identical across runs.
# KitAssetsTest still asserts resources/client/dist/kit ships. After UI changes,
# run `make sync-client` so dist is refreshed before commit.
#
# Exit 0 when in sync. Exit 1 with a short fix hint when not.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
UI="${ROOT}/packages/ui"
CLIENT="${ROOT}/packages/panel/resources/client"

if [[ ! -d "${UI}/inertia" ]]; then
    echo "packages/ui/inertia is missing; run this from the panelkit monorepo." >&2
    exit 1
fi

if [[ ! -d "${CLIENT}/inertia" ]]; then
    echo "packages/panel/resources/client/inertia is missing." >&2
    echo "Run: make sync-client" >&2
    exit 1
fi

fail=0

if ! diff -q "${UI}/package.json" "${CLIENT}/package.json" >/dev/null; then
    echo "Out of sync: package.json (packages/ui vs packages/panel/resources/client)" >&2
    fail=1
fi

# Build a filtered tree of inertia paths (no *.spec.ts) and compare names + content.
TMP="$(mktemp -d)"
trap 'rm -rf "${TMP}"' EXIT

mkdir -p "${TMP}/ui" "${TMP}/client"
# Copy while dropping test files the mirror never ships.
rsync -a --exclude='*.spec.ts' "${UI}/inertia/" "${TMP}/ui/"
rsync -a --exclude='*.spec.ts' "${CLIENT}/inertia/" "${TMP}/client/"

if ! diff -rq "${TMP}/ui" "${TMP}/client" >/dev/null; then
    echo "Out of sync: inertia/ (packages/ui vs packages/panel/resources/client)" >&2
    diff -rq "${TMP}/ui" "${TMP}/client" >&2 || true
    fail=1
fi

if [[ ! -f "${CLIENT}/dist/kit/app.js" || ! -f "${CLIENT}/dist/kit/app.css" ]]; then
    echo "Missing kit bundle under packages/panel/resources/client/dist/kit." >&2
    echo "Run: make sync-client" >&2
    fail=1
fi

if [[ "${fail}" -ne 0 ]]; then
    echo >&2
    echo "Fix: make sync-client && commit packages/ui and packages/panel/resources/client together." >&2
    exit 1
fi

echo "Client mirror is in sync with packages/ui (package.json + inertia, kit present)."
