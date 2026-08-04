<script setup lang="ts">
/**
 * Where you are, derived rather than declared.
 *
 * NOTHING NEW HAS TO BE SENT. The trail is read from the same `panelNav` the
 * sidebar draws: the longest entry whose href prefixes the current URL is the
 * section, its `group` is the parent, and whatever remains of the path is the
 * record. A server-side breadcrumb list would be a fourth place that has to
 * agree with the navigation, and the one that drifts is the one nobody looks at.
 *
 * THE LAST CRUMB IS NOT A LINK, because it is the page you are on - and a link
 * to here is a click that does nothing, which teaches people the trail is
 * decorative.
 *
 * IT RENDERS NOTHING AT THE PANEL ROOT. A breadcrumb reading "Dashboard" under a
 * heading reading "Dashboard" is furniture.
 *
 * A GROUP IS NOT A DESTINATION. Sidebar groups are headings, not screens, so the
 * parent crumb is plain text - making it a link would send somebody to a URL
 * that was never routed.
 */
import { Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        /**
         * Overrides the derived trail entirely.
         *
         * A SCREEN THAT KNOWS BETTER SHOULD SAY SO - a record page can name the
         * record, which no amount of URL reading will produce.
         */
        items?: { title: string; href?: string | null }[]
    }>(),
    { items: undefined },
)

const page = usePage()

const nav = computed<any[]>(() => (page.props as any).panelNav ?? [])

const prefix = computed<string>(() => {
    const path = (page.props as any).panel?.path ?? '/'

    return path === '/' ? '' : `/${String(path).replace(/^\/|\/$/g, '')}`
})

/** The path without query or hash - a trail is about the route, not the filter. */
const path = computed<string>(
    () =>
        String(page.url ?? '/')
            .split('?')[0]
            .split('#')[0],
)

const derived = computed<{ title: string; href?: string | null }[]>(() => {
    const here = path.value.replace(/\/$/, '')

    if (here === '' || here === prefix.value) {
        return []
    }

    /*
     * THE LONGEST MATCH WINS, which is the same rule the sidebar's active state
     * uses and for the same reason: `/clients` prefixes `/clients/5`, and so
     * does `/` - taking the first match would make every page a child of the
     * home entry.
     */
    let best: any = null

    for (const entry of nav.value) {
        const href = String(entry.href ?? '')

        if (href !== '' && (here === href || here.startsWith(`${href}/`))) {
            if (best === null || href.length > String(best.href).length) {
                best = entry
            }
        }
    }

    if (best === null) {
        return []
    }

    const trail: { title: string; href?: string | null }[] = []

    if (best.group) {
        trail.push({ title: String(best.group), href: null })
    }

    const rest = here.slice(String(best.href).length).replace(/^\//, '')

    // On the section's own screen the section IS the page, so it does not link.
    trail.push({ title: String(best.title), href: rest === '' ? null : String(best.href) })

    for (const segment of rest.split('/').filter(Boolean)) {
        trail.push({ title: humanise(segment), href: null })
    }

    return trail
})

/**
 * A path segment as a word.
 *
 * A NUMERIC SEGMENT IS A RECORD ID and reads as "#5" rather than "5", because a
 * bare number in a trail looks like a page number. The record's actual name is
 * something only the screen knows - which is what `items` is for.
 */
function humanise(segment: string): string {
    const decoded = decodeURIComponent(segment)

    if (/^\d+$/.test(decoded)) {
        return `#${decoded}`
    }

    return decoded.replace(/[-_]/g, ' ').replace(/^./, (c) => c.toUpperCase())
}

const crumbs = computed(() => props.items ?? derived.value)
</script>

<template>
    <nav v-if="crumbs.length" aria-label="Breadcrumb" data-breadcrumbs>
        <ol class="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm">
            <li
                v-for="(crumb, index) in crumbs"
                :key="`${crumb.title}-${index}`"
                class="flex items-center gap-1.5"
            >
                <span v-if="index > 0" aria-hidden="true" class="opacity-50">/</span>

                <Link
                    v-if="crumb.href"
                    :href="crumb.href"
                    class="hover:text-foreground transition-colors"
                >
                    {{ crumb.title }}
                </Link>

                <span v-else :aria-current="index === crumbs.length - 1 ? 'page' : undefined">
                    {{ crumb.title }}
                </span>
            </li>
        </ol>
    </nav>
</template>
