<script setup lang="ts">
import Directory from '@alxtexh-enterprise/panel/pages/Directory.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
    <Directory v-bind="$attrs as any" />
</template>
