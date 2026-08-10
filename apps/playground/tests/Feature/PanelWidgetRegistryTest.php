<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Widgets\StatWidget;
use Tests\TestCase;

/**
 * A WIDGET REGISTERED ON THE PANEL, NOT INHERITED FROM A PAGE.
 *
 * WHY THIS EXISTS. The only way to add a dashboard widget used to be
 * overriding `DashboardPage::stats()` - a static method on a class you
 * subclass. That works for an application and is useless to a PACKAGE: a
 * plugin cannot subclass a page the application has not written yet, so a
 * plugin could ship resources, routes, policies and screens, and could not
 * ship a single dashboard card.
 *
 * Filament registers widgets on the PANEL (`->widgets([...])`), which is why
 * a Filament plugin can contribute one. `Panel::widgets()` is the same shape.
 *
 * CONCATENATED, NOT REPLACED, so an application that already has its own
 * dashboard keeps every widget it declared and a plugin adds to it. That is
 * the property that makes this an extension point rather than an override.
 */
final class PanelWidgetRegistryTest extends TestCase
{
    use RefreshDatabase;

    private User $operator;

    /** Built once: the dashboard is fetched twice and a second tenant would collide. */
    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->operator = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /** @return list<string> */
    private function widgetKeysOnDashboard(): array
    {
        $props = $this->actingAs($this->operator, 'web')
            ->get('/dashboard')
            ->assertOk()
            ->viewData('page')['props'];

        return array_column($props['widgets'], 'key');
    }

    public function test_a_widget_registered_on_the_panel_reaches_the_dashboard(): void
    {
        $before = $this->widgetKeysOnDashboard();

        $this->assertNotContains('registered_by_a_plugin', $before);

        app(PanelManager::class)->panel('admin')?->widgets([
            StatWidget::make('registered_by_a_plugin', 'From a plugin')
                ->value(static fn (): int => 42),
        ]);

        $after = $this->widgetKeysOnDashboard();

        $this->assertContains(
            'registered_by_a_plugin',
            $after,
            'A widget registered on the panel must appear without anybody subclassing the dashboard page.',
        );

        /*
         * AND EVERYTHING THE PAGE DECLARED IS STILL THERE. Replacing rather
         * than concatenating would make registering one widget silently drop
         * an application's own dashboard - the failure would be a blank
         * screen, blamed on the plugin.
         */
        foreach ($before as $key) {
            $this->assertContains($key, $after, "Registering a widget dropped the existing [{$key}].");
        }
    }

    /**
     * PERMISSIONS ARE UNCHANGED BY THE ROUTE IN, which is the assertion that
     * matters most: a widget dropped for lacking an ability must be dropped
     * BEFORE its deferred prop is registered, or the number sits in the page
     * payload for whoever opens the network tab and the query runs anyway.
     */
    public function test_a_registered_widget_still_obeys_its_ability(): void
    {
        app(PanelManager::class)->panel('admin')?->widgets([
            StatWidget::make('secret_counter', 'Secret')
                ->value(static fn (): int => 1)
                ->ability('an_ability_nobody_holds'),
        ]);

        $this->assertNotContains(
            'secret_counter',
            $this->widgetKeysOnDashboard(),
            'Registering through the panel must not bypass the ability check.',
        );
    }
}
