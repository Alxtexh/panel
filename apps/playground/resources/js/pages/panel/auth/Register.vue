<script setup lang="ts">
import { Register } from '@alxtexh-enterprise/panel/inertia';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <Register v-bind="$attrs as any" />
</template>
