<script setup lang="ts">
/** The outer frame is the package's now - see `AppSidebar.vue`. */
import { AppShell } from '@alxtexh-enterprise/panel/inertia';
import type { AppVariant } from '@/types';

defineProps<{ variant?: AppVariant }>();
</script>

<template>
    <AppShell :variant="variant ?? 'sidebar'">
        <slot />
    </AppShell>
</template>
