<script setup lang="ts">
/** The horizontal top navigation is the package's now. */
import { AppTopNav } from '@panelkit/panel/inertia';
import UserMenuContent from '@/components/UserMenuContent.vue';
import type { BreadcrumbItem } from '@/types';

defineProps<{ breadcrumbs?: BreadcrumbItem[] }>();
</script>

<template>
    <AppTopNav :breadcrumbs="breadcrumbs">
        <template #userMenu="{ user }">
            <UserMenuContent :user="user" />
        </template>
    </AppTopNav>
</template>
