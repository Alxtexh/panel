#!/usr/bin/env bash
#
# Fail when stub, kit, and playground CSS drift on critical blocks.
#
# Exit 0 when all three define form gap, landing typography, and status tokens.
# Exit 1 with a short fix hint when not.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "${ROOT}/packages/panel"
[ -d vendor ] || composer install --no-interaction --no-progress >/dev/null
vendor/bin/pest tests/Feature/StylesheetParityTest.php --no-coverage
