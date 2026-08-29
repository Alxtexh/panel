import {
    Activity,
    Archive,
    BookOpen,
    FileQuestion,
    Gauge,
    HelpCircle,
    Info,
    KeyRound,
    LayoutGrid,
    List,
    Lock,
    Mail,
    Megaphone,
    MessageCircleQuestion,
    MessagesSquare,
    Package,
    Receipt,
    CreditCard,
    Coins,
    House,
    FileText,
    LogIn,
    Router as RouterIcon,
    ShoppingBag,
    ServerCrash,
    Settings,
    ShieldAlert,
    SlidersHorizontal,
    Smartphone,
    Sparkles,
    TimerOff,
    Trash2,
    Users,
    Wallet,
    Wrench,
} from '@lucide/vue'
import type { Component } from 'vue'

/**
 * Lucide components keyed by the string icons resources and pages share.
 *
 * KEPT IN ONE PLACE so the sidebar, the top bar, and Quick Create cannot drift
 * onto different glyphs for the same resource.
 */
export const PANEL_ICONS: Record<string, Component> = {
    users: Users,
    router: RouterIcon,
    package: Package,
    activity: Activity,
    archive: Archive,
    sliders: SlidersHorizontal,
    list: List,
    'layout-grid': LayoutGrid,
    'shopping-bag': ShoppingBag,
    receipt: Receipt,
    'credit-card': CreditCard,
    coins: Coins,
    wallet: Wallet,
    'log-in': LogIn,
    login: LogIn,
    impersonate: LogIn,
    home: House,
    'file-text': FileText,
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
    megaphone: Megaphone,
    sparkles: Sparkles,
    'server-crash': ServerCrash,
    settings: Settings,
    'shield-alert': ShieldAlert,
    smartphone: Smartphone,
    'timer-off': TimerOff,
    trash: Trash2,
    wrench: Wrench,
}

export function resolvePanelIcon(name: string | null | undefined): Component {
    if (!name) {
        return Package
    }

    return PANEL_ICONS[name] ?? Package
}
