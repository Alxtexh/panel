<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from '../../../lib/cn'

/*
 * NO `Skeleton` COMPONENT. This was the only consumer of a one-line
 * application component that duplicated nothing useful - the pulse is two
 * utility classes, and a whole module to hold them earned its keep nowhere.
 * The package's PkSkeleton is a different thing (named variants, counts) and
 * would be the wrong shape for a bar sized to a random width.
 */
const PULSE = 'animate-pulse rounded-md bg-primary/10'

const props = defineProps<{
  showIcon?: boolean
  class?: HTMLAttributes["class"]
}>()

const width = computed(() => {
  return `${Math.floor(Math.random() * 40) + 50}%`
})
</script>

<template>
  <div
    data-slot="sidebar-menu-skeleton"
    data-sidebar="menu-skeleton"
    :class="cn('flex h-8 items-center gap-2 rounded-md px-2', props.class)"
  >
    <div
      v-if="showIcon"
      :class="cn(PULSE, 'size-4')"
      data-sidebar="menu-skeleton-icon"
    />

    <div
      :class="cn(PULSE, 'h-4 max-w-(--skeleton-width) flex-1')"
      data-sidebar="menu-skeleton-text"
      :style="{ '--skeleton-width': width }"
    />
  </div>
</template>
