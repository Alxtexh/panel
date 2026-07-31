<script setup lang="ts">
/** Several capabilities at a glance - the workhorse marketing section. */
import PkSection from './PkSection.vue'
import PkSectionHeading from './PkSectionHeading.vue'

defineProps<{
    title?: string
    body?: string
    items?: { title?: string; body?: string }[]
}>()
</script>

<template>
    <PkSection>
        <div class="flex flex-col gap-10">
            <PkSectionHeading :title="title" :body="body" />

            <ul class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <li
                    v-for="(item, i) in items ?? []"
                    :key="i"
                    class="flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
                >
                    <h3 class="text-sm font-semibold">{{ item.title }}</h3>
                    <p class="text-sm text-pretty text-muted-foreground">{{ item.body }}</p>
                </li>
            </ul>
        </div>
    </PkSection>
</template>
