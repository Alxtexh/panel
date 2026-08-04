<script setup lang="ts">
/**
 * The topbar is the package's now - see `components/AppSidebar.vue`.
 *
 * The account menu's items stay here: they link to this application's settings
 * centre, operations screen and lock screen.
 */
import { AppSidebarHeader } from '@panelkit/inertia';
import type { BreadcrumbItem } from '@/types';
import UserMenuContent from '@/components/UserMenuContent.vue';

defineProps<{ breadcrumbs?: BreadcrumbItem[] }>();
</script>

<template>
    <AppSidebarHeader :breadcrumbs="breadcrumbs">
        <template #userMenu="{ user }">
            <UserMenuContent :user="user" />
        </template>
    </AppSidebarHeader>
</template>
