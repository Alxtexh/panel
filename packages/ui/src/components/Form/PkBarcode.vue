<script setup lang="ts">
/**
 * Barcode field. Draws via JsBarcode, bundled in kit dist and lazy-loaded.
 */
import { computed, onMounted, ref, watch } from 'vue'

defineOptions({ inheritAttrs: false })

interface BarcodeSchema {
    key: string
    format?: string
    height?: number
    width?: number
    displayValue?: boolean
    from?: string | null
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: BarcodeSchema
        modelValue: unknown
        disabled?: boolean
        values?: Record<string, unknown>
    }>(),
    { disabled: false, values: () => ({}) },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

const svg = ref<SVGSVGElement | null>(null)
const error = ref<string | null>(null)

const payload = computed(() => {
    if (props.field.from) {
        const sibling = props.values?.[props.field.from]

        return sibling == null ? '' : String(sibling)
    }

    return props.modelValue == null ? '' : String(props.modelValue)
})

const format = computed(() => (props.field.format ?? 'CODE128').toUpperCase())

async function draw(): Promise<void> {
    if (!svg.value) {
        return
    }

    const text = payload.value.trim()
    error.value = null

    while (svg.value.firstChild) {
        svg.value.removeChild(svg.value.firstChild)
    }

    if (text === '') {
        return
    }

    try {
        const mod = await import('jsbarcode')
        const JsBarcode = mod.default as (
            el: string | HTMLElement | SVGElement,
            value: string,
            options?: Record<string, unknown>,
        ) => void

        JsBarcode(svg.value, text, {
            format: format.value,
            height: props.field.height ?? 80,
            width: props.field.width ?? 2,
            displayValue: props.field.displayValue !== false,
            margin: 8,
            background: '#ffffff',
            lineColor: '#0f172a',
            fontSize: 14,
        })
    } catch (e) {
        error.value = e instanceof Error ? e.message : 'Could not render barcode'
    }
}

onMounted(() => {
    void draw()
})

watch([payload, format], () => {
    void draw()
})
</script>

<template>
    <div class="flex flex-col gap-2">
        <div
            class="border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2"
        >
            <svg ref="svg" class="max-w-full" role="img" :aria-label="`Barcode ${format}`" />
        </div>
        <p v-if="error" class="text-destructive text-xs">{{ error }}</p>
        <input
            v-if="!field.from"
            type="text"
            class="border-input bg-background h-9 rounded-md border px-3 text-sm"
            :value="modelValue == null ? '' : String(modelValue)"
            :disabled="disabled"
            placeholder="Barcode value"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
        <p v-else class="text-muted-foreground text-xs font-normal">
            From {{ field.from }} ({{ format }})
        </p>
    </div>
</template>
