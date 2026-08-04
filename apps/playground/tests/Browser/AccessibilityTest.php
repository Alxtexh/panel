<?php

declare(strict_types=1);

namespace Tests\Browser;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTruncation;
use Laravel\Dusk\Browser;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Tests\DuskTestCase;

/**
 * The main screens, swept by axe.
 *
 * WHY THIS REPLACES A MANUAL AUDIT RATHER THAN SUPPLEMENTING IT. The Stage 11
 * audit found four real gaps by a person looking at the screens once - a
 * missing skip link, SPA navigation silent to a screen reader, nav links not
 * marking the current page, no honouring of `prefers-reduced-motion` - and
 * fixed all four. What it could not do is stay true: nobody re-runs a manual
 * pass on every PR, so the finding "this panel is accessible" ages the moment
 * anybody adds a screen. axe re-asks the same kind of question on every run.
 *
 * WHAT THIS DOES NOT REPLACE. axe finds what a machine can prove wrong -
 * missing labels, bad contrast, invalid ARIA, unreachable interactive
 * elements. It cannot tell you a focus order is confusing or that a modal's
 * copy makes sense read aloud. That is still a human's job; this is the floor
 * under it, checked automatically instead of eventually.
 *
 * ONE SCREEN PER TEST, not one test that visits all of them. A single
 * violation on the dashboard would otherwise report as "the sweep failed"
 * with six screens' worth of evidence to read past to find it.
 */
final class AccessibilityTest extends DuskTestCase
{
    use DatabaseTruncation;

    private int|string|null $operatorId = null;

    /** Mirrors PackagedScreensRenderTest's own seeding, for the same reason: a role is required or every list renders empty. */
    private function seedOperator(): void
    {
        $tenant = Tenant::create(['name' => 'Lakeside Fibre', 'slug' => 'lakeside']);

        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        $registrar = app(PermissionRegistrar::class);
        $previous = $registrar->getPermissionsTeamId();
        $registrar->setPermissionsTeamId($tenant->id);

        try {
            $user->assignRole(Role::findOrCreate('Administrator', 'web'));
        } finally {
            $registrar->setPermissionsTeamId($previous);
        }

        $this->operatorId = $user->getKey();

        $unique = uniqid('a', true);

        $plan = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->id,
            'name' => 'Home 20',
            'speed_mbps' => 20,
            'price_cents' => 250_000,
            'position' => 1,
            'is_active' => true,
        ]);

        Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->id,
            'plan_id' => $plan->id,
            'name' => 'Amina Otieno',
            'phone' => '+254'.substr((string) crc32($unique), 0, 9),
            'access_code' => strtoupper(substr(md5($unique), 0, 10)),
            'plan_type' => 'pppoe',
            'status' => 'active',
            'expiry_date' => '2026-12-31',
        ]);
    }

    /** The login screen, the one page every unauthenticated visitor actually reaches. */
    public function test_the_login_screen_has_no_serious_violations(): void
    {
        $this->browse(function (Browser $browser): void {
            $browser->visit('/login')->waitForText('Log in', 15);

            $this->assertNoSeriousAccessibilityViolations($browser, 'Login');
        });
    }

    /** The dashboard: the most widget-dense screen, and the one Stage 11's SPA-navigation fix targeted. */
    public function test_the_dashboard_has_no_serious_violations(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)->visit('/dashboard')->waitFor('main', 15);

            $this->assertNoSeriousAccessibilityViolations($browser, 'Dashboard');
        });
    }

    /** ResourceIndex: a table, filters, and the density/column controls. */
    public function test_the_resource_list_has_no_serious_violations(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            /*
             * WAIT FOR A ROW, NOT FOR A PARTICULAR PERSON.
             *
             * This used to wait on the seeded name "Amina Otieno", which made
             * the test depend on that row surviving at the top of a 250,000-row
             * list AND on the whole list painting. It failed about one run in
             * three inside the full suite and passed in five seconds alone -
             * raising the timeout to 45 seconds did not fix it, because under
             * load the contention scales with the wait.
             *
             * `tbody tr` is what the accessibility scan actually needs: a table
             * with rows in it. It is true the moment the first row lands, it
             * does not care which row, and it says what the test requires.
             */
            $browser->loginAs($this->operatorId)->visit('/clients')->waitFor('tbody tr', 30);

            $this->assertNoSeriousAccessibilityViolations($browser, 'Resource list');
        });
    }

    /** ResourceForm: every built-in field control at once. */
    public function test_the_create_form_has_no_serious_violations(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)->visit('/clients/create')->waitFor('form, input', 15);

            $this->assertNoSeriousAccessibilityViolations($browser, 'Create form');
        });
    }

    /** ResourceView: one record's page. */
    public function test_the_record_page_has_no_serious_violations(): void
    {
        $this->seedOperator();

        $id = Client::withoutGlobalScopes()->value('id');

        $this->browse(function (Browser $browser) use ($id): void {
            $browser->loginAs($this->operatorId)->visit('/clients/'.$id)->waitForText('Amina Otieno', 15);

            $this->assertNoSeriousAccessibilityViolations($browser, 'Record page');
        });
    }

    /** Trash: tabs, bulk actions, an empty state. */
    public function test_the_trash_screen_has_no_serious_violations(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)->visit('/trash')->waitForText('Trash', 15);

            $this->assertNoSeriousAccessibilityViolations($browser, 'Trash');
        });
    }

    /**
     * The document designer: the newest screen, and the one with the most
     * custom controls (segmented toggle, visual select, the live preview) -
     * exactly the kind of screen a manual audit would have missed until the
     * next time somebody remembered to look.
     */
    public function test_the_document_designer_has_no_serious_violations(): void
    {
        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operator())
                ->visit('/documents/voucher')
                ->waitForText('Voucher template', 15)
                ->waitFor('@document');

            $this->assertNoSeriousAccessibilityViolations($browser, 'Document designer');
        });
    }

    private function operator(): User
    {
        $tenant = Tenant::create(['name' => 'Nairobi Fibre', 'slug' => 'nairobi-'.uniqid()]);

        return User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }
}
