import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

/**
 * Test-only Vite config. There is no build config beside it, deliberately -
 * this package ships as source (`"main": "./src/index.ts"`) and a consuming
 * app compiles it with its OWN Vite, so a build config here would be a second
 * bundler configuration nobody runs and nobody keeps in sync.
 *
 * `@vitejs/plugin-vue` IS NEEDED HERE even though nothing here builds, because
 * vitest still has to compile `.vue` files to import and mount them in a test.
 * Without it, importing a component fails with "Install @vitejs/plugin-vue to
 * handle .vue files" - a plugin error about a file the test never claimed to
 * need special handling for.
 *
 * `environment: 'jsdom'` is what makes `getComputedStyle`, `getBoundingClientRect`
 * and mounting a component into a document possible at all. The two existing
 * spec files test composables and never touch the DOM, so they ran fine without
 * this; a component test cannot.
 */
export default defineConfig({
    plugins: [vue()],
    test: {
        environment: 'jsdom',
        /*
         * jsdom implements no `ResizeObserver`, and every chart in this package
         * constructs one on mount - so charts could not be mounted in a test at
         * all until this existed. See the note in the setup file.
         */
        setupFiles: ['./vitest.setup.ts'],
    },
})
