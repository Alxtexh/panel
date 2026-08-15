<script setup lang="ts">
/**
 * Order lines, cart rows, upcoming returns — a labelled list with figures.
 *
 * WHY THIS EXISTS ALONGSIDE `StatListChart`. A usage table is label + value +
 * bar. A line item is name, optional quantity, an amount, and a status pill:
 * a till receipt and a "due back today" list are that shape, and stuffing
 * quantity into the value string loses the scan path a cashier needs.
 *
 * COLOURS ARE TONES, the same contract `StatListChart` and `PkStatusBadge`
 * already keep. A paid line is `--success`, not `--primary`.
 *
 * `editable` IS THE CART. A receipt still prints ×qty; a live till needs a
 * stepper and a remove control. The row still does not price itself.
 */
import PkQtyStepper from '../primitives/PkQtyStepper.vue'
import PkStatusBadge from '../primitives/PkStatusBadge.vue'
import { iconPath } from '../primitives/icons'
import type { SemanticTone } from '../primitives/statusTone'

export interface LineItem {
    key: string
    label: string
    detail?: string | null
    qty?: string | number | null
    amount?: string | null
    status?: string | null
    tone?: SemanticTone | null
}

withDefaults(
    defineProps<{
        items: LineItem[]
        /** Qty stepper and remove, instead of a printed ×qty. */
        editable?: boolean
    }>(),
    { editable: false },
)

const emit = defineEmits<{
    qty: [key: string, qty: number]
    remove: [key: string]
}>()

function qtyNumber(row: LineItem): number {
    const raw = row.qty

    if (typeof raw === 'number' && Number.isFinite(raw)) {
        return raw
    }

    const parsed = Number(raw)

    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1
}
</script>

<template>
    <div class="divide-border flex flex-col divide-y">
        <div
            v-for="row in items"
            :key="row.key"
            class="flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
        >
            <div class="min-w-0">
                <p class="truncate text-sm font-medium">{{ row.label }}</p>
                <p v-if="row.detail" class="text-muted-foreground mt-0.5 truncate text-xs">
                    {{ row.detail }}
                </p>
            </div>

            <div class="flex shrink-0 items-center gap-2 text-sm">
                <PkQtyStepper
                    v-if="editable"
                    :model-value="qtyNumber(row)"
                    @update:model-value="emit('qty', row.key, $event)"
                />
                <span
                    v-else-if="row.qty !== null && row.qty !== undefined && row.qty !== ''"
                    class="text-muted-foreground tabular-nums"
                >
                    ×{{ row.qty }}
                </span>
                <span v-if="row.amount" class="font-medium tabular-nums">{{ row.amount }}</span>
                <PkStatusBadge v-if="row.status" :status="row.status" :tone="row.tone" />
                <button
                    v-if="editable"
                    type="button"
                    class="text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md"
                    :aria-label="`Remove ${row.label}`"
                    @click="emit('remove', row.key)"
                >
                    <svg
                        class="size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        aria-hidden="true"
                    >
                        <path :d="iconPath('trash')" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
