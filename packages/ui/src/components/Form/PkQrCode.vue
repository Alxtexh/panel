<script setup lang="ts">
/**
 * QR code field. Draws via the `qrcode` package, bundled in kit dist.
 */
import { computed, onMounted, ref, watch } from 'vue'

defineOptions({ inheritAttrs: false })

interface QrSchema {
    key: string
    size?: number
    from?: string | null
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: QrSchema
        modelValue: unknown
        disabled?: boolean
        values?: Record<string, unknown>
    }>(),
    { disabled: false, values: () => ({}) },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

const canvas = ref<HTMLCanvasElement | null>(null)

const payload = computed(() => {
    if (props.field.from) {
        const sibling = props.values?.[props.field.from]

        return sibling == null ? '' : String(sibling)
    }

    return props.modelValue == null ? '' : String(props.modelValue)
})

const size = computed(() => props.field.size ?? 160)

async function draw(): Promise<void> {
    if (!canvas.value) {
        return
    }

    const text = payload.value

    if (text === '') {
        const ctx = canvas.value.getContext('2d')
        ctx?.clearRect(0, 0, size.value, size.value)

        return
    }

    const QR = await import('qrcode')
    await QR.toCanvas(canvas.value, text, {
        width: size.value,
        margin: 1,
        color: { dark: '#0f172a', light: '#ffffff' },
    })
}

onMounted(() => {
    void draw()
})

watch(payload, () => {
    void draw()
})
</script>

<template>
    <div class="flex flex-col gap-2">
        <canvas
            ref="canvas"
            class="border-input bg-background rounded-md border"
            :width="size"
            :height="size"
        />
        <input
            v-if="!field.from"
            type="text"
            class="border-input bg-background h-9 rounded-md border px-3 text-sm"
            :value="modelValue == null ? '' : String(modelValue)"
            :disabled="disabled"
            placeholder="QR payload"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
        <p v-else class="text-muted-foreground text-xs font-normal">From {{ field.from }}</p>
    </div>
</template>
