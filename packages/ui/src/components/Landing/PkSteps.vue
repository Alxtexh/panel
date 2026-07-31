<script setup lang="ts">
/** How it works, numbered - the section that answers "what do I actually do". */
import PkSection from './PkSection.vue'
import PkSectionHeading from './PkSectionHeading.vue'

defineProps<{ title?: string; body?: string; items?: { title?: string; body?: string }[] }>()
</script>

<template>
    <PkSection>
        <div class="flex flex-col gap-10">
            <PkSectionHeading :title="title" :body="body" />

            <ol class="grid gap-6 md:grid-cols-3">
                <li v-for="(item, i) in items ?? []" :key="i" class="flex flex-col gap-2">
                    <span
                        class="flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
                    >
                        {{ i + 1 }}
                    </span>
                    <h3 class="text-sm font-semibold">{{ item.title }}</h3>
                    <p class="text-sm text-pretty text-muted-foreground">{{ item.body }}</p>
                </li>
            </ol>
        </div>
    </PkSection>
</template>
