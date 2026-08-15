<script setup lang="ts">
/**
 * Shelf plus cart: CatalogGrid, a Filters sheet, and CartPanel.
 *
 * DROP THIS ON ANY PAGE. It does not visit routes and it does not fetch.
 * Pass items; listen for `select` and `pay`. Cart lines stay in this
 * component unless you v-model them.
 */
import { computed, ref } from 'vue'
import PkButton from '../primitives/PkButton.vue'
import PkHeading from '../primitives/PkHeading.vue'
import CatalogGrid from './CatalogGrid.vue'
import CatalogFilterSheet from './CatalogFilterSheet.vue'
import CartPanel from './CartPanel.vue'
import type { CatalogItem } from './CatalogCard.vue'
import type { LineItem } from './LineItems.vue'
import {
    catalogFiltersActive,
    emptyCatalogFilters,
    findExactSku,
    matchCatalogItem,
} from './catalogFilter'
import type { CatalogFacet, CatalogFilters } from './catalogFilter'

const props = withDefaults(
    defineProps<{
        items: CatalogItem[]
        facets?: CatalogFacet[]
        shelfTitle?: string
        shelfDescription?: string | null
        searchPlaceholder?: string
        cartTitle?: string
        taxRate?: number
        taxLabel?: string
        discountRate?: number
        discountLabel?: string
        formatMoney?: (amount: number) => string
        parsePrice?: (item: CatalogItem) => number
    }>(),
    {
        facets: () => [],
        shelfTitle: 'Shelf',
        shelfDescription: 'Tap a product, or type a SKU and press Enter.',
        searchPlaceholder: 'Search or scan SKU…',
        cartTitle: 'Cart',
        taxRate: 0,
        taxLabel: 'Tax',
        discountRate: 0,
        discountLabel: 'Discount',
        formatMoney: (amount: number) =>
            new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(
                Math.round(amount),
            ),
        parsePrice: (item: CatalogItem) =>
            Number(String(item.price ?? '').replace(/[^\d.]/g, '')) || 0,
    },
)

const emit = defineEmits<{
    select: [key: string]
    pay: [items: LineItem[]]
}>()

const filters = ref(emptyCatalogFilters())
const sheetOpen = ref(false)
const cart = defineModel<LineItem[]>('cart', { default: () => [] })
const paid = ref(false)

const visibleItems = computed(() =>
    props.items.filter((item) => matchCatalogItem(item, filters.value)),
)

function onFilter(next: CatalogFilters): void {
    filters.value = { ...filters.value, query: next.query }
}

function applyFacets(next: CatalogFilters): void {
    filters.value = {
        ...filters.value,
        selected: next.selected,
        ranges: next.ranges,
        query: filters.value.query,
    }
    sheetOpen.value = false
}

function unitPrice(item: CatalogItem | undefined): number {
    return item ? props.parsePrice(item) : 0
}

function rewriteLine(line: LineItem, qty: number, unit: number): LineItem {
    return {
        ...line,
        qty,
        amount: props.formatMoney(unit * qty),
    }
}

function scanShelf(query: string): void {
    const hit = findExactSku(props.items, query)

    if (hit) {
        addToCart(hit.key)
    }
}

function addToCart(key: string): void {
    const product = props.items.find((item) => item.key === key)

    if (!product || product.status === 'out-of-stock') {
        return
    }

    paid.value = false
    const unit = unitPrice(product)
    const existing = cart.value.find((line) => line.key === key)

    if (existing) {
        cart.value = cart.value.map((line) =>
            line.key === key
                ? rewriteLine(line, Number(line.qty ?? 1) + 1, unit)
                : line,
        )

        return
    }

    cart.value = [
        ...cart.value,
        {
            key: product.key,
            label: product.label,
            detail: product.caption ?? null,
            qty: 1,
            amount: props.formatMoney(unit),
        },
    ]
}

function setQty(key: string, qty: number): void {
    const product = props.items.find((item) => item.key === key)
    const unit = unitPrice(product)

    cart.value = cart.value.map((line) =>
        line.key === key ? rewriteLine(line, qty, unit) : line,
    )
}

function removeLine(key: string): void {
    cart.value = cart.value.filter((line) => line.key !== key)
}

const subtotalValue = computed(() =>
    cart.value.reduce((sum, line) => {
        const product = props.items.find((item) => item.key === line.key)

        return sum + unitPrice(product) * Number(line.qty ?? 1)
    }, 0),
)

const discountValue = computed(() =>
    props.discountRate > 0
        ? Math.round(subtotalValue.value * props.discountRate)
        : 0,
)

const taxValue = computed(() =>
    Math.round((subtotalValue.value - discountValue.value) * props.taxRate),
)

const subtotal = computed(() =>
    cart.value.length ? props.formatMoney(subtotalValue.value) : null,
)
const discount = computed(() =>
    cart.value.length && discountValue.value > 0
        ? `−${props.formatMoney(discountValue.value)}`
        : null,
)
const tax = computed(() =>
    cart.value.length && props.taxRate > 0
        ? props.formatMoney(taxValue.value)
        : null,
)
const total = computed(() =>
    cart.value.length
        ? props.formatMoney(
              subtotalValue.value - discountValue.value + taxValue.value,
          )
        : null,
)

function pay(): void {
    paid.value = true
    emit('pay', cart.value)
}
</script>

<template>
    <div
        data-slot="catalog-till"
        class="grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
    >
        <section class="flex flex-col gap-4">
            <div class="flex flex-wrap items-start justify-between gap-3">
                <PkHeading
                    variant="small"
                    :title="shelfTitle"
                    :description="shelfDescription ?? undefined"
                />
                <div class="flex items-center gap-2">
                    <button
                        v-if="catalogFiltersActive(filters)"
                        type="button"
                        class="text-muted-foreground hover:text-foreground text-xs hover:underline"
                        @click="
                            filters = {
                                ...emptyCatalogFilters(),
                                query: filters.query,
                            }
                        "
                    >
                        Clear
                    </button>
                    <button
                        v-if="facets.length > 0"
                        type="button"
                        class="relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
                        @click="sheetOpen = true"
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
                            v-if="catalogFiltersActive(filters)"
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
                :search-placeholder="searchPlaceholder"
                :items="visibleItems"
                @filter="onFilter"
                @select="emit('select', $event)"
                @cart="addToCart"
                @scan="scanShelf"
            />
        </section>

        <CartPanel
            class="lg:sticky lg:top-4"
            :title="cartTitle"
            :items="cart"
            :subtotal="subtotal"
            :discount-label="discountLabel"
            :discount="discount"
            :tax-label="taxLabel"
            :tax="tax"
            :total="total"
            @qty="setQty"
            @remove="removeLine"
        >
            <template #pay>
                <slot name="pay" :cart="cart" :paid="paid" :pay="pay">
                    <PkButton
                        class="w-full"
                        :disabled="cart.length === 0"
                        @click="pay"
                    >
                        {{ paid ? 'Paid' : 'Pay' }}
                    </PkButton>
                </slot>
            </template>
        </CartPanel>
    </div>

    <CatalogFilterSheet
        :open="sheetOpen"
        title="Filter shelf"
        hide-search
        :facets="facets"
        :applied="filters"
        @close="sheetOpen = false"
        @apply="applyFacets"
        @reset="filters = { ...emptyCatalogFilters(), query: filters.query }"
    />
</template>
