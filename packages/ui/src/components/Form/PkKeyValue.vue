<script setup lang="ts">
/**
 * Arbitrary labelled values - the control for `KeyValueField`.
 *
 * STORED AS AN OBJECT, EDITED AS A LIST, and that split is the whole design.
 *
 * An object cannot represent "a row somebody has started but not named yet":
 * there is no such thing as a key that is not there. Worse, it silently loses
 * duplicates - rename one key to match another mid-edit and one of the two
 * simply vanishes, taking its value with it. So the component's own state is an
 * ORDERED LIST of pairs, and the object is produced only on the way out.
 *
 * DUPLICATES ARE SHOWN, NOT SWALLOWED. Collapsing to an object is lossy by
 * definition, so when two rows share a key the control says so and marks both.
 * The alternative - dropping one quietly - is the exact silent-success failure
 * the antipatterns document is about: the form saves, returns 200, and the
 * operator finds out later that a value they typed was never stored.
 *
 * THE KEY CHARSET IS ENFORCED SERVER-SIDE and mirrored here as a hint only. A
 * key travels into JSON paths, input names and `data-*` attributes, so dots and
 * brackets would read as path syntax somewhere downstream. The client showing
 * the rule early is a courtesy; the server refusing it is the guarantee.
 */
import { computed, ref, watch } from 'vue'

interface Pair {
    /** Stable across re-renders so an input does not lose focus mid-word. */
    uid: number
    key: string
    value: string
}

const props = withDefaults(
    defineProps<{
        modelValue: Record<string, string> | null
        keyLabel?: string
        valueLabel?: string
        maxPairs?: number | null
        disabled?: boolean
    }>(),
    { keyLabel: 'Key', valueLabel: 'Value', maxPairs: null, disabled: false },
)

const emit = defineEmits<{
    (e: 'update:modelValue', value: Record<string, string> | null): void
}>()

const KEY_PATTERN = /^[A-Za-z0-9_-]{1,64}$/

let nextUid = 0

const pairs = ref<Pair[]>(fromObject(props.modelValue))

function fromObject(source: Record<string, string> | null): Pair[] {
    if (!source) {
        return []
    }

    return Object.entries(source).map(([key, value]) => ({
        uid: nextUid++,
        key,
        value: value ?? '',
    }))
}

/**
 * Re-seed only when the incoming object is genuinely different from what this
 * control last emitted.
 *
 * Without the comparison, every emit round-trips back through the prop and
 * rebuilds the list with new uids - which destroys and recreates every input,
 * so the field loses focus after each keystroke. With it, an external reset
 * (a form Discard) still refills the rows.
 */
watch(
    () => props.modelValue,
    (incoming) => {
        if (JSON.stringify(incoming ?? null) === JSON.stringify(toObject())) {
            return
        }

        pairs.value = fromObject(incoming)
    },
)

function toObject(): Record<string, string> | null {
    const out: Record<string, string> = {}

    for (const pair of pairs.value) {
        const key = pair.key.trim()

        // A pair with no key is a row started and abandoned, not an error.
        if (key === '') {
            continue
        }

        out[key] = pair.value
    }

    return Object.keys(out).length ? out : null
}

function publish() {
    emit('update:modelValue', toObject())
}

/** Keys typed more than once. Both rows are marked, not just the later one. */
const duplicates = computed(() => {
    const seen = new Map<string, number>()

    for (const pair of pairs.value) {
        const key = pair.key.trim()

        if (key === '') {
            continue
        }

        seen.set(key, (seen.get(key) ?? 0) + 1)
    }

    return new Set([...seen.entries()].filter(([, n]) => n > 1).map(([key]) => key))
})

const invalidKeys = computed(
    () =>
        new Set(
            pairs.value
                .map((p) => p.key.trim())
                .filter((key) => key !== '' && !KEY_PATTERN.test(key)),
        ),
)

const atLimit = computed(() => props.maxPairs !== null && pairs.value.length >= props.maxPairs)

function add() {
    if (atLimit.value || props.disabled) {
        return
    }

    pairs.value.push({ uid: nextUid++, key: '', value: '' })
    // Deliberately no publish: an empty row changes nothing about the value,
    // and emitting here would mark a pristine form dirty for adding a blank.
}

function remove(uid: number) {
    pairs.value = pairs.value.filter((p) => p.uid !== uid)
    publish()
}
</script>

<template>
    <div class="flex flex-col gap-2">
        <div v-if="pairs.length" class="flex flex-col gap-1.5">
            <div class="text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs">
                <span>{{ keyLabel }}</span>
                <span>{{ valueLabel }}</span>
                <span class="w-7" />
            </div>

            <div
                v-for="pair in pairs"
                :key="pair.uid"
                class="grid grid-cols-[1fr_1fr_auto] items-start gap-2"
            >
                <div class="flex flex-col gap-1">
                    <input
                        v-model="pair.key"
                        type="text"
                        class="border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                        :class="
                            duplicates.has(pair.key.trim()) || invalidKeys.has(pair.key.trim())
                                ? 'border-destructive'
                                : ''
                        "
                        :disabled="disabled"
                        :aria-label="keyLabel"
                        @input="publish"
                    />

                    <p
                        v-if="invalidKeys.has(pair.key.trim())"
                        class="text-destructive text-xs"
                        role="alert"
                    >
                        Letters, numbers, underscores and dashes only.
                    </p>
                    <p
                        v-else-if="duplicates.has(pair.key.trim())"
                        class="text-destructive text-xs"
                        role="alert"
                    >
                        Used twice - only the last value will be saved.
                    </p>
                </div>

                <input
                    v-model="pair.value"
                    type="text"
                    class="border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                    :disabled="disabled"
                    :aria-label="valueLabel"
                    @input="publish"
                />

                <button
                    type="button"
                    class="text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40"
                    :disabled="disabled"
                    :aria-label="`Remove ${pair.key || 'this entry'}`"
                    @click="remove(pair.uid)"
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
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <p v-else class="text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs">
            Nothing here yet.
        </p>

        <div class="flex items-center gap-3">
            <button
                type="button"
                class="text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50"
                :disabled="disabled || atLimit"
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
                Add {{ keyLabel.toLowerCase() }}
            </button>

            <p v-if="maxPairs !== null" class="text-muted-foreground text-xs font-normal tabular-nums">
                {{ pairs.length }} of {{ maxPairs }}
            </p>
        </div>
    </div>
</template>
