#!/usr/bin/env bash
#
# Prove a broadcast actually reaches a subscriber over a real socket.
#
# WHAT THIS EXISTS TO CLOSE. `BroadcastChannelTest` proves WHO MAY SUBSCRIBE to
# what, and then nothing ever connected: Reverb is a `require-dev` dependency,
# `BROADCAST_CONNECTION=log` in development, and no test opens a WebSocket. So
# the broadcast driver's AUTHORISATION was tested and its TRANSPORT was not -
# the README carried that as a known gap for as long as the feature existed.
#
# A transport nobody exercises is the one that breaks silently. `useLiveUpdates`
# degrades to polling whenever `window.Echo` is absent, which is the correct
# behaviour and also means a broken socket looks exactly like a working
# installation that simply chose polling. Nothing reports it.
#
# WHY A SCRIPT AND NOT A TEST. This needs a running Reverb server, a real
# WebSocket client and two processes talking over a port. That is a fixture no
# unit test should own and a flake no CI run deserves by default - so it is a
# thing you run, deliberately, and it says plainly whether the socket works.
#
# IT USES THROWAWAY CREDENTIALS ON A THROWAWAY PORT and never reads your `.env`.
# Reverb needs an app id, key and secret; taking them from an installation's
# real configuration would mean this script's failure mode is "your production
# broadcast credentials were used by a probe".
#
# Usage:
#   scripts/verify-broadcast.sh
#
# Exit 0 means a message was published by the application and received by a
# subscriber. Anything else means it was not, and says at which step.

set -uo pipefail

PORT="${PANEL_BROADCAST_PROBE_PORT:-8085}"
CHANNEL="panel-transport-probe"
EVENT="probe.RowChanged"

cd "$(dirname "$0")/.."
PLAYGROUND="$PWD/apps/playground"

if [[ ! -d "$PLAYGROUND/node_modules/ws" ]]; then
    echo "Needs the playground's node_modules (the 'ws' client). Run: make install" >&2
    exit 1
fi

WORK="$(mktemp -d)"
REVERB_PID=""
PROBE_PID=""

cleanup() {
    [[ -n "$PROBE_PID" ]] && kill "$PROBE_PID" 2>/dev/null
    [[ -n "$REVERB_PID" ]] && kill "$REVERB_PID" 2>/dev/null
    rm -rf "$WORK"
}
trap cleanup EXIT

# Throwaway, and deliberately not from `.env` - see the note above.
export REVERB_APP_ID=probe
export REVERB_APP_KEY=probekey
export REVERB_APP_SECRET=probesecret
export REVERB_HOST=127.0.0.1
export REVERB_PORT="$PORT"
export REVERB_SCHEME=http

echo "==> Starting Reverb on 127.0.0.1:${PORT}"
(cd "$PLAYGROUND" && php artisan reverb:start --host=127.0.0.1 --port="$PORT") \
    > "$WORK/reverb.log" 2>&1 &
REVERB_PID=$!
sleep 5

if ! kill -0 "$REVERB_PID" 2>/dev/null; then
    echo "FAILED: Reverb did not start." >&2
    cat "$WORK/reverb.log" >&2
    exit 1
fi

# The Pusher protocol, spoken directly. Laravel Echo would be the realistic
# client and would also hide a protocol-level failure behind its own
# reconnection logic - which is exactly the layer being tested here.
cat > "$WORK/probe.cjs" <<PROBE
const WebSocket = require('${PLAYGROUND}/node_modules/ws');
const ws = new WebSocket('ws://127.0.0.1:${PORT}/app/probekey?protocol=7&client=probe&version=1&flash=false');

const timer = setTimeout(() => {
    console.log('TIMEOUT');
    process.exit(1);
}, 30000);

ws.on('open', () => console.log('CONNECTED'));

ws.on('message', (raw) => {
    const msg = JSON.parse(raw.toString());

    if (msg.event === 'pusher:connection_established') {
        ws.send(JSON.stringify({ event: 'pusher:subscribe', data: { channel: '${CHANNEL}' } }));
    }

    if (msg.event === 'pusher_internal:subscription_succeeded') {
        console.log('SUBSCRIBED');
    }

    if (msg.event === '${EVENT}') {
        console.log('RECEIVED ' + msg.data);
        clearTimeout(timer);
        ws.close();
        process.exit(0);
    }
});

ws.on('error', (e) => { console.log('WSERROR ' + e.message); process.exit(1); });
PROBE

echo "==> Subscribing over a real WebSocket"
(cd "$PLAYGROUND" && node "$WORK/probe.cjs") > "$WORK/probe.log" 2>&1 &
PROBE_PID=$!

for _ in $(seq 1 20); do
    grep -q SUBSCRIBED "$WORK/probe.log" 2>/dev/null && break
    sleep 1
done

if ! grep -q SUBSCRIBED "$WORK/probe.log" 2>/dev/null; then
    echo "FAILED: never subscribed." >&2
    cat "$WORK/probe.log" >&2
    exit 1
fi

echo "==> Publishing from the application"
(cd "$PLAYGROUND" && BROADCAST_CONNECTION=reverb php artisan tinker --execute="
Illuminate\\Support\\Facades\\Broadcast::connection('reverb')->broadcast(
    ['${CHANNEL}'], '${EVENT}', ['id' => 42, 'status' => 'active']
);") > "$WORK/publish.log" 2>&1

# THE SUBSCRIBER IS WAITED FOR, not slept past. An earlier version of this
# check slept a fixed few seconds and reported "no event received" when the
# publish simply had not landed yet - a false negative that reads exactly like
# a broken transport.
for _ in $(seq 1 20); do
    grep -q RECEIVED "$WORK/probe.log" 2>/dev/null && break
    sleep 1
done

if grep -q RECEIVED "$WORK/probe.log" 2>/dev/null; then
    echo
    echo "PASS: the application published and a subscriber received it."
    grep RECEIVED "$WORK/probe.log" | sed 's/^/    /'
    echo
    echo "    The payload shape - an id plus changed fields - is what"
    echo "    useLiveUpdates reads. See its 'broadcast' driver."
    exit 0
fi

echo "FAILED: subscribed, but the published event never arrived." >&2
echo "--- subscriber ---" >&2; cat "$WORK/probe.log" >&2
echo "--- publish ---"    >&2; cat "$WORK/publish.log" >&2
echo "--- reverb ---"     >&2; tail -20 "$WORK/reverb.log" >&2
exit 1
