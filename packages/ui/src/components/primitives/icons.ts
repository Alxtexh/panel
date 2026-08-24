/**
 * SVG path data, keyed by semantic name.
 *
 * PATHS ONLY - no size, no stroke, no colour. Every consumer supplies those
 * from its own context, which is what lets the same `trash` render at 14px in a
 * row button and 20px in a confirmation dialog without a second definition.
 *
 * NAMES ARE SEMANTIC AND SERVER-CHOSEN. A resource says `->icon('suspend')`;
 * it never says a CSS class or a path (antipatterns §6.1). That is also why an
 * unknown name must NOT silently fall back to a blank: an icon that fails to
 * resolve should look obviously wrong here rather than render an empty square
 * in production. Consumers use `iconPath()`, which returns the fallback dot.
 *
 * The set is deliberately small. Every icon added is a decision that a concept
 * deserves a picture, and a row menu where every item has a vaguely-related
 * glyph is harder to scan than one where only the distinct actions do.
 */
export const ICON_PATHS: Record<string, string> = {
    /* -------------------------------------------------- state and feedback */
    check: 'M20 6 9 17l-5-5',
    x: 'M18 6 6 18M6 6l12 12',
    dot: 'M12 12h.01',
    alert: 'M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z',
    clock: 'M12 6v6l4 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z',
    star: 'm12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z',
    pause: 'M10 4v16M14 4v16',
    play: 'm5 3 14 9-14 9V3Z',

    /* ------------------------------------------------------------ network */
    wifi: 'M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M12 20h.01M2 8.8a15 15 0 0 1 20 0',
    'wifi-off':
        'M2 2l20 20M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 5-2.6M2 8.8a15 15 0 0 1 4.2-2.5M22 8.8a15 15 0 0 0-6-3.4M12 20h.01',

    plus: 'M5 12h14M12 5v14',
    minus: 'M5 12h14',
    search: 'M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14',

    /* ------------------------------------------------------------ actions */
    eye: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
    'eye-off':
        'M10.7 5.1A11 11 0 0 1 12 5c7 0 10 7 10 7a13 13 0 0 1-1.6 2.4M9.9 4.2 2 2l20 20M6.7 6.7C3.4 8.8 2 12 2 12s3.6 7 10 7a10 10 0 0 0 4.4-1M9.9 9.9a3 3 0 0 0 4.2 4.2',
    pencil: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z',
    trash: 'M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6',
    copy: 'M9 9h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2Z M5 15H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1',
    ban: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M4.9 4.9l14.2 14.2',
    download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
    // `undo` was declared by the Restore action and had no path here, so it
    // silently rendered the fallback dot - a bulk action that looked unfinished
    // rather than one whose icon was missing.
    undo: 'M3 7v6h6M3.5 13a9 9 0 1 0 2.1-9.4L3 7',
    activity: 'M22 12h-4l-3 9L9 3l-3 9H2',
    'user-check':
        'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M16 11l2 2 4-4',
    upload: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
    refresh: 'M21 2v6h-6M3 22v-6h6M3.5 9a9 9 0 0 1 14.9-3.4L21 8M21 15a9 9 0 0 1-14.9 3.4L3 16',
    send: 'm22 2-7 20-4-9-9-4Z M22 2 11 13',
    cart: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18M16 10a4 4 0 0 1-8 0',
    key: 'M15.5 2a6.5 6.5 0 1 0-5.6 9.8L2 19.7V22h2.3l1-1v-2h2v-2h2l1.9-1.9A6.5 6.5 0 0 0 15.5 2Z M17 7h.01',
    link: 'M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7',
    archive: 'M21 8v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8M2 4h20v4H2zM10 12h4',

    /* ------------------------------------------------------------ chrome */
    'more-horizontal': 'M12 12h.01M19 12h.01M5 12h.01',
    // Vertical, because the actions column is narrow and a horizontal glyph
    // reads as "more columns this way" next to a scrollable table.
    'more-vertical': 'M12 12h.01M12 19h.01M12 5h.01',
    'chevron-right': 'm9 18 6-6-6-6',
    'chevron-down': 'm6 9 6 6 6-6',

    /* -------------------------------------------------------- destinations */
    /*
     * THE NAVIGATION SET, AND ITS ABSENCE WAS VISIBLE ON EVERY PHONE.
     *
     * Everything above is an ACTION - the vocabulary of a row menu and a
     * confirmation dialog - because that is all this registry was ever asked
     * for. Then the bottom bar started drawing the same navigation the sidebar
     * draws, and the sidebar resolves its icons through Lucide components while
     * this resolves them through these paths. Every name the server sends -
     * `users`, `router`, `mail`, `home` - was missing, `iconPath()` fell back to
     * the dot for all of them, and the bar rendered five identical specks above
     * five labels.
     *
     * Nothing failed. The fallback is deliberate and correct, and it made an
     * entirely unusable navigation look like a design choice.
     *
     * NAMES MATCH THE SERVER'S VOCABULARY, not Lucide's file names, because a
     * resource says `->icon('router')` and neither half should have to know what
     * the other calls it.
     */
    home: 'M3 10a2 2 0 0 1 .7-1.5l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z M9 21v-8h6v8',
    users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8',
    package:
        'M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z m3.3 7L12 12l8.7-5 M12 22V12 m7.5 4.3 9 5.1',
    router: 'M2 14a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z M6.01 17H6 M10.01 17H10 M15 10v2 M17.8 7.2a4 4 0 0 0-5.6 0 M20.7 4.3a8 8 0 0 0-11.4 0',
    mail: 'M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z m22 6-10 7L2 6',
    bell: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0',
    chat: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z',
    'book-open':
        'M12 7v14 M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z',
    smartphone: 'M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z M12 18h.01',
    lock: 'M7 11V7a5 5 0 0 1 10 0v4 M5 11h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z',
    gauge: 'm12 14 4-4 M3.3 19a10 10 0 1 1 17.4 0',
    'file-text':
        'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z M14 2v4a2 2 0 0 0 2 2h4 M16 13H8 M16 17H8 M10 9H8',
    'file-question':
        'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z M15 2v5h5 M10 11a2 2 0 1 1 2 2v1 M12 17h.01',
    'server-crash':
        'M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2 M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2 M6 6h.01 M6 18h.01 M13 6l-3 5h4l-3 5',
    'shield-alert':
        'M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1 1 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z M12 8v4 M12 16h.01',
    'timer-off':
        'M10 2h4 M12 12v-2 M4.6 11a8 8 0 0 0 10.4 10.4 M7.4 7.4a8 8 0 0 1 11.2 11.2 M2 2l20 20',
    wrench: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9Z',
    // Configuring the SHAPE of something rather than repairing it, which is
    // what `wrench` already says - the custom-fields screen decides which
    // fields a resource has, and sliders read as "adjust these settings".
    sliders: 'M21 4h-7 M10 4H3 M21 12h-9 M8 12H3 M21 20h-5 M12 20H3 M12 2v4 M6 10v4 M14 18v4',
    menu: 'M4 6h16M4 12h16M4 18h16',

    /*
     * ROW-MENU VOCABULARY that hosts declare without always shipping a path.
     *
     * `log-in` / `impersonate` and `coins` / `wallet` / `recharge` are the
     * names that turned into the fallback `dot` on Users row menus: a coloured
     * speck beside "Recharge Credits" and "Log in as user", while Delete
     * looked finished because the destructive branch hard-coded `trash`.
     */
    'log-in': 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3',
    wallet: 'M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3V5a2 2 0 0 1 2-2',
    coins: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8 M12 18V6',
    'credit-card': 'M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z M2 10h20',
    // Hollow ring: used when a coloured action still has no semantic glyph, so
    // the tone paints a readable mark instead of a one-pixel speck.
    circle: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z',
    info: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 16v-4 M12 8h.01',
}

/**
 * Host / Filament-shaped names that map onto a path we already ship.
 *
 * KEPT SEPARATE FROM ICON_PATHS so the registry stays one glyph per concept,
 * while callers can keep saying `impersonate` or `currency-dollar`.
 */
export const ICON_ALIASES: Record<string, string> = {
    login: 'log-in',
    'login-as': 'log-in',
    'log-in-as': 'log-in',
    impersonate: 'log-in',
    'user-check': 'user-check',
    recharge: 'coins',
    credits: 'coins',
    'recharge-credits': 'coins',
    'currency-dollar': 'coins',
    'currency-euro': 'coins',
    banknotes: 'wallet',
    'heroicon-o-currency-dollar': 'coins',
    'heroicon-m-currency-dollar': 'coins',
    'heroicon-o-wallet': 'wallet',
    'heroicon-o-arrow-left-on-rectangle': 'log-in',
    'arrow-left-on-rectangle': 'log-in',
    'arrow-right-on-rectangle': 'log-in',
}

/** Defaults when the host names an action but omits `->icon()`. */
export const ACTION_KEY_ICONS: Record<string, string> = {
    delete: 'trash',
    __delete: 'trash',
    destroy: 'trash',
    'force-delete': 'trash',
    forceDelete: 'trash',
    force_delete: 'trash',
    impersonate: 'log-in',
    'login-as': 'log-in',
    'log-in-as': 'log-in',
    'log-in-as-user': 'log-in',
    login_as: 'log-in',
    loginAs: 'log-in',
    recharge: 'coins',
    'recharge-credits': 'coins',
    recharge_credits: 'coins',
    credits: 'coins',
    view: 'eye',
    edit: 'pencil',
    restore: 'undo',
    replicate: 'copy',
    duplicate: 'copy',
    export: 'download',
    download: 'download',
    suspend: 'ban',
    activate: 'play',
    ban: 'ban',
}

/** Last resort when an action declares a colour but still has no glyph. */
const COLOR_FALLBACK_ICONS: Record<string, string> = {
    success: 'coins',
    danger: 'trash',
    warning: 'alert',
    primary: 'activity',
    info: 'info',
    gray: 'circle',
}

/** The path for a name, or the fallback dot when the name is unknown. */
export function iconPath(name: string | null | undefined): string {
    if (!name) {
        return ICON_PATHS.dot
    }

    const resolved = ICON_ALIASES[name] ?? name

    return ICON_PATHS[resolved] ?? ICON_PATHS.dot
}

/**
 * Path for a row / bulk menu action: declared icon, then key, then label,
 * then colour, never a naked coloured speck.
 *
 * THE FALLBACK `dot` IS DELIBERATE FOR UNKNOWN NAMES in `iconPath()`, so a
 * missing glyph is obvious in chrome that expected one. Row menus are the
 * opposite case: hosts often set `->color('success')` and forget `->icon()`,
 * and the tone paints that same microscopic path green. Delete looked fine
 * only because its branch hard-coded `trash`. This resolver is what makes
 * "Recharge Credits" and "Log in as user" match that finished look when the
 * host omits (or misspells) the icon.
 */
export function resolveActionIcon(action: {
    key?: string | null
    label?: string | null
    icon?: string | null
    color?: string | null
    destructive?: boolean
}): string {
    if (action.icon) {
        const fromDeclared = iconPath(action.icon)

        if (fromDeclared !== ICON_PATHS.dot || action.icon === 'dot') {
            return fromDeclared
        }
    }

    const key = (action.key ?? '').trim()

    if (key) {
        const fromKey = ACTION_KEY_ICONS[key] ?? ACTION_KEY_ICONS[key.replace(/_/g, '-')]

        if (fromKey) {
            return iconPath(fromKey)
        }
    }

    const fromLabel = iconFromActionLabel(action.label)

    if (fromLabel) {
        return iconPath(fromLabel)
    }

    if (action.destructive) {
        return iconPath('trash')
    }

    const color = action.color ?? ''

    if (color && COLOR_FALLBACK_ICONS[color]) {
        return iconPath(COLOR_FALLBACK_ICONS[color])
    }

    // Coloured or not: a hollow circle reads as a mark; the speck does not.
    return iconPath('circle')
}

function iconFromActionLabel(label: string | null | undefined): string | null {
    if (!label) {
        return null
    }

    const text = label.toLowerCase()

    if (/\b(delete|remove|destroy|trash)\b/.test(text)) {
        return 'trash'
    }

    if (/\b(log\s*in|impersonat|sign\s*in\s+as)\b/.test(text)) {
        return 'log-in'
    }

    if (/\b(recharge|credit|wallet|top\s*up|topup)\b/.test(text)) {
        return 'coins'
    }

    if (/\b(edit|update)\b/.test(text)) {
        return 'pencil'
    }

    if (/\b(view|open|show)\b/.test(text)) {
        return 'eye'
    }

    if (/\b(restore|undo)\b/.test(text)) {
        return 'undo'
    }

    if (/\b(copy|replicate|duplicate)\b/.test(text)) {
        return 'copy'
    }

    if (/\b(export|download)\b/.test(text)) {
        return 'download'
    }

    if (/\b(suspend|ban|block)\b/.test(text)) {
        return 'ban'
    }

    if (/\b(activate|resume|enable)\b/.test(text)) {
        return 'play'
    }

    return null
}
