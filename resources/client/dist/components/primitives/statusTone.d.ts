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
export type SemanticTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export declare const STATUS_TONES: Record<string, SemanticTone>;
/** Normalise a stored status so `in_stock` and `In stock` hit the same key. */
export declare function normaliseStatus(status: string): string;
export declare function statusTone(status: string | null | undefined, tone?: SemanticTone | null): SemanticTone;
export declare function statusBadgeVariant(status: string | null | undefined, tone?: SemanticTone | null): 'success' | 'warning' | 'destructive' | 'info' | 'outline';
