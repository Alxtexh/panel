<script setup lang="ts">
/**
 * Inspect a catalog item: photos, facts, a fake history chart, add to cart.
 *
 * Clicking a tile opens this, not a silent add-to-cart. Cart is a button here
 * (and on product cards). Units skip the cart action.
 */
import { computed } from 'vue'
import PkSlideover from '../Overlay/PkSlideover.vue'
import PkStatusBadge from '../primitives/PkStatusBadge.vue'
import Sparkline from './Sparkline.vue'
import MiniStatCard from './MiniStatCard.vue'
import type { CatalogItem } from './CatalogCard.vue'

const props = defineProps<{
    open: boolean
    item: CatalogItem | null
}>()

const emit = defineEmits<{
    close: []
    cart: [key: string]
}>()

function seed(raw: string): number {
    let n = 0

    for (const ch of raw) {
        n = (n * 31 + ch.charCodeAt(0)) >>> 0
    }

    return n
}

function series(base: number, drift: number): { label: string; value: number }[] {
    const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']

    return months.map((label, index) => ({
        label,
        value: Math.max(0, Math.round(base + Math.sin(index + drift) * base * 0.18)),
    }))
}

const isUnit = computed(() => props.item?.kind === 'unit')

const history = computed(() => {
    const item = props.item

    if (!item) {
        return []
    }

    const base =
        item.stock ??
        item.progress?.value ??
        item.metrics?.price ??
        item.metrics?.rent ??
        12

    return series(Number(base) || 12, seed(item.key) % 7)
})

const occupancy = computed(() => {
    const item = props.item

    if (!item) {
        return []
    }

    const base = item.progress?.value ?? (item.status === 'occupied' ? 80 : 20)

    return series(Number(base) || 20, (seed(item.key) % 5) + 1)
})

const showCart = computed(
    () =>
        Boolean(props.item) &&
        !isUnit.value &&
        props.item?.status !== 'out-of-stock',
)
</script>

<template>
    <PkSlideover
        :open="open"
        :title="item?.label ?? 'Item'"
        :description="item?.caption ?? item?.sku ?? null"
        width="w-[28rem]"
        @close="emit('close')"
    >
        <div v-if="item" class="flex flex-col gap-5 p-4">
            <div class="bg-muted aspect-[4/3] overflow-hidden rounded-lg">
                <img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.label"
                    class="size-full object-cover"
                />
            </div>

            <div v-if="item.images?.length" class="flex gap-2 overflow-x-auto">
                <img
                    v-for="(src, index) in item.images"
                    :key="index"
                    :src="src"
                    alt=""
                    class="size-16 shrink-0 rounded-md object-cover"
                />
            </div>

            <div class="flex items-start justify-between gap-3">
                <div>
                    <p class="text-lg font-semibold tabular-nums">{{ item.price }}</p>
                    <p v-if="typeof item.stock === 'number'" class="text-muted-foreground text-sm">
                        {{ item.stock }} in stock
                    </p>
                </div>
                <PkStatusBadge v-if="item.status" :status="item.status" :tone="item.tone" />
            </div>

            <p v-if="item.facts?.length" class="text-muted-foreground text-sm">
                {{ item.facts.join(' · ') }}
            </p>

            <div class="grid grid-cols-2 gap-3">
                <MiniStatCard
                    :label="isUnit ? 'Occupancy' : 'Stock'"
                    :value="
                        isUnit
                            ? `${item.progress?.value ?? 0}%`
                            : String(item.stock ?? item.progress?.value ?? 0)
                    "
                    :series="isUnit ? occupancy : history"
                />
                <MiniStatCard
                    label="Price"
                    :value="item.price ?? '-'"
                    :series="history"
                />
            </div>

            <div class="flex flex-col gap-2">
                <p class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {{ isUnit ? 'Occupancy, last 6 months' : 'Stock movement, last 6 months' }}
                </p>
                <Sparkline
                    :data="isUnit ? occupancy : history"
                    :height="72"
                    filled
                />
            </div>
        </div>

        <template v-if="showCart && item" #footer>
            <button
                type="button"
                class="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                @click="emit('cart', item.key)"
            >
                Add to cart
            </button>
        </template>
    </PkSlideover>
</template>
