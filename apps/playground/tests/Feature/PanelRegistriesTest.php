<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\PanelManager;
use Tests\TestCase;

/**
 * THE REGISTRIES THAT LET A PACKAGE CONTRIBUTE TO A PORTAL.
 *
 * THE COMMON FAILURE THEY FIX. A panel could be extended with resources, pages
 * and plugins, and three surfaces stayed closed: the account dropdown was a Vue
 * SLOT, so only the host application could fill it; the sidebar was entirely
 * RESOURCE-DERIVED, so a link to a report or a status page could not appear at
 * all; and widgets had to be constructed by hand in the provider. Each gap had
 * the same consequence - a plugin could ship the screen and not the way in.
 *
 * ABILITIES ARE CHECKED SERVER-SIDE ON BOTH, and that is the assertion worth
 * having. An entry somebody may not open is ABSENT, not greyed out: a menu that
 * lists what you cannot have is a menu that leaks what exists.
 */
final class PanelRegistriesTest extends TestCase
{
    use RefreshDatabase;

    private User $operator;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->operator = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /** @return array<string, mixed> */
    private function props(): array
    {
        return $this->actingAs($this->operator, 'web')
            ->get('/dashboard')
            ->assertOk()
            ->viewData('page')['props'];
    }

    public function test_a_panel_can_add_an_entry_to_the_account_menu(): void
    {
        app(PanelManager::class)->panel('admin')?->userMenuItems([
            ['key' => 'status', 'label' => 'Status page', 'href' => 'https://status.example.test'],
        ]);

        $items = $this->props()['panel']['menuItems'] ?? [];

        $this->assertSame(['status'], array_column($items, 'key'));
        $this->assertSame('https://status.example.test', $items[0]['href']);
    }

    /**
     * A CLOSURE IS THE ONLY FORM THAT CAN NAME A ROUTE. Panels register in a
     * provider's `boot`, which runs before routes exist, so `route()` called at
     * declaration time throws about a route that is merely not registered yet -
     * an error that reads as the route being missing.
     */
    public function test_a_menu_href_may_be_a_closure_resolved_at_render(): void
    {
        app(PanelManager::class)->panel('admin')?->userMenuItems([
            ['key' => 'faq', 'label' => 'FAQ', 'href' => static fn (): string => url('/faq')],
        ]);

        $items = $this->props()['panel']['menuItems'] ?? [];

        $this->assertStringEndsWith('/faq', $items[0]['href']);
    }

    public function test_an_entry_the_operator_may_not_open_is_absent_entirely(): void
    {
        app(PanelManager::class)->panel('admin')?->userMenuItems([
            ['key' => 'secret', 'label' => 'Secret', 'href' => '/secret', 'ability' => 'nobody_holds_this'],
        ]);

        $items = $this->props()['panel']['menuItems'] ?? [];

        $this->assertNotContains('secret', array_column($items, 'key'));
    }

    /**
     * THE SIDEBAR TAKES ENTRIES THAT ARE NOT RESOURCES, which until now meant a
     * page existing only to redirect somewhere else.
     */
    public function test_a_panel_can_add_a_navigation_entry_that_is_not_a_resource(): void
    {
        app(PanelManager::class)->panel('admin')?->navigationItems([
            ['title' => 'Status', 'href' => 'https://status.example.test', 'group' => 'Ops', 'sort' => 5],
        ]);

        $nav = $this->props()['panelNav'] ?? [];
        $entry = collect($nav)->firstWhere('title', 'Status');

        $this->assertNotNull($entry, 'A declared navigation entry must reach the sidebar.');
        $this->assertSame('Ops', $entry['group']);
        $this->assertSame('https://status.example.test', $entry['href']);
    }

    public function test_a_navigation_entry_obeys_its_ability(): void
    {
        app(PanelManager::class)->panel('admin')?->navigationItems([
            ['title' => 'Hidden', 'href' => '/hidden', 'ability' => 'nobody_holds_this'],
        ]);

        $this->assertNull(
            collect($this->props()['panelNav'] ?? [])->firstWhere('title', 'Hidden'),
            'A sidebar that lists what you cannot open leaks what exists.',
        );
    }

    /**
     * DISCOVERY IS WHAT KEEPS A PROVIDER A DECLARATION rather than a manifest of
     * every widget in the application. A directory with nothing in it must be a
     * no-op rather than an error, because that is the state a freshly generated
     * panel is in.
     */
    public function test_discovering_widgets_from_a_missing_directory_is_harmless(): void
    {
        app(PanelManager::class)->panel('admin')?->discoverWidgets(
            in: app_path('Panel/NoSuchDirectory'),
            for: 'App\\Panel\\NoSuchDirectory',
        );

        $this->assertIsArray($this->props()['widgets'] ?? []);
    }
}
