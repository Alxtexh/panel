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
 *   - keyset paging via a client-side cursor stack, so "previous" is free
 */
export interface ListPageProps {
    records: Record<string, any>[]
    filters: Record<string, unknown>
    search: string
    sort: string
    direction: 'asc' | 'desc'
    nextCursor: string | null
    perPage: number
    perPageOptions: number[]
}

export function useListTable(url: string, props: ListPageProps) {
    const rows = ref<Record<string, any>[]>([...props.records])
    const loading = ref(false)
    const showSpinner = ref(false)

    let spinnerTimer: ReturnType<typeof setTimeout> | undefined

    /**
     * Cursors for the pages already visited, oldest first.
     *
     * Keyset pagination only knows how to go FORWARD — a cursor says "everything
     * after this row", not "everything before it". Rather than run a second
     * reversed query to walk backwards, the pages we have already been through
     * are remembered here, so "previous" is a stack pop and costs the server
     * nothing beyond re-fetching that page.
     *
     * `stack[i]` is the cursor that produced page i+2 (page 1 needs no cursor).
     */
    const cursorStack = ref<string[]>([])
    const page = computed(() => cursorStack.value.length + 1)

    // Any change to filters, sort, search or page size invalidates the trail:
    // those cursors point into a result set that no longer exists.
    function resetPagination() {
        cursorStack.value = []
    }

    watch(
        () => props.records,
        (records) => {
            rows.value = [...records]
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
            perPage: props.perPage,
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

    /**
     * Any state change other than paging. Always returns to page 1, because the
     * cursor trail describes a result set the new filters no longer produce.
     */
    function apply(overrides: Record<string, unknown> = {}) {
        resetPagination()
        request(query(overrides))
    }

    function request(params: Record<string, string>) {
        loading.value = true
        spinnerTimer = setTimeout(() => (showSpinner.value = true), 300)

        router.get(url, params, {
            only: [
                'records',
                'filters',
                'search',
                'sort',
                'direction',
                'nextCursor',
                'perPage',
                'total',
            ],
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

    function nextPage() {
        if (!props.nextCursor || loading.value) return

        const cursor = props.nextCursor
        cursorStack.value = [...cursorStack.value, cursor]
        request({ ...query(), cursor })
    }

    function previousPage() {
        if (cursorStack.value.length === 0 || loading.value) return

        // Drop the cursor that got us here; the one beneath it produced the
        // previous page. An empty stack means page 1, which takes no cursor.
        const stack = cursorStack.value.slice(0, -1)
        cursorStack.value = stack

        const cursor = stack.length ? stack[stack.length - 1] : null
        request(cursor ? { ...query(), cursor } : query())
    }

    function setPerPage(value: number) {
        apply({ perPage: value })
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
        showSpinner,
        isFiltered,
        page,
        hasNext: computed(() => props.nextCursor !== null),
        hasPrevious: computed(() => cursorStack.value.length > 0),
        apply,
        nextPage,
        previousPage,
        setPerPage,
        sortBy,
        setFilter,
        setSearch,
        resetFilters,
        clearAll,
    }
}
