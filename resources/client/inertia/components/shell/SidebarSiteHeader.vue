<script setup lang="ts">
/**
 * Full-width sticky chrome for the `header` sidebar layout (sidebar-16 pattern).
 *
 * Sits ABOVE the rail + inset row. The inset column still has AppSidebarHeader
 * for breadcrumbs and tools; this bar is brand + search only.
 */
import { Link, usePage } from '@inertiajs/vue3'
import { Search } from '@lucide/vue'
import { computed } from 'vue'
import AppLogo from './AppLogo.vue'

const page = usePage()

const brand = computed(
    () => (page.props.panel as { brandName?: string } | undefined)?.brandName ?? 'Panel',
)

function openPalette(): void {
    window.dispatchEvent(
        new KeyboardEvent('keydown', {
            key: 'k',
            code: 'KeyK',
            ctrlKey: true,
            bubbles: true,
        }),
    )
}
</script>

<template>
    <header
        class="sticky top-0 z-40 flex h-14 shrink-0 items-center gap-3 border-b bg-background px-4"
        style="height: var(--header-height, 3.5rem)"
    >
        <Link href="/" class="flex items-center gap-2 font-medium">
            <AppLogo show-name />
            <span class="sr-only">{{ brand }}</span>
        </Link>

        <button
            type="button"
            class="ml-auto flex h-8 max-w-sm flex-1 items-center gap-2 rounded-md border bg-muted/40 px-3 text-left text-sm text-muted-foreground transition-colors hover:bg-muted"
            @click="openPalette"
        >
            <Search class="size-4 shrink-0" />
            <span class="truncate">Search…</span>
            <kbd
                class="pointer-events-none ml-auto hidden h-5 items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium sm:inline-flex"
            >
                Ctrl K
            </kbd>
        </button>
    </header>
</template>
