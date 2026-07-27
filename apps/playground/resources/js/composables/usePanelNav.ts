import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { BookOpen, FolderGit2, HelpCircle, Info, LayoutGrid, MessageCircleQuestion, Package, Router as RouterIcon, Users } from '@lucide/vue';
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

        return {
            primary: [{ title: 'Dashboard', href: dashboard(), icon: LayoutGrid }, ...ungrouped] as NavItem[],
            groups: [...grouped.entries()].map(([name, items]): NavGroup => ({ name, items })),
        };
    });

    /** In-panel content pages. Static, because they are not resources. */
    const supportItems = computed<NavItem[]>(() => [
        { title: 'Help', href: '/help', icon: HelpCircle },
        { title: 'FAQ', href: '/faq', icon: MessageCircleQuestion },
        { title: 'About', href: '/about', icon: Info },
    ]);

    const footerItems = computed<NavItem[]>(() => [
        { title: 'Repository', href: 'https://github.com/laravel/vue-starter-kit', icon: FolderGit2 },
        { title: 'Documentation', href: 'https://laravel.com/docs/starter-kits#vue', icon: BookOpen },
    ]);

    return { nav, supportItems, footerItems };
}
