import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

/**
 * Panel strings, from the messages the server shares with every page.
 *
 * NO i18n LIBRARY. The panel needs lookup by dotted key and `:placeholder`
 * substitution, which is roughly twenty lines - against a dependency that brings
 * its own message format, its own build step and its own opinions about
 * pluralisation. The whole surface is below.
 *
 * A MISSING KEY RETURNS THE KEY, loudly and visibly. Returning an empty string
 * would leave a blank button that looks like a styling bug; returning the key
 * puts `actions.save` on screen, which is unmistakably a missing translation and
 * says exactly which one.
 */
export function useTranslations() {
    const page = usePage()

    const messages = computed<Record<string, unknown>>(
        () => (page.props.messages as Record<string, unknown>) ?? {},
    )

    const direction = computed<'ltr' | 'rtl'>(
        () => ((page.props.locale as any)?.direction ?? 'ltr') as 'ltr' | 'rtl',
    )

    const locale = computed<string>(() => (page.props.locale as any)?.current ?? 'en')

    /**
     * `t('actions.save')`, with `t('table.no_results', { term: 'x' })` for
     * placeholders.
     *
     * Placeholders are `:name`, matching Laravel's, so a string can move between
     * a Blade view and a Vue component without being rewritten - and so a
     * translator sees one syntax rather than two.
     */
    function t(key: string, replace: Record<string, string | number> = {}): string {
        const found = key
            .split('.')
            .reduce<unknown>(
                (carry, part) =>
                    carry && typeof carry === 'object'
                        ? (carry as Record<string, unknown>)[part]
                        : undefined,
                messages.value,
            )

        if (typeof found !== 'string') {
            return key
        }

        return Object.entries(replace).reduce(
            (text, [name, value]) => text.replaceAll(`:${name}`, String(value)),
            found,
        )
    }

    return { t, direction, locale, isRtl: computed(() => direction.value === 'rtl') }
}
