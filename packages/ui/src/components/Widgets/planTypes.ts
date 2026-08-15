/**
 * Domain-neutral subscription plan shapes for PlanCard / PlanEditor.
 *
 * Apps persist their own models. These are the props the kit draws.
 */

export interface PlanPerk {
    value: number | boolean | string[] | string
    overview?: string | null
}

export interface ExtraPerk {
    key: string
    value: string
}

export interface PlanRecord {
    id: string
    name: string
    shortDescription?: string | null
    description?: string | null
    /** Billing length in days: 30 monthly, 365 yearly, 999999 lifetime. */
    days: number
    price: number
    priceFormatted?: string | null
    currency?: string | null
    activeUsers?: number
    featured?: boolean
    recommended?: boolean
    trial?: boolean
    trialDays?: number
    active?: boolean
    perks?: Record<string, PlanPerk>
    extraPerks?: ExtraPerk[]
}

export interface PlanModuleOption {
    key: string
    label: string
    description?: string | null
    children?: string[]
    requires?: string[]
}

export interface PlanLimitField {
    key: string
    label: string
    hint?: string | null
    /** `number` uses -1 for Unlimited. `toggle` is a boolean perk. */
    kind: 'number' | 'toggle'
    step?: number
}

export function cycleLabel(days: number): string {
    if (days === 30) {
        return 'Per month'
    }

    if (days === 365) {
        return 'Per year'
    }

    return 'Lifetime'
}

export function formatPerkValue(value: PlanPerk['value']): string {
    if (value === true || value === false) {
        return ''
    }

    if (value === -1 || value === '-1') {
        return 'Unlimited'
    }

    if (Array.isArray(value)) {
        return value.join(', ')
    }

    return String(value)
}

export function perkGranted(value: PlanPerk['value']): boolean {
    if (value === false || value === 0 || value === '0' || value === '') {
        return false
    }

    if (Array.isArray(value)) {
        return value.length > 0
    }

    return true
}
