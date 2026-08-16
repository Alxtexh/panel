<script setup lang="ts">
/**
 * Site header chrome from shadcn dashboard-01: SidebarTrigger, a leading
 * slot (breadcrumbs or a title), and a trailing slot. No product widgets.
 *
 * PROPS-IN. AppSidebarHeader is Inertia-bound (page breadcrumbs, bell,
 * appearance). This piece is usable from `@alxtexh-enterprise/panel` in any
 * shell that already has a SidebarProvider.
 */
import type { HTMLAttributes } from 'vue'
import { cn } from '../../lib/cn'
import Separator from '../shadcn/separator/Separator.vue'
import { SidebarTrigger } from '../shadcn/sidebar'

const props = withDefaults(
    defineProps<{
        class?: HTMLAttributes['class']
        /**
         * Reverse the row when the sidebar sits on the right, so the trigger
         * stays next to the rail.
         */
        mirrored?: boolean
    }>(),
    {
        mirrored: false,
    },
)

defineSlots<{
    /** Breadcrumbs, a heading, a search. */
    default?(): unknown
    /** Trailing controls: actions, appearance, an account menu. */
    trailing?(): unknown
}>()
</script>

<template>
    <header
        data-slot="site-header"
        :class="
            cn(
                'flex h-16 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border/70 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 sm:px-6 md:px-4',
                props.mirrored ? 'flex-row-reverse' : '',
                props.class,
            )
        "
    >
        <div
            class="flex min-w-0 items-center gap-2"
            :class="props.mirrored ? 'flex-row-reverse' : ''"
        >
            <SidebarTrigger :class="props.mirrored ? '-mr-1' : '-ml-1'" />
            <Separator orientation="vertical" class="mx-2 data-[orientation=vertical]:h-4" />
            <slot />
        </div>

        <div
            v-if="$slots.trailing"
            class="flex items-center gap-2"
            :class="props.mirrored ? 'flex-row-reverse' : ''"
        >
            <slot name="trailing" />
        </div>
    </header>
</template>
