<script setup lang="ts">
/**
 * The document on its own, ready to print.
 *
 * `window.print()` ON A REAL PAGE rather than a generated PDF file. A generated
 * PDF has to be rendered, stored, served and cleaned up, and it cannot be read
 * without downloading something; the browser's own dialogue produces the same
 * PDF from a page that is also linkable and survives a refresh. The invoice
 * screen made this call first and it holds here for the same reasons.
 *
 * IT DRAWS `PkDocument`, the same component as the designer's preview. That is
 * the guarantee the whole feature rests on: what was previewed and what prints
 * are one file, so they cannot drift.
 */
import { PkButton as Button, PkDocument } from '@panelkit/ui'
import { Head } from '@inertiajs/vue3'

defineProps<{
    document: {
        kindLabel: string
        version: number
        sample: boolean
        blocks: { type: string; [key: string]: unknown }[]
        branding: { company: string; logoUrl?: string | null; accent: string; mono: boolean }
    }
}>()

/**
 * A named function, not `window.print()` inline in the template - a template
 * expression resolves identifiers against the component instance first, so
 * `window` there is a missing property rather than the global.
 */
function print(): void {
    window.print()
}
</script>

<template>
    <Head :title="document.kindLabel" />

    <div class="p-4">
        <!-- Screen-only chrome. `print:hidden` is what keeps it off paper. -->
        <div class="mb-4 flex items-center justify-between gap-2 print:hidden">
            <p v-if="document.sample" class="text-muted-foreground text-sm">
                Sample data — no record was selected, so this is layout only.
            </p>
            <span v-else />

            <Button size="sm" @click="print">Print</Button>
        </div>

        <div
            class="mx-auto max-w-3xl overflow-hidden rounded-lg border shadow-sm print:max-w-none print:rounded-none print:border-0 print:shadow-none"
        >
            <PkDocument :document="document" />
        </div>

        <!--
            THE VERSION IS ON THE PAPER, and small enough not to intrude.

            Vouchers are printed in batches. Editing a template halfway through a
            print run leaves half the batch with the old wording and nothing on
            either half saying which is which - this is what answers that
            afterwards, which is the only time anybody asks.
        -->
        <p class="text-muted-foreground mx-auto mt-2 max-w-3xl text-right text-[10px]">
            Template v{{ document.version }}
        </p>
    </div>
</template>

<style>
/*
 * Global, not scoped: these rules have to reach the LAYOUT - the sidebar and
 * topbar are rendered by an ancestor, and a scoped block cannot touch them. A
 * scoped print stylesheet is the commonest reason an otherwise correct document
 * prints with a navigation rail down the side of it.
 */
@media print {
    [data-slot='sidebar'],
    [data-slot='sidebar-wrapper'] > header,
    header[data-slot='header'] {
        display: none !important;
    }

    /* Margins belong to the page, not to the element. */
    @page {
        margin: 16mm;
    }

    body {
        background: #fff;
    }
}
</style>
