<script setup lang="ts">
import Catalog from '@alxtexh-enterprise/panel/pages/Catalog.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
    <Catalog v-bind="$attrs as any" />
</template>
