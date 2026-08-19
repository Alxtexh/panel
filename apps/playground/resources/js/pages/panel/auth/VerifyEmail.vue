<script setup lang="ts">
import { VerifyEmail } from '@alxtexh-enterprise/panel/inertia';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <VerifyEmail v-bind="$attrs as any" />
</template>
