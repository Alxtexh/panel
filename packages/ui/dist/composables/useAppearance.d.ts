/**
 * Per-user appearance: colour, scheme, density, font size, sidebar side.
 *
 * MOST OF THIS GOES BEYOND FILAMENT, where font and sidebar behaviour are
 * developer panel-config decided once for everyone. Per-user costs almost
 * nothing - every value is a CSS custom property on :root, the same mechanism
 * per-tenant branding uses - and an operator staring at a table for eight hours
 * has opinions a developer cannot pre-empt.
 *
 * Stored in localStorage rather than on the server. It is a display preference,
 * not data: a round trip to change font size would be absurd, and it has to
 * apply before first paint or the page visibly reflows.
 */
/**
 * Light or dark, and nothing else.
 *
 * `system` USED TO BE HERE AND WAS THE DEFAULT, which meant the panel's own
 * appearance was decided by whatever the operating system happened to be set
 * to - the same account looked different on two machines, a screenshot in a
 * ticket did not match what the next person saw, and a dark panel nobody chose
 * was the first impression for anyone whose laptop was in dark mode.
 *
 * The panel now starts LIGHT for everybody and follows nothing. Dark remains a
 * deliberate choice a person makes, which is a different thing from a default
 * inherited from elsewhere.
 */
export type Theme = 'light' | 'dark';
/**
 * How much air a row gets.
 *
 * THREE LEVELS, because two industries want opposite things from the same
 * table. A dispatcher scanning 200 rows wants every one of them on screen;
 * somebody working a touch screen in a van wants a target they can hit while
 * standing up. `comfortable` is the default because it is wrong for neither.
 */
export type Density = 'comfortable' | 'compact' | 'spacious';
/**
 * Where the navigation lives.
 *
 * `horizontal` is a different LAYOUT, not a different side - the nav becomes a
 * top bar with dropdown groups and there is no vertical rail at all. It shares
 * this setting because to the person choosing it, all three are the same
 * question: "where do I want the menu".
 */
export type SidebarSide = 'left' | 'right' | 'horizontal';
export type CardStyle = 'transparent' | 'filled';
/**
 * Full-bleed content, or a centred column with margin either side.
 *
 * `centered` matters most on a wide monitor with a list of five columns - full
 * width stretches a form to a line length nobody can read in one pass. It is
 * per-user rather than per-page because the same person wants it everywhere or
 * nowhere; a page-by-page override would be a setting nobody remembers exists.
 */
export type ContentLayout = 'full' | 'centered';
/**
 * How a sidebar group with children behaves when opened.
 *
 * `collapsible` is what the panel has always done - the group expands in
 * place, an accordion. `drilldown` replaces the sidebar's own contents with
 * that group's items and a back button, which is the shape a group with many
 * children needs: an accordion nests forever and dense trees still look
 * cramped, where a drill-down keeps every level as flat and as roomy as the
 * top one.
 */
export type MenuStyle = 'collapsible' | 'drilldown';
export interface Appearance {
    theme: Theme;
    density: Density;
    /** Root font size in PIXELS. Everything else is rem, so one value scales the panel. */
    fontSize: number;
    sidebarSide: SidebarSide;
    cardStyle: CardStyle;
    /** In REM. Drives `--radius`; Tailwind's `--radius-sm/md/lg` are already `calc()` off it. */
    radius: number;
    contentLayout: ContentLayout;
    menuStyle: MenuStyle;
    /** Key into PRIMARY_COLORS. */
    primary: string;
    /**
     * Whether `primary` is a DELIBERATE choice or just the shipped default.
     *
     * A separate field because the value cannot say this on its own. The first
     * version inferred it - "if the accent is not `slate`, they chose it" -
     * which made the first swatch a lie: click the black one and the panel
     * showed the organisation's purple, because slate and "untouched" were the
     * same state. A picker whose first option does something else is worse than
     * no picker.
     */
    primaryChosen?: boolean;
    /** Key into SURFACE_TINTS. */
    surface: string;
}
/**
 * Accent palette, in oklch.
 *
 * oklch because it is perceptually uniform: the same lightness value looks
 * equally light across hues, so a generated hover or muted variant stays legible
 * on every colour. The same reason the spec picked it for tenant branding.
 *
 * Each entry carries its own foreground, because contrast is not derivable from
 * the accent alone - yellow needs dark text where indigo needs light, and
 * getting that wrong produces unreadable buttons rather than ugly ones.
 */
export declare const PRIMARY_COLORS: Record<string, {
    label: string;
    value: string;
    foreground: string;
}>;
/**
 * Surface tint - the hue of greys, not their lightness.
 *
 * A neutral grey next to a warm accent reads as slightly wrong in a way people
 * notice without being able to name. Tinting the surface toward the accent hue
 * fixes it, which is why this is a separate choice rather than derived.
 */
export declare const SURFACE_TINTS: Record<string, {
    label: string;
    hue: number;
    chroma: number;
}>;
export declare const FONT_SIZE_MIN = 12;
export declare const FONT_SIZE_MAX = 20;
/** A fixed set of stops, not a slider - a radius is a brand decision, not a dial somebody sweeps. */
export declare const RADIUS_OPTIONS: readonly [0, 0.25, 0.5, 0.75, 1];
export declare function isDark(next: Appearance): boolean;
export declare function appearanceVars(next: Appearance): Record<string, string>;
/**
 * Read the stored preference, migrating anything an older version wrote.
 *
 * Exported and callable OUTSIDE a component, because the appearance has to be
 * applied on pages that mount no panel component at all - the sign-in screen
 * being the one people notice.
 */
export declare function readAppearance(): Appearance;
/**
 * Apply the stored appearance at APP BOOT, before any component mounts.
 *
 * This is the fix for two related bugs. The preference used to be applied in
 * `onMounted` of a component that only exists in the authenticated shell, so
 * (a) the sign-in and registration screens rendered with no theme at all, and
 * (b) signing out and back in appeared to lose the settings - nothing had been
 * lost, but nothing re-applied them until a panel page mounted.
 *
 * It also fights nothing: this is now the ONLY writer of the theme class.
 */
export declare function initializeAppearance(fromServer?: Partial<Appearance> | null): void;
export declare function setAppearancePersister(fn: ((patch: Partial<Appearance>) => void) | null): void;
/**
 * IT RECORDS AND DOES NOT RE-APPLY, which is not a detail.
 *
 * The first version called `applyAppearance` here so the brand took effect
 * immediately. `useTenantTheme` calls this from inside a `watchEffect`, so that
 * turned a reactive effect into something that reached back into the state the
 * effect was watching - the panel mounted into a synchronous loop and rendered
 * a blank page, with no console error at all, because the thread never yielded.
 *
 * The caller writes the properties itself. This exists so that the NEXT
 * `applyAppearance` - somebody changing a colour in the drawer - does not undo
 * them.
 */
export declare function setTenantVars(vars: Record<string, string>): void;
/** Apply a preference to the document, and cache it for the next first paint. */
export declare function applyAppearance(next: Appearance): void;
export declare function useAppearance(): {
    appearance: import("vue").ComputedRef<{
        theme: Theme;
        density: Density;
        fontSize: number;
        sidebarSide: SidebarSide;
        cardStyle: CardStyle;
        radius: number;
        contentLayout: ContentLayout;
        menuStyle: MenuStyle;
        primary: string;
        primaryChosen?: boolean
        /** Key into SURFACE_TINTS. */
         | undefined;
        surface: string;
    }>;
    set: (patch: Partial<Appearance>) => void;
    reset: () => void;
    PRIMARY_COLORS: Record<string, {
        label: string;
        value: string;
        foreground: string;
    }>;
    SURFACE_TINTS: Record<string, {
        label: string;
        hue: number;
        chroma: number;
    }>;
    FONT_SIZE_MIN: number;
    FONT_SIZE_MAX: number;
    RADIUS_OPTIONS: readonly [0, 0.25, 0.5, 0.75, 1];
};
