<script setup lang="ts">
import PanelPage from '@alxtexh-enterprise/panel/pages/PanelPage.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <PanelPage v-bind="$attrs as any" />
</template>
