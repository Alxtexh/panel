<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@alxtexh-enterprise/panel'
import { toUrl } from '@alxtexh-enterprise/panel'
import { useCurrentUrl } from '../../composables/useCurrentUrl'
import type { NavItem } from '../../types'

type Props = {
    items: NavItem[]
    class?: string
}

defineProps<Props>()

const { isCurrentUrl } = useCurrentUrl()
</script>

<template>
    <!--
        Secondary footer nav (shadcn `NavSecondary` / sidebar-08). The label
        hides in icon-rail mode; each row keeps its icon and tooltip.
    -->
    <SidebarGroup :class="`group-data-[collapsible=icon]:p-0 ${$props.class || ''}`">
        <SidebarGroupLabel class="group-data-[collapsible=icon]:hidden">Support</SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem v-for="item in items" :key="item.title">
                    <SidebarMenuButton
                        as-child
                        :is-active="isCurrentUrl(item.href)"
                        :tooltip="item.title"
                        class="text-sidebar-foreground hover:text-sidebar-accent-foreground"
                    >
                        <Link class="block w-full" :href="toUrl(item.href)" prefetch>
                            <component :is="item.icon" />
                            <span>{{ item.title }}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
</template>
