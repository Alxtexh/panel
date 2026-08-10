<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * A resource belongs to exactly ONE portal, and is not addressable from another.
 *
 * THE PROPERTY THE MULTI-PANEL SPLIT EXISTS FOR. `PanelRoutes` constrains the
 * `{resource}` segment to THIS panel's keys rather than the whole registry,
 * and the reason is written there: a shared pattern would let `/app/tenants`
 * resolve the platform portal's Tenants resource from inside a tenant-scoped
 * request - a central-context query reached through a tenant URL.
 *
 * IT NEEDS TWO PANELS TO STATE AT ALL, which is why the fixture host now
 * registers a second one. `reports` and `articles` deliberately share a MODEL
 * and differ only in the portal they belong to, so what is asserted below is
 * the panel boundary and not an accident of two different tables.
 *
 * ADDING THAT SECOND PANEL IMMEDIATELY CAUGHT A FLAW IN THE MATRIX. The
 * cross-tenant file requested every resource at `/{key}`, which for a
 * second-portal resource is not where it lives - so it received 404 and
 * counted that as a refusal. It was asserting "unreachable" while believing it
 * asserted "refused". It now resolves each resource's own panel prefix.
 */
final class PanelSeparationTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    private Article $article;

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

        $this->article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'title' => 'Shared row',
            'status' => 'draft',
        ]);
    }

    public function test_each_resource_is_reachable_under_its_own_panel(): void
    {
        $this->get('/articles')->assertOk();
        $this->get('/second/reports')->assertOk();
    }

    /**
     * THE OTHER PANEL'S KEY DOES NOT RESOLVE HERE.
     *
     * Not 403 - the URL does not route at all, because the segment is
     * constrained to this panel's keys. A 403 would mean the route matched and
     * something downstream refused, which is a weaker guarantee: it puts the
     * boundary in a policy rather than in the routing table.
     */
    public function test_a_second_panels_resource_is_not_addressable_from_the_first(): void
    {
        $this->get('/reports')->assertNotFound();
        $this->get("/reports/{$this->article->getKey()}")->assertNotFound();
    }

    public function test_the_first_panels_resource_is_not_addressable_from_the_second(): void
    {
        $this->get('/second/articles')->assertNotFound();
        $this->get("/second/articles/{$this->article->getKey()}")->assertNotFound();
    }

    /**
     * THE REGISTRY AGREES WITH THE ROUTES.
     *
     * Asked of the manager as well as over HTTP, so a change that kept the
     * URLs working while quietly moving ownership would still be caught -
     * ownership decides the ability name a shared-model policy checks, and
     * getting it wrong turns an authorised screen into a 403 elsewhere.
     */
    public function test_the_registry_assigns_each_resource_to_one_panel(): void
    {
        $panels = app(PanelManager::class);

        $admin = array_keys($panels->resourcesFor('admin'));
        $second = array_keys($panels->resourcesFor('second'));

        $this->assertContains('articles', $admin);
        $this->assertSame(['reports'], $second);

        // The membership is EXCLUSIVE, which is the half that matters: not
        // that each panel has its own, but that neither carries the other's.
        $this->assertNotContains('reports', $admin);
        $this->assertNotContains('articles', $second);
    }

    /**
     * TWO RESOURCES MAY SHARE A MODEL. That is the ordinary case for a portal
     * split - the same table shown to a different audience - and it must not
     * be mistaken for a collision. The KEYS are what must be unique.
     */
    public function test_two_panels_may_expose_the_same_model_under_different_keys(): void
    {
        $panels = app(PanelManager::class);

        $admin = $panels->resourcesFor('admin')['articles'];
        $second = $panels->resourcesFor('second')['reports'];

        $this->assertSame(Article::class, $admin::model());
        $this->assertSame(Article::class, $second::model());
        $this->assertNotSame($admin, $second);
    }
}
