<script setup lang="ts">
/**
 * A band of numbers.
 *
 * THE NUMBER LEADS AND THE LABEL FOLLOWS, because the figure is what stops
 * somebody scrolling and the label is what makes it mean anything. Anything
 * unmeasured does not belong here: a stats band of aspirations is the fastest
 * way to make every other number on the page look invented too.
 */
import PkSection from './PkSection.vue'
import PkSectionHeading from './PkSectionHeading.vue'

defineProps<{
    title?: string
    body?: string
    items?: { value?: string; label?: string }[]
}>()
</script>

<template>
    <PkSection muted>
        <div class="flex flex-col gap-10">
            <PkSectionHeading :title="title" :body="body" />

            <dl class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div
                    v-for="(item, i) in items ?? []"
                    :key="i"
                    class="flex flex-col items-center gap-1 text-center"
                >
                    <dt class="order-2 text-sm text-muted-foreground">{{ item.label }}</dt>
                    <dd class="order-1 text-3xl font-semibold tracking-tight sm:text-4xl">
                        {{ item.value }}
                    </dd>
                </div>
            </dl>
        </div>
    </PkSection>
</template>
