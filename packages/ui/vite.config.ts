import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import pkg from './package.json'

/**
 * The build. This package used to ship as raw source, and that was a bug.
 *
 * WHY IT CANNOT SHIP SOURCE. Roughly fifty of the shadcn components declare
 * `defineProps<SeparatorProps>()` - a type IMPORTED from `reka-ui`. To turn
 * that into runtime props the Vue SFC compiler has to resolve the type, which
 * means reading another package's declaration files from disk. A consuming
 * application's Vite refuses:
 *
 *     [@vue/compiler-sfc] No fs option provided to `compileScript` in a
 *     non-Node environment. File system access is required for resolving
 *     imported types.
 *
 * The build fails. Not the panel, not a screen - `npm run build`, on the first
 * install. Nothing in this repository caught it for two versions, because the
 * playground reaches this package through a path symlink and compiles it with
 * its own TypeScript in scope. `scripts/verify-install.sh` is what found it, by
 * installing the npm tarball into a fresh Laravel app the way a stranger would.
 *
 * COMPILING HERE RESOLVES THOSE TYPES ONCE, where `reka-ui` and TypeScript are
 * both present, and ships render functions with no types left to resolve. It
 * also removes the whole class of fault rather than the fifty instances of it:
 * the next component somebody adds cannot reintroduce it.
 *
 * EVERY DEPENDENCY IS EXTERNAL. Bundling `vue` would give a consumer two copies
 * of the runtime - two reactivity systems, and a component from here that
 * cannot inject anything provided by a component from theirs. The same argument
 * covers `reka-ui`, which keeps its own context.
 *
 * THE MONOREPO STILL COMPILES THE SOURCE. `apps/playground` aliases this
 * package back to `src/`, so editing a component here shows up on the next
 * reload with no build step. Only what is PUBLISHED comes from `dist`, and
 * `verify-install.sh` is what checks that half.
 */
const external = [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
]

/**
 * Make the entry import its own stylesheet.
 *
 * SCOPED `<style>` BLOCKS BECOME A SEPARATE FILE once this package is compiled
 * rather than shipped as source. While it shipped source the consumer's Vite
 * compiled each SFC and injected those styles for them; after a build they sit
 * in `ui.css` and are loaded by nobody.
 *
 * That failure is SILENT and partial - the panel renders, Tailwind's utilities
 * are all present, and the handful of things that need real CSS (the thin
 * scrollbars, the rich-editor prose rules, the landing animations) quietly
 * stop. One line at the top of the entry means a consumer importing the package
 * gets its styles by importing the package, which is the only rule worth having.
 */
function importOwnStylesheet() {
    return {
        name: 'panelkit-import-own-stylesheet',
        /*
         * AFTER VITE'S OWN CSS PLUGIN, which is what actually emits `ui.css`.
         * Run at the default order and the asset does not exist yet, so this
         * finds nothing and silently does nothing - which is how the first
         * attempt "passed" while changing the bundle not at all.
         */
        enforce: 'post' as const,
        generateBundle: {
            order: 'post' as const,
            handler(_options: unknown, bundle: Record<string, any>) {
                const entry = Object.values(bundle).find(
                    (chunk) => chunk.type === 'chunk' && chunk.isEntry,
                )

                const stylesheet = Object.keys(bundle).find((name) => name.endsWith('.css'))

                if (entry && stylesheet) {
                    entry.code = `import './${stylesheet}';\n${entry.code}`
                }
            },
        },
    }
}

export default defineConfig({
    plugins: [vue(), importOwnStylesheet()],
    build: {
        lib: {
            entry: new URL('src/index.ts', import.meta.url).pathname,
            formats: ['es'],
            fileName: () => 'index.js',
            cssFileName: 'ui',
        },
        rollupOptions: {
            /*
             * SUBPATHS TOO. `@lucide/vue` is imported as `@lucide/vue`, but
             * `reka-ui` and friends may be reached at `reka-ui/something` -
             * a bare-name-only list would bundle the subpath copy and leave
             * the consumer with two.
             */
            external: (id: string) =>
                external.some((name) => id === name || id.startsWith(`${name}/`)),
        },
        /*
         * SOURCEMAPS, because a stack trace from inside a compiled panel is
         * otherwise a line number in a bundle nobody can read.
         */
        sourcemap: true,
        // Overwriting is the point; the warning is noise in a package build.
        emptyOutDir: true,
    },
})
