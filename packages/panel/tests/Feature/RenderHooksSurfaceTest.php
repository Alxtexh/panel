<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Plugins\RenderHooks;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Plugins\RenderHookSurfacePlugin;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Two of the nine declared positions - `form.before`/`form.after` and
 * `dashboard.before` - were accepted at plugin registration
 * (`RenderHooks::isPosition()` says yes) but no controller ever sent them to
 * the client and no page ever mounted a `RenderHook` for them: a plugin
 * naming one rendered nowhere, silently, which is exactly the failure mode
 * the class's own docblock says a NAMED position exists to prevent.
 *
 * `RenderHookSurfacePlugin` (registered here, not by default - see
 * `defineEnvironment`) puts a component at every position this test checks.
 */
final class RenderHooksSurfaceTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function defineEnvironment($app): void
    {
        parent::defineEnvironment($app);

        tap($app->make(Repository::class), static function (Repository $config): void {
            $config->set('panel.plugins', [RenderHookSurfacePlugin::class]);
        });
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
    }

    public function test_dashboard_after_is_a_valid_position(): void
    {
        $this->assertTrue(RenderHooks::isPosition(RenderHooks::DASHBOARD_AFTER));
        $this->assertContains(RenderHooks::DASHBOARD_AFTER, RenderHooks::positions());
    }

    public function test_the_create_page_carries_form_hooks_scoped_to_this_resource(): void
    {
        $hooks = $this->get('/articles/create')
            ->assertOk()
            ->viewData('page')['props']['renderHooks'] ?? [];

        $positions = array_column($hooks, 'position');
        $components = array_column($hooks, 'component');

        $this->assertContains('form.before', $positions);
        $this->assertContains('form.after', $positions);
        $this->assertContains('FixtureFormBefore', $components);
        $this->assertContains('FixtureFormAfter', $components);
    }

    /**
     * A hook scoped to a DIFFERENT resource (`tags`) must not reach the
     * `articles` create page - the resource-scoping check the position
     * mechanism already relies on for `list.*`/`view.*` must hold here too.
     */
    public function test_a_hook_scoped_to_another_resource_does_not_reach_this_one(): void
    {
        $hooks = $this->get('/articles/create')
            ->assertOk()
            ->viewData('page')['props']['renderHooks'] ?? [];

        $this->assertNotContains(
            'FixtureOtherResourceFormBefore',
            array_column($hooks, 'component'),
        );
    }

    public function test_the_edit_page_carries_form_hooks_too(): void
    {
        $article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'title' => 'Existing',
            'status' => 'draft',
        ]);

        $hooks = $this->get("/articles/{$article->getKey()}/edit")
            ->assertOk()
            ->viewData('page')['props']['renderHooks'] ?? [];

        $this->assertContains('form.before', array_column($hooks, 'position'));
        $this->assertContains('form.after', array_column($hooks, 'position'));
    }

    public function test_the_dashboard_carries_its_before_and_after_hooks(): void
    {
        $hooks = $this->get('/dashboard')
            ->assertOk()
            ->viewData('page')['props']['renderHooks'] ?? [];

        $positions = array_column($hooks, 'position');

        $this->assertContains('dashboard.before', $positions);
        $this->assertContains('dashboard.after', $positions);
    }
}
