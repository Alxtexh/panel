import { router } from '@inertiajs/vue3'
import { computed, ref, watch } from 'vue'

/**
 * The Inertia adapter.
 *
 * This is the ONLY place that knows list screens are driven by Inertia. It lives
 * in the app, not in @panelkit/ui, because spec §4 rule 1 says nothing in the UI
 * package may import Inertia — the components emit events, and this turns those
 * events into requests. Swapping Inertia for anything else means rewriting this
 * file and nothing else.
 *
 * Everything §10 requires of the transport lives here once:
 *
 *   - `only:` so a filter change carries DATA ONLY, never the page shell
 *   - preserveState/preserveScroll so the table never unmounts or jumps
 *   - `replace: true` so filtering does not bury the back button in history
 *   - a 300 ms delay before any loading indicator, because a flash of spinner
 *     reads as slower than a brief pause
 *   - keyset "load more" APPENDS rather than replacing
 */
export interface ListPageProps {
    records: Record<string, any>[]
    filters: Record<string, unknown>
    search: string
    sort: string
    direction: 'asc' | 'desc'
    nextCursor: string | null
}

export function useListTable(url: string, props: ListPageProps) {
    const rows = ref<Record<string, any>[]>([...props.records])
    const loading = ref(false)
    const loadingMore = ref(false)
    const showSpinner = ref(false)

    let spinnerTimer: ReturnType<typeof setTimeout> | undefined

    // "Load more" appends, so when the server sends a fresh first page (filter,
    // sort or search change) the accumulated list must be replaced outright.
    watch(
        () => props.records,
        (records) => {
            if (!loadingMore.value) rows.value = [...records]
        },
    )

    /**
     * Builds the query string from current state plus an override.
     *
     * `null` removes a parameter; `false` must NOT — it is an applied value for
     * a tri-state boolean filter, and dropping it would silently turn "only
     * inactive" into "no filter".
     */
    function query(overrides: Record<string, unknown> = {}): Record<string, string> {
        const merged: Record<string, unknown> = {
            search: props.search,
            sort: props.sort,
            direction: props.direction,
            ...props.filters,
            ...overrides,
        }

        const out: Record<string, string> = {}

        for (const [key, value] of Object.entries(merged)) {
            if (value === null || value === undefined || value === '') continue
            if (typeof value === 'boolean') {
                out[key] = value ? '1' : '0'
                continue
            }
            out[key] = String(value)
        }

        // Defaults are omitted so a pristine URL stays clean and shareable.
        if (out.sort === 'created_at') delete out.sort
        if (out.direction === 'desc') delete out.direction

        return out
    }

    function apply(overrides: Record<string, unknown> = {}) {
        loading.value = true
        spinnerTimer = setTimeout(() => (showSpinner.value = true), 300)

        router.get(url, query(overrides), {
            only: ['records', 'filters', 'search', 'sort', 'direction', 'nextCursor', 'total'],
            preserveState: true,
            preserveScroll: true,
            replace: true,
            onFinish: () => {
                clearTimeout(spinnerTimer)
                loading.value = false
                showSpinner.value = false
            },
        })
    }

    function loadMore() {
        if (!props.nextCursor || loadingMore.value) return

        loadingMore.value = true

        router.get(
            url,
            { ...query(), cursor: props.nextCursor },
            {
                only: ['records', 'nextCursor'],
                preserveState: true,
                preserveScroll: true,
                replace: true,
                onSuccess: () => {
                    rows.value = [...rows.value, ...props.records]
                },
                onFinish: () => (loadingMore.value = false),
            },
        )
    }

    function sortBy(key: string) {
        const direction = props.sort === key && props.direction === 'desc' ? 'asc' : 'desc'
        apply({ sort: key, direction })
    }

    function setFilter(key: string, value: unknown) {
        apply({ [key]: value })
    }

    function setSearch(value: string) {
        apply({ search: value })
    }

    function resetFilters() {
        apply(Object.fromEntries(Object.keys(props.filters).map((k) => [k, null])))
    }

    function clearAll() {
        apply({ search: '', ...Object.fromEntries(Object.keys(props.filters).map((k) => [k, null])) })
    }

    const isFiltered = computed(
        () => props.search !== '' || Object.values(props.filters).some((v) => v !== null && v !== undefined),
    )

    return {
        rows,
        loading,
        loadingMore,
        showSpinner,
        isFiltered,
        apply,
        loadMore,
        sortBy,
        setFilter,
        setSearch,
        resetFilters,
        clearAll,
    }
}
