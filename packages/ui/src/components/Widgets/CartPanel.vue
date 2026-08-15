<script setup lang="ts">
/**
 * A till cart: editable lines, an empty state, and a totals footer.
 *
 * AMOUNTS ARRIVE FORMATTED. This panel does not compute tax, currency, or
 * rounding — the page (or a pricing service) does, and hands over strings.
 * Quantity and remove emit so the page can rewrite those strings.
 */
import LineItems, { type LineItem } from './LineItems.vue'

withDefaults(
    defineProps<{
        items: LineItem[]
        title?: string
        emptyTitle?: string
        emptyDescription?: string
        subtotal?: string | null
        discountLabel?: string | null
        /** Formatted already — this panel does not compute a discount. */
        discount?: string | null
        taxLabel?: string | null
        tax?: string | null
        total?: string | null
    }>(),
    {
        title: 'Cart',
        emptyTitle: 'Cart is empty',
        emptyDescription: 'Select a product to add it.',
        subtotal: null,
        discountLabel: 'Discount',
        discount: null,
        taxLabel: 'Tax',
        tax: null,
        total: null,
    },
)

const emit = defineEmits<{
    qty: [key: string, qty: number]
    remove: [key: string]
}>()
</script>

<template>
    <aside data-slot="cart-panel" class="bg-card flex flex-col overflow-hidden rounded-lg border">
        <header class="border-b px-4 py-3">
            <h2 class="text-sm font-medium">{{ title }}</h2>
        </header>

        <div class="flex-1 px-4 py-3">
            <p
                v-if="items.length === 0"
                class="text-muted-foreground py-8 text-center text-sm"
                data-slot="cart-empty"
            >
                <span class="text-foreground block font-medium">{{ emptyTitle }}</span>
                <span class="mt-1 block">{{ emptyDescription }}</span>
            </p>

            <LineItems
                v-else
                :items="items"
                editable
                @qty="(key, qty) => emit('qty', key, qty)"
                @remove="emit('remove', $event)"
            />
        </div>

        <footer v-if="items.length > 0" class="flex flex-col gap-2 border-t px-4 py-3">
            <div v-if="subtotal" class="flex items-center justify-between text-sm">
                <span class="text-muted-foreground">Subtotal</span>
                <span class="tabular-nums">{{ subtotal }}</span>
            </div>
            <div
                v-if="discount || $slots.discount"
                class="flex items-center justify-between text-sm"
                data-slot="cart-discount"
            >
                <span class="text-muted-foreground">{{ discountLabel }}</span>
                <span v-if="discount" class="tabular-nums">{{ discount }}</span>
                <slot name="discount" />
            </div>
            <div v-if="tax" class="flex items-center justify-between text-sm">
                <span class="text-muted-foreground">{{ taxLabel }}</span>
                <span class="tabular-nums">{{ tax }}</span>
            </div>
            <div v-if="total" class="flex items-center justify-between text-sm font-semibold">
                <span>Total</span>
                <span class="tabular-nums">{{ total }}</span>
            </div>
            <div v-if="$slots.pay" class="pt-1">
                <slot name="pay" />
            </div>
        </footer>
    </aside>
</template>
