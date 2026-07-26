#!/usr/bin/env bash
#
# PanelKit local environment bootstrap — Pop!_OS 24.04 (Ubuntu noble base)
#
# Installs: PHP 8.4 (ondrej PPA), Composer 2, PostgreSQL 16, Node 22 LTS.
# Configures: opcache, Postgres tuning for the 2.5M-row demo seed, a local
# `panelkit` role + database.
#
# LOCAL ONLY. This script never touches a remote host. The database it creates
# listens on 127.0.0.1 and nothing else.
#
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
    php8.4-cli php8.4-pgsql php8.4-mbstring php8.4-xml php8.4-curl \
    php8.4-zip php8.4-bcmath php8.4-intl php8.4-opcache php8.4-gd

  # Make 8.4 the default `php` if other versions ever land alongside it.
  sudo update-alternatives --set php /usr/bin/php8.4 >/dev/null 2>&1 || true
fi

# ---------------------------------------------------------------------------
# 2. opcache — spec §9 "Runtime independence: Octane-safe, never Octane-required"
#    Recovers most of Octane's boot saving with none of the shared-state hazards.
# ---------------------------------------------------------------------------
OPCACHE_INI=/etc/php/8.4/cli/conf.d/99-panelkit.ini
if [[ -f $OPCACHE_INI ]]; then
  skip "$OPCACHE_INI"
else
  log "Writing opcache tuning to $OPCACHE_INI"
  sudo tee "$OPCACHE_INI" >/dev/null <<'INI'
; PanelKit local tuning
opcache.enable=1
opcache.enable_cli=1
opcache.memory_consumption=256
opcache.interned_strings_buffer=32
opcache.max_accelerated_files=20000
opcache.validate_timestamps=1
opcache.revalidate_freq=0
realpath_cache_size=4096k
realpath_cache_ttl=600
memory_limit=1G
INI
fi

# ---------------------------------------------------------------------------
# 3. Composer 2
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
# 4. Node 22 LTS  (Node 18 is present but Vite 6 requires >= 20)
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
# 5. PostgreSQL 16
# ---------------------------------------------------------------------------
if command -v psql >/dev/null 2>&1; then
  skip "postgresql"
else
  log "Installing PostgreSQL"
  sudo apt-get install -y postgresql postgresql-contrib
fi

sudo systemctl enable --now postgresql

PG_VER="$(psql --version | grep -oE '[0-9]+' | head -1)"
log "PostgreSQL ${PG_VER} running"

# ---------------------------------------------------------------------------
# 6. Postgres tuning — the perf budget in spec §10 is a database story, and
#    stock shared_buffers=128MB will not hit "< 300ms on 500k rows".
#    Sized for this machine: 31 GB RAM, NVMe.
# ---------------------------------------------------------------------------
PG_CONF_D="/etc/postgresql/${PG_VER}/main/conf.d"
if [[ -f "${PG_CONF_D}/99-panelkit.conf" ]]; then
  skip "${PG_CONF_D}/99-panelkit.conf"
else
  log "Writing Postgres tuning to ${PG_CONF_D}/99-panelkit.conf"
  sudo install -d -m 0755 "$PG_CONF_D"
  sudo tee "${PG_CONF_D}/99-panelkit.conf" >/dev/null <<'CONF'
# PanelKit local development tuning (31 GB RAM, NVMe, single developer)
listen_addresses = 'localhost'
shared_buffers = 2GB
effective_cache_size = 8GB
work_mem = 64MB
maintenance_work_mem = 1GB
random_page_cost = 1.1        # NVMe, not spinning rust
effective_io_concurrency = 200
max_wal_size = 4GB
checkpoint_completion_target = 0.9
# Surface slow queries while building; the perf tests depend on seeing these.
log_min_duration_statement = 200
track_io_timing = on
CONF
  sudo systemctl restart postgresql
fi

# ---------------------------------------------------------------------------
# 7. Local role + database
# ---------------------------------------------------------------------------
log "Creating local role and databases"
sudo -u postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='panelkit'" | grep -q 1 \
  || sudo -u postgres psql -c "CREATE ROLE panelkit LOGIN PASSWORD 'panelkit' CREATEDB;"

for db in panelkit panelkit_test; do
  sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='${db}'" | grep -q 1 \
    || sudo -u postgres psql -c "CREATE DATABASE ${db} OWNER panelkit;"
done

# ---------------------------------------------------------------------------
# Done
# ---------------------------------------------------------------------------
log "Versions installed"
printf '    php       %s\n' "$(php8.4 -v | head -1)"
printf '    composer  %s\n' "$(composer -V 2>/dev/null | head -1)"
printf '    node      %s\n' "$(node -v)"
printf '    npm       %s\n' "$(npm -v)"
printf '    psql      %s\n' "$(psql --version)"

log "Verifying the app can reach Postgres on 127.0.0.1"
PGPASSWORD=panelkit psql -h 127.0.0.1 -U panelkit -d panelkit -tAc 'SELECT version();'

log "Environment ready."
