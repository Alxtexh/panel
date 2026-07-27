import { createInertiaApp } from '@inertiajs/vue3';
import { initializeAppearance, setAppearancePersister } from '@panelkit/ui';
import AppLayout from '@/layouts/AppLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { initializeFlashToast } from '@/lib/flashToast';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

/**
 * Save a preference change to the account.
 *
 * Fire-and-forget: the change is already applied locally, so a failed request
 * costs this browser nothing — it only means another browser will not pick the
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

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    layout: (name) => {
        switch (true) {
            case name === 'Welcome':
                return null;
            case name.startsWith('auth/'):
                return AuthLayout;
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
 * Appearance is applied HERE, at boot, for EVERY page.
 *
 * Not in a component: the sign-in and registration screens mount none of the
 * panel's chrome, so a preference applied on component mount left them
 * unthemed — and made signing out and back in look like the settings had been
 * lost. This runs before the first page renders, authenticated or not.
 */
initializeAppearance(
    // The account's saved value, rendered into the page by the server. It wins
    // over this browser's copy, which is what makes a second browser adopt the
    // same theme on its first load.
    (window as unknown as { __panelAppearance?: Record<string, unknown> | null }).__panelAppearance ?? null,
);

// This will listen for flash toast data from the server...
initializeFlashToast();
