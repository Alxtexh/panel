#!/usr/bin/env bash
#
# PostgreSQL with pgvector, and pdo_pgsql, without root.
#
# WHY THIS EXISTS. `KnowledgeBase` has two search paths: one that asks Postgres
# for nearest neighbours through a pgvector index, and one that reads candidates
# and scores them in PHP. The second runs everywhere and is covered by the
# ordinary suite. The FIRST is SQL this machine could not execute - no
# postgres, no `pdo_pgsql`, no passwordless sudo - which is exactly the shape of
# code that gets written, reviewed, shipped and found broken by whoever first
# turns the feature on.
#
# The `<=>` operator, the `::vector` casts and the ivfflat index are not things
# a portable test can prove. Either a real Postgres runs them or nobody knows.
#
# THE TRICK IS THAT NONE OF IT NEEDS PRIVILEGES. `apt-get download` fetches a
# `.deb` as an ordinary user, a `.deb` is just an archive, and `dpkg-deb -x`
# unpacks one anywhere. Postgres runs perfectly well from a user prefix on a
# high port bound to 127.0.0.1.
#
# NOTHING HERE TOUCHES A SYSTEM SERVICE and nothing reaches a remote database.
# The server listens on 127.0.0.1 only, on a port chosen to avoid a real one,
# with its data under the prefix this script creates.
#
#   ./tests/bin/pgvector-fixture.sh start   # download, unpack, initialise, run
#   ./tests/bin/pgvector-fixture.sh stop
#   ./tests/bin/pgvector-fixture.sh env     # the flags and vars PHP needs
#
set -euo pipefail

PREFIX="${ALXTEXHPANEL_PG_PREFIX:-${TMPDIR:-/tmp}/alxtexhpanel-pg}"
PORT="${ALXTEXHPANEL_PG_PORT:-5499}"
DATABASE="alxtexhpanel_rag"

ROOT="$PREFIX/root"
DATA="$PREFIX/data"
DEBS="$PREFIX/debs"

# The unix socket directory. Postgres has the same 107-character limit MariaDB
# does, and a prefix under a long temporary directory blows it with no symptom
# beyond a connection that never opens.
SOCKETS="/tmp"

VERSION=16
BIN="$ROOT/usr/lib/postgresql/$VERSION/bin"

PACKAGES=(
    postgresql-$VERSION postgresql-client-$VERSION
    postgresql-common postgresql-client-common
    postgresql-$VERSION-pgvector
    libpq5 ssl-cert
    # The PHP extension, matched to THIS php - a distro build for another minor
    # version loads and then fails on an ABI mismatch, which reads as a broken
    # extension rather than as the wrong file.
    "php$(php -r 'echo PHP_MAJOR_VERSION.".".PHP_MINOR_VERSION;')-pgsql"
)

# THE UNPACKED `libpq.so.5` IS NOT ON THE LOADER'S PATH, because nothing was
# installed - the files were merely extracted. Without this every binary here
# fails with "cannot open shared object file", which reads as a corrupt download
# rather than as a missing search path.
export LD_LIBRARY_PATH="$ROOT/usr/lib/x86_64-linux-gnu:${LD_LIBRARY_PATH:-}"

extension_dir() {
    find "$ROOT/usr/lib/php" -maxdepth 1 -mindepth 1 -type d 2>/dev/null | head -1
}

install_packages() {
    if [ -x "$BIN/postgres" ]; then
        return
    fi

    mkdir -p "$DEBS" "$ROOT"

    echo "Downloading PostgreSQL, pgvector and pdo_pgsql into $PREFIX ..."
    ( cd "$DEBS" && apt-get download "${PACKAGES[@]}" >/dev/null )

    for deb in "$DEBS"/*.deb; do
        dpkg-deb -x "$deb" "$ROOT"
    done
}

start() {
    install_packages

    if "$BIN/pg_isready" -h 127.0.0.1 -p "$PORT" >/dev/null 2>&1; then
        echo "Already running on 127.0.0.1:$PORT."
        return
    fi

    if [ ! -f "$DATA/PG_VERSION" ]; then
        mkdir -p "$DATA"
        # `trust` on a loopback-only port with a data directory this script owns.
        # There is nothing here but fixture data, and a password file would be one
        # more thing to leak into a shell history.
        "$BIN/initdb" -D "$DATA" -U postgres --auth=trust >/dev/null
    fi

    nohup "$BIN/postgres" -D "$DATA" -p "$PORT" -k "$SOCKETS" \
        -c listen_addresses=127.0.0.1 \
        >"$PREFIX/postgres.log" 2>&1 &

    for _ in $(seq 1 30); do
        if "$BIN/pg_isready" -h 127.0.0.1 -p "$PORT" >/dev/null 2>&1; then
            break
        fi
        sleep 1
    done

    "$BIN/psql" -h 127.0.0.1 -p "$PORT" -U postgres -tc \
        "SELECT 1 FROM pg_database WHERE datname = '$DATABASE'" | grep -q 1 \
        || "$BIN/createdb" -h 127.0.0.1 -p "$PORT" -U postgres "$DATABASE"

    # THE EXTENSION IS CREATED HERE, not by the migration. The migration attempts
    # it and carries on when it cannot - an installation without the extension
    # must still be able to run the panel - so a fixture that relied on the
    # migration to install it would silently test the portable path instead, and
    # report a pass for SQL that never ran.
    "$BIN/psql" -h 127.0.0.1 -p "$PORT" -U postgres -d "$DATABASE" \
        -c 'CREATE EXTENSION IF NOT EXISTS vector' >/dev/null

    echo "PostgreSQL $VERSION is on 127.0.0.1:$PORT, database [$DATABASE], pgvector installed."
    echo
    echo "Run the retrieval tests with:"
    echo "  eval \"\$($0 env)\" && php \$ALXTEXHPANEL_PHP_FLAGS vendor/bin/phpunit --filter=PgvectorRetrieval"
}

stop() {
    if [ -x "$BIN/pg_ctl" ] && [ -d "$DATA" ]; then
        "$BIN/pg_ctl" -D "$DATA" stop -m fast >/dev/null 2>&1 || true
        echo "Stopped."
    fi
}

# The flags rather than an edited php.ini: this fixture must not modify anything
# outside its own prefix, and a php.ini somebody forgets to revert is a machine
# that behaves differently from every other one.
print_env() {
    local ext
    ext="$(extension_dir)"

    # PHP needs the loader path as much as the binaries do - the extension links
    # against the same unpacked `libpq.so.5`, and without this it reports the
    # extension as unloadable rather than the library as unfindable.
    echo "export LD_LIBRARY_PATH='$ROOT/usr/lib/x86_64-linux-gnu:\${LD_LIBRARY_PATH:-}'"
    echo "export ALXTEXHPANEL_PG_PORT='$PORT'"
    echo "export ALXTEXHPANEL_PG_DATABASE='$DATABASE'"
    echo "export ALXTEXHPANEL_PHP_FLAGS='-d extension=$ext/pgsql.so -d extension=$ext/pdo_pgsql.so'"
}

case "${1:-start}" in
    start) start ;;
    stop) stop ;;
    env) print_env ;;
    *) echo "Usage: $0 {start|stop|env}" >&2; exit 1 ;;
esac
