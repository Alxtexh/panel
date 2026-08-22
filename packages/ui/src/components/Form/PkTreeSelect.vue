<script setup lang="ts">
/**
 * Nested options for TreeSelectField.
 */
import { computed, ref } from 'vue'
import { FOCUS_RING } from '../../lib/focusRing'

defineOptions({ inheritAttrs: false })

interface TreeNode {
    value: string | number
    label: string
    children?: TreeNode[]
}

interface TreeSchema {
    key: string
    options?: TreeNode[]
    searchable?: boolean
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: TreeSchema
        modelValue: unknown
        disabled?: boolean
    }>(),
    { disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

const query = ref('')
const open = ref(false)

const options = computed(() => props.field.options ?? [])

function matches(node: TreeNode, term: string): boolean {
    if (!term) {
        return true
    }

    if (node.label.toLowerCase().includes(term)) {
        return true
    }

    return (node.children ?? []).some((child) => matches(child, term))
}

const filtered = computed(() => {
    const term = query.value.trim().toLowerCase()

    if (!term) {
        return options.value
    }

    return options.value.filter((node) => matches(node, term))
})

const selectedLabel = computed(() => {
    const walk = (nodes: TreeNode[]): string | null => {
        for (const node of nodes) {
            if (node.value === props.modelValue) {
                return node.label
            }

            const nested = walk(node.children ?? [])

            if (nested) {
                return nested
            }
        }

        return null
    }

    return walk(options.value)
})

function pick(value: string | number) {
    if (props.disabled) {
        return
    }

    emit('update:modelValue', value)
    open.value = false
}
</script>

<template>
    <div class="relative" data-test="tree-select-field">
        <button
            type="button"
            class="border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50"
            :class="FOCUS_RING"
            :disabled="disabled"
            @click="open = !open"
        >
            <span :class="selectedLabel ? '' : 'text-muted-foreground'">
                {{ selectedLabel ?? 'Select…' }}
            </span>
            <span class="text-muted-foreground text-xs font-normal">▾</span>
        </button>

        <div
            v-if="open"
            class="bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
        >
            <input
                v-if="field.searchable"
                v-model="query"
                type="search"
                class="border-input mb-1 h-8 w-full rounded border px-2 text-sm"
                placeholder="Search…"
            />
            <template v-for="node in filtered" :key="String(node.value)">
                <button
                    type="button"
                    class="hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium"
                    :class="modelValue === node.value ? 'bg-accent' : ''"
                    @click="pick(node.value)"
                >
                    {{ node.label }}
                </button>
                <button
                    v-for="child in node.children ?? []"
                    :key="String(child.value)"
                    type="button"
                    class="hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm"
                    :class="modelValue === child.value ? 'bg-accent text-foreground' : ''"
                    @click="pick(child.value)"
                >
                    {{ child.label }}
                </button>
            </template>
        </div>
    </div>
</template>
