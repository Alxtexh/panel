<script setup lang="ts">
/**
 * The actions available on one record, in a single menu.
 *
 * REPLACES a 70-line block that lived inside the resource page. Being a page
 * fragment rather than a component meant relation panels, detail pages and
 * workspaces could not use it; each would have reimplemented it, and the third
 * copy is where they start behaving differently from each other.
 *
 * ONE SURFACE, AND EVERY ACTION APPEARS EXACTLY ONCE. There was previously a
 * second surface: two or three icon buttons rendered in the row, hidden below
 * `sm` and repeated inside this menu so a phone lost nothing. On a desktop that
 * showed View and Edit twice in the same row - one mechanism serving two
 * breakpoints, read by everyone as a duplicated control.
 *
 * FILAMENT DOES NOT DO THIS EITHER, which settled it: an action wrapped in an
 * `ActionGroup` renders only inside the dropdown, never also beside it. The
 * duplication was ours, not a convention we had inherited.
 *
 * THE COST IS REAL AND ACCEPTED. View and Edit are the actions an operator runs
 * all day, and they now cost two clicks rather than one. Bought back partly by
 * the row itself: right-click opens this menu at the pointer, and the primary
 * column still links straight to the record.
 *
 * DESTRUCTIVE ACTIONS ARE LAST AND SEPARATED. Refused server-side too - this is
 * the one place where making something harder to reach is the feature.
 */
import { computed, ref } from 'vue'
import { iconPath } from '../primitives/icons'
import PkDropdown from '../primitives/PkDropdown.vue'

export interface RecordActionItem {
    key: string
    label: string
    icon?: string
    destructive?: boolean
    confirmation?: string
    link?: boolean
    removesRow?: boolean
    /**
     * Fields to collect before running, sent WITH the action.
     *
     * The shape `SchemaNode` renders. Present only for a form action; the page
     * opens its own modal on it, so this component neither renders nor knows
     * about the dialog - it emits `run` exactly as before.
     */
    form?: { nodes: unknown[] }
    url?: string
    /** Filament's palette: primary | gray | success | warning | danger | info. */
    color?: string
}

export interface RecordActionGroup {
    label?: string
    icon?: string
    actions: RecordActionItem[]
}

const props = withDefaults(
    defineProps<{
        /** Already filtered server-side for this record and this user. */
        groups: RecordActionGroup[]
        /** What the record is called, for the menu heading and aria labels. */
        title: string
        /** Key of an action currently running, so its control can disable. */
        busy?: string | null
    }>(),
    { busy: null },
)

const emit = defineEmits<{
    (e: 'run', action: RecordActionItem): void
}>()

const menu = ref<InstanceType<typeof PkDropdown> | null>(null)
const items = ref<HTMLElement | null>(null)

const flat = computed(() => props.groups.flatMap((group) => group.actions))

/**
 * ONE FLAT LIST. Group headings used to render as uppercase labels above their
 * actions; on a six-item menu that was four lines of chrome for two words of
 * information, and it made a row menu look like a settings page. The grouping a
 * resource declares now survives only as ORDER and COLOUR, both of which cost
 * no vertical space.
 */
const ordinary = computed(() => flat.value.filter((a) => !a.destructive))

/** Still last, still separated - see the class note. */
const destructive = computed(() => flat.value.filter((a) => a.destructive))

/**
 * Colour is applied to the icon AND the label together.
 *
 * Tinting only the icon reads as decoration; tinting both reads as a category,
 * which is the job the headings used to do. `gray` is the muted default an
 * action gets when it declares nothing, so an undeclared action still looks
 * deliberate rather than unfinished.
 */
const TONES: Record<string, string> = {
    primary: 'text-primary',
    gray: 'text-foreground',
    success: 'text-emerald-600 dark:text-emerald-400',
    warning: 'text-amber-600 dark:text-amber-500',
    danger: 'text-destructive',
    info: 'text-sky-600 dark:text-sky-400',
}

function tone(action: RecordActionItem): string {
    return TONES[action.color ?? 'gray'] ?? TONES.gray
}

const isEmpty = computed(() => flat.value.length === 0)

function run(action: RecordActionItem) {
    emit('run', action)
}

function openContextMenu(event: MouseEvent) {
    if (isEmpty.value) {
        return
    }

    event.preventDefault()
    menu.value?.openAt(event.clientX, event.clientY)
}

/**
 * Arrow keys move between menu items.
 *
 * Tab alone is not enough for a menu: it walks the whole document, so pressing
 * it past the last item drops focus into the page behind an open overlay. This
 * keeps focus inside the list and wraps at both ends, which is what every
 * native menu does and what a screen-reader user expects from `role="menu"`.
 */
function onMenuKeydown(event: KeyboardEvent) {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
        return
    }

    const focusable = Array.from(
        items.value?.querySelectorAll<HTMLElement>('[data-menu-item]') ?? [],
    )

    if (focusable.length === 0) {
        return
    }

    event.preventDefault()

    const current = focusable.indexOf(document.activeElement as HTMLElement)
    const step = event.key === 'ArrowDown' ? 1 : -1
    // `+ length` because -1 % n is -1 in JS, which would skip the wrap.
    const next = (current + step + focusable.length) % focusable.length

    focusable[next]?.focus()
}

defineExpose({ openContextMenu })
</script>

<template>
    <div class="flex items-center justify-end">
        <PkDropdown v-if="!isEmpty" ref="menu">
            <template #trigger>
                <!--
                    A 32px TARGET WITH A VISIBLE RESTING STATE.

                    This was a 28px button in `text-muted-foreground`, which on a
                    white row is a grey glyph on grey and was reported as hard to
                    see and harder to hit. It is now the full row height's worth
                    of padding around the icon and sits at normal foreground
                    weight, so it reads as a control rather than as decoration.
                -->
                <button
                    type="button"
                    class="text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring inline-flex size-8 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:outline-none"
                    :aria-label="`Actions for ${title}`"
                    aria-haspopup="menu"
                >
                    <!--
                        VERTICAL dots, and an icon rather than the literal `⋯`
                        character - a text glyph picks up the page font and
                        renders at a different weight and baseline on every OS.
                    -->
                    <svg
                        class="size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        aria-hidden="true"
                    >
                        <path :d="iconPath('more-vertical')" />
                    </svg>
                </button>
            </template>

            <template #panel>
                <div ref="items" class="py-0.5" @keydown="onMenuKeydown">
                    <!--
                        NO RECORD TITLE HEADING. The menu opens from the row it
                        belongs to and closes on the next click; a name repeated
                        at the top was a line of chrome answering a question
                        nobody had. The aria-label on the trigger still names the
                        record for anyone who cannot see which row opened.
                    -->
                    <template v-for="action in ordinary" :key="action.key">
                        <a
                            v-if="action.link"
                            :href="action.url ?? '#'"
                            data-menu-item
                            role="menuitem"
                            class="hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none"
                            :class="tone(action)"
                        >
                            <svg
                                class="size-4 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <path :d="iconPath(action.icon)" />
                            </svg>
                            {{ action.label }}
                        </a>

                        <button
                            v-else
                            type="button"
                            data-menu-item
                            role="menuitem"
                            class="hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            :class="tone(action)"
                            :disabled="busy === action.key"
                            @click="run(action)"
                        >
                            <svg
                                class="size-4 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                                :class="busy === action.key && 'animate-pulse'"
                            >
                                <path :d="iconPath(action.icon)" />
                            </svg>
                            {{ action.label }}
                        </button>
                    </template>

                    <!-- Always last, always separated. -->
                    <div v-if="destructive.length" class="mt-0.5 border-t pt-0.5">
                        <button
                            v-for="action in destructive"
                            :key="action.key"
                            type="button"
                            data-menu-item
                            role="menuitem"
                            class="text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            :disabled="busy === action.key"
                            @click="run(action)"
                        >
                            <svg
                                class="size-4 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <path :d="iconPath(action.icon ?? 'trash')" />
                            </svg>
                            {{ action.label }}
                        </button>
                    </div>
                </div>
            </template>
        </PkDropdown>
    </div>
</template>
