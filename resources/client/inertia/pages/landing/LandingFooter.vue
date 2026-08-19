<script setup lang="ts">
/**
 * The footer every landing design shares.
 *
 * MOVED FROM THE REFERENCE APPLICATION, with its three links made props. They
 * were `/help`, `/about` and `/faq` - screens that application happens to
 * route, so a packaged footer hardcoding them would put three links to 404s at
 * the bottom of everybody's front page.
 */
import { Link } from '@inertiajs/vue3'

withDefaults(
    defineProps<{
        brand?: string
        tagline?: string
        /** Inline, not an imported type - see the note in PanelDashboard. */
        links?: { label: string; href: string }[]
    }>(),
    {
        brand: 'Alxtexhpanel',
        tagline: 'Built with Laravel, Inertia and Vue.',
        links: () => [],
    },
)

const year = new Date().getFullYear()
</script>

<template>
    <footer class="border-t">
        <div
            class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6"
        >
            <p class="text-muted-foreground">© {{ year }} {{ brand }}. {{ tagline }}</p>

            <nav v-if="links.length" class="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
                <Link
                    v-for="link in links"
                    :key="link.href"
                    :href="link.href"
                    class="hover:text-foreground"
                >
                    {{ link.label }}
                </Link>
            </nav>
        </div>
    </footer>
</template>
