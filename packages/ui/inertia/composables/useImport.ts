import { ref } from 'vue'

/**
 * The HTTP for `ImportDialog.vue`. THE FETCH LIVES HERE, NOT IN THE
 * COMPONENT, for the same reason `useBulkJob` is split from `ResourceIndex`
 * - a dialog should describe steps and emit events, not own error-handling
 * branches for two request shapes (`inspect`, then `store` twice: dry run
 * and real).
 */

export interface ImportField {
    key: string
    label: string
    required: boolean
}

export interface ImportInspection {
    headers: string[]
    fields: ImportField[]
}

export interface ImportFailure {
    line: number
    messages: string[]
}

export interface ImportRunResult {
    importable: number
    failed: number
    failures: ImportFailure[]
    truncated: boolean
    written?: number
    message?: string
    queued?: boolean
    token?: string
    failuresDownload?: string | null
}

/**
 * Laravel accepts the XSRF cookie echoed back as a header - the same thing
 * axios does automatically. Read here because this is a plain fetch, not an
 * Inertia visit, so nothing sets it for us. Duplicated from `useBulkJob`
 * rather than shared, because sharing it would mean either package
 * importing across the seam for four lines with no other purpose.
 */
function csrf(): string {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/)

    return match ? decodeURIComponent(match[1]) : ''
}

async function postForm(
    url: string,
    body: FormData,
): Promise<{ ok: boolean; status: number; payload: any }> {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': csrf(),
        },
        credentials: 'same-origin',
        body,
    })

    const payload = await response.json().catch(() => ({}))

    return { ok: response.ok, status: response.status, payload }
}

async function waitForJob(baseUrl: string, token: string): Promise<ImportRunResult> {
    for (let attempt = 0; attempt < 60; attempt++) {
        const response = await fetch(`${baseUrl}/jobs/${token}`, {
            headers: { Accept: 'application/json' },
            credentials: 'same-origin',
        })
        const payload = await response.json().catch(() => ({}))

        if (!response.ok) {
            throw new Error(payload.message ?? 'That import failed.')
        }

        if (payload.status === 'done') {
            return {
                importable: payload.importable ?? payload.total ?? 0,
                failed: payload.failed ?? 0,
                failures: payload.failures ?? [],
                truncated: Boolean(payload.truncated),
                written: payload.written ?? payload.done ?? 0,
                token,
                failuresDownload: payload.downloadable
                    ? `${baseUrl}/import/failures/${token}`
                    : null,
            }
        }

        if (payload.status === 'failed') {
            throw new Error(payload.error ?? 'That import failed.')
        }

        await new Promise((resolve) => setTimeout(resolve, 500))
    }

    throw new Error('That import is still running.')
}

export function useImport(baseUrl: string) {
    const busy = ref(false)
    const error = ref<string | null>(null)

    async function inspect(file: File): Promise<ImportInspection> {
        busy.value = true
        error.value = null

        try {
            const body = new FormData()
            body.append('file', file)

            const { ok, payload } = await postForm(`${baseUrl}/import/inspect`, body)

            if (!ok) {
                throw new Error(payload.message ?? 'That file could not be read.')
            }

            return payload
        } finally {
            busy.value = false
        }
    }

    /**
     * `dryRun` validates and maps every row and writes nothing - see
     * `ImportController::store`. A row-level failure comes back as a 422
     * with the SAME shape a clean run returns, because it is a result, not
     * an error: the operator did nothing wrong by uploading a file with a
     * bad row in it. Anything else that is not `ok` - a stray validation
     * error on the request itself, a 403 - IS an error.
     */
    async function run(
        file: File,
        mapping: Record<string, string>,
        dryRun: boolean,
    ): Promise<ImportRunResult> {
        busy.value = true
        error.value = null

        try {
            const body = new FormData()
            body.append('file', file)
            body.append('dryRun', dryRun ? '1' : '0')
            Object.entries(mapping).forEach(([column, field]) =>
                body.append(`mapping[${column}]`, field),
            )

            const { ok, status, payload } = await postForm(`${baseUrl}/import`, body)

            if (ok && payload?.queued && payload.token) {
                return await waitForJob(baseUrl, payload.token)
            }

            if (ok || (status === 422 && Array.isArray(payload.failures))) {
                return payload
            }

            throw new Error(payload.message ?? 'That import failed.')
        } finally {
            busy.value = false
        }
    }

    return { busy, error, inspect, run }
}
