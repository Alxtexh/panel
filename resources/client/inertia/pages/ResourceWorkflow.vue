<script setup lang="ts">
/**
 * Workflow board with an inline form editor for states and transitions.
 *
 * When the user has update permission, the page shows editable fields for
 * state labels/colors and transition sources/targets, plus a Save button
 * that PUTs to the server. The diagram section stays read-only and refreshes
 * after save via Inertia reload.
 *
 * Drag-to-edit is not shipped in this slice. The form editor is the
 * persistence surface; the diagram visualises the result.
 */
import { Head, Link, router } from '@inertiajs/vue3'
import { computed, ref } from 'vue'
import {
    PAGE_SHELL,
    PkEmptyState,
    PkPageHeader,
    PkAlertError,
    buttonClasses,
} from '@alxtexh-enterprise/panel'

interface GraphNode {
    id: string
    label: string
    color: string
    rank: number
}

interface GraphEdge {
    id: string
    key: string
    label: string
    from: string
    to: string
    icon?: string | null
    color?: string | null
}

interface StateEntry {
    label: string
    color: string
}

interface TransitionEntry {
    key: string
    label: string
    to: string
    from: string[]
    ability: string
    icon: string | null
    color: string | null
    confirm: string | null
}

const props = defineProps<{
    schema: {
        key: string
        label: string
        labelPlural: string
    }
    workflow: {
        column: string
        group: string
        states: Record<string, StateEntry>
        transitions: Array<Record<string, unknown>>
    }
    graph: {
        nodes: GraphNode[]
        edges: GraphEdge[]
    }
    indexUrl: string
    canEdit?: boolean
    saveUrl?: string
    breadcrumbs?: { title: string; href?: string | null }[]
}>()

const COLOR_OPTIONS = [
    { value: 'neutral', label: 'Neutral' },
    { value: 'primary', label: 'Primary' },
    { value: 'info', label: 'Info' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'danger', label: 'Danger' },
]

const editing = ref(false)

function buildStates(): Array<{ key: string; label: string; color: string }> {
    return Object.entries(props.workflow.states).map(([key, s]) => ({
        key,
        label: s.label,
        color: s.color,
    }))
}

function buildTransitions(): TransitionEntry[] {
    return (props.workflow.transitions ?? []).map((t: Record<string, unknown>) => ({
        key: (t.key as string) ?? '',
        label: (t.label as string) ?? '',
        to: (t.to as string) ?? '',
        from: (t.from as string[]) ?? [],
        ability: (t.ability as string) ?? 'update',
        icon: (t.icon as string | null) ?? null,
        color: (t.color as string | null) ?? null,
        confirm: (t.confirm as string | null) ?? null,
    }))
}

const editStates = ref(buildStates())
const editTransitions = ref(buildTransitions())
const editGroupLabel = ref(props.workflow.group ?? 'Status')
const saving = ref(false)
const saveError = ref('')

function startEditing() {
    editStates.value = buildStates()
    editTransitions.value = buildTransitions()
    editGroupLabel.value = props.workflow.group ?? 'Status'
    editing.value = true
    saveError.value = ''
}

function cancelEditing() {
    editing.value = false
    saveError.value = ''
}

function addState() {
    const id = `state_${Date.now()}`
    editStates.value.push({ key: id, label: '', color: 'neutral' })
}

function removeState(index: number) {
    const removed = editStates.value[index]
    editStates.value.splice(index, 1)
    if (removed) {
        for (const t of editTransitions.value) {
            t.from = t.from.filter((f) => f !== removed.key)
            if (t.to === removed.key) t.to = ''
        }
    }
}

function addTransition() {
    editTransitions.value.push({
        key: `t_${Date.now()}`,
        label: '',
        to: '',
        from: [],
        ability: 'update',
        icon: null,
        color: null,
        confirm: null,
    })
}

function removeTransition(index: number) {
    editTransitions.value.splice(index, 1)
}

function toggleFrom(tIdx: number, stateKey: string) {
    const t = editTransitions.value[tIdx]
    const idx = t.from.indexOf(stateKey)
    if (idx >= 0) {
        t.from.splice(idx, 1)
    } else {
        t.from.push(stateKey)
    }
}

function save() {
    if (!props.saveUrl) return

    saving.value = true
    saveError.value = ''

    const statesPayload: Record<string, { label: string; color: string }> = {}
    for (const s of editStates.value) {
        if (!s.key || !s.label) continue
        statesPayload[s.key] = { label: s.label, color: s.color }
    }

    const transitionsPayload = editTransitions.value
        .filter((t) => t.key && t.label && t.to)
        .map((t) => ({
            key: t.key,
            label: t.label,
            to: t.to,
            from: t.from,
            ability: t.ability || 'update',
            icon: t.icon || null,
            color: t.color || null,
            confirm: t.confirm || null,
        }))

    router.put(
        props.saveUrl,
        {
            group_label: editGroupLabel.value,
            states: statesPayload,
            transitions: transitionsPayload,
        },
        {
            preserveScroll: true,
            onSuccess: () => {
                saving.value = false
                editing.value = false
            },
            onError: (errors) => {
                saving.value = false
                const msgs = Object.values(errors).flat()
                saveError.value = msgs.join(' ')
            },
        },
    )
}

const ranks = computed(() => {
    const map = new Map<number, GraphNode[]>()

    for (const node of props.graph.nodes) {
        const list = map.get(node.rank) ?? []
        list.push(node)
        map.set(node.rank, list)
    }

    return [...map.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([rank, nodes]) => ({ rank, nodes }))
})

const outgoing = computed(() => {
    const map = new Map<string, GraphEdge[]>()

    for (const edge of props.graph.edges) {
        const list = map.get(edge.from) ?? []
        list.push(edge)
        map.set(edge.from, list)
    }

    return map
})

const purpose = computed(
    () =>
        `${props.graph.nodes.length} states, ${props.graph.edges.length} transitions on ${props.workflow.column}`,
)

function colorClass(color: string): string {
    const map: Record<string, string> = {
        success: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100',
        warning: 'border-amber-500/50 bg-amber-500/10 text-amber-950 dark:text-amber-100',
        danger: 'border-red-500/50 bg-red-500/10 text-red-950 dark:text-red-100',
        destructive: 'border-red-500/50 bg-red-500/10 text-red-950 dark:text-red-100',
        info: 'border-sky-500/50 bg-sky-500/10 text-sky-950 dark:text-sky-100',
        primary: 'border-primary/40 bg-primary/10 text-foreground',
        neutral: 'border-border bg-card text-foreground',
    }

    return map[color] ?? map.neutral
}

</script>

<template>
    <Head :title="`${schema.labelPlural} workflow`" />

    <div :class="[PAGE_SHELL, 'flex min-h-0 flex-1 flex-col gap-4']">
        <PkPageHeader :title="`${schema.labelPlural} workflow`" :purpose="purpose">
            <template #actions>
                <button
                    v-if="canEdit && !editing"
                    :class="buttonClasses()"
                    type="button"
                    @click="startEditing"
                >
                    Edit workflow
                </button>
                <Link :href="indexUrl" :class="buttonClasses({ variant: 'outline' })">
                    Table view
                </Link>
            </template>
        </PkPageHeader>

        <!-- Editor panel -->
        <div v-if="editing" class="bg-card border-border rounded-lg border p-4 shadow-sm">
            <h3 class="mb-3 text-sm font-semibold">Edit workflow definition</h3>
            <p class="text-muted-foreground mb-4 text-xs">
                Edit states and transitions below, then save. The diagram will reload
                with your changes. Column and model stay fixed from the PHP definition.
            </p>

            <PkAlertError v-if="saveError" class="mb-4">{{ saveError }}</PkAlertError>

            <!-- Group label -->
            <div class="mb-4">
                <label class="text-foreground mb-1 block text-xs font-medium">Group label</label>
                <input
                    v-model="editGroupLabel"
                    type="text"
                    class="border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring h-8 w-full max-w-xs rounded-md border px-2 text-sm focus:ring-1 focus:outline-none"
                    placeholder="Status"
                />
            </div>

            <!-- States -->
            <div class="mb-4">
                <div class="mb-2 flex items-center justify-between">
                    <h4 class="text-xs font-semibold">States</h4>
                    <button
                        type="button"
                        class="text-primary text-xs font-medium hover:underline"
                        @click="addState"
                    >
                        + Add state
                    </button>
                </div>

                <div class="space-y-2">
                    <div
                        v-for="(state, sIdx) in editStates"
                        :key="sIdx"
                        class="bg-muted/30 flex items-center gap-2 rounded-md border p-2"
                    >
                        <div class="flex-1">
                            <label class="text-muted-foreground mb-0.5 block text-[10px]">Key</label>
                            <input
                                v-model="state.key"
                                type="text"
                                class="border-input bg-background text-foreground h-7 w-full rounded border px-1.5 font-mono text-xs focus:ring-1 focus:outline-none"
                                placeholder="e.g. draft"
                            />
                        </div>
                        <div class="flex-1">
                            <label class="text-muted-foreground mb-0.5 block text-[10px]">Label</label>
                            <input
                                v-model="state.label"
                                type="text"
                                class="border-input bg-background text-foreground h-7 w-full rounded border px-1.5 text-xs focus:ring-1 focus:outline-none"
                                placeholder="e.g. Draft"
                            />
                        </div>
                        <div class="w-28 shrink-0">
                            <label class="text-muted-foreground mb-0.5 block text-[10px]">Color</label>
                            <select
                                v-model="state.color"
                                class="border-input bg-background text-foreground h-7 w-full rounded border px-1 text-xs focus:ring-1 focus:outline-none"
                            >
                                <option
                                    v-for="opt in COLOR_OPTIONS"
                                    :key="opt.value"
                                    :value="opt.value"
                                >
                                    {{ opt.label }}
                                </option>
                            </select>
                        </div>
                        <button
                            type="button"
                            class="text-muted-foreground hover:text-destructive mt-3 shrink-0 text-xs"
                            title="Remove state"
                            @click="removeState(sIdx)"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            </div>

            <!-- Transitions -->
            <div class="mb-4">
                <div class="mb-2 flex items-center justify-between">
                    <h4 class="text-xs font-semibold">Transitions</h4>
                    <button
                        type="button"
                        class="text-primary text-xs font-medium hover:underline"
                        @click="addTransition"
                    >
                        + Add transition
                    </button>
                </div>

                <div class="space-y-2">
                    <div
                        v-for="(t, tIdx) in editTransitions"
                        :key="tIdx"
                        class="bg-muted/30 rounded-md border p-2"
                    >
                        <div class="flex gap-2">
                            <div class="flex-1">
                                <label class="text-muted-foreground mb-0.5 block text-[10px]">Key</label>
                                <input
                                    v-model="t.key"
                                    type="text"
                                    class="border-input bg-background text-foreground h-7 w-full rounded border px-1.5 font-mono text-xs focus:ring-1 focus:outline-none"
                                    placeholder="e.g. publish"
                                />
                            </div>
                            <div class="flex-1">
                                <label class="text-muted-foreground mb-0.5 block text-[10px]">Label</label>
                                <input
                                    v-model="t.label"
                                    type="text"
                                    class="border-input bg-background text-foreground h-7 w-full rounded border px-1.5 text-xs focus:ring-1 focus:outline-none"
                                    placeholder="e.g. Publish"
                                />
                            </div>
                            <div class="w-32 shrink-0">
                                <label class="text-muted-foreground mb-0.5 block text-[10px]">Target state</label>
                                <select
                                    v-model="t.to"
                                    class="border-input bg-background text-foreground h-7 w-full rounded border px-1 text-xs focus:ring-1 focus:outline-none"
                                >
                                    <option value="">-- select --</option>
                                    <option
                                        v-for="s in editStates"
                                        :key="s.key"
                                        :value="s.key"
                                    >
                                        {{ s.label || s.key }}
                                    </option>
                                </select>
                            </div>
                            <button
                                type="button"
                                class="text-muted-foreground hover:text-destructive mt-3 shrink-0 text-xs"
                                title="Remove transition"
                                @click="removeTransition(tIdx)"
                            >
                                &times;
                            </button>
                        </div>

                        <div class="mt-2">
                            <label class="text-muted-foreground mb-1 block text-[10px]">
                                Source states (check which states this transition applies from)
                            </label>
                            <div class="flex flex-wrap gap-2">
                                <label
                                    v-for="s in editStates"
                                    :key="s.key"
                                    class="flex items-center gap-1 text-xs"
                                >
                                    <input
                                        type="checkbox"
                                        :checked="t.from.includes(s.key)"
                                        class="accent-primary h-3 w-3 rounded"
                                        @change="toggleFrom(tIdx, s.key)"
                                    />
                                    {{ s.label || s.key }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-2 border-t pt-3">
                <button
                    :class="buttonClasses()"
                    type="button"
                    :disabled="saving"
                    @click="save"
                >
                    {{ saving ? 'Saving...' : 'Save workflow' }}
                </button>
                <button
                    :class="buttonClasses({ variant: 'outline' })"
                    type="button"
                    :disabled="saving"
                    @click="cancelEditing"
                >
                    Cancel
                </button>
            </div>
        </div>

        <!-- Info text -->
        <p v-if="!editing" class="text-muted-foreground text-sm font-normal">
            <template v-if="canEdit">
                Click "Edit workflow" to add, remove, or rename states and transitions.
                Changes persist to the database and override the PHP default.
            </template>
            <template v-else>
                Read-only diagram of the workflow definition. You need update permission to
                edit states and transitions.
            </template>
        </p>

        <PkEmptyState
            v-if="graph.nodes.length === 0 && !editing"
            title="No states declared"
            description="Add states() on the resource workflow to populate this board."
            icon="git-branch"
        >
            <template #actions>
                <Link :href="indexUrl" :class="buttonClasses()">Open table</Link>
            </template>
        </PkEmptyState>

        <div v-else-if="!editing" class="flex min-h-0 flex-1 gap-4 overflow-x-auto pb-2">
            <section
                v-for="column in ranks"
                :key="column.rank"
                class="bg-muted/20 border-border flex w-64 shrink-0 flex-col gap-3 rounded-lg border p-3"
            >
                <header class="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                    Step {{ column.rank + 1 }}
                </header>

                <article
                    v-for="node in column.nodes"
                    :key="node.id"
                    class="rounded-md border p-3 shadow-sm"
                    :class="colorClass(node.color)"
                >
                    <h2 class="text-sm font-medium">{{ node.label }}</h2>
                    <p class="text-muted-foreground mt-0.5 font-mono text-[11px]">{{ node.id }}</p>

                    <ul
                        v-if="(outgoing.get(node.id) ?? []).length > 0"
                        class="mt-3 flex flex-col gap-1.5 border-t border-current/10 pt-2"
                    >
                        <li
                            v-for="edge in outgoing.get(node.id) ?? []"
                            :key="edge.id"
                            class="text-xs leading-snug"
                        >
                            <span class="font-medium">{{ edge.label }}</span>
                            <span class="opacity-70"> > </span>
                            <span>{{ workflow.states[edge.to]?.label ?? edge.to }}</span>
                        </li>
                    </ul>

                    <p v-else class="text-muted-foreground mt-3 text-xs">Terminal state</p>
                </article>
            </section>
        </div>
    </div>
</template>
