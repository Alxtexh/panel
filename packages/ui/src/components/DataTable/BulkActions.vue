<script setup lang="ts">
/**
 * The buttons that act on a selection, plus export.
 *
 * IT DOES NOT FETCH (§4 rule 2). It emits `run` with an action key and `export`
 * with nothing; the page owns the request, the polling and the reload. That is
 * what keeps this component usable outside Inertia.
 *
 * CONFIRMATION IS RESOLVED HERE, NOT BY THE PAGE, because the copy travels in
 * the schema and belongs to the action. A page-level `confirm()` would mean
 * every consumer reimplements the same dialog, and browser `confirm` blocks the
 * event loop and cannot be styled or tested.
 *
 * A destructive action always confirms — the server sets that default too, so
 * a definition that forgets `requiresConfirmation` still gets one.
 */
import { ref } from 'vue'
import PkModal from '../Overlay/PkModal.vue'

export interface BulkActionSchema {
    key: string
    label: string
    icon: string | null
    destructive: boolean
    confirmation: string | null
}

withDefaults(
    defineProps<{
        actions: BulkActionSchema[]
        /** How many records the action would touch, for the confirmation copy. */
        count: number
        allMatching: boolean
        busy?: boolean
        canExport?: boolean
    }>(),
    { busy: false, canExport: true },
)

const emit = defineEmits<{
    (e: 'run', key: string): void
    (e: 'export'): void
}>()

const pending = ref<BulkActionSchema | null>(null)

function attempt(action: BulkActionSchema) {
    if (action.confirmation) {
        pending.value = action
        return
    }

    emit('run', action.key)
}

function confirm() {
    if (pending.value) emit('run', pending.value.key)
    pending.value = null
}

const format = (n: number) => new Intl.NumberFormat().format(n)
</script>

<template>
    <div class="flex flex-wrap items-center gap-2">
        <button
            v-for="action in actions"
            :key="action.key"
            type="button"
            class="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors disabled:opacity-50"
            :class="
                action.destructive
                    ? 'border-destructive/30 text-destructive hover:bg-destructive/10'
                    : 'bg-background hover:bg-accent'
            "
            :disabled="busy"
            @click="attempt(action)"
        >
            {{ action.label }}
        </button>

        <button
            v-if="canExport"
            type="button"
            class="bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors disabled:opacity-50"
            :disabled="busy"
            @click="emit('export')"
        >
            Export CSV
        </button>
    </div>

    <PkModal
        :open="pending !== null"
        :title="pending?.label ?? ''"
        :description="pending?.confirmation ?? ''"
        @close="pending = null"
    >
        <!--
            The COUNT is restated in the dialog. "Delete the selected records?"
            reads the same whether it means three rows or ninety thousand, and
            the select-all-matching case is exactly where someone is most likely
            to have selected more than they think.
        -->
        <p class="text-muted-foreground text-sm">
            This will affect
            <span class="text-foreground font-medium tabular-nums">
                {{ allMatching ? 'every matching record' : `${format(count)} records` }} </span
            >.
        </p>

        <template #footer>
            <button
                type="button"
                class="bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm"
                @click="pending = null"
            >
                Cancel
            </button>
            <button
                type="button"
                class="rounded-md px-3 py-1.5 text-sm font-medium"
                :class="
                    pending?.destructive
                        ? 'bg-destructive text-white hover:opacity-90'
                        : 'bg-primary text-primary-foreground hover:opacity-90'
                "
                @click="confirm"
            >
                {{ pending?.label }}
            </button>
        </template>
    </PkModal>
</template>
