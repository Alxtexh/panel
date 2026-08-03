<script setup lang="ts">
import { usePage } from '@inertiajs/vue3'
import { ChevronsUpDown } from '@lucide/vue'
import { computed } from 'vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@panelkit/ui'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@panelkit/ui'
import UserInfo from './UserInfo.vue'

const page = usePage()
const user = computed(() => page.props.auth.user)
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
                        <UserInfo :user="user" />
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
