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
    # THE LAST LINE, NOT THE WHOLE OUTPUT. `@panelkit/ui` has a `prepack` that
    # builds it - which it must, so a tarball can never contain a stale `dist` -
    # and Vite writes its progress to stdout. `--silent` quiets npm, not the
    # build, so capturing everything gave a "filename" several lines long and
    # the check below failed on a pack that had actually worked.
    tarball="$(cd "$ROOT/packages/$pkg" && npm pack --silent --pack-destination "$WORK" | tail -1)"
    [[ -f "$WORK/$tarball" ]] || fail "npm pack produced nothing for packages/$pkg"
    npm install --silent --no-audit --no-fund "$WORK/$tarball" 2>&1 | tail -2
done

# ------------------------------------------------------------------ the install

# THE VUE PLUGIN, which npm's peer resolution does not supply: `vue` and
# `@inertiajs/vue3` arrive as peers of @panelkit/inertia, and the Vite plugin
# that compiles a `.vue` file is a BUILD dependency of the application rather
# than of either package.
say "npm install @vitejs/plugin-vue"
npm install --silent --no-audit --no-fund --save-dev @vitejs/plugin-vue 2>&1 | tail -2

say "php artisan panel:install --auth"
php artisan panel:install --auth --no-interaction 2>&1 | tail -5

# THE MODEL COMES FIRST, because a resource is generated by reading its table.
# The README omitted this, so following it exactly failed here - which is the
# first thing this harness found and the reason it exists.
say "Creating a model and its table"
php artisan make:model Customer -m --no-interaction 2>&1 | tail -2
migration="$(ls -1 database/migrations/*_create_customers_table.php | head -1)"
python3 - "$migration" <<'EOF'
import sys, re
p = sys.argv[1]
s = open(p).read()
s = s.replace("$table->id();", "$table->id();\n            $table->string('name');\n            $table->string('email')->nullable();", 1)
open(p, 'w').write(s)
EOF
php artisan migrate --force --no-interaction 2>&1 | tail -2

say "Generating a resource"
php artisan make:panel-resource Customer --generate --no-interaction 2>&1 | tail -5

# THE PERMISSION SYSTEM IS THE PACKAGE'S NOW, so a fresh install must arrive with
# one that works rather than with instructions for building one. This is the only
# place that can prove it: inside the monorepo the reference app's own migration
# chain built these tables long before the package owned them, so every test in
# the suite runs against a schema the package migration merely declines to touch.
#
# `sync` is the honest assertion - it derives ability names from the generated
# resource, creates the permission rows, and creates an Administrator role holding
# them. If the migration did not run, or `grants_all` is missing, or the model is
# not autoloaded, this is where it surfaces.
# THE BUILD. This is the one step Filament does not need and we do: it renders
# Blade on the server and publishes precompiled assets, we send a schema once
# and render on the client. `panel:install` has published the root view, the
# bootstrap, the layout and the stylesheet, and wired Vite - so this is a plain
# `npm run build` rather than four files somebody has to write first.
say "npm run build"
npm run build 2>&1 | tail -3

[[ -f public/build/manifest.json ]] \
    || fail "npm run build produced no manifest - the published bootstrap does not compile."

# ---------------------------------------------------------------- the design
#
# THIS CHECK EXISTS BECAUSE THE ONE ABOVE PASSED ON A COMPLETELY UNSTYLED PANEL.
#
# "A manifest was produced" says the bootstrap compiles. It says nothing about
# whether the CSS in it covers the packaged components - and it did not, on every
# install this script has ever verified. `panel:install` refused to overwrite the
# `app.css` that stock Laravel always ships, so Tailwind never scanned
# node_modules, generated none of the packaged utilities, and defined none of the
# tokens. Every route answered 200. Every assertion in this file passed. The
# panel rendered dark text on a dark background with no card and no spacing.
#
# TWO CLASSES THAT EXIST ONLY INSIDE THE PACKAGE. `bg-popover` is the command
# palette's and the account menu's; `bg-card` is the table shell's. Neither
# appears anywhere in a stock Laravel application, so finding them in the built
# stylesheet proves Tailwind reached `node_modules/@panelkit`.
say "Checking the built CSS covers the packaged components"

css="$(cat public/build/assets/*.css 2>/dev/null)"

[[ -n "$css" ]] || fail "npm run build produced no stylesheet at all."

grep -q 'bg-popover' <<<"$css" \
    || fail "The built CSS has no .bg-popover - Tailwind never scanned the packaged components, so the panel renders unstyled. resources/css/app.css needs the two @source lines."

grep -q 'bg-card' <<<"$css" \
    || fail "The built CSS has no .bg-card - the table shell and every panel card will render without a surface."

grep -q -- '--background' <<<"$css" \
    || fail "The built CSS defines no --background token - the packaged components ask for bg-background, which resolves to nothing."

say "Assets built from the published bootstrap, and they cover the packaged components"

say "php artisan panel:permissions sync"
php artisan panel:permissions sync --no-interaction 2>&1 | tail -5

# NOT `tinker --execute`. Psy Shell INTERCEPTS `exit()` - it prints "Goodbye" and
# returns its own status - so an exit code threaded through tinker reports nothing
# about the code that ran. The first version of this check did exactly that and
# failed a sync that had plainly worked, which is worse than no check: it accuses
# the product of a fault that is in the harness. A standalone script bootstrapping
# the app is the pattern the route checks already use, and it prints its verdict
# rather than encoding it.
cat > verify-perms.php <<'PERM'
<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$checks = [
    'grants_all column' => Illuminate\Support\Facades\Schema::hasColumn('roles', 'grants_all'),
    'a role that grants everything' => PanelKit\Panel\Models\Role::query()->where('grants_all', true)->exists(),
    'the generated resource\'s ability' => Spatie\Permission\Models\Permission::query()
        ->where('name', 'view_any_customers')->exists(),
];

foreach ($checks as $what => $ok) {
    echo ($ok ? 'ok   ' : 'MISS '), $what, PHP_EOL;
}

echo in_array(false, $checks, true) ? 'VERDICT fail' : 'VERDICT pass', PHP_EOL;
PERM
perms="$(php verify-perms.php 2>&1)"
rm -f verify-perms.php

echo "$perms"
grep -q 'VERDICT pass' <<<"$perms" \
    || fail "panel:permissions ran but left no working role - the shipped permission system does not work on a clean install."

say "Permissions reconciled: an Administrator role holds the generated resource's abilities"



# THE PANEL BRINGS ITS OWN SIGN-IN NOW, and the four lines that used to sit
# here are the clearest evidence of what was missing.
#
# THIS HARNESS USED TO PASTE A FAKE `login` ROUTE INTO `routes/web.php` before
# it could test anything, because `laravel/laravel` ships no auth scaffolding
# and every panel route redirects an anonymous visitor to `route('login')`. A
# test harness having to fabricate the thing under test is the loudest possible
# statement that the product did not have it.
#
# `panel:install --auth` generates it: routes under the PANEL'S prefix, bound to
# the panel's own guard, pointing at packaged screens. Nothing claims `/login`,
# so a starter kit's own sign-in is untouched.
#
# IT USED TO RE-RUN `make:panel admin --path='' --auth --force` HERE, which is
# the workaround a consumer had to find for themselves - and `--force` REPLACES
# the provider `panel:install` had just written and patched, so the harness was
# quietly undoing part of the install it was verifying. The flag exists on the
# install command now because that is the path everybody actually walks.
say "Checking panel:install --auth wrote the sign-in routes"
[ -f routes/panel-admin-auth.php ] \
    || fail "panel:install --auth wrote no routes/panel-admin-auth.php - the default panel has no sign-in."
[ -f resources/js/pages/auth/Login.vue ] \
    || fail "panel:install --auth wrote no login page file - Inertia cannot resolve the screen."

# THE ASSERTION WORTH MAKING, and it is not a grep of route:list. Panel routes
# use a `{resource}` placeholder constrained by `whereIn`, so no route URI ever
# contains the literal "customers" - an earlier version of this script asserted
# exactly that and reported a bug that did not exist. Resolving the URL is the
# only honest check: 404 means unrouted, 500 means broken, a redirect to login
# means the route matched and the guard ran.
say "Checking the resource URL resolves"
cat > verify-hit.php <<'HIT'
<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$status = $kernel->handle(Illuminate\Http\Request::create('/customers', 'GET'))->getStatusCode();
echo $status, PHP_EOL;
HIT
status="$(php verify-hit.php 2>/dev/null | tail -1)"
rm -f verify-hit.php

case "$status" in
    404) fail "/customers is not routed - discovery or panel mounting did not happen." ;;
    5*)  fail "/customers is routed but returns $status - the panel errors on a clean install." ;;
    "")  fail "/customers could not be requested at all." ;;
esac

say "/customers resolved with HTTP $status"

# ---------------------------------------------------------------------------
# AND NOW THE THING THIS HARNESS COULD NEVER TEST: SIGNING IN.
#
# Every check above proves a route ANSWERS. None of them proved anybody could
# get past it, because until `--auth` there was nothing to get past it with -
# the harness pasted a fake `login` route in and stopped there.
#
# THE ACCOUNT IS MADE BY `panel:make-user`, which is the other half nobody had:
# `panel:permissions sync` creates an Administrator ROLE and no person to hold
# it, so a fresh install was a sign-in screen with nobody who could use it.
# ---------------------------------------------------------------------------
say "Checking the sign-in screen renders"
cat > verify-login.php <<'LOGIN'
<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$res = $kernel->handle(Illuminate\Http\Request::create('/login', 'GET'));
echo $res->getStatusCode(), PHP_EOL;
LOGIN
login_status="$(php verify-login.php 2>/dev/null | tail -1)"
rm -f verify-login.php

[[ "$login_status" == "200" ]] \
    || fail "/login returned $login_status - the generated sign-in screen does not render."

say "/login resolved with HTTP 200"

# THE ACCOUNT. Non-interactive on purpose: `panel:make-user` REFUSES to take a
# password as an argument, so this asserts the refusal rather than working
# around it, and creates the row directly for the sign-in test below.
say "Checking panel:make-user refuses a non-interactive run"
if php artisan panel:make-user --name=Ada --email=ada@example.test --no-interaction >/dev/null 2>&1; then
    fail "panel:make-user created an account without an interactive password prompt."
fi

say "It refused, as designed"

say "Creating an account and signing in with it"
cat > verify-signin.php <<'SIGNIN'
<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$model = config('auth.providers.users.model');
$model::query()->create([
    'name' => 'Ada',
    'email' => 'ada@example.test',
    'password' => Illuminate\Support\Facades\Hash::make('correct-horse-battery'),
]);

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

// A GET first, for the session and the CSRF token - posting without them is a
// 419 that has nothing to do with the credentials.
$get = $kernel->handle(Illuminate\Http\Request::create('/login', 'GET'));
$token = csrf_token();

$post = Illuminate\Http\Request::create('/login', 'POST', [
    'email' => 'ada@example.test',
    'password' => 'correct-horse-battery',
    '_token' => $token,
]);
$post->setLaravelSession(app('session.store'));

$res = $kernel->handle($post);

echo 'status=', $res->getStatusCode(), PHP_EOL;
echo 'location=', (string) $res->headers->get('Location'), PHP_EOL;
echo 'authenticated=', Illuminate\Support\Facades\Auth::check() ? 'yes' : 'no', PHP_EOL;
SIGNIN
signin="$(php verify-signin.php 2>&1)"
rm -f verify-signin.php

echo "$signin"

grep -q 'authenticated=yes' <<<"$signin" \
    || fail "The generated sign-in did not authenticate a real account:
$signin"

say "Signed in through the generated login"

# ---------------------------------------------------------------------------
# AND THE SCREEN IT LANDS ON.
#
# `location=/dashboard` above proves where the redirect POINTS. It does not
# prove anything is there - and for most of this package's life nothing was:
# `DashboardPage` shipped ABSTRACT, with nine widget classes and a screen to
# draw them and nothing that extended it, so a fresh installation signed in and
# arrived at the application's welcome page or a resource list. The complaint
# was "why does it not open on a dashboard?", and the answer was that the
# dashboard was a class nobody had been told to subclass.
#
# `panel:install` writes one now, so this asserts the whole chain: the file, the
# route, a 200, and the packaged component actually named in the payload.
say "Checking the installed dashboard renders"

[ -f app/Panel/Pages/DashboardPage.php ] \
    || fail "panel:install wrote no app/Panel/Pages/DashboardPage.php - a fresh install has no dashboard."

cat > verify-dashboard.php <<'HIT'
<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$user = (config('auth.providers.users.model'))::query()->first();
Illuminate\Support\Facades\Auth::login($user);

$response = $kernel->handle(Illuminate\Http\Request::create('/dashboard', 'GET'));

echo $response->getStatusCode(), ' ';
echo str_contains((string) $response->getContent(), 'PanelDashboard') ? 'PanelDashboard' : 'no-component';
echo PHP_EOL;
HIT
dashboard_result="$(php verify-dashboard.php 2>/dev/null | tail -1)"
rm -f verify-dashboard.php

case "$dashboard_result" in
    "200 PanelDashboard") say "/dashboard renders the packaged dashboard" ;;
    200*) fail "/dashboard answers 200 but does not render PanelDashboard - got: $dashboard_result" ;;
    "")   fail "/dashboard could not be requested at all." ;;
    *)    fail "/dashboard answered: $dashboard_result" ;;
esac

# ---------------------------------------------------------------------------
# AND THE ERROR SCREEN, for the same reason.
#
# `errors/Error` was exported from `@panelkit/inertia`, had a page file written
# by `panel:install`, and had NOTHING RENDERING IT - so every installation but
# the reference app showed Laravel's default 404 next to a designed one it had
# already downloaded.
say "Checking a 404 inside the panel gets the panel's error screen"

cat > verify-error.php <<'HIT'
<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(Illuminate\Http\Request::create('/no-such-page', 'GET'));

echo $response->getStatusCode(), ' ';
echo str_contains((string) $response->getContent(), 'errors/Error') ? 'errors/Error' : 'framework-page';
echo PHP_EOL;
HIT
error_result="$(php verify-error.php 2>/dev/null | tail -1)"
rm -f verify-error.php

case "$error_result" in
    "404 errors/Error") say "a 404 renders the panel error screen, with its status intact" ;;
    *) fail "a 404 did not reach the packaged error screen - got: $error_result" ;;
esac

# AND THE SCREEN THAT OPERATES IT - CHECKED AFTER THE LOGIN ROUTE EXISTS.
#
# This block sat above that step at first and reported a 500 that had nothing to
# do with roles: an auth-guarded route reached by a guest redirects to
# `route('login')`, and in an app with no auth scaffolding that throws
# `Route [login] not defined`. Which is the very trap documented a few lines up,
# walked into by the check that was added to avoid trusting anything.
# The package mounts the permission matrix by
# default - `panel.routes.roles` - because shipping roles, a model and a
# reconciler while leaving the screen unrouted means a permission system nobody
# can use without writing a controller first. The reference app turns this off
# and mounts its own, so this is the only place the default is exercised.
say "Checking the roles screen is routed"
cat > verify-roles.php <<'HIT'
<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
echo $kernel->handle(Illuminate\Http\Request::create('/roles', 'GET'))->getStatusCode(), PHP_EOL;
HIT
roles_status="$(php verify-roles.php 2>/dev/null | tail -1)"
rm -f verify-roles.php

case "$roles_status" in
    404) fail "/roles is not routed - the package ships a permission matrix nobody can open." ;;
    5*)  fail "/roles is routed but returns $roles_status." ;;
    "")  fail "/roles could not be requested at all." ;;
esac

say "/roles resolved with HTTP $roles_status"

# ---------------------------------------------------------------------------
# ANNOUNCEMENTS, WHICH ARRIVE SWITCHED ON.
#
# UNLIKE TICKETING, THIS NEEDS NO CONFIGURATION - so the package registers the
# plugin and the resource simply exists. Which makes this the only place the
# DEFAULT `plugins` array is exercised at all: the reference app has a published
# config, so its own list wins whole and the packaged default never runs there.
#
# THE ABILITY IS THE HONEST CHECK, not the class being autoloadable. A resource
# that is registered has ability names derived from its key, so
# `view_any_announcements` existing after `panel:permissions sync` proves the
# plugin was applied to a panel rather than merely present on disk.
# ---------------------------------------------------------------------------
say "Checking announcements arrived, registered and permissioned"
cat > verify-announcements.php <<'ANN'
<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Schema;

$panels = app(PanelKit\Panel\PanelManager::class);

$checks = [
    'the table' => Schema::hasTable('panel_announcements'),
    'the resource is registered' => array_key_exists('announcements', $panels->resources()),
    'its ability exists' => in_array('view_any_announcements', PanelKit\Panel\Support\Abilities::all(), true),
    'the model has a policy' => Illuminate\Support\Facades\Gate::getPolicyFor(
        PanelKit\Panel\Alerts\Announcement::class,
    ) instanceof PanelKit\Panel\Alerts\AnnouncementPolicy,
    'it stays out of the sidebar' => PanelKit\Panel\Alerts\AnnouncementResource::showsInNavigation() === false,
];

foreach ($checks as $what => $ok) {
    echo ($ok ? 'ok   ' : 'MISS '), $what, PHP_EOL;
}

echo in_array(false, $checks, true) ? 'VERDICT fail' : 'VERDICT pass', PHP_EOL;
ANN
announcements="$(php verify-announcements.php 2>&1)"
rm -f verify-announcements.php

echo "$announcements"
grep -q 'VERDICT pass' <<<"$announcements" \
    || fail "announcements did not arrive on a clean install - the package registers the plugin itself, so this is the default path failing."

# AND THE GENERATED POLICY DENIES. It used to permit any authenticated user and
# print a warning; a resource generated by the tool was readable by everybody
# until somebody acted on a line of console output.
say "Checking the generated policy denies rather than permits"
grep -q 'extends TenantResourcePolicy' app/Policies/CustomerPolicy.php \
    || fail "The generated policy does not extend the packaged base."
grep -q 'return true;' app/Policies/CustomerPolicy.php \
    && fail "The generated policy grants something unconditionally."

say "CustomerPolicy extends the packaged base and grants nothing on its own"

# ---------------------------------------------------------------------------
# TICKETING, WHICH ARRIVES SWITCHED OFF AND MUST STILL ARRIVE.
#
# THIS IS THE ONLY PLACE THE PACKAGED MIGRATION RUNS. Inside the monorepo the
# reference app built `tickets` / `ticket_replies` long before the package owned
# them and config points at those, so the migration this ships takes the branch
# where the table already exists - in every one of the 1,596 tests. A fresh app
# is the first database it has ever actually created a table in.
#
# AND OFF IS A REAL STATE, not an absence. With neither panel named, nothing
# mounts: no route, no navigation entry, no screen. That is the correct posture
# for an installation that did not ask for a support desk, and it is also
# indistinguishable from a plugin that silently failed to register - so both
# halves are checked here rather than one.
# ---------------------------------------------------------------------------
say "Checking the ticket tables were created"
cat > verify-tickets.php <<'TIX'
<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Schema;

$checks = [
    'panel_tickets' => Schema::hasTable('panel_tickets'),
    'panel_ticket_replies' => Schema::hasTable('panel_ticket_replies'),
    'the reply thread has a body' => Schema::hasColumn('panel_ticket_replies', 'body'),
    'an internal note is distinguishable' => Schema::hasColumn('panel_ticket_replies', 'visibility'),
    'the first-response clock has somewhere to live' => Schema::hasColumn('panel_tickets', 'first_response_at'),
    'nothing mounted, because no panel was named'
        => ! array_key_exists('tickets', app(PanelKit\Panel\PanelManager::class)->resources()),
];

foreach ($checks as $what => $ok) {
    echo ($ok ? 'ok   ' : 'MISS '), $what, PHP_EOL;
}

echo in_array(false, $checks, true) ? 'VERDICT fail' : 'VERDICT pass', PHP_EOL;
TIX
tickets="$(php verify-tickets.php 2>&1)"
rm -f verify-tickets.php

echo "$tickets"
grep -q 'VERDICT pass' <<<"$tickets" \
    || fail "the packaged ticketing migration did not produce a usable schema on a clean install."

# NOW TURN IT ON, which is the half that matters: the tables are worth nothing
# if naming a panel does not produce a screen.
#
# A SECOND PORTAL IS GENERATED FIRST, because the plugin refuses one end without
# the other and is right to - a queue nobody can write to and a form nobody
# reads both return 200. So this is also the only end-to-end proof that
# `make:panel` produces a portal a package can install into.
say "Generating a customer portal for the other end of ticketing"
php artisan make:panel portal --path=portal --no-interaction 2>&1 | tail -3

operator_panel="$(php -r '
require __DIR__."/vendor/autoload.php";
$app = require_once __DIR__."/bootstrap/app.php";
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();
echo array_key_first(app(PanelKit\Panel\PanelManager::class)->panels());
')"

say "Turning ticketing on ($operator_panel + portal) and checking the queue routes"
{
    printf '\nPANEL_TICKETING_OPERATOR=%s\n' "$operator_panel"
    printf 'PANEL_TICKETING_OPENER=portal\n'
} >> .env

php artisan config:clear >/dev/null 2>&1 || true

cat > verify-queue.php <<'HIT'
<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
echo $kernel->handle(Illuminate\Http\Request::create('/tickets', 'GET'))->getStatusCode(), PHP_EOL;
HIT
tickets_status="$(php verify-queue.php 2>/dev/null | tail -1)"
rm -f verify-queue.php

case "$tickets_status" in
    404) fail "ticketing was configured and /tickets is still unrouted - the plugin did not mount." ;;
    5*)  fail "/tickets is routed but returns $tickets_status on a clean install." ;;
    "")  fail "/tickets could not be requested at all." ;;
esac

say "/tickets resolved with HTTP $tickets_status"

# ---------------------------------------------------------------------------
# THE UPGRADE PATH, on the only kind of installation that can prove it.
#
# Everything above verifies `composer require`. `panel:update` is what somebody
# runs AFTER that, on every release from then on - and it is the command with
# the most to touch: it writes page files, invalidates the schema cache, reads
# the application's published `config/panel.php` and ends by running doctor.
#
# NONE OF THAT CAN BE TRUSTED FROM INSIDE THE MONOREPO, for the same reason the
# rest of this script exists: there the package is a symlink and the config is
# the playground's, edited by hand over months. A fresh application is the only
# place where "the published config matches the package" is a fact rather than
# an accident, so it is the only place a drift report can be checked against a
# known answer.
#
# ITS EXIT CODE IS DOCTOR'S, and this fixture FAILS doctor on purpose. A bare
# `laravel/laravel` publishes Spatie's config with `teams => false` while the
# panel's tenancy mode defaults to `column`, which is fail-open - a role would
# grant across every organisation at once - so doctor errors and `panel:update`
# returns non-zero. That is the design working, not a break, and asserting a
# zero here would mean asserting that doctor stays quiet about it.
#
# So the exit code is CAPTURED rather than trusted, and what is checked is what
# each step reported.
# ---------------------------------------------------------------------------
say "php artisan panel:update"

update_output="$(php artisan panel:update 2>&1)" && update_status=0 || update_status=$?

# A BARE LARAVEL IS NOT AN INERTIA APPLICATION, so there is no
# `resources/js/pages` to write into and the command has to say so rather than
# claim success. Whichever answer it gives, it must be about the page files -
# silence there is the failure this command exists to prevent.
# THREE ACCEPTABLE ANSWERS, and the third is the interesting one. Turning
# ticketing on above routes `TicketAnalysis`, so a correct `panel:update` WRITES
# a page file here rather than finding them complete - and an assertion that
# only accepted the idle answers failed the command for doing its job.
case "$update_output" in
    *"page files already complete"*|*"no resources/js/pages directory"*|*"new page file(s)"*) ;;
    *) fail "panel:update said nothing about page files, which is the reason it exists:
$update_output" ;;
esac

case "$update_output" in
    *"invalidated the schema cache"*) ;;
    *) fail "panel:update did not invalidate the schema cache - an upgrade would serve the old schema shape:
$update_output" ;;
esac

# A config published minutes ago by `panel:install` cannot be missing a key.
# Anything reported here is the CHECK being wrong, not the installation.
case "$update_output" in
    *"config key(s) missing"*) fail "panel:update reports config drift against a config it just published, so the check is wrong:
$update_output" ;;
esac

# AND THE EXIT CODE IS DOCTOR'S. Non-zero is expected here, for the fail-open
# permission config a bare Laravel ships; what would be wrong is doctor passing
# a fixture nobody configured, which would mean it had stopped looking.
if [ "$update_status" -eq 0 ]; then
    fail "panel:update exited zero on an unconfigured install - doctor should have refused a fail-open permission config."
fi

case "$update_output" in
    *"Permissions are not tenant-scoped"*) ;;
    *) fail "panel:update exited $update_status for a reason other than the expected permission-scoping error:
$update_output" ;;
esac

say "panel:update reconciles what it should, and carries doctor's non-zero verdict on an unconfigured install"

echo
echo "PASS - panelkit/panel installs into a fresh Laravel app, is discovered,"
echo "       installs its pages, generates a resource, routes it, and survives"
echo "       panel:update."
