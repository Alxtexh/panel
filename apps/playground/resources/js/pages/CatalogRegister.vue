<script setup lang="ts">
import CatalogRegister from '@alxtexh-enterprise/panel/pages/CatalogRegister.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
    <CatalogRegister v-bind="$attrs as any" />
</template>
