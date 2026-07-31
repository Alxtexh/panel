<script setup lang="ts">
/**
 * Questions, answered.
 *
 * `<details>` RATHER THAN A SCRIPTED ACCORDION. It is open-able without
 * JavaScript, keyboard-operable for free, and findable by the browser's own
 * in-page search - which a div-with-a-click-handler is not, and an FAQ nobody
 * can Ctrl-F is an FAQ that answers nothing.
 */
import PkSection from './PkSection.vue'
import PkSectionHeading from './PkSectionHeading.vue'

defineProps<{ title?: string; body?: string; items?: { question?: string; answer?: string }[] }>()
</script>

<template>
    <PkSection narrow>
        <div class="flex flex-col gap-8">
            <PkSectionHeading :title="title" :body="body" />

            <div class="divide-y rounded-lg border">
                <details v-for="(item, i) in items ?? []" :key="i" class="group">
                    <summary
                        class="flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50"
                    >
                        {{ item.question }}
                        <span
                            class="text-muted-foreground transition-transform group-open:rotate-45"
                            aria-hidden="true"
                        >
                            +
                        </span>
                    </summary>
                    <p class="px-4 pb-4 text-sm text-pretty text-muted-foreground">
                        {{ item.answer }}
                    </p>
                </details>
            </div>
        </div>
    </PkSection>
</template>
