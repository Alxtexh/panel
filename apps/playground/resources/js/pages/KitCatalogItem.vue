<script setup lang="ts">
import CatalogItem from '@alxtexh-enterprise/panel/pages/CatalogItem.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <CatalogItem v-bind="$attrs as any" />
</template>
