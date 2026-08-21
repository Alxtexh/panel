<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Alerts\AnnouncementsPlugin;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Plugins\Plugin;
use Alxtexh\Panel\Plugins\PluginContext;
use Alxtexh\Panel\Resources\Resource;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Ticketing\TicketingPlugin;
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

    /**
     * A PLUGIN'S RESOURCES SURVIVE THE NEXT BOOT, which they did not.
     *
     * THE BUG THIS PINS, because it is the kind that reads as an unrelated
     * flake. `PanelManager` is a SCOPED binding: `$this->resources` is rebuilt
     * for every request. The flag recording "this panel's plugins have already
     * run" was a STATIC, so it outlived the registry it was guarding - the
     * first boot in a process registered the plugin's resources, and every
     * boot after it saw "already applied" against an empty registry and
     * registered nothing at all.
     *
     * Under Octane that is a plugin's screens working on a worker's first
     * request and 404ing on its second, with the navigation still linking
     * them. In a test suite it is a class whose first test can reach a screen
     * and whose second cannot.
     *
     * IT HID BEHIND THE ANNOUNCEMENTS PLUGIN. That resource is ALSO discovered
     * from `app/Panel/Resources`, so it was registered twice over and
     * discovery covered for the plugin path. `TicketingPlugin` was the first
     * whose classes come from the plugin alone, and it failed at once - which
     * is why this test forces a fresh manager rather than trusting a screen.
     *
     * `forgetScopedInstances()` is exactly what Laravel does between requests,
     * so this is the real second request rather than an imitation of one.
     */
    public function test_a_plugins_resources_are_still_registered_on_the_next_boot(): void
    {
        $first = app(PanelManager::class);

        $this->assertArrayHasKey('tickets', $first->resourcesFor('admin'));
        $this->assertArrayHasKey('my-tickets', $first->resourcesFor('reseller'));

        // What the framework does between one request and the next.
        app()->forgetScopedInstances();

        $second = app(PanelManager::class);

        $this->assertNotSame($first, $second, 'The manager is meant to be scoped.');

        $this->assertArrayHasKey(
            'tickets',
            $second->resourcesFor('admin'),
            "A plugin's resource vanished on the second boot - the applied flag outlived the registry.",
        );

        $this->assertArrayHasKey('my-tickets', $second->resourcesFor('reseller'));
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
     * TICKETING'S THREE CONFIGURATIONS, one of which is a mistake said out loud
     * and one of which used to be a mistake said not at all.
     *
     * THE PLUGIN SHIPS REGISTERED, so "nobody asked for a support desk" is a
     * state it has to hold rather than an absence. Neither key set means no
     * route, no navigation entry and no exception - and it is asserted here
     * because the alternative failure is an application that will not boot over
     * a feature it never enabled.
     *
     * ONE KEY SET IS REFUSED, because half a support desk is a screen that
     * returns 200 and helps nobody - the class's own note argues this at
     * length. What it did NOT refuse was the same portal named twice, which
     * `register()` resolves by mounting the queue and skipping the customer
     * side entirely: configured, successful, and missing the half the customer
     * uses.
     */
    public function test_ticketing_is_inert_when_no_panel_is_named(): void
    {
        config(['panel.ticketing.operator' => null, 'panel.ticketing.opener' => null]);

        $plugin = new TicketingPlugin;

        foreach (app(PanelManager::class)->panels() as $panel) {
            $this->assertFalse(
                $plugin->appliesTo($panel),
                "Ticketing mounted on [{$panel->id}] with neither end configured.",
            );
        }
    }

    public function test_ticketing_refuses_one_end_without_the_other(): void
    {
        config(['panel.ticketing.operator' => 'admin', 'panel.ticketing.opener' => null]);

        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage('half configured');

        (new TicketingPlugin)->appliesTo(app(PanelManager::class)->panel('admin'));
    }

    public function test_ticketing_refuses_one_portal_named_as_both_ends(): void
    {
        config(['panel.ticketing.operator' => 'admin', 'panel.ticketing.opener' => 'admin']);

        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage('both ends');

        (new TicketingPlugin)->appliesTo(app(PanelManager::class)->panel('admin'));
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
     * A PLUGIN'S RESOURCE PLACES ITSELF, AND MAY DECLINE TO.
     *
     * The original claim here was that the entry appears in the navigation
     * without the application listing it, which is what makes a plugin
     * registering a resource more useful than one registering a page: it arrives
     * with its routes, its policy checks, its tenant scope AND its menu entry.
     *
     * THIS ONE DECLINES, and that is the more interesting half. An announcement
     * is read from the dashboard banner and the bell and expires by itself, so a
     * permanent sidebar entry for the form that writes one earns nothing - and a
     * plugin author must be able to make that call, from the resource, without
     * the host application knowing the screen exists.
     *
     * So the test asserts the mechanism rather than the outcome: registered for
     * this panel, routable, and absent from the menu because it said so.
     */
    public function test_a_plugins_resource_registers_itself_and_may_stay_out_of_the_menu(): void
    {
        $manager = app(PanelManager::class);

        $this->assertArrayHasKey(
            'announcements',
            $manager->resourcesFor((string) config('panel.default', 'admin')),
            'The plugin resource is not registered for the panel.',
        );

        $nav = $this->actingAs($this->user)->get('/dashboard')->assertOk()
            ->viewData('page')['props']['panelNav'];

        $this->assertNull(
            collect($nav)->firstWhere('key', 'announcements'),
            'The resource asked to stay out of the navigation and is in it anyway.',
        );

        // Unlisted is not unreachable: the route still answers.
        $this->actingAs($this->user)->get('/announcements')->assertOk();
    }

    /* ------------------------------------------------------- what it cannot do */

    /**
     * THE CONTEXT CANNOT RECONFIGURE THE PANEL.
     *
     * Asserted structurally rather than by trying: `PluginContext` exposes the
     * panel as readable and offers only ADD-ONLY verbs - `resources`, `page`,
     * `routes` and `render` - plus their readers. If a setter is ever added,
     * this fails and somebody has to argue for it.
     *
     * `render` (roadmap 4.4) earned its place by the same rule as the rest:
     * it APPENDS markup at a named position and cannot reach the guard, the
     * tenancy context or the middleware. The position is validated against a
     * fixed list, and what it names is resolved by the APPLICATION's own
     * registry rather than mounted from a server-supplied string.
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
                'pageClasses',
                'widgets',
                'routes',
                'render',
                'registeredRenders',
                'registeredResources',
                'registeredPages',
                'registeredPageClasses',
                'registeredWidgets',
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
final class PluginOwnedResource extends \Alxtexh\Panel\Resources\Resource
{
    protected static string $model = Plan::class;

    public static function key(): string
    {
        return 'plugin-widgets';
    }

    public static function table(Table $table): Table
    {
        return $table->columns([
            TextColumn::make('name'),
        ]);
    }
}
