/**
 * WCAG 2 contrast, mirroring `Alxtexh\Panel\Support\Contrast` exactly - the
 * PHP is the rule (roadmap 7.1's field-level `checkContrastAgainst`), this is
 * what lets `PkColourPicker` show the same number as the operator types,
 * before anything is submitted. Duplicated on purpose rather than shared:
 * the two run in different languages, and the math is cheap and small enough
 * that a client hint here costs less than a request to compute it.
 */
export declare const AA_NORMAL = 4.5;
/** 1 (identical) to 21 (black on white). Both colours must already be valid hex. */
export declare function contrastRatio(hexA: string, hexB: string): number;
/**
 * The nearest shade of `hex`, darkened or lightened toward black/white,
 * that clears `minRatio` against `background` - the one-click fix beside
 * the warning. STEPS IN LIGHTNESS, NOT HUE: shifting hue to fix contrast
 * changes the colour somebody chose into a different colour; darkening or
 * lightening the SAME colour keeps it recognisably theirs, just readable.
 */
export declare function readableShade(hex: string, background: string, minRatio: number): string;
