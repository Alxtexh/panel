import { usePage } from '@inertiajs/vue3';
import {
    Activity,
    BookOpen,
    FileQuestion,
    Gauge,
    HelpCircle,
    Info,
    KeyRound,
    LayoutGrid,
    Lock,
    Mail,
    MessageCircleQuestion,
    MessagesSquare,
    Package,
    Router as RouterIcon,
    ServerCrash,
    ShieldAlert,
    SlidersHorizontal,
    Smartphone,
    Sparkles,
    TimerOff,
    Trash2,
    Users,
    Wrench,
} from '@lucide/vue';
import { computed } from 'vue';
import type { NavItem } from '@/types';

/**
 * The navigation model, shared by the vertical sidebar and the horizontal bar.
 *
 * EXTRACTED BECAUSE THERE ARE NOW THREE LAYOUTS SHOWING THE SAME MENU. Left,
 * right and top are three renderings of one structure; duplicating the
 * group-building into each is how a resource ends up visible in two layouts and
 * missing from the third, with nothing failing.
 *
 * NOTHING IS DECLARED HERE ANY MORE. Both halves of the menu arrive as shared
 * props: `panelNav` from the resource registry, `panelPages` from
 * `App\Panel\Pages`. Everything that is not a resource used to be a hardcoded
 * array in this file, and that is exactly how finished screens - backups, logs,
 * the connections workspace - ended up reachable from nowhere, silently, with
 * their own tests still green. Moving the declaration to the server put it
 * somewhere `NavigationCoverageTest` can see it, which is the entire point.
 *
 * Resources are permission-filtered server-side, so one the user may not open
 * never reaches the client at all - the client never decides who sees what.
 * Declared pages carry no ability, because the guarded screens are reached from
 * the account menu instead and are deliberately not repeated here.
 */

const ICONS: Record<string, typeof LayoutGrid> = {
    // Resource icons.
    users: Users,
    router: RouterIcon,
    package: Package,
    activity: Activity,
    sliders: SlidersHorizontal,
    // Page icons.
    'book-open': BookOpen,
    chat: MessagesSquare,
    faq: MessageCircleQuestion,
    'file-question': FileQuestion,
    gauge: Gauge,
    help: HelpCircle,
    info: Info,
    key: KeyRound,
    lock: Lock,
    mail: Mail,
    'server-crash': ServerCrash,
    'shield-alert': ShieldAlert,
    smartphone: Smartphone,
    'timer-off': TimerOff,
    trash: Trash2,
    wrench: Wrench,
};

interface NavPayload {
    title: string;
    href: string;
    icon: string;
    group: string | null;
}

export interface NavGroup {
    name: string;
    items: NavItem[];
}

export function usePanelNav() {
    const page = usePage();

    const nav = computed(() => {
        const resources =
            (page.props.panelNav as NavPayload[] | undefined) ?? [];
        const pages = (page.props.panelPages as NavPayload[] | undefined) ?? [];

        const ungrouped: NavItem[] = [];

        /*
         * A Map, so insertion order is the order groups appear.
         *
         * Resources go in first and therefore set the running order; a page
         * declaring an existing group name JOINS it rather than opening a
         * second heading with the same words. That is what puts Connections
         * under the Network heading the Routers resource already created,
         * instead of splitting one subject across two places in the column.
         */
        const grouped = new Map<string, NavItem[]>();

        const add = (item: NavPayload) => {
            const entry: NavItem = {
                title: item.title,
                href: item.href,
                icon: ICONS[item.icon] ?? Package,
            };

            // Ungrouped resources stay at the top level rather than landing in a
            // catch-all "Other": a group of one is noise.
            if (!item.group) {
                ungrouped.push(entry);

                return;
            }

            grouped.set(item.group, [
                ...(grouped.get(item.group) ?? []),
                entry,
            ]);
        };

        resources.forEach(add);
        pages.forEach(add);

        return {
            primary: [
                // The dashboard is a packaged page now, routed as `panel.pages.dashboard`;
            // Wayfinder no longer generates a `dashboard()` helper for it.
            { title: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
                ...ungrouped,
            ] as NavItem[],
            groups: [...grouped.entries()].map(([name, items]): NavGroup => ({
                name,
                items,
            })),
        };
    });

    /**
     * In-panel content pages. Static, because they are not resources.
     *
     * These occupy the sidebar footer, which previously held links out to the
     * starter kit's GitHub repository and the Laravel docs. Those were
     * scaffolding: they leave the panel entirely, and an operator has no use for
     * either. The footer is prime real estate - permanently visible, never
     * scrolled away - so it should hold the panel's own help, not somebody
     * else's.
     *
     * They stay client-side because the footer is a FIXED set of four, not a
     * list anything appends to; `Pages::intentionallyUnlinked()` records that
     * they are reached from here, so the coverage test still accounts for them.
     */
    const supportItems = computed<NavItem[]>(() => [
        { title: 'Help', href: '/help', icon: HelpCircle },
        { title: 'FAQ', href: '/faq', icon: MessageCircleQuestion },
        { title: "What's new", href: '/whats-new', icon: Sparkles },
        { title: 'About', href: '/about', icon: Info },
    ]);

    return { nav, supportItems };
}
