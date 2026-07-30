<script setup lang="ts">
/**
 * One card around everything a table is - DESIGN_RULES rule 4.
 *
 * Tabs, toolbar (or the selection bar that replaces it), the rows and the
 * pagination used to render as four sibling cards with gaps between them,
 * each with its own border - so the controls read as separate widgets that
 * happened to be nearby rather than as parts of the object they act on.
 * This shell owns the ONE border, the rounding and the dividers; the bands
 * inside it own nothing but their content.
 *
 * THE ROWS BAND IS THE ONLY ONE THAT SCROLLS. The shell is a flex column
 * with the same hug-then-shrink sizing DataTable's root documents
 * (min-h-0 + shrink + grow-0): tabs, toolbar and pagination keep their
 * natural height, and the default slot - the table - shrinks and scrolls
 * when the page genuinely cannot hold it.
 *
 * SLOTS, NOT PROPS. The shell knows nothing about what a toolbar or a tab
 * strip is - Trash's list and a resource index share this frame while
 * filling it with entirely different controls.
 */
</script>

<template>
    <div
        class="bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-lg border"
    >
        <div v-if="$slots.tabs" class="shrink-0 border-b px-2 py-2">
            <slot name="tabs" />
        </div>

        <div v-if="$slots.toolbar" class="shrink-0 border-b px-2 py-2">
            <slot name="toolbar" />
        </div>

        <slot />

        <div v-if="$slots.pagination" class="shrink-0 border-t px-3 py-2">
            <slot name="pagination" />
        </div>
    </div>
</template>
