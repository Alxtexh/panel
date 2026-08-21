<script setup lang="ts">
/**
 * The warning shown while somebody is wearing another account.
 *
 * IT LIVES AT THE TOP OF THE MAIN COLUMN, above the topbar - not above the whole
 * layout. The reference app learned this the expensive way: a bar above
 * everything crops a full-height sidebar, because the sidebar starts at the top
 * of the VIEWPORT whatever sits above it in the document. Inside the page
 * content it stops cropping and starts reading as part of whatever screen is
 * open, moving with the page it is supposed to be describing. Here it spans
 * exactly the region the sidebar does not, and belongs to the panel.
 *
 * NO CLOSE BUTTON. Somebody wearing another account must never forget it, since
 * every click is attributed to that person; the only way out is to actually
 * stop. Rendering nothing when not impersonating is what lets the shell include
 * it unconditionally.
 *
 * THE BANNER SHOWS EVEN WITH NOWHERE TO STOP. `stopUrl` is null when no route
 * answers, and a warning with no button still beats no warning - forgetting is
 * the danger, not the extra click.
 */
import { router, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

const page = usePage()

const impersonating = computed(
    () => (page.props as any).impersonating as { name: string; stopUrl: string | null } | null,
)

const wearing = computed<string>(() => (page.props as any).auth?.user?.name ?? 'this account')

function stop(): void {
    const url = impersonating.value?.stopUrl

    if (url) {
        router.post(url)
    }
}
</script>

<template>
    <div
        v-if="impersonating"
        class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-amber-500 px-4 py-2 text-center text-sm font-medium text-amber-950"
        data-impersonation-banner
    >
        <span>
            Viewing as <strong>{{ wearing }}</strong>. You are really {{ impersonating.name }}.
        </span>

        <button
            v-if="impersonating.stopUrl"
            type="button"
            class="rounded-md bg-amber-950/20 px-2.5 py-1 text-xs font-semibold transition-colors hover:bg-amber-950/30"
            @click="stop"
        >
            Stop impersonating
        </button>
    </div>
</template>
