<script setup lang="ts">
/**
 * First-run access: signed in, allowed into the panel, holding nothing.
 *
 * THE INSTALLER DOES NOT GRANT EVERY ABILITY. A blank shell used to look
 * broken. This is the kit empty state: you have no grants, here is how to
 * create an Administrator.
 */
import { Terminal } from '@lucide/vue'
import { computed, usePage } from '@inertiajs/vue3'

withDefaults(
    defineProps<{
        compact?: boolean
    }>(),
    { compact: false },
)

const page = usePage()

const hint = computed(() => {
    const props = page.props as Record<string, any>
    const shared = props.panelEmptyGrantsHint as
        | { title: string; body: string; commands: string[] }
        | null
        | undefined

    if (shared) {
        return shared
    }

    if (!props.panelEmptyGrants) {
        return null
    }

    return {
        title: 'You have no grants',
        body: 'This account is signed in and allowed into the panel, but it has no role and no abilities yet. The installer does not grant everything. Create an Administrator and assign it:',
        commands: [
            'php artisan panel:permissions sync',
            'php artisan panel:permissions grant --email=you@example.com',
        ],
    }
})
</script>

<template>
    <div
        v-if="hint"
        class="flex flex-col items-start gap-3 rounded-lg border border-dashed p-4 sm:p-6"
        :class="compact ? 'sm:p-4' : ''"
        data-slot="empty-grants"
    >
        <div>
            <p class="text-sm font-medium">{{ hint.title }}</p>
            <p v-if="!compact" class="text-muted-foreground mt-1 text-sm">{{ hint.body }}</p>
            <p v-else class="text-muted-foreground mt-1 text-sm">
                Assign a role with `panel:permissions`. The installer does not grant everything.
            </p>
        </div>
        <code
            v-for="command in hint.commands"
            :key="command"
            class="bg-muted/60 flex items-center gap-2 rounded-md px-3 py-2 font-mono text-xs"
        >
            <Terminal class="size-3.5 shrink-0" />
            {{ command }}
        </code>
    </div>
</template>
