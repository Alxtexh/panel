<?php

declare(strict_types=1);

namespace Tests\Browser;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTruncation;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
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

    /**
     * THE COMMAND PALETTE OPENS, SEARCHES AND NAVIGATES.
     *
     * Every part of this is invisible to a component test: the shortcut is a
     * window listener, the results come from a real endpoint over a real
     * request, and "enter visits the record" is Inertia actually navigating.
     */
    public function test_the_command_palette_finds_a_record_and_visits_it(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)
                ->visit('/shell-preview')
                ->waitForText('Subscribers', 15)

                // The trigger is in the topbar on every screen.
                ->click('[aria-label="Search"]')
                ->waitFor('[role="dialog"][aria-label="Search"]', 5)

                /*
                 * PAGES FILTER LOCALLY, with no request at all - which is why
                 * this asserts on a nav entry rather than a record: it proves
                 * the palette is reading the registry the sidebar reads.
                 */
                ->type('[data-palette-input]', 'Client')

                /*
                 * ASSERTED INSIDE THE DIALOG, because the sidebar also says
                 * "Clients" - a page-wide `waitForText` passes while the
                 * palette shows nothing at all, which is how the first version
                 * of this test passed for the wrong reason.
                 *
                 * AND THE HEADING IS NOT ASSERTED. It reads `Pages` in the DOM
                 * and `PAGES` through the driver, because Selenium returns
                 * RENDERED text and the class is `uppercase`.
                 */
                ->waitForTextIn('[role="dialog"][aria-label="Search"]', 'Clients', 5)

                // Enter visits the highlighted item: the palette navigates.
                ->keys('[data-palette-input]', '{enter}')
                ->waitForLocation('/clients', 10)
                ->assertPathIs('/clients');

            $browser->screenshot('command-palette');
        });
    }

    /**
     * THE BELL COUNTS, OPENS AND CLEARS.
     *
     * The badge is seeded from the page payload, the list arrives from a real
     * endpoint on open, and "mark all as read" is an optimistic write - three
     * things that each look fine in isolation and are only honest together.
     *
     * IT OPENS ON THE INBOX because no alert condition holds in a truncated
     * database and one notification is unread. That is the deliberate behaviour:
     * landing on an empty Alerts tab while something waits behind it is the
     * panel hiding the thing you opened it for.
     */
    public function test_the_bell_shows_a_notification_and_marks_it_read(): void
    {
        $this->seedOperator();

        DB::table('notifications')->insert([
            'id' => (string) Str::uuid(),
            'type' => 'panel.test',
            'notifiable_type' => User::class,
            'notifiable_id' => $this->operatorId,
            'data' => json_encode([
                'title' => 'Subscriber export finished',
                'body' => '4,120 rows.',
                'severity' => 'info',
            ]),
            'read_at' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)
                ->visit('/shell-preview')
                ->waitForText('Subscribers', 15)

                // Seeded from the payload: correct before any request is made.
                ->assertSeeIn('[data-notification-bell]', '1')

                ->click('[data-notification-bell]')
                ->waitForText('Subscriber export finished', 10)
                ->assertSee('4,120 rows.')

                // The optimistic write: the badge clears without a reload.
                ->click('[data-mark-all-read]')
                ->waitUntilMissingText('Mark all as read', 5);

            $browser->screenshot('notification-bell');
        });
    }

    /**
     * THE COLLAPSED RAIL STILL SAYS WHAT ITS ICONS ARE.
     *
     * Collapsed, the only thing separating two entries is a 16px glyph, and the
     * native `title` tooltip takes about a second - long enough that people
     * expand the sidebar again, which is the feature undone. The flyout is CSS
     * on hover, so this asserts it EXISTS and is hidden until then rather than
     * asserting a hover state the driver reports inconsistently.
     */
    public function test_the_collapsed_sidebar_labels_its_icons(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            /*
             * THE COLLAPSE IS PERSISTED, which is the point of it and a hazard
             * here: the test above leaves it collapsed in `localStorage`, and
             * Dusk reuses one browser across a class. Starting from a known
             * state rather than from whatever ran first.
             */
            $browser->loginAs($this->operatorId)
                ->visit('/shell-preview')
                ->script('window.localStorage.removeItem("panelkit.sidebar.collapsed")');

            $browser->visit('/shell-preview')
                ->waitForText('Subscribers', 15)

                // Expanded: labels are inline, so there is nothing to fly out.
                ->assertMissing('[data-nav-flyout]')

                ->click('[aria-label="Collapse navigation"]')
                ->waitFor('[aria-label="Expand navigation"]', 5)

                /*
                 * PRESENT BUT NOT VISIBLE. `assertPresent` rather than
                 * `assertVisible` is the honest assertion for a hover label -
                 * and it is still load-bearing, because the bug it guards is the
                 * flyout not being rendered at all when collapsed.
                 */
                ->assertPresent('[data-nav-flyout]')
                ->assertMissing('[data-nav-flyout]:not(.invisible)');

            $browser->screenshot('collapsed-rail');
        });
    }

    /**
     * THE PHONE GETS A BOTTOM BAR, and the desktop does not get two navigations.
     *
     * `PkBottomNav` shipped in `@alxtexh-enterprise/panel` and nothing in the package ever
     * mounted it, so every consumer's handset got a hamburger at the top of the
     * screen - the part of a phone a thumb reaches least.
     */
    public function test_the_bottom_bar_appears_on_a_phone_and_not_on_a_desktop(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)
                ->resize(1280, 900)
                ->visit('/shell-preview')
                ->waitForText('Subscribers', 15)

                // On a desktop the sidebar is the answer; a second nav competes.
                ->assertMissing('nav[aria-label="Primary"]:not(.hidden)')

                ->resize(390, 844)
                ->waitFor('nav[aria-label="Primary"]', 5)
                ->assertVisible('nav[aria-label="Primary"]');

            $browser->screenshot('mobile-bottom-bar');

            $browser->resize(1280, 900);
        });
    }
}
