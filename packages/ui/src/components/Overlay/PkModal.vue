<script setup lang="ts">
/**
 * Modal dialog. Opens as pure local state — no network request (antipatterns §3.0.3).
 *
 * Focus is trapped and restored, Escape closes, and the backdrop closes on a
 * click that both started AND ended outside the panel. That last detail matters:
 * with a plain `@click.self`, selecting text inside the form and releasing
 * outside it closes the dialog and discards what you typed.
 */
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const props = withDefaults(
    defineProps<{ open: boolean; title: string; description?: string; busy?: boolean }>(),
    { busy: false },
)

const emit = defineEmits<{ (e: 'close'): void }>()

const panel = ref<HTMLElement | null>(null)
let restoreFocusTo: HTMLElement | null = null
/**
 * Tracks whether a press STARTED on the backdrop.
 *
 * A plain @click.self closes the dialog when a drag that began inside the form
 * (selecting text) happens to end outside it, discarding what was typed.
 */
const pressStartedOnBackdrop = ref(false)

function onBackdropDown(e: PointerEvent) {
    pressStartedOnBackdrop.value = e.target === e.currentTarget
}

function onBackdropUp(e: PointerEvent) {
    if (pressStartedOnBackdrop.value && e.target === e.currentTarget && !props.busy) {
        emit('close')
    }
    pressStartedOnBackdrop.value = false
}

function onKeydown(e: KeyboardEvent) {
    if (!props.open) return

    if (e.key === 'Escape' && !props.busy) {
        e.stopPropagation()
        emit('close')
        return
    }

    if (e.key !== 'Tab' || !panel.value) return

    const focusable = panel.value.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )

    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    // Wrap, so Tab cannot walk out of the dialog into the page behind it.
    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
    }
}

watch(
    () => props.open,
    (open) => {
        if (open) {
            restoreFocusTo = document.activeElement as HTMLElement | null
            document.addEventListener('keydown', onKeydown)
            nextTick(() => panel.value?.querySelector<HTMLElement>('input, select, textarea, button')?.focus())
        } else {
            document.removeEventListener('keydown', onKeydown)
            // Returning focus to the trigger is what makes a modal usable by
            // keyboard at all; without it focus falls back to <body>.
            restoreFocusTo?.focus()
            restoreFocusTo = null
        }
    },
)

onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="opacity-0"
            leave-active-class="transition duration-75 ease-in"
            leave-to-class="opacity-0"
        >
            <div
                v-if="open"
                class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm"
                @pointerdown="onBackdropDown"
                @pointerup="onBackdropUp"
            >
                <div
                    ref="panel"
                    role="dialog"
                    aria-modal="true"
                    :aria-label="title"
                    class="bg-popover text-popover-foreground w-full max-w-lg rounded-xl border shadow-2xl"
                >
                    <div class="border-b px-5 py-4">
                        <h2 class="text-base font-semibold">{{ title }}</h2>
                        <p v-if="description" class="text-muted-foreground mt-0.5 text-sm">{{ description }}</p>
                    </div>

                    <div class="px-5 py-4">
                        <slot />
                    </div>

                    <div class="bg-muted/30 flex items-center justify-end gap-2 rounded-b-xl border-t px-5 py-3">
                        <slot name="footer" />
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
