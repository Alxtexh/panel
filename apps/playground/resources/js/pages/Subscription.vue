<script setup lang="ts">
import Subscription from '@alxtexh-enterprise/panel/pages/Subscription.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <Subscription v-bind="$attrs as any" />
</template>
