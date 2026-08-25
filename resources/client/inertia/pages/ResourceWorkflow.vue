<script setup lang="ts">
/**
 * Workflow board with form editor, node repositioning, and edge DnD.
 *
 * Canvas (when not in the form editor):
 * - Drag state nodes to rearrange; Save layout persists positions.
 * - Drag from a node's out-handle to another node to create a transition.
 * - Drag an existing edge endpoint onto another node to reconnect source or target.
 * - Click an edge or state, then Delete/Backspace to remove it (Undo restores).
 * - Light edge routing fans parallel edges and bows curves around other nodes.
 *
 * The form editor remains the fallback for rename, ability, icon, colour,
 * confirm, and multi-source checklists.
 */
import { Head, Link, router } from '@inertiajs/vue3'
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
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

type EdgeDrag =
    | {
          mode: 'create'
          fromId: string
          x: number
          y: number
      }
    | {
          mode: 'reconnect-source'
          edgeKey: string
          oldFrom: string
          x: number
          y: number
      }
    | {
          mode: 'reconnect-target'
          edgeKey: string
          x: number
          y: number
      }

const NODE_WIDTH = 200
const NODE_HEIGHT = 96
const RANK_GAP_X = 260
const RANK_GAP_Y = 140
const HANDLE = 12
const MAX_UNDO = 40
const PARALLEL_FAN = 26
const BOW_STEP = 36

interface CanvasSnapshot {
    transitions: TransitionEntry[]
    positions: Record<string, NodePosition>
    hiddenStateIds: string[]
    layoutDirty: boolean
    edgesDirty: boolean
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
const canvasEl = ref<HTMLElement | null>(null)
const selectedEdgeId = ref<string | null>(null)
const selectedNodeId = ref<string | null>(null)
const hiddenStateIds = ref<string[]>([])
const undoStack = ref<CanvasSnapshot[]>([])

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
        from: [...((t.from as string[]) ?? [])],
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
const boardTransitions = ref(buildTransitions())
const editGroupLabel = ref(props.workflow.group ?? 'Status')
const saving = ref(false)
const saveError = ref('')
const layoutDirty = ref(false)
const edgesDirty = ref(false)
const nodePositions = reactive<Record<string, NodePosition>>(seedPositions())

const canvasDirty = computed(() => layoutDirty.value || edgesDirty.value)

watch(
    () => [props.graph.nodes, props.positions] as const,
    () => {
        const seeded = seedPositions()
        for (const key of Object.keys(nodePositions)) {
            if (!(key in seeded)) delete nodePositions[key]
        }
        Object.assign(nodePositions, seeded)
        layoutDirty.value = false
        hiddenStateIds.value = []
        undoStack.value = []
        selectedEdgeId.value = null
        selectedNodeId.value = null
    },
    { deep: true },
)

watch(
    () => props.workflow.transitions,
    () => {
        if (!edgesDirty.value && !editing.value) {
            boardTransitions.value = buildTransitions()
            undoStack.value = []
            selectedEdgeId.value = null
        }
    },
    { deep: true },
)

function startEditing() {
    editStates.value = buildStates()
    editTransitions.value = boardTransitions.value.map((t) => ({
        ...t,
        from: [...t.from],
    }))
    editGroupLabel.value = props.workflow.group ?? 'Status'
    editing.value = true
    saveError.value = ''
    edgeDrag.value = null
    drag.value = null
    clearCanvasSelection()
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

    const hidden = new Set(hiddenStateIds.value)

    return Object.fromEntries(
        Object.entries(props.workflow.states)
            .filter(([key]) => !hidden.has(key))
            .map(([key, s]) => [key, { label: s.label, color: s.color }]),
    )
}

const visibleNodes = computed(() =>
    props.graph.nodes.filter((node) => !hiddenStateIds.value.includes(node.id)),
)

function cloneTransitions(list: TransitionEntry[]): TransitionEntry[] {
    return list.map((t) => ({
        ...t,
        from: [...t.from],
    }))
}

function clonePositions(): Record<string, NodePosition> {
    return Object.fromEntries(
        Object.entries(nodePositions).map(([key, point]) => [key, { x: point.x, y: point.y }]),
    )
}

function pushUndo(): void {
    undoStack.value.push({
        transitions: cloneTransitions(boardTransitions.value),
        positions: clonePositions(),
        hiddenStateIds: [...hiddenStateIds.value],
        layoutDirty: layoutDirty.value,
        edgesDirty: edgesDirty.value,
    })

    if (undoStack.value.length > MAX_UNDO) {
        undoStack.value.shift()
    }
}

function undoCanvas(): void {
    const snap = undoStack.value.pop()
    if (!snap) return

    boardTransitions.value = cloneTransitions(snap.transitions)
    hiddenStateIds.value = [...snap.hiddenStateIds]

    for (const key of Object.keys(nodePositions)) {
        if (!(key in snap.positions)) delete nodePositions[key]
    }
    Object.assign(nodePositions, snap.positions)

    layoutDirty.value = snap.layoutDirty
    edgesDirty.value = snap.edgesDirty
    selectedEdgeId.value = null
    selectedNodeId.value = null
}

function selectEdge(edgeId: string, event?: Event): void {
    event?.stopPropagation()
    if (!props.canEdit || editing.value) return
    selectedEdgeId.value = edgeId
    selectedNodeId.value = null
}

function selectNode(nodeId: string): void {
    if (!props.canEdit || editing.value || edgeDrag.value) return
    selectedNodeId.value = nodeId
    selectedEdgeId.value = null
}

function clearCanvasSelection(): void {
    selectedEdgeId.value = null
    selectedNodeId.value = null
}

function deleteSelectedEdge(): boolean {
    const edgeId = selectedEdgeId.value
    if (!edgeId) return false

    const edge = displayEdges.value.find((e) => e.id === edgeId)
    if (!edge) return false

    const transition = boardTransitions.value.find((t) => t.key === edge.key)
    if (!transition) return false

    pushUndo()

    if (transition.from.length === 0) {
        // Any-state transition: collapse to every visible source except this edge's from.
        const remaining = visibleNodes.value
            .map((node) => node.id)
            .filter((id) => id !== edge.from && id !== transition.to)
        if (remaining.length === 0) {
            boardTransitions.value = boardTransitions.value.filter((t) => t.key !== edge.key)
        } else {
            transition.from = remaining
        }
    } else if (transition.from.length === 1) {
        boardTransitions.value = boardTransitions.value.filter((t) => t.key !== edge.key)
    } else {
        transition.from = transition.from.filter((from) => from !== edge.from)
        if (transition.from.length === 0) {
            boardTransitions.value = boardTransitions.value.filter((t) => t.key !== edge.key)
        }
    }

    edgesDirty.value = true
    selectedEdgeId.value = null
    return true
}

function deleteSelectedNode(): boolean {
    const nodeId = selectedNodeId.value
    if (!nodeId) return false
    if (visibleNodes.value.length <= 1) return false

    pushUndo()

    hiddenStateIds.value = [...hiddenStateIds.value, nodeId]
    boardTransitions.value = boardTransitions.value.flatMap((t) => {
        if (t.to === nodeId) return []

        const wasAny = t.from.length === 0
        const from = t.from.filter((fromId) => fromId !== nodeId)
        if (!wasAny && from.length === 0) return []

        return [{ ...t, from: wasAny ? [] : from }]
    })

    delete nodePositions[nodeId]
    edgesDirty.value = true
    selectedNodeId.value = null
    return true
}

function onCanvasKeydown(event: KeyboardEvent): void {
    if (!props.canEdit || editing.value) return

    const target = event.target as HTMLElement | null
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable)) {
        return
    }

    if ((event.key === 'z' || event.key === 'Z') && (event.metaKey || event.ctrlKey) && !event.shiftKey) {
        event.preventDefault()
        undoCanvas()
        return
    }

    if (event.key === 'Delete' || event.key === 'Backspace') {
        event.preventDefault()
        if (deleteSelectedEdge()) return
        deleteSelectedNode()
    }

    if (event.key === 'Escape') {
        clearCanvasSelection()
    }
}

function serializeTransitions(list: TransitionEntry[]) {
    return list
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

function currentTransitionsPayload() {
    if (editing.value) {
        return serializeTransitions(editTransitions.value)
    }

    return serializeTransitions(boardTransitions.value)
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
                edgesDirty.value = false
                hiddenStateIds.value = []
                undoStack.value = []
                selectedEdgeId.value = null
                selectedNodeId.value = null
                if (closeEditor) {
                    editing.value = false
                    boardTransitions.value = buildTransitions()
                }
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
    moved: boolean
} | null>(null)

const edgeDrag = ref<EdgeDrag | null>(null)
const hoverDropId = ref<string | null>(null)

function canvasPoint(clientX: number, clientY: number): { x: number; y: number } {
    const rect = canvasEl.value?.getBoundingClientRect()
    if (!rect) return { x: clientX, y: clientY }

    return { x: clientX - rect.left, y: clientY - rect.top }
}

function teardownEdgeListeners() {
    window.removeEventListener('pointermove', onEdgePointerMove)
    window.removeEventListener('pointerup', onEdgePointerUp)
    window.removeEventListener('pointercancel', onEdgePointerUp)
}

function onEdgePointerMove(event: PointerEvent) {
    if (!edgeDrag.value) return
    const point = canvasPoint(event.clientX, event.clientY)
    edgeDrag.value = { ...edgeDrag.value, x: point.x, y: point.y }
}

function onEdgePointerUp(event: PointerEvent) {
    if (!edgeDrag.value) return

    let dropId = hoverDropId.value
    if (!dropId && typeof document.elementFromPoint === 'function') {
        const el = document.elementFromPoint(event.clientX, event.clientY)
        const node = el?.closest?.('[data-node-id]') as HTMLElement | null
        dropId = node?.getAttribute('data-node-id') ?? null
    }

    finishEdgeDrag(dropId)
    teardownEdgeListeners()
}

function beginEdgeDrag(next: EdgeDrag) {
    edgeDrag.value = next
    drag.value = null
    hoverDropId.value = null
    window.addEventListener('pointermove', onEdgePointerMove)
    window.addEventListener('pointerup', onEdgePointerUp)
    window.addEventListener('pointercancel', onEdgePointerUp)
}

function onPointerDown(event: PointerEvent, id: string) {
    if (!props.canEdit || editing.value || edgeDrag.value) return
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
        moved: false,
    }
    selectNode(id)
}

function onPointerMove(event: PointerEvent) {
    if (edgeDrag.value) return
    if (!drag.value) return

    if (!drag.value.moved) {
        pushUndo()
        drag.value.moved = true
    }

    const nextX = Math.max(0, drag.value.originX + (event.clientX - drag.value.startX))
    const nextY = Math.max(0, drag.value.originY + (event.clientY - drag.value.startY))
    nodePositions[drag.value.id] = { x: nextX, y: nextY }
    layoutDirty.value = true
}

function onPointerUp(event: PointerEvent) {
    if (edgeDrag.value) return
    if (!drag.value) return
    releaseCapture(event)
    drag.value = null
}

function releaseCapture(event: PointerEvent) {
    const target = event.currentTarget as HTMLElement

    try {
        if (target.hasPointerCapture?.(event.pointerId)) {
            target.releasePointerCapture(event.pointerId)
        }
    } catch {
        // ignore
    }
}

function onSourceHandleDown(event: PointerEvent, fromId: string) {
    if (!props.canEdit || editing.value) return
    if (event.button !== 0) return

    event.stopPropagation()
    event.preventDefault()

    const point = canvasPoint(event.clientX, event.clientY)
    beginEdgeDrag({ mode: 'create', fromId, x: point.x, y: point.y })
}

function onReconnectSourceDown(event: PointerEvent, edge: GraphEdge) {
    if (!props.canEdit || editing.value) return
    if (event.button !== 0) return

    event.stopPropagation()
    event.preventDefault()

    const point = canvasPoint(event.clientX, event.clientY)
    beginEdgeDrag({
        mode: 'reconnect-source',
        edgeKey: edge.key,
        oldFrom: edge.from,
        x: point.x,
        y: point.y,
    })
}

function onReconnectTargetDown(event: PointerEvent, edge: GraphEdge) {
    if (!props.canEdit || editing.value) return
    if (event.button !== 0) return

    event.stopPropagation()
    event.preventDefault()

    const point = canvasPoint(event.clientX, event.clientY)
    beginEdgeDrag({
        mode: 'reconnect-target',
        edgeKey: edge.key,
        x: point.x,
        y: point.y,
    })
}

function onNodePointerEnter(nodeId: string) {
    if (edgeDrag.value) hoverDropId.value = nodeId
}

function onNodePointerLeave(nodeId: string) {
    if (hoverDropId.value === nodeId) hoverDropId.value = null
}

function onNodeDrop(event: PointerEvent, nodeId: string) {
    if (edgeDrag.value) {
        event.stopPropagation()
        finishEdgeDrag(nodeId)
        teardownEdgeListeners()
        return
    }

    onPointerUp(event)
}

function nodeLabel(id: string): string {
    return props.graph.nodes.find((n) => n.id === id)?.label ?? id
}

function finishEdgeDrag(dropNodeId: string | null) {
    const current = edgeDrag.value
    edgeDrag.value = null
    hoverDropId.value = null
    if (!current || !dropNodeId) return

    if (current.mode === 'create') {
        if (dropNodeId === current.fromId) return
        createTransition(current.fromId, dropNodeId)
        return
    }

    if (current.mode === 'reconnect-source') {
        if (dropNodeId === current.oldFrom) return
        reconnectSource(current.edgeKey, current.oldFrom, dropNodeId)
        return
    }

    reconnectTarget(current.edgeKey, dropNodeId)
}

function createTransition(fromId: string, toId: string) {
    const duplicate = boardTransitions.value.some(
        (t) => t.to === toId && t.from.includes(fromId) && t.from.length === 1,
    )
    if (duplicate) return

    pushUndo()
    boardTransitions.value.push({
        key: `t_${Date.now()}`,
        label: `${nodeLabel(fromId)} to ${nodeLabel(toId)}`,
        to: toId,
        from: [fromId],
        ability: 'update',
        icon: null,
        color: null,
        confirm: null,
    })
    edgesDirty.value = true
}

function reconnectSource(edgeKey: string, oldFrom: string, newFrom: string) {
    const transition = boardTransitions.value.find((t) => t.key === edgeKey)
    if (!transition) return
    if (newFrom === transition.to) return

    pushUndo()
    if (transition.from.length === 0) {
        // Empty from means "any state" on the server graph. Reconnecting one
        // visual edge collapses that to an explicit list with the new source.
        transition.from = [newFrom]
    } else {
        const idx = transition.from.indexOf(oldFrom)
        if (idx < 0) return
        if (transition.from.includes(newFrom)) {
            transition.from.splice(idx, 1)
        } else {
            transition.from[idx] = newFrom
        }
    }

    edgesDirty.value = true
}

function reconnectTarget(edgeKey: string, newTo: string) {
    const transition = boardTransitions.value.find((t) => t.key === edgeKey)
    if (!transition) return
    if (transition.from.includes(newTo) && transition.from.length === 1) return

    pushUndo()
    transition.to = newTo
    edgesDirty.value = true
}

onMounted(() => {
    window.addEventListener('keydown', onCanvasKeydown)
})

onBeforeUnmount(() => {
    drag.value = null
    edgeDrag.value = null
    hoverDropId.value = null
    teardownEdgeListeners()
    window.removeEventListener('keydown', onCanvasKeydown)
})

const canvasSize = computed(() => {
    let maxX = 480
    let maxY = 280

    for (const node of visibleNodes.value) {
        const point = nodePositions[node.id]
        if (!point) continue
        maxX = Math.max(maxX, point.x + NODE_WIDTH + 48)
        maxY = Math.max(maxY, point.y + NODE_HEIGHT + 48)
    }

    if (edgeDrag.value) {
        maxX = Math.max(maxX, edgeDrag.value.x + 24)
        maxY = Math.max(maxY, edgeDrag.value.y + 24)
    }

    return { width: maxX, height: maxY }
})

const displayEdges = computed((): GraphEdge[] => {
    const stateKeys = visibleNodes.value.map((n) => n.id)
    const edges: GraphEdge[] = []

    for (const t of boardTransitions.value) {
        if (!t.key || !t.to || !t.label) continue
        const froms = t.from.length > 0 ? t.from : stateKeys
        for (const from of froms) {
            if (!stateKeys.includes(from) || !stateKeys.includes(t.to)) continue
            edges.push({
                id: `${t.key}__${from}`,
                key: t.key,
                label: t.label,
                from,
                to: t.to,
                icon: t.icon,
                color: t.color,
            })
        }
    }

    return edges
})

function nodeRect(id: string): { x: number; y: number; w: number; h: number } | null {
    const point = nodePositions[id]
    if (!point) return null

    return { x: point.x, y: point.y, w: NODE_WIDTH, h: NODE_HEIGHT }
}

/** True when the open segment from A to B crosses another state's box. */
function segmentHitsNode(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    fromId: string,
    toId: string,
): number {
    let hits = 0

    for (const node of visibleNodes.value) {
        if (node.id === fromId || node.id === toId) continue
        const rect = nodeRect(node.id)
        if (!rect) continue

        const pad = 8
        const left = rect.x - pad
        const right = rect.x + rect.w + pad
        const top = rect.y - pad
        const bottom = rect.y + rect.h + pad

        // Sample the chord; count a hit when a sample sits inside the padded box.
        for (let i = 1; i <= 8; i++) {
            const t = i / 9
            const x = x1 + (x2 - x1) * t
            const y = y1 + (y2 - y1) * t
            if (x >= left && x <= right && y >= top && y <= bottom) {
                hits += 1
                break
            }
        }
    }

    return hits
}

function routedPath(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    fan: number,
    fromId: string,
    toId: string,
): string {
    const dx = x2 - x1
    const dy = y2 - y1
    const len = Math.hypot(dx, dy) || 1
    const nx = -dy / len
    const ny = dx / len

    const hits = segmentHitsNode(x1, y1, x2, y2, fromId, toId)
    const bow = hits * BOW_STEP
    // Prefer bowing "up" relative to the chord so stacked edges stay readable.
    const side = y2 >= y1 ? -1 : 1
    const offset = fan + bow * side

    const c1x = x1 + dx * 0.35 + nx * offset
    const c1y = y1 + dy * 0.35 + ny * offset
    const c2x = x1 + dx * 0.65 + nx * offset
    const c2y = y1 + dy * 0.65 + ny * offset

    return `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`
}

function bezierPath(x1: number, y1: number, x2: number, y2: number): string {
    return routedPath(x1, y1, x2, y2, 0, '', '')
}

const edgePaths = computed(() => {
    const pairCounts = new Map<string, number>()
    const pairIndex = new Map<string, number>()

    for (const edge of displayEdges.value) {
        const pair = `${edge.from}->${edge.to}`
        pairCounts.set(pair, (pairCounts.get(pair) ?? 0) + 1)
    }

    return displayEdges.value.map((edge) => {
        const from = nodePositions[edge.from] ?? { x: 0, y: 0 }
        const to = nodePositions[edge.to] ?? { x: 0, y: 0 }
        const x1 = from.x + NODE_WIDTH
        const y1 = from.y + NODE_HEIGHT / 2
        const x2 = to.x
        const y2 = to.y + NODE_HEIGHT / 2

        const pair = `${edge.from}->${edge.to}`
        const count = pairCounts.get(pair) ?? 1
        const index = pairIndex.get(pair) ?? 0
        pairIndex.set(pair, index + 1)
        const fan = (index - (count - 1) / 2) * PARALLEL_FAN

        const d = routedPath(x1, y1, x2, y2, fan, edge.from, edge.to)
        const midX = (x1 + x2) / 2
        const midY = (y1 + y2) / 2
        const dx = x2 - x1
        const dy = y2 - y1
        const len = Math.hypot(dx, dy) || 1
        const nx = -dy / len
        const ny = dx / len
        const hits = segmentHitsNode(x1, y1, x2, y2, edge.from, edge.to)
        const bow = hits * BOW_STEP
        const side = y2 >= y1 ? -1 : 1
        const offset = fan + bow * side

        return {
            ...edge,
            x1,
            y1,
            x2,
            y2,
            d,
            labelX: midX + nx * offset,
            labelY: midY + ny * offset - 8,
        }
    })
})

const canUndo = computed(() => undoStack.value.length > 0)

const previewPath = computed(() => {
    if (!edgeDrag.value) return null

    let x1 = edgeDrag.value.x
    let y1 = edgeDrag.value.y

    if (edgeDrag.value.mode === 'create') {
        const from = nodePositions[edgeDrag.value.fromId] ?? { x: 0, y: 0 }
        x1 = from.x + NODE_WIDTH
        y1 = from.y + NODE_HEIGHT / 2
    } else if (edgeDrag.value.mode === 'reconnect-source') {
        const transition = boardTransitions.value.find((t) => t.key === edgeDrag.value!.edgeKey)
        const toId = transition?.to
        const to = toId ? (nodePositions[toId] ?? { x: 0, y: 0 }) : { x: 0, y: 0 }
        return {
            d: bezierPath(edgeDrag.value.x, edgeDrag.value.y, to.x, to.y + NODE_HEIGHT / 2),
        }
    } else {
        const transition = boardTransitions.value.find((t) => t.key === edgeDrag.value!.edgeKey)
        const fromId = transition?.from[0]
        const from = fromId ? (nodePositions[fromId] ?? { x: 0, y: 0 }) : { x: 0, y: 0 }
        x1 = from.x + NODE_WIDTH
        y1 = from.y + NODE_HEIGHT / 2
    }

    return {
        d: bezierPath(x1, y1, edgeDrag.value.x, edgeDrag.value.y),
    }
})

const purpose = computed(
    () =>
        `${visibleNodes.value.length} states, ${displayEdges.value.length} transitions on ${props.workflow.column}`,
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
                    v-if="canEdit && canUndo && !editing"
                    :class="buttonClasses({ variant: 'outline' })"
                    type="button"
                    data-testid="undo-canvas"
                    :disabled="saving"
                    @click="undoCanvas"
                >
                    Undo
                </button>
                <button
                    v-if="canEdit && canvasDirty && !editing"
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
                    :class="buttonClasses(canvasDirty ? { variant: 'outline' } : {})"
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
                Drag states to rearrange. Drag from a node's right handle to another
                state to create a transition, or drag an edge endpoint to reconnect.
                Click an edge or state, then Delete to remove it. Undo restores the
                last canvas change. Save layout persists positions and canvas edits.
                Use Edit workflow for labels, abilities, and multi-source transitions.
            </template>
            <template v-else>
                Read-only diagram of the workflow definition. You need update permission to
                move nodes, drag edges, or edit states and transitions.
            </template>
        </p>

        <PkAlertError v-if="saveError && !editing" class="mb-0">{{ saveError }}</PkAlertError>

        <PkEmptyState
            v-if="visibleNodes.length === 0 && !editing"
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
            tabindex="0"
            data-testid="workflow-canvas-shell"
            @click="clearCanvasSelection"
        >
            <div
                ref="canvasEl"
                class="relative"
                data-testid="workflow-canvas"
                :style="{ width: `${canvasSize.width}px`, height: `${canvasSize.height}px` }"
            >
                <svg
                    class="absolute inset-0"
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
                        :key="`${edge.id}-hit`"
                        :d="edge.d"
                        class="fill-none stroke-transparent"
                        stroke-width="12"
                        :data-testid="`edge-hit-${edge.id}`"
                        @click="selectEdge(edge.id, $event)"
                    />
                    <path
                        v-for="edge in edgePaths"
                        :key="edge.id"
                        :d="edge.d"
                        class="pointer-events-none fill-none"
                        :class="
                            selectedEdgeId === edge.id
                                ? 'stroke-primary'
                                : 'stroke-muted-foreground/50'
                        "
                        :stroke-width="selectedEdgeId === edge.id ? 2.5 : 1.5"
                        marker-end="url(#workflow-arrow)"
                    />
                    <path
                        v-if="previewPath"
                        :d="previewPath.d"
                        class="pointer-events-none stroke-primary fill-none"
                        stroke-width="1.5"
                        stroke-dasharray="4 3"
                    />
                    <text
                        v-for="edge in edgePaths"
                        :key="`${edge.id}-label`"
                        :x="edge.labelX"
                        :y="edge.labelY"
                        text-anchor="middle"
                        class="pointer-events-none fill-muted-foreground text-[10px]"
                        :class="selectedEdgeId === edge.id ? 'fill-primary font-medium' : ''"
                    >
                        {{ edge.label }}
                    </text>
                </svg>

                <template v-if="canEdit">
                    <button
                        v-for="edge in edgePaths"
                        :key="`${edge.id}-src`"
                        type="button"
                        class="border-border bg-background hover:border-primary absolute z-20 rounded-full border shadow-sm"
                        :style="{
                            width: `${HANDLE}px`,
                            height: `${HANDLE}px`,
                            left: `${edge.x1 - HANDLE / 2}px`,
                            top: `${edge.y1 - HANDLE / 2}px`,
                        }"
                        :data-testid="`edge-source-${edge.id}`"
                        :title="`Reconnect source of ${edge.label}`"
                        @pointerdown="onReconnectSourceDown($event, edge)"
                        @click.stop="selectEdge(edge.id, $event)"
                    />
                    <button
                        v-for="edge in edgePaths"
                        :key="`${edge.id}-tgt`"
                        type="button"
                        class="border-border bg-background hover:border-primary absolute z-20 rounded-full border shadow-sm"
                        :style="{
                            width: `${HANDLE}px`,
                            height: `${HANDLE}px`,
                            left: `${edge.x2 - HANDLE / 2}px`,
                            top: `${edge.y2 - HANDLE / 2}px`,
                        }"
                        :data-testid="`edge-target-${edge.id}`"
                        :title="`Reconnect target of ${edge.label}`"
                        @pointerdown="onReconnectTargetDown($event, edge)"
                        @click.stop="selectEdge(edge.id, $event)"
                    />
                    <button
                        v-if="selectedEdgeId"
                        type="button"
                        class="border-border bg-background text-destructive hover:bg-destructive/10 absolute z-30 rounded-md border px-2 py-0.5 text-[10px] font-medium shadow-sm"
                        data-testid="delete-edge"
                        :style="{
                            left: `${(edgePaths.find((e) => e.id === selectedEdgeId)?.labelX ?? 0) - 28}px`,
                            top: `${(edgePaths.find((e) => e.id === selectedEdgeId)?.labelY ?? 0) + 10}px`,
                        }"
                        @click.stop="deleteSelectedEdge()"
                    >
                        Delete
                    </button>
                </template>

                <article
                    v-for="node in visibleNodes"
                    :key="node.id"
                    class="absolute rounded-md border p-3 shadow-sm select-none"
                    :class="[
                        colorClass(node.color),
                        canEdit ? 'cursor-grab active:cursor-grabbing' : '',
                        drag?.id === node.id || selectedNodeId === node.id ? 'ring-primary z-10 ring-2' : '',
                        edgeDrag ? 'z-10' : '',
                    ]"
                    :style="{
                        width: `${NODE_WIDTH}px`,
                        left: `${nodePositions[node.id]?.x ?? 0}px`,
                        top: `${nodePositions[node.id]?.y ?? 0}px`,
                    }"
                    :data-node-id="node.id"
                    @pointerdown="onPointerDown($event, node.id)"
                    @pointermove="onPointerMove"
                    @pointerup="onNodeDrop($event, node.id)"
                    @pointercancel="onPointerUp"
                    @pointerenter="onNodePointerEnter(node.id)"
                    @pointerleave="onNodePointerLeave(node.id)"
                    @click.stop="selectNode(node.id)"
                >
                    <h2 class="text-sm font-medium">{{ node.label }}</h2>
                    <p class="text-muted-foreground mt-0.5 font-mono text-[11px]">{{ node.id }}</p>

                    <button
                        v-if="canEdit"
                        type="button"
                        class="border-border bg-background hover:border-primary absolute top-1/2 -right-1.5 z-20 -translate-y-1/2 rounded-full border shadow-sm"
                        :style="{ width: `${HANDLE}px`, height: `${HANDLE}px` }"
                        :data-testid="`out-handle-${node.id}`"
                        :title="`Drag to create a transition from ${node.label}`"
                        @pointerdown="onSourceHandleDown($event, node.id)"
                    />
                </article>
            </div>
        </div>
    </div>
</template>
