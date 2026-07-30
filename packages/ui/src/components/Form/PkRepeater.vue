<script setup lang="ts">
/**
 * A repeating group of fields - the control for `RepeaterField`.
 *
 * FOR THE ONE-TO-MANY THAT DOES NOT DESERVE A TABLE: a client's several contact
 * numbers, the notes attached to an installation. Data always read with its
 * parent, never queried on its own. The honest limit is stated on the PHP side
 * and repeated here because it is the thing people get wrong: anything you will
 * ever FILTER, SORT or COUNT belongs in a table, and moving it later is a
 * migration.
 *
 * CHILDREN ARE LEAVES. The server refuses a repeater inside a repeater at
 * declaration time, so this never recurses more than one level - which is also
 * why importing the field control here is safe.
 *
 * ROWS CARRY A CLIENT-SIDE UID, and it is load-bearing rather than tidy. Keying
 * rows by array index means deleting row 2 renumbers rows 3 and 4, so Vue
 * reuses the wrong DOM nodes and the values appear to jump between rows. Keying
 * by content is worse, because content changes as you type.
 *
 * ERRORS ARE ADDRESSED BY PATH. Laravel validates children at
 * `contacts.0.phone`, so that is exactly the key looked up here - no
 * re-derivation, no guessing which row a message belongs to.
 */
import { computed, ref, watch } from 'vue'
import FormFieldControl from './FormFieldControl.vue'
import type { FormField } from './types'

type Row = Record<string, unknown>

interface KeyedRow {
    uid: number
    data: Row
}

const props = withDefaults(
    defineProps<{
        modelValue: Row[] | null
        /** One row's shape, declared server-side. */
        children: FormField[]
        itemLabel?: string
        minItems?: number | null
        maxItems?: number | null
        disabled?: boolean
        /** Validation errors for the whole form, keyed by dotted path. */
        errors?: Record<string, string>
        /** The field's own key, so child error paths can be built. */
        fieldKey: string
        /** Option lists for child selects, keyed by child field key. */
        childOptions?: Record<string, { value: any; label: string }[]>
    }>(),
    {
        itemLabel: 'Item',
        minItems: null,
        maxItems: null,
        disabled: false,
        errors: () => ({}),
        childOptions: () => ({}),
    },
)

const emit = defineEmits<{
    (e: 'update:modelValue', value: Row[] | null): void
}>()

let nextUid = 0

const rows = ref<KeyedRow[]>(fromValue(props.modelValue))

function fromValue(source: Row[] | null): KeyedRow[] {
    if (!Array.isArray(source)) {
        return []
    }

    return source.map((data) => ({ uid: nextUid++, data: { ...data } }))
}

/** Same reasoning as PkKeyValue: re-seed only on a genuine external change. */
watch(
    () => props.modelValue,
    (incoming) => {
        if (JSON.stringify(incoming ?? null) === JSON.stringify(toValue())) {
            return
        }

        rows.value = fromValue(incoming)
    },
)

/**
 * Rows that have something in them, in order.
 *
 * Empty rows are dropped because "Add" creates one before it is filled in, and
 * saving with a blank row at the bottom should not persist a blank row. The
 * server does this too - it has to, since it cannot trust the client - but
 * doing it here as well keeps the dirty-check honest: a form is not "changed"
 * because somebody clicked Add and then thought better of it.
 */
function toValue(): Row[] | null {
    const out: Row[] = []

    for (const row of rows.value) {
        const clean: Row = {}
        let hasValue = false

        for (const child of props.children) {
            const entry = row.data[child.key] ?? null

            clean[child.key] = entry

            if (entry !== null && entry !== '' && !(Array.isArray(entry) && entry.length === 0)) {
                hasValue = true
            }
        }

        if (hasValue) {
            out.push(clean)
        }
    }

    return out.length ? out : null
}

function publish() {
    emit('update:modelValue', toValue())
}

const atMax = computed(() => props.maxItems !== null && rows.value.length >= props.maxItems)
const atMin = computed(() => props.minItems !== null && rows.value.length <= props.minItems)

/**
 * One child field means one input per row, and the row drops the repeated
 * label (DESIGN_RULES rule 6): the section heading already names it, and
 * "Instruction" three times above three inputs says nothing the first one
 * didn't. The label stays in the DOM as `sr-only` so the input keeps its
 * accessible name. Two or more children keep their labels - there they
 * disambiguate.
 */
const singleChild = computed(() => props.children.length === 1)

function add() {
    if (atMax.value || props.disabled) {
        return
    }

    const blank: Row = {}

    for (const child of props.children) {
        blank[child.key] = null
    }

    rows.value.push({ uid: nextUid++, data: blank })
}

function remove(uid: number) {
    rows.value = rows.value.filter((r) => r.uid !== uid)
    publish()
}

/**
 * Move a row one place.
 *
 * Order is meaningful here - a repeater is a list, and "primary contact first"
 * is the commonest reason to use one. Buttons rather than drag: a form field
 * inside a scrolling page is a poor drag target, and two arrows work with a
 * keyboard, which a drag does not.
 */
function move(index: number, delta: number) {
    const target = index + delta

    if (target < 0 || target >= rows.value.length) {
        return
    }

    const next = [...rows.value]
    const [moved] = next.splice(index, 1)

    next.splice(target, 0, moved)
    rows.value = next
    publish()
}

function setChild(uid: number, key: string, value: unknown) {
    const row = rows.value.find((r) => r.uid === uid)

    if (!row) {
        return
    }

    row.data[key] = value
    publish()
}

/** Laravel's own path for this child, so its message is found not rebuilt. */
function errorFor(index: number, childKey: string): string | undefined {
    return props.errors[`${props.fieldKey}.${index}.${childKey}`]
}
</script>

<template>
    <!--
        ROWS, NOT CARDS - DESIGN_RULES rule 6. An item is an ordinal badge,
        its input(s) and its controls on one line. The bordered per-item card
        with its own heading and control strip made three short entries taller
        than the rest of the form put together.
    -->
    <div class="flex flex-col gap-2">
        <div v-for="(row, index) in rows" :key="row.uid" class="flex items-start gap-2">
            <span
                class="bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums"
                :class="singleChild ? 'mt-1.5' : 'mt-0.5'"
                aria-hidden="true"
            >
                {{ index + 1 }}
            </span>

            <div class="min-w-0 flex-1">
                <FormFieldControl
                    v-if="singleChild"
                    :field="{
                        ...children[0],
                        disabled: children[0].disabled || disabled,
                        labelHidden: true,
                    }"
                    :value="row.data[children[0].key]"
                    :error="errorFor(index, children[0].key)"
                    :options="childOptions[children[0].key] ?? []"
                    @change="(value) => setChild(row.uid, children[0].key, value)"
                />

                <div v-else class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <FormFieldControl
                        v-for="child in children"
                        :key="child.key"
                        :field="{ ...child, disabled: child.disabled || disabled }"
                        :value="row.data[child.key]"
                        :error="errorFor(index, child.key)"
                        :options="childOptions[child.key] ?? []"
                        @change="(value) => setChild(row.uid, child.key, value)"
                    />
                </div>
            </div>

            <div class="flex shrink-0 items-center gap-0.5" :class="singleChild ? 'mt-1' : 'mt-0'">
                <button
                    type="button"
                    class="text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30"
                    :disabled="disabled || index === 0"
                    :aria-label="`Move ${itemLabel} ${index + 1} up`"
                    @click="move(index, -1)"
                >
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
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                </button>

                <button
                    type="button"
                    class="text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30"
                    :disabled="disabled || index === rows.length - 1"
                    :aria-label="`Move ${itemLabel} ${index + 1} down`"
                    @click="move(index, 1)"
                >
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

                <button
                    type="button"
                    class="text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30"
                    :disabled="disabled || atMin"
                    :title="atMin ? `At least ${minItems} required` : undefined"
                    :aria-label="`Remove ${itemLabel} ${index + 1}`"
                    @click="remove(row.uid)"
                >
                    <svg
                        class="size-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        aria-hidden="true"
                    >
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <p
            v-if="rows.length === 0"
            class="text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
        >
            No {{ itemLabel.toLowerCase() }}s yet.
        </p>

        <!--
            HIDDEN AT THE LIMIT, not disabled, and no "n of max" counter -
            DESIGN_RULES rule 5. A disabled Add next to a live count was two
            controls describing a state instead of offering an action; when
            nothing more can be added, the honest UI is nothing.
        -->
        <button
            v-if="!atMax"
            type="button"
            class="text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50"
            :disabled="disabled"
            @click="add"
        >
            <svg
                class="size-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                aria-hidden="true"
            >
                <path d="M12 5v14M5 12h14" />
            </svg>
            Add {{ itemLabel.toLowerCase() }}
        </button>
    </div>
</template>
