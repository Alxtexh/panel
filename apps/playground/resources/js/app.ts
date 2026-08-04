/*
 * IMPORTED FOR ITS SIDE EFFECT, and first, so `window.Echo` exists before any
 * page mounts. `@alxtexh-enterprise/panel` reads that global - it ships no Echo import of its
 * own, which is what lets the same components run without a socket at all.
 */
import './echo';

import {
    initializeAppearance,
    setAppearancePersister,
} from '@alxtexh-enterprise/panel';
import {
    registerRenderHookComponent,
    TicketThread,
} from '@alxtexh-enterprise/panel/inertia';
import { createInertiaApp, router } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { initializeFlashToast } from '@/lib/flashToast';
import {
    installSessionExpiryPreview,
    watchForSessionExpiry,
} from '@/lib/sessionExpired';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

/** Auth screens that now come from `@alxtexh-enterprise/panel/inertia` - see the resolver. */
const PACKAGED_AUTH = [
    'auth/Login',
    'auth/ForgotPassword',
    'auth/ResetPassword',
    'auth/Register',
    'auth/VerifyEmail',
    'auth/TwoFactorChallenge',
    'auth/RenewPassword',
    'auth/LockScreen',
    'auth/ConfirmPassword',
    'auth/VerifyOtp',
];

/*
 * COMPONENTS A PLUGIN MAY PLACE, registered by the APPLICATION.
 *
 * A plugin names a component; this application decides what that name
 * resolves to. That indirection is the whole safety of the render-hook
 * mechanism - a package cannot inject arbitrary markup into a screen, it can
 * only ask for something the application already agreed to ship. An
 * unregistered name renders nothing rather than an error about somebody
 * else's package.
 *
 * THE COMPONENT ITSELF NOW COMES FROM THE PACKAGE, and the indirection is
 * unchanged by that: `@alxtexh-enterprise/panel/inertia` exports it, this file decides the
 * name resolves to it, and swapping in a local one is still a one-line edit.
 */
registerRenderHookComponent('TicketThread', TicketThread);

/**
 * Save a preference change to the account.
 *
 * Fire-and-forget: the change is already applied locally, so a failed request
 * costs this browser nothing - it only means another browser will not pick the
 * change up yet. Surfacing an error toast for "your theme did not sync" would
 * be louder than the problem.
 *
 * Skipped entirely for a guest: there is no account to save against on the
 * sign-in screen, and the local preference is the right answer there.
 */
setAppearancePersister((patch) => {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/);

    fetch('/settings/appearance', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': match ? decodeURIComponent(match[1]) : '',
        },
        credentials: 'same-origin',
        body: JSON.stringify(patch),
    }).catch(() => {
        // Offline, or a guest. The preference still applies in this browser.
    });
});

/**
 * DIRECTION IS SET ON <html>, ONCE, AND UPDATED ON EVERY NAVIGATION.
 *
 * Everything in the panel is styled with logical properties, so a single `dir`
 * attribute mirrors the entire layout - padding, margins, borders, flex order,
 * icon placement. Setting it per component would be a hundred conditionals that
 * each have to be remembered.
 *
 * It runs on `success` as well as at boot because the locale can change without
 * a full page load: somebody switching language in settings gets an Inertia
 * response, and a `dir` fixed at boot would leave the new language mirrored the
 * old way until they reloaded.
 */
function applyDirection(page: { props: Record<string, any> }): void {
    const locale = page.props?.locale;

    if (!locale) {
        return;
    }

    document.documentElement.setAttribute('dir', locale.direction ?? 'ltr');
    document.documentElement.setAttribute('lang', locale.current ?? 'en');
}

router.on('success', (event: any) => applyDirection(event.detail.page));

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    layout: (name) => {
        switch (true) {
            /*
             * THE LANDING PAGES DRAW THEIR OWN WORLD - Part G.9.
             *
             * They are the public face: their own header, their own footer,
             * no operator sidebar. Wrapping one in the panel shell puts a
             * navigation column for an application the visitor has not signed
             * into beside a page whose entire job is to persuade them to.
             */
            case name.startsWith('landing/'):
                return null;
            /*
             * FULL-SCREEN BY THEMSELVES.
             *
             * The lock screen and the code-entry screen draw their own page -
             * centred card, their own theme toggle, no chrome - because both
             * exist to be the ONLY thing on screen. Wrapping them in the auth
             * layout gave two theme toggles and a wordmark above a screen that
             * already had its own heading.
             */
            case name === 'auth/LockScreen':
            case name === 'auth/VerifyOtp':
                return null;
            /*
             * ERROR PAGES STAND ALONE, and this is not a style choice.
             *
             * A URL matching no route never enters the `web` middleware group,
             * so no session is started and `auth.user` is null. Rendering the
             * error inside the panel shell therefore crashed in the sidebar's
             * user menu - a blank white page with a Vue render error, which is
             * the worst possible outcome for the one screen whose entire job is
             * to cope when something has gone wrong.
             *
             * They also have to work for a GUEST, who has no panel to be inside
             * in the first place. The page carries its own way back.
             */
            case name.startsWith('errors/'):
                return null;
            /*
             * THE PACKAGED AUTH SCREENS BRING THEIR OWN LAYOUT.
             *
             * `@alxtexh-enterprise/panel/inertia` renders `AuthLayout` inside each screen,
             * because a fresh installation has no layout of its own to apply -
             * so wrapping them again here gives two headings and two theme
             * toggles. The pages named below are thin wrappers over the
             * packaged screen; the rest are still this application's, and this
             * list shrinks to nothing as they move.
             */
            case PACKAGED_AUTH.includes(name):
                return null;
            case name.startsWith('auth/'):
                return AuthLayout;
            /*
             * THE INDEX IS THE EXCEPTION TO ITS OWN PREFIX. Every OTHER
             * `settings/*` page is a destination the sidebar navigates
             * between; this is the screen that sidebar's own links come
             * from - wrapping it in `SettingsLayout` drew the same three
             * links twice, once as the searchable list this page renders
             * and once again in the sidebar beside it.
             */
            case name === 'settings/Index':
                return AppLayout;
            case name.startsWith('settings/'):
                return [AppLayout, SettingsLayout];
            default:
                return AppLayout;
        }
    },
    progress: {
        color: '#4B5563',
    },
});

/*
 * THE FIRST PAGE NEEDS IT TOO. `router.on('success')` covers every navigation
 * AFTER the first, and the initial render is served by the server - so without
 * this, an Arabic panel loads left-to-right and only mirrors once you click
 * something.
 *
 * Read from the `data-page` attribute Inertia already put in the markup, so it
 * costs nothing and needs no second source.
 */
try {
    const initial = document.getElementById('app')?.dataset.page;

    if (initial) {
        applyDirection(JSON.parse(initial));
    }
} catch {
    // A malformed payload is Inertia's problem to report, not a reason to stop
    // the whole application booting over a text direction.
}

/*
 * EVERYTHING BELOW IS BROWSER-ONLY, AND ONE GUARD SAYS SO ONCE.
 *
 * This module is evaluated by the SSR pass as well as in the browser, and each
 * of these installs a global or reads one. Left unguarded they threw
 * `window is not defined` while Vite warmed the Inertia SSR module graph - which
 * FAILED QUIETLY: the warm-up logged it and carried on, pages still appeared,
 * and the only casualty was server rendering for every route. Nothing looked
 * broken, which is why it survived three separate sessions.
 *
 * One block rather than a guard per call, because the shared fact is the
 * interesting one: none of this describes the app, it wires the app to a
 * browser. (The functions guard themselves too - a module should be safe to
 * import from anywhere - but this is where the reason lives.)
 */
if (typeof window !== 'undefined') {
    /*
     * A 419 is an INTERRUPTION, not a destination.
     *
     * A session expiry is not a place you went - it is something that happened
     * to the click you just made. Navigating to a page for it throws away the
     * page you were actually on, which is the one thing worth keeping: a
     * half-filled form, a scroll position, an open filter. So the client
     * notices it and shows a dialog over the current page instead.
     *
     * Installed before the app mounts, because a stale session can be
     * discovered on the very first request. See `lib/sessionExpired.ts` for why
     * this hooks the transport rather than the router.
     */
    watchForSessionExpiry();
    installSessionExpiryPreview();

    /*
     * Appearance is applied HERE, at boot, for EVERY page.
     *
     * Not in a component: the sign-in and registration screens mount none of
     * the panel's chrome, so a preference applied on component mount left them
     * unthemed - and made signing out and back in look like the settings had
     * been lost. This runs before the first page renders, authenticated or not.
     */
    initializeAppearance(
        // The account's saved value, rendered into the page by the server. It
        // wins over this browser's copy, which is what makes a second browser
        // adopt the same theme on its first load.
        (
            window as unknown as {
                __panelAppearance?: Record<string, unknown> | null;
            }
        ).__panelAppearance ?? null,
    );

    // This will listen for flash toast data from the server...
    initializeFlashToast();
}
