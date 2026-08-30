import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'

export type SocialProvider = {
    key: string
    label: string
    url: string
    configured?: boolean
    hint?: string | null
}

/**
 * Sign-in providers for this request.
 *
 * PAGE PROPS WIN when a controller sends `socialProviders` explicitly; otherwise
 * the list comes from `SharePanelProps`, which resolves `Panel::socialite()`
 * and `.env` credentials once for login, register, OTP, the landing page, and
 * the auth-family previews.
 */
export function useSocialProviders(
    explicit?: SocialProvider[] | null,
): ComputedRef<SocialProvider[]> {
    const page = usePage()

    return computed(() => {
        if (explicit !== undefined && explicit !== null) {
            return explicit
        }

        const shared = (page.props as { socialProviders?: SocialProvider[] }).socialProviders

        return shared ?? []
    })
}
