<script setup lang="ts">
/**
 * A sequence of blocks, each with its own shape - roadmap 4.5.
 *
 * WHERE THE REPEATER STOPS. A repeater is many rows of ONE shape; a builder
 * is many rows of DIFFERENT shapes in a chosen order - a heading, then a
 * paragraph, then an image. Doing that with a repeater means one row type
 * carrying every field any block might need, mostly empty, with nothing
 * saying which combination means anything.
 *
 * ORDER IS THE VALUE, so the controls that matter are move-up and move-down,
 * not drag alone: dragging is quick for a mouse and impossible for a keyboard,
 * and a page somebody assembles is exactly the kind of thing that gets
 * rearranged by someone who cannot use one.
 *
 * IT RENDERS ITS BLOCK'S FIELDS THROUGH THE SAME CONTROL EVERY OTHER FIELD
 * USES. A builder that drew its own inputs would be a second form layer that
 * drifts - different validation display, different disabled handling, a
 * field type that works everywhere except inside a block.
 */
import { computed } from 'vue'
import FormFieldControl from './FormFieldControl.vue'
import type { FormField } from './types'

interface Block {
    type: string
    label: string
    fields: FormField[]
}

interface Entry {
    type: string
    data: Record<string, unknown>
}

const props = withDefaults(
    defineProps<{
        modelValue?: Entry[] | null
        blocks?: Block[]
        maxBlocks?: number | null
        disabled?: boolean
        errors?: Record<string, string>
    }>(),
    { modelValue: null, blocks: () => [], maxBlocks: null, disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: Entry[]): void }>()

const entries = computed<Entry[]>(() => props.modelValue ?? [])

const byType = computed<Record<string, Block>>(() =>
    Object.fromEntries(props.blocks.map((b) => [b.type, b])),
)

const full = computed(() => props.maxBlocks !== null && entries.value.length >= props.maxBlocks)

function commit(next: Entry[]) {
    emit('update:modelValue', next)
}

function add(type: string) {
    if (full.value) {
        return
    }

    commit([...entries.value, { type, data: {} }])
}

function remove(index: number) {
    commit(entries.value.filter((_, i) => i !== index))
}

/** One function for both directions: the only difference is the offset. */
function move(index: number, offset: number) {
    const target = index + offset

    if (target < 0 || target >= entries.value.length) {
        return
    }

    const next = [...entries.value]
    const [moved] = next.splice(index, 1)
    next.splice(target, 0, moved)

    commit(next)
}

function setField(index: number, key: string, value: unknown) {
    commit(
        entries.value.map((entry, i) =>
            i === index ? { ...entry, data: { ...entry.data, [key]: value } } : entry,
        ),
    )
}
</script>

<template>
    <div class="space-y-3">
        <div
            v-for="(entry, index) in entries"
            :key="`${entry.type}-${index}`"
            class="bg-card rounded-lg border"
        >
            <div class="flex items-center justify-between gap-2 border-b px-3 py-2">
                <span class="text-sm font-medium">
                    {{ byType[entry.type]?.label ?? entry.type }}
                </span>

                <div class="flex items-center gap-1">
                    <button
                        type="button"
                        class="hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40"
                        :disabled="disabled || index === 0"
                        aria-label="Move up"
                        @click="move(index, -1)"
                    >
                        ↑
                    </button>
                    <button
                        type="button"
                        class="hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40"
                        :disabled="disabled || index === entries.length - 1"
                        aria-label="Move down"
                        @click="move(index, 1)"
                    >
                        ↓
                    </button>
                    <button
                        type="button"
                        class="text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs"
                        :disabled="disabled"
                        aria-label="Remove block"
                        @click="remove(index)"
                    >
                        Remove
                    </button>
                </div>
            </div>

            <div class="space-y-3 p-3">
                <FormFieldControl
                    v-for="field in byType[entry.type]?.fields ?? []"
                    :key="field.key"
                    :field="field"
                    :value="entry.data[field.key] ?? null"
                    :error="errors?.[field.key]"
                    :processing="disabled"
                    @change="(next: unknown) => setField(index, field.key, next)"
                />
            </div>
        </div>

        <!--
            The block menu is buttons, not a select: the set is small and
            named, and "add a heading" should be one press rather than a
            choose-then-confirm.
        -->
        <div class="flex flex-wrap items-center gap-2">
            <button
                v-for="block in blocks"
                :key="block.type"
                type="button"
                class="hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50"
                :disabled="disabled || full"
                @click="add(block.type)"
            >
                + {{ block.label }}
            </button>

            <span v-if="full" class="text-muted-foreground text-xs">
                {{ maxBlocks }} is the maximum here.
            </span>
        </div>
    </div>
</template>
