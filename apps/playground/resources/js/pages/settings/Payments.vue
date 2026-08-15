<script setup lang="ts">
import Payments from '@alxtexh-enterprise/panel/pages/settings/Payments.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <Payments v-bind="$attrs as any" />
</template>
