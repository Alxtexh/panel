<?php

declare(strict_types=1);

namespace Tests\Browser;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTruncation;
use Laravel\Dusk\Browser;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Tests\DuskTestCase;

/**
 * The packaged shell draws a real panel, in a real browser.
 *
 * WHY IT NEEDS A BROWSER. `PanelShell` reads `usePage()`, persists the collapse
 * state in `localStorage` and closes its drawer on navigation - none of which a
 * mounted-in-jsdom component test exercises honestly, and all of which fail in
 * ways that leave a page that still returns 200.
 *
 * THE SCREEN IT IS PROVED ON IS THE GENERATED PORTAL, not the reference app's
 * own shell. `/designproof` is mounted by a panel created for this test, so
 * what renders is exactly what a consumer gets from `make:panel` - which is the
 * comparison that started this: the same tables as the demo, in a frame that
 * used to be a scaffold.
 */
final class PanelShellRenderTest extends DuskTestCase
{
    use DatabaseTruncation;

    private int|string|null $operatorId = null;

    private function seedOperator(): void
    {
        $tenant = Tenant::create(['name' => 'Lakeside Fibre', 'slug' => 'lakeside-shell']);

        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'name' => 'Grace Wanjiru',
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
    }

    public function test_the_shell_renders_navigation_and_the_account_menu(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)
                ->visit('/shell-preview')
                ->waitForText('Subscribers', 15)

                // The sidebar, built from `panelNav` rather than hand-written.
                ->assertPresent('aside')
                ->assertSee('Subscribers')

                /*
                 * THE ACCOUNT MENU, which the scaffold did not have at all -
                 * it printed the name as plain text with no way to sign out.
                 */
                ->assertPresent('[aria-haspopup="menu"]')
                ->click('[aria-haspopup="menu"]')
                ->waitForText('Sign out', 5)
                ->assertSee('Sign out');

            $browser->screenshot('panel-shell');
        });
    }

    /**
     * COLLAPSE SURVIVES A NAVIGATION, which is the whole reason it is stored.
     *
     * Re-expanding on every page load is the panel forgetting a preference
     * somebody expressed deliberately - and it is invisible in a component
     * test, because there is no second page load in one.
     */
    public function test_the_sidebar_collapse_is_remembered(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)
                ->visit('/shell-preview')
                ->waitForText('Subscribers', 15)
                ->click('[aria-label="Collapse navigation"]')
                ->waitFor('[aria-label="Expand navigation"]', 5)
                ->visit('/shell-preview')
                ->waitFor('[aria-label="Expand navigation"]', 15)
                ->assertPresent('[aria-label="Expand navigation"]');
        });
    }
}
