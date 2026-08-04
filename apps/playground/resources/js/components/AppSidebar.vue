<script setup lang="ts">
/**
 * The sidebar is the package's now.
 *
 * IT WAS 509 LINES HERE, and every one of them moved rather than being
 * rewritten - the flyouts when collapsed, the collapsible groups, the mobile
 * sheet, the horizontal mode. What is left is the one thing that is genuinely
 * this application's: the account menu's ITEMS, which link to its settings
 * centre, its operations screen and its lock screen.
 */
import { AppSidebar } from '@alxtexh-enterprise/panel/inertia';
import UserMenuContent from '@/components/UserMenuContent.vue';
</script>

<template>
    <AppSidebar>
        <template #userMenu="{ user }">
            <UserMenuContent v-if="user" :user="user" />
        </template>
    </AppSidebar>
</template>
