<script setup lang="ts">
/*
 * The panel's user management screen, from @alxtexh-enterprise/panel/inertia.
 *
 * THIS APPLICATION'S COPY IS GONE, along with its page class and controller.
 * The packaged `UserManagementPage` finds the users resource by matching the
 * configured auth model, so this app's `UserResource` is still what the Users
 * tab embeds - without either side naming the other.
 */
import UserManagement from '@alxtexh-enterprise/panel/pages/settings/UserManagement.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <UserManagement v-bind="$attrs as any" />
</template>
