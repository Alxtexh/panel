/**
 * Session expiry lives in `@panelkit/inertia` now.
 *
 * KEPT AS A RE-EXPORT rather than deleted, because `app.ts` installs the
 * transport hook by importing from here and a consumer's own code may too. The
 * one-line indirection is the seam: point it somewhere else and nothing that
 * imports it has to change.
 */
export {
    installSessionExpiryPreview,
    notifySessionExpired,
    sessionExpired,
    watchForSessionExpiry,
} from '@panelkit/inertia';
