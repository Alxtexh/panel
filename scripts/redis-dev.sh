#!/usr/bin/env bash
#
# The development Redis, on 127.0.0.1:6381.
#
# WHY THE PANEL NEEDS ONE AT ALL. `CACHE_STORE=redis` is not a performance
# choice here - stancl's `CacheTenancyBootstrapper` TAGS its cache entries so one
# organisation's keys cannot be read under another's, and of Laravel's stores
# only `array` and `redis` support tagging. `database` would throw on the first
# tagged write, and `array` forgets everything at the end of the request, so a
# queued export's status would be gone before anybody could poll for it.
#
# WHY IT IS A SCRIPT. It was started by hand once and died with the machine, and
# the symptom is spectacularly unhelpful: every page 500s with
# "Connection refused [tcp://127.0.0.1:6381]" from deep inside Predis, including
# the LOGIN form - so the panel looks broken rather than unstarted. A command
# that brings it back is better than remembering the incantation.
#
# NO ROOT NEEDED. `apt-get download` fetches a .deb as an ordinary user, a .deb
# is an archive, and `dpkg-deb -x` unpacks one anywhere. Redis runs perfectly
# well from a user prefix on a high port bound to 127.0.0.1 - which is also the
# only address it is ever given here.
#
# A PORT OF ITS OWN, deliberately. 6379 is where a real Redis would be, and
# sharing it would mean this project's cache and somebody else's occupying the
# same keyspace - a class of confusion worth one line of configuration to avoid.
#
#   ./scripts/redis-dev.sh start
#   ./scripts/redis-dev.sh stop
#   ./scripts/redis-dev.sh status
#
set -euo pipefail

PREFIX="${PANELKIT_REDIS_PREFIX:-${TMPDIR:-/tmp}/panelkit-redis}"
PORT="${PANELKIT_REDIS_PORT:-6381}"

ROOT="$PREFIX/root"
DATA="$PREFIX/data"
DEBS="$PREFIX/debs"
PIDFILE="$PREFIX/redis.pid"

BIN="$ROOT/usr/bin/redis-server"
CLI="$ROOT/usr/bin/redis-cli"

install_packages() {
    if [ -x "$BIN" ]; then
        return
    fi

    mkdir -p "$DEBS" "$ROOT" "$DATA"

    echo "Downloading Redis into $PREFIX ..."
    ( cd "$DEBS" && apt-get download redis-server redis-tools libjemalloc2 liblzf1 >/dev/null )

    for deb in "$DEBS"/*.deb; do
        dpkg-deb -x "$deb" "$ROOT"
    done
}

running() {
    [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null
}

start() {
    install_packages

    if running; then
        echo "Already running on 127.0.0.1:$PORT."
        return
    fi

    # The unpacked libraries are not on the loader's path - nothing was
    # installed, only extracted - so without this every binary here fails with
    # "cannot open shared object file", which reads as a corrupt download.
    export LD_LIBRARY_PATH="$ROOT/usr/lib/x86_64-linux-gnu:${LD_LIBRARY_PATH:-}"

    mkdir -p "$DATA"

    # `--save ''` DISABLES SNAPSHOTTING. This holds a cache and a queue for a
    # development machine; persisting it to disk buys nothing and leaves a dump
    # file that outlives the usefulness of what is in it.
    nohup "$BIN" \
        --port "$PORT" \
        --bind 127.0.0.1 \
        --dir "$DATA" \
        --save '' \
        --appendonly no \
        --pidfile "$PIDFILE" \
        --daemonize no \
        >"$PREFIX/redis.log" 2>&1 &

    echo $! > "$PIDFILE"

    for _ in $(seq 1 20); do
        if "$CLI" -h 127.0.0.1 -p "$PORT" ping >/dev/null 2>&1; then
            echo "Redis is on 127.0.0.1:$PORT."
            return
        fi
        sleep 0.5
    done

    echo "Redis did not come up; see $PREFIX/redis.log" >&2
    exit 1
}

stop() {
    if running; then
        kill "$(cat "$PIDFILE")" 2>/dev/null || true
        rm -f "$PIDFILE"
        echo "Stopped."
    else
        echo "Not running."
    fi
}

status() {
    export LD_LIBRARY_PATH="$ROOT/usr/lib/x86_64-linux-gnu:${LD_LIBRARY_PATH:-}"

    if [ -x "$CLI" ] && "$CLI" -h 127.0.0.1 -p "$PORT" ping >/dev/null 2>&1; then
        echo "Running on 127.0.0.1:$PORT."
    else
        echo "Not running. Start it with $0 start"
        exit 1
    fi
}

case "${1:-start}" in
    start) start ;;
    stop) stop ;;
    status) status ;;
    *) echo "Usage: $0 {start|stop|status}" >&2; exit 1 ;;
esac
