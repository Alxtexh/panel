export type User = {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
};

export type Auth = {
    user: User;

    /**
     * Panel-level abilities, for hiding navigation that would only 403.
     *
     * PRESENTATION ONLY. Every one of these is re-checked at the endpoint, so a
     * client that ignores them gets a refusal rather than a mutation. They exist
     * so a link that always fails is never offered, not to decide anything.
     */
    can?: {
        manageRoles?: boolean;
        /** Backups and logs - the installation's own health, not a tenant's. */
        viewOperations?: boolean;
    };
};

/* @chisel-passkeys */
export type Passkey = {
    id: number;
    name: string;
    authenticator: string | null;
    created_at_diff: string;
    last_used_at_diff: string | null;
};
/* @end-chisel-passkeys */

export type TwoFactorConfigContent = {
    title: string;
    description: string;
    buttonText: string;
};
