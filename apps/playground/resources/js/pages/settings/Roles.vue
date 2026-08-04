<script setup lang="ts">
/*
 * The panel's Roles screen, from @panelkit/panel/inertia.
 *
 * WHY THIS FILE EXISTS: Inertia resolves a page name by globbing this
 * directory, so a screen living in node_modules is one it cannot find.
 *
 * IT IS ALSO WHERE YOU OVERRIDE IT. Point the import at your own
 * component and nothing else has to change.
 *
 * AND IT IS WHERE THE LAYOUT IS DECIDED, which is the reason this shim
 * carries a `defineOptions` where the Trash one does not. The packaged
 * component cannot name `AppLayout` - the layout is the application's,
 * and a package that imported one would dictate the shell of every
 * installation. `settings/*` otherwise resolves to the settings layout,
 * whose sidebar is a list of settings pages; this screen is a full-width
 * matrix and wants the plain panel shell, so it says so here.
 *
 * KEEP THE TEMPLATE. An SFC with only a script block renders nothing at
 * all, silently, in a production build.
 */
import Roles from '@panelkit/panel/pages/settings/Roles.vue';
import AppLayout from '@/layouts/AppLayout.vue';

defineOptions({ inheritAttrs: false, layout: AppLayout });
</script>

<template>
    <!--
        The cast is deliberate. `$attrs` is `Record<string, unknown>`, so
        the checker cannot see that it holds this screen's props and
        reports every one of them as missing. There is nothing to verify
        either way: these values arrive from the server as JSON and are
        typed where they are USED, inside the packaged component.
    -->
    <Roles v-bind="$attrs as any" />
</template>
