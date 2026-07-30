<script setup lang="ts">
/**
 * The warning shown while somebody is wearing another account.
 *
 * IT LIVES IN THE SHELL, ABOVE THE TOPBAR, and getting there took three tries
 * worth recording.
 *
 * Above the whole layout it CROPPED THE SIDEBAR: the sidebar is
 * `fixed inset-y-0 h-svh`, so it starts at the top of the VIEWPORT whatever sits
 * above it in the document, and a bar there simply covers its first rows.
 *
 * Inside the page content it stopped cropping and started reading as part of
 * whatever screen was open - a strip between the toolbar and the table, moving
 * with the page it was supposed to be describing.
 *
 * At the top of the MAIN COLUMN it is chrome: it spans exactly the region the
 * sidebar does not occupy, sits above the topbar where nothing else competes
 * with it, and belongs to the panel rather than to the page.
 *
 * NO CLOSE BUTTON. Somebody wearing another account must never forget it, since
 * every click is attributed to that person; the only way out is to actually
 * stop. Rendering nothing when not impersonating is what lets the shells include
 * it unconditionally.
 */
import { router, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const page = usePage();

const impersonating = computed(
    () =>
        page.props.impersonating as {
            name: string;
            since: string | null;
        } | null,
);

function stop() {
    router.post('/impersonate-stop');
}
</script>

<template>
    <div
        v-if="impersonating"
        class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-amber-500 px-4 py-2 text-center text-sm font-medium text-amber-950"
    >
        <span>
            Viewing as <strong>{{ page.props.auth?.user?.name }}</strong> - you
            are really {{ impersonating.name }}.
        </span>

        <button
            type="button"
            class="rounded-md bg-amber-950/20 px-2.5 py-1 text-xs font-semibold transition-colors hover:bg-amber-950/30"
            @click="stop"
        >
            Stop impersonating
        </button>
    </div>
</template>
