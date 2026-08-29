<script setup lang="ts">
/**
 * The dashboard checklist and first-run setup guide. Purely presentational.
 *
 * Doctor findings and onboarding steps share this component. Doctor keeps the
 * full vertical list. Onboarding is a compact two-row card: a segment per
 * step (not a bare "Step X of Y" count - DESIGN_RULES.md rule 5), then the
 * current title, its detail, Open, and Skip remaining.
 *
 * NOTHING INERTIA HERE. Pass `linkComponent` as Inertia `<Link>` from a page.
 */
import { computed, markRaw } from 'vue'
import type { Component } from 'vue'
import { buttonClasses } from '../primitives/buttonClasses'

export interface SetupChecklistItem {
    key: string
    title: string
    detail: string
    done: boolean
    href?: string | null
    actionLabel?: string | null
}

const props = withDefaults(
    defineProps<{
        items: SetupChecklistItem[]
        /** Where "see the full report" points - the panel's own monitoring page, typically. */
        reportHref?: string | null
        heading?: string
        skipLabel?: string | null
        /** Inertia `<Link>`, or any router link. Defaults to a plain `<a>`. */
        linkComponent?: string | Component
        /** Slim first-run banner, or the full doctor findings list. */
        variant?: 'doctor' | 'onboarding'
    }>(),
    {
        reportHref: null,
        heading: 'Setup checklist',
        skipLabel: null,
        linkComponent: 'a',
        variant: 'doctor',
    },
)

const emit = defineEmits<{
    skip: []
}>()

const next = computed(() => props.items.find((item) => !item.done) ?? null)
const rest = computed(() => props.items.filter((item) => item.key !== next.value?.key))

const totalSteps = computed(() => props.items.length)
const completedCount = computed(() => props.items.filter((item) => item.done).length)
const progressPercent = computed(() =>
    totalSteps.value > 0 ? Math.round((completedCount.value / totalSteps.value) * 100) : 0,
)

const resolvedLink = computed(() => {
    const component = props.linkComponent

    return typeof component === 'string' ? component : markRaw(component)
})

const primaryClass = buttonClasses({
    variant: 'default',
    size: 'sm',
    class: 'no-underline mt-2 self-start',
})

const bannerPrimaryClass = buttonClasses({
    variant: 'default',
    size: 'sm',
    class: 'no-underline shrink-0',
})

const ghostClass = buttonClasses({
    variant: 'outline',
    size: 'sm',
    class: 'no-underline shrink-0',
})
</script>

<template>
    <section
        v-if="items.length && variant === 'onboarding'"
        class="flex flex-col gap-2.5 rounded-md border bg-card p-3"
        :aria-label="heading"
    >
        <div class="flex items-center justify-between gap-3">
            <!--
                A SEGMENT PER STEP, NOT "Step 2 of 3" AS TEXT. A bare count is
                exactly the dead control DESIGN_RULES.md rule 5 names - it says
                a number, and nobody acts on the number itself. The fill still
                answers the same question (`aria-valuenow`) for anyone who
                cannot see it.
            -->
            <div
                class="flex flex-1 items-center gap-1"
                role="progressbar"
                :aria-valuenow="progressPercent"
                aria-valuemin="0"
                aria-valuemax="100"
                :aria-label="`${heading}, ${progressPercent} percent complete`"
            >
                <span
                    v-for="(item, index) in items"
                    :key="item.key"
                    class="h-1.5 flex-1 rounded-sm transition-colors duration-300"
                    :class="index < completedCount ? 'bg-amber-500' : 'bg-muted'"
                />
            </div>

            <button
                v-if="skipLabel"
                type="button"
                class="text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline"
                @click="emit('skip')"
            >
                {{ skipLabel }}
            </button>
        </div>

        <div class="flex items-center gap-3">
            <p class="min-w-0 flex-1 text-sm">
                <span class="font-medium">{{ next ? next.title : heading }}</span>
                <span v-if="next?.detail" class="text-muted-foreground mt-0.5 block text-xs sm:mt-0 sm:inline sm:before:content-[':_']">
                    {{ next.detail }}
                </span>
            </p>

            <component
                :is="resolvedLink"
                v-if="next?.href"
                :href="next.href"
                :class="bannerPrimaryClass"
            >
                {{ next.actionLabel || 'Open' }}
            </component>
        </div>
    </section>

    <section v-else-if="items.length" class="flex flex-col gap-3 rounded-lg border bg-card p-4">
        <div class="flex items-center justify-between gap-2">
            <h2 class="text-sm font-semibold">{{ heading }}</h2>
            <div class="flex items-center gap-3">
                <button
                    v-if="skipLabel"
                    type="button"
                    class="text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
                    @click="emit('skip')"
                >
                    {{ skipLabel }}
                </button>
                <a
                    v-if="reportHref"
                    :href="reportHref"
                    class="text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
                >
                    Full report
                </a>
            </div>
        </div>

        <div
            v-if="next"
            class="flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
        >
            <span
                class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500"
                aria-hidden="true"
            />
            <div class="flex min-w-0 flex-col gap-0.5">
                <p class="text-sm font-medium">{{ next.title }}</p>
                <p v-if="next.detail" class="text-xs text-muted-foreground font-normal">{{ next.detail }}</p>
                <component
                    :is="resolvedLink"
                    v-if="next.href"
                    :href="next.href"
                    :class="primaryClass"
                >
                    {{ next.actionLabel || 'Open' }}
                </component>
            </div>
        </div>

        <ul v-if="rest.length" class="flex flex-col gap-2">
            <li v-for="item in rest" :key="item.key" class="flex items-start gap-3">
                <span
                    class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                    :class="
                        item.done
                            ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                            : 'border-2 border-amber-500'
                    "
                    aria-hidden="true"
                >
                    <svg
                        v-if="item.done"
                        viewBox="0 0 24 24"
                        class="size-3.5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </span>
                <div class="flex min-w-0 flex-1 flex-col gap-0.5">
                    <p
                        class="text-sm"
                        :class="item.done ? 'text-muted-foreground line-through' : 'font-medium'"
                    >
                        {{ item.title }}
                    </p>
                    <p v-if="!item.done && item.detail" class="text-xs text-muted-foreground font-normal">
                        {{ item.detail }}
                    </p>
                </div>
                <component
                    :is="resolvedLink"
                    v-if="!item.done && item.href"
                    :href="item.href"
                    :class="ghostClass"
                >
                    {{ item.actionLabel || 'Open' }}
                </component>
            </li>
        </ul>
    </section>
</template>
