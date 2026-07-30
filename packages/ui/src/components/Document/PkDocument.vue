<script setup lang="ts">
/**
 * A document, drawn from blocks.
 *
 * THE ONE RENDERER. The designer's live preview, the printable page, and
 * anything that later emails or publishes a copy are all this component. That
 * is the property worth protecting: the moment the preview is a separate
 * component that "looks the same", the two drift, and the one they disagree
 * about is the one that already went to a customer.
 *
 * IT KNOWS NOTHING ABOUT INVOICES. It draws a header, a party, a table of lines,
 * a code, numbered steps, a note and a footer - and a document kind registered
 * by a plugin that this file has never heard of renders correctly, because a
 * kind composes blocks rather than markup.
 *
 * `bg-white text-black` UNCONDITIONALLY, not the theme's surface. A document does
 * not have a dark mode: printing a dark surface either wastes a cartridge or is
 * dropped by the browser's background-graphics setting, at which point light text
 * prints on white paper and the page comes out blank.
 *
 * THE ACCENT COLOUR IS AN INLINE STYLE, and has to be. It is a value an operator
 * typed; Tailwind never saw it, so no class for it exists in any build.
 */
import PkCodeBox from './PkCodeBox.vue'

interface Block {
    type: string
    [key: string]: unknown
}

interface DocumentPayload {
    blocks: Block[]
    branding: { company: string; logoUrl?: string | null; accent: string; mono: boolean }
    version: number
    sample: boolean
}

const props = defineProps<{ document: DocumentPayload }>()

/** Black when the operator said the office prints without colour. */
function ink(): string {
    return props.document.branding.mono ? '#000000' : props.document.branding.accent
}

/*
 * TYPED ACCESSORS RATHER THAN CASTS IN THE TEMPLATE.
 *
 * `v-for="x in block.rows as {a: string}[]"` does not parse - Vue compiles a
 * template expression as JavaScript and an inline object type is a syntax error
 * there, with an error that points at a column rather than at the cause. These
 * also put every assumption about a block's shape in one place, so a kind that
 * emits the wrong shape is wrong here rather than in six template lines.
 */
interface Meta {
    label: string
    value: string
}

interface Row {
    description: string
    detail: string
    cells: string[]
}

interface Total {
    label: string
    value: string
    strong?: boolean
}

function metas(block: Block): Meta[] {
    return (block.meta ?? []) as Meta[]
}

function rows(block: Block): Row[] {
    return (block.rows ?? []) as Row[]
}

function totals(block: Block): Total[] {
    return (block.totals ?? []) as Total[]
}

function texts(value: unknown): string[] {
    return (value ?? []) as string[]
}

function text(value: unknown): string {
    return (value ?? '') as string
}
</script>

<template>
    <!--
        `dusk` IS A TEST HOOK, on purpose and in shipped markup.

        Browser tests need one selector for "the document" that survives a
        restyle, and every alternative is worse: a CSS class is a thing a
        refactor is *supposed* to change, and a structural selector like
        `aside article` breaks the moment the preview moves. One attribute here
        serves the designer preview and the print page both, so they cannot
        drift apart. It renders as an inert attribute and costs nothing.
    -->
    <article dusk="document" class="flex flex-col gap-6 bg-white p-8 text-black">
        <!-- ---------------------------------------------------- letterhead -->
        <div class="flex items-center gap-3">
            <img
                v-if="document.branding.logoUrl"
                :src="document.branding.logoUrl"
                alt=""
                class="max-h-10 max-w-40 object-contain"
            />
            <!-- A missing logo falls back to the NAME, not to a gap. A blank
                 corner reads as a broken image; a company name reads as a
                 decision. -->
            <p v-else class="text-lg font-semibold" :style="{ color: ink() }">
                {{ document.branding.company }}
            </p>
        </div>

        <template v-for="(block, i) in document.blocks" :key="i">
            <!-- -------------------------------------------------- header -->
            <header v-if="block.type === 'header'" class="flex items-start justify-between gap-8">
                <div>
                    <h1 class="text-2xl font-semibold tracking-tight" :style="{ color: ink() }">
                        {{ block.title }}
                    </h1>
                    <p v-if="block.subtitle" class="mt-1 text-sm text-neutral-600">
                        {{ block.subtitle }}
                    </p>
                    <p v-if="block.reference" class="mt-1 font-mono text-sm text-neutral-600">
                        {{ block.reference }}
                    </p>
                </div>

                <dl v-if="metas(block).length" class="text-right text-sm">
                    <div v-for="(meta, m) in metas(block)" :key="m" class="flex justify-end gap-4 py-0.5">
                        <dt class="text-neutral-500">{{ meta.label }}</dt>
                        <dd class="tabular-nums">{{ meta.value }}</dd>
                    </div>
                </dl>
            </header>

            <!-- --------------------------------------------------- party -->
            <section v-else-if="block.type === 'party'">
                <h2 class="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                    {{ block.heading }}
                </h2>
                <p class="mt-2 font-medium">{{ block.name }}</p>
                <p v-for="(line, l) in texts(block.lines)" :key="l" class="text-sm text-neutral-600">
                    {{ line }}
                </p>
            </section>

            <!-- --------------------------------------------------- lines -->
            <section v-else-if="block.type === 'lines'">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="border-b border-neutral-300 text-left">
                            <!--
                                `pl-3` ON EVERY COLUMN BUT THE FIRST, and it is
                                not cosmetic.

                                Right-aligned numeric cells with no horizontal
                                padding butt straight up against each other the
                                moment the numbers are wide - a quantity of 1, a
                                unit of 100,000.00 and an amount of 100,000.00
                                render as "1100,000.00100,000.00", which is an
                                invoice somebody disputes.

                                Found by previewing against a real subscriber.
                                Sample data has a 2,500.00 line and three tidy
                                columns, and would never have shown it - which is
                                the whole argument for the record picker.
                            -->
                            <th
                                v-for="(column, c) in texts(block.columns)"
                                :key="c"
                                class="pb-2 font-medium"
                                :class="c > 0 ? 'pl-3 text-right whitespace-nowrap' : ''"
                            >
                                {{ column }}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(row, r) in rows(block)" :key="r" class="border-b border-neutral-200">
                            <!-- The description is what gives way when the row
                                 is too wide; a wrapped figure is unreadable and
                                 a wrapped product name is fine. -->
                            <td class="w-full py-3 pr-2">
                                <p>{{ row.description }}</p>
                                <p v-if="row.detail" class="text-xs text-neutral-500">{{ row.detail }}</p>
                            </td>
                            <td
                                v-for="(cell, cc) in row.cells"
                                :key="cc"
                                class="py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                            >
                                {{ cell }}
                            </td>
                        </tr>

                        <tr v-if="rows(block).length === 0">
                            <td
                                :colspan="texts(block.columns).length || 1"
                                class="py-6 text-center text-neutral-500"
                            >
                                {{ block.empty }}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- `break-inside-avoid` here is the one print rule that is not
                     cosmetic: a total split across a page break is a document
                     somebody will query. -->
                <div v-if="totals(block).length" class="mt-6 flex break-inside-avoid justify-end">
                    <dl class="w-64 text-sm">
                        <div
                            v-for="(total, t) in totals(block)"
                            :key="t"
                            class="flex justify-between py-1"
                            :class="
                                total.strong
                                    ? 'mt-1 border-t border-neutral-300 pt-2 text-base font-semibold'
                                    : ''
                            "
                            :style="total.strong ? { color: ink() } : undefined"
                        >
                            <dt :class="total.strong ? '' : 'text-neutral-600'">{{ total.label }}</dt>
                            <dd class="tabular-nums">{{ total.value }}</dd>
                        </div>
                    </dl>
                </div>
            </section>

            <!-- ---------------------------------------------------- code -->
            <section v-else-if="block.type === 'code'" class="py-2">
                <PkCodeBox
                    :code="text(block.code)"
                    :caption="text(block.caption)"
                    :style="text(block.style)"
                    :accent="document.branding.accent"
                    :mono="document.branding.mono"
                />
            </section>

            <!-- --------------------------------------------------- steps -->
            <section v-else-if="block.type === 'steps'">
                <h2 class="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                    {{ block.heading }}
                </h2>
                <ol class="mt-2 flex flex-col gap-1 text-sm">
                    <li v-for="(item, s) in texts(block.items)" :key="s" class="flex gap-2">
                        <span class="font-semibold tabular-nums" :style="{ color: ink() }">{{ s + 1 }}.</span>
                        <span>{{ item }}</span>
                    </li>
                </ol>
            </section>

            <!-- ---------------------------------------------------- note -->
            <p
                v-else-if="block.type === 'note'"
                class="text-sm"
                :class="block.emphasis ? 'font-medium' : 'text-neutral-600'"
                :style="block.emphasis ? { color: ink() } : undefined"
            >
                {{ block.text }}
            </p>

            <!-- -------------------------------------------------- footer -->
            <footer
                v-else-if="block.type === 'footer'"
                class="mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
            >
                <p v-if="block.text">{{ block.text }}</p>
                <p v-if="texts(block.contacts).length" class="mt-1">
                    {{ texts(block.contacts).join(' · ') }}
                </p>
            </footer>

            <!--
                AN UNKNOWN BLOCK TYPE IS SHOWN, not skipped.

                It means a kind emitted something this renderer does not draw -
                usually a plugin built against a newer version. Skipping it
                silently produces a document that is missing a section with
                nothing anywhere saying so, and the first person to notice is
                whoever receives it.
            -->
            <p v-else class="rounded border border-dashed border-red-300 p-2 text-xs text-red-600">
                This document contains a “{{ block.type }}” block, which this version cannot draw.
            </p>
        </template>
    </article>
</template>
