<script setup lang="ts">
import { usePage } from '@inertiajs/vue3'
import { ChevronsUpDown } from '@lucide/vue'
import { computed } from 'vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@alxtexh-enterprise/panel'
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@alxtexh-enterprise/panel'
import type { User } from '../../types'
import UserInfo from './UserInfo.vue'

const page = usePage()
/**
 * TYPED, NOT READ OFF AN UNTYPED BAG. `usePage()` returns props the checker
 * knows nothing about, so `page.props.auth.user` is a property access on
 * `unknown` - which this package's own tsconfig tolerated and a consuming
 * application's did not. The failure then lands in THEIR build, on a file they
 * did not write and cannot edit.
 */
/**
 * THE PACKAGE'S OWN `User`, not a narrower shape invented here.
 *
 * A local guess at the fields compiles until somebody passes the value to
 * `UserInfo`, which wants the whole thing - and the error then lands in a
 * CONSUMER'S build, naming a packaged file they cannot edit. One type, one
 * source.
 */
type SharedAuth = { user?: User | null }

const user = computed(() => (page.props.auth as SharedAuth | undefined)?.user ?? null)
const { isMobile, state } = useSidebar()
</script>

<template>
    <SidebarMenu>
        <SidebarMenuItem>
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <SidebarMenuButton
                        size="lg"
                        class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        data-test="sidebar-menu-button"
                    >
                        <!--
                            `v-if` RATHER THAN A CAST. `user` is null until the
                            shared props arrive, and `UserInfo` reads `.name`
                            and `.avatar` unconditionally - so asserting
                            non-null here would move a real runtime error into
                            a place the checker stops looking.
                        -->
                        <UserInfo v-if="user" :user="user" />
                        <ChevronsUpDown class="ml-auto size-4" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    class="w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                    :side="isMobile ? 'bottom' : state === 'collapsed' ? 'left' : 'bottom'"
                    align="end"
                    :side-offset="4"
                >
                    <!--
                THE MENU'S CONTENTS ARE THE APPLICATION'S. The reference app
                links here to its settings centre, its operations screen and its
                lock screen - all of them ITS routes, which a package cannot
                name. What is packaged is the trigger, the avatar and the
                placement; what goes inside is passed in.
            -->
                    <slot name="menu" :user="user" />
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    </SidebarMenu>
</template>
