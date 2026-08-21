<script setup lang="ts">
/**
 * Line-oriented diff for DiffField. No heavy library.
 */
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

interface DiffSchema {
    key: string
    originalKey?: string | null
    modifiedKey?: string | null
    rows?: number
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: DiffSchema
        modelValue: unknown
        disabled?: boolean
        values?: Record<string, unknown>
    }>(),
    { disabled: false, values: () => ({}) },
)

function asText(raw: unknown): string {
    if (raw == null) {
        return ''
    }

    if (typeof raw === 'string') {
        return raw
    }

    if (typeof raw === 'object') {
        try {
            return JSON.stringify(raw, null, 2)
        } catch {
            return String(raw)
        }
    }

    return String(raw)
}

const original = computed(() => {
    if (props.field.originalKey) {
        return asText(props.values?.[props.field.originalKey])
    }

    const bag = props.modelValue as { original?: unknown } | null

    return asText(bag?.original)
})

const modified = computed(() => {
    if (props.field.modifiedKey) {
        return asText(props.values?.[props.field.modifiedKey])
    }

    const bag = props.modelValue as { modified?: unknown } | null

    return asText(bag?.modified)
})

type DiffLine = { kind: 'same' | 'add' | 'del'; text: string }

const lines = computed((): DiffLine[] => {
    const a = original.value.split('\n')
    const b = modified.value.split('\n')
    const max = Math.max(a.length, b.length)
    const out: DiffLine[] = []

    for (let i = 0; i < max; i++) {
        const left = a[i]
        const right = b[i]

        if (left === right) {
            if (left !== undefined) {
                out.push({ kind: 'same', text: left })
            }

            continue
        }

        if (left !== undefined) {
            out.push({ kind: 'del', text: left })
        }

        if (right !== undefined) {
            out.push({ kind: 'add', text: right })
        }
    }

    return out
})
</script>

<template>
    <div
        class="border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5"
        :style="{ maxHeight: `${(field.rows ?? 12) * 1.25}rem` }"
    >
        <div
            v-for="(line, index) in lines"
            :key="index"
            class="px-2 whitespace-pre-wrap"
            :class="{
                'bg-destructive/10 text-destructive': line.kind === 'del',
                'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300': line.kind === 'add',
                'text-muted-foreground': line.kind === 'same',
            }"
        >
            <span class="mr-2 inline-block w-3 opacity-60">{{
                line.kind === 'add' ? '+' : line.kind === 'del' ? '-' : ' '
            }}</span>
            {{ line.text }}
        </div>
        <p v-if="lines.length === 0" class="text-muted-foreground p-3">No differences.</p>
    </div>
</template>
