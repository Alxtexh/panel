<script setup lang="ts">
/**
 * The floating "Unsaved changes" bar.
 *
 * PINNED TO THE MAIN CONTENT COLUMN (`#pk-main`), not the viewport. Teleporting
 * to `body` with `fixed inset-x-0` spanned the full screen, painted over the
 * sidebar, and read as a too-long strip. The shell scrollport is a fixed
 * containing block (`transform` on `#pk-main`), so `fixed inset-x-0` here only
 * covers the pane to the right of the rail. Inner chrome stays on FORM_MEASURE
 * (max-w-7xl), left-aligned like the fields, with PAGE_SHELL_COMPACT padding.
 *
 * Outside a panel shell (tests, rare host pages) Teleport is disabled and the
 * bar sticks at the bottom of its in-tree parent instead.
 *
 * IT DOES NOT FETCH: it emits `save` and `cancel`, and the page owns both.
 * Dirtiness belongs to the form, not to a bar that draws it.
 *
 * `pointer-events-none` on the positioning wrapper keeps the strip either side
 * of the bar clickable, so it does not become an invisible barrier across the
 * page.
 */
import { computed, onMounted, ref } from 'vue'
import { FORM_MEASURE } from '../../lib/pageShell'

withDefaults(
    defineProps<{
        show: boolean
        processing?: boolean
        message?: string
        saveLabel?: string
        cancelLabel?: string
        discardLabel?: string
    }>(),
    {
        processing: false,
        message: 'Unsaved changes',
        saveLabel: 'Save',
        cancelLabel: 'Cancel',
    },
)

defineEmits<{ (e: 'save'): void; (e: 'cancel'): void; (e: 'discard'): void }>()

const shellReady = ref(false)

onMounted(() => {
    shellReady.value = Boolean(document.getElementById('pk-main'))
})

const teleportTo = computed(() => (shellReady.value ? '#pk-main' : 'body'))
const teleportDisabled = computed(() => !shellReady.value)

const frameClass = computed(() =>
    shellReady.value
        ? 'pointer-events-none fixed inset-x-0 bottom-0 z-30 px-3 pb-3 sm:px-4 sm:pb-4'
        : 'pointer-events-none sticky bottom-0 z-30 px-3 pb-3 sm:px-4 sm:pb-4',
)
</script>

<template>
    <Teleport :to="teleportTo" :disabled="teleportDisabled">
        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-3 opacity-0"
            leave-active-class="transition duration-150 ease-in"
            leave-to-class="translate-y-3 opacity-0"
        >
            <div
                v-if="show"
                :class="frameClass"
                role="status"
                aria-live="polite"
                data-slot="unsaved-bar"
            >
                <div
                    :class="[
                        FORM_MEASURE,
                        'pointer-events-auto flex items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10',
                    ]"
                >
                    <span class="text-amber-600 dark:text-amber-400" aria-hidden="true">
                        <svg
                            viewBox="0 0 24 24"
                            class="size-4"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 8v4M12 16h.01" />
                        </svg>
                    </span>

                    <span class="min-w-0 flex-1 truncate text-sm font-medium">{{ message }}</span>

                    <button
                        v-if="discardLabel"
                        type="button"
                        class="hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50"
                        :disabled="processing"
                        @click="$emit('discard')"
                    >
                        {{ discardLabel }}
                    </button>

                    <button
                        type="button"
                        class="bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50"
                        :disabled="processing"
                        @click="$emit('cancel')"
                    >
                        {{ cancelLabel }}
                    </button>

                    <button
                        type="button"
                        class="bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
                        :disabled="processing"
                        @click="$emit('save')"
                    >
                        {{ processing ? 'Saving…' : saveLabel }}
                    </button>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
