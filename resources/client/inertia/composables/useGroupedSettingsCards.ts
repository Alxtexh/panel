import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

/**
 * `Panel::groupedSettingsCards()`. Bordered cards on the multi-section
 * settings screens instead of one flat list - on by default.
 *
 * READ FROM `panel.*`, NOT A PROP. Profile, Security and the rest are each
 * rendered directly by their own controller under a fixed page name, so
 * there is no template position a host could pass a prop into without
 * forking the file. `panel.*` is the shared route every panel-wide toggle
 * already takes (`authTestimonial`, `authImage`, `pageFooter`).
 *
 * ONE COMPOSABLE, NOT SEVEN COPIES of the same three lines - `Security.vue`
 * had this inline before other settings screens needed the identical
 * read, and a value re-derived per file is exactly what drifts the moment
 * one of them is edited and the others are not.
 */
export function useGroupedSettingsCards() {
    const page = usePage()

    const grouped = computed(
        () =>
            (page.props.panel as { groupedSettingsCards?: boolean } | undefined)
                ?.groupedSettingsCards === true,
    )

    /** A section with its own `<Heading>`: the whole block gets the card. */
    const sectionClass = computed(() =>
        grouped.value ? 'space-y-6 rounded-lg border p-6' : 'space-y-6',
    )

    /** A section whose child already draws its own `<Heading>` and `space-y-6`. */
    const wrapClass = computed(() => (grouped.value ? 'rounded-lg border p-6' : ''))

    return { grouped, sectionClass, wrapClass }
}
