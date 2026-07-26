<script setup lang="ts">
/**
 * Minimal dropdown: trigger slot, panel slot, click-outside and Escape to close.
 *
 * Written rather than pulled from a component library on purpose. packages/ui
 * has to be droppable into any Vue app (spec §4), and taking a hard dependency
 * on the consuming app's component kit — or on reka-ui, or on shadcn-vue's exact
 * file layout — is what would stop that. It is about sixty lines; a dependency
 * that costs sixty lines is not worth the coupling.
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'

withDefaults(defineProps<{ align?: 'start' | 'end'; width?: string }>(), {
    align: 'end',
    width: 'w-56',
})

const open = ref(false)
const root = ref<HTMLElement | null>(null)

function toggle() {
    open.value = !open.value
}

function close() {
    open.value = false
}

function onDocumentPointerDown(e: PointerEvent) {
    if (open.value && root.value && !root.value.contains(e.target as Node)) close()
}

function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && open.value) {
        e.stopPropagation()
        close()
    }
}

onMounted(() => {
    document.addEventListener('pointerdown', onDocumentPointerDown)
    document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
    document.removeEventListener('pointerdown', onDocumentPointerDown)
    document.removeEventListener('keydown', onKeydown)
})

defineExpose({ close })
</script>

<template>
    <div ref="root" class="relative">
        <div @click="toggle">
            <slot name="trigger" :open="open" />
        </div>

        <Transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="opacity-0 scale-95"
            leave-active-class="transition duration-75 ease-in"
            leave-to-class="opacity-0 scale-95"
        >
            <div
                v-if="open"
                :class="[
                    'bg-popover text-popover-foreground absolute z-50 mt-1 overflow-hidden rounded-md border p-1 shadow-md',
                    width,
                    align === 'end' ? 'right-0' : 'left-0',
                ]"
                role="menu"
            >
                <slot name="panel" :close="close" />
            </div>
        </Transition>
    </div>
</template>
