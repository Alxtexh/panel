#!/usr/bin/env bash
#
# Build a bundle for a machine that cannot reach GitHub at all.
#
# WHY A SCRIPT RATHER THAN A FEW COMMANDS. The last bundle was assembled by
# hand, and by the time it reached the machine it was a release behind - which
# is the same failure the vendored tarball exists to prevent, reintroduced one
# level up. Anything assembled by hand drifts; anything generated does not.
#
# WHAT IT DELIBERATELY DOES NOT INCLUDE: a standalone copy of the client
# tarball. It is already inside the Composer archive, and shipping a second
# copy invites somebody to install the wrong one. One artifact, one place.
#
# The version comes from packages/ui/package.json, and `ClientTarballTest`
# guarantees the vendored client matches it - so this cannot label a bundle
# with a version it does not contain.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$ROOT/dist"

VERSION="$(node -p "require('$ROOT/packages/ui/package.json').version")"
CLIENT="$ROOT/packages/panel/client/panelkit-client.tgz"

say() { printf '\033[36m==>\033[0m %s\n' "$1"; }
fail() { printf '\033[31mFAIL:\033[0m %s\n' "$1" >&2; exit 1; }

[[ -f "$CLIENT" ]] || fail "packages/panel/client/panelkit-client.tgz is missing - the package ships no client half."

# THE SHIPPED CLIENT DECIDES, NOT package.json. If these disagree the bundle
# would be labelled one version and contain another, which is worse than
# refusing to build: somebody installs it and the mismatch surfaces as a screen
# that renders slightly wrong.
SHIPPED="$(tar xzOf "$CLIENT" package/package.json | node -p "JSON.parse(require('fs').readFileSync(0,'utf8')).version")"
[[ "$SHIPPED" == "$VERSION" ]] || fail "packages/ui is $VERSION but the vendored client is $SHIPPED. Repack: cd packages/ui && npm pack --pack-destination ../panel/client && mv ../panel/client/alxtexh-enterprise-panel-*.tgz ../panel/client/panelkit-client.tgz"

# A DIRTY TREE MEANS THE ARCHIVE AND THE DOCS DISAGREE. `git archive` reads
# committed history; the docs below are copied from the working tree. Building
# from a dirty tree ships an archive that is missing whatever is uncommitted,
# with documentation that describes it.
[[ -z "$(git -C "$ROOT" status --porcelain)" ]] || fail "Working tree is not clean - git archive reads committed history, so the bundle would not match the docs beside it."

STAGE="$OUT/staging"
rm -rf "$STAGE"
mkdir -p "$STAGE"

say "Bundling PanelKit $VERSION"

# BOTH HALVES IN ONE FILE. The client tarball is inside packages/panel/client,
# so this archive carries it - which is the entire point of the 0.9.2 change.
git -C "$ROOT" archive --format=tar.gz \
    --prefix=panelkit-panel/ \
    -o "$STAGE/panelkit-panel-$VERSION.tar.gz" \
    HEAD:packages/panel

tar tzf "$STAGE/panelkit-panel-$VERSION.tar.gz" | grep -q 'client/panelkit-client.tgz' \
    || fail "The Composer archive does not contain the client half. An install from it would render blank."

for doc in PANELKIT.md UPGRADING.md CHANGELOG.md; do
    cp "$ROOT/$doc" "$STAGE/"
done

sed -e "s/__VERSION__/$VERSION/g" "$ROOT/scripts/staging-install.md.tpl" > "$STAGE/INSTALL-ON-STAGING.md"

(cd "$STAGE" && sha256sum ./*.tar.gz > CHECKSUMS.txt)

BUNDLE="$OUT/panelkit-$VERSION-staging.tar.gz"
rm -f "$BUNDLE"
(cd "$OUT" && tar czf "$(basename "$BUNDLE")" staging/)

say "Wrote $BUNDLE"
sha256sum "$BUNDLE"
printf '\n'
tar tzf "$BUNDLE"
