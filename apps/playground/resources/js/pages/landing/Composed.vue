<script setup lang="ts">
/**
 * The landing page, which now lives in `@alxtexh-enterprise/panel/inertia`.
 *
 * WHY THIS FILE EXISTS: Inertia resolves a page name by globbing this
 * directory, so a screen living in node_modules is one it cannot find.
 *
 * IT IS ALSO WHERE YOU OVERRIDE IT. Point the import at your own component and
 * nothing else has to change - the controller, the presets and the editor stay
 * the package's.
 */
import LandingPage from '@alxtexh-enterprise/panel/pages/landing/Composed.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <!-- The cast is deliberate; see PanelDashboard.vue for why. -->
    <LandingPage v-bind="$attrs as any" />
</template>
