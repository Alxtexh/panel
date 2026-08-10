<script setup lang="ts">
/**
 * A group's own DROPDOWNS - the one thing shared between the collapsible
 * accordion and the static section that both host `NavGroup.groups`, so the
 * toggle/chevron/collapsed-state markup exists once rather than twice.
 *
 * NOT USED BY DRILLDOWN. That mode replaces the whole sidebar body per level
 * instead of nesting one accordion inside another, so it walks `groups`
 * itself rather than through this component.
 */
import type { NavGroup } from '../../composables/usePanelNav'
import NavMain from './NavMain.vue'

defineProps<{
    groups: NavGroup[]
    /** The parent's own name, so a toggle key reads `'Screens/Errors'`. */
    parentName: string
    collapsed: Set<string>
}>()

const emit = defineEmits<{
    (e: 'toggle', key: string, collapsible: boolean): void
    (e: 'navigate'): void
}>()
</script>

<template>
    <div v-for="sub in groups" :key="sub.name" class="ml-4">
        <!-- A nested section: no icon, no chevron - see the parent heading's own note on why. -->
        <p
            v-if="!sub.collapsible"
            class="flex w-full items-center px-2 py-1 text-xs font-medium text-muted-foreground"
        >
            {{ sub.name }}
        </p>

        <button
            v-else
            type="button"
            class="flex w-full items-center gap-2 px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground"
            :aria-expanded="!collapsed.has(`${parentName}/${sub.name}`)"
            @click="emit('toggle', `${parentName}/${sub.name}`, sub.collapsible)"
        >
            <span class="flex-1 text-left">{{ sub.name }}</span>
            <svg
                viewBox="0 0 24 24"
                class="size-3 shrink-0 transition-transform"
                :class="collapsed.has(`${parentName}/${sub.name}`) ? '-rotate-90' : ''"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
            >
                <path d="m6 9 6 6 6-6" />
            </svg>
        </button>

        <NavMain
            v-if="!sub.collapsible || !collapsed.has(`${parentName}/${sub.name}`)"
            :items="sub.items"
            nested
            @navigate="emit('navigate')"
        />
    </div>
</template>
