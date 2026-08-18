<script setup lang="ts">
/*
 * The panel's ResourcePicker screen, from @alxtexh-enterprise/panel/inertia.
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
import ResourcePicker from '@alxtexh-enterprise/panel/pages/ResourcePicker.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <ResourcePicker v-bind="$attrs as any" />
</template>
