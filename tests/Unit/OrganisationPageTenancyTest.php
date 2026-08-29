<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Pages\OrganisationPage;
use Alxtexh\Panel\Tests\TestCase;

/**
 * `registerPages()` mounts a route for anything `isEnabled()` does not
 * refuse - "A DISABLED PAGE IS NOT REGISTERED, so it routes nothing", per
 * its own docblock. `OrganisationPage` had no override, so it was ALWAYS
 * registered, on every tenancy mode including `none` - `panel:install`'s
 * own published default. The settings index correctly listed it (its link
 * is generated from `Route::has()`, and the route genuinely existed); every
 * click 404'd, because `OrganisationController::tenant()` requires a real
 * tenant Model and `TenantContext::tenant()` has none to give when tenancy
 * is off.
 *
 * `SettingsIndex`'s own docblock names this exact scenario - "a
 * single-tenant installation with no organisation screens at all" - as one
 * its omit-when-absent design is supposed to cover. It was not covered
 * because nothing told the PAGE to stop registering.
 *
 * `isEnabled()` reads `config('panel.tenancy.mode')` directly rather than
 * `TenantContext::mode()` - see that method's own docblock for why resolving
 * the scoped `TenantContext` from here corrupted it for the rest of the
 * request. A plain `config()` set/restore is all this needs.
 */
final class OrganisationPageTenancyTest extends TestCase
{
    protected function tearDown(): void
    {
        config(['panel.tenancy.mode' => 'column']);

        parent::tearDown();
    }

    public function test_organisation_page_is_disabled_when_tenancy_is_off(): void
    {
        config(['panel.tenancy.mode' => 'none']);

        $this->assertFalse(OrganisationPage::isEnabled());
    }

    public function test_organisation_page_stays_enabled_under_real_tenancy(): void
    {
        config(['panel.tenancy.mode' => 'column']);

        $this->assertTrue(OrganisationPage::isEnabled());
    }
}
