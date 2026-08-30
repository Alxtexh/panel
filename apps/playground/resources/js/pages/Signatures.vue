<script setup lang="ts">
import Signatures from '@alxtexh-enterprise/panel/pages/Signatures.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <Signatures v-bind="$attrs as any" />
</template>
