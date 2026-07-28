<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import type { NavItem } from '@/types';

defineProps<{
    /**
     * Heading above the items.
     *
     * Optional because the sidebar renders its own group headings now - a
     * hardcoded 'Platform' inside each one repeated the label under every
     * group.
     */
    label?: string;
    items: NavItem[];
    /**
     * Render as children of a group heading rather than as top-level entries.
     *
     * THE ICON BELONGS TO THE GROUP, NOT TO EACH CHILD. An icon per item inside
     * a group is four or five glyphs stacked vertically, none of which
     * distinguishes anything - "Active Clients", "Clients", "IP Bindings" and
     * "Leads" are all subscriber things, so four subscriber-ish icons carry no
     * information and just make the column noisy. One icon on the heading says
     * what the whole group is; the children only need to be legible and to look
     * subordinate.
     *
     * The connecting line and dots do the work the icons were failing to do:
     * they show these items belong to the heading above them, which is the only
     * thing a reader needs from this level.
     */
    nested?: boolean;
}>();

const emit = defineEmits<{ (e: 'navigate'): void }>();

const { isCurrentUrl } = useCurrentUrl();
</script>

<template>
    <SidebarGroup class="px-2 py-0">
        <SidebarGroupLabel v-if="label">{{ label }}</SidebarGroupLabel>

        <!--
            NESTED: a vertical rail with a dot per item.

            The rail is a `border-l` on the list and the dots sit ON it, so the
            relationship is drawn once rather than repeated per row. `ml-4`
            lines the rail up under the centre of the heading's icon, which is
            what makes it read as descending from the heading rather than as a
            decorative stripe.
        -->
        <SidebarMenu v-if="nested" class="border-sidebar-border ml-4 gap-0 border-l pl-0">
            <SidebarMenuItem v-for="item in items" :key="item.title">
                <Link
                    :href="item.href"
                    prefetch="hover"
                    cache-for="30s"
                    class="hover:text-sidebar-accent-foreground group/nav relative flex items-center gap-2.5 py-1.5 pl-4 text-sm transition-colors"
                    @click="emit('navigate')"
                    :aria-current="isCurrentUrl(item.href) ? 'page' : undefined"
                    :class="
                        isCurrentUrl(item.href)
                            ? 'text-sidebar-accent-foreground font-medium'
                            : 'text-muted-foreground'
                    "
                >
                    <!--
                        The dot sits ON the rail, so it is pulled left by half
                        its own width. `bg-sidebar` behind it punches a gap in
                        the line, which is what makes it read as a node on the
                        line rather than a bead beside it.
                    -->
                    <span
                        class="bg-sidebar absolute -left-[3px] flex size-1.5 items-center justify-center rounded-full"
                        aria-hidden="true"
                    >
                        <span
                            class="size-1.5 rounded-full transition-colors"
                            :class="
                                isCurrentUrl(item.href)
                                    ? 'bg-primary'
                                    : 'bg-muted-foreground/40 group-hover/nav:bg-muted-foreground'
                            "
                        />
                    </span>

                    <span class="truncate">{{ item.title }}</span>
                </Link>
            </SidebarMenuItem>
        </SidebarMenu>

        <!-- Top level: no heading above it, so each item carries its own icon. -->
        <SidebarMenu v-else>
            <SidebarMenuItem v-for="item in items" :key="item.title">
                <SidebarMenuButton
                    as-child
                    :is-active="isCurrentUrl(item.href)"
                    :tooltip="item.title"
                >
                    <!--
                        PREFETCHED ON HOVER. Inertia fetches the page while the
                        pointer is still travelling to the link, so the click
                        lands on data that has already arrived - most of the
                        perceived navigation budget, for one attribute.

                        `hover` rather than `mount`: prefetching every nav item
                        on page load would issue a dozen requests for pages
                        nobody asked for, which is slower overall and looks like
                        a polling bug in the network tab.
                    -->
                    <!--
                        `aria-current="page"` is what tells a screen reader WHICH
                        item is the one you are on. Colour and weight say it to
                        everybody else and say nothing at all here.
                    -->
                    <Link
                        :href="item.href"
                        prefetch="hover"
                        cache-for="30s"
                        :aria-current="isCurrentUrl(item.href) ? 'page' : undefined"
                        @click="emit('navigate')"
                    >
                        <component :is="item.icon" />
                        <span>{{ item.title }}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>
