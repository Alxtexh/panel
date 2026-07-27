import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { HelpCircle, Info, LayoutGrid, Mail, MessageCircleQuestion, MessagesSquare, Package, Router as RouterIcon, Sparkles, Users } from '@lucide/vue';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

/**
 * The navigation model, shared by the vertical sidebar and the horizontal bar.
 *
 * EXTRACTED BECAUSE THERE ARE NOW THREE LAYOUTS SHOWING THE SAME MENU. Left,
 * right and top are three renderings of one structure; duplicating the
 * group-building into each is how a resource ends up visible in two layouts and
 * missing from the third, with nothing failing.
 *
 * Items come from the resource registry in the initial payload and are already
 * permission-filtered server-side, so a resource the user cannot view never
 * reaches the client at all — the client never decides who sees what.
 */

const ICONS: Record<string, typeof LayoutGrid> = {
    users: Users,
    router: RouterIcon,
    package: Package,
    help: HelpCircle,
    info: Info,
    faq: MessageCircleQuestion,
};

export interface NavGroup {
    name: string;
    items: NavItem[];
}

export function usePanelNav() {
    const page = usePage();

    const nav = computed(() => {
        const items =
            (page.props.panelNav as
                | { title: string; href: string; icon: string; group: string | null }[]
                | undefined) ?? [];

        const ungrouped: NavItem[] = [];
        const grouped = new Map<string, NavItem[]>();

        for (const item of items) {
            const entry: NavItem = {
                title: item.title,
                href: item.href,
                icon: ICONS[item.icon] ?? Package,
            };

            // Ungrouped resources stay at the top level rather than landing in a
            // catch-all "Other": a group of one is noise.
            if (!item.group) {
                ungrouped.push(entry);
                continue;
            }

            grouped.set(item.group, [...(grouped.get(item.group) ?? []), entry]);
        }

        /*
         * App screens are a GROUP, not top-level items.
         *
         * They are not resources — no table, no policy, no model behind a
         * registry entry — so they cannot come from the resource discovery that
         * builds the rest. Grouping them keeps the top level for the things the
         * panel actually administers.
         */
        const apps: NavItem[] = [
            { title: 'Mail', href: '/apps/mail', icon: Mail },
            { title: 'Chat', href: '/apps/chat', icon: MessagesSquare },
        ];

        return {
            primary: [{ title: 'Dashboard', href: dashboard(), icon: LayoutGrid }, ...ungrouped] as NavItem[],
            groups: [
                ...[...grouped.entries()].map(([name, items]): NavGroup => ({ name, items })),
                { name: 'Apps', items: apps },
            ],
        };
    });

    /**
     * In-panel content pages. Static, because they are not resources.
     *
     * These now occupy the sidebar footer, which previously held links out to
     * the starter kit's GitHub repository and the Laravel docs. Those were
     * scaffolding: they leave the panel entirely, and an operator has no use
     * for either. The footer is prime real estate — permanently visible, never
     * scrolled away — so it should hold the panel's own help, not somebody
     * else's.
     */
    const supportItems = computed<NavItem[]>(() => [
        { title: 'Help', href: '/help', icon: HelpCircle },
        { title: 'FAQ', href: '/faq', icon: MessageCircleQuestion },
        { title: "What's new", href: '/whats-new', icon: Sparkles },
        { title: 'About', href: '/about', icon: Info },
    ]);

    return { nav, supportItems };
}
