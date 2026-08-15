<script setup lang="ts">
/**
 * One merchandisable thing: image, name, price, status.
 *
 * POS product tiles, rental unit cards, and a featured-item strip are the same
 * shape: a picture, a title, a figure, a status pill. The dashboard already
 * had `StatCard` for a number and `ChartCard` for a plot; this is the card for
 * a THING, composed from the same border/surface as those two and `PkBadge`'s
 * dedicated status colours rather than the tenant accent.
 *
 * IT DOES NOT FETCH. The image URL is a prop; a missing or unsafe URL falls
 * through to initials, the same defence `ImageCell` uses. Click handling is
 * the page's: this emits `select` with the item key.
 */
import { computed, ref } from 'vue'
import PkStatusBadge from '../primitives/PkStatusBadge.vue'
import { iconPath } from '../primitives/icons'
import type { SemanticTone } from '../primitives/statusTone'

export interface CatalogItem {
    key: string
    label: string
    caption?: string | null
    image?: string | null
    /** Extra photos; the card peeks at a second one. Click still selects. */
    images?: string[] | null
    sku?: string | null
    price?: string | null
    status?: string | null
    tone?: SemanticTone | null
    /** Occupancy or stock remaining, as a fraction of `total`. */
    progress?: {
        value: number
        total?: number | null
        tone?: SemanticTone | null
    } | null
    /** Short facts under the title: beds, baths, a neighbourhood. */
    facts?: string[] | null
    /** Values the catalog toolbar filters against, keyed by facet. */
    facets?: Record<string, string> | null
    /** Numeric facts for from-to facets (price, rent, beds). */
    metrics?: Record<string, number> | null
    /** Units on the shelf. Shown as "12 in stock". */
    stock?: number | null
    /** Products get a cart action; units do not. */
    kind?: 'product' | 'unit' | null
}

const TONE_BAR: Record<string, string> = {
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-destructive',
    info: 'bg-info',
    neutral: 'bg-muted-foreground/40',
}

const props = withDefaults(
    defineProps<{
        item: CatalogItem
        layout?: 'grid' | 'list'
    }>(),
    { layout: 'grid' },
)

const emit = defineEmits<{ select: [key: string]; cart: [key: string] }>()

const peek = ref(0)

function safeUrl(raw: unknown): string | null {
    if (typeof raw !== 'string') {
        return null
    }

    const trimmed = raw.trim()

    if (trimmed === '') {
        return null
    }

    return /^(https?:)?\/\//i.test(trimmed) ? trimmed : null
}

const photos = computed(() => {
    const urls = [props.item.image, ...(props.item.images ?? [])]
        .map(safeUrl)
        .filter((url): url is string => url !== null)

    return [...new Set(urls)]
})

const url = computed(() => photos.value[peek.value] ?? photos.value[0] ?? null)

const initials = computed(() =>
    props.item.label
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase() ?? '')
        .join(''),
)

const barWidth = computed(() => {
    const bar = props.item.progress

    if (!bar) {
        return null
    }

    const total = Math.max(bar.total ?? 100, bar.value, 1)

    return `${Math.min(100, Math.max(0, (bar.value / total) * 100)).toFixed(2)}%`
})

const peekUrl = computed(() => (photos.value.length > 1 ? photos.value[1] : null))

const showCart = computed(
    () => (props.item.kind ?? 'product') === 'product' && props.item.status !== 'out-of-stock',
)

const stockLabel = computed(() => {
    if (typeof props.item.stock !== 'number') {
        return null
    }

    return `${props.item.stock} in stock`
})

function onCart(event: Event) {
    event.stopPropagation()
    emit('cart', props.item.key)
}
</script>

<template>
    <article
        data-slot="catalog-card"
        class="bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors"
        :class="layout === 'list' ? 'flex-row items-stretch' : 'flex-col'"
        :data-layout="layout"
        role="button"
        tabindex="0"
        @click="emit('select', item.key)"
        @keydown.enter.prevent="emit('select', item.key)"
        @mouseleave="peek = 0"
    >
        <div
            class="bg-muted relative overflow-hidden"
            :class="
                layout === 'list'
                    ? 'aspect-square w-20 shrink-0 sm:w-24'
                    : 'aspect-[4/3] w-full'
            "
        >
            <img
                v-if="url"
                :src="url"
                :alt="item.label"
                loading="lazy"
                class="size-full object-cover"
            />
            <span
                v-else
                class="text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
            >
                {{ initials }}
            </span>

            <img
                v-if="layout === 'grid' && peekUrl && peek === 0"
                :src="peekUrl"
                alt=""
                loading="lazy"
                class="ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2"
                data-slot="catalog-peek"
            />

            <div
                v-if="layout === 'grid' && photos.length > 1"
                class="absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1"
                data-slot="catalog-dots"
            >
                <span
                    v-for="(_, index) in photos"
                    :key="index"
                    class="size-1.5 rounded-full"
                    :class="index === peek ? 'bg-background' : 'bg-background/50'"
                    @mouseenter="peek = index"
                />
            </div>
        </div>

        <div
            class="flex min-w-0 flex-1"
            :class="layout === 'list' ? 'items-center gap-3 p-3' : 'flex-col gap-1 p-3'"
        >
            <div class="flex min-w-0 flex-1 items-start justify-between gap-2">
                <div class="min-w-0">
                    <p class="truncate text-sm font-medium">{{ item.label }}</p>
                    <p v-if="item.caption" class="text-muted-foreground truncate text-xs">
                        {{ item.caption }}
                    </p>
                    <p
                        v-if="item.facts?.length"
                        class="text-muted-foreground line-clamp-2 text-xs"
                    >
                        {{ item.facts.join(' · ') }}
                    </p>
                </div>
                <PkStatusBadge v-if="item.status" :status="item.status" :tone="item.tone" />
            </div>

            <div class="mt-auto flex items-end justify-between gap-2 pt-1">
            <div class="min-w-0">
            <p
                v-if="item.price"
                class="text-sm font-semibold tabular-nums"
            >
                {{ item.price }}
            </p>
            <p v-if="stockLabel" class="text-muted-foreground text-xs tabular-nums">
                {{ stockLabel }}
            </p>
            </div>
            <button
                v-if="showCart"
                type="button"
                class="text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border"
                aria-label="Add to cart"
                data-slot="catalog-cart"
                @click="onCart"
            >
                <svg
                    class="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                >
                    <path :d="iconPath('cart')" />
                </svg>
            </button>
            </div>

            <div
                v-if="barWidth && layout === 'grid'"
                class="bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full"
                role="img"
                :aria-label="`${item.label} ${item.progress!.value}`"
            >
                <span
                    class="block h-full"
                    :class="TONE_BAR[item.progress?.tone ?? 'neutral']"
                    :style="{ width: barWidth }"
                />
            </div>
        </div>
    </article>
</template>
