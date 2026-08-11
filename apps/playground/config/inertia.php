<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Server Side Rendering
    |--------------------------------------------------------------------------
    |
    | These options configures if and how Inertia uses Server Side Rendering
    | to pre-render each initial request made to your application's pages
    | so that server rendered HTML is delivered for the user's browser.
    |
    | See: https://inertiajs.com/server-side-rendering
    |
    */

    /*
    | Off by default here, and env-driven rather than hardcoded.
    |
    | The starter kit ships this as `true` with nothing serving it. Every
    | request then pays a failed connection to 13714 before falling back to the
    | client-only response - a page that works and is quietly slower, which is
    | the reason to default it off rather than on.
    |
    | IT DOES WORK, AND THAT IS NOW MEASURED RATHER THAN ASSUMED. `/login`
    | fetched with SSR on returns `data-server-rendered`, one `<form>` and three
    | `<input>`s in the raw HTML; the same URL with it off returns none of them
    | and no "Log in" text at all. So this is a deliberate default, not an
    | unfinished feature.
    |
    | THE FLAG GOES FIRST, and the order used to be documented backwards here:
    |
    |   1. INERTIA_SSR_ENABLED=true          <- before, not after
    |   2. npm run build:ssr
    |   3. php artisan inertia:start-ssr
    |
    | `inertia:start-ssr` READS THIS CONFIG and exits with "Inertia SSR is not
    | enabled" if the flag is still false - so following the previous order
    | ("start the server, then set the flag") failed at the step that looks
    | least likely to fail. `make ssr` does all three in the right order.
    |
    | NO `bundle` KEY IS NEEDED. `@inertiajs/vite` generates the SSR entry from
    | `resources/js/app.ts`, so the build emits `bootstrap/ssr/app.js` and
    | Inertia finds it. The commented-out line that used to sit here pointed at
    | `ssr.mjs`, a filename this build never produces.
    */
    'ssr' => [
        'enabled' => env('INERTIA_SSR_ENABLED', false),
        'url' => env('INERTIA_SSR_URL', 'http://127.0.0.1:13714'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Pages
    |--------------------------------------------------------------------------
    |
    | These options configure how Inertia discovers page components on the
    | filesystem. The paths and extensions are used to locate components
    | when rendering responses and during testing assertions.
    |
    */

    'pages' => [

        'paths' => [
            resource_path('js/pages'),
        ],

        'extensions' => [
            'js',
            'jsx',
            'svelte',
            'ts',
            'tsx',
            'vue',
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Testing
    |--------------------------------------------------------------------------
    |
    | The values described here are used to locate Inertia components on the
    | filesystem. For instance, when using `assertInertia`, the assertion
    | attempts to locate the component as a file relative to the paths.
    |
    */

    'testing' => [

        'ensure_pages_exist' => true,

    ],

];
