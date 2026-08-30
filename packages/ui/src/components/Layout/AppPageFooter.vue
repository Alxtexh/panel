<script setup lang="ts">
/**
 * The page footer: copyright and brand at the bottom of the MAIN COLUMN.
 *
 * This is not a second overlay and not the sidebar's Help/FAQ/What's new/About
 * list. Those stay on the rail. AppContent places this AFTER the page slot,
 * as a sibling of the widgets, never inside the dashboard grid and never as a
 * `flex-1` / `h-full` peer. `mt-auto` only eats leftover space on a short
 * screen; it must not fight a page that claims the whole scrollport.
 *
 * BRAND COMES FROM THE PANEL, then `app.name`, then "Panel". Extra links are
 * whatever `panel.footer.links` shared; empty by default so a stock install
 * does not grow 404s.
 *
 * Hosts import this from `@alxtexh-enterprise/panel`. The shell renders it only
 * when `Panel::pageFooter(true)`.
 */
import { Link, usePage } from '@inertiajs/vue3'
import { computed, inject, unref } from 'vue'
import { PAGE_FOOTER_FROM_SHELL } from '../../composables/useShellPageFooter'

const props = defineProps<{
    /**
     * The shell's instance. Page-level imports omit this so they hide when
     * the panel already opted into a shell footer.
     */
    host?: boolean
}>()

type FooterLink = { label: string; href: string }

const page = usePage()

const year = new Date().getFullYear()

const brand = computed(() => {
    const panel = page.props.panel as { brand?: string | null } | null | undefined

    return (
        panel?.brand ||
        (page.props.panelBrand as string | null) ||
        (page.props.name as string | null) ||
        'Panel'
    )
})

const links = computed<FooterLink[]>(() => {
    const panel = page.props.panel as { footerLinks?: FooterLink[] } | null | undefined

    return Array.isArray(panel?.footerLinks) ? panel.footerLinks : []
})

const fromShell = inject(
    PAGE_FOOTER_FROM_SHELL,
    computed(() => false),
)

const suppressed = computed(() => !props.host && unref(fromShell) === true)
</script>

<template>
    <footer
        v-if="!suppressed"
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
