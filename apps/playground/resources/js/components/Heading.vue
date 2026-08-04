<script setup lang="ts">
/** The section heading is the package's now. */
import { PkHeading } from '@panelkit/panel';

defineProps<{
    title: string;
    description?: string;
    variant?: 'default' | 'small';
}>();
</script>

<template>
    <PkHeading
        :title="title"
        :description="description"
        :variant="variant ?? 'default'"
    />
</template>
