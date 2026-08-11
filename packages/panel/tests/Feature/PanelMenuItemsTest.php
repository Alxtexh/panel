<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelNavigation;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

/**
 * The two ways a panel adds something the framework did not derive.
 *
 * BOTH EXIST BECAUSE DERIVATION HAS A FLOOR. The sidebar is built from the
 * resource registry and the account menu from a fixed packaged core, which is
 * right until an installation wants a link to a status page, an external
 * dashboard or a report - none of which is a resource, and the old workaround
 * was a page that existed only to redirect somewhere else.
 *
 * `href` MAY BE A CLOSURE AND USUALLY SHOULD BE. Panels register in a
 * provider's `boot`, which runs BEFORE routes exist, so `route()` called
 * eagerly throws about a route that is merely not registered yet - an error
 * that reads as the route being missing.
 *
 * AN ABILITY REMOVES THE ENTRY RATHER THAN DISABLING IT. A menu that lists what
 * you cannot have tells you what exists without letting you reach it, and the
 * check is server-side: a filtered-in-Vue menu is one whose hidden entries were
 * still sent.
 */
final class PanelMenuItemsTest extends TestCase
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

    private function panel(): \Alxtexh\Panel\Panel
    {
        return app(PanelManager::class)->panel('admin');
    }

    /** @return array<string, mixed> */
    private function props(): array
    {
        return $this->get('/posts')->assertOk()->viewData('page')['props'];
    }

    /* ------------------------------------------------------- account menu */

    public function test_a_panel_can_add_an_entry_to_the_account_menu(): void
    {
        $this->panel()->userMenuItems([
            ['key' => 'status', 'label' => 'Status page', 'href' => 'https://status.example.test'],
        ]);

        $items = $this->props()['panel']['menuItems'] ?? [];

        $this->assertSame(['status'], array_column($items, 'key'));
        $this->assertSame('Status page', $items[0]['label']);
    }

    /**
     * A CLOSURE HREF IS RESOLVED AT RENDER, not at registration.
     *
     * This is the one that makes the feature usable at all: a panel provider
     * boots before routes are registered, so anything naming a route has to be
     * deferred.
     */
    public function test_a_menu_href_may_be_a_closure_resolved_at_render(): void
    {
        $this->panel()->userMenuItems([
            ['key' => 'posts', 'label' => 'Posts', 'href' => static fn (): string => url('/posts')],
        ]);

        $this->assertStringEndsWith('/posts', $this->props()['panel']['menuItems'][0]['href']);
    }

    public function test_a_menu_entry_the_operator_may_not_open_is_absent_entirely(): void
    {
        $this->panel()->userMenuItems([
            ['key' => 'secret', 'label' => 'Secret', 'href' => '/secret', 'ability' => 'nobody_holds_this'],
        ]);

        $this->assertSame(
            [],
            $this->props()['panel']['menuItems'] ?? [],
            'An entry was advertised to somebody who may not open it.',
        );
    }

    public function test_a_menu_entry_appears_once_the_ability_is_held(): void
    {
        $role = Role::findOrCreate('status-reader', 'web');
        $role->givePermissionTo(Permission::findOrCreate('read_status', 'web'));

        $this->user->assignRole($role);

        $this->panel()->userMenuItems([
            ['key' => 'status', 'label' => 'Status', 'href' => '/status', 'ability' => 'read_status'],
        ]);

        $this->actingAs($this->user->fresh());

        $this->assertSame(['status'], array_column($this->props()['panel']['menuItems'] ?? [], 'key'));
    }

    /* ---------------------------------------------------------- navigation */

    public function test_a_panel_can_add_a_navigation_entry_that_is_not_a_resource(): void
    {
        $this->panel()->navigationItems([
            ['title' => 'Status page', 'href' => 'https://status.example.test', 'icon' => 'activity'],
        ]);

        $nav = PanelNavigation::build('admin');

        $titles = array_column($nav, 'title');

        $this->assertContains('Status page', $titles, 'A declared navigation entry never reached the sidebar.');
    }

    public function test_a_navigation_entry_obeys_its_ability(): void
    {
        $this->panel()->navigationItems([
            ['title' => 'Hidden report', 'href' => '/report', 'ability' => 'nobody_holds_this'],
        ]);

        $this->assertNotContains(
            'Hidden report',
            array_column(PanelNavigation::build('admin'), 'title'),
            'A sidebar entry was shown to somebody who may not open it.',
        );
    }

    /**
     * A DECLARED ENTRY SORTS AND GROUPS LIKE A RESOURCE.
     *
     * Otherwise it lands wherever the merge happened to put it, which for a
     * sidebar means "at the bottom, under nothing" - and an entry a person
     * cannot find is one that may as well not exist.
     */
    public function test_a_navigation_entry_takes_a_group_and_a_sort(): void
    {
        $this->panel()->navigationItems([
            ['title' => 'Status page', 'href' => '/status', 'group' => 'Operations', 'sort' => 5],
        ]);

        $entry = collect(PanelNavigation::build('admin'))->firstWhere('title', 'Status page');

        $this->assertSame('Operations', $entry['group'] ?? null);
        $this->assertSame(5, $entry['sort'] ?? null);
    }

    /**
     * A CLOSURE HREF WORKS HERE TOO, for the same boot-order reason.
     */
    public function test_a_navigation_href_may_be_a_closure(): void
    {
        $this->panel()->navigationItems([
            ['title' => 'Posts elsewhere', 'href' => static fn (): string => url('/posts')],
        ]);

        $entry = collect(PanelNavigation::build('admin'))->firstWhere('title', 'Posts elsewhere');

        $this->assertStringEndsWith('/posts', $entry['href'] ?? '');
    }

    /**
     * A DECLARED ENTRY CAN NEST, using the same `Section/Subgroup` string a
     * resource uses.
     *
     * THE INTERSECTION OF TWO FEATURES, which is where they usually fail to
     * meet: nested groups were built for RESOURCES, and `navigationItems()`
     * arrives at the sidebar through a different path - `PanelNavigation::
     * declared()` rather than `resources()`. Both end in the same `group`
     * string, so nesting should work for either, and "should" is the word that
     * earns a test.
     */
    public function test_a_declared_entry_can_sit_in_a_nested_group(): void
    {
        $this->panel()->navigationItems([
            ['title' => 'Runbook', 'href' => '/runbook', 'group' => 'Operations/Playbooks'],
        ]);

        $entry = collect(PanelNavigation::build('admin'))->firstWhere('title', 'Runbook');

        $this->assertSame(
            'Operations/Playbooks',
            $entry['group'] ?? null,
            'A declared entry lost its nested group on the way to the sidebar.',
        );
    }

    /**
     * ONE PORTAL'S ADDITIONS ARE NOT ANOTHER'S.
     *
     * The items live on the Panel object rather than in a global registry, so a
     * second portal must not inherit them - which is the whole reason they are
     * declared per panel rather than in config.
     */
    public function test_declared_entries_do_not_leak_into_another_panel(): void
    {
        $this->panel()->navigationItems([
            ['title' => 'Admin only', 'href' => '/admin-only'],
        ]);

        $this->assertNotContains(
            'Admin only',
            array_column(PanelNavigation::build('second'), 'title'),
            'A navigation entry declared on one portal appeared in another.',
        );
    }
}
