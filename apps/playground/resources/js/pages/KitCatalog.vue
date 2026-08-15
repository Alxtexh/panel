<script setup lang="ts">
/*
 * Catalog merchandising demo. KitDemo supplies the SKUs; CatalogBrowser is the kit.
 */
import Catalog from '@alxtexh-enterprise/panel/pages/Catalog.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <Catalog v-bind="$attrs as any" />
</template>
