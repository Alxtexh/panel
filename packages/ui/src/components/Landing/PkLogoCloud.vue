<script setup lang="ts">
/**
 * Who else uses this.
 *
 * NAMES RATHER THAN IMAGE FILES by default, because a logo wall is the section
 * most likely to be filled with placeholders somebody forgets to replace - and
 * a row of broken image icons is worse than no social proof at all.
 */
import PkSection from './PkSection.vue'

defineProps<{ title?: string; items?: { name?: string }[] }>()
</script>

<template>
    <PkSection muted>
        <div class="flex flex-col items-center gap-6">
            <p
                v-if="title"
                class="text-xs font-medium tracking-widest text-muted-foreground uppercase"
            >
                {{ title }}
            </p>

            <ul class="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                <li
                    v-for="(item, i) in items ?? []"
                    :key="i"
                    class="text-lg font-semibold text-muted-foreground/70"
                >
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </PkSection>
</template>
