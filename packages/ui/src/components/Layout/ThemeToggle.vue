<script setup lang="ts">
/**
 * Light or dark, and nothing else.
 *
 * DELIBERATELY NOT THE APPEARANCE DRAWER. The full drawer - accent colour,
 * surface tint, density, sidebar side, font size - belongs to a signed-in
 * account, because that is what those settings are saved against. Offering all
 * of it before sign-in promises a personalisation that has nowhere to live: the
 * choices land in this browser's local storage and quietly disappear the moment
 * someone signs in on a different machine, which reads as the panel forgetting
 * what they told it.
 *
 * Light-versus-dark is the exception, and the reason is physical rather than
 * organisational. Somebody on a dark-adapted screen at night should not have to
 * be blinded by a sign-in form before they are allowed to change it.
 *
 * TWO STATES, AND THE PANEL STARTS ON THE FIRST. It used to default to
 * `system`, which meant the appearance was decided by the laptop rather than by
 * anybody - the same account looked different on two machines. Light is now the
 * default everywhere and dark is a choice; this button is where that choice is
 * made before there is an account to save it against.
 */
import { computed } from 'vue'
import { useAppearance } from '../../composables/useAppearance'

const { appearance, set } = useAppearance()

/*
 * THE PREFERENCE IS NOW THE ANSWER. While `system` existed the stored theme
 * said nothing about what was actually on screen, so this had to consult
 * `matchMedia` to avoid offering "switch to dark" on a page that was already
 * dark. There are two themes and both are chosen, so there is nothing to
 * resolve.
 */
const isDarkNow = computed(() => appearance.value.theme === 'dark')

function toggle() {
    set({ theme: isDarkNow.value ? 'light' : 'dark' })
}
</script>

<template>
    <button
        type="button"
        class="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors"
        :aria-label="isDarkNow ? 'Switch to light theme' : 'Switch to dark theme'"
        :title="isDarkNow ? 'Light theme' : 'Dark theme'"
        @click="toggle"
    >
        <svg
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
        >
            <!-- The icon shows what you would GET, not what you have: a sun on
                 a dark page reads as "make it light". -->
            <template v-if="isDarkNow">
                <circle cx="12" cy="12" r="4" />
                <path
                    d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                />
            </template>
            <template v-else>
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            </template>
        </svg>
    </button>
</template>
