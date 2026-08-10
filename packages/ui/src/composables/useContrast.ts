/**
 * WCAG 2 contrast, mirroring `Alxtexh\Panel\Support\Contrast` exactly - the
 * PHP is the rule (roadmap 7.1's field-level `checkContrastAgainst`), this is
 * what lets `PkColourPicker` show the same number as the operator types,
 * before anything is submitted. Duplicated on purpose rather than shared:
 * the two run in different languages, and the math is cheap and small enough
 * that a client hint here costs less than a request to compute it.
 */

export const AA_NORMAL = 4.5

const HEX = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/

function channels(hex: string): [number, number, number] {
    let h = hex.replace('#', '')

    if (h.length === 3) {
        h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
    }

    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]
}

function linearise(channel: number): number {
    const c = channel / 255

    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
}

function relativeLuminance(hex: string): number {
    const [r, g, b] = channels(hex)

    return 0.2126 * linearise(r) + 0.7152 * linearise(g) + 0.0722 * linearise(b)
}

/** 1 (identical) to 21 (black on white). Both colours must already be valid hex. */
export function contrastRatio(hexA: string, hexB: string): number {
    const lA = relativeLuminance(hexA)
    const lB = relativeLuminance(hexB)

    return (Math.max(lA, lB) + 0.05) / (Math.min(lA, lB) + 0.05)
}

/**
 * The nearest shade of `hex`, darkened or lightened toward black/white,
 * that clears `minRatio` against `background` - the one-click fix beside
 * the warning. STEPS IN LIGHTNESS, NOT HUE: shifting hue to fix contrast
 * changes the colour somebody chose into a different colour; darkening or
 * lightening the SAME colour keeps it recognisably theirs, just readable.
 */
export function readableShade(hex: string, background: string, minRatio: number): string {
    if (!HEX.test(hex) || !HEX.test(background)) {
        return hex
    }

    const towardBlack = relativeLuminance(background) > 0.5
    const target = towardBlack ? 0 : 255
    let current: [number, number, number] = channels(hex)

    for (let step = 0; step <= 20; step++) {
        const candidate = toHex(current)

        if (contrastRatio(candidate, background) >= minRatio) {
            return candidate
        }

        // 15% closer to the target each step - a geometric approach that
        // reaches it eventually without ever overshooting past it.
        current = current.map((c) => c + (target - c) * 0.15) as [number, number, number]
    }

    return towardBlack ? '#000000' : '#ffffff'
}

function toHex(rgb: [number, number, number]): string {
    return (
        '#' +
        rgb
            .map((c) =>
                Math.round(Math.max(0, Math.min(255, c)))
                    .toString(16)
                    .padStart(2, '0'),
            )
            .join('')
    )
}
