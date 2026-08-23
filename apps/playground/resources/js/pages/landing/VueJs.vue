<script setup lang="ts">
/**
 * Inertia resolves page names from this directory. The real template lives in
 * `@alxtexh-enterprise/panel` (ported from younusaliakash/vue-js-landing-page).
 */
import LandingPage from '@alxtexh-enterprise/panel/pages/landing/VueJs.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <LandingPage v-bind="$attrs as any" />
</template>
