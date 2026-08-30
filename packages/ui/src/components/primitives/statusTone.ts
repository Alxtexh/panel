/**
 * Status words to semantic tones, never tenant brand.
 *
 * A PANEL'S ACCENT IS A MARKETING CHOICE. "Paid" and "out of stock" are not:
 * they have to stay green and red even when a tenant paints the shell purple.
 * `PkBadge` already owns the dedicated tokens (`success` / `warning` / `info` /
 * `destructive`); this map is the other half, the words operators actually
 * store, pointed at those tokens so every screen does not invent its own.
 *
 * TONE WINS WHEN BOTH ARE SET. The map is a default for common vocabulary
 * (POS stock, rental occupancy, a payment flag), not a closed enum. An
 * application with its own words passes `tone` explicitly.
 */
export type SemanticTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral'

export const STATUS_TONES: Record<string, SemanticTone> = {
    online: 'success',
    paid: 'success',
    active: 'success',
    available: 'success',
    occupied: 'success',
    instock: 'success',
    'in-stock': 'success',
    in_stock: 'success',
    fulfilled: 'success',

    pending: 'warning',
    reserved: 'warning',
    low: 'warning',
    due: 'warning',
    degraded: 'warning',

    offline: 'danger',
    unpaid: 'danger',
    overdue: 'danger',
    failed: 'danger',
    outofstock: 'danger',
    'out-of-stock': 'danger',
    out_of_stock: 'danger',
    expired: 'danger',

    vacant: 'info',
    processing: 'info',
    draft: 'info',
    ending: 'warning',
    connected: 'success',
    disconnected: 'neutral',
    live: 'success',
    test: 'info',
    enabled: 'success',
    offered: 'success',
    disabled: 'neutral',
    default: 'info',
}

const VARIANT: Record<SemanticTone, 'success' | 'warning' | 'destructive' | 'info' | 'outline'> = {
    success: 'success',
    warning: 'warning',
    danger: 'destructive',
    info: 'info',
    neutral: 'outline',
}

/** Normalise a stored status so `in_stock` and `In stock` hit the same key. */
export function normaliseStatus(status: string): string {
    return status.trim().toLowerCase().replace(/\s+/g, '-')
}

export function statusTone(
    status: string | null | undefined,
    tone?: SemanticTone | null,
): SemanticTone {
    if (tone) {
        return tone
    }

    if (!status) {
        return 'neutral'
    }

    return STATUS_TONES[normaliseStatus(status)] ?? 'neutral'
}

export function statusBadgeVariant(
    status: string | null | undefined,
    tone?: SemanticTone | null,
): 'success' | 'warning' | 'destructive' | 'info' | 'outline' {
    return VARIANT[statusTone(status, tone)]
}
