#!/usr/bin/env bash
#
# Install both packages the way a stranger would, and build against them.
#
# THIS REPOSITORY CANNOT SEE ITS OWN PUBLISHED PACKAGES. `apps/playground`
# aliases `@alxtexh-enterprise/panel` to `packages/ui/src/index.ts` and
# `@alxtexh-enterprise/panel/inertia` to `packages/ui/inertia/` - deliberately,
# because otherwise every edit in `packages/ui` would need a rebuild before the
# application could see it. The consequence is that `npm run build` here
# compiles the SOURCE and never once loads `dist/`, which is the only thing a
# consumer gets.
#
# The PHP half has the same shape: the playground requires `packages/panel` as a
# path repository, so it reads the working tree rather than the archive
# `.gitattributes` prunes.
#
# So every check in this repository can pass while the published packages are
# broken. That is not hypothetical - the FIRST run of this script found
# `Toaster.vue` doing `defineProps<ToasterProps>()` with the type imported from
# `vue-sonner`. `inertia/` ships as source, a consumer compiles it out of
# `node_modules`, and `@vue/compiler-sfc` cannot resolve a type across a package
# boundary from there:
#
#     No fs option provided to `compileScript` in non-Node environment.
#
# Every consumer build failed on the first screen. Nothing here could tell,
# because the playground compiles that same file as ordinary source.
#
# WHAT IT DOES
#
#   npm      pack the real tarball, install it into a scratch Vite project, and
#            BUILD - importing the compiled entry, the source entry and a deep
#            subpath. A build is the test, because resolution alone would not
#            have caught the failure above.
#
#   composer archive the package as GitHub's zipball endpoint would, assert the
#            dev files are pruned, install it into a scratch project and resolve
#            classes through the published autoload.
#
# Usage:
#   scripts/verify-install.sh              # both halves
#   scripts/verify-install.sh --npm        # only the npm package
#   scripts/verify-install.sh --composer   # only the composer package
#
# Exit 0 means a stranger can install and build. Anything else says which half
# failed and leaves the log path.

set -uo pipefail

cd "$(dirname "$0")/.."
ROOT="$PWD"

DO_NPM=true
DO_COMPOSER=true

while [[ $# -gt 0 ]]; do
    case "$1" in
        --npm) DO_COMPOSER=false; shift ;;
        --composer) DO_NPM=false; shift ;;
        -h|--help) sed -n '2,48p' "$0" | sed 's/^# \?//'; exit 0 ;;
        *) echo "Unknown argument: $1" >&2; exit 2 ;;
    esac
done

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

FAILED=0

# --------------------------------------------------------------------- npm ---

if [[ "$DO_NPM" == true ]]; then
    echo "==> Packing @alxtexh-enterprise/panel"

    # `npm pack` runs `prepack`, which rebuilds `dist` - so this cannot pass
    # against a stale build that happens to still be lying around.
    if ! (cd "$ROOT/packages/ui" && npm pack --pack-destination "$WORK" > "$WORK/pack.log" 2>&1); then
        echo "FAILED: npm pack" >&2
        tail -20 "$WORK/pack.log" >&2
        exit 1
    fi

    TARBALL="$(ls "$WORK"/*.tgz | head -1)"
    echo "    $(basename "$TARBALL")"

    mkdir -p "$WORK/consumer/src"

    cat > "$WORK/consumer/package.json" <<'JSON'
{ "name": "install-probe", "private": true, "type": "module", "version": "0.0.0" }
JSON

    cat > "$WORK/consumer/vite.config.js" <<'JS'
import vue from '@vitejs/plugin-vue';

export default {
    plugins: [vue()],
    build: { rollupOptions: { input: 'src/main.ts' } },
    logLevel: 'error',
};
JS

    # ALL THREE ENTRY SHAPES, because they fail independently. `.` is compiled
    # and could break in the build; `./inertia` ships as source and is compiled
    # by the CONSUMER; the deep subpath depends on the export map's ordering,
    # which has been wrong before - a bare alias once swallowed every subpath.
    cat > "$WORK/consumer/src/main.ts" <<'TS'
import { cn, DataTable, ThemeToggle } from '@alxtexh-enterprise/panel';
import { ResourceIndex, AuthLayout } from '@alxtexh-enterprise/panel/inertia';
import PanelWidgets from '@alxtexh-enterprise/panel/components/widgets/PanelWidgets.vue';

console.log(typeof cn, !!DataTable, !!ThemeToggle, !!ResourceIndex, !!AuthLayout, !!PanelWidgets);
TS

    echo "==> Installing it into a scratch Vite project (this takes a moment)"

    # NO `typescript`, DELIBERATELY. A consumer should not need it, and needing
    # it was a symptom of the imported-type bug rather than a requirement.
    if ! (cd "$WORK/consumer" && npm install "$TARBALL" \
            vue @inertiajs/vue3 vue-sonner vite @vitejs/plugin-vue \
            --no-audit --no-fund > "$WORK/npm-install.log" 2>&1); then
        echo "FAILED: npm install of the tarball" >&2
        tail -25 "$WORK/npm-install.log" >&2
        exit 1
    fi

    echo "==> Building a consumer against it"

    if (cd "$WORK/consumer" && npx vite build > "$WORK/vite-build.log" 2>&1); then
        echo "    PASS: the published tarball builds in a consumer."
    else
        echo >&2
        echo "FAILED: a consumer cannot build against the published package." >&2
        echo "This is the failure this script exists for - it is invisible to" >&2
        echo "every check in this repository, because the playground compiles" >&2
        echo "packages/ui from source rather than from the tarball." >&2
        echo >&2
        head -30 "$WORK/vite-build.log" >&2
        FAILED=1
    fi
fi

# ---------------------------------------------------------------- composer ---

if [[ "$DO_COMPOSER" == true ]]; then
    echo
    echo "==> Archiving alxtexh-enterprise/panel as a registry would"

    # `git archive` is what GitHub's zipball endpoint runs and where Composer
    # gets a dist, so it is the only view in which `.gitattributes` applies.
    ARCHIVE="$WORK/panel.tar"

    if ! git archive HEAD:packages/panel > "$ARCHIVE" 2>"$WORK/archive.log"; then
        echo "FAILED: git archive (commit your changes first - it reads HEAD)" >&2
        cat "$WORK/archive.log" >&2
        exit 1
    fi

    # LISTED ONCE INTO A FILE, not piped into each check.
    #
    # `tar -tf … | grep -q …` is wrong under `pipefail`: `grep -q` exits the
    # moment it matches, `tar` then dies of SIGPIPE, and the pipeline reports
    # failure. It fails for the entries that ARE present and passes for the ones
    # that are not - so the checks below all read backwards, and this script's
    # first run duly announced that the package had no `composer.json` while
    # Composer was installing it two lines later.
    LISTING="$WORK/listing.txt"
    tar -tf "$ARCHIVE" > "$LISTING"

    # THE DEV FILES MUST BE PRUNED. Without `.gitattributes` every installation
    # downloads the package's own test suite, which it cannot run because the
    # tools are `require-dev` and a dependency's dev requirements are never
    # installed.
    for unwanted in tests/ phpunit.xml testbench.yaml composer.lock; do
        if grep -q "^${unwanted}" "$LISTING"; then
            echo "FAILED: [${unwanted}] is in what a consumer downloads." >&2
            FAILED=1
        fi
    done

    for required in composer.json src/ config/ resources/; do
        if ! grep -q "^${required}" "$LISTING"; then
            echo "FAILED: [${required}] is missing from what a consumer downloads." >&2
            FAILED=1
        fi
    done

    mkdir -p "$WORK/pkg" "$WORK/php-consumer"
    tar -xf "$ARCHIVE" -C "$WORK/pkg"

    # A repository Composer can resolve a version from. Tagged, because an
    # untagged repository offers only `dev-main` and would not exercise the
    # constraint a real consumer writes.
    (
        cd "$WORK/pkg"
        git init -q
        git config user.email probe@example.test
        git config user.name Probe
        git add -A
        git commit -qm "packaged"
        git tag v0.9.6
    ) > "$WORK/pkg-git.log" 2>&1

    cat > "$WORK/php-consumer/composer.json" <<JSON
{
    "name": "probe/install-consumer",
    "repositories": [{ "type": "vcs", "url": "$WORK/pkg" }],
    "require": { "alxtexh-enterprise/panel": "^0.9" },
    "minimum-stability": "stable"
}
JSON

    echo "==> Installing it into a scratch project"

    if ! (cd "$WORK/php-consumer" && composer install --no-interaction --quiet \
            > "$WORK/composer-install.log" 2>&1); then
        echo "FAILED: composer install" >&2
        tail -25 "$WORK/composer-install.log" >&2
        exit 1
    fi

    echo "==> Resolving classes through the published autoload"

    RESOLVE=$(cd "$WORK/php-consumer" && php -r '
        require "vendor/autoload.php";

        $missing = [];

        foreach ([
            "Alxtexh\\Panel\\PanelServiceProvider",
            "Alxtexh\\Panel\\Panel",
            "Alxtexh\\Panel\\Resources\\Resource",
            "Alxtexh\\Panel\\Commands\\MakePanelCommand",
        ] as $class) {
            if (! class_exists($class) && ! trait_exists($class)) {
                $missing[] = $class;
            }
        }

        $manifest = json_decode(file_get_contents("vendor/alxtexh-enterprise/panel/composer.json"), true);

        if (($manifest["extra"]["laravel"]["providers"][0] ?? null) === null) {
            $missing[] = "(no Laravel auto-discovery declared)";
        }

        echo $missing === [] ? "OK" : "MISSING: ".implode(", ", $missing);
    ' 2>&1)

    if [[ "$RESOLVE" == "OK" ]]; then
        echo "    PASS: the published package installs and autoloads."
    else
        echo "FAILED: ${RESOLVE}" >&2
        FAILED=1
    fi
fi

echo

if [[ "$FAILED" -eq 0 ]]; then
    # Named rather than generalised: a run with `--npm` proves nothing about the
    # composer package, and a summary claiming otherwise is the kind of thing
    # somebody quotes later.
    if [[ "$DO_NPM" == true && "$DO_COMPOSER" == true ]]; then
        echo "PASS: a stranger can install both packages and build against them."
    elif [[ "$DO_NPM" == true ]]; then
        echo "PASS: the npm package installs and builds. The composer half was NOT checked."
    else
        echo "PASS: the composer package installs and autoloads. The npm half was NOT checked."
    fi

    exit 0
fi

echo "FAILED - see the output above." >&2
exit 1
