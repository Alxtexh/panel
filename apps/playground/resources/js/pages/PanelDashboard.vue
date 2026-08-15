<script setup lang="ts">
/*
 * The panel's PanelDashboard screen, from @alxtexh-enterprise/panel/inertia.
 *
 * Shortcuts arrive as the `shortcuts` page prop from DashboardPage::shortcuts().
 */
import PanelDashboard from '@alxtexh-enterprise/panel/pages/PanelDashboard.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <PanelDashboard v-bind="$attrs as any" />
</template>
