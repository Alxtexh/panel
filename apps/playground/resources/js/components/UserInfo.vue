<script setup lang="ts">
/** The avatar-and-name pair is the package's now - see `AppSidebar.vue`. */
import { UserInfo } from '@alxtexh-enterprise/panel/inertia';
/*
 * THE PACKAGE'S `User`, because this component is a shim over the packaged
 * one and forwards the value straight through. Declaring this app's wider
 * `User` here narrows nothing and rejects the value the packaged shell
 * actually hands out.
 */
import type { User } from '@alxtexh-enterprise/panel/inertia';

defineProps<{ user: User; showEmail?: boolean }>();
</script>

<template>
    <UserInfo :user="user" :show-email="showEmail" />
</template>
