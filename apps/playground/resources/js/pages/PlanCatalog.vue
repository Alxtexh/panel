<script setup lang="ts">
import PlanCatalog from '@alxtexh-enterprise/panel/pages/PlanCatalog.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
    <PlanCatalog v-bind="$attrs as any" />
</template>
