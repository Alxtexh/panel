<script setup lang="ts">
/**
 * Manual lock, posting to the same URL the idle timer uses.
 *
 * Hidden unless this panel shared `panelIdleLock`. Lives in the header
 * immediately before search, not in the account menu.
 */
import { router, usePage } from '@inertiajs/vue3'
import { Lock } from '@lucide/vue'
import { computed } from 'vue'

const lockUrl = computed(() => {
    const props = usePage().props as {
        panelIdleLock?: { lockUrl?: string } | null
        panel?: { lock?: string | null }
    }

    return props.panelIdleLock?.lockUrl ?? props.panel?.lock ?? null
})

function lockNow(): void {
    if (lockUrl.value) {
        router.post(lockUrl.value)
    }
}
</script>

<template>
    <button
        v-if="lockUrl"
        type="button"
        class="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-label="Lock screen"
        title="Lock screen"
        @click="lockNow"
    >
        <Lock class="size-4" />
    </button>
</template>
