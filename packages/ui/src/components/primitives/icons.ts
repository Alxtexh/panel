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

    /* ------------------------------------------------------------ actions */
    eye: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
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
    'user-check': 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M16 11l2 2 4-4',
    upload: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
    refresh: 'M21 2v6h-6M3 22v-6h6M3.5 9a9 9 0 0 1 14.9-3.4L21 8M21 15a9 9 0 0 1-14.9 3.4L3 16',
    send: 'm22 2-7 20-4-9-9-4Z M22 2 11 13',
    key: 'M15.5 2a6.5 6.5 0 1 0-5.6 9.8L2 19.7V22h2.3l1-1v-2h2v-2h2l1.9-1.9A6.5 6.5 0 0 0 15.5 2Z M17 7h.01',
    link: 'M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7',
    archive: 'M21 8v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8M2 4h20v4H2zM10 12h4',

    /* ------------------------------------------------------------ chrome */
    'more-horizontal': 'M12 12h.01M19 12h.01M5 12h.01',
    // Vertical, because the actions column is narrow and a horizontal glyph
    // reads as "more columns this way" next to a scrollable table.
    'more-vertical': 'M12 12h.01M12 19h.01M12 5h.01',
    'chevron-right': 'm9 18 6-6-6-6',
}

/** The path for a name, or the fallback dot when the name is unknown. */
export function iconPath(name: string | null | undefined): string {
    if (!name) {
        return ICON_PATHS.dot
    }

    return ICON_PATHS[name] ?? ICON_PATHS.dot
}
