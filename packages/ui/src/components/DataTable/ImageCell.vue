<script setup lang="ts">
/**
 * An avatar or logo in a cell.
 *
 * THE URL COMES FROM THE DATABASE, so the scheme is checked before it is bound.
 * Only http, https and protocol-relative URLs render; anything else - most
 * pointedly `javascript:` - falls through to initials. A `javascript:` URL in
 * an `img src` does not execute in any current browser, so this is defence in
 * depth rather than a live hole, and it is worth having because the value flows
 * onward: the same string would execute the moment someone renders it in an
 * `<a href>`.
 *
 * A BROKEN IMAGE ALSO FALLS BACK. `@error` catches the far more common failure
 * - a URL that was valid when it was stored and 404s now - so a dead link
 * shows initials instead of the browser's torn-page glyph.
 *
 * The box is a FIXED SIZE regardless of the image, so rows do not resize as
 * pictures load and the table does not shift under the cursor.
 */
import { computed, ref, watch } from 'vue'

const props = withDefaults(
    defineProps<{
        src?: unknown
        /** Supplies initials when there is no usable image. */
        fallbackText?: unknown
        rounded?: boolean
        size?: 'sm' | 'md' | 'lg'
        fallback?: 'initials' | 'icon' | 'none'
    }>(),
    { rounded: true, size: 'md', fallback: 'initials' },
)

const failed = ref(false)

// A new URL deserves a fresh attempt; otherwise one broken image poisons the
// cell for every row that later reuses this component instance.
watch(
    () => props.src,
    () => (failed.value = false),
)

const SIZES = { sm: 'size-6', md: 'size-8', lg: 'size-10' }

const url = computed(() => {
    const raw = typeof props.src === 'string' ? props.src.trim() : ''

    if (raw === '') {
        return null
    }

    return /^(https?:)?\/\//i.test(raw) ? raw : null
})

const initials = computed(() => {
    const text = typeof props.fallbackText === 'string' ? props.fallbackText.trim() : ''

    if (text === '') {
        return '?'
    }

    return text
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase() ?? '')
        .join('')
})
</script>

<template>
    <span
        class="bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium"
        :class="[SIZES[size], rounded ? 'rounded-full' : 'rounded']"
    >
        <img
            v-if="url && !failed"
            :src="url"
            alt=""
            loading="lazy"
            class="size-full object-cover"
            @error="failed = true"
        />
        <template v-else-if="fallback === 'initials'">{{ initials }}</template>
        <svg
            v-else-if="fallback === 'icon'"
            viewBox="0 0 24 24"
            class="size-1/2"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
        >
            <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" />
        </svg>
    </span>
</template>
