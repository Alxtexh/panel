/**
 * Thrown when POST {resource}/field-options fails validation or otherwise
 * rejects the mini-form. Carries per-field messages from Laravel's 422 body.
 */
export class CreateOptionError extends Error {
    readonly fieldErrors: Record<string, string>

    constructor(message: string, fieldErrors: Record<string, string> = {}) {
        super(message)
        this.name = 'CreateOptionError'
        this.fieldErrors = fieldErrors
    }
}

export function fieldErrorsFromPayload(errors: unknown): Record<string, string> {
    if (!errors || typeof errors !== 'object') {
        return {}
    }

    const out: Record<string, string> = {}

    for (const [key, messages] of Object.entries(errors as Record<string, unknown>)) {
        const first = Array.isArray(messages) ? messages[0] : messages

        if (typeof first === 'string' && first !== '') {
            out[key] = first
        }
    }

    return out
}
