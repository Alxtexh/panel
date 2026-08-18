<script setup lang="ts">
/**
 * The account menu's contents, when nobody supplied their own - and it is THE
 * DEMO'S MENU now, not a four-item cousin of it.
 *
 * IT USED TO OFFER Profile, Security, Help and Sign out, while the reference
 * app's own menu offered Settings, User management, Backups, Logs, Monitoring,
 * Activity, Trash and Log out. The lock padlock lives in the header immediately
 * before search, not here. The urls are shared by the server now
 * (`SharePanelProps`), resolved per panel and null where the panel lacks the
 * screen, so the same menu renders in the demo and in a portal `make:panel`
 * created this morning.
 *
 * EVERY ITEM DECLARES WHAT IT NEEDS - a url that exists, an ability where one
 * guards the screen - and hides itself when either is absent. Nothing is gated
 * on "is this the default panel": a portal without operations shares null urls
 * and drops those items on its own, which is the difference between a menu
 * that reflects the portal and one that guesses at it.
 *
 * THE FLOOR, NOT THE CEILING. An application wanting more overrides the
 * `userMenu` slot and this never renders - the contract is unchanged.
 */
import { Link, router, usePage } from '@inertiajs/vue3'
import {
    Activity,
    DatabaseBackup,
    LogOut,
    ScrollText,
    Server,
    Settings,
    Trash2,
    UserRound,
    UsersRound,
} from '@lucide/vue'
import { computed } from 'vue'
import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@alxtexh-enterprise/panel'
import type { User } from '../../types'
import UserInfo from './UserInfo.vue'

const page = usePage()

const panel = computed(
    () =>
        (page.props as Record<string, any>).panel as
            | {
                  account?: string | null
                  /** Present only when Profile is absent, so Security is not a third door. */
                  security?: string | null
                  /** What this portal added - see `Panel::userMenuItems()`. */
                  menuItems?: { key: string; label: string; href: string; icon?: string | null }[]
                  help?: string | null
                  logout?: string | null
                  settings?: string | null
                  userManagement?: string | null
                  activity?: string | null
                  operations?: {
                      backups?: string | null
                      logs?: string | null
                      monitoring?: string | null
                  } | null
              }
            | undefined,
)

/**
 * TYPED HERE RATHER THAN TRUSTED FROM AN AUGMENTATION. `declare module
 * '@inertiajs/core'` attaches `auth` to one resolved copy of that module, and
 * a file mixing package and app copies reads `page.props.auth` as `{}` -
 * every ability check becomes a property access on an empty object.
 */
type Abilities = {
    can?: {
        manageRoles?: boolean
        viewOperations?: boolean
    }
}

const can = computed(() => (page.props.auth as Abilities | undefined)?.can ?? {})

const user = computed(
    () => (page.props.auth as { user?: User | null } | undefined)?.user ?? null,
)

const operations = computed(() => panel.value?.operations ?? {})

/**
 * This portal's bin, or null where it has none. The server decides: a portal
 * whose resources do not soft-delete shares null, and no item renders.
 */
const trash = computed(
    () => page.props.panelTrash as { title: string; href: string } | null | undefined,
)

/**
 * Profile and Settings stay in this menu. Security is a sibling tab inside
 * the settings layout, not a third dropdown row. Help stays in the sidebar
 * footer. The lock padlock is in the header immediately before search, not
 * here.
 */
const handleLogout = () => {
    router.flushAll()
}
</script>

<template>
    <DropdownMenuLabel v-if="user" class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <UserInfo :user="user" :show-email="true" />
        </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator v-if="user" />

    <DropdownMenuGroup>
        <DropdownMenuItem v-if="panel?.account" as-child>
            <Link class="block w-full cursor-pointer" :href="panel.account" prefetch>
                <UserRound class="mr-2 h-4 w-4" />
                Profile
            </Link>
        </DropdownMenuItem>

        <DropdownMenuItem v-if="panel?.settings" as-child>
            <Link class="block w-full cursor-pointer" :href="panel.settings" prefetch>
                <Settings class="mr-2 h-4 w-4" />
                Settings
            </Link>
        </DropdownMenuItem>

        <!--
            Directly below Settings, because it is the same kind of thing -
            configuration - and only shown to somebody who can actually open
            it. A link that always 403s advertises a page and then refuses it.
        -->
        <DropdownMenuItem v-if="panel?.userManagement && can.manageRoles" as-child>
            <Link class="block w-full cursor-pointer" :href="panel.userManagement" prefetch>
                <UsersRound class="mr-2 h-4 w-4" />
                User management
            </Link>
        </DropdownMenuItem>

        <!--
            OPERATIONS SITS IN THE ACCOUNT MENU, not in the resource
            navigation: backups and logs belong to the INSTALLATION rather
            than to the organisation whose records fill the sidebar.
        -->
        <DropdownMenuItem v-if="operations.backups && can.viewOperations" as-child>
            <Link class="block w-full cursor-pointer" :href="operations.backups" prefetch>
                <DatabaseBackup class="mr-2 h-4 w-4" />
                Backups
            </Link>
        </DropdownMenuItem>

        <DropdownMenuItem v-if="operations.logs && can.viewOperations" as-child>
            <Link class="block w-full cursor-pointer" :href="operations.logs" prefetch>
                <ScrollText class="mr-2 h-4 w-4" />
                Logs
            </Link>
        </DropdownMenuItem>

        <DropdownMenuItem v-if="operations.monitoring && can.viewOperations" as-child>
            <Link class="block w-full cursor-pointer" :href="operations.monitoring" prefetch>
                <Server class="mr-2 h-4 w-4" />
                Monitoring
            </Link>
        </DropdownMenuItem>

        <!--
            WHAT THE PANEL DID TO ITSELF - the same kind of question as the
            logs above it, and a different kind from anything in the sidebar.
        -->
        <DropdownMenuItem v-if="panel?.activity && can.viewOperations" as-child>
            <Link class="block w-full cursor-pointer" :href="panel.activity" prefetch>
                <Activity class="mr-2 h-4 w-4" />
                Activity
            </Link>
        </DropdownMenuItem>

        <!--
            THE BIN BELONGS TO THE PORTAL YOU ARE STANDING IN -
            `/reseller/trash` holds what was deleted from the reseller portal
            and nothing else - so it is never gated on which portal this is.
        -->
        <DropdownMenuItem v-if="trash" as-child>
            <Link class="block w-full cursor-pointer" :href="trash.href" prefetch>
                <Trash2 class="mr-2 h-4 w-4" />
                {{ trash.title }}
            </Link>
        </DropdownMenuItem>
    </DropdownMenuGroup>

    <!--
        WHAT THIS PORTAL ADDED - `Panel::userMenuItems()`.

        SEPARATED FROM THE CORE ABOVE, because those items mean the same thing
        in every portal and these are this one's own. A divider is the cheapest
        way to say which is which.

        ALREADY PERMISSION-FILTERED AND ALREADY RESOLVED by the server - an
        entry somebody may not open never reaches the browser, and an `href`
        declared as a closure was called during prop sharing. Nothing here
        decides anything; it draws what it was given.

        AN EXTERNAL LINK IS AN `<a>`, NOT A `<Link>`. Inertia's Link would try
        to fetch a foreign origin as a page visit and fail silently - and a
        status page or a docs site is exactly what a portal adds here.
    -->
    <template v-if="panel?.menuItems?.length">
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
            <!--
                THE `v-if` IS REDUNDANT BESIDE THE WRAPPER ABOVE AND STAYS.
                `NavigationCoverageTest` reads this markup and requires every
                menu item to guard on `panel?.` - because the failure it exists
                to prevent is an item offered in a portal that cannot serve it,
                and a guard on an outer element is one refactor away from being
                separated from the item it protects.
            -->
            <template v-for="item in panel?.menuItems ?? []" :key="item.key">
                <DropdownMenuItem v-if="panel?.menuItems" as-child>
                <a
                    v-if="/^https?:\/\//.test(item.href)"
                    class="block w-full cursor-pointer"
                    :href="item.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ item.label }}</a
                >
                <Link v-else class="block w-full cursor-pointer" :href="item.href">{{
                    item.label
                    }}</Link>
                </DropdownMenuItem>
            </template>
        </DropdownMenuGroup>
    </template>

    <DropdownMenuSeparator v-if="panel?.logout" />

    <!--
        LOG OUT IS IN EVERY PORTAL - the one item that means the same thing
        wherever you are. Absent only when the server shared no logout route,
        because a menu entry posting to a route that does not exist is a 404
        on the one action somebody takes when they want to be safe.
    -->
    <DropdownMenuItem v-if="panel?.logout" as-child>
        <Link
            class="block w-full cursor-pointer"
            :href="panel.logout"
            method="post"
            as="button"
            data-test="logout-button"
            @click="handleLogout"
        >
            <LogOut class="mr-2 h-4 w-4" />
            Log out
        </Link>
    </DropdownMenuItem>
</template>
