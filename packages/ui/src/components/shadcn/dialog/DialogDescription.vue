<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import type { DialogDescriptionProps } from 'reka-ui'
import { DialogDescription, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/cn'

const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
    <DialogDescription
        data-slot="dialog-description"
        v-bind="forwardedProps"
        :class="cn('text-sm text-muted-foreground font-normal', props.class)"
    >
        <slot />
    </DialogDescription>
</template>
