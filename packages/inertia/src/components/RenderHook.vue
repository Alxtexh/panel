<script setup lang="ts">
/**
 * Where a plugin's markup actually appears - roadmap 4.4.
 *
 * ONE COMPONENT, DROPPED AT EACH NAMED POSITION. The page says "anything for
 * `list.before-table` goes here" and knows nothing else: not which plugins
 * are installed, not what they render, not whether any are. That ignorance
 * is the point - a screen that had to know its plugins is a screen every
 * plugin has to be added to.
 *
 * AN UNRESOLVED NAME RENDERS NOTHING, silently. It is markup, not a feature:
 * a plugin whose component the application never registered should leave the
 * operator's screen exactly as it was, rather than replacing it with an
 * error about somebody else's package.
 */
import { computed } from 'vue'
import { resolveRenderHookComponent } from './renderHookRegistry'

const props = defineProps<{
    /** The position this instance stands at, e.g. `list.before-table`. */
    position: string
    /** Every hook the server sent for this screen, at every position. */
    hooks?: { position: string; component: string; props: Record<string, unknown> }[]
}>()

const mine = computed(() =>
    (props.hooks ?? [])
        .filter((hook) => hook.position === props.position)
        .map((hook) => ({ ...hook, resolved: resolveRenderHookComponent(hook.component) }))
        .filter((hook) => hook.resolved !== undefined),
)
</script>

<template>
    <component
        :is="hook.resolved"
        v-for="(hook, i) in mine"
        :key="`${hook.component}-${i}`"
        v-bind="hook.props"
    />
</template>
