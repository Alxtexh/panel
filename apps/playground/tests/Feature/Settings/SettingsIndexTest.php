<?php

declare(strict_types=1);

namespace Tests\Feature\Settings;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Support\Abilities;
use Tests\TestCase;

/**
 * Roadmap 3.7: `/settings` is a searchable index now, not a redirect.
 *
 * THE GATE MATTERS MORE THAN THE LIST. The account menu's own "User
 * management" entry is hidden from anyone without `manage_roles` for a
 * stated reason - a link that always 403s advertises a page and then
 * refuses it - and this index would defeat that the moment it listed the
 * same destination unconditionally.
 *
 * EVERY OPERATOR HERE HAS EXPLICIT ABILITIES, never a bare factory user. A
 * plain `User::factory()->create()` is the FIRST account in its tenant, and
 * `UserFactory::configure()` auto-attaches an Administrator role to exactly
 * that user - so a "does this need the ability" test against a bare user
 * would pass by accident, granted everything rather than the one thing being
 * tested. `withAbilities()` explicitly strips that auto-grant first.
 */
final class SettingsIndexTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
    }

    /** @param list<string> $abilities */
    private function operator(array $abilities): User
    {
        return User::factory()
            ->withAbilities($abilities)
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
    }

    public function test_the_index_lists_the_ungated_baseline(): void
    {
        // manage_assistant adds Assistant, and this test is about the ungated
        // baseline. `manage_roles` is excluded too because it used to add User
        // management here - it no longer does, and holding it must not start
        // adding anything back without this list being changed on purpose.
        $user = $this->operator(array_values(array_diff(
            Abilities::all(),
            ['manage_roles', 'manage_assistant'],
        )));

        $entries = $this->actingAs($user)->get('/settings')->assertOk()
            ->viewData('page')['props']['entries'];

        $titles = array_column($entries, 'title');

        $this->assertSame(['Profile', 'Security', 'Organisation', 'Workspaces'], $titles);
    }

    /** The Assistant entry appears only for holders of manage_assistant. */
    public function test_the_assistant_entry_is_gated(): void
    {
        $holder = $this->operator(['manage_assistant']);

        $titles = array_column(
            $this->actingAs($holder)->get('/settings')->assertOk()
                ->viewData('page')['props']['entries'],
            'title',
        );

        $this->assertContains('Assistant', $titles);
    }

    /*
     * THE ABSENCE-NOT-DISABLED RULE IS STILL COVERED, and no longer needs a
     * test of its own here. `test_the_assistant_entry_is_gated` proves a gated
     * entry APPEARS for a holder, and `test_the_index_lists_the_ungated_baseline`
     * asserts an exact list that Assistant is not in - which is the same rule
     * from the other side. The pair that used to stand here rode on user
     * management, which this index no longer lists at all.
     */

    /**
     * AND USER MANAGEMENT IS NOT LISTED HERE AT ALL - not even for somebody
     * holding the ability that used to reveal it.
     *
     * It is its own destination, reached from the account menu. While it was a
     * settings entry it also inherited the settings SHELL, so the screen opened
     * under a second "Settings" heading with a back-link to a place it had
     * never come from. This asserts the placement rather than the chrome,
     * because the chrome followed from the placement.
     */
    public function test_user_management_is_not_a_settings_entry(): void
    {
        $user = $this->operator(['manage_roles']);

        $entries = $this->actingAs($user)->get('/settings')->assertOk()
            ->viewData('page')['props']['entries'];

        $this->assertNotContains('User management', array_column($entries, 'title'));
    }

    /**
     * Each entry's href actually resolves, rather than a description of a
     * page nobody wired up.
     *
     * Security needs a recently-confirmed password (`RequirePassword`) or it
     * redirects to ask for one - correct behaviour, and unrelated to whether
     * this index points at the right place, so the session confirms it the
     * same way `SecurityTest` does.
     */
    public function test_every_entrys_href_resolves(): void
    {
        $user = $this->operator(['manage_roles']);

        $entries = $this->actingAs($user)->get('/settings')->assertOk()
            ->viewData('page')['props']['entries'];

        foreach ($entries as $entry) {
            $this->actingAs($user)
                ->withSession(['auth.password_confirmed_at' => time()])
                ->get($entry['href'])
                ->assertOk();
        }
    }

    /** `/settings` used to redirect straight to Profile; it renders its own page now. */
    public function test_settings_no_longer_redirects_to_profile(): void
    {
        $user = $this->operator(Abilities::all());

        $component = $this->actingAs($user)->get('/settings')->assertOk()
            ->viewData('page')['component'];

        $this->assertSame('settings/Index', $component);
    }
}
