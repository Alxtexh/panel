<script setup lang="ts">
/**
 * Catches a render error from its children and shows a small failure in place.
 *
 * THIS EXISTS BECAUSE OF A REAL OUTAGE, not as speculative hardening. A null
 * `auth.user` in the sidebar's user menu threw during render, Vue unmounted the
 * whole tree, and every 404 in the application rendered a BLANK WHITE PAGE - on
 * the one screen whose entire job is to cope when something has already gone
 * wrong. One component failed and the user got nothing.
 *
 * A DASHBOARD IS TWENTY INDEPENDENT QUERIES. The odds that all twenty always
 * succeed are not the odds this should be designed around: one widget whose
 * rollup is missing, whose tenant has no rows, or whose prop shape changed must
 * cost that widget's rectangle and nothing else.
 *
 * IT IS NOT A CATCH-ALL, and the limits matter more than the feature:
 *
 *   - `onErrorCaptured` sees errors thrown during RENDER, in lifecycle hooks
 *     and in watchers of its descendants. It does NOT see rejected promises
 *     from an event handler, so a failed fetch inside a click still needs its
 *     own handling. Believing otherwise is how a boundary becomes a way of not
 *     noticing errors.
 *   - It catches errors from CHILDREN. A throw in this component's own setup is
 *     its parent's problem, which is why the shell nests boundaries rather than
 *     wrapping everything in one.
 *
 * IT ALWAYS RE-THROWS TO THE CONSOLE. Rendering a tidy "could not load" and
 * swallowing the stack is exactly the silent-failure pattern the antipatterns
 * document is about: the screen looks deliberate, and nothing anywhere records
 * that a component died. `console.error` fires before the fallback renders, in
 * every environment.
 */
import { onErrorCaptured, ref } from 'vue'

const props = withDefaults(
    defineProps<{
        /** What failed, in the user's words. "Revenue chart", not "RevenueWidget". */
        label?: string
        /**
         * Render nothing at all instead of a message.
         *
         * For decorative regions where a failure notice is more disruptive than
         * the absence - a sparkline beside a number that still renders.
         */
        silent?: boolean
        /**
         * Stretch to the parent's height and pass that height to an only child.
         *
         * OPT-IN, because it is only ever right for a widget in a grid cell,
         * and it was previously unconditional. See the template note.
         */
        fill?: boolean
    }>(),
    { label: 'This section', silent: false, fill: false },
)

const emit = defineEmits<{
    (e: 'error', error: unknown): void
}>()

const failed = ref(false)
const message = ref<string | null>(null)

/**
 * A retry counter used as the slot's `key`.
 *
 * Incrementing it forces Vue to discard the failed subtree and build a fresh
 * one. Without a new key the same broken component instance is reused and
 * "Try again" does nothing - which is worse than having no button, because it
 * looks like the failure is permanent when it may have been a transient prop.
 */
const attempt = ref(0)

onErrorCaptured((error) => {
    // Always, before anything is decided about presentation.
    console.error(`[PkBoundary] ${props.label} failed to render`, error)

    failed.value = true
    message.value = error instanceof Error ? error.message : null

    emit('error', error)

    // Stop propagation: the point is that the parent tree survives.
    return false
})

function retry() {
    failed.value = false
    message.value = null
    attempt.value++
}

defineExpose({ retry })
</script>

<template>
    <!--
        ONE ROOT ELEMENT, ALWAYS.

        The first version rendered a fragment - the failure card OR the slot -
        and Vue cannot forward `class` to a fragment. So `lg:col-span-2` on a
        wide chart was accepted, silently dropped, and the chart quietly became
        half-width. It warned in the console and looked like a CSS mistake.

        A layout wrapper needs a box to be. This also restores exactly the
        structure this component replaced, which was a plain `<div>` carrying
        the grid classes.

        `fill` because inserting this box between a grid and its child moved
        which element the grid stretches. With it, the wrapper fills the cell and
        passes that height on, so a row of cards stays level whether or not one
        of them is wrapped.

        IT IS OPT-IN, AND USED TO BE UNCONDITIONAL. The reasoning for always-on
        was that "where the parent has no height of its own - every non-grid use
        - h-full resolves to auto and nothing changes", and the premise is
        false: a FLEX COLUMN with a height is not a grid and does have one. The
        resource page is exactly that, so the wrapper stretched to the full
        column, the table inside it was forced to match as the only child, and a
        ten-row page left a large dead area between the last row and the
        pagination bar.

        Which is the same defect `DataTable` documents fixing in its own root -
        reintroduced one level up by a wrapper added for a different screen.
        That is the argument for opt-in: a layout default that is right for one
        caller silently damages every other, and the damage looks like a CSS
        mistake in the victim rather than in the wrapper.

        THE FILL APPLIES TO AN ONLY CHILD, and the qualifier is the fix for a
        bug this caused. It was `*:h-full`, which forces EVERY direct child to
        100% - correct for a dashboard widget, which is one element, and wrong
        the moment a boundary wraps a heading, a table and a pagination bar:
        each of the three took the full height, so a 26rem panel gave 133px to
        its title and 132px to a table that needed 350px.

        `:only-child` says what was actually meant - "if you are the single
        thing in here, fill it" - and leaves a composed panel to lay itself out.
    -->
    <div :class="fill ? 'h-full [&>*:only-child]:h-full' : undefined">
        <div
            v-if="failed && !silent"
            class="border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
        >
            <div class="flex items-start gap-3">
                <svg
                    class="text-destructive mt-0.5 size-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                >
                    <path
                        d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
                    />
                </svg>

                <div class="min-w-0 flex-1">
                    <p class="text-foreground text-sm font-medium">
                        {{ label }} could not be displayed
                    </p>

                    <!--
                    The message is shown because hiding it helps nobody: the
                    person who can report this usefully is the one looking at
                    the screen, and "something went wrong" is not reportable.
                -->
                    <p v-if="message" class="text-muted-foreground mt-0.5 truncate text-xs">
                        {{ message }}
                    </p>

                    <button
                        type="button"
                        class="text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors"
                        @click="retry"
                    >
                        <svg
                            class="size-3"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M21 2v6h-6M3.5 9a9 9 0 0 1 14.9-3.4L21 8" />
                        </svg>
                        Try again
                    </button>
                </div>
            </div>
        </div>

        <slot v-else-if="!failed" :key="attempt" />
    </div>
</template>
