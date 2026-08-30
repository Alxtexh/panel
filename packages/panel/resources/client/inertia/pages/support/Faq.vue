<script setup lang="ts">
/**
 * Frequently asked questions.
 *
 * ONE OPEN AT A TIME, and the open one is tracked by INDEX rather than by a
 * boolean on each item. A per-item flag lets two answers be open at once, which
 * is fine, but it also means the "close the others" behaviour has to be
 * maintained in two places when items are added.
 *
 * Every question is a real <button> inside the heading, so the list is
 * keyboard-navigable and announced as expandable. A div with a click handler
 * looks identical and is unreachable without a mouse.
 */
import { Head } from '@inertiajs/vue3'
import { computed, ref } from 'vue'
import SupportPageEditor from '../../components/support/SupportPageEditor.vue'
import type { SupportProps } from '../../components/support/SupportPageEditor.vue'

defineOptions({
    // Page props arrive as attributes and this root is a fragment.
    inheritAttrs: false,
    layout: { breadcrumbs: [{ title: 'FAQ', href: '' }] },
})

/**
 * THE QUESTIONS COME FROM THE SERVER, and they used to be an array right here -
 * one whose first group was called "Subscribers", which quietly made a framework
 * screen about an ISP.
 *
 * `HelpCentre` ships questions about the PANEL (where the navigation sits,
 * whether lists refresh themselves, what to do about a stolen password) because
 * those are true of every installation, and an application adds its own with
 * `HelpCentre::addQuestions()`. A FAQ that opens empty on a fresh install reads
 * as broken; one that answers somebody else's business reads as wrong.
 */
const props = withDefaults(
    defineProps<{
        groups?: { title: string; items: { q: string; a: string }[] }[]
        support?: SupportProps | null
    }>(),
    { groups: () => [] },
)

/**
 * A flat list with a stable id per question, computed ONCE.
 *
 * The first cut assigned indices lazily from inside the template expression,
 * which meant a multi-statement expression in `@click` and an id that did not
 * exist until the first click - so `aria-expanded` was wrong until then. That
 * pattern has already caused two bugs in this project; the flattening belongs
 * in script.
 */
const sections = computed(() =>
    props.groups.map((group, g) => ({
        ...group,
        items: group.items.map((item, i) => ({ ...item, id: `${g}-${i}` })),
    })),
)

const openId = ref<string | null>('0-0')

function toggle(id: string) {
    openId.value = openId.value === id ? null : id
}
</script>

<template>
    <Head title="FAQ" />

    <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 p-4 sm:p-6">
        <SupportPageEditor :support="support">
            <header class="flex flex-col gap-1">
                <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">
                    Frequently asked questions
                </h1>
                <p class="text-sm text-muted-foreground font-normal">
                    The things people ask in the first week.
                </p>
            </header>

            <section v-for="group in sections" :key="group.title" class="flex flex-col gap-2">
                <h2 class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {{ group.title }}
                </h2>

                <div class="divide-y overflow-hidden rounded-lg border bg-card">
                    <div v-for="item in group.items" :key="item.id">
                        <h3>
                            <button
                                type="button"
                                class="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50"
                                :aria-expanded="openId === item.id"
                                @click="toggle(item.id)"
                            >
                                {{ item.q }}
                                <svg
                                    viewBox="0 0 24 24"
                                    class="size-4 shrink-0 text-muted-foreground transition-transform"
                                    :class="openId === item.id ? 'rotate-180' : ''"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.5"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                        </h3>

                        <p
                            v-if="openId === item.id"
                            class="px-4 pb-3 text-sm text-muted-foreground"
                        >
                            {{ item.a }}
                        </p>
                    </div>
                </div>
            </section>
        </SupportPageEditor>
    </div>
</template>
