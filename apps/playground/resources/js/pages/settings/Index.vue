<script setup lang="ts">
/*
 * The panel's Settings index, from @panelkit/panel/inertia.
 *
 * THE ENTRIES ARE DERIVED, not declared. `SettingsIndex` includes a row only
 * when the current panel actually registered that route and the reader may
 * open it - so this app's own assistant entry arrives through
 * `SettingsIndex::add()` in AppServiceProvider, and everything else follows
 * from what is routed.
 */
import SettingsIndex from '@panelkit/panel/pages/settings/Index.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <SettingsIndex v-bind="$attrs as any" />
</template>
