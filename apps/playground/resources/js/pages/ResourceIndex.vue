<script lang="ts">
/*
 * The resource list, from the package.
 *
 * WHY THIS FILE EXISTS AT ALL, given that it is one line of code. Inertia's Vite
 * plugin resolves a page name by globbing `resources/js/pages/**`, so a screen
 * that lives in `node_modules` is a screen it cannot find. One file per page is
 * the seam: the server says `ResourceIndex`, this resolves, and the
 * implementation comes from the package.
 *
 * IT IS ALSO THE OVERRIDE POINT. An application that wants its own list screen
 * replaces the contents of this file and changes nothing else - no resolver
 * config, no fork of the package, no ejecting. That is the whole reason the
 * arrangement is a thin file rather than a `resolve` callback in `app.ts`.
 *
 * A RE-EXPORT RATHER THAN A WRAPPER COMPONENT. Wrapping - `<ResourceIndex />`
 * inside a template - renders correctly, because Inertia's page props arrive as
 * fall-through attributes and land on the single root. The type checker cannot
 * see that, so every one of these files reported the packaged page as missing
 * every prop it takes. Re-exporting makes this file BE the component, and the
 * props type through.
 *
 * FROM THE SUBPATH, NOT THE PACKAGE ROOT. `@panelkit/inertia` exports all five
 * screens, so importing from it would put all five in the chunk for whichever
 * one you opened.
 *
 * The layout is applied by name in `app.ts`, as it is for every other page.
 */
export { default } from '@panelkit/inertia/pages/ResourceIndex.vue'
</script>
