<script setup lang="ts">
/**
 * A bento grid: cells of deliberately unequal weight.
 *
 * WHY NOT A FEATURE GRID. Nine identical cards say every capability matters
 * equally, which is never true and reads as a list somebody wrote rather than a
 * product somebody designed. A bento gives the two or three things that
 * actually sell the product the room to say so, and lets the rest be small.
 *
 * THE SIZE IS AUTHORED, NOT COMPUTED. Each cell declares `span` - wide, tall or
 * neither - because which feature deserves the big tile is an editorial
 * judgement, and inferring it from text length would make the layout jump every
 * time somebody fixed a typo.
 */
import PkSection from './PkSection.vue'
import PkSectionHeading from './PkSectionHeading.vue'
import PkTiltCard from './PkTiltCard.vue'

defineProps<{
    title?: string
    body?: string
    items?: { title?: string; body?: string; span?: string; accent?: boolean }[]
}>()

/** Two columns wide, two rows tall, or one of each. */
function spanClass(span?: string): string {
    return (
        {
            wide: 'sm:col-span-2',
            tall: 'sm:row-span-2',
            large: 'sm:col-span-2 sm:row-span-2',
        }[span ?? ''] ?? ''
    )
}
</script>

<template>
    <PkSection>
        <div class="flex flex-col gap-10">
            <PkSectionHeading :title="title" :body="body" />

            <div class="grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3">
                <PkTiltCard v-for="(item, i) in items ?? []" :key="i" :class="spanClass(item.span)">
                    <div
                        class="flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg"
                        :class="
                            item.accent
                                ? 'bg-primary/5 border-primary/30 dark:bg-primary/10'
                                : 'bg-card'
                        "
                    >
                        <h3 class="text-base font-semibold">{{ item.title }}</h3>
                        <p class="text-sm text-pretty text-muted-foreground">{{ item.body }}</p>
                    </div>
                </PkTiltCard>
            </div>
        </div>
    </PkSection>
</template>
