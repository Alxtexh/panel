<script setup lang="ts">
/**
 * A printable invoice.
 *
 * THE PRINT STYLESHEET IS THE FEATURE. Anybody can lay out a table of line
 * items; what makes this usable is that Ctrl-P produces a document rather than a
 * screenshot of an admin panel - no sidebar, no toolbar, no dark background
 * eating a toner cartridge, and the totals not split across a page break.
 *
 * `window.print()` RATHER THAN A PDF ENDPOINT. A generated PDF has to be
 * rendered, stored, served and cleaned up, and it cannot be read without
 * downloading something. The browser's own dialogue produces the same PDF, from
 * a page that is also linkable.
 *
 * NO TOTAL IS COMPUTED HERE. Every figure arrives already summed in integer
 * cents; this file divides by 100 to display and does nothing else. A client
 * that computes its own totals is one that can be made to show a different
 * number from the one that will be charged.
 */
import AppLayout from '@/layouts/AppLayout.vue'
import { Head } from '@inertiajs/vue3'

interface Line {
    description: string
    detail: string
    quantity: number
    unitCents: number
    amountCents: number
}

const props = defineProps<{
    invoice: {
        number: string
        issuedAt: string
        dueAt: string
        billTo: { name: string; phone: string; reference: string }
        lines: Line[]
        subtotalCents: number
        taxCents: number
        totalCents: number
        taxRate: number
        currency: string
        terms: string
    }
    breadcrumbs: { title: string; href: string }[]
}>()

defineOptions({ layout: AppLayout })

/** Cents to a displayable amount. The ONLY place a division happens. */
function money(cents: number): string {
    return new Intl.NumberFormat(undefined, { minimumFractionDigits: 2 }).format(cents / 100)
}

/**
 * A named function, not `window.print()` inline in the template.
 *
 * A template expression resolves identifiers against the component instance
 * first, so `window` there is a missing property rather than the global.
 */
function print(): void {
    window.print()
}

function date(value: string): string {
    return new Date(value).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    })
}
</script>

<template>
    <Head :title="`Invoice ${invoice.number}`" />

    <div class="p-4">
        <!-- Screen-only chrome. `print:hidden` is what keeps it off paper. -->
        <div class="mb-4 flex items-center justify-end gap-2 print:hidden">
            <button
                type="button"
                class="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90"
                @click="print"
            >
                <svg
                    class="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                >
                    <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z" />
                </svg>
                Print
            </button>
        </div>

        <!--
            `bg-white text-black` unconditionally, not the theme's surface.

            An invoice is a document, and a document does not have a dark mode:
            printing a dark surface either wastes a cartridge or is dropped by
            the browser's background-graphics setting, at which point light text
            prints on white paper and the page comes out blank.
        -->
        <article
            class="mx-auto max-w-3xl rounded-lg border bg-white p-8 text-black shadow-sm print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none"
        >
            <header class="flex items-start justify-between gap-8">
                <div>
                    <h1 class="text-2xl font-semibold tracking-tight">Invoice</h1>
                    <p class="mt-1 font-mono text-sm text-neutral-600">{{ invoice.number }}</p>
                </div>

                <dl class="text-right text-sm">
                    <div class="flex justify-end gap-4">
                        <dt class="text-neutral-500">Issued</dt>
                        <dd class="tabular-nums">{{ date(invoice.issuedAt) }}</dd>
                    </div>
                    <div class="mt-1 flex justify-end gap-4">
                        <dt class="text-neutral-500">Due</dt>
                        <dd class="font-medium tabular-nums">{{ date(invoice.dueAt) }}</dd>
                    </div>
                </dl>
            </header>

            <section class="mt-8">
                <h2 class="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                    Billed to
                </h2>
                <p class="mt-2 font-medium">{{ invoice.billTo.name }}</p>
                <p class="text-sm text-neutral-600">{{ invoice.billTo.phone }}</p>
                <p class="font-mono text-xs text-neutral-500">{{ invoice.billTo.reference }}</p>
            </section>

            <!--
                `break-inside-avoid` on the totals block below is the one print
                rule that is not cosmetic: a total split across a page break is
                a document somebody will query.
            -->
            <table class="mt-8 w-full text-sm">
                <thead>
                    <tr class="border-b border-neutral-300 text-left">
                        <th class="pb-2 font-medium">Description</th>
                        <th class="pb-2 text-right font-medium">Qty</th>
                        <th class="pb-2 text-right font-medium">Unit</th>
                        <th class="pb-2 text-right font-medium">Amount</th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="(line, i) in invoice.lines"
                        :key="i"
                        class="border-b border-neutral-200"
                    >
                        <td class="py-3">
                            <p>{{ line.description }}</p>
                            <p v-if="line.detail" class="text-xs text-neutral-500">
                                {{ line.detail }}
                            </p>
                        </td>
                        <td class="py-3 text-right tabular-nums">{{ line.quantity }}</td>
                        <td class="py-3 text-right tabular-nums">{{ money(line.unitCents) }}</td>
                        <td class="py-3 text-right tabular-nums">{{ money(line.amountCents) }}</td>
                    </tr>

                    <tr v-if="invoice.lines.length === 0">
                        <td colspan="4" class="py-6 text-center text-neutral-500">
                            This subscriber has no plan, so there is nothing to bill.
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="mt-6 flex justify-end break-inside-avoid">
                <dl class="w-64 text-sm">
                    <div class="flex justify-between py-1">
                        <dt class="text-neutral-600">Subtotal</dt>
                        <dd class="tabular-nums">{{ money(invoice.subtotalCents) }}</dd>
                    </div>
                    <div class="flex justify-between py-1">
                        <dt class="text-neutral-600">VAT ({{ invoice.taxRate }}%)</dt>
                        <dd class="tabular-nums">{{ money(invoice.taxCents) }}</dd>
                    </div>
                    <div
                        class="mt-1 flex justify-between border-t border-neutral-300 pt-2 text-base font-semibold"
                    >
                        <dt>Total</dt>
                        <dd class="tabular-nums">
                            {{ invoice.currency }} {{ money(invoice.totalCents) }}
                        </dd>
                    </div>
                </dl>
            </div>

            <footer class="mt-10 border-t border-neutral-200 pt-4 text-xs text-neutral-500">
                {{ invoice.terms }}
            </footer>
        </article>
    </div>
</template>

<style>
/*
 * Global, not scoped: these rules have to reach the LAYOUT - the sidebar and
 * topbar are rendered by an ancestor, and a scoped block cannot touch them.
 * A scoped print stylesheet is the commonest reason an otherwise correct
 * invoice prints with a navigation rail down the side of it.
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
