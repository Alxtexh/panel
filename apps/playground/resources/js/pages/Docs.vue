<script setup lang="ts">
/**
 * The API reference, rendered by Scalar.
 *
 * NOT A HAND-DESIGNED DOCS PAGE. The first version was one - a rail of topics
 * beside a code block - and it was the wrong thing twice over. It reimplemented,
 * badly, a solved problem: search, deep links, request/response schemas, a "try
 * it" console, and the layout conventions people already know from every other
 * API reference. And it was PROSE, which drifts from the application the moment
 * either changes, silently and while still looking authoritative.
 *
 * Scalar renders an OpenAPI document. The document is GENERATED from the panel's
 * own route registry, so there is nothing to keep in step by hand: add a
 * resource and its endpoints appear.
 *
 * IT LOADS FROM A URL, NOT AN INLINE OBJECT. The spec is a route, so it can be
 * fetched by anything else that wants it - a client generator, an HTTP client,
 * another team - rather than existing only inside this page's JavaScript.
 */
import '@scalar/api-reference/style.css';

import { Head } from '@inertiajs/vue3';
import { useAppearance } from '@panelkit/panel';
import { ApiReference } from '@scalar/api-reference';
import { computed } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';

defineOptions({ layout: AppLayout });

const { appearance } = useAppearance();

/**
 * Scalar has its own theming, so it is told the panel's scheme rather than
 * being restyled. Fighting a component library's own theme with overrides is
 * how a dependency upgrade turns into a redesign.
 */
const configuration = computed(() => ({
    url: '/docs/openapi.json',
    darkMode: appearance.value.theme === 'dark',
    hideDownloadButton: false,
    // The panel is the only server; a picker offering one entry is noise.
    hideModels: false,
}));
</script>

<template>
    <Head title="API reference" />

    <div class="h-full">
        <ApiReference :configuration="configuration" />
    </div>
</template>
