import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

/**
 * The WebSocket connection, created once and hung on `window`.
 *
 * ON `window` BECAUSE THAT IS THE CONTRACT `@alxtexh-enterprise/panel` READS. The package
 * ships no HTTP client and no Echo import - that is what lets the same
 * components run under Inertia, a plain fetch page, or a test harness - so it
 * looks for `window.Echo` and degrades to polling when there is none. A module
 * export would be invisible to it.
 *
 * IT CONNECTS LAZILY, AND THAT IS THE POINT OF `Reverb` OVER A RAW SOCKET.
 * Echo opens the connection on construction, so this module is imported for its
 * side effect exactly once, at boot, rather than per page.
 *
 * WITHOUT THIS FILE THE PANEL STILL WORKS. `useLiveUpdates` warns and falls back
 * to the poll driver, which is the correct degradation: a table that refreshes
 * every few seconds is worse than a live one and far better than one that
 * silently stops updating. That fallback is why this was easy to leave
 * unfinished - nothing was broken, it was just quietly polling.
 */
declare global {
    interface Window {
        Echo?: Echo<'reverb'>;
        Pusher?: typeof Pusher;
    }
}

/*
 * NOTHING RUNS UNDER SSR, and the guard is not defensive tidiness - without it
 * the server render crashes on `window is not defined` before any page is
 * built.
 *
 * This module's whole job is a side effect on `window`, and `app.ts` imports it
 * at the top level, so it is evaluated in Node during the SSR pass as well as
 * in the browser. There is no socket to open on a server that renders one
 * response and exits, so the correct behaviour there is to do nothing: the
 * client bundle runs this same file moments later and connects.
 *
 * IT FAILED QUIETLY, which is why it survived. SSR warm-up logged the error and
 * carried on, so pages still rendered - client-side, having silently lost
 * server rendering for every route.
 */
/*
 * THE SOCKET IS OPT-IN, AND THE .env IS THE SWITCH.
 *
 * This used to construct Echo unconditionally, so an installation with no
 * Reverb - or with keys left over from another machine and nothing listening -
 * got a client that retried ws://host:8080 forever: a console full of failed
 * connections, a reconnect loop burning battery, and the LOOK of a page that
 * never settles. Nothing was actually broken, which is why it survived; the
 * poll fallback hid it.
 *
 * With no key configured there is nothing to connect to, so nothing is
 * constructed: `window.Echo` stays undefined, `useLiveUpdates` sees that and
 * uses the internal poll driver, and the panel needs neither Reverb nor Redis
 * to function. Set VITE_REVERB_APP_KEY (and run Reverb) and the socket comes
 * back exactly as before.
 */
const reverbKey = (import.meta.env.VITE_REVERB_APP_KEY ?? '') as string;

if (typeof window !== 'undefined' && reverbKey !== '') {
    /*
     * Echo reaches for a global `Pusher`, so it is assigned rather than merely
     * imported. Reverb speaks the Pusher protocol, which is why this client
     * works against it unchanged and why the broadcaster on the server side is
     * `PusherBroadcaster`.
     */
    window.Pusher = Pusher;

    window.Echo = new Echo({
        broadcaster: 'reverb',
        key: import.meta.env.VITE_REVERB_APP_KEY,
        wsHost: import.meta.env.VITE_REVERB_HOST,
        wsPort: Number(import.meta.env.VITE_REVERB_PORT ?? 8080),
        wssPort: Number(import.meta.env.VITE_REVERB_PORT ?? 443),
        forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',

        /*
         * `wss` FIRST IN PRODUCTION, and both offered in development.
         *
         * A browser on an https page refuses a plain `ws` connection outright, so a
         * list that transports over ws in production simply never updates - with no
         * error the user would notice, because the poll fallback hides it.
         */
        enabledTransports: ['ws', 'wss'],

        /*
         * EVERY SUBSCRIPTION IS AUTHORISED SERVER-SIDE, at this endpoint, against
         * `routes/channels.php`. The channel name is the only thing the client
         * chooses, and it chooses it from a string - so the callbacks there check
         * identity, tenancy and permission before any data flows.
         */
        authEndpoint: '/broadcasting/auth',
    });
}
