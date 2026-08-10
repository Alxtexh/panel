#!/usr/bin/env bash
#
# Split the monorepo's packages into standalone repositories.
#
# Composer and npm both install from the ROOT of a repository. Neither can be
# pointed at packages/panel inside a monorepo, so a version of Alxtexhpanel
# that anybody can `composer require` has to exist as its own repository with
# its own tags. `git subtree split` rewrites the history of one subdirectory
# into a branch whose root IS that directory - the commits are preserved, so
# the split repository has real history rather than one squashed import.
#
# This script produces those branches and, if you pass --push, sends them to
# the remotes named below. It does not create the remote repositories and it
# does not tag them; both are deliberate (see the notes at the bottom).
#
# Usage:
#   scripts/split.sh                      # build the split branches locally
#   scripts/split.sh --push               # ...and push them to their remotes
#   scripts/split.sh --push --tag v0.1.0  # ...and push that tag to each
#
# Configure the destinations by exporting these before running, or by editing
# the defaults. They are deliberately NOT hardcoded to a real repository: a
# split pushed to the wrong place rewrites somebody else's main branch.
#
#   ALXTEXHPANEL_PANEL_REMOTE   git remote for packages/panel
#   ALXTEXHPANEL_UI_REMOTE      git remote for packages/ui (the npm package)

set -euo pipefail

PANEL_REMOTE="${ALXTEXHPANEL_PANEL_REMOTE:-}"
UI_REMOTE="${ALXTEXHPANEL_UI_REMOTE:-}"

PUSH=false
TAG=""

while [[ $# -gt 0 ]]; do
    case "$1" in
        --push) PUSH=true; shift ;;
        --tag)  TAG="${2:-}"; shift 2 ;;
        -h|--help) sed -n '2,30p' "$0" | sed 's/^# \?//'; exit 0 ;;
        *) echo "Unknown argument: $1" >&2; exit 2 ;;
    esac
done

cd "$(dirname "$0")/.."

# A split reads committed history, not the working tree. Splitting with
# uncommitted changes silently produces a package WITHOUT them, which looks like
# the split dropped your work.
if [[ -n "$(git status --porcelain)" ]]; then
    echo "Working tree is not clean. Commit or stash first - a subtree split" >&2
    echo "reads history, so uncommitted changes would be silently omitted." >&2
    exit 1
fi

split_one() {
    local prefix="$1" branch="$2" remote="$3"

    echo
    echo "==> ${prefix}"

    # --rejoin is deliberately absent. It writes a merge commit back into the
    # monorepo to speed up later splits, and that commit is noise in the history
    # of a repository whose whole point is being readable. Splits are seconds on
    # a repository this size.
    # 2>/dev/null drops the per-commit progress counter, which is several
    # hundred lines of carriage-returned noise in a log or a CI transcript.
    git subtree split --prefix="${prefix}" -b "${branch}" >/dev/null 2>/dev/null
    echo "    branch ${branch} ($(git rev-list --count "${branch}") commits)"

    if [[ "$PUSH" != true ]]; then
        echo "    not pushed (pass --push)"
        return
    fi

    if [[ -z "$remote" ]]; then
        echo "    NO REMOTE CONFIGURED - skipped." >&2
        echo "    Set the matching ALXTEXHPANEL_*_REMOTE variable to push this one." >&2
        return
    fi

    # NEVER THE MONOREPO ITSELF. The push below writes the split branch over the
    # DESTINATION'S `main`, which is right for a mirror repository whose whole
    # content is that one package - and catastrophic for the repository being
    # split, where `main` is the monorepo. Pointing this at `origin` replaced
    # the monorepo's main branch with the contents of `packages/ui`, and moved
    # the release tag with it. It took one mistyped variable and no confirmation.
    #
    # COMPARED BY RESOLVED URL, not by name, because `origin`, the same URL
    # spelt out in full, and any other remote pointing at it are all the same
    # repository and all equally wrong.
    local here destination
    here="$(git remote get-url origin 2>/dev/null || echo '')"
    destination="$(git remote get-url "${remote}" 2>/dev/null || echo "${remote}")"

    if [[ -n "$here" && "$destination" == "$here" ]]; then
        echo >&2
        echo "    REFUSING: ${remote} resolves to this repository." >&2
        echo "    A split is pushed over the destination's main branch, so this" >&2
        echo "    would replace the monorepo with the contents of ${prefix}." >&2
        echo "    Each package needs its OWN repository." >&2
        exit 1
    fi

    # Force, because a split branch is REGENERATED from scratch every time: its
    # commit ids differ from the previous split's even when the content is
    # identical, so it is never a fast-forward. This is safe only because the
    # destination repository is a mirror that nobody commits to directly. If
    # somebody has been committing to the split repo, this discards that - which
    # is why the remotes are not hardcoded.
    git push --force "${remote}" "${branch}:main"
    echo "    pushed to ${remote} main"

    if [[ -n "$TAG" ]]; then
        # The tag has to point at the SPLIT commit, not the monorepo commit -
        # the monorepo commit does not exist in the destination repository.
        git tag -f "${TAG}-${branch}" "${branch}" >/dev/null
        git push --force "${remote}" "${TAG}-${branch}:refs/tags/${TAG}"
        git tag -d "${TAG}-${branch}" >/dev/null
        echo "    tagged ${TAG}"
    fi
}

split_one packages/panel split-panel "$PANEL_REMOTE"
split_one packages/ui    split-ui    "$UI_REMOTE"

echo
if [[ "$PUSH" != true ]]; then
    cat <<'EOF'
Built the split branches. Nothing was pushed.

Inspect one before trusting it:

    git log --oneline split-panel | head
    git ls-tree --name-only split-panel

Then push with:

    ALXTEXHPANEL_PANEL_REMOTE=<url> scripts/split.sh --push --tag v0.1.0
EOF
else
    echo "Done."
fi

# Two things this script deliberately does not do.
#
# It does not create the destination repositories. Creating a repository is an
# outward-facing action against an account, and it needs a token this script has
# no business holding.
#
# It does not tag the MONOREPO. `git tag v0.1.0` here is one line and belongs in
# a release commit, not in a script that rewrites history - a script that both
# splits and tags will eventually tag a split that was wrong.
