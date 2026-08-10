<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Models\Scopes\TenantScope;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * The property the whole multi-panel design exists to hold.
 *
 * ONE ORGANISATION'S ROWS NEVER REACH ANOTHER, and every other feature in this
 * package is built on the assumption that this is true. It is also the failure
 * nobody notices in review: a missing scope produces a working screen with
 * MORE data on it, and more data reads as success.
 *
 * MOVED HERE FROM THE REFERENCE APP because the property belongs to
 * `TenantScope`, not to subscribers. Over there it can only be stated about
 * `Client` - a model with a plan, a router, an access code and a soft-delete -
 * so a passing test says "the ISP demo is isolated" rather than "the scope
 * isolates", and those are not the same claim. A consumer's first tenant-aware
 * model is neither.
 *
 * PERMISSIVE POLICIES ON PURPOSE - see `ArticlePolicy`. A cross-tenant test
 * that passes because authorisation refused has proved nothing about the
 * query. These assert the rows are not there to begin with.
 */
final class TenantIsolationTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $userA;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create(['name' => 'Tenant A', 'slug' => 'tenant-a']);
        $this->tenantB = Tenant::create(['name' => 'Tenant B', 'slug' => 'tenant-b']);

        $this->userA = User::create([
            'tenant_id' => $this->tenantA->id,
            'name' => 'A Operator',
            'email' => 'a@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        // `withoutGlobalScopes` on the WRITE, because seeding another tenant's
        // rows is the one legitimate reason to step outside the scope - and
        // doing it explicitly is what makes the reads below meaningful.
        foreach ([[$this->tenantA, 'Alpha', 3], [$this->tenantB, 'Beta', 4]] as [$tenant, $prefix, $count]) {
            for ($i = 0; $i < $count; $i++) {
                Article::withoutGlobalScopes()->create([
                    'tenant_id' => $tenant->id,
                    'title' => "{$prefix} {$i}",
                ]);
            }
        }
    }

    public function test_a_query_returns_only_the_acting_tenants_rows(): void
    {
        $this->actingAs($this->userA);

        $titles = Article::query()->pluck('title')->all();

        $this->assertCount(3, $titles);

        foreach ($titles as $title) {
            $this->assertStringStartsWith('Alpha', $title);
        }
    }

    public function test_the_list_screen_never_shows_another_tenants_rows(): void
    {
        $this->actingAs($this->userA)
            ->get('/articles')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->has('records', 3));
    }

    /**
     * SEARCH IS A SEPARATE ENTRANCE, and it has leaked through one before.
     *
     * A search term is applied as a WHERE on top of the base query; if the
     * scope is dropped anywhere in that path the term becomes a way to ASK for
     * another organisation's rows by name, which is worse than listing them.
     */
    public function test_search_cannot_reach_across_tenants(): void
    {
        $this->actingAs($this->userA)
            ->get('/articles?search=Beta')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->has('records', 0));
    }

    /**
     * READING A SINGLE RECORD BY ID IS THE OTHER ENTRANCE.
     *
     * The id is in the URL, so it is guessable by counting. A scope that holds
     * for lists and not for `find()` turns the detail screen into the leak the
     * list was protected against.
     */
    public function test_another_tenants_record_cannot_be_fetched_by_id(): void
    {
        $foreign = Article::withoutGlobalScopes()
            ->where('tenant_id', $this->tenantB->id)
            ->firstOrFail();

        $this->actingAs($this->userA);

        $this->assertNull(Article::query()->find($foreign->getKey()));
    }

    /**
     * NO TENANT RESOLVES, NO ROWS - AND THAT IS THE DELIBERATE DIRECTION.
     *
     * A user with a null tenant column is not "an administrator of every
     * organisation"; the panel treats an unresolved tenant as DENY, because
     * the alternative fails open. A console command or a queued job that
     * forgot to establish context sees nothing rather than everything.
     */
    public function test_an_unresolved_tenant_denies_rather_than_returning_everything(): void
    {
        $orphan = User::create([
            'tenant_id' => null,
            'name' => 'No Tenant',
            'email' => 'none@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($orphan);

        $this->assertSame(0, Article::query()->count());
        $this->assertSame(7, Article::withoutGlobalScopes()->count());
    }

    /**
     * THE ESCAPE HATCH IS GREPPABLE, which is the point of its name.
     *
     * `withoutGlobalScopes()` in a diff is a question somebody can ask in
     * review. The scope being absent by accident is not.
     */
    public function test_the_scope_can_be_stepped_outside_explicitly(): void
    {
        $this->actingAs($this->userA);

        $this->assertSame(7, Article::withoutGlobalScope(TenantScope::class)->count());
    }
}
