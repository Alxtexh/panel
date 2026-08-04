<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '../../../lib/cn'

const props = defineProps<
    PrimitiveProps & {
        class?: HTMLAttributes['class']
    }
>()
</script>

<template>
    <Primitive
        data-slot="sidebar-group-label"
        data-sidebar="group-label"
        :as="as"
        :as-child="asChild"
        :class="
            cn(
                // /70 measured at 4.26:1 against the sidebar background - short of the
                // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
                'text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
                'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
                props.class,
            )
        "
    >
        <slot />
    </Primitive>
</template>
