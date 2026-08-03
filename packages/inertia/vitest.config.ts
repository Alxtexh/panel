import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

/**
 * Test-only Vite config, the same shape `@panelkit/ui` has and for the same
 * reasons - this package ships as SOURCE, so a build config beside it would be
 * a second bundler configuration nobody runs.
 *
 * IT EXISTS BECAUSE OF THE BREADCRUMBS. Every other component here is proved in
 * a browser, which is right: they read `usePage()`, navigate, and fail in ways
 * jsdom cannot see. The breadcrumb TRAIL is different - it is a pure derivation
 * from the navigation and the URL, with rules (longest match wins, a group is
 * not a destination, a numeric segment is a record) that are exactly what drifts
 * silently and exactly what a browser test cannot enumerate cheaply.
 */
export default defineConfig({
    plugins: [vue()],
    test: {
        environment: 'jsdom',
    },
})
