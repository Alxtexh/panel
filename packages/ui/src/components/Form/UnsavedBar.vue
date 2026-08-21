<script setup lang="ts">
/**
 * The floating "Unsaved changes" bar.
 *
 * WHY THIS EXISTS ALONGSIDE THE BROWSER GUARDS. `beforeunload` and the
 * navigation confirm are both REACTIVE - they only speak up once the user is
 * already leaving, and by then the question ("save or lose it?") is being asked
 * at the worst possible moment. A persistent bar makes the state visible while
 * there is still nothing at stake, so the interruption is rarely reached at all.
 *
 * IT DOES NOT FETCH (§4 rule 2): it emits `save` and `cancel`, and the page owns
 * both. It also does not decide when it is shown - dirtiness belongs to the
 * form, not to a bar that draws it.
 *
 * THE SECONDARY ACTION IS CANCEL, NOT RESET, and the difference is what somebody
 * actually wants. "Reset" clears the form and leaves you sitting on it - which
 * on a CREATE page means staring at the empty fields you just emptied, and on an
 * edit page is a thing people ask for perhaps once. What somebody who has
 * decided against a form wants is to be somewhere else.
 *
 * It also stops the bar contradicting the form: the buttons at the foot of the
 * page are already Cancel and Save, and a floating bar offering Reset and Save
 * gave two different answers to "how do I get out of this".
 *
 * FIXED TO THE VIEWPORT, not to the end of the form. A long form scrolls the
 * save button off screen exactly when someone has made the most changes; the
 * whole point is that the controls stay reachable from wherever they are.
 * `pointer-events-none` on the positioning wrapper keeps the strip either side
 * of the bar clickable, so it does not become an invisible barrier across the
 * page.
 *
 * On desktop the bar left-aligns under FORM_MEASURE (max-w-5xl) rather than
 * floating as a centred toast pill, so it reads as part of the form chrome.
 */
withDefaults(
    defineProps<{
        show: boolean
        processing?: boolean
        message?: string
        saveLabel?: string
        cancelLabel?: string
        /*
         * OPT-IN, AND ABSENT MEANS ABSENT. Discard reverts in place; Cancel
         * leaves the page. They are different acts and a bar that offers both
         * unasked would put three buttons on every dirty form in every
         * consuming application. Set this to get the control.
         */
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
</script>

<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-3 opacity-0"
            leave-active-class="transition duration-150 ease-in"
            leave-to-class="translate-y-3 opacity-0"
        >
            <div
                v-if="show"
                class="pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-4 sm:px-6"
                role="status"
                aria-live="polite"
            >
                <div
                    class="pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10"
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
