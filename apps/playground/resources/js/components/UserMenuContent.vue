<script setup lang="ts">
import { Link, router, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import { Activity, DatabaseBackup, Lock, LogOut, ScrollText, Server, Settings, Trash2, UsersRound } from '@lucide/vue'
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
import { lock, resource } from '@/routes/panel'

import type { User } from '@/types'

type Props = {
    user: User
}

const handleLogout = () => {
    router.flushAll()
}

defineProps<Props>()

const page = usePage()

/**
 * Whether this is the application's OWN portal.
 *
 * EVERYTHING BELOW THE PROFILE BELONGS TO THE APPLICATION, not to the panel:
 * user management, backups, logs and monitoring are all routed at the root, so a
 * generated portal offering them is a portal you leave by opening your own
 * account menu. The account itself - and signing out of it - is the only part
 * that means the same thing in every portal.
 *
 * A PORTAL THAT WANTS MORE ADDS IT. This is the floor, not the ceiling: a panel
 * declares its own pages, and a plugin can install screens into it.
 */
const isApplicationPortal = computed(
    () => (page.props.panelHome as { isDefault: boolean } | undefined)?.isDefault ?? true,
)

/**
 * This portal's bin, or null where it has none.
 *
 * IT IS THE ONE ITEM HERE THAT IS NOT GATED ON THE APPLICATION PORTAL, and the
 * distinction is the whole rule this menu follows. Backups, logs and monitoring
 * are the APPLICATION's screens, routed at the root, so offering them inside a
 * generated portal is offering a way out of it. A bin belongs to the portal you
 * are standing in - `/reseller/trash` holds what was deleted from the reseller
 * portal and nothing else - so hiding it there would leave that portal's own
 * screen reachable from nothing.
 *
 * The server decides whether it exists at all: a portal whose resources do not
 * soft-delete has no bin, and this is null.
 */
const trash = computed(
    () => page.props.panelTrash as { title: string; href: string } | null | undefined,
)
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
        <DropdownMenuItem
            v-if="isApplicationPortal && page.props.auth?.can?.manageRoles"
            :as-child="true"
        >
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
        <DropdownMenuItem
            v-if="isApplicationPortal && page.props.auth?.can?.viewOperations"
            :as-child="true"
        >
            <Link class="block w-full cursor-pointer" :href="operations.backups.url()" prefetch>
                <DatabaseBackup class="mr-2 h-4 w-4" />
                Backups
            </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
            v-if="isApplicationPortal && page.props.auth?.can?.viewOperations"
            :as-child="true"
        >
            <Link class="block w-full cursor-pointer" :href="operations.logs.url()" prefetch>
                <ScrollText class="mr-2 h-4 w-4" />
                Logs
            </Link>
        </DropdownMenuItem>

        <!--
            HOW THE INSTALLATION IS DOING, which is a different question from
            what it is configured as. Load, memory, disk, database latency, queue
            depth, failed jobs and whether cron is ticking - all previously
            requiring a shell, and the configuration is still on the same page
            underneath.
        -->
        <DropdownMenuItem
            v-if="isApplicationPortal && page.props.auth?.can?.viewOperations"
            :as-child="true"
        >
            <Link class="block w-full cursor-pointer" :href="operations.monitoring.url()" prefetch>
                <Server class="mr-2 h-4 w-4" />
                Monitoring
            </Link>
        </DropdownMenuItem>

        <!--
            WHAT THE PANEL DID TO ITSELF, which is the same kind of question as
            the logs above it and a different kind from anything in the sidebar.
            It sat in the Organisation group between two screens that manage
            people, where it read as a third way to administer them.
        -->
        <DropdownMenuItem
            v-if="isApplicationPortal && page.props.auth?.can?.viewOperations"
            :as-child="true"
        >
            <Link class="block w-full cursor-pointer" :href="resource.url('activities')" prefetch>
                <Activity class="mr-2 h-4 w-4" />
                Activity
            </Link>
        </DropdownMenuItem>

        <!--
            THE BIN, LAST OF THE SCREENS AND NOT GATED ON THE PORTAL.
            See the `trash` computed: this one belongs to whichever portal you
            are in, so hiding it outside the application portal would orphan
            that portal's own screen. Absent entirely where nothing soft-deletes.
        -->
        <DropdownMenuItem v-if="trash" :as-child="true">
            <Link class="block w-full cursor-pointer" :href="trash.href" prefetch>
                <Trash2 class="mr-2 h-4 w-4" />
                {{ trash.title }}
            </Link>
        </DropdownMenuItem>

        <!--
            Above Log out and separated from it, because they are opposite acts
            that are one slip apart: locking keeps the session and the page you
            were on, signing out throws both away.
        -->
        <DropdownMenuItem v-if="isApplicationPortal" :as-child="true">
            <Link class="block w-full cursor-pointer" :href="lock.url()" method="post" as="button">
                <Lock class="mr-2 h-4 w-4" />
                Lock screen
            </Link>
        </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />

    <!--
        LOG OUT IS IN EVERY PORTAL. It is the one item that means the same thing
        wherever you are, and a portal you cannot sign out of is one people close
        the tab on - which leaves the session open on a shared machine.
    -->
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
