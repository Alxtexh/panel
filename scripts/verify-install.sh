#!/usr/bin/env bash
#
# Install PanelKit into a FRESH Laravel application and prove it boots.
#
# WHY THIS EXISTS. Every test in this repository runs inside the monorepo, where
# the playground reaches the package through a `path` repository and a symlink.
# That arrangement hides the entire class of faults that only appear when
# somebody installs the package for real: a class outside the published autoload
# paths, a service provider that is never discovered because `extra.laravel` is
# wrong, a config the application never receives because the publish tag is
# misspelt, a `require` on a dev-only dependency. None of those fail a single
# one of the 1,492 tests, and all of them fail the first person who runs
# `composer require panelkit/panel`.
#
# The README has told people to run that command since the beginning. Nothing
# ever checked that it works.
#
# WHAT IT DOES, in the order the README claims:
#
#   composer require panelkit/panel
#   npm install @panelkit/ui @panelkit/inertia
#   php artisan panel:install
#   php artisan make:panel-resource ... --generate
#
# and then asserts the resource's route exists - because "it installed" and "it
# works" are different claims, and only the second one is worth making.
#
# HOW IT RESOLVES THE PACKAGE. Nothing is published yet, so this points composer
# at a `git subtree split` branch of THIS repository as a vcs source. That is
# deliberately not a path symlink: a vcs install exercises composer's real
# resolution, its autoload generation and Laravel's package discovery, which is
# the whole point. The npm side installs from `npm pack` tarballs for the same
# reason - a tarball contains exactly the files `files` in package.json allows,
# so a component left out of that list fails here rather than at a consumer.
#
# Usage:
#   scripts/verify-install.sh            # build, install, assert, clean up
#   scripts/verify-install.sh --keep     # leave the scratch app for inspection

set -euo pipefail

KEEP=false
[[ "${1:-}" == "--keep" ]] && KEEP=true

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WORK="$(mktemp -d)"
APP="$WORK/fresh-app"

cleanup() {
    if [[ "$KEEP" == true ]]; then
        echo "==> Left in place: $WORK"
    else
        rm -rf "$WORK"
    fi
}
trap cleanup EXIT

say() { echo "==> $*"; }
fail() { echo "FAIL: $*" >&2; exit 1; }

cd "$ROOT"

# A subtree split reads COMMITTED history. Splitting a dirty tree silently
# produces a package without the uncommitted work, which looks like the split
# dropped it.
if [[ -n "$(git status --porcelain)" ]]; then
    fail "Working tree is not clean - a split reads history, so changes would be silently omitted."
fi

# ---------------------------------------------------------------- the package

say "Splitting packages/panel into a standalone branch"
git branch -D verify/panel >/dev/null 2>&1 || true
git subtree split --prefix=packages/panel -b verify/panel >/dev/null

say "Creating a fresh Laravel application"
composer create-project laravel/laravel "$APP" \
    --no-interaction --prefer-dist --quiet 2>&1 | tail -3

cd "$APP"

say "composer require panelkit/panel"
composer config minimum-stability dev --no-interaction
composer config prefer-stable true --no-interaction
composer config repositories.panelkit "{\"type\":\"vcs\",\"url\":\"$ROOT\"}" --json --no-interaction
composer require panelkit/panel:dev-verify/panel --no-interaction --quiet 2>&1 | tail -5

# THE FIRST REAL ASSERTION. If `extra.laravel.providers` is wrong, or the
# autoload paths do not cover the command, the package installs perfectly and
# contributes nothing - which is exactly the failure a symlinked monorepo hides.
say "Checking Laravel discovered the package"
php artisan list --no-ansi 2>/dev/null | grep -q 'panel:install' \
    || fail "panel:install is not registered - the service provider was not discovered."

# ------------------------------------------------------------- the client half

say "Packing and installing the npm packages"
for pkg in ui inertia; do
    tarball="$(cd "$ROOT/packages/$pkg" && npm pack --silent --pack-destination "$WORK")"
    [[ -f "$WORK/$tarball" ]] || fail "npm pack produced nothing for packages/$pkg"
    npm install --silent --no-audit --no-fund "$WORK/$tarball" 2>&1 | tail -2
done

# ------------------------------------------------------------------ the install

say "php artisan panel:install"
php artisan panel:install --no-interaction 2>&1 | tail -5

say "Generating a resource"
php artisan make:panel-resource Customer --generate --no-interaction 2>&1 | tail -5

# THE ASSERTION WORTH MAKING. Not "files were written" - that a route exists
# means discovery ran, the resource was found and the panel mounted it.
say "Checking the resource is routable"
php artisan route:list --no-ansi 2>/dev/null | grep -q 'customers' \
    || fail "No route for the generated resource - discovery or panel mounting did not happen."

echo
echo "PASS - panelkit/panel installs into a fresh Laravel app, is discovered,"
echo "       installs its pages, generates a resource and routes it."
