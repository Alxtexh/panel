<?php

declare(strict_types=1);

namespace PanelKit\Panel\Documents;

/**
 * Where a document's letterhead comes from.
 *
 * THE TEMPLATE USED TO ASK FOR THE COMPANY NAME AND A LOGO URL, and that was
 * wrong for the same reason a second branding page was wrong: the panel already
 * knows. An organisation has a name and an uploaded logo on its own settings
 * screen, and asking again produces two answers to one question - so the invoice
 * says "Your company" while the sidebar says the real name, and whoever notices
 * has to guess which one is authoritative.
 *
 * IT IS ALSO WHERE THE DUPLICATION HURTS MOST. A company that renames itself
 * updates one settings screen and expects every document to follow. If each
 * template carries its own copy, the invoice, the receipt and the voucher are
 * three places to remember - and the one nobody remembers is the one that goes
 * to a customer under the old name.
 *
 * A CONTRACT RATHER THAN A DIRECT READ, because the two halves live in different
 * places. The NAME is on the tenant model, which this package can reach through
 * `TenantContext`. The LOGO is a file on a private disk served by an
 * application's authenticated route - the package cannot construct that URL and
 * should not try. So the default implementation supplies what it can and an
 * application binds one that supplies the rest.
 */
interface DocumentBranding
{
    /**
     * The name that appears on the letterhead.
     *
     * NEVER EMPTY. A document with no letterhead at all looks like a draft, so
     * an implementation with nothing to offer should return something honest
     * rather than an empty string.
     */
    public function company(): string;

    /**
     * A URL for the organisation's logo, or null when there is none.
     *
     * NULL IS THE NORMAL CASE, not a failure - most organisations never upload
     * one. The renderer falls back to the company name set as a wordmark, which
     * is a decision rather than a gap in the corner of the page.
     */
    public function logoUrl(): ?string;
}
