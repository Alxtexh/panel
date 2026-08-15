<script setup lang="ts">
/**
 * The page footer: copyright and brand at the bottom of the MAIN COLUMN.
 *
 * This is not a second overlay and not the sidebar's Help/FAQ/What's new/About
 * list. Those stay on the rail. AppContent wraps the page in a `min-h-full`
 * column so this is AFTER the widgets, never a flex sibling of an `h-full`
 * dashboard. Short screens still pin it with `mt-auto`; long screens scroll to
 * it with the rest of the content.
 *
 * BRAND COMES FROM THE PANEL, then `app.name`, then "Panel". Extra links are
 * whatever `panel.footer.links` shared; empty by default so a stock install
 * does not grow 404s.
 */
import { Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

type FooterLink = { label: string; href: string }

const page = usePage()

const year = new Date().getFullYear()

const brand = computed(() => {
    const panel = page.props.panel as { brand?: string | null } | null | undefined

    return (
        panel?.brand
        || (page.props.panelBrand as string | null)
        || (page.props.name as string | null)
        || 'Panel'
    )
})

const links = computed<FooterLink[]>(() => {
    const panel = page.props.panel as { footerLinks?: FooterLink[] } | null | undefined

    return Array.isArray(panel?.footerLinks) ? panel.footerLinks : []
})
</script>

<template>
    <footer
        data-slot="app-footer"
        class="mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
    >
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {{ year }} {{ brand }}</p>

            <nav v-if="links.length" class="flex flex-wrap gap-x-4 gap-y-1" aria-label="Footer">
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
