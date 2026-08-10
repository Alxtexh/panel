<script setup lang="ts">
/**
 * The appearance drawer.
 *
 * A slide-in panel rather than a dropdown, because there are now ten controls
 * including two colour palettes. A dropdown that tall stops being a menu and
 * becomes a cramped page - and a drawer lets you keep adjusting while watching
 * the panel behind it change, which is the entire point of putting appearance
 * in the chrome rather than in settings.
 *
 * Everything applies IMMEDIATELY. No Apply button: there is no request to batch,
 * and seeing the change is the feedback.
 */
import { computed, ref } from 'vue'
import { useAppearance, FONT_SIZE_MAX, FONT_SIZE_MIN } from '../../composables/useAppearance'
import type {
    CardStyle,
    ContentLayout,
    Density,
    MenuStyle,
    SidebarSide,
    Theme,
} from '../../composables/useAppearance'

const { appearance, set, reset, PRIMARY_COLORS, SURFACE_TINTS, RADIUS_OPTIONS } = useAppearance()

const open = ref(false)

/** The drawer takes the edge opposite the sidebar. */
const onLeft = computed(() => appearance.value.sidebarSide === 'right')

/*
 * NO "SYSTEM" ENTRY. It used to be here and was the default, so the panel's
 * appearance was decided by whatever the laptop happened to be set to - the
 * same account looked different on two machines and nobody had chosen either.
 * Light is now the default and dark is a deliberate choice.
 */
const themes: { value: Theme; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
]

/*
 * LABELLED "Table density" RATHER THAN "Density", because that is all it is.
 * `--pk-row-padding` is read by `.pk-row td` and nothing else, so on a
 * dashboard the control moves and the screen does not - which reads as broken
 * rather than as not applicable. Naming what it affects costs one word.
 */
const densities: { value: Density; label: string }[] = [
    { value: 'compact', label: 'Compact' },
    { value: 'comfortable', label: 'Comfortable' },
    { value: 'spacious', label: 'Spacious' },
]

const cardStyles: { value: CardStyle; label: string }[] = [
    { value: 'transparent', label: 'Transparent' },
    { value: 'filled', label: 'Filled' },
]

const sides: { value: SidebarSide; label: string }[] = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
    { value: 'horizontal', label: 'Top' },
]

const contentLayouts: { value: ContentLayout; label: string }[] = [
    { value: 'full', label: 'Full' },
    { value: 'centered', label: 'Centered' },
]

/**
 * "Vercel style" IS THE FAMILIAR NAME for this pattern, but this panel calls
 * out what it DOES rather than who else does it - the label should still make
 * sense to somebody who has never seen the thing it is named after.
 */
const menuStyles: { value: MenuStyle; label: string }[] = [
    { value: 'collapsible', label: 'Collapsible' },
    { value: 'drilldown', label: 'Drill-down' },
]

/**
 * Surface swatches preview the CARD colour, not the accent.
 *
 * Showing the tint at full chroma would misrepresent it - these are nearly-grey
 * by design, and a vivid swatch promises a colour the panel will never show.
 */
function surfaceSwatch(hue: number, chroma: number): string {
    return `oklch(0.72 ${chroma * 3} ${hue})`
}
</script>

<template>
    <button
        type="button"
        class="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors"
        aria-label="Appearance settings"
        title="Appearance"
        @click="open = true"
    >
        <!--
            A PALETTE, NOT A COG.

            This opens theme, colour and layout - an appearance drawer. A gear is
            the universal glyph for "application settings", and sitting next to
            the real settings control it read as a second one; people looked here
            for their account and profile. The icon should say what is behind it.
        -->
        <svg
            viewBox="0 0 24 24"
            class="size-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path
                d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"
            />
            <circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
            <circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
            <circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
    </button>

    <Teleport to="body">
        <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0"
            leave-active-class="transition duration-100 ease-in"
            leave-to-class="opacity-0"
        >
            <div v-if="open" class="fixed inset-0 z-50 bg-black/30" @click="open = false" />
        </Transition>

        <!--
            THE DRAWER OPENS ON THE SIDE THE SIDEBAR IS NOT.

            A panel that always slides in from the right lands ON TOP of a
            right-hand sidebar, covering the navigation while you adjust where
            the navigation should be. It also means the drawer flies in from the
            opposite end of the screen to the gear you just clicked, since the
            topbar mirrors too.

            Both the resting edge and the direction of travel have to flip
            together - an off-screen start of `-translate-x-full` with a
            `right-0` anchor animates in from the wrong side.
        -->
        <Transition
            :enter-active-class="'transition duration-200 ease-out'"
            :enter-from-class="onLeft ? '-translate-x-full' : 'translate-x-full'"
            :leave-active-class="'transition duration-150 ease-in'"
            :leave-to-class="onLeft ? '-translate-x-full' : 'translate-x-full'"
        >
            <aside
                v-if="open"
                class="bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl"
                :class="onLeft ? 'left-0 border-r' : 'right-0 border-l'"
                role="dialog"
                aria-label="Appearance settings"
            >
                <header class="flex items-center justify-between border-b px-4 py-3">
                    <h2 class="text-base font-semibold">Settings</h2>
                    <div class="flex items-center gap-2">
                        <button
                            class="text-muted-foreground text-xs hover:underline"
                            @click="reset"
                        >
                            Reset
                        </button>
                        <button
                            class="text-muted-foreground hover:text-foreground"
                            aria-label="Close"
                            @click="open = false"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                class="size-4"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                            >
                                <path d="M18 6 6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </header>

                <div class="flex flex-col gap-5 overflow-y-auto px-4 py-4">
                    <!-- Primary -->
                    <section class="flex flex-col gap-2">
                        <h3 class="text-sm font-semibold">Primary</h3>
                        <div class="grid grid-cols-8 gap-2">
                            <button
                                v-for="(color, key) in PRIMARY_COLORS"
                                :key="key"
                                type="button"
                                class="relative size-7 rounded-md transition-transform hover:scale-110"
                                :style="{ background: color.value }"
                                :title="color.label"
                                :aria-label="color.label"
                                :aria-pressed="appearance.primary === key"
                                @click="set({ primary: key as string })"
                            >
                                <svg
                                    v-if="appearance.primary === key"
                                    viewBox="0 0 24 24"
                                    class="absolute inset-0 m-auto size-4"
                                    :style="{ color: color.foreground }"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="3.5"
                                >
                                    <path d="m5 13 4 4L19 7" />
                                </svg>
                            </button>
                        </div>
                    </section>

                    <!-- Surface -->
                    <section class="flex flex-col gap-2">
                        <h3 class="text-sm font-semibold">Surface</h3>
                        <div class="grid grid-cols-8 gap-2">
                            <button
                                v-for="(tint, key) in SURFACE_TINTS"
                                :key="key"
                                type="button"
                                class="relative size-7 rounded-md border transition-transform hover:scale-110"
                                :style="{ background: surfaceSwatch(tint.hue, tint.chroma) }"
                                :title="tint.label"
                                :aria-label="tint.label"
                                :aria-pressed="appearance.surface === key"
                                @click="set({ surface: key as string })"
                            >
                                <svg
                                    v-if="appearance.surface === key"
                                    viewBox="0 0 24 24"
                                    class="absolute inset-0 m-auto size-4 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="3.5"
                                >
                                    <path d="m5 13 4 4L19 7" />
                                </svg>
                            </button>
                        </div>
                    </section>

                    <!-- Radius: fixed stops, not a slider - see RADIUS_OPTIONS. -->
                    <section class="flex flex-col gap-2">
                        <h3 class="text-sm font-semibold">Radius</h3>
                        <div class="bg-muted/50 flex gap-0.5 rounded-md p-0.5">
                            <button
                                v-for="value in RADIUS_OPTIONS"
                                :key="value"
                                type="button"
                                class="flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors"
                                :class="
                                    appearance.radius === value
                                        ? 'bg-background text-foreground font-medium shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground'
                                "
                                :aria-pressed="appearance.radius === value"
                                :aria-label="`${value}rem radius`"
                                @click="set({ radius: value })"
                            >
                                <span
                                    class="border-foreground/50 block size-4 border-2"
                                    :style="{ borderRadius: `${Math.min(value, 0.5)}rem` }"
                                />
                                {{ value }}
                            </button>
                        </div>
                    </section>

                    <!-- Segmented groups -->
                    <section
                        v-for="group in [
                            { label: 'Color scheme', key: 'theme', options: themes },
                            { label: 'Card style', key: 'cardStyle', options: cardStyles },
                            { label: 'Table density', key: 'density', options: densities },
                            { label: 'Sidebar', key: 'sidebarSide', options: sides },
                            { label: 'Content layout', key: 'contentLayout', options: contentLayouts },
                            { label: 'Menu style', key: 'menuStyle', options: menuStyles },
                        ]"
                        :key="group.key"
                        class="flex flex-col gap-2"
                    >
                        <h3 class="text-sm font-semibold">{{ group.label }}</h3>
                        <div class="bg-muted/50 flex gap-0.5 rounded-md p-0.5">
                            <button
                                v-for="opt in group.options"
                                :key="String(opt.value)"
                                type="button"
                                class="flex-1 rounded px-2 py-1.5 text-xs transition-colors"
                                :class="
                                    (appearance as any)[group.key] === opt.value
                                        ? 'bg-background text-foreground font-medium shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground'
                                "
                                @click="set({ [group.key]: opt.value } as any)"
                            >
                                {{ opt.label }}
                            </button>
                        </div>
                    </section>

                    <!-- Font size: a real value, not three names. -->
                    <section class="flex flex-col gap-2">
                        <div class="flex items-center justify-between">
                            <h3 class="text-sm font-semibold">Font size</h3>
                            <span class="text-muted-foreground text-xs tabular-nums"
                                >{{ appearance.fontSize }}px</span
                            >
                        </div>

                        <div class="flex items-center gap-2">
                            <button
                                type="button"
                                class="border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40"
                                :disabled="appearance.fontSize <= FONT_SIZE_MIN"
                                aria-label="Decrease font size"
                                @click="set({ fontSize: appearance.fontSize - 1 })"
                            >
                                −
                            </button>

                            <input
                                type="range"
                                class="accent-primary flex-1"
                                :min="FONT_SIZE_MIN"
                                :max="FONT_SIZE_MAX"
                                :value="appearance.fontSize"
                                aria-label="Font size in pixels"
                                @input="
                                    set({
                                        fontSize: Number(($event.target as HTMLInputElement).value),
                                    })
                                "
                            />

                            <button
                                type="button"
                                class="border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40"
                                :disabled="appearance.fontSize >= FONT_SIZE_MAX"
                                aria-label="Increase font size"
                                @click="set({ fontSize: appearance.fontSize + 1 })"
                            >
                                +
                            </button>
                        </div>
                    </section>
                </div>
            </aside>
        </Transition>
    </Teleport>
</template>
