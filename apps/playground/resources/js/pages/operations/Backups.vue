<script setup lang="ts">
/*
 * The panel's Backups screen, from @panelkit/inertia.
 *
 * WHY THIS FILE EXISTS: Inertia resolves a page name by globbing this
 * directory, so a screen living in node_modules is one it cannot find.
 *
 * IT IS ALSO WHERE YOU OVERRIDE IT. Point the import at your own
 * component and nothing else has to change.
 *
 * KEEP THE TEMPLATE. An SFC with only a script block renders nothing at
 * all, silently, in a production build.
 */
import Backups from '@panelkit/inertia/pages/operations/Backups.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <!--
        The cast is deliberate. `$attrs` is `Record<string, unknown>`, so
        the checker cannot see that it holds this screen's props and
        reports every one of them as missing. There is nothing to verify
        either way: these values arrive from the server as JSON and are
        typed where they are USED, inside the packaged component.
    -->
    <Backups v-bind="$attrs as any" />
</template>
