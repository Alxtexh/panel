<script setup lang="ts">
/**
 * A blog / news strip for marketing landings.
 *
 * LINKS ONLY. The kit does not ship a CMS for posts; hosts point each card at
 * their own article URL (or leave href empty for a static tease).
 */
import PkSection from './PkSection.vue'
import PkSectionHeading from './PkSectionHeading.vue'

defineProps<{
    title?: string
    body?: string
    items?: { title?: string; body?: string; href?: string; meta?: string }[]
}>()
</script>

<template>
    <PkSection>
        <div class="flex flex-col gap-10">
            <PkSectionHeading :title="title" :body="body" />

            <ul class="grid gap-4 md:grid-cols-3">
                <li v-for="(item, i) in items ?? []" :key="i">
                    <component
                        :is="item.href ? 'a' : 'div'"
                        :href="item.href || undefined"
                        class="flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
                    >
                        <p v-if="item.meta" class="text-xs font-medium text-muted-foreground">
                            {{ item.meta }}
                        </p>
                        <h3 class="text-sm font-semibold text-balance">{{ item.title }}</h3>
                        <p v-if="item.body" class="text-pretty text-sm text-muted-foreground">
                            {{ item.body }}
                        </p>
                    </component>
                </li>
            </ul>
        </div>
    </PkSection>
</template>
