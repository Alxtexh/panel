<script setup lang="ts">
/** The de-duplicating error list is the package's now. */
import { PkAlertError } from '@alxtexh-enterprise/panel';

defineProps<{ errors: string[]; title?: string }>();
</script>

<template>
    <PkAlertError :errors="errors" :title="title" />
</template>
