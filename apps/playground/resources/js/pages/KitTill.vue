<script setup lang="ts">
/**
 * Kit till demo: tap a product into CartPanel, with ChartWidget chrome above.
 *
 * PROPS COME FROM `KitTillPage::data()`. Header widgets arrive as deferred
 * page props and are drawn by PanelWidgets, the same host a resource list uses.
 */
import { computed, ref } from 'vue';
import {
    CartPanel,
    CatalogFilterSheet,
    CatalogGrid,
    CatalogInspect,
    emptyCatalogFilters,
    findExactSku,
    matchCatalogItem,
    PkButton,
    PkHeading,
    PkStatusBadge,
} from '@alxtexh-enterprise/panel';
import type {
    CatalogFacet,
    CatalogFilters,
    CatalogItem,
    LineItem,
} from '@alxtexh-enterprise/panel';
import { PanelWidgets } from '@alxtexh-enterprise/panel/inertia';
import { Head } from '@inertiajs/vue3';

defineOptions({ inheritAttrs: false });

const props = defineProps<{
    pageHeading?: string;
    pageDescription?: string | null;
    products?: CatalogItem[];
    statuses?: string[];
}>();

const shelfFilters = ref(emptyCatalogFilters());
const shelfSheetOpen = ref(false);
const inspecting = ref<CatalogItem | null>(null);
const cart = ref<LineItem[]>([]);
const paid = ref(false);
const tenOff = ref(false);

const productFacets: CatalogFacet[] = [
    {
        key: 'category',
        label: 'Category',
        options: [
            { value: 'coffee', label: 'Coffee' },
            { value: 'supplies', label: 'Supplies' },
            { value: 'merch', label: 'Merch' },
        ],
    },
    {
        key: 'stock',
        label: 'Stock',
        options: [
            { value: 'in-stock', label: 'In stock' },
            { value: 'low', label: 'Low' },
            { value: 'out-of-stock', label: 'Out of stock' },
        ],
    },
];

function filtersActive(filters: CatalogFilters): boolean {
    return Object.values(filters.selected ?? {}).some(Boolean);
}

const visibleProducts = computed(() =>
    (props.products ?? []).filter((item) =>
        matchCatalogItem(item, shelfFilters.value),
    ),
);

function onShelfFilter(next: CatalogFilters): void {
    shelfFilters.value = {
        ...shelfFilters.value,
        query: next.query,
    };
}

function applyShelfFacets(next: CatalogFilters): void {
    shelfFilters.value = {
        ...shelfFilters.value,
        selected: next.selected,
        ranges: next.ranges,
        query: shelfFilters.value.query,
    };
    shelfSheetOpen.value = false;
}

function parseKes(price?: string | null): number {
    if (!price) {
        return 0;
    }

    return Number(String(price).replace(/[^\d.]/g, '')) || 0;
}

function formatKes(amount: number): string {
    return `KES ${new Intl.NumberFormat('en-KE').format(Math.round(amount))}`;
}

function unitPrice(item: CatalogItem): number {
    return parseKes(item.price);
}

function rewriteLine(line: LineItem, qty: number, unit: number): LineItem {
    return {
        ...line,
        qty,
        amount: formatKes(unit * qty),
    };
}

function scanShelf(query: string): void {
    const hit = findExactSku(props.products ?? [], query);

    if (hit) {
        addToCart(hit.key);
    }
}

function inspectProduct(key: string): void {
    inspecting.value =
        (props.products ?? []).find((item) => item.key === key) ?? null;
}

function addToCart(key: string): void {
    const product = (props.products ?? []).find((item) => item.key === key);

    if (!product || product.status === 'out-of-stock') {
        return;
    }

    paid.value = false;
    const unit = unitPrice(product);
    const existing = cart.value.find((line) => line.key === key);

    if (existing) {
        cart.value = cart.value.map((line) =>
            line.key === key
                ? rewriteLine(line, Number(line.qty ?? 1) + 1, unit)
                : line,
        );

        return;
    }

    cart.value = [
        ...cart.value,
        {
            key: product.key,
            label: product.label,
            detail: product.caption ?? null,
            qty: 1,
            amount: formatKes(unit),
        },
    ];
}

function setQty(key: string, qty: number): void {
    const product = (props.products ?? []).find((item) => item.key === key);
    const unit = unitPrice(product ?? { key, label: '' });

    cart.value = cart.value.map((line) =>
        line.key === key ? rewriteLine(line, qty, unit) : line,
    );
}

function removeLine(key: string): void {
    cart.value = cart.value.filter((line) => line.key !== key);
}

const subtotalValue = computed(() =>
    cart.value.reduce((sum, line) => {
        const product = (props.products ?? []).find(
            (item) => item.key === line.key,
        );

        return (
            sum +
            unitPrice(product ?? { key: line.key, label: line.label }) *
                Number(line.qty ?? 1)
        );
    }, 0),
);

const discountValue = computed(() =>
    tenOff.value ? Math.round(subtotalValue.value * 0.1) : 0,
);

const taxValue = computed(() =>
    Math.round((subtotalValue.value - discountValue.value) * 0.16),
);

const subtotal = computed(() =>
    cart.value.length ? formatKes(subtotalValue.value) : null,
);
const discount = computed(() =>
    cart.value.length && tenOff.value
        ? `−${formatKes(discountValue.value)}`
        : null,
);
const tax = computed(() =>
    cart.value.length ? formatKes(taxValue.value) : null,
);
const total = computed(() =>
    cart.value.length
        ? formatKes(subtotalValue.value - discountValue.value + taxValue.value)
        : null,
);
</script>

<template>
    <Head :title="pageHeading ?? 'Till'" />

    <div class="mx-auto flex w-full max-w-6xl flex-col gap-10 p-4 sm:p-6">
        <PkHeading
            :title="pageHeading ?? 'Till'"
            :description="pageDescription ?? undefined"
        />

        <PanelWidgets />

        <div class="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <section class="flex flex-col gap-4">
                <div class="flex flex-wrap items-start justify-between gap-3">
                    <PkHeading
                        variant="small"
                        title="Shelf"
                        description="Tap a product, or type a SKU and press Enter."
                    />
                    <div class="flex items-center gap-2">
                        <button
                            v-if="filtersActive(shelfFilters)"
                            type="button"
                            class="text-muted-foreground hover:text-foreground text-xs hover:underline"
                            @click="
                                shelfFilters = {
                                    ...emptyCatalogFilters(),
                                    query: shelfFilters.query,
                                }
                            "
                        >
                            Clear
                        </button>
                        <button
                            type="button"
                            class="relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
                            @click="shelfSheetOpen = true"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                class="size-4"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path d="M3 5h18M6 12h12M10 19h4" />
                            </svg>
                            Filters
                            <span
                                v-if="filtersActive(shelfFilters)"
                                class="bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
                            >
                                on
                            </span>
                        </button>
                    </div>
                </div>
                <CatalogGrid
                    searchable
                    autofocus
                    search-placeholder="Search or scan SKU…"
                    :items="visibleProducts"
                    @filter="onShelfFilter"
                    @select="inspectProduct"
                    @cart="addToCart"
                    @scan="scanShelf"
                />
            </section>

            <CartPanel
                class="lg:sticky lg:top-4"
                title="Cart"
                :items="cart"
                :subtotal="subtotal"
                :discount="discount"
                tax-label="VAT 16%"
                :tax="tax"
                :total="total"
                @qty="setQty"
                @remove="removeLine"
            >
                <template #pay>
                    <div class="flex flex-col gap-2">
                        <PkButton
                            class="w-full"
                            variant="outline"
                            :disabled="cart.length === 0"
                            @click="tenOff = !tenOff"
                        >
                            {{ tenOff ? 'Remove 10% off' : '10% off' }}
                        </PkButton>
                        <PkButton
                            class="w-full"
                            :disabled="cart.length === 0"
                            @click="paid = true"
                        >
                            {{ paid ? 'Paid' : 'Pay' }}
                        </PkButton>
                    </div>
                </template>
            </CartPanel>
        </div>

        <section class="flex flex-col gap-3">
            <PkHeading
                variant="small"
                title="Status strip"
                description="Dedicated colours — success, warning, danger, info — not brand."
            />
            <div class="flex flex-wrap gap-2">
                <PkStatusBadge
                    v-for="status in statuses ?? []"
                    :key="status"
                    :status="status"
                />
            </div>
        </section>
    </div>

    <CatalogFilterSheet
        :open="shelfSheetOpen"
        title="Filter shelf"
        hide-search
        :facets="productFacets"
        :applied="shelfFilters"
        @close="shelfSheetOpen = false"
        @apply="applyShelfFacets"
        @reset="
            shelfFilters = { ...emptyCatalogFilters(), query: shelfFilters.query }
        "
    />

    <CatalogInspect
        :open="inspecting !== null"
        :item="inspecting"
        @close="inspecting = null"
        @cart="addToCart"
    />
</template>
