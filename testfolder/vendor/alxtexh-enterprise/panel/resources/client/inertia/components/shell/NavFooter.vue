<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@alxtexh-enterprise/panel'
import { toUrl } from '@alxtexh-enterprise/panel'
import type { NavItem } from '../../types'

type Props = {
    items: NavItem[]
    class?: string
}

defineProps<Props>()
</script>

<template>
    <SidebarGroup :class="`group-data-[collapsible=icon]:p-0 ${$props.class || ''}`">
        <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem v-for="item in items" :key="item.title">
                    <SidebarMenuButton
                        class="text-sidebar-foreground hover:text-sidebar-accent-foreground"
                        :tooltip="item.title"
                        as-child
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
