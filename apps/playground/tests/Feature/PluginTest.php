<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use App\Plugins\AnnouncementsPlugin;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Panel;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Plugins\Plugin;
use PanelKit\Panel\Plugins\PluginContext;
use Tests\TestCase;

/**
 * What a package can install into a panel.
 *
 * THE GAP THIS CLOSES. Everything a plugin would want to add already existed -
 * resources are discovered, routes are registered per panel, pages are declared,
 * field types have a registry - and every one of those doors opened only from
 * INSIDE the application. A third-party package could ship a resource class and
 * had no way to get it registered, no way to add a route inside the panel's
 * group, and no way to put a link in the navigation. "Install this package and
 * you get a billing screen" was impossible; the best available was a README
 * telling people which four files to edit.
 *
 * THE ASSERTIONS THAT MATTER ARE THE ONES ABOUT WHAT A PLUGIN CANNOT DO. An API
 * that hands a package the `Panel` is an API where installing something can
 * change the guard, the tenancy context or the middleware - so a billing plugin
 * could turn off tenant scoping, and the symptom would be one organisation
 * seeing another's records with nothing in the diff to explain it. `PluginContext`
 * can only add, and that is tested rather than assumed.
 */
final class PluginTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /* ------------------------------------------------------- the whole path */

    /**
     * A WHOLE SCREEN THE APPLICATION NEVER DECLARED.
     *
     * `routes/web.php` has no announcements route and never will, and
     * `panel.discover` does not scan for this class either: the plugin
     * registered the resource, and the panel routed it exactly like its own.
     */
    public function test_a_plugins_resource_is_reachable(): void
    {
        $response = $this->actingAs($this->user)->get('/announcements')->assertOk();

        $this->assertSame('ResourceIndex', $response->viewData('page')['component']);
    }

    /** With its form, so it is a screen rather than a listing. */
    public function test_a_plugins_resource_can_be_written_to(): void
    {
        $this->actingAs($this->user)->get('/announcements/create')->assertOk();
    }

    /**
     * AND IT IS AUTHENTICATED, without the plugin asking for it.
     *
     * This is the reason `PluginContext::routes()` exists rather than telling
     * package authors to register routes from their own service provider: a
     * plugin that declared its own middleware could get it wrong, and an
     * unauthenticated route into a tenant's records is not something anybody
     * spots reviewing a package they did not write.
     */
    public function test_a_plugins_screen_is_behind_the_panels_authentication(): void
    {
        $this->get('/announcements')->assertRedirect();
    }

    /**
     * A RESOURCE BELONGS TO ONE PORTAL, and the plugin says which.
     *
     * Its key is a URL segment and an ability name, both globally unique, so the
     * same class cannot serve two portals - registering it twice would leave the
     * first portal with a navigation entry whose URL its own route constraint
     * refuses. A plugin wanting a screen in two portals ships two classes.
     */
    public function test_a_plugins_resource_is_not_mounted_in_other_portals(): void
    {
        $this->actingAs($this->user)->get('/reseller/announcements')->assertNotFound();
    }

    /** And registering one class for two panels is refused rather than silently overwritten. */
    public function test_registering_a_resource_for_two_panels_throws(): void
    {
        $manager = app(PanelManager::class);

        $manager->registerResources([PluginOwnedResource::class], 'reseller');

        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage('belongs to one panel');

        $manager->registerResources([PluginOwnedResource::class], 'admin');
    }

    /**
     * AND NOT INTO ONES IT DOES NOT APPLY TO.
     *
     * `Plugin` defaults to tenant portals, because the platform portal runs
     * deliberately unscoped and a screen about one organisation's staff has no
     * meaning - or worse, the wrong meaning - there.
     */
    public function test_a_tenant_plugin_stays_out_of_a_central_portal(): void
    {
        $this->assertNull(
            app('router')->getRoutes()->getByName('platform.announcements'),
            'A tenant-only plugin was installed into the central portal.',
        );
    }

    /**
     * THE LINK IS IN THE NAVIGATION, without the application listing it.
     *
     * A resource places itself, which is the whole reason a plugin registering
     * one is more useful than a plugin registering a page: it arrives with its
     * routes, its policy checks, its tenant scope AND its menu entry.
     */
    public function test_a_plugins_resource_appears_in_the_navigation(): void
    {
        $nav = $this->actingAs($this->user)->get('/dashboard')->assertOk()
            ->viewData('page')['props']['panelNav'];

        $entry = collect($nav)->firstWhere('key', 'announcements');

        $this->assertNotNull($entry, 'The plugin resource is not in the navigation.');
        $this->assertSame('/announcements', $entry['href']);
    }

    /* ------------------------------------------------------- what it cannot do */

    /**
     * THE CONTEXT CANNOT RECONFIGURE THE PANEL.
     *
     * Asserted structurally rather than by trying: `PluginContext` exposes the
     * panel as readable and offers only `resources`, `page` and `routes`. If a
     * setter is ever added, this fails and somebody has to argue for it.
     */
    public function test_a_plugin_is_given_no_way_to_change_the_panel(): void
    {
        $methods = array_map(
            static fn (\ReflectionMethod $m): string => $m->getName(),
            (new \ReflectionClass(PluginContext::class))->getMethods(\ReflectionMethod::IS_PUBLIC),
        );

        $this->assertEqualsCanonicalizing(
            [
                '__construct',
                'resources',
                'page',
                'routes',
                'registeredResources',
                'registeredPages',
                'registeredRoutes',
            ],
            $methods,
            'PluginContext gained a method. Anything that mutates the panel - guard, '
            .'context, middleware - makes installing a package a way to disable tenant scoping.',
        );
    }

    /* ---------------------------------------------------------- registration */

    /**
     * REGISTERING THE SAME PLUGIN TWICE IS A NO-OP.
     *
     * A package registering itself AND being named in a panel provider is an
     * easy mistake to make. Without the id check it surfaces as a duplicate-key
     * exception naming a RESOURCE, several layers away from the cause.
     */
    public function test_registering_a_plugin_twice_installs_it_once(): void
    {
        $manager = app(PanelManager::class);

        $manager->plugin(new AnnouncementsPlugin);
        $manager->plugin(new AnnouncementsPlugin);

        $this->assertCount(
            1,
            array_filter(
                $manager->plugins(),
                static fn (object $plugin): bool => $plugin instanceof AnnouncementsPlugin,
            ),
        );
    }

    /** A plugin decides for itself which panels it belongs in. */
    public function test_a_plugin_can_refuse_a_panel(): void
    {
        $plugin = new class extends Plugin
        {
            public array $registeredFor = [];

            public function id(): string
            {
                return 'test/only-reseller';
            }

            public function appliesTo(Panel $panel): bool
            {
                return $panel->id === 'reseller';
            }

            public function register(PluginContext $context): void
            {
                $this->registeredFor[] = $context->panel->id;
            }
        };

        $manager = app(PanelManager::class);

        $this->assertTrue($plugin->appliesTo($manager->panel('reseller')));
        $this->assertFalse($plugin->appliesTo($manager->panel('admin')));
    }

    /**
     * A PLUGIN'S RESOURCE LANDS IN THE PANEL THAT ACCEPTED IT, not the one its
     * class declares.
     *
     * A resource hardcodes `protected static string $panel = 'admin'`, which a
     * package cannot know is right - an installation whose operator portal is
     * called `isp` would get a resource belonging to a panel that does not
     * exist, routed nowhere, with nothing to say why.
     */
    public function test_a_plugins_resource_belongs_to_the_panel_it_was_registered_for(): void
    {
        $manager = app(PanelManager::class);

        $manager->registerResources([PluginOwnedResource::class], 'reseller');

        $this->assertArrayHasKey(
            'plugin-widgets',
            $manager->resourcesFor('reseller'),
            'The resource did not land in the panel that registered it.',
        );

        $this->assertArrayNotHasKey('plugin-widgets', $manager->resourcesFor('admin'));
    }
}

/**
 * A resource as a plugin would ship it: declaring the default panel, because it
 * cannot know any better, and expected to land wherever it is registered.
 */
final class PluginOwnedResource extends \PanelKit\Panel\Resources\Resource
{
    protected static string $model = \App\Models\Plan::class;

    public static function key(): string
    {
        return 'plugin-widgets';
    }

    public static function table(\PanelKit\Panel\Tables\Table $table): \PanelKit\Panel\Tables\Table
    {
        return $table->columns([
            \PanelKit\Panel\Tables\Columns\TextColumn::make('name'),
        ]);
    }
}
