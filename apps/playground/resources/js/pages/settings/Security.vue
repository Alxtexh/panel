<script setup lang="ts">
/*
 * The panel's Security screen, from @alxtexh-enterprise/panel/inertia.
 *
 * WHY THIS FILE EXISTS: Inertia resolves a page name by globbing this
 * directory, so a screen living in node_modules is one it cannot find.
 *
 * THIS APPLICATION'S COPY IS GONE. It was the original - the packaged one was
 * moved out of here - and keeping both would have been two implementations of
 * one screen, drifting apart the first time either was touched.
 *
 * ITS CONTROLLER STAYS, for now. The routes this app declares shadow the
 * packaged ones at the same URLs, which is what keeps this screen exercised
 * against real props here while `verify-install.sh` exercises the packaged
 * routes in an application that has no such controller.
 */
import Security from '@alxtexh-enterprise/panel/pages/settings/Security.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <Security v-bind="$attrs as any" />
</template>
