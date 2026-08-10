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
export declare const ICON_PATHS: Record<string, string>;
/** The path for a name, or the fallback dot when the name is unknown. */
export declare function iconPath(name: string | null | undefined): string;
