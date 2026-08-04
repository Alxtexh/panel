<script setup lang="ts">
/** The header layout's bar is the package's now. */
import { AppHeader } from '@panelkit/panel/inertia';
import UserMenuContent from '@/components/UserMenuContent.vue';
import type { BreadcrumbItem } from '@/types';

defineProps<{ breadcrumbs?: BreadcrumbItem[] }>();
</script>

<template>
    <AppHeader :breadcrumbs="breadcrumbs">
        <template #userMenu="{ user }">
            <UserMenuContent :user="user" />
        </template>
    </AppHeader>
</template>
