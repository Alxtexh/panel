<script setup lang="ts">
/**
 * A searchable directory of links, grouped into plain cards.
 *
 * FLAT ON PURPOSE. The heading, search, and cards sit on the page background.
 * Wrapping the whole screen in one card turns a directory into a nested box.
 *
 * NO INERTIA HERE. Default links are plain `<a>`. The Inertia Directory
 * screen passes `Link` as `linkComponent` so same-origin visits stay in-app.
 *
 * SEARCH IS CLIENT-SIDE on link titles. Sections with no remaining links hide.
 */
import { computed, markRaw, ref } from 'vue'
import type { Component } from 'vue'
import { buttonClasses } from '../primitives/buttonClasses'
import PkTextInput from '../primitives/PkTextInput.vue'
import { iconPath } from '../primitives/icons'

export interface DirectoryLink {
    label: string
    href: string
    icon?: string
    external?: boolean
}

export interface DirectorySection {
    key: string
    title: string
    accent?: string
    links: DirectoryLink[]
}

const props = withDefaults(
    defineProps<{
        title: string
        description?: string | null
        searchPlaceholder?: string
        sections: DirectorySection[]
        /** Inertia `<Link>`, or any router link. Defaults to a plain `<a>`. */
        linkComponent?: string | Component
        /** Drop page padding and max-width so this can sit inside another screen. */
        embedded?: boolean
    }>(),
    {
        description: null,
        searchPlaceholder: 'Search',
        linkComponent: 'a',
        embedded: false,
    },
)

const query = ref('')

const resolvedLink = computed(() => {
    const component = props.linkComponent

    return typeof component === 'string' ? component : markRaw(component)
})

/**
 * Ghost button classes plus `no-underline`. Raw `<a href>` keeps the browser
 * underline; Inertia `<Link>` often does not. Same classes on both so every
 * row is a button-like chip, never a default blue underlined link.
 */
const itemClass = buttonClasses({
    variant: 'ghost',
    size: 'sm',
    class: 'no-underline justify-start text-foreground',
})

function isExternalHref(link: DirectoryLink): boolean {
    return link.external === true || /^https?:\/\//.test(link.href)
}

const visibleSections = computed(() => {
    const needle = query.value.trim().toLowerCase()

    return props.sections
        .map((section) => ({
            ...section,
            links: needle
                ? section.links.filter((link) => link.label.toLowerCase().includes(needle))
                : section.links,
        }))
        .filter((section) => section.links.length > 0)
})
</script>

<template>
    <div
        class="flex w-full flex-col gap-8"
        :class="embedded ? '' : 'mx-auto max-w-5xl px-4 py-6 sm:px-6'"
    >
        <header>
            <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">{{ title }}</h1>
            <p v-if="description" class="text-muted-foreground mt-1 text-sm">
                {{ description }}
            </p>
        </header>

        <div class="relative w-full max-w-xl">
            <svg
                class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
            >
                <path :d="iconPath('search')" />
            </svg>
            <PkTextInput
                v-model="query"
                type="search"
                class="h-10 rounded-full pl-9"
                :placeholder="searchPlaceholder"
                :aria-label="searchPlaceholder"
            />
        </div>

        <div
            v-if="visibleSections.length"
            class="grid grid-cols-1 gap-6 md:grid-cols-2"
            data-slot="directory-sections"
        >
            <section
                v-for="section in visibleSections"
                :key="section.key"
                class="bg-card rounded-lg border"
                :data-slot="`directory-section-${section.key}`"
            >
                <div class="px-5 py-4">
                    <h2 class="mb-3 text-sm font-semibold">{{ section.title }}</h2>
                    <div
                        class="grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5"
                    >
                        <component
                            :is="isExternalHref(link) ? 'a' : resolvedLink"
                            v-for="link in section.links"
                            :key="link.href + link.label"
                            :href="link.href"
                            :class="itemClass"
                            :target="isExternalHref(link) ? '_blank' : undefined"
                            :rel="isExternalHref(link) ? 'noopener noreferrer' : undefined"
                        >
                            <svg
                                class="size-4 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <path :d="iconPath(link.icon)" />
                            </svg>
                            {{ link.label }}
                        </component>
                    </div>
                </div>
            </section>
        </div>

        <p
            v-else
            class="text-muted-foreground py-8 text-center text-sm"
            data-slot="directory-empty"
        >
            Nothing matches "{{ query }}".
        </p>
    </div>
</template>
