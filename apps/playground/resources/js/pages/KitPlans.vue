<script setup lang="ts">
import PlanSetup from '@alxtexh-enterprise/panel/pages/PlanSetup.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <PlanSetup v-bind="$attrs as any" />
</template>
