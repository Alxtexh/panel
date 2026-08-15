<script setup lang="ts">
/**
 * Draw a signature on the page and keep it as an image.
 *
 * A CONTRACT PREVIEW NEEDS A MARK, not a typed name. This is a canvas the
 * operator draws on, with clear and save — save emits a PNG data URL so the
 * page can store it locally or place it on a document. Nothing here talks to
 * an e-sign provider.
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import PkButton from './PkButton.vue'

const props = withDefaults(
    defineProps<{
        width?: number
        height?: number
        disabled?: boolean
        label?: string
    }>(),
    {
        width: 480,
        height: 160,
        disabled: false,
        label: 'Draw your signature',
    },
)

const emit = defineEmits<{
    save: [dataUrl: string]
    clear: []
}>()

const canvas = ref<HTMLCanvasElement | null>(null)
const drawing = ref(false)
let last: { x: number; y: number } | null = null

function context(): CanvasRenderingContext2D | null {
    return canvas.value?.getContext('2d') ?? null
}

function point(event: PointerEvent): { x: number; y: number } | null {
    const el = canvas.value

    if (!el) {
        return null
    }

    const box = el.getBoundingClientRect()
    const scaleX = el.width / box.width
    const scaleY = el.height / box.height

    return {
        x: (event.clientX - box.left) * scaleX,
        y: (event.clientY - box.top) * scaleY,
    }
}

function start(event: PointerEvent): void {
    if (props.disabled) {
        return
    }

    drawing.value = true
    last = point(event)
    canvas.value?.setPointerCapture(event.pointerId)
}

function move(event: PointerEvent): void {
    if (!drawing.value || props.disabled) {
        return
    }

    const ctx = context()
    const next = point(event)

    if (!ctx || !next || !last) {
        return
    }

    ctx.strokeStyle = '#111827'
    ctx.lineWidth = 2.4
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.beginPath()
    ctx.moveTo(last.x, last.y)
    ctx.lineTo(next.x, next.y)
    ctx.stroke()
    last = next
}

function end(): void {
    drawing.value = false
    last = null
}

function clear(): void {
    const el = canvas.value
    const ctx = context()

    if (!el || !ctx) {
        return
    }

    ctx.clearRect(0, 0, el.width, el.height)
    emit('clear')
}

function save(): void {
    const el = canvas.value

    if (!el) {
        return
    }

    emit('save', el.toDataURL('image/png'))
}

function fillWhite(): void {
    const el = canvas.value
    const ctx = context()

    if (!el || !ctx) {
        return
    }

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, el.width, el.height)
}

onMounted(fillWhite)

onBeforeUnmount(() => {
    drawing.value = false
})
</script>

<template>
    <div class="flex flex-col gap-2" data-slot="signature-pad">
        <p class="text-sm font-medium">{{ label }}</p>
        <canvas
            ref="canvas"
            :width="width"
            :height="height"
            class="bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border"
            :class="disabled ? 'pointer-events-none opacity-50' : ''"
            :aria-label="label"
            @pointerdown.prevent="start"
            @pointermove.prevent="move"
            @pointerup.prevent="end"
            @pointerleave.prevent="end"
        />
        <div class="flex items-center gap-2">
            <PkButton variant="outline" size="sm" :disabled="disabled" @click="clear">
                Clear
            </PkButton>
            <PkButton size="sm" :disabled="disabled" @click="save">Save signature</PkButton>
        </div>
    </div>
</template>
