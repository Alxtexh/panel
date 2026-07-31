<script setup lang="ts">
/** The closing ask. One action, because this is the end of the argument. */
import PkSection from './PkSection.vue'

defineProps<{ title?: string; body?: string; label?: string; href?: string }>()
</script>

<template>
    <PkSection>
        <div
            class="flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center"
        >
            <h2 class="max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                {{ title }}
            </h2>
            <p v-if="body" class="max-w-xl text-pretty text-muted-foreground">{{ body }}</p>

            <a
                v-if="label"
                :href="href ?? '#'"
                class="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
                {{ label }}
            </a>
        </div>
    </PkSection>
</template>
