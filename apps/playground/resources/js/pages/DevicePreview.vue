<script setup lang="ts">
/**
 * The real system, in a phone-shaped viewport.
 *
 * THE PHONE HANDLES ITS OWN NAVIGATION. There is no page picker out here, and
 * the frame does not strip anything: it loads the panel and you move around
 * inside it exactly as somebody on a phone would - tap the menu, open Clients,
 * open a record. A picker outside the frame was answering the wrong question,
 * because how the navigation behaves at 390px is most of what there is to look
 * at.
 *
 * IT IS AN ORDINARY PANEL PAGE. An earlier version stripped the panel's own
 * chrome on the theory that two sidebars on one screen compete - which was
 * solving a problem nobody had, and cost the page its navigation and its place
 * in the panel. The frame is a thing ON a page, not a replacement for one.
 *
 * AN IFRAME, AND THAT IS THE POINT. Scaling a div with `transform` looks similar
 * and lies: media queries still fire against the OUTER window, so `sm:` resolves
 * against the desktop width and the "phone" shows a desktop layout at 40% size.
 * An iframe has its own window, so `@media (max-width: 640px)` means what it
 * says - and the sidebar inside it collapses because it genuinely is narrow.
 */
import AppLayout from '@/layouts/AppLayout.vue'
import { PkDeviceFrame } from '@panelkit/ui'
import { Head } from '@inertiajs/vue3'
import { computed, ref } from 'vue'

defineOptions({ layout: AppLayout })

/**
 * Real logical viewports, not round numbers.
 *
 * 375×667 is an iPhone SE; 390×844 is the 12 through 14. Using 400 because it is
 * tidy would mean testing a width no device has - and the interesting breakages
 * live at 375, which is the narrowest anybody still supports.
 */
const DEVICES = [
    { id: 'iphone-se', label: 'iPhone SE', width: 375, height: 667, notch: false },
    { id: 'iphone-13', label: 'iPhone 13', width: 390, height: 844, notch: true },
    { id: 'pixel-7', label: 'Pixel 7', width: 412, height: 915, notch: false },
    { id: 'ipad-mini', label: 'iPad mini', width: 744, height: 1000, notch: false },
]

const device = ref(DEVICES[1])
const landscape = ref(false)

const size = computed(() =>
    landscape.value
        ? { width: device.value.height, height: device.value.width }
        : { width: device.value.width, height: device.value.height },
)

/**
 * Changing the size builds a FRESH frame, and that also resets where you are.
 *
 * Resizing an existing iframe does not re-run its layout from scratch, so a page
 * that measured its width on mount keeps the old value and the preview quietly
 * lies. Losing your place is the honest cost of a measurement that is true.
 */
const frameKey = computed(() => `${device.value.id}-${landscape.value}`)
</script>

<template>
    <Head title="Device preview" />

    <div class="flex flex-col gap-4 p-4">
        <div>
            <h1 class="text-xl font-semibold">Device preview</h1>
            <p class="text-muted-foreground text-sm">
                The panel itself, at phone size. Navigate inside it.
            </p>
        </div>

        <div class="flex flex-wrap items-center gap-2">
            <div class="bg-muted/40 flex items-center gap-1 rounded-md p-1">
                <button
                    v-for="d in DEVICES"
                    :key="d.id"
                    type="button"
                    class="rounded px-2.5 py-1 text-xs transition-colors"
                    :class="
                        device.id === d.id
                            ? 'bg-background text-foreground font-medium shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                    "
                    @click="device = d"
                >
                    {{ d.label }}
                </button>
            </div>

            <button
                type="button"
                class="text-foreground hover:bg-accent rounded-md border px-2.5 py-1.5 text-xs transition-colors"
                @click="landscape = !landscape"
            >
                {{ landscape ? 'Portrait' : 'Landscape' }}
            </button>

            <span class="text-muted-foreground text-xs tabular-nums">
                {{ size.width }} × {{ size.height }}
            </span>
        </div>

        <div class="flex justify-center py-4">
            <PkDeviceFrame
            :width="size.width"
            :height="size.height"
            :notch="device.notch && !landscape"
        >
            <!--
                The panel itself, unmodified. Navigate inside it.
            -->
            <iframe
                :key="frameKey"
                src="/dashboard"
                class="size-full border-0 bg-white"
                title="The panel at phone size"
            />
            </PkDeviceFrame>
        </div>
    </div>
</template>
