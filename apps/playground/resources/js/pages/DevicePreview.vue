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
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

defineOptions({ layout: AppLayout })

/**
 * Real logical viewports, not round numbers.
 *
 * 375×667 is an iPhone SE; 390×844 is the 12 through 14. Using 400 because it is
 * tidy would mean testing a width no device has - and the interesting breakages
 * live at 375, which is the narrowest anybody still supports.
 */
const DEVICES = [
    { id: 'iphone-se', label: 'iPhone SE', width: 375, height: 667, notch: false, kind: 'phone' },
    { id: 'iphone-13', label: 'iPhone 13', width: 390, height: 844, notch: true, kind: 'phone' },
    { id: 'pixel-7', label: 'Pixel 7', width: 412, height: 915, notch: false, kind: 'phone' },
    { id: 'ipad-mini', label: 'iPad mini', width: 744, height: 1000, notch: false, kind: 'phone' },
    /*
     * THE WIDTHS THE PANEL IS ACTUALLY USED AT, and the reason they were missing
     * is the reason they matter. Every size above is narrower than the sidebar
     * plus a table, so the workbench could only ever show the collapsed layout -
     * and the layout an operator looks at all day, with the sidebar open beside
     * a wide table, was the one width nobody could check here.
     *
     * 1280×800 is the smallest laptop still sold and the first width where the
     * sidebar stays open; 1440×900 is the common 14-inch; 1680×1050 is where a
     * table stops needing horizontal scroll at all. Logical viewports, not panel
     * sizes - a 16-inch MacBook reports 1728, not 3456.
     */
    { id: 'laptop-13', label: '13" laptop', width: 1280, height: 800, notch: false, kind: 'laptop' },
    { id: 'laptop-14', label: '14" laptop', width: 1440, height: 900, notch: false, kind: 'laptop' },
    { id: 'laptop-16', label: '16" laptop', width: 1680, height: 1050, notch: false, kind: 'laptop' },
]

const device = ref(DEVICES[1])
const landscape = ref(false)

const isLaptop = computed(() => device.value.kind === 'laptop')

const size = computed(() =>
    /*
     * A LAPTOP DOES NOT ROTATE. Offering it would produce a 800x1280 "laptop",
     * which is not a device anybody has - and the orientation toggle stays
     * visible but disabled rather than vanishing, so the control does not move
     * under the cursor when the device changes.
     */
    landscape.value && !isLaptop.value
        ? { width: device.value.height, height: device.value.width }
        : { width: device.value.width, height: device.value.height },
)

/**
 * How much the frame has to shrink to fit on this screen.
 *
 * A 16-INCH LAPTOP IS WIDER THAN THE PAGE SHOWING IT, which is not a corner
 * case - it is every laptop size on any screen with the sidebar open. Without
 * this the frame simply overflowed: the right-hand third of the preview was
 * unreachable, and the panel's own layout is the thing being inspected.
 *
 * A CSS TRANSFORM, NOT A SMALLER IFRAME, and that distinction is the whole
 * point of the workbench. Scaling the element leaves the iframe's viewport at
 * 1680 logical pixels, so the page inside still lays out as it would on the
 * real machine and is merely drawn smaller. Setting the iframe to the available
 * width instead would render a 900px layout and label it a laptop, which is the
 * lie this screen exists to avoid.
 */
const available = ref(0)
const viewport = ref<HTMLElement | null>(null)

const scale = computed(() => {
    // The bezel and the base sit outside the declared width; 80px covers both
    // with room to breathe. Never magnify - a phone at 3x is not more useful.
    const needed = size.value.width + 80

    if (available.value === 0 || needed <= available.value) {
        return 1
    }

    return Math.max(0.25, available.value / needed)
})

let observer: ResizeObserver | null = null

onMounted(() => {
    if (!viewport.value) {
        return
    }

    observer = new ResizeObserver((entries) => {
        available.value = entries[0]?.contentRect.width ?? 0
    })

    observer.observe(viewport.value)
})

onBeforeUnmount(() => observer?.disconnect())

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
                The panel itself, at real device sizes. Navigate inside it.
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
                class="text-foreground hover:bg-accent rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:cursor-not-allowed disabled:opacity-40"
                :disabled="isLaptop"
                :title="isLaptop ? 'Laptops do not rotate' : undefined"
                @click="landscape = !landscape"
            >
                {{ landscape ? 'Portrait' : 'Landscape' }}
            </button>

            <span class="text-muted-foreground text-xs tabular-nums">
                {{ size.width }} × {{ size.height }}
                <!--
                    THE SCALE IS STATED, because a frame drawn at 55% with a
                    truthful pixel count beside it would otherwise read as a
                    measurement that does not match what is on screen.
                -->
                <template v-if="scale < 1"> · shown at {{ Math.round(scale * 100) }}%</template>
            </span>
        </div>

        <div ref="viewport" class="flex justify-center overflow-hidden py-4">
            <div
                class="origin-top transition-transform"
                :style="{ transform: `scale(${scale})` }"
            >
                <PkDeviceFrame
                    :width="size.width"
                    :height="size.height"
                    :notch="device.notch && !landscape"
                    :kind="device.kind as 'phone' | 'laptop'"
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
    </div>
</template>
