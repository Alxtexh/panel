<script setup lang="ts">
/**
 * The appearance drawer.
 *
 * A slide-in panel rather than a dropdown, because there are now seven controls
 * including two colour palettes. A dropdown that tall stops being a menu and
 * becomes a cramped page — and a drawer lets you keep adjusting while watching
 * the panel behind it change, which is the entire point of putting appearance
 * in the chrome rather than in settings.
 *
 * Everything applies IMMEDIATELY. No Apply button: there is no request to batch,
 * and seeing the change is the feedback.
 */
import { ref } from 'vue'
import {
    useAppearance,
    FONT_SIZE_MAX,
    FONT_SIZE_MIN,
    type CardStyle,
    type Density,
    type SidebarSide,
    type Theme,
} from '../../composables/useAppearance'

const { appearance, set, reset, PRIMARY_COLORS, SURFACE_TINTS } = useAppearance()

const open = ref(false)

const themes: { value: Theme; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
]

const densities: { value: Density; label: string }[] = [
    { value: 'comfortable', label: 'Comfortable' },
    { value: 'compact', label: 'Compact' },
]

const cardStyles: { value: CardStyle; label: string }[] = [
    { value: 'transparent', label: 'Transparent' },
    { value: 'filled', label: 'Filled' },
]

const sides: { value: SidebarSide; label: string }[] = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
]

/**
 * Surface swatches preview the CARD colour, not the accent.
 *
 * Showing the tint at full chroma would misrepresent it — these are nearly-grey
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
        <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3" />
            <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
            />
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

        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-x-full"
            leave-active-class="transition duration-150 ease-in"
            leave-to-class="translate-x-full"
        >
            <aside
                v-if="open"
                class="bg-background fixed top-0 right-0 z-50 flex h-full w-80 flex-col border-l shadow-2xl"
                role="dialog"
                aria-label="Appearance settings"
            >
                <header class="flex items-center justify-between border-b px-4 py-3">
                    <h2 class="text-base font-semibold">Settings</h2>
                    <div class="flex items-center gap-2">
                        <button class="text-muted-foreground text-xs hover:underline" @click="reset">Reset</button>
                        <button class="text-muted-foreground hover:text-foreground" aria-label="Close" @click="open = false">
                            <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2.5">
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

                    <!-- Segmented groups -->
                    <section
                        v-for="group in [
                            { label: 'Color scheme', key: 'theme', options: themes },
                            { label: 'Card style', key: 'cardStyle', options: cardStyles },
                            { label: 'Density', key: 'density', options: densities },
                            { label: 'Sidebar', key: 'sidebarSide', options: sides },
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
                            <span class="text-muted-foreground text-xs tabular-nums">{{ appearance.fontSize }}px</span>
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
                                @input="set({ fontSize: Number(($event.target as HTMLInputElement).value) })"
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
