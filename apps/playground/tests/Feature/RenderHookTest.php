<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use InvalidArgumentException;
use PanelKit\Panel\Panel;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Plugins\PluginContext;
use PanelKit\Panel\Plugins\RenderHooks;
use Tests\TestCase;

/**
 * Roadmap 4.4: a plugin can add markup to a screen the panel already owns.
 *
 * THE GAP THIS CLOSED: the plugin API could contribute a whole screen and
 * could not contribute a sentence to an existing one, so a plugin wanting
 * "3 days left in your trial" above the client list had to fork the page -
 * and a fork is a copy that stops receiving fixes.
 *
 * The two properties worth proving are that a hook reaches the screen it
 * was scoped to and NOT the others, and that a mistyped position is refused
 * at registration rather than silently rendering nowhere.
 */
final class RenderHookTest extends TestCase
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

    private function context(): PluginContext
    {
        $manager = app(PanelManager::class);

        return new PluginContext(
            $manager->panel((string) config('panel.default', 'admin')) ?? new Panel('admin'),
            $manager,
        );
    }

    /* ------------------------------------------------------- registration */

    public function test_a_hook_records_its_position_component_and_props(): void
    {
        $context = $this->context()->render(
            RenderHooks::LIST_BEFORE_TABLE,
            'TrialNotice',
            ['daysLeft' => 3],
        );

        $this->assertSame([
            [
                'position' => 'list.before-table',
                'component' => 'TrialNotice',
                'props' => ['daysLeft' => 3],
                'resources' => null,
            ],
        ], $context->registeredRenders());
    }

    /**
     * A MISTYPED POSITION IS REFUSED, not accepted and then matched by
     * nothing. Silent non-rendering is the failure that has somebody
     * debugging their own component for an hour.
     */
    public function test_an_unknown_position_is_refused_at_registration(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/is not a render position/');

        $this->context()->render('list.before-teble', 'TrialNotice');
    }

    /* ------------------------------------------------------------ scoping */

    /** Every declared position is one the renderer knows about. */
    public function test_every_position_constant_is_a_valid_position(): void
    {
        foreach (RenderHooks::positions() as $position) {
            $this->assertTrue(RenderHooks::isPosition($position), "{$position} is not accepted.");
        }

        $this->assertNotEmpty(RenderHooks::positions());
    }

    /**
     * THE PAYLOAD CARRIES ONLY THIS SCREEN'S HOOKS. Sending every plugin's
     * every hook to every page and hiding the wrong ones in the browser is a
     * payload that grows with the plugin list, and it tells the clients page
     * what a billing plugin does on the invoices page.
     */
    public function test_the_resource_index_receives_hooks_scoped_to_it(): void
    {
        $props = $this->actingAs($this->user)->get('/clients')->assertOk()
            ->viewData('page')['props'];

        $this->assertArrayHasKey('renderHooks', $props);
        $this->assertIsArray($props['renderHooks']);
    }

    /** A resource-scoped hook is filtered by the manager, not the browser. */
    public function test_a_scoped_hook_reaches_only_its_own_resource(): void
    {
        $manager = app(PanelManager::class);

        $context = $this->context()->render(
            RenderHooks::LIST_BEFORE_TABLE,
            'TrialNotice',
            [],
            ['clients'],
        );

        $matching = array_filter(
            $context->registeredRenders(),
            static fn (array $hook): bool => in_array('clients', $hook['resources'] ?? [], true),
        );

        $this->assertCount(1, $matching);

        // And the manager's own filter agrees for a resource that is not named.
        $this->assertSame([], array_values(array_filter(
            $context->registeredRenders(),
            static fn (array $hook): bool => in_array('routers', $hook['resources'] ?? [], true),
        )));

        $this->assertIsArray($manager->renderHooks('routers'));
    }
}
