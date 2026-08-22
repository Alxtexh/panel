<script setup lang="ts">
/**
 * Compact support links for the `header` sidebar family.
 *
 * Help, FAQ, What's new and About stay reachable without the labeled footer
 * group that other families show above the account row.
 */
import { Link } from '@inertiajs/vue3'
import { HelpCircle } from '@lucide/vue'
import { PkDropdown } from '@alxtexh-enterprise/panel'
import { toUrl } from '@alxtexh-enterprise/panel'
import { useCurrentUrl } from '../../composables/useCurrentUrl'
import type { NavItem } from '../../types'

defineProps<{
    items: NavItem[]
}>()

const { isCurrentUrl } = useCurrentUrl()
</script>

<template>
    <div class="px-2 py-1 group-data-[collapsible=icon]:px-0">
        <PkDropdown align="start" width="w-44">
            <template #trigger>
                <button
                    type="button"
                    class="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0"
                    aria-label="Support links"
                    title="Support"
                >
                    <HelpCircle class="size-4 shrink-0" />
                    <span class="group-data-[collapsible=icon]:hidden">Help</span>
                </button>
            </template>

            <template #panel="{ close }">
                <Link
                    v-for="item in items"
                    :key="item.title"
                    :href="toUrl(item.href)"
                    class="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                    :class="isCurrentUrl(item.href) ? 'font-medium text-foreground' : ''"
                    prefetch
                    @click="close()"
                >
                    <component :is="item.icon" class="size-4 shrink-0" />
                    {{ item.title }}
                </Link>
            </template>
        </PkDropdown>
    </div>
</template>
