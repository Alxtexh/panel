<script setup lang="ts">
/**
 * Inertia resolves page names from this directory. The real template lives in
 * `@alxtexh-enterprise/panel` (ported from leoMirandaa/shadcn-vue-landing-page).
 */
import LandingPage from '@alxtexh-enterprise/panel/pages/landing/ShadcnVue.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <LandingPage v-bind="$attrs as any" />
</template>
