<script setup lang="ts">
/**
 * Header Quick Create menu of creatable resources.
 *
 * Renders nothing when the shared list is empty (read-only or disabled).
 */
import { Link, usePage } from '@inertiajs/vue3'
import { Plus } from '@lucide/vue'
import { computed } from 'vue'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    PkButton as Button,
} from '@alxtexh-enterprise/panel'

type QuickItem = { key: string; title: string; href: string; icon?: string }

const page = usePage()

const items = computed<QuickItem[]>(
    () => ((page.props as any).quickCreate as QuickItem[] | undefined) ?? [],
)
</script>

<template>
    <DropdownMenu v-if="items.length > 0">
        <DropdownMenuTrigger :as-child="true">
            <Button
                variant="ghost"
                size="icon"
                class="h-9 w-9"
                aria-label="Quick create"
                data-test="quick-create"
            >
                <Plus class="h-4 w-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="min-w-48">
            <DropdownMenuItem v-for="item in items" :key="item.key" as-child>
                <Link :href="item.href" class="cursor-pointer" :data-test="`quick-create-${item.key}`">
                    {{ item.title }}
                </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
