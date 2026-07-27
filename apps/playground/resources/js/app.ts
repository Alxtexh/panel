import { createInertiaApp } from '@inertiajs/vue3';
import { initializeAppearance } from '@panelkit/ui';
import AppLayout from '@/layouts/AppLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { initializeFlashToast } from '@/lib/flashToast';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

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
initializeAppearance();

// This will listen for flash toast data from the server...
initializeFlashToast();
