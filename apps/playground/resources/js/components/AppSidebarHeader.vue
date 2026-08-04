<script setup lang="ts">
/**
 * The topbar is the package's now - see `components/AppSidebar.vue`.
 *
 * The account menu's items stay here: they link to this application's settings
 * centre, operations screen and lock screen.
 */
import { AppSidebarHeader } from '@alxtexh-enterprise/panel/inertia';
import UserMenuContent from '@/components/UserMenuContent.vue';
import type { BreadcrumbItem } from '@/types';

defineProps<{ breadcrumbs?: BreadcrumbItem[] }>();
</script>

<template>
    <AppSidebarHeader :breadcrumbs="breadcrumbs">
        <template #userMenu="{ user }">
            <UserMenuContent :user="user" />
        </template>
    </AppSidebarHeader>
</template>
