<script setup lang="ts">
/** The trail is the package's now. */
import { Breadcrumbs } from '@panelkit/inertia';
import type { BreadcrumbItem } from '@/types';

defineProps<{ breadcrumbs?: BreadcrumbItem[] }>();
</script>

<template>
    <Breadcrumbs :breadcrumbs="breadcrumbs ?? []" />
</template>
