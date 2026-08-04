<script setup lang="ts">
/*
 * The panel's Profile screen, from @panelkit/panel/inertia.
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
import Profile from '@panelkit/panel/pages/settings/Profile.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <Profile v-bind="$attrs as any" />
</template>
