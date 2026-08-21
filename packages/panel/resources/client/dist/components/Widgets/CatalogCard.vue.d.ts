import type { SemanticTone } from '../primitives/statusTone';
export interface CatalogItem {
    key: string;
    label: string;
    caption?: string | null;
    image?: string | null;
    /** Extra photos; the card peeks at a second one. Click still selects. */
    images?: string[] | null;
    sku?: string | null;
    price?: string | null;
    status?: string | null;
    tone?: SemanticTone | null;
    /** Occupancy or stock remaining, as a fraction of `total`. */
    progress?: {
        value: number;
        total?: number | null;
        tone?: SemanticTone | null;
    } | null;
    /** Short facts under the title: beds, baths, a neighbourhood. */
    facts?: string[] | null;
    /** Values the catalog toolbar filters against, keyed by facet. */
    facets?: Record<string, string> | null;
    /** Numeric facts for from-to facets (price, rent, beds). */
    metrics?: Record<string, number> | null;
    /** Units on the shelf. Shown as "12 in stock". */
    stock?: number | null;
    /** Products get a cart action; units do not. */
    kind?: 'product' | 'unit' | null;
}
type __VLS_Props = {
    item: CatalogItem;
    layout?: 'grid' | 'list';
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    cart: (key: string) => any;
    select: (key: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCart?: ((key: string) => any) | undefined;
    onSelect?: ((key: string) => any) | undefined;
}>, {
    layout: "grid" | "list";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
