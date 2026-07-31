<script setup lang="ts">
/**
 * A stored colour, shown as the colour - roadmap 4.6.
 *
 * THE SWATCH IS INLINE STYLE, and it is the one place in this codebase where
 * that is right. Every other colour in the panel is a design token, chosen by
 * the theme; this one is DATA - a value somebody typed into a record - so it
 * cannot be a class, and a `style` binding is the honest way to say so.
 *
 * THE VALUE IS VALIDATED BEFORE IT IS USED. A `style` binding built from an
 * unchecked column is a way to put arbitrary CSS on the page; only strings
 * that look like a colour reach it, and anything else renders as absent.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        value?: string | null
        /** Show the code beside the swatch. False for decoration-only columns. */
        showValue?: boolean
    }>(),
    { value: null, showValue: true },
)

/**
 * Hex (`#abc`, `#aabbcc`, `#aabbccdd`) or a plain CSS colour NAME. Nothing
 * else - not `rgb()`, not `var()`, not a whole declaration - because the
 * value is interpolated into a style attribute and a permissive test here
 * is an injection point rather than a convenience.
 */
const SAFE = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i

const colour = computed(() => {
    const raw = (props.value ?? '').trim()

    return SAFE.test(raw) ? raw : null
})
</script>

<template>
    <!--
        NOTHING, NOT BLACK, when there is no colour. "#000" and "nobody has
        set this yet" are different facts about a record, and a cell that
        renders them identically lies about the unfinished one.
    -->
    <span v-if="colour === null" class="text-muted-foreground">-</span>

    <span v-else class="inline-flex items-center gap-2">
        <span
            class="size-4 shrink-0 rounded border"
            :style="{ backgroundColor: colour }"
            aria-hidden="true"
        />
        <span v-if="showValue" class="font-mono text-xs">{{ colour }}</span>
        <span v-else class="sr-only">{{ colour }}</span>
    </span>
</template>
