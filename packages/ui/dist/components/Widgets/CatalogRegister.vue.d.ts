import type { TableColumn } from '../DataTable/types';
import type { CatalogItem } from './CatalogCard.vue';
import type { CatalogFacet } from './catalogFilter';
type __VLS_Props = {
    title?: string;
    description?: string | null;
    cardsTitle?: string;
    cardsDescription?: string | null;
    tableTitle?: string;
    tableDescription?: string | null;
    cards?: CatalogItem[];
    facets?: CatalogFacet[];
    rows?: Record<string, unknown>[];
    columns?: TableColumn[];
    searchPlaceholder?: string;
    emptyTitle?: string;
    embedded?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    cart: (key: string) => any;
    select: (key: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCart?: ((key: string) => any) | undefined;
    onSelect?: ((key: string) => any) | undefined;
}>, {
    title: string;
    description: string | null;
    columns: TableColumn[];
    rows: Record<string, unknown>[];
    emptyTitle: string;
    searchPlaceholder: string;
    cards: CatalogItem[];
    embedded: boolean;
    facets: CatalogFacet[];
    cardsTitle: string;
    cardsDescription: string | null;
    tableTitle: string;
    tableDescription: string | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
