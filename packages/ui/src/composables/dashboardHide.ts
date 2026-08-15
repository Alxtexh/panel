import type { InjectionKey, Ref } from 'vue'

/**
 * Dashboard chrome can hide a card without destroying it.
 *
 * Chart cards, the shortcuts widget and a detailer all share one list of
 * hidden ids, persisted in localStorage. A widget that injects this can
 * register a label so the "Hidden widgets" control can restore it later.
 */
export const DASHBOARD_HIDDEN_STORAGE_KEY = 'panel.dashboard.hiddenWidgets'

export interface DashboardHide {
    hidden: Ref<Set<string>>
    hide: (id: string, label?: string) => void
    show: (id: string) => void
    register: (id: string, label: string) => void
    labels: Ref<Record<string, string>>
}

export const DASHBOARD_HIDE_KEY: InjectionKey<DashboardHide> = Symbol('dashboardHide')
