#!/usr/bin/env bash
#
# Capture a screenshot of every screen worth looking at, into a named directory.
#
# WHY THIS EXISTS AND `dusk.sh` DOES NOT COVER IT. Dusk asserts behaviour - a
# button opens a menu, a collapse is remembered. Nothing here answers the
# question this repository is about to be asked repeatedly: "does the starter
# still look exactly like the demo?" That is a comparison between two
# applications, not an assertion inside one, so it needs artifacts on disk.
#
# THE CAPTURE ITSELF IS `shots.mjs`, over CDP. Two dead ends are recorded there
# so nobody walks them again: ChromeDriver renders this app blank on Windows,
# and one-shot `chrome --screenshot` with a profile directory hangs on GCM sync.
#
# THIS WRAPPER OWNS WHAT PHP OWNS: the theme column on the account, set before
# each pass, because `useAppearance` treats the server value as authoritative -
# a localStorage write races the server prop and loses.
#
# Usage:
#   scripts/shots.sh <output-dir> [base-url] [user-id]
#   scripts/shots.sh .shots/playground http://127.0.0.1:8000 1
#
# The server must already be running and serving BUILT assets.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/apps/playground"

OUT="${1:?usage: shots.sh <output-dir> [base-url] [user-id]}"
BASE="${2:-http://127.0.0.1:8000}"
USER_ID="${3:-1}"

# A relative output directory means relative to the repository root - where the
# command was typed - not to apps/playground, where this script happens to run.
case "$OUT" in
    /* | ?:*) ;;
    *) OUT="$ROOT/$OUT" ;;
esac

if [[ -f public/hot ]]; then
    echo "public/hot exists, so pages will ask a Vite dev server for their scripts." >&2
    echo "Stop 'pnpm run dev' and run 'pnpm run build', or every screenshot lies." >&2
    exit 1
fi

# THE PLATFORM'S OWN BUILD FIRST, in pattern order - not `ls | head -1`, whose
# alphabetical sort put `linux-...` ahead of `win64-...` and handed node a
# binary this operating system cannot spawn.
CHROME=""
for candidate in chrome/*/chrome-win64/chrome.exe chrome/*/chrome-linux64/chrome; do
    if [[ -e "$candidate" ]]; then
        CHROME="$PWD/$candidate"
        break
    fi
done

# THEN AN INSTALLED CHROME, because the downloaded one is 816 MB and is the
# first thing anybody deletes when reclaiming disk. This script IS the proof
# that the design has not moved, so it must not stop working the moment that
# directory is cleaned up. A system Chrome of the same major version renders
# identically - the download exists to pin a version in CI, not because a
# normal browser will not do.
if [[ -z "$CHROME" ]]; then
    for candidate in \
        "/c/Program Files/Google/Chrome/Application/chrome.exe" \
        "/c/Program Files (x86)/Google/Chrome/Application/chrome.exe" \
        "/usr/bin/google-chrome" \
        "/usr/bin/chromium"; do
        if [[ -e "$candidate" ]]; then
            CHROME="$candidate"
            break
        fi
    done
fi

if [[ -z "$CHROME" ]]; then
    echo "No Chrome. Install one with: npx @puppeteer/browsers install chrome@151" >&2
    exit 1
fi

# Node needs a path its own platform understands; under Git Bash that is the
# Windows form. `cygpath` exists there and nowhere else, which is the test.
# CHROME is already absolute by here, from whichever branch found it.
if command -v cygpath >/dev/null 2>&1; then
    CHROME="$(cygpath -w "$CHROME")"
    OUT_ARG="$(cygpath -w "$OUT")"
else
    OUT_ARG="$OUT"
fi

set_theme() {
    php artisan tinker --execute="
        \$u = config('auth.providers.users.model')::find(${USER_ID});
        \$a = (array) \$u->appearance;
        \$a = array_merge(['density' => 'comfortable', 'fontSize' => 16,
            'sidebarSide' => 'left', 'cardStyle' => 'transparent', 'primary' => 'slate',
            'primaryChosen' => false, 'surface' => 'neutral'], \$a, ['theme' => '${1}']);
        \$u->appearance = \$a;
        \$u->save();
    " >/dev/null
}

status=0

for theme in light dark; do
    echo "==> ${theme}"
    set_theme "$theme"
    node "$ROOT/scripts/shots.mjs" "$CHROME" "$BASE" "$USER_ID" "$OUT_ARG" "$theme" || status=1
done

set_theme light

echo "==> $(find "$OUT" -name '*.png' 2>/dev/null | wc -l) screenshots in ${OUT}"
exit "$status"
