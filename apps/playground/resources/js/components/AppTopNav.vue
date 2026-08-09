<script setup lang="ts">
/** The horizontal top navigation is the package's now. */
import { AppTopNav } from '@alxtexh-enterprise/panel/inertia';
import UserMenuContent from '@/components/UserMenuContent.vue';
import type { BreadcrumbItem } from '@/types';

defineProps<{ breadcrumbs?: BreadcrumbItem[] }>();
</script>

<template>
    <AppTopNav :breadcrumbs="breadcrumbs">
        <!--
            `v-if` RATHER THAN A CAST - `user` is null until the shared props
            arrive, the same guard the sidebar wrapper has always had. The slot
            only became honestly typed when `AppTopNav` started forwarding it.
        -->
        <template #userMenu="{ user }">
            <UserMenuContent v-if="user" :user="user" />
        </template>
    </AppTopNav>
</template>
