#!/usr/bin/env bash
#
# Run the browser tests.
#
# WHY THIS IS A SCRIPT AND NOT JUST `php artisan dusk`.
#
# Dusk's `DatabaseMigrations` trait runs `migrate:fresh`. That is correct for a
# browser suite and catastrophic if it points at the wrong database: the dev
# database on a working machine holds a quarter of a million seeded subscribers,
# and dropping them would be silent, instant, and reported as a passing test run.
#
# So this script owns the two things that decide which database gets used:
#
#   1. It starts a server whose DB_DATABASE is passed on the command line, where
#      it outranks anything in a .env file.
#   2. It runs on its OWN PORT, so a dev server already running on 8000 against
#      the real database is neither used nor disturbed.
#
# `.env.dusk.local` covers the third: the test process itself, which Dusk points
# at the same throwaway sqlite file.
#
# Usage:
#   scripts/dusk.sh                    # run everything
#   scripts/dusk.sh --filter=Designer  # anything after is passed to artisan dusk
#
# First run on a new machine needs a browser. A snap Chromium will NOT work -
# ChromeDriver hangs launching it, with no output from either process:
#
#   cd apps/playground && npx @puppeteer/browsers install chrome@151

set -euo pipefail

cd "$(dirname "$0")/../apps/playground"

PORT="${DUSK_PORT:-8001}"
DB_FILE="$PWD/database/dusk.sqlite"
SERVER_PID=""

cleanup() {
    if [[ -n "$SERVER_PID" ]] && kill -0 "$SERVER_PID" 2>/dev/null; then
        kill "$SERVER_PID" 2>/dev/null || true
        wait "$SERVER_PID" 2>/dev/null || true
    fi
}
trap cleanup EXIT INT TERM

if [[ ! -f .env.dusk.local ]]; then
    echo "apps/playground/.env.dusk.local is missing." >&2
    echo "Without it Dusk uses .env - and migrate:fresh would empty your dev database." >&2
    exit 1
fi

# A REFUSAL, NOT A WARNING. Every guard above is about one mistake; this is the
# assertion that the mistake has not been made in some way they missed.
if [[ "$DB_FILE" == *"/database/database.sqlite" ]]; then
    echo "Refusing to run: the browser database resolved to the development one." >&2
    exit 1
fi

echo "==> Throwaway database: ${DB_FILE#"$PWD"/}"
: > "$DB_FILE"

# Migrated ONCE here so the first test does not pay for it, and so a broken
# migration is reported as a migration failure rather than as a browser timeout.
DB_CONNECTION=sqlite DB_DATABASE="$DB_FILE" \
    php artisan migrate --force --no-interaction >/dev/null

# BUILT EVERY RUN, deliberately.
#
# A browser suite tests the compiled bundle, not the source - so a stale
# `public/build` means testing the code as it was at the last build. The first
# run of these tests failed for exactly that reason: a test hook added to a
# component minutes earlier was not in the served asset, and the failure read as
# "the element never appeared" rather than "you did not rebuild". Five seconds is
# cheaper than that confusion.
echo "==> Building assets"
npm run build --silent >/tmp/panelkit-dusk-build.log 2>&1 || {
    echo "The asset build failed. Its log:" >&2
    tail -20 /tmp/panelkit-dusk-build.log >&2
    exit 1
}

echo "==> Server on http://127.0.0.1:${PORT}"

# 127.0.0.1 rather than localhost: on a machine that resolves localhost to ::1
# first, `serve` binds IPv6 only and the browser's request to 127.0.0.1 reaches
# nothing - a suite that fails with a blank page and no explanation.
#
# The env assignments are on the command line deliberately. They outrank .env,
# which is the whole safety property this script provides.
DB_CONNECTION=sqlite DB_DATABASE="$DB_FILE" \
APP_URL="http://127.0.0.1:${PORT}" \
CACHE_STORE=array QUEUE_CONNECTION=sync BROADCAST_CONNECTION=log \
PANEL_TURNSTILE=false \
    php artisan serve --host=127.0.0.1 --port="$PORT" --no-reload >/tmp/panelkit-dusk-server.log 2>&1 &
SERVER_PID=$!

# Wait for it to answer rather than sleeping a guessed number of seconds - a
# fixed sleep is either slower than it needs to be or occasionally too short,
# and the too-short case looks like a broken application.
for _ in $(seq 1 40); do
    if curl -fsS -o /dev/null -m 2 "http://127.0.0.1:${PORT}/up" 2>/dev/null; then
        break
    fi
    if ! kill -0 "$SERVER_PID" 2>/dev/null; then
        echo "The test server exited before it answered. Its log:" >&2
        tail -20 /tmp/panelkit-dusk-server.log >&2
        exit 1
    fi
    sleep 0.5
done

echo "==> Running browser tests"
php artisan dusk "$@"
