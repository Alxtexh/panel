#!/usr/bin/env bash
#
# A MariaDB server and pdo_mysql, without root.
#
# WHY THIS EXISTS. `DatabaseRestorer::restoreMysql()` shells a dump into the
# `mysql` client, and for a long time it was written, reviewed and never once
# executed - this machine had no mysqld, no `pdo_mysql`, and no passwordless
# sudo, so the pipe was untested while its command construction was not. It is
# the code most likely to be wrong and least likely to be noticed, because the
# person who needs it is mid-incident.
#
# THE TRICK IS THAT NONE OF IT NEEDS PRIVILEGES. `apt-get download` fetches a
# `.deb` as an ordinary user, a `.deb` is just an archive, and `dpkg-deb -x`
# unpacks one anywhere. MariaDB runs perfectly well from a user prefix on a high
# port bound to 127.0.0.1.
#
# NOTHING HERE TOUCHES A SYSTEM SERVICE and nothing reaches a remote database.
# The server listens on 127.0.0.1 only, on a port chosen to avoid a real one,
# with its data under the prefix this script creates.
#
#   ./tests/bin/mysql-fixture.sh start     # download, unpack, initialise, run
#   ./tests/bin/mysql-fixture.sh stop
#   ./tests/bin/mysql-fixture.sh env       # the flags PHP needs, for eval
#
set -euo pipefail

PREFIX="${ALXTEXHPANEL_MYSQL_PREFIX:-${TMPDIR:-/tmp}/alxtexhpanel-mysql}"
PORT="${ALXTEXHPANEL_MYSQL_PORT:-3399}"
DATABASE="alxtexhpanel_restore"

# THE SOCKET LIVES AT THE SHORTEST PATH AVAILABLE. MariaDB refuses a unix socket
# path over 107 characters, and a prefix under a long temporary directory blows
# that limit with no obvious symptom beyond "Can't create UNIX socket (2)".
SOCKET="/tmp/alxtexhpanel-mysql.sock"
PIDFILE="/tmp/alxtexhpanel-mysqld.pid"

ROOT="$PREFIX/root"
DATA="$PREFIX/data"
DEBS="$PREFIX/debs"

PACKAGES=(
    mariadb-server mariadb-server-core
    mariadb-client mariadb-client-core
    mariadb-common mysql-common
    libdbi-perl
    # The PHP extension, matched to THIS php - a distro build for another minor
    # version loads and then fails on an ABI mismatch, which reads as a broken
    # extension rather than as the wrong file.
    "php$(php -r 'echo PHP_MAJOR_VERSION.".".PHP_MINOR_VERSION;')-mysql"
)

extension_dir() {
    find "$ROOT/usr/lib/php" -maxdepth 1 -mindepth 1 -type d 2>/dev/null | head -1
}

install_packages() {
    if [ -x "$ROOT/usr/sbin/mariadbd" ]; then
        return
    fi

    mkdir -p "$DEBS" "$ROOT"

    echo "Downloading MariaDB and pdo_mysql into $PREFIX ..."
    ( cd "$DEBS" && apt-get download "${PACKAGES[@]}" >/dev/null )

    for deb in "$DEBS"/*.deb; do
        dpkg-deb -x "$deb" "$ROOT"
    done
}

start() {
    install_packages

    if [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
        echo "Already running on 127.0.0.1:$PORT."
        return
    fi

    if [ ! -d "$DATA/mysql" ]; then
        mkdir -p "$DATA"
        "$ROOT/usr/bin/mariadb-install-db" \
            --basedir="$ROOT/usr" --datadir="$DATA" \
            --user="$(whoami)" --auth-root-authentication-method=normal >/dev/null
    fi

    # `--no-defaults` so nothing in /etc leaks in: the point of this fixture is a
    # server whose configuration is entirely visible in this file.
    nohup "$ROOT/usr/sbin/mariadbd" \
        --no-defaults \
        --basedir="$ROOT/usr" --datadir="$DATA" \
        --socket="$SOCKET" --port="$PORT" --bind-address=127.0.0.1 \
        --pid-file="$PIDFILE" \
        --lc-messages-dir="$ROOT/usr/share/mariadb" \
        >"$PREFIX/mysqld.log" 2>&1 &

    for _ in $(seq 1 30); do
        if "$ROOT/usr/bin/mariadb" -h 127.0.0.1 -P "$PORT" -u root -e 'SELECT 1' >/dev/null 2>&1; then
            break
        fi
        sleep 1
    done

    "$ROOT/usr/bin/mariadb" -h 127.0.0.1 -P "$PORT" -u root \
        -e "CREATE DATABASE IF NOT EXISTS $DATABASE" >/dev/null

    echo "MariaDB is on 127.0.0.1:$PORT, database [$DATABASE]."
    echo
    echo "Run the restore tests with:"
    # PHPUNIT DIRECTLY, NOT `artisan test`. That command re-spawns PHPUnit as a
    # subprocess, so the -d extension flags are consumed by the artisan process
    # and never reach the one running the tests - the suite skips, and the
    # instruction that was supposed to prevent that is what caused it.
    echo "  eval \"\$($0 env)\" && php \$ALXTEXHPANEL_PHP_FLAGS vendor/bin/phpunit --filter=MysqlRestore"
}

stop() {
    if [ -f "$PIDFILE" ]; then
        kill "$(cat "$PIDFILE")" 2>/dev/null || true
        rm -f "$PIDFILE"
        echo "Stopped."
    fi
}

# The flags rather than an edited php.ini: this fixture must not modify anything
# outside its own prefix, and a php.ini somebody forgets to revert is a machine
# that behaves differently from every other one.
print_env() {
    local ext
    ext="$(extension_dir)"

    echo "export ALXTEXHPANEL_MYSQL_BIN='$ROOT/usr/bin/mariadb'"
    echo "export ALXTEXHPANEL_PHP_FLAGS='-d extension=$ext/mysqlnd.so -d extension=$ext/pdo_mysql.so'"
}

case "${1:-start}" in
    start) start ;;
    stop) stop ;;
    env) print_env ;;
    *) echo "Usage: $0 {start|stop|env}" >&2; exit 1 ;;
esac
