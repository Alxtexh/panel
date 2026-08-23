<script setup lang="ts">
/**
 * Read-only visual board for a resource that declared `Resource::workflow()`.
 *
 * States are columns by rank; transitions are labelled edges. The definition
 * stays in PHP: this page explains the machine, it does not edit it.
 */
import { Head, Link } from '@inertiajs/vue3'
import { computed } from 'vue'
import {
    PAGE_SHELL,
    PkEmptyState,
    PkPageHeader,
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

const props = defineProps<{
    schema: {
        key: string
        label: string
        labelPlural: string
    }
    workflow: {
        column: string
        group: string
        states: Record<string, { label: string; color: string }>
        transitions: Array<Record<string, unknown>>
    }
    graph: {
        nodes: GraphNode[]
        edges: GraphEdge[]
    }
    indexUrl: string
    breadcrumbs?: { title: string; href?: string | null }[]
}>()

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
                <Link :href="indexUrl" :class="buttonClasses({ variant: 'outline' })">
                    Table view
                </Link>
            </template>
        </PkPageHeader>

        <p class="text-muted-foreground text-sm font-normal">
            Read-only diagram of the PHP workflow definition. Drag-to-edit is not
            shipped in this version; change states and transitions in code.
        </p>

        <PkEmptyState
            v-if="graph.nodes.length === 0"
            title="No states declared"
            description="Add states() on the resource workflow to populate this board."
            icon="git-branch"
        >
            <template #actions>
                <Link :href="indexUrl" :class="buttonClasses()">Open table</Link>
            </template>
        </PkEmptyState>

        <div v-else class="flex min-h-0 flex-1 gap-4 overflow-x-auto pb-2">
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
                            <span class="opacity-70"> → </span>
                            <span>{{ workflow.states[edge.to]?.label ?? edge.to }}</span>
                        </li>
                    </ul>

                    <p v-else class="text-muted-foreground mt-3 text-xs">Terminal state</p>
                </article>
            </section>
        </div>
    </div>
</template>
