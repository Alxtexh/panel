<?php

declare(strict_types=1);

namespace App\Documents;

use App\Http\Controllers\OrganisationController;
use PanelKit\Panel\Documents\DocumentBranding;
use PanelKit\Panel\Support\TenantContext;

/**
 * A document's letterhead, from the organisation settings screen.
 *
 * THE HALF THE PACKAGE CANNOT DO. `TenantBranding` reads the name off the tenant
 * model and stops there, because the logo is a file on a private disk served by
 * `organisation.logo` - an authenticated route belonging to this application.
 * The package has no way to construct that URL and would be guessing if it tried.
 *
 * ONE SOURCE FOR BOTH, which is the whole point of the change that removed the
 * fields from the template. An operator renames the organisation on one settings
 * screen and every document follows; there is no second copy to forget.
 */
final class OrganisationBranding implements DocumentBranding
{
    public function __construct(private readonly TenantContext $tenants) {}

    public function company(): string
    {
        $name = (string) ($this->tenants->tenant()?->name ?? '');

        // Never blank: a document with no letterhead reads as a rendering fault
        // rather than as an organisation nobody has named yet.
        return trim($name) !== '' ? $name : 'Your organisation';
    }

    /**
     * The organisation's uploaded mark, or null when there is none.
     *
     * A ROUTE, NOT A DATA URI, and the same one the sidebar wordmark uses. The
     * file is on the private disk behind a controller that checks the session,
     * so inlining bytes here would put an organisation's logo into every
     * rendered document payload - including the ones that get logged - to save a
     * request the browser caches anyway.
     *
     * Null is the ordinary case. The document falls back to the company name as
     * a wordmark, which is a decision rather than a gap in the corner.
     */
    public function logoUrl(): ?string
    {
        return OrganisationController::logoUrl(
            $this->tenants->tenant()?->logo_path,
        );
    }
}
