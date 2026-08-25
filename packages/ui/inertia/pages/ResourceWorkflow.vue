<script setup lang="ts">
/**
 * Workflow board with form editor and persistent node repositioning.
 *
 * States and transitions are still edited via the form panel. Nodes on the
 * canvas can be dragged when the user has update permission; positions PUT to
 * the same workflow endpoint and land in panel_workflow_overrides.positions.
 *
 * Edge create/reconnect by drag is not shipped: transitions stay form-based.
 */
import { Head, Link, router } from '@inertiajs/vue3'
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
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

interface NodePosition {
    x: number
    y: number
}

const NODE_WIDTH = 200
const NODE_HEIGHT = 96
const RANK_GAP_X = 260
const RANK_GAP_Y = 140

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
    /** Persisted canvas layout keyed by state id. Empty means auto-layout. */
    positions?: Record<string, NodePosition>
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

function defaultPositions(): Record<string, NodePosition> {
    const byRank = new Map<number, GraphNode[]>()

    for (const node of props.graph.nodes) {
        const list = byRank.get(node.rank) ?? []
        list.push(node)
        byRank.set(node.rank, list)
    }

    const next: Record<string, NodePosition> = {}

    for (const [rank, nodes] of [...byRank.entries()].sort((a, b) => a[0] - b[0])) {
        nodes.forEach((node, index) => {
            next[node.id] = {
                x: 24 + rank * RANK_GAP_X,
                y: 24 + index * RANK_GAP_Y,
            }
        })
    }

    return next
}

function seedPositions(): Record<string, NodePosition> {
    const defaults = defaultPositions()
    const saved = props.positions ?? {}
    const merged: Record<string, NodePosition> = { ...defaults }

    for (const node of props.graph.nodes) {
        const point = saved[node.id]
        if (point && Number.isFinite(point.x) && Number.isFinite(point.y)) {
            merged[node.id] = { x: point.x, y: point.y }
        }
    }

    return merged
}

const editStates = ref(buildStates())
const editTransitions = ref(buildTransitions())
const editGroupLabel = ref(props.workflow.group ?? 'Status')
const saving = ref(false)
const saveError = ref('')
const layoutDirty = ref(false)
const nodePositions = reactive<Record<string, NodePosition>>(seedPositions())

watch(
    () => [props.graph.nodes, props.positions] as const,
    () => {
        const seeded = seedPositions()
        for (const key of Object.keys(nodePositions)) {
            if (!(key in seeded)) delete nodePositions[key]
        }
        Object.assign(nodePositions, seeded)
        layoutDirty.value = false
    },
    { deep: true },
)

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
        delete nodePositions[removed.key]
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

function currentStatesPayload(): Record<string, { label: string; color: string }> {
    if (editing.value) {
        const statesPayload: Record<string, { label: string; color: string }> = {}
        for (const s of editStates.value) {
            if (!s.key || !s.label) continue
            statesPayload[s.key] = { label: s.label, color: s.color }
        }
        return statesPayload
    }

    return Object.fromEntries(
        Object.entries(props.workflow.states).map(([key, s]) => [key, { label: s.label, color: s.color }]),
    )
}

function currentTransitionsPayload() {
    if (editing.value) {
        return editTransitions.value
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
    }

    return (props.workflow.transitions ?? []).map((t: Record<string, unknown>) => ({
        key: (t.key as string) ?? '',
        label: (t.label as string) ?? '',
        to: (t.to as string) ?? '',
        from: (t.from as string[]) ?? [],
        ability: ((t.ability as string) ?? 'update') || 'update',
        icon: (t.icon as string | null) ?? null,
        color: (t.color as string | null) ?? null,
        confirm: (t.confirm as string | null) ?? null,
    }))
}

function positionsPayload(): Record<string, NodePosition> {
    const states = currentStatesPayload()
    const out: Record<string, NodePosition> = {}

    for (const key of Object.keys(states)) {
        const point = nodePositions[key]
        if (point) {
            out[key] = { x: Math.round(point.x), y: Math.round(point.y) }
        }
    }

    return out
}

function putWorkflow(closeEditor: boolean) {
    if (!props.saveUrl) return

    saving.value = true
    saveError.value = ''

    router.put(
        props.saveUrl,
        {
            group_label: editing.value ? editGroupLabel.value : (props.workflow.group ?? 'Status'),
            states: currentStatesPayload(),
            transitions: currentTransitionsPayload(),
            positions: positionsPayload(),
        },
        {
            preserveScroll: true,
            onSuccess: () => {
                saving.value = false
                layoutDirty.value = false
                if (closeEditor) editing.value = false
            },
            onError: (errors) => {
                saving.value = false
                const msgs = Object.values(errors).flat()
                saveError.value = msgs.join(' ')
            },
        },
    )
}

function save() {
    putWorkflow(true)
}

function saveLayout() {
    putWorkflow(false)
}

const drag = ref<{
    id: string
    startX: number
    startY: number
    originX: number
    originY: number
} | null>(null)

function onPointerDown(event: PointerEvent, id: string) {
    if (!props.canEdit || editing.value) return
    if (event.button !== 0) return

    const point = nodePositions[id] ?? { x: 0, y: 0 }
    const target = event.currentTarget as HTMLElement

    try {
        target.setPointerCapture?.(event.pointerId)
    } catch {
        // jsdom and some browsers refuse capture; drag still works via move.
    }

    drag.value = {
        id,
        startX: event.clientX,
        startY: event.clientY,
        originX: point.x,
        originY: point.y,
    }
}

function onPointerMove(event: PointerEvent) {
    if (!drag.value) return

    const nextX = Math.max(0, drag.value.originX + (event.clientX - drag.value.startX))
    const nextY = Math.max(0, drag.value.originY + (event.clientY - drag.value.startY))
    nodePositions[drag.value.id] = { x: nextX, y: nextY }
    layoutDirty.value = true
}

function onPointerUp(event: PointerEvent) {
    if (!drag.value) return
    const target = event.currentTarget as HTMLElement

    try {
        if (target.hasPointerCapture?.(event.pointerId)) {
            target.releasePointerCapture(event.pointerId)
        }
    } catch {
        // ignore
    }

    drag.value = null
}

onBeforeUnmount(() => {
    drag.value = null
})

const canvasSize = computed(() => {
    let maxX = 480
    let maxY = 280

    for (const point of Object.values(nodePositions)) {
        maxX = Math.max(maxX, point.x + NODE_WIDTH + 48)
        maxY = Math.max(maxY, point.y + NODE_HEIGHT + 48)
    }

    return { width: maxX, height: maxY }
})

const edgePaths = computed(() => {
    return props.graph.edges.map((edge) => {
        const from = nodePositions[edge.from] ?? { x: 0, y: 0 }
        const to = nodePositions[edge.to] ?? { x: 0, y: 0 }
        const x1 = from.x + NODE_WIDTH
        const y1 = from.y + NODE_HEIGHT / 2
        const x2 = to.x
        const y2 = to.y + NODE_HEIGHT / 2
        const mid = (x1 + x2) / 2

        return {
            ...edge,
            d: `M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`,
            labelX: mid,
            labelY: (y1 + y2) / 2 - 8,
        }
    })
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
                    v-if="canEdit && layoutDirty && !editing"
                    :class="buttonClasses()"
                    type="button"
                    data-testid="save-layout"
                    :disabled="saving"
                    @click="saveLayout"
                >
                    {{ saving ? 'Saving...' : 'Save layout' }}
                </button>
                <button
                    v-if="canEdit && !editing"
                    :class="buttonClasses(layoutDirty ? { variant: 'outline' } : {})"
                    type="button"
                    data-testid="edit-workflow"
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
                Edit states and transitions below, then save. Node positions on the board are
                kept with this save. Column and model stay fixed from the PHP definition.
            </p>

            <PkAlertError v-if="saveError" class="mb-4">{{ saveError }}</PkAlertError>

            <div class="mb-4">
                <label class="text-foreground mb-1 block text-xs font-medium">Group label</label>
                <input
                    v-model="editGroupLabel"
                    type="text"
                    class="border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring h-8 w-full max-w-xs rounded-md border px-2 text-sm focus:ring-1 focus:outline-none"
                    placeholder="Status"
                />
            </div>

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

        <p v-if="!editing" class="text-muted-foreground text-sm font-normal">
            <template v-if="canEdit">
                Drag states to rearrange the board, then Save layout. Use Edit workflow to
                add, remove, or rename states and transitions. Layout and definition both
                persist to the database.
            </template>
            <template v-else>
                Read-only diagram of the workflow definition. You need update permission to
                move nodes or edit states and transitions.
            </template>
        </p>

        <PkAlertError v-if="saveError && !editing" class="mb-0">{{ saveError }}</PkAlertError>

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

        <div
            v-else-if="!editing"
            class="border-border bg-muted/10 relative min-h-0 flex-1 overflow-auto rounded-lg border"
        >
            <div
                class="relative"
                :style="{ width: `${canvasSize.width}px`, height: `${canvasSize.height}px` }"
            >
                <svg
                    class="pointer-events-none absolute inset-0"
                    :width="canvasSize.width"
                    :height="canvasSize.height"
                    aria-hidden="true"
                >
                    <defs>
                        <marker
                            id="workflow-arrow"
                            markerWidth="8"
                            markerHeight="8"
                            refX="6"
                            refY="3"
                            orient="auto"
                            markerUnits="strokeWidth"
                        >
                            <path d="M0,0 L6,3 L0,6 Z" class="fill-muted-foreground" />
                        </marker>
                    </defs>
                    <path
                        v-for="edge in edgePaths"
                        :key="edge.id"
                        :d="edge.d"
                        class="stroke-muted-foreground/50 fill-none"
                        stroke-width="1.5"
                        marker-end="url(#workflow-arrow)"
                    />
                    <text
                        v-for="edge in edgePaths"
                        :key="`${edge.id}-label`"
                        :x="edge.labelX"
                        :y="edge.labelY"
                        text-anchor="middle"
                        class="fill-muted-foreground text-[10px]"
                    >
                        {{ edge.label }}
                    </text>
                </svg>

                <article
                    v-for="node in graph.nodes"
                    :key="node.id"
                    class="absolute rounded-md border p-3 shadow-sm select-none"
                    :class="[
                        colorClass(node.color),
                        canEdit ? 'cursor-grab active:cursor-grabbing' : '',
                        drag?.id === node.id ? 'ring-primary z-10 ring-2' : '',
                    ]"
                    :style="{
                        width: `${NODE_WIDTH}px`,
                        left: `${nodePositions[node.id]?.x ?? 0}px`,
                        top: `${nodePositions[node.id]?.y ?? 0}px`,
                    }"
                    :data-node-id="node.id"
                    @pointerdown="onPointerDown($event, node.id)"
                    @pointermove="onPointerMove"
                    @pointerup="onPointerUp"
                    @pointercancel="onPointerUp"
                >
                    <h2 class="text-sm font-medium">{{ node.label }}</h2>
                    <p class="text-muted-foreground mt-0.5 font-mono text-[11px]">{{ node.id }}</p>
                </article>
            </div>
        </div>
    </div>
</template>
