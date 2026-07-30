<?php

declare(strict_types=1);

namespace PanelKit\Panel\Documents;

use PanelKit\Panel\Support\TenantContext;

/**
 * The letterhead, read from the current organisation.
 *
 * THE DEFAULT, AND DELIBERATELY PARTIAL. The NAME is a column on the tenant
 * model, so this can read it. The LOGO is a file on a private disk served by an
 * application's own authenticated route, and no amount of guessing in here
 * produces that URL - so this returns null and the document falls back to the
 * name as a wordmark, which is a correct document rather than a broken image.
 *
 * An application that has somewhere to serve a logo from binds its own
 * implementation. `AppServiceProvider` in the reference app is the worked
 * example.
 *
 * IT READS THROUGH `TenantContext`, so it is tenant-scoped for free and cannot
 * be the place a name crosses the boundary.
 */
final class TenantBranding implements DocumentBranding
{
    public function __construct(private readonly TenantContext $tenants) {}

    /**
     * The organisation's name, or a placeholder that says so.
     *
     * NOT AN EMPTY STRING when there is no tenant. A document with a blank
     * letterhead looks like a rendering fault; one that says "Your organisation"
     * looks like a panel nobody has configured yet, which is the truth. The case
     * arises in single-tenant installations and in a console render.
     */
    public function company(): string
    {
        $tenant = $this->tenants->tenant();

        $name = is_object($tenant) && isset($tenant->name) ? (string) $tenant->name : '';

        return trim($name) !== '' ? $name : 'Your organisation';
    }

    /**
     * Null, always, and that is not a stub.
     *
     * There is nowhere in this package that can serve a tenant's uploaded file:
     * the disk, the route and the authorisation are all the application's. A
     * guess here would be a URL that 404s on every document.
     */
    public function logoUrl(): ?string
    {
        return null;
    }
}
