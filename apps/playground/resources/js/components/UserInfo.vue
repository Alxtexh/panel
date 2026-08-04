<script setup lang="ts">
/** The avatar-and-name pair is the package's now - see `AppSidebar.vue`. */
import { UserInfo } from '@panelkit/inertia';
import type { User } from '@/types';

defineProps<{ user: User; showEmail?: boolean }>();
</script>

<template>
    <UserInfo :user="user" :show-email="showEmail" />
</template>
