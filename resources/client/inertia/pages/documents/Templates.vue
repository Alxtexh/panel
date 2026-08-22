<script setup lang="ts">
/*
 * EVERY PAGE PROP ARRIVES AS AN ATTRIBUTE, and this page's root is a
 * fragment. Inertia binds the whole payload onto the page component -
 * declared props bind as props, and the shared ones (panelNav, auth,
 * locale, and every deferred prop as it lands) arrive as plain
 * attributes with nowhere to go. Vue then warns once per prop, per
 * visit, which reads exactly like the page reloading in a loop.
 */
defineOptions({ inheritAttrs: false })

/**
 * The documents this panel can design.
 *
 * IT SAYS WHICH ONES HAVE BEEN DESIGNED. A row of identical cards tells somebody
 * nothing about where they left off, and "still on the shipped defaults" is the
 * single most useful fact about a template - it is the difference between a
 * document that was thought about and one that has your company name set to
 * "Your company".
 *
 * THE LIST COMES FROM THE REGISTRY, so a kind a plugin registered appears here
 * with no edit to this file.
 */
import { Head, Link } from '@inertiajs/vue3'
import { computed } from 'vue'
import { CATALOGUE_CONTAINER, CATALOGUE_GRID, PAGE_SHELL } from '@alxtexh-enterprise/panel'

const props = defineProps<{
    prefix: string
    kinds: { id: string; label: string; description: string; version: number | null }[]
}>()

const base = computed(() => (props.prefix === '/' ? '' : props.prefix))
</script>

<template>
    <Head title="Document templates" />

    <div :class="[PAGE_SHELL, CATALOGUE_CONTAINER, 'flex flex-col gap-4']">
        <header>
            <h1 class="text-xl font-semibold tracking-tight">Document templates</h1>
            <p class="text-muted-foreground text-sm font-normal">
                How the documents that leave this system look when they are printed.
            </p>
        </header>

        <div :class="CATALOGUE_GRID">
            <Link
                v-for="kind in kinds"
                :key="kind.id"
                :href="`${base}/documents/${kind.id}`"
                class="bg-card hover:border-muted-foreground/40 flex flex-col gap-1 rounded-lg border p-4 transition-colors"
            >
                <span class="font-medium">{{ kind.label }}</span>
                <span class="text-muted-foreground text-sm font-normal">{{ kind.description }}</span>
                <span class="text-muted-foreground mt-2 text-xs">
                    {{
                        kind.version === null
                            ? 'Still on the shipped defaults'
                            : `Version ${kind.version}`
                    }}
                </span>
            </Link>
        </div>

        <!-- An empty registry is a real state - an installation whose provider
             registered no kinds - and saying so beats an empty page. -->
        <p v-if="kinds.length === 0" class="text-muted-foreground text-sm font-normal">
            No document kinds are registered.
        </p>
    </div>
</template>
