<script setup lang="ts">
/**
 * ONE MENU that acts on a selection, plus export.
 *
 * IT WAS A ROW OF BUTTONS - Activate, Suspend, Restore, Delete, Export CSV all
 * laid out side by side above the table. That is the same mistake the row
 * actions had: every verb a resource declares competing for attention at equal
 * weight, in a bar that appears the moment a checkbox is ticked and pushes the
 * table down. A resource with eight bulk actions wrapped onto two lines.
 *
 * FILAMENT'S SHAPE, AND FOR ITS REASON: `BulkActionGroup` is a dropdown, and the
 * selection bar carries a count and one trigger. The destructive action is then
 * somewhere deliberate rather than one pixel from "Activate".
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
 * A destructive action always confirms - the server sets that default too, so
 * a definition that forgets `requiresConfirmation` still gets one.
 */
import { computed, ref } from 'vue'
import PkModal from '../Overlay/PkModal.vue'
import PkDropdown from '../primitives/PkDropdown.vue'
import { iconPath } from '../primitives/icons'

export interface BulkActionSchema {
    key: string
    label: string
    icon: string | null
    destructive: boolean
    confirmation: string | null
    /** Filament's palette: primary | gray | success | warning | danger | info. */
    color?: string | null
}

const props = withDefaults(
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

/** Same split and the same tones as the row menu - see RecordActions.vue. */
const ordinary = computed(() => props.actions.filter((a) => !a.destructive))
const destructive = computed(() => props.actions.filter((a) => a.destructive))

const TONES: Record<string, string> = {
    primary: 'text-primary',
    gray: 'text-foreground',
    success: 'text-emerald-600 dark:text-emerald-400',
    warning: 'text-amber-600 dark:text-amber-500',
    danger: 'text-destructive',
    info: 'text-sky-600 dark:text-sky-400',
}

function tone(action: BulkActionSchema): string {
    return TONES[action.color ?? 'gray'] ?? TONES.gray
}

function attempt(action: BulkActionSchema) {
    if (action.confirmation) {
        pending.value = action

        return
    }

    emit('run', action.key)
}

function confirm() {
    if (pending.value) {
        emit('run', pending.value.key)
    }

    pending.value = null
}

const format = (n: number) => new Intl.NumberFormat().format(n)
</script>

<template>
    <PkDropdown width="w-52">
        <template #trigger>
            <button
                type="button"
                class="bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50"
                :disabled="busy"
                aria-haspopup="menu"
            >
                Bulk actions
                <svg
                    class="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>
        </template>

        <template #panel>
            <div class="py-0.5">
                <button
                    v-for="action in ordinary"
                    :key="action.key"
                    type="button"
                    role="menuitem"
                    class="hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    :class="tone(action)"
                    :disabled="busy"
                    @click="attempt(action)"
                >
                    <svg
                        class="size-4 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path :d="iconPath(action.icon)" />
                    </svg>
                    {{ action.label }}
                </button>

                <!--
                    EXPORT SITS WITH THEM because it is a bulk action in every
                    sense that matters to the operator - it acts on the same
                    selection and answers the same "do this to these" question.
                    It is separate only in the payload, because it reads rather
                    than writes and so needs no confirmation.
                -->
                <button
                    v-if="canExport"
                    type="button"
                    role="menuitem"
                    class="text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    :disabled="busy"
                    @click="emit('export')"
                >
                    <svg
                        class="size-4 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path :d="iconPath('download')" />
                    </svg>
                    Export CSV
                </button>

                <!-- Always last, always separated. -->
                <div v-if="destructive.length" class="mt-0.5 border-t pt-0.5">
                    <button
                        v-for="action in destructive"
                        :key="action.key"
                        type="button"
                        role="menuitem"
                        class="text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        :disabled="busy"
                        @click="attempt(action)"
                    >
                        <svg
                            class="size-4 shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                        >
                            <path :d="iconPath(action.icon ?? 'trash')" />
                        </svg>
                        {{ action.label }}
                    </button>
                </div>
            </div>
        </template>
    </PkDropdown>

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
