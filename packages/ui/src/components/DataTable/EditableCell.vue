<script setup lang="ts">
/**
 * A cell an operator can write to without leaving the list.
 *
 * IT DOES NOT FETCH (§4 rule 2). It emits `change` with the new value; the page
 * makes the request, and hands back `busy` and, on failure, the original value.
 *
 * THE CELL SHOWS THE VALUE IT WAS GIVEN, and never remembers its own. The
 * tempting shortcut is a local ref seeded from the prop, updated on change -
 * which desynchronises the moment a write fails, because the control keeps
 * showing the value the server rejected. Rendering straight from the prop means
 * a rollback in the page is a rollback on screen, with nothing to keep in sync.
 *
 * BUSY DISABLES THE CONTROL rather than hiding it. A control that vanishes
 * mid-write shifts every column to its right, and the operator's next click
 * lands somewhere they did not aim at.
 *
 * The select's `min-w` matters more than it looks. The table lays out
 * automatically, so a column sizes to its widest content - and a short header
 * like "Status" wrapping a `w-full` select collapses the column until every row
 * reads "Susp▾". A floor width makes the column reserve room for the longest
 * option instead of clipping all of them.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        type: 'toggle' | 'select' | 'text'
        value: unknown
        /** For select: value => label. */
        options?: Record<string, string>
        busy?: boolean
        disabled?: boolean
        onLabel?: string | null
        offLabel?: string | null
        /** For text. */
        placeholder?: string | null
    }>(),
    {
        options: () => ({}),
        busy: false,
        disabled: false,
        onLabel: null,
        offLabel: null,
        placeholder: null,
    },
)

const emit = defineEmits<{ (e: 'change', value: unknown): void }>()

const on = computed(() => props.value === true || props.value === 1 || props.value === '1')

const locked = computed(() => props.busy || props.disabled)

const stateLabel = computed(() =>
    on.value ? (props.onLabel ?? 'Enabled') : (props.offLabel ?? 'Disabled'),
)

function toggle() {
    if (locked.value) {
        return
    }

    emit('change', !on.value)
}

function pick(event: Event) {
    const next = (event.target as HTMLSelectElement).value

    // A no-op selection would still cost a round trip and a row flash.
    if (next === String(props.value ?? '')) {
        return
    }

    emit('change', next)
}

/**
 * Commits on blur, never on keystroke - a cell edit is a full write (see
 * the class note), and a request per character would make typing a
 * reference code cost as many round trips as it has letters.
 */
function commit(event: Event) {
    const input = event.target as HTMLInputElement
    const next = input.value

    if (next === String(props.value ?? '')) {
        return
    }

    emit('change', next)
}

/**
 * Enter ends editing THROUGH `commit`, not beside it - blurring is what
 * triggers the `@blur` listener above, so there is exactly one path that
 * emits a change no matter which key or event closed the field. Calling
 * `commit` from here too would fire it twice for the same edit.
 */
function commitOnEnter(event: Event) {
    ;(event.target as HTMLInputElement).blur()
}

/** Discards what was typed and gives the field back the value it had. */
function cancel(event: Event) {
    const input = event.target as HTMLInputElement

    input.value = String(props.value ?? '')
    input.blur()
}
</script>

<template>
    <button
        v-if="type === 'toggle'"
        type="button"
        role="switch"
        :aria-checked="on"
        :aria-label="stateLabel"
        :title="stateLabel"
        :disabled="locked"
        class="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50"
        :class="on ? 'bg-primary' : 'bg-muted-foreground/30'"
        @click.stop="toggle"
    >
        <span
            class="bg-background size-4 rounded-full shadow-sm transition-transform"
            :class="on ? 'translate-x-4.5' : 'translate-x-0.5'"
        />
    </button>

    <input
        v-else-if="type === 'text'"
        type="text"
        class="bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50"
        :value="String(value ?? '')"
        :placeholder="placeholder ?? undefined"
        :disabled="locked"
        @click.stop
        @blur="commit"
        @keydown.enter="commitOnEnter"
        @keydown.esc="cancel"
    />

    <select
        v-else
        class="bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50"
        :value="String(value ?? '')"
        :disabled="locked"
        @click.stop
        @change="pick"
    >
        <option v-for="(label, key) in options" :key="key" :value="key">
            {{ label }}
        </option>
    </select>
</template>
