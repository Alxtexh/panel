<script setup lang="ts">
/**
 * Header Quick Create menu of creatable resources.
 *
 * Renders nothing when the shared list is empty (read-only or disabled).
 * Icons and optional group labels come from the server so the menu matches
 * the sidebar rather than inventing its own glyphs.
 */
import { Link, usePage } from '@inertiajs/vue3'
import { Plus } from '@lucide/vue'
import { computed } from 'vue'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    PkButton as Button,
} from '@alxtexh-enterprise/panel'
import { resolvePanelIcon } from '../../composables/panelIcons'

type QuickItem = {
    key: string
    title: string
    href: string
    icon?: string | null
    group?: string | null
}

type QuickSection = {
    name: string | null
    items: QuickItem[]
}

const page = usePage()

const items = computed<QuickItem[]>(
    () => ((page.props as any).quickCreate as QuickItem[] | undefined) ?? [],
)

/**
 * Grouped when any item carries a group; ungrouped entries stay first without
 * a label so a portal with no groups stays a flat list.
 */
const sections = computed<QuickSection[]>(() => {
    const list = items.value

    if (list.length === 0) {
        return []
    }

    const hasGroups = list.some((item) => Boolean(item.group))

    if (!hasGroups) {
        return [{ name: null, items: list }]
    }

    const order: string[] = []
    const buckets = new Map<string | null, QuickItem[]>()

    for (const item of list) {
        const name = item.group?.trim() ? item.group.trim() : null

        if (!buckets.has(name)) {
            buckets.set(name, [])

            if (name !== null) {
                order.push(name)
            }
        }

        buckets.get(name)!.push(item)
    }

    const result: QuickSection[] = []
    const ungrouped = buckets.get(null)

    if (ungrouped?.length) {
        result.push({ name: null, items: ungrouped })
    }

    for (const name of order) {
        result.push({ name, items: buckets.get(name) ?? [] })
    }

    return result
})
</script>

<template>
    <DropdownMenu v-if="items.length > 0">
        <DropdownMenuTrigger :as-child="true">
            <Button
                variant="ghost"
                size="icon"
                class="h-9 w-9"
                aria-label="Quick create"
                title="Quick create"
                data-test="quick-create"
            >
                <Plus class="h-4 w-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="min-w-56 p-1.5">
            <template v-for="(section, sectionIndex) in sections" :key="section.name ?? '__root'">
                <DropdownMenuSeparator v-if="sectionIndex > 0" class="my-1" />
                <DropdownMenuGroup>
                    <DropdownMenuLabel
                        v-if="section.name"
                        class="text-muted-foreground px-2 py-1.5 text-xs font-normal"
                    >
                        {{ section.name }}
                    </DropdownMenuLabel>
                    <DropdownMenuItem
                        v-for="item in section.items"
                        :key="item.key"
                        as-child
                        class="gap-2 p-2"
                    >
                        <Link
                            :href="item.href"
                            class="flex w-full cursor-pointer items-center gap-2"
                            :data-test="`quick-create-${item.key}`"
                        >
                            <component
                                :is="resolvePanelIcon(item.icon)"
                                class="text-muted-foreground size-4 shrink-0"
                                aria-hidden="true"
                            />
                            <span class="truncate">{{ item.title }}</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </template>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
