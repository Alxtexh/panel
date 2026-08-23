<script setup lang="ts">
import { PanelShell } from '../../inertia'

withDefaults(
    defineProps<{
        breadcrumbs?: { title: string; href?: string | null }[]
    }>(),
    {
        breadcrumbs: () => [],
    },
)
</script>

<template>
    <PanelShell :breadcrumbs="breadcrumbs">
        <slot />
    </PanelShell>
</template>
