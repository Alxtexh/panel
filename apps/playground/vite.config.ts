import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import { defineConfig } from 'vite';

export default defineConfig({
    /*
     * BOUND TO 127.0.0.1 EXPLICITLY, not `localhost`.
     *
     * `localhost` resolves to `::1` first on this machine, so Vite bound to
     * IPv6 ONLY and the Laravel plugin wrote `http://[::1]:5173/...` into every
     * page. Nothing was listening on 127.0.0.1 at all, so any client that
     * preferred IPv4 — including the in-app browser — loaded the HTML and the
     * CSS, failed every module script, and rendered an empty shell. No error:
     * the page just never became interactive.
     *
     * IT ALSO MATTERS FOR TENANCY, which is the reason to fix it here rather
     * than in one dev script. The tenant hostnames live in /etc/hosts pointing
     * at 127.0.0.1, so an IPv6-only bind makes every per-tenant subdomain
     * unreachable while plain `localhost` keeps working — the one arrangement
     * where hostname tenancy looks fine locally and is untestable.
     */
    server: {
        host: '127.0.0.1',
    },
    resolve: {
        // packages/ui is consumed through a symlink, so Node resolves its own
        // imports from the package's real path and finds ITS copy of Vue
        // rather than the app's. Two Vue instances break reactivity in ways
        // that look like random components silently not updating. Dedupe
        // forces a single instance.
        //
        // `@inertiajs/vue3` IS HERE FOR THE SAME REASON AND WAS MISSING IT.
        // The panel screens moved into packages/inertia, which is symlinked and
        // carries its own copy - so the packaged pages called `usePage` and
        // `useForm` against a DIFFERENT Inertia instance from the one
        // `createInertiaApp` installed. Server-side rendering died on it with
        // "Cannot read properties of undefined (reading 'createProvider')",
        // which names an internal and points at nothing.
        //
        // A consumer installing both packages from npm gets one copy hoisted
        // and never sees this. It is a property of consuming them by path, which
        // is what this repository does and what anybody developing against a
        // local checkout will do.
        dedupe: ['vue', '@inertiajs/vue3'],
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600],
                }),
            ],
        }),
        inertia(),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        wayfinder({
            formVariants: true,
        }),
    ],
});
