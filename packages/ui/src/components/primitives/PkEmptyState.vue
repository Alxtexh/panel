<script setup lang="ts">
/**
 * A deliberate empty surface: icon, title, description, optional actions.
 *
 * Plain muted text in a table cell reads as a missing load, not an empty
 * catalogue. This is the shared shape for "nothing here yet" and the compact
 * "nothing matches these filters" case, so every list speaks the same language.
 *
 * `#illustration` replaces the default icon circle when a screen wants a
 * custom drawing (SVG, photo, or kit art). Prefer the semantic `icon` prop for
 * ordinary empties; use the slot when the empty state is itself a product beat.
 */
import { iconPath } from './icons'
import { useSlots } from 'vue'

withDefaults(
    defineProps<{
        title: string
        description?: string
        /** Semantic icon name from the kit registry. */
        icon?: string
        /**
         * Filtered / compact empty: less vertical padding, smaller icon.
         * Use when the operator already has filters on and just needs a clear path.
         */
        compact?: boolean
    }>(),
    {
        icon: 'package',
        compact: false,
    },
)

const slots = useSlots()
</script>

<template>
    <div
        data-slot="empty-state"
        class="text-muted-foreground flex flex-col items-center justify-center text-center"
        :class="compact ? 'gap-2 px-4 py-8' : 'gap-3 px-6 py-12'"
        role="status"
    >
        <div
            v-if="slots.illustration"
            class="flex max-w-xs items-center justify-center"
            aria-hidden="true"
        >
            <slot name="illustration" />
        </div>
        <div
            v-else
            class="bg-muted text-muted-foreground flex items-center justify-center rounded-full"
            :class="compact ? 'size-10' : 'size-12'"
            aria-hidden="true"
        >
            <slot name="icon">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    :class="compact ? 'size-5' : 'size-6'"
                >
                    <path :d="iconPath(icon)" />
                </svg>
            </slot>
        </div>

        <div class="flex max-w-sm flex-col gap-1">
            <p class="text-foreground font-medium" :class="compact ? 'text-sm' : 'text-base'">
                {{ title }}
            </p>
            <p v-if="description" class="text-sm font-normal">{{ description }}</p>
        </div>

        <div v-if="$slots.actions" class="mt-1 flex flex-wrap items-center justify-center gap-2">
            <slot name="actions" />
        </div>
    </div>
</template>
