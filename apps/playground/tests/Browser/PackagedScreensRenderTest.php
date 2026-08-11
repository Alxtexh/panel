<?php

declare(strict_types=1);

namespace Tests\Browser;

use App\Demo\Models\Client;
use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTruncation;
use Laravel\Dusk\Browser;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Tests\DuskTestCase;

/**
 * Do the packaged screens actually draw anything.
 *
 * THE BUG CLASS THIS EXISTS FOR is the worst one in this codebase's history: an
 * SFC with no `<template>` block compiles to a component with NO RENDER
 * FUNCTION. Vue mounts it and draws an empty comment node. It type-checks, it
 * builds, the chunk contains the whole real component, and the page is blank
 * under a working header. In a production build there is no warning of any kind.
 *
 * Every server-side test passes while that happens, because the server is
 * perfect: it sent the right component name and the right props. So this is the
 * one thing only a browser can answer - and it is asked of each of the five
 * screens the package ships, because the failure hits them one at a time.
 *
 * THE ASSERTIONS ARE DELIBERATELY SHALLOW. This is not a test of what the tables
 * contain; feature tests own that. It asks whether the screen rendered at all,
 * which is a different question and the one nothing else asks.
 */
final class PackagedScreensRenderTest extends DuskTestCase
{
    use DatabaseTruncation;

    private int|string|null $operatorId = null;

    /**
     * An operator with a subscriber to look at.
     *
     * A ROLE IS GRANTED, because the panel denies any ability whose model has no
     * grant - so without one every list renders an empty state and the test would
     * be asserting that a permissions failure looks like a screen.
     */
    /*
     * NOT `seed()`. That name is taken by the framework's own public
     * `TestCase::seed()`, and a private method of the same name is a fatal error
     * about access levels rather than anything to do with this test.
     */
    private function seedOperator(): void
    {
        $tenant = Tenant::create(['name' => 'Lakeside Fibre', 'slug' => 'lakeside']);

        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        /*
         * THE TEAM IS SET BEFORE THE ROLE IS ASSIGNED.
         *
         * Roles are team-scoped by `tenant_id`, and Spatie reads that team from
         * a registrar a REQUEST populates. A test does not, so `assignRole`
         * writes a null `tenant_id` and the insert fails on the NOT NULL - which
         * is the same class of bug the application's own `hasPermission` note
         * calls out as having appeared three times: a guard must not depend on
         * ambient state, and neither must a grant.
         */
        $registrar = app(PermissionRegistrar::class);
        $previous = $registrar->getPermissionsTeamId();
        $registrar->setPermissionsTeamId($tenant->id);

        try {
            $user->assignRole(Role::findOrCreate('Administrator', 'web'));
        } finally {
            $registrar->setPermissionsTeamId($previous);
        }

        $this->operatorId = $user->getKey();

        $unique = uniqid('s', true);

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
            'name' => 'Grace Wanjiru',
            'phone' => '+254'.substr((string) crc32($unique), 0, 9),
            'access_code' => strtoupper(substr(md5($unique), 0, 10)),
            'plan_type' => 'pppoe',
            'status' => 'active',
            'expiry_date' => '2026-12-31',
        ]);
    }

    /**
     * The login screen renders, and is the wall in front of everything.
     *
     * Two things in one: an unauthenticated visit to a panel screen must land on
     * login rather than on a broken page, and the login screen itself must draw.
     */
    public function test_an_unauthenticated_visit_lands_on_a_rendered_login_screen(): void
    {
        $this->browse(function (Browser $browser): void {
            $browser->visit('/clients')
                ->waitForText('Log in', 10)
                ->assertPresent('input[type="password"]')
                ->assertPresent('button[type="submit"]');
        });
    }

    /** ResourceIndex: the list, with a row in it. */
    public function test_the_resource_list_renders_rows(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)
                ->visit('/clients')
                ->waitForText('Grace Wanjiru', 15)
                ->assertPresent('table');
        });
    }

    /** ResourceForm: the create screen, with controls on it. */
    public function test_the_create_form_renders_controls(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)
                ->visit('/clients/create')
                ->waitFor('form, input', 15)
                // An empty comment node has no inputs. One input is the whole
                // assertion: this screen either rendered or it did not.
                ->assertPresent('input');
        });
    }

    /** ResourceView: one record's page. */
    public function test_the_record_page_renders(): void
    {
        $this->seedOperator();

        $id = Client::withoutGlobalScopes()->value('id');

        $this->browse(function (Browser $browser) use ($id): void {
            $browser->loginAs($this->operatorId)
                ->visit('/clients/'.$id)
                ->waitForText('Grace Wanjiru', 15);
        });
    }

    /** Trash: the one screen that spans every resource. */
    public function test_the_trash_screen_renders(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)
                ->visit('/trash')
                // An EMPTY bin is the expected state here, and an empty state is
                // still a rendered screen - which is exactly the distinction a
                // blank page fails to make.
                ->waitForText('Trash', 15);
        });
    }

    /** PanelHome: a generated portal's own root. */
    public function test_a_generated_portals_home_renders(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)
                ->visit('/platform')
                ->waitFor('main', 15)
                ->assertPresent('main');
        });
    }

    /**
     * The dashboard, which is the screen with the most moving parts.
     *
     * Charts, stat cards, announcement banners and widgets that each render
     * inside their own error boundary - so a widget that throws is contained,
     * which is right, and also means a broken widget is invisible to any test
     * that only checks the response.
     */
    public function test_the_dashboard_renders_without_a_broken_widget(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)
                /*
                 * THE DASHBOARD BY ITS OWN ADDRESS, not by `/`.
                 *
                 * This visited the root, which was the dashboard until G.9 put
                 * a landing page there - and the failure it then produced was
                 * "waited 15 seconds for main", on a marketing page that had
                 * rendered perfectly. A test that reaches its subject through
                 * a redirect reports a routing change as a rendering fault.
                 * Where `/` sends a signed-in operator is asserted in
                 * `LandingPageTest`, which is the thing that actually knows.
                 */
                ->visit('/dashboard')
                ->waitFor('main', 15)
                /*
                 * THE BOUNDARY'S OWN MESSAGE IS THE ASSERTION. A widget that
                 * throws is caught by `PkBoundary` and replaced with
                 * "<name> could not be displayed" - so the page still returns
                 * 200 and still looks like a dashboard. That is the definition of
                 * a failure only a browser can see, and this is the string it
                 * leaves behind.
                 */
                ->assertDontSee('could not be displayed');
        });
    }
}
