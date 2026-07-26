<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Panel\Resources\ClientResource;
use App\Panel\Resources\PlanResource;
use App\Panel\Resources\RouterResource;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\Support\SchemaCache;
use RuntimeException;
use Tests\TestCase;

/**
 * Guards the Phase 4 schema contract.
 *
 * Every assertion here corresponds to a rule that, when broken, fails silently —
 * a schema still renders, a page still returns 200, and the damage shows up as a
 * slow panel, a purged style, or a cross-tenant leak much later.
 */
final class SchemaContractTest extends TestCase
{
    use RefreshDatabase;

    /** @var list<class-string<\PanelKit\Panel\Resources\Resource>> */
    private const RESOURCES = [ClientResource::class, RouterResource::class, PlanResource::class];

    /**
     * antipatterns §3.3: three eager `->options(Router::where(...))` calls in
     * action definitions took `/admin/clients` down for every tenant, because
     * definitions evaluate at page render rather than when the control opens.
     *
     * This caught a real bug: `Table::toSchema()` called `Filter::toArray()`,
     * which resolved the option closure and only then discarded the options — so
     * building a schema ran a DISTINCT query, and the query count differed
     * between a cold and a warm schema cache.
     */
    public function test_building_a_schema_executes_no_queries(): void
    {
        foreach (self::RESOURCES as $resource) {
            DB::flushQueryLog();
            DB::enableQueryLog();

            $resource::definition()->toSchema();

            $queries = array_column(DB::getQueryLog(), 'query');

            $this->assertSame(
                [],
                $queries,
                $resource . ' executed a query while building its schema: ' . implode(' | ', $queries)
            );
        }
    }

    /**
     * Addendum Part A: the schema describes STRUCTURE. Tenant data ships beside
     * the records. A schema holding no tenant data cannot leak tenant data,
     * however badly its cache key is built — which is why the key drops the
     * tenant id entirely.
     */
    public function test_the_schema_carries_no_filter_options(): void
    {
        foreach (self::RESOURCES as $resource) {
            foreach ($resource::definition()->toSchema()['filters'] as $filter) {
                $this->assertArrayNotHasKey(
                    'options',
                    $filter,
                    $resource . " leaked filter options into the cached schema via [{$filter['key']}]."
                );
            }
        }
    }

    /**
     * antipatterns §6.1: a CSS build that does not scan PHP purges PHP-authored
     * classes silently and *partially*, so one class of a pair survives and the
     * element renders wrong at some widths with no error. The fix is structural:
     * PHP never emits a class at all.
     */
    public function test_the_schema_contains_no_css_class_strings(): void
    {
        // Utility fragments that would only appear if someone wrote Tailwind in
        // a column definition.
        $suspects = ['text-', 'bg-', 'font-', 'px-', 'py-', 'rounded', 'flex', 'grid-', 'border-'];

        foreach (self::RESOURCES as $resource) {
            $json = json_encode($resource::definition()->toSchema(), JSON_THROW_ON_ERROR);

            foreach ($suspects as $suspect) {
                $this->assertStringNotContainsString(
                    $suspect,
                    $json,
                    $resource . " emitted what looks like a CSS class ([{$suspect}]) in its schema. "
                    . 'PHP describes intent; Vue owns presentation.'
                );
            }
        }
    }

    public function test_the_schema_envelope_is_versioned(): void
    {
        $schema = ClientResource::schema();

        // §5: define the contract, freeze it, version it. `kind` is what lets a
        // second schema shape exist later without breaking consumers.
        $this->assertSame(1, $schema['v']);
        $this->assertSame('resource', $schema['kind']);
        $this->assertSame('clients', $schema['key']);
    }

    /**
     * The cache key must NOT contain a tenant id (addendum Part A) but MUST
     * contain a permissions fingerprint — schemas vary by role, so a user
     * without a delete permission must not be served another role's schema.
     */
    public function test_the_cache_key_is_keyed_by_permissions_and_not_by_tenant(): void
    {
        $cache = app(SchemaCache::class);

        $a = $cache->key('admin', 'clients', 'fingerprint-a');
        $b = $cache->key('admin', 'clients', 'fingerprint-b');

        $this->assertNotSame($a, $b, 'Different permission sets must not share a schema cache entry.');
        $this->assertStringContainsString('clients', $a);
        $this->assertStringContainsString('fingerprint-a', $a);
    }

    /**
     * antipatterns §1.5: `tenant('id') ?? 'tenant'` collapsed every tenant onto
     * one cache key in production. An empty fingerprint would do the same across
     * roles, so it must throw rather than substitute anything.
     */
    public function test_an_empty_permissions_fingerprint_throws_rather_than_falling_back(): void
    {
        $this->expectException(RuntimeException::class);

        app(SchemaCache::class)->key('admin', 'clients', '');
    }

    /** Two tenants must never receive each other's rows through the generic page. */
    public function test_the_generic_page_still_isolates_tenants(): void
    {
        $a = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $b = Tenant::create(['name' => 'B', 'slug' => 'b']);
        $user = User::factory()->create(['tenant_id' => $a->id, 'email_verified_at' => now()]);

        foreach ([[$a, 'Alpha'], [$b, 'Bravo']] as [$tenant, $prefix]) {
            DB::table('routers')->insert([
                'tenant_id' => $tenant->id,
                'name' => $prefix . '-1',
                'ip_address' => '10.0.0.1',
                'model' => $prefix . ' Model',
                'status' => 'online',
                'last_seen_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        $props = $this->actingAs($user)->get('/routers')->assertOk()->viewData('page')['props'];

        $this->assertCount(1, $props['records']);
        $this->assertSame('Alpha-1', $props['records'][0]['name']);

        // The model filter's options are tenant data resolved at request time;
        // the other tenant's hardware must not appear in them either.
        $this->assertSame(['Alpha Model'], $props['filterOptions']['model']);
    }
}
