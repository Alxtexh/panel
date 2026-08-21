<script setup lang="ts">
/**
 * Resource page identity: title + purpose, actions at the trailing edge.
 *
 * DESIGN_RULES rules 1 and 2: exactly two flex children (identity, actions),
 * primary last inside the actions slot. Title scale is deliberately larger than
 * section headings so the page names itself before the table or form does.
 */
defineProps<{
    title: string
    /** One sentence for what this screen is for (resource purpose, subtitle). */
    purpose?: string | null
}>()
</script>

<template>
    <header data-slot="page-header" class="flex flex-wrap items-start justify-between gap-3">
        <div class="min-w-0 space-y-1">
            <h1 class="text-2xl font-semibold tracking-tight">{{ title }}</h1>
            <p v-if="purpose" class="text-muted-foreground text-sm">{{ purpose }}</p>
        </div>

        <div v-if="$slots.actions" class="flex shrink-0 flex-wrap items-center gap-2">
            <slot name="actions" />
        </div>
    </header>
</template>
