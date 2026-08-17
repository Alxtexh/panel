<script setup lang="ts">
/*
 * The panel's Profile screen, from @alxtexh-enterprise/panel/inertia.
 *
 * WHY THIS FILE EXISTS: Inertia resolves a page name by globbing this
 * directory, so a screen living in node_modules is one it cannot find.
 *
 * THE KIT OWNS THE ROUTE. This application no longer claims
 * `/settings/profile`; PanelRoutes registers the packaged ProfileController.
 */
import Profile from '@alxtexh-enterprise/panel/pages/settings/Profile.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <Profile v-bind="$attrs as any" />
</template>
