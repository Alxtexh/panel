<script setup lang="ts">
/**
 * A voucher code in its frame.
 *
 * THE SAME COMPONENT DRAWS THE OPTION AND THE DOCUMENT. The six tiles in the
 * designer's framing picker are this component at a smaller size, and so is the
 * thing that prints. That is not a tidiness argument: a picker that draws its
 * own approximation of each style is a picker that can be WRONG, and the way you
 * find out is a batch of two hundred vouchers that do not look like the one you
 * chose.
 *
 * THE STYLES ARE DEFINED HERE, IN VUE, and named semantically on the wire. PHP
 * sends `"ticket"`; what a ticket looks like is a decision that belongs where
 * Tailwind is looking, because a class name authored in PHP is one a CSS purge
 * can drop silently - which happened once already, and *partial* survival hid
 * it.
 *
 * `mono` IS NOT A COLOUR. It is what an operator chose when they said the
 * office prints in black and white, and the honest way to show that is to draw
 * the accent as black rather than to lighten it.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        code: string
        caption?: string
        style?: string
        accent?: string
        mono?: boolean
        /** Small enough for a picker tile; the document uses the default. */
        compact?: boolean
    }>(),
    { caption: '', style: 'dashed', accent: '#0f172a', mono: false, compact: false },
)

const ink = computed(() => (props.mono ? '#000000' : props.accent))

/**
 * Everything except the colour, which is an operator's value and has to be an
 * inline style - Tailwind never saw it and cannot have generated a class for it.
 */
const frame = computed(() => {
    switch (props.style) {
        case 'solid':
            return 'border-2 border-solid rounded-md'
        case 'ticket':
            /*
             * Notched at both ends, the way a torn-off stub looks - with a SOLID
             * border rather than a dashed one. It was dashed first, and in the
             * picker that made it indistinguishable from Dashed: at tile size
             * the notches are a couple of pixels and the border is the only
             * thing the eye actually reads. An option that cannot be told apart
             * from its neighbour defeats the entire point of drawing it.
             */
            return 'border-2 border-solid rounded-none [clip-path:polygon(0_14%,6%_0,94%_0,100%_14%,100%_86%,94%_100%,6%_100%,0_86%)]'
        case 'pill':
            return 'border rounded-full'
        case 'stamp':
            // A double rule, which is what a rubber stamp reads as on paper.
            return 'border-4 border-double rounded-sm'
        case 'minimal':
            // No frame at all: a rule under the code and nothing else.
            return 'border-0 border-b-2 rounded-none'
        case 'dashed':
        default:
            return 'border-2 border-dashed rounded-md'
    }
})
</script>

<template>
    <div class="flex flex-col items-center gap-1 text-center">
        <!--
            `whitespace-nowrap`, and no letter-spacing when compact.

            A voucher code is one unbroken string - it is meaningless wrapped, and
            a picker tile showing "ABCD-" above "1234" is showing something that
            will never be printed. Tracking is what makes a code readable at full
            size and what makes it overflow at tile size, so it only applies to
            the real thing.
        -->
        <div
            class="inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums"
            :class="[
                frame,
                compact ? 'px-2 py-1 text-[10px]' : 'px-6 py-3 text-xl tracking-[0.2em]',
            ]"
            :style="{ borderColor: ink, color: ink }"
        >
            {{ code }}
        </div>

        <p v-if="caption && !compact" class="text-xs text-neutral-500">{{ caption }}</p>
    </div>
</template>
