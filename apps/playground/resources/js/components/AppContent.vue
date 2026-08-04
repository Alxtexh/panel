<script setup lang="ts">
/** The main column is the package's now - see `AppSidebar.vue`. */
import { AppContent } from '@panelkit/panel/inertia';
import type { AppVariant } from '@/types';

defineProps<{ variant?: AppVariant; class?: string }>();
</script>

<template>
    <AppContent :variant="variant ?? 'sidebar'" :class="$props.class">
        <slot />
    </AppContent>
</template>
