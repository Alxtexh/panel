<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\SettingsIndex;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

/**
 * The list of settings screens, derived rather than hand-written.
 *
 * NO ROUTE, NO ENTRY - which is the property that keeps this honest. A panel
 * that dropped a screen with `->without()`, or an application that never
 * registered one, must not be offered a link to it. The index is built from
 * what the panel ACTUALLY ROUTES, so a screen and its menu entry cannot drift
 * apart: removing the route removes the row, with nothing to remember.
 *
 * AN ABILITY SOMEBODY LACKS REMOVES THE ROW RATHER THAN DISABLING IT. A link
 * that always 403s advertises a screen and then refuses it - which tells
 * somebody what exists without letting them have it, and reads as a bug rather
 * than as a permission.
 */
final class SettingsIndexTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
    }

    protected function tearDown(): void
    {
        config(['panel.tenancy.model' => null]);

        parent::tearDown();
    }

    private function request()
    {
        $request = request();

        $request->setUserResolver(static fn () => auth()->user());

        return $request;
    }

    /** @return list<string> */
    private function keys(): array
    {
        return array_column(SettingsIndex::entries($this->request()), 'key');
    }

    public function test_it_lists_the_screens_this_panel_routes(): void
    {
        $keys = $this->keys();

        $this->assertContains('profile', $keys);
        $this->assertContains('security', $keys);
    }

    /**
     * EVERY ENTRY CARRIES A USABLE LINK, because an index whose rows go
     * nowhere is worse than no index.
     */
    public function test_every_entry_carries_an_href_and_a_description(): void
    {
        foreach (SettingsIndex::entries($this->request()) as $entry) {
            $this->assertNotSame('', (string) ($entry['href'] ?? ''), "[{$entry['key']}] has no link.");
            $this->assertNotSame('', (string) ($entry['title'] ?? ''));
            $this->assertNotSame('', (string) ($entry['description'] ?? ''));
        }
    }

    /**
     * A SCREEN GUARDED BY AN ABILITY IS ABSENT WITHOUT IT.
     *
     * `roles` declares `manage_roles`. Somebody without it should not be told
     * the screen exists.
     */
    public function test_an_entry_requiring_an_ability_is_absent_without_it(): void
    {
        $this->assertNotContains(
            'roles',
            $this->keys(),
            'A settings screen was advertised to somebody who may not open it.',
        );
    }

    public function test_the_entry_appears_once_the_ability_is_held(): void
    {
        $role = Role::findOrCreate('roles-admin', 'web');
        $role->givePermissionTo(Permission::findOrCreate('manage_roles', 'web'));

        $this->user->assignRole($role);

        $this->actingAs($this->user->fresh());

        $this->assertContains('roles', $this->keys());
    }

    /**
     * WORKSPACES HAS NOTHING TO SWITCH BETWEEN ON THE DEFAULT INSTALL.
     *
     * `Route::has()` cannot catch this the way it catches a dropped screen -
     * `settings/workspaces` stays registered on purpose so a direct link
     * degrades to "not available here" instead of 404. Found on an actual
     * fresh install: `panel.tenancy.model` is `null` by default (see
     * `config/panel.php`), the same gap `OrganisationPageTenancyTest`
     * documents for `OrganisationPage`, just never closed here.
     */
    public function test_workspaces_is_absent_without_an_organisation_model(): void
    {
        $this->assertNotContains(
            'workspaces',
            $this->keys(),
            'A settings screen was advertised with nothing for it to do.',
        );
    }

    public function test_workspaces_appears_once_tenancy_is_actually_configured(): void
    {
        config(['panel.tenancy.model' => Tenant::class]);

        $this->assertContains('workspaces', $this->keys());
    }

    /**
     * AN APPLICATION MAY ADD ITS OWN ROWS.
     *
     * `add()` is the seam for a screen the package knows nothing about - the
     * reference app's assistant settings arrive this way rather than by the
     * package hard-coding a feature only that application has.
     */
    public function test_an_application_can_add_its_own_entry(): void
    {
        SettingsIndex::add([[
            'key' => 'assistant',
            'title' => 'Assistant',
            'description' => 'The AI provider the assistant runs on.',
            'href' => static fn (): string => '/settings/assistant',
        ]]);

        $this->assertContains('assistant', $this->keys());
    }

    /**
     * AND AN ADDED ROW OBEYS THE SAME ABILITY RULE.
     *
     * Otherwise the seam is a way around the gate rather than an extension of
     * the list.
     */
    public function test_an_added_entry_respects_its_own_ability(): void
    {
        SettingsIndex::add([[
            'key' => 'restricted',
            'title' => 'Restricted',
            'description' => 'Only for some people.',
            'href' => static fn (): string => '/settings/restricted',
            'ability' => 'manage_restricted',
        ]]);

        $this->assertNotContains('restricted', $this->keys());
    }
}
