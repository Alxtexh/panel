<script setup lang="ts">
/**
 * Renders one node of a form schema tree, recursing into its children.
 *
 * The tree is a mix of layout components and fields, discriminated by
 * `component`. Recursion is what lets a Section hold a Grid hold a Field, at any
 * depth, without the renderer knowing the shapes in advance.
 *
 * Layout carries only SEMANTIC values — `columns: 2`, `collapsible: true` — and
 * this file decides what those look like. PHP never emits a class (antipatterns
 * §6.1).
 */
import { computed, ref } from 'vue'
import FormFieldControl from './FormFieldControl.vue'
import type { FormField } from './types'

export interface SchemaNode {
    component: 'field' | 'section' | 'grid' | 'tabs' | 'tab'
    children?: SchemaNode[]
    label?: string
    description?: string
    columns?: number
    collapsible?: boolean
    collapsed?: boolean
    icon?: string | null
    [key: string]: any
}

const props = withDefaults(
    defineProps<{
        node: SchemaNode
        values: Record<string, any>
        errors?: Record<string, string>
        options?: Record<string, { value: any; label: string }[]>
        processing?: boolean
    }>(),
    { errors: () => ({}), options: () => ({}), processing: false },
)

const emit = defineEmits<{ (e: 'change', key: string, value: unknown): void }>()

const open = ref(!props.node.collapsed)

const activeTab = ref(0)

const gridClass = computed(() => {
    const columns = props.node.columns ?? 1

    return columns >= 3 ? 'sm:grid-cols-3' : columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'
})

/**
 * Whether a tab contains a field with an error.
 *
 * Without this, submitting an invalid form can highlight nothing at all: the
 * offending field sits behind an inactive tab, the user sees a rejected save and
 * no reason for it. The dot is the only cue that the problem is elsewhere.
 */
function tabHasError(tab: SchemaNode): boolean {
    const keys: string[] = []

    const walk = (node: SchemaNode) => {
        if (node.component === 'field' && node.key) keys.push(node.key)
        node.children?.forEach(walk)
    }

    walk(tab)

    return keys.some((key) => props.errors[key])
}
</script>

<template>
    <!-- Field: a leaf. -->
    <FormFieldControl
        v-if="node.component === 'field'"
        :field="node as unknown as FormField"
        :value="values[node.key]"
        :error="errors[node.key]"
        :options="options[node.key]"
        :processing="processing"
        @change="(value: unknown) => emit('change', node.key, value)"
    />

    <!-- Section: a titled, optionally collapsible group. -->
    <section v-else-if="node.component === 'section'" class="bg-card rounded-lg border">
        <header
            class="flex items-start justify-between gap-3 px-4 py-3"
            :class="node.collapsible ? 'cursor-pointer select-none' : ''"
            @click="node.collapsible && (open = !open)"
        >
            <div>
                <h3 class="text-sm font-semibold">{{ node.label }}</h3>
                <p v-if="node.description" class="text-muted-foreground mt-0.5 text-xs">{{ node.description }}</p>
            </div>

            <svg
                v-if="node.collapsible"
                viewBox="0 0 24 24"
                class="text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform"
                :class="open ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
            >
                <path d="m6 9 6 6 6-6" />
            </svg>
        </header>

        <div v-if="open" class="grid grid-cols-1 gap-4 border-t px-4 py-4" :class="gridClass">
            <SchemaNode
                v-for="(child, i) in node.children ?? []"
                :key="i"
                :node="child"
                :values="values"
                :errors="errors"
                :options="options"
                :processing="processing"
                :class="child.span && child.span >= 2 ? 'sm:col-span-2' : ''"
                @change="(key, value) => emit('change', key, value)"
            />
        </div>
    </section>

    <!-- Grid: layout with no heading. -->
    <div v-else-if="node.component === 'grid'" class="grid grid-cols-1 gap-4" :class="gridClass">
        <SchemaNode
            v-for="(child, i) in node.children ?? []"
            :key="i"
            :node="child"
            :values="values"
            :errors="errors"
            :options="options"
            :processing="processing"
            @change="(key, value) => emit('change', key, value)"
        />
    </div>

    <!-- Tabs. -->
    <div v-else-if="node.component === 'tabs'" class="bg-card overflow-hidden rounded-lg border">
        <div class="bg-muted/30 flex gap-1 overflow-x-auto border-b p-1">
            <button
                v-for="(tab, i) in node.children ?? []"
                :key="i"
                type="button"
                class="flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors"
                :class="
                    activeTab === i
                        ? 'bg-background text-foreground font-medium shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                "
                @click="activeTab = i"
            >
                {{ tab.label }}
                <!-- An error behind an inactive tab is otherwise invisible. -->
                <span v-if="tabHasError(tab)" class="bg-destructive size-1.5 rounded-full" aria-label="has errors" />
            </button>
        </div>

        <!--
            Every tab stays MOUNTED, hidden with v-show rather than v-if.

            v-if would destroy the inputs in inactive tabs, so switching tabs
            would discard anything typed in them — and a field with a validation
            error would unmount before the user could see it.
        -->
        <div
            v-for="(tab, i) in node.children ?? []"
            v-show="activeTab === i"
            :key="i"
            class="flex flex-col gap-4 p-4"
        >
            <SchemaNode
                v-for="(child, j) in tab.children ?? []"
                :key="j"
                :node="child"
                :values="values"
                :errors="errors"
                :options="options"
                :processing="processing"
                @change="(key, value) => emit('change', key, value)"
            />
        </div>
    </div>
</template>
