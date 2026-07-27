<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { computed, onMounted, ref } from 'vue';
import { PkDropdown, useAppearance } from '@panelkit/ui';
import { BookOpen, FolderGit2, HelpCircle, Info, LayoutGrid, MessageCircleQuestion, Package, Router as RouterIcon, Users } from '@lucide/vue';
import AppLogo from '@/components/AppLogo.vue';
import NavFooter from '@/components/NavFooter.vue';
import NavMain from '@/components/NavMain.vue';
import NavUser from '@/components/NavUser.vue';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    useSidebar,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

/**
 * Built from the resource registry, delivered with the initial payload.
 *
 * A hardcoded list would mean `make:panel-resource --generate` produced a
 * screen you could only reach by typing the URL, which is not "no hand
 * editing". Items are already permission-filtered server-side, so a resource
 * the user cannot view never reaches the client at all.
 */
const page = usePage();

/**
 * Sidebar side comes from the user preference.
 *
 * Passed to the component rather than flipped with CSS: the sidebar is
 * fixed-positioned, so `flex-direction: row-reverse` moved only the spacer and
 * left the panel sitting on top of the content.
 */
const { appearance } = useAppearance();

/**
 * COLLAPSED GROUPS BECOME FLYOUTS.
 *
 * An icon rail has no width to expand a group into, so the previous behaviour
 * was that collapsing the sidebar simply HID every grouped resource — the rail
 * showed Dashboard and nothing else, and the only way back to Clients was to
 * expand again. A flyout beside the rail is the standard answer and the one the
 * reference panels use.
 *
 * It opens on hover as well as click, because a rail is a scanning surface:
 * requiring a click to discover what an icon contains defeats the point of
 * collapsing.
 */
const { state } = useSidebar();

const isCollapsed = computed(() => state.value === 'collapsed');

/** The flyout opens away from the rail, whichever edge it is on. */
const flyoutSide = computed<'left' | 'right'>(() =>
    appearance.value.sidebarSide === 'right' ? 'left' : 'right',
);

const { isCurrentUrl } = useCurrentUrl();

function groupIsActive(items: NavItem[]): boolean {
    return items.some((i) => isCurrentUrl(typeof i.href === 'string' ? i.href : String(i.href)));
}

const iconFor: Record<string, typeof LayoutGrid> = {
    users: Users,
    router: RouterIcon,
    package: Package,
};

const dashboardItem: NavItem = { title: 'Dashboard', href: dashboard(), icon: LayoutGrid };

/**
 * Navigation, grouped by the `group` each resource declares.
 *
 * Resources have carried a group since Phase 4 and nothing rendered it, so every
 * screen sat in one flat list. That is fine at three resources and unusable at
 * twenty — which is the point at which a panel stops being navigable and starts
 * needing search for everything.
 *
 * Ungrouped resources stay at the top level rather than landing in a
 * catch-all "Other": a group of one is noise.
 */
const navGroups = computed(() => {
    const items = (page.props.panelNav as { title: string; href: string; icon: string; group: string | null }[] | undefined) ?? [];

    const ungrouped: NavItem[] = [];
    const grouped = new Map<string, NavItem[]>();

    for (const item of items) {
        const entry: NavItem = { title: item.title, href: item.href, icon: iconFor[item.icon] ?? Package };

        if (!item.group) {
            ungrouped.push(entry);
            continue;
        }

        grouped.set(item.group, [...(grouped.get(item.group) ?? []), entry]);
    }

    return { ungrouped: [dashboardItem, ...ungrouped], grouped: [...grouped.entries()] };
});

/** Which groups are closed. Open by default — a panel that hides its own navigation on first visit is hostile. */
const collapsed = ref<Set<string>>(new Set());

function toggleGroup(name: string) {
    const next = new Set(collapsed.value);
    next.has(name) ? next.delete(name) : next.add(name);
    collapsed.value = next;

    try {
        localStorage.setItem('panelkit.nav.collapsed', JSON.stringify([...next]));
    } catch {
        // Private mode. The group still toggles; only persistence is lost.
    }
}

onMounted(() => {
    try {
        const saved = localStorage.getItem('panelkit.nav.collapsed');
        if (saved) collapsed.value = new Set(JSON.parse(saved) as string[]);
    } catch {
        // Corrupt storage falls back to everything open.
    }
});

const supportNavItems: NavItem[] = [
    { title: 'Help', href: '/help', icon: HelpCircle },
    { title: 'FAQ', href: '/faq', icon: MessageCircleQuestion },
    { title: 'About', href: '/about', icon: Info },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/vue-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#vue',
        icon: BookOpen,
    },
];
</script>

<template>
    <Sidebar collapsible="icon" variant="inset" :side="appearance.sidebarSide === 'right' ? 'right' : 'left'">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link :href="dashboard()">
                            <AppLogo />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <NavMain :items="navGroups.ungrouped" label="Platform" />

            <!--
                Two renderings of one group list.

                EXPANDED: a collapsible section, so twenty resources stay
                navigable. COLLAPSED: a flyout, because the rail is too narrow
                to expand into — without this branch every grouped resource
                disappears the moment the sidebar is collapsed.
            -->
            <template v-if="isCollapsed">
                <SidebarGroup v-for="[name, items] in navGroups.grouped" :key="name" class="px-2 py-0">
                    <PkDropdown :placement="flyoutSide" width="w-52" :offset="8" hoverable>
                        <template #trigger>
                            <button
                                type="button"
                                class="hover:bg-sidebar-accent flex size-8 items-center justify-center rounded-md transition-colors"
                                :class="groupIsActive(items) ? 'bg-sidebar-accent' : ''"
                                :aria-label="name"
                                :title="name"
                            >
                                <component :is="items[0]?.icon" class="size-4" />
                            </button>
                        </template>

                        <template #panel="{ close }">
                            <p class="text-muted-foreground px-2 py-1.5 text-xs font-semibold">{{ name }}</p>
                            <Link
                                v-for="item in items"
                                :key="item.title"
                                :href="item.href"
                                class="hover:bg-accent flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm"
                                :class="isCurrentUrl(item.href) ? 'text-foreground font-medium' : ''"
                                @click="close()"
                            >
                                <component :is="item.icon" class="size-4 shrink-0" />
                                {{ item.title }}
                            </Link>
                        </template>
                    </PkDropdown>
                </SidebarGroup>
            </template>

            <SidebarGroup v-for="[name, items] in navGroups.grouped" v-else :key="name" class="px-2 py-0">
                <button
                    type="button"
                    class="text-muted-foreground hover:text-foreground flex w-full items-center justify-between px-2 py-1.5 text-xs font-medium"
                    :aria-expanded="!collapsed.has(name)"
                    @click="toggleGroup(name)"
                >
                    {{ name }}
                    <svg
                        viewBox="0 0 24 24"
                        class="size-3.5 transition-transform"
                        :class="collapsed.has(name) ? '-rotate-90' : ''"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>

                <NavMain v-if="!collapsed.has(name)" :items="items" />
            </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
            <!-- Support pages live in the footer, not the main nav: they are
                 read once and then rarely, so they should not compete for
                 attention with the resources. -->
            <NavFooter :items="supportNavItems" />
            <NavFooter :items="footerNavItems" />
            <NavUser />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
