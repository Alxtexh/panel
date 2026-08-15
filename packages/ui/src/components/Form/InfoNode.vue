<script setup lang="ts">
/**
 * Renders one node of a VIEW-page schema tree.
 *
 * Deliberately separate from SchemaNode rather than a mode flag on it: a form
 * node owns editable state and emits changes, a view node is pure output. One
 * component doing both would carry an `if (readonly)` through every branch, and
 * that is how a read-only page ends up shipping an editable control by accident.
 *
 * Leaves are COLUMNS, the same objects the table renders, so a value cannot look
 * one way in the list and another here.
 */
import { computed, ref } from 'vue'
import PkBadge from '../primitives/PkBadge.vue'
import { BADGE_VARIANTS, hasBadgeValue } from '../../composables/useSchemaColumns'

export interface InfoNode {
    component: 'entry' | 'section' | 'grid' | 'tabs' | 'tab'
    children?: InfoNode[]
    key?: string
    label?: string
    description?: string
    columns?: number
    collapsible?: boolean
    collapsed?: boolean
    type?: string
    mono?: boolean
    muted?: boolean
    transform?: 'upper' | 'lower'
    prefix?: string
    suffix?: string
    colors?: Record<string, string>
    defaultColor?: string
    [key: string]: any
}

const props = withDefaults(
    defineProps<{
        node: InfoNode
        record: Record<string, any>
        /** 0 is the outermost layout node - the only one that draws a frame. */
        depth?: number
    }>(),
    { depth: 0 },
)

const open = ref(!props.node.collapsed)
const activeTab = ref(0)

const isRoot = computed(() => props.depth === 0)

const gridClass = computed(() => {
    const columns = props.node.columns ?? 1

    return columns >= 3 ? 'sm:grid-cols-3' : columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'
})

const dateFormats: Record<string, Intl.DateTimeFormatOptions> = {
    date: { year: 'numeric', month: 'long', day: 'numeric' },
    datetime: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    },
}

const value = computed(() => (props.node.key ? props.record[props.node.key] : null))

const display = computed(() => {
    const v = value.value

    if (v === null || v === undefined || v === '') {
        return '-'
    }

    if (props.node.type === 'date' || props.node.type === 'datetime') {
        return new Date(String(v)).toLocaleDateString(undefined, dateFormats[props.node.type])
    }

    let text = String(v)

    if (props.node.transform === 'upper') {
        text = text.toUpperCase()
    }

    if (props.node.transform === 'lower') {
        text = text.toLowerCase()
    }

    return [props.node.prefix, text, props.node.suffix].filter(Boolean).join(' ')
})

const badgeVariant = computed(() => {
    const lookup = typeof value.value === 'boolean' ? (value.value ? '1' : '') : String(value.value)
    const intent = props.node.colors?.[lookup] ?? props.node.defaultColor ?? 'neutral'

    return BADGE_VARIANTS[intent] ?? 'outline'
})
</script>

<template>
    <!-- Entry: a labelled value. -->
    <div v-if="node.component === 'entry'" class="flex flex-col gap-0.5">
        <dt class="text-muted-foreground text-xs font-medium">{{ node.label }}</dt>
        <dd class="text-sm">
            <PkBadge
                v-if="node.type === 'badge' && hasBadgeValue(value)"
                :variant="(badgeVariant as any)"
                class="capitalize"
            >
                {{ value }}
            </PkBadge>
            <span v-else-if="node.type === 'badge'">-</span>
            <span
                v-else
                :class="[
                    node.mono ? 'font-mono text-xs' : '',
                    node.muted ? 'text-muted-foreground' : '',
                ]"
            >
                {{ display }}
            </span>
        </dd>
    </div>

    <!-- Section. -->
    <section
        v-else-if="node.component === 'section'"
        :class="isRoot ? 'bg-card rounded-lg border' : ''"
    >
        <header
            class="flex items-start justify-between gap-3"
            :class="[
                isRoot ? 'px-4 py-3' : 'pb-2',
                node.collapsible ? 'cursor-pointer select-none' : '',
            ]"
            @click="node.collapsible && (open = !open)"
        >
            <div>
                <h3 class="text-sm font-semibold">{{ node.label }}</h3>
                <p v-if="node.description" class="text-muted-foreground mt-0.5 text-xs">
                    {{ node.description }}
                </p>
            </div>
        </header>

        <dl
            v-if="open"
            class="grid grid-cols-1 gap-4"
            :class="[gridClass, isRoot ? 'border-t px-4 py-4' : '']"
        >
            <InfoNode
                v-for="(child, i) in node.children ?? []"
                :key="i"
                :node="child"
                :record="record"
                :depth="depth + 1"
            />
        </dl>
    </section>

    <!-- Grid. -->
    <dl v-else-if="node.component === 'grid'" class="grid grid-cols-1 gap-4" :class="gridClass">
        <InfoNode
            v-for="(child, i) in node.children ?? []"
            :key="i"
            :node="child"
            :record="record"
            :depth="depth + 1"
        />
    </dl>

    <!-- Tabs. -->
    <div
        v-else-if="node.component === 'tabs'"
        :class="isRoot ? 'bg-card overflow-hidden rounded-lg border' : ''"
    >
        <div
            class="bg-muted/30 flex gap-1 overflow-x-auto p-1"
            :class="isRoot ? 'border-b' : 'rounded-md'"
        >
            <button
                v-for="(tab, i) in node.children ?? []"
                :key="i"
                type="button"
                class="shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors"
                :class="
                    activeTab === i
                        ? 'bg-background text-foreground font-medium shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                "
                @click="activeTab = i"
            >
                {{ tab.label }}
            </button>
        </div>

        <div
            v-for="(tab, i) in node.children ?? []"
            v-show="activeTab === i"
            :key="i"
            class="flex flex-col gap-5"
            :class="isRoot ? 'p-4' : 'pt-4'"
        >
            <InfoNode
                v-for="(child, j) in tab.children ?? []"
                :key="j"
                :node="child"
                :record="record"
                :depth="depth + 1"
            />
        </div>
    </div>
</template>
