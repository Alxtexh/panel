#!/usr/bin/env bash
#
# PanelKit local environment bootstrap — the irreducible minimum.
#
# Installs only what cannot be deferred: PHP 8.4, Composer 2, Node 22 LTS.
# No database engine, no performance tuning — both are deferred decisions and
# get their own scripts once they are actually made:
#
#   scripts/bootstrap-db.sh    written when the database engine is chosen (Phase 1)
#   scripts/tune-php.sh        written when we start measuring (Phase 8)
#
# Phase 0 runs on SQLite, which ships inside PHP and commits us to nothing.
#
# LOCAL ONLY. Never contacts a remote host.
# Idempotent — safe to re-run. Read it before you run it.
#
set -euo pipefail

log()  { printf '\n\033[1;36m==>\033[0m %s\n' "$*"; }
skip() { printf '    \033[2m(already present, skipping)\033[0m %s\n' "$*"; }

if [[ $EUID -eq 0 ]]; then
  echo "Run as your normal user, not root. The script calls sudo where it needs to." >&2
  exit 1
fi

# Pop!_OS reports ID=pop; the PPA needs the Ubuntu codename it is based on.
# shellcheck disable=SC1091
UBUNTU_CODENAME="$(. /etc/os-release && echo "${UBUNTU_CODENAME:-noble}")"
log "Base distribution codename: ${UBUNTU_CODENAME}"

# ---------------------------------------------------------------------------
# 1. PHP 8.4
#    sqlite3 is included so Phase 0 has a working database with no stack
#    decision attached. pgsql/mysql extensions get added by bootstrap-db.sh
#    once you have actually chosen.
# ---------------------------------------------------------------------------
if command -v php8.4 >/dev/null 2>&1; then
  skip "php8.4"
else
  log "Adding ondrej/php PPA and installing PHP 8.4"
  sudo apt-get install -y software-properties-common ca-certificates curl gnupg

  # add-apt-repository derives the codename from the distro, which is wrong on
  # Pop!_OS, so the source is written explicitly against the Ubuntu codename.
  sudo install -d -m 0755 /etc/apt/keyrings
  curl -fsSL 'https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x14aa40ec0831756756d7f66c4f4ea0aae5267a6c' \
    | sudo gpg --dearmor --yes -o /etc/apt/keyrings/ondrej-php.gpg
  echo "deb [signed-by=/etc/apt/keyrings/ondrej-php.gpg] https://ppa.launchpadcontent.net/ondrej/php/ubuntu ${UBUNTU_CODENAME} main" \
    | sudo tee /etc/apt/sources.list.d/ondrej-php.list >/dev/null

  sudo apt-get update
  sudo apt-get install -y \
    php8.4-cli php8.4-sqlite3 php8.4-mbstring php8.4-xml php8.4-curl \
    php8.4-zip php8.4-bcmath php8.4-intl php8.4-gd

  sudo update-alternatives --set php /usr/bin/php8.4 >/dev/null 2>&1 || true
fi

# ---------------------------------------------------------------------------
# 2. Composer 2
# ---------------------------------------------------------------------------
if command -v composer >/dev/null 2>&1; then
  skip "composer"
else
  log "Installing Composer 2"
  EXPECTED="$(curl -fsSL https://composer.github.io/installer.sig)"
  curl -fsSL https://getcomposer.org/installer -o /tmp/composer-setup.php
  ACTUAL="$(php8.4 -r "echo hash_file('sha384', '/tmp/composer-setup.php');")"
  if [[ "$EXPECTED" != "$ACTUAL" ]]; then
    echo "Composer installer checksum mismatch — aborting." >&2
    rm -f /tmp/composer-setup.php
    exit 1
  fi
  sudo php8.4 /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer --quiet
  rm -f /tmp/composer-setup.php
fi

# ---------------------------------------------------------------------------
# 3. Node 22 LTS
#    Node 18 is present but Vite 6 requires >= 20. Not a preference; a floor.
# ---------------------------------------------------------------------------
NODE_MAJOR="$(node -v 2>/dev/null | sed 's/^v\([0-9]*\).*/\1/' || echo 0)"
if [[ "${NODE_MAJOR:-0}" -ge 20 ]]; then
  skip "node $(node -v)"
else
  log "Installing Node 22 LTS via NodeSource (replaces Node ${NODE_MAJOR})"
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

# ---------------------------------------------------------------------------
# Done
# ---------------------------------------------------------------------------
log "Versions installed"
printf '    php       %s\n' "$(php8.4 -v | head -1)"
printf '    composer  %s\n' "$(composer -V 2>/dev/null | head -1)"
printf '    node      %s\n' "$(node -v)"
printf '    npm       %s\n' "$(npm -v)"

log "Ready for Phase 0. No database chosen yet — Phase 0 uses SQLite."
