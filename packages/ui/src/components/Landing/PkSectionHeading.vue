<script setup lang="ts">
/**
 * A section's title and its one supporting line.
 *
 * THE EYEBROW IS OPTIONAL AND THE BODY IS ONE SENTENCE, because a landing
 * section that needs a paragraph to explain its own heading is a section whose
 * heading is wrong. Centring is the default for marketing bands and the
 * exception for anything a person reads left to right, so it is a prop.
 */
withDefaults(
    defineProps<{
        eyebrow?: string
        title?: string
        body?: string
        centred?: boolean
    }>(),
    { centred: true },
)
</script>

<template>
    <div
        v-if="title || body || eyebrow"
        class="flex flex-col gap-3"
        :class="centred ? 'items-center text-center' : ''"
    >
        <p v-if="eyebrow" class="text-xs font-semibold tracking-widest text-primary uppercase">
            {{ eyebrow }}
        </p>

        <h2 v-if="title" class="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {{ title }}
        </h2>

        <p v-if="body" class="max-w-2xl text-pretty text-muted-foreground">
            {{ body }}
        </p>
    </div>
</template>
