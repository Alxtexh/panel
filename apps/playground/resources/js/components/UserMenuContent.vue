<script setup lang="ts">
import { Link, router, usePage } from '@inertiajs/vue3'
import { DatabaseBackup, Lock, LogOut, ScrollText, Server, Settings, UsersRound } from '@lucide/vue'
import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import UserInfo from '@/components/UserInfo.vue'
import { logout, userManagement } from '@/routes'
import { edit } from '@/routes/profile'
/*
 * GENERATED, not typed out. A literal path here is a string nothing checks:
 * rename the route and this menu silently starts offering a 404.
 */
import operations from '@/routes/operations'
import { lock } from '@/routes/panel'

import type { User } from '@/types'

type Props = {
    user: User
}

const handleLogout = () => {
    router.flushAll()
}

defineProps<Props>()

const page = usePage()
</script>

<template>
    <DropdownMenuLabel class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <UserInfo :user="user" :show-email="true" />
        </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
        <DropdownMenuItem :as-child="true">
            <Link class="block w-full cursor-pointer" :href="edit()" prefetch>
                <Settings class="mr-2 h-4 w-4" />
                Settings
            </Link>
        </DropdownMenuItem>

        <!--
            Directly below Settings, because it is the same kind of thing -
            configuration - and only shown to somebody who can actually open it.
            A link that always 403s advertises a page and then refuses it.
        -->
        <DropdownMenuItem v-if="page.props.auth?.can?.manageRoles" :as-child="true">
            <Link class="block w-full cursor-pointer" :href="userManagement.url({ tab: 'users' })" prefetch>
                <UsersRound class="mr-2 h-4 w-4" />
                User management
            </Link>
        </DropdownMenuItem>

        <!--
            OPERATIONS SITS IN THE ACCOUNT MENU, not in the resource navigation,
            because it is not a resource: backups and logs belong to the
            INSTALLATION rather than to the organisation whose records fill the
            sidebar. Grouping it with the panel-wide items keeps that distinction
            visible instead of implying it is another thing to manage.

            Shown only to somebody holding `view_operations` - a link that always
            403s advertises a page and then refuses it.
        -->
        <DropdownMenuItem v-if="page.props.auth?.can?.viewOperations" :as-child="true">
            <Link class="block w-full cursor-pointer" :href="operations.backups.url()" prefetch>
                <DatabaseBackup class="mr-2 h-4 w-4" />
                Backups
            </Link>
        </DropdownMenuItem>

        <DropdownMenuItem v-if="page.props.auth?.can?.viewOperations" :as-child="true">
            <Link class="block w-full cursor-pointer" :href="operations.logs.url()" prefetch>
                <ScrollText class="mr-2 h-4 w-4" />
                Logs
            </Link>
        </DropdownMenuItem>

        <!--
            What the installation is RUNNING, as opposed to what it has done.
            Drivers, versions, tenancy mode and whether cron is ticking at all -
            answers that previously needed a shell and a copy of the config.
        -->
        <DropdownMenuItem v-if="page.props.auth?.can?.viewOperations" :as-child="true">
            <Link class="block w-full cursor-pointer" :href="operations.platform.url()" prefetch>
                <Server class="mr-2 h-4 w-4" />
                Platform
            </Link>
        </DropdownMenuItem>

        <!--
            Above Log out and separated from it, because they are opposite acts
            that are one slip apart: locking keeps the session and the page you
            were on, signing out throws both away.
        -->
        <DropdownMenuItem :as-child="true">
            <Link class="block w-full cursor-pointer" :href="lock.url()" method="post" as="button">
                <Lock class="mr-2 h-4 w-4" />
                Lock screen
            </Link>
        </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem :as-child="true">
        <Link
            class="block w-full cursor-pointer"
            :href="logout()"
            @click="handleLogout"
            as="button"
            data-test="logout-button"
        >
            <LogOut class="mr-2 h-4 w-4" />
            Log out
        </Link>
    </DropdownMenuItem>
</template>
