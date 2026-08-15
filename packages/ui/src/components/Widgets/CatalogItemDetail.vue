<script setup lang="ts">
/**
 * Full-page catalog item: gallery, facts, stock or occupancy, charts, cart.
 */
import { computed, ref } from 'vue'
import LineChart from './LineChart.vue'
import MiniStatCard from './MiniStatCard.vue'
import PkStatusBadge from '../primitives/PkStatusBadge.vue'
import type { CatalogItem } from './CatalogCard.vue'

const props = defineProps<{
    item: CatalogItem
}>()

const emit = defineEmits<{
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

const isUnit = computed(() => props.item.kind === 'unit')

const gallery = computed(() => {
    const urls = [props.item.image, ...(props.item.images ?? [])].filter(
        (src): src is string => typeof src === 'string' && src !== '',
    )

    return [...new Set(urls)]
})

const activeImage = ref(0)

const history = computed(() => {
    const base =
        props.item.stock ??
        props.item.progress?.value ??
        props.item.metrics?.price ??
        props.item.metrics?.rent ??
        12

    return series(Number(base) || 12, seed(props.item.key) % 7)
})

const occupancy = computed(() => {
    const base = props.item.progress?.value ?? (props.item.status === 'occupied' ? 80 : 20)

    return series(Number(base) || 20, (seed(props.item.key) % 5) + 1)
})

const chartSeries = computed(() => (isUnit.value ? occupancy.value : history.value))

const showCart = computed(() => !isUnit.value && props.item.status !== 'out-of-stock')
</script>

<template>
    <div class="flex flex-col gap-10">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div class="flex flex-col gap-3">
                <div class="bg-muted aspect-[4/3] overflow-hidden rounded-lg border">
                    <img
                        v-if="gallery[activeImage]"
                        :src="gallery[activeImage]"
                        :alt="item.label"
                        class="size-full object-cover"
                    />
                </div>
                <div v-if="gallery.length > 1" class="flex gap-2 overflow-x-auto">
                    <button
                        v-for="(src, index) in gallery"
                        :key="src"
                        type="button"
                        class="size-16 shrink-0 overflow-hidden rounded-md border"
                        :class="index === activeImage ? 'ring-2 ring-foreground' : 'opacity-80'"
                        :aria-label="`Photo ${index + 1}`"
                        :aria-pressed="index === activeImage ? 'true' : 'false'"
                        @click="activeImage = index"
                    >
                        <img :src="src" alt="" class="size-full object-cover" />
                    </button>
                </div>
            </div>

            <div class="flex flex-col gap-5">
                <div class="flex flex-wrap items-start justify-between gap-3">
                    <div class="min-w-0">
                        <h1 class="text-2xl font-semibold tracking-tight">{{ item.label }}</h1>
                        <p class="text-muted-foreground mt-1 text-sm">
                            {{ item.caption ?? item.sku }}
                        </p>
                    </div>
                    <PkStatusBadge v-if="item.status" :status="item.status" :tone="item.tone" />
                </div>

                <p class="text-2xl font-semibold tabular-nums">{{ item.price }}</p>

                <p v-if="item.facts?.length" class="text-muted-foreground text-sm">
                    {{ item.facts.join(' · ') }}
                </p>

                <dl class="grid grid-cols-2 gap-3 text-sm">
                    <div v-if="item.sku" class="rounded-lg border p-3">
                        <dt class="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                            SKU
                        </dt>
                        <dd class="mt-1 font-medium">{{ item.sku }}</dd>
                    </div>
                    <div class="rounded-lg border p-3">
                        <dt class="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                            {{ isUnit ? 'Occupancy' : 'Stock' }}
                        </dt>
                        <dd class="mt-1 font-medium">
                            {{
                                isUnit
                                    ? `${item.progress?.value ?? 0}%`
                                    : `${item.stock ?? item.progress?.value ?? 0} in stock`
                            }}
                        </dd>
                    </div>
                </dl>

                <button
                    v-if="showCart"
                    type="button"
                    class="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto"
                    @click="emit('cart', item.key)"
                >
                    Add to cart
                </button>
            </div>
        </div>

        <section class="flex flex-col gap-4">
            <h2 class="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                Analytics
            </h2>
            <div class="grid gap-4 sm:grid-cols-2">
                <MiniStatCard
                    :label="isUnit ? 'Occupancy' : 'Stock'"
                    :value="
                        isUnit
                            ? `${item.progress?.value ?? 0}%`
                            : String(item.stock ?? item.progress?.value ?? 0)
                    "
                    :series="chartSeries"
                />
                <MiniStatCard label="Price" :value="item.price ?? '-'" :series="history" />
            </div>
            <div class="bg-card rounded-lg border p-4">
                <p class="mb-3 text-sm font-medium">
                    {{ isUnit ? 'Occupancy, last 6 months' : 'Stock movement, last 6 months' }}
                </p>
                <LineChart :data="chartSeries" type="area" :height="220" />
            </div>
        </section>
    </div>
</template>
