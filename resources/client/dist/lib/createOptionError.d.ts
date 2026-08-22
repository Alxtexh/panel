/**
 * Thrown when POST {resource}/field-options fails validation or otherwise
 * rejects the mini-form. Carries per-field messages from Laravel's 422 body.
 */
export declare class CreateOptionError extends Error {
    readonly fieldErrors: Record<string, string>;
    constructor(message: string, fieldErrors?: Record<string, string>);
}
export declare function fieldErrorsFromPayload(errors: unknown): Record<string, string>;
