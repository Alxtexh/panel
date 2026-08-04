<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3'
import { HelpCircle, Info, LayoutGrid, MessageCircleQuestion, Sparkles } from '@lucide/vue'
import { PkBoundary, PkDropdown, useAppearance } from '@alxtexh-enterprise/panel'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import AppLogo from './AppLogo.vue'
import NavFooter from './NavFooter.vue'
import NavMain from './NavMain.vue'
import NavUser from './NavUser.vue'
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
} from '@alxtexh-enterprise/panel'
import { useCurrentUrl } from '../../composables/useCurrentUrl'
import { usePanelNav } from '../../composables/usePanelNav'
import { useSidebarOpener } from '../../lib/mobileNav'
import type { NavItem } from '../../types'

/**
 * Built from the resource registry, delivered with the initial payload.
 *
 * A hardcoded list would mean `make:panel-resource --generate` produced a
 * screen you could only reach by typing the URL, which is not "no hand
 * editing". Items are already permission-filtered server-side, so a resource
 * the user cannot view never reaches the client at all.
 */
const page = usePage()

/**
 * Sidebar side comes from the user preference.
 *
 * Passed to the component rather than flipped with CSS: the sidebar is
 * fixed-positioned, so `flex-direction: row-reverse` moved only the spacer and
 * left the panel sitting on top of the content.
 */
const { appearance } = useAppearance()

/**
 * COLLAPSED GROUPS BECOME FLYOUTS.
 *
 * An icon rail has no width to expand a group into, so the previous behaviour
 * was that collapsing the sidebar simply HID every grouped resource - the rail
 * showed Dashboard and nothing else, and the only way back to Clients was to
 * expand again. A flyout beside the rail is the standard answer and the one the
 * reference panels use.
 *
 * It opens on hover as well as click, because a rail is a scanning surface:
 * requiring a click to discover what an icon contains defeats the point of
 * collapsing.
 */
const { state, isMobile, setOpenMobile } = useSidebar()

/**
 * THE BOTTOM BAR'S "MORE" OPENS THIS, rather than a menu of its own.
 *
 * It used to open a sheet built from the same data as this sidebar and looking
 * nothing like it - no groups, no collapse state, no footer links - so a phone
 * got a second navigation nobody else has seen. Opening the real drawer means
 * the thing somebody learns on a handset is the thing they see on a laptop.
 *
 * REGISTERED WHILE MOUNTED, because the horizontal layout has no sidebar and
 * the bar has to know the difference between "opened" and "asked into nothing".
 */
const opener = useSidebarOpener()

onMounted(() => opener.register())
onUnmounted(() => opener.unregister())

watch(opener.requests, () => setOpenMobile(true))

const isCollapsed = computed(() => state.value === 'collapsed')

/** The flyout opens away from the rail, whichever edge it is on. */
const flyoutSide = computed<'left' | 'right'>(() =>
    appearance.value.sidebarSide === 'right' ? 'left' : 'right',
)

const { isCurrentUrl } = useCurrentUrl()

function groupIsActive(items: NavItem[]): boolean {
    return items.some((i) => isCurrentUrl(typeof i.href === 'string' ? i.href : String(i.href)))
}

const { nav } = usePanelNav()

/**
 * On a phone, choosing a destination closes the drawer.
 *
 * FOUND IN THE DEVICE PREVIEW, which is the point of having one: at 390px the
 * sidebar is an overlay covering the page, so tapping a link navigated behind a
 * drawer that stayed open. The destination was reached and could not be seen -
 * which reads as the tap having failed, so the natural next move is to tap it
 * again.
 *
 * Only on mobile. On a desktop the rail is permanent and closing it after every
 * click would be the bug.
 */
function closeOnMobile() {
    if (isMobile.value) {
        setOpenMobile(false)
    }
}

/**
 * Home, for the portal actually being served.
 *
 * IT WAS A HARDCODED `/dashboard`, which is the operator application's screen -
 * so the first entry in a generated portal's navigation took you out of the
 * portal, and the only way back was the browser button. The server knows which
 * panel is serving the request; the client should not be guessing.
 */
const panelHome = computed(
    () =>
        (page.props.panelHome as { href: string; isDefault: boolean } | undefined) ?? {
            href: '/',
            isDefault: true,
        },
)

const dashboardItem = computed<NavItem>(() => ({
    /*
     * THE NAME DOES NOT CHANGE BETWEEN PORTALS. It was briefly "Home" in a
     * generated one, which is a second word for the same thing - somebody
     * working across two portals then has to notice that the first entry is
     * called something else before they trust it is the same entry. The
     * DESTINATION differs; the label is a constant.
     */
    title: 'Dashboard',
    href: panelHome.value.href,
    icon: LayoutGrid,
}))

/**
 * Navigation, grouped by the `group` each resource declares.
 *
 * Resources have carried a group since Phase 4 and nothing rendered it, so every
 * screen sat in one flat list. That is fine at three resources and unusable at
 * twenty - which is the point at which a panel stops being navigable and starts
 * needing search for everything.
 *
 * Ungrouped resources stay at the top level rather than landing in a
 * catch-all "Other": a group of one is noise.
 */
/**
 * The navigation, from the SHARED model.
 *
 * This block used to rebuild the groups itself, in parallel with
 * `usePanelNav`. That composable's own docblock warns against exactly this -
 * "duplicating the group-building into each is how a resource ends up visible
 * in two layouts and missing from the third, with nothing failing" - and it is
 * precisely what happened: two new groups were added to the composable, they
 * appeared in the horizontal bar, and the sidebar silently did not have them.
 *
 * Nothing errored, because there was no contradiction to detect - just two
 * lists that had stopped agreeing. One source now.
 *
 * The shape is adapted rather than changed: the sidebar walks `[name, items]`
 * pairs because it iterates them alongside a collapsed-state Map keyed by name.
 */
const navGroups = computed(() => ({
    ungrouped: [
        dashboardItem.value,
        ...nav.value.primary.filter((item) => item.title !== 'Dashboard'),
    ],
    grouped: nav.value.groups.map((group): [string, NavItem[]] => [group.name, group.items]),
}))

/*
 * The key is versioned because the DEFAULT changed.
 *
 * Groups used to open by default and the stored value records which ones are
 * CLOSED - so anyone who had ever toggled one had `[]` or a short list saved,
 * and a new default would never reach them. Bumping the key retires those
 * preferences once, which is the honest cost of changing a default rather than
 * pretending it applies to everybody.
 */
const NAV_STORAGE_KEY = 'panelkit.nav.collapsed.v2'

/**
 * Which groups are CLOSED. Everything starts closed EXCEPT the one you are in.
 *
 * Closed by default because the sidebar is a place you pass through, not a
 * place you read: with every group expanded the list is long enough to scroll
 * on a laptop, and the item you want is somewhere in the middle of things you
 * are not looking at. Collapsed, the whole structure fits and each group is one
 * click away.
 *
 * The ACTIVE group is the exception, and it is not a nicety - a navigation that
 * cannot show you where you currently are has stopped being navigation.
 */
function defaultCollapsed(): Set<string> {
    return new Set(
        navGroups.value.grouped.filter(([, items]) => !groupIsActive(items)).map(([name]) => name),
    )
}

/**
 * Read synchronously rather than in `onMounted`.
 *
 * Deciding this after mount means the first paint renders every group open and
 * then closes them, which reads as the sidebar flinching on every page load.
 */
function readCollapsed(): Set<string> {
    if (typeof window === 'undefined') {
        return new Set()
    }

    try {
        const saved = localStorage.getItem(NAV_STORAGE_KEY)

        return saved ? new Set(JSON.parse(saved) as string[]) : defaultCollapsed()
    } catch {
        // Private mode or corrupt storage. The default is still correct.
        return defaultCollapsed()
    }
}

const collapsed = ref<Set<string>>(readCollapsed())

function toggleGroup(name: string) {
    const next = new Set(collapsed.value)

    if (next.has(name)) {
        next.delete(name)
    } else {
        next.add(name)
    }

    collapsed.value = next

    try {
        localStorage.setItem(NAV_STORAGE_KEY, JSON.stringify([...next]))
    } catch {
        // Private mode. The group still toggles; only persistence is lost.
    }
}

/*
 * Navigating into a collapsed group opens it.
 *
 * Without this, following a ⌘K result or a link into Network leaves that group
 * shut with its own page showing - the sidebar says you are nowhere. Only the
 * arriving group is touched; whatever else the user had open stays open.
 */
watch(
    () => page.url,
    () => {
        const active = navGroups.value.grouped.find(([, items]) => groupIsActive(items))

        if (active && collapsed.value.has(active[0])) {
            const next = new Set(collapsed.value)

            next.delete(active[0])
            collapsed.value = next
        }
    },
)

/**
 * The application's own support screens - and only in the application's portal.
 *
 * They are routed at the root, so a generated portal offering them is a portal
 * you leave by clicking Help. A portal that needs its own support pages declares
 * them like any other page.
 */
const supportNavItems = computed<NavItem[]>(() =>
    panelHome.value.isDefault
        ? [
              { title: 'Help', href: '/help', icon: HelpCircle },
              { title: 'FAQ', href: '/faq', icon: MessageCircleQuestion },
              { title: "What's new", href: '/whats-new', icon: Sparkles },
              { title: 'About', href: '/about', icon: Info },
          ]
        : [],
)
</script>

<template>
    <Sidebar
        collapsible="icon"
        variant="inset"
        :side="appearance.sidebarSide === 'right' ? 'right' : 'left'"
    >
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link :href="'/'">
                            <!-- The rail has room, and the name says which tenant. -->
                            <AppLogo show-name />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <NavMain :items="navGroups.ungrouped" label="Platform" @navigate="closeOnMobile" />

            <!--
                Two renderings of one group list.

                EXPANDED: a collapsible section, so twenty resources stay
                navigable. COLLAPSED: a flyout, because the rail is too narrow
                to expand into - without this branch every grouped resource
                disappears the moment the sidebar is collapsed.
            -->
            <template v-if="isCollapsed">
                <SidebarGroup
                    v-for="[name, items] in navGroups.grouped"
                    :key="name"
                    class="px-2 py-0"
                >
                    <PkDropdown :placement="flyoutSide" width="w-52" :offset="8" hoverable>
                        <template #trigger>
                            <button
                                type="button"
                                class="flex size-8 items-center justify-center rounded-md transition-colors hover:bg-sidebar-accent"
                                :class="groupIsActive(items) ? 'bg-sidebar-accent' : ''"
                                :aria-label="name"
                                :title="name"
                            >
                                <component :is="items[0]?.icon" class="size-4" />
                            </button>
                        </template>

                        <template #panel="{ close }">
                            <!--
                                The HEADING carries the icon; the items do not -
                                the same rule the expanded sidebar follows. In a
                                flyout the group name is already at the top, so
                                an icon on every child repeats what the header
                                said and distinguishes nothing between siblings.
                            -->
                            <p
                                class="flex items-center gap-2 px-2 py-1.5 text-xs font-semibold text-muted-foreground"
                            >
                                <component :is="items[0]?.icon" class="size-4 shrink-0" />
                                {{ name }}
                            </p>

                            <div class="ml-4 border-l border-border">
                                <Link
                                    v-for="item in items"
                                    :key="item.title"
                                    :href="item.href"
                                    class="group/flyout relative flex items-center py-1.5 pl-4 text-sm transition-colors hover:text-foreground"
                                    :class="
                                        isCurrentUrl(item.href)
                                            ? 'font-medium text-foreground'
                                            : 'text-muted-foreground'
                                    "
                                    @click="close()"
                                >
                                    <span
                                        class="absolute -left-[3px] flex size-1.5 items-center justify-center rounded-full bg-popover"
                                        aria-hidden="true"
                                    >
                                        <span
                                            class="size-1.5 rounded-full transition-colors"
                                            :class="
                                                isCurrentUrl(item.href)
                                                    ? 'bg-primary'
                                                    : 'bg-muted-foreground/40 group-hover/flyout:bg-muted-foreground'
                                            "
                                        />
                                    </span>
                                    {{ item.title }}
                                </Link>
                            </div>
                        </template>
                    </PkDropdown>
                </SidebarGroup>
            </template>

            <SidebarGroup
                v-for="[name, items] in navGroups.grouped"
                v-else
                :key="name"
                class="px-2 py-0"
            >
                <!--
                    THE GROUP CARRIES THE ICON, its children do not.

                    Previously every child had one, which meant four or five
                    glyphs stacked vertically that all said "subscriber" -
                    Clients, IP Bindings, Leads are the same KIND of thing, so
                    an icon each distinguishes nothing and only adds noise to
                    the narrowest column on screen. One icon on the heading
                    says what the group is; the rail and dots below say what
                    belongs to it.

                    The icon is the first child's, because a group is a string
                    on a resource rather than an object that could declare one.
                    A group-level icon is worth adding when a group exists that
                    the first item does not represent.
                -->
                <button
                    type="button"
                    class="flex w-full items-center gap-2 px-2 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
                    :aria-expanded="!collapsed.has(name)"
                    @click="toggleGroup(name)"
                >
                    <component :is="items[0]?.icon" class="size-4 shrink-0" aria-hidden="true" />
                    <span class="flex-1 text-left">{{ name }}</span>
                    <svg
                        viewBox="0 0 24 24"
                        class="size-3.5 shrink-0 transition-transform"
                        :class="collapsed.has(name) ? '-rotate-90' : ''"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>

                <NavMain
                    v-if="!collapsed.has(name)"
                    :items="items"
                    nested
                    @navigate="closeOnMobile"
                />
            </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
            <!--
                Support pages live in the footer, not the main nav: they are
                read once and then rarely, so they should not compete for
                attention with the resources.

                The starter kit's Repository and Documentation links used to sit
                here. They pointed OUT of the panel - at the scaffold's GitHub
                page and the Laravel docs - which is of no use to an operator,
                while occupying the one part of the sidebar that never scrolls
                away.
            -->
            <NavFooter :items="supportNavItems" />

            <!--
                THE BOUNDARY THAT WOULD HAVE PREVENTED THE BLANK 404 PAGE.

                NavUser reads `auth.user`, which is null on any URL that never
                entered the `web` middleware group - an unmatched route being
                the obvious one. It threw, Vue unmounted the whole tree, and the
                error page rendered as nothing at all.

                Silent, because the fallback here is genuinely "no user menu":
                a red failure card wedged into the sidebar footer of an error
                page is more alarming than the absence, and the console still
                gets the stack either way.
            -->
            <PkBoundary label="The account menu" silent>
                <NavUser>
                    <template #menu="{ user }">
                        <!--
                            FORWARDED, so an application passes its own account
                            menu items through the sidebar without knowing that
                            NavUser is what renders them.
                        -->
                        <slot name="userMenu" :user="user" />
                    </template>
                </NavUser>
            </PkBoundary>
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
