<?php

declare(strict_types=1);

namespace Tests\Feature\Performance;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\Support\TenantContext;
use Alxtexh\Panel\Tenancy\PrefixCacheBootstrapper;
use Tests\TestCase;

/**
 * What TENANCY costs, as opposed to whether it works.
 *
 * Six tenancy suites already exist - `StanclTenancy`, `StanclDomainIdentification`,
 * `StanclMultiDatabase`, `StanclSharedQueue`, `TenancyModes`, `TenantIsolation` -
 * and between them they prove tenancy is CORRECT. Not one of them measures time.
 * That gap matters here specifically, because low overhead is a stated goal of
 * the project and tenancy sits in front of every single request: if identifying
 * a tenant costs a query, it costs a query on the dashboard, on every list, on
 * every poll, forever.
 *
 * THE NUMBERS ARE RATIOS AND COUNTS, NOT MILLISECONDS. A wall-clock budget in a
 * test suite measures whatever else the machine was doing and fails randomly at
 * 3am; the useful question is not "how many ms" but "does this scale with the
 * thing that grows". Query counts and per-operation ratios answer that and are
 * stable across machines.
 *
 * WARM UP, THEN MEASURE, THEN TAKE THE MEDIAN. The reference app's methodology
 * says a single cold run measures opcache rather than the application, and this
 * project has already produced one false finding that way - the query-count
 * guard first "improved" from 3 queries to 2 because the first request populated
 * the schema cache.
 */
final class TenancyOverheadTest extends TestCase
{
    use RefreshDatabase;

    /** Enough repetitions to average out noise without slowing the suite. */
    private const RUNS = 5;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /* ------------------------------------------------- resolving the tenant */

    /**
     * THE HEADLINE COST. Resolving the current tenant runs on every request, so
     * a query here is a query on every page in the application.
     *
     * `TenantContext` memoizes per request. This asserts the memoization is real
     * rather than assumed - the failure mode is not a crash, it is one extra
     * query per resolution multiplied by every call site.
     */
    public function test_resolving_the_tenant_repeatedly_costs_no_extra_queries(): void
    {
        $this->actingAs($this->user);

        $context = app(TenantContext::class);

        // Warm: the first resolution legitimately reads something.
        $context->currentKey();

        $count = $this->countQueries(function () use ($context): void {
            for ($i = 0; $i < 50; $i++) {
                $context->currentKey();
            }
        });

        $this->report('tenant resolution (x50)', "{$count} queries");

        $this->assertSame(
            0,
            $count,
            "Fifty tenant resolutions fired {$count} queries. Tenancy is resolved on "
            .'every request and by several call sites within one; if it is not memoized, '
            .'the cost multiplies by every one of them.',
        );
    }

    /** The mode is a config read, not a per-call decision. */
    public function test_deciding_the_tenancy_mode_costs_no_queries(): void
    {
        $this->actingAs($this->user);

        $context = app(TenantContext::class);
        $context->shouldScopeByColumn();

        $count = $this->countQueries(function () use ($context): void {
            for ($i = 0; $i < 50; $i++) {
                $context->shouldScopeByColumn();
            }
        });

        $this->assertSame(0, $count);
    }

    /* ------------------------------------------------------ the global scope */

    /**
     * WHAT ISOLATION ITSELF COSTS: the same query with the scope and without it.
     *
     * The answer should be "nothing measurable" - the scope adds one indexed
     * `WHERE tenant_id = ?`, and every list index in this application is keyed
     * on `tenant_id` first precisely so that clause is free. A ratio far above
     * 1 would mean an index is missing rather than that isolation is expensive.
     */
    public function test_the_tenant_scope_does_not_change_the_query_count(): void
    {
        $this->actingAs($this->user);
        $this->makeClients(50);

        $scoped = $this->countQueries(fn () => Client::query()->limit(25)->get());
        $unscoped = $this->countQueries(fn () => Client::query()->withoutGlobalScopes()->limit(25)->get());

        $this->report('list query, scoped vs unscoped', "{$scoped} vs {$unscoped} queries");

        $this->assertSame(
            $unscoped,
            $scoped,
            'The tenant scope changed the number of queries. It should only add a '
            .'WHERE clause to the one that was already being made.',
        );
    }

    /**
     * And it must not change the query SHAPE into something unindexed.
     *
     * Asserted on the plan rather than on a clock: SQLite reports which index it
     * chose, and "SCAN" instead of "SEARCH" is the finding that matters. A timing
     * assertion here would pass on 50 seeded rows however bad the plan was.
     */
    public function test_the_scoped_list_query_uses_an_index(): void
    {
        $this->actingAs($this->user);
        $this->makeClients(50);

        $sql = Client::query()->orderBy('created_at', 'desc')->limit(25)->toSql();
        $plan = collect(DB::select('EXPLAIN QUERY PLAN '.$sql, [$this->tenant->id]))
            ->pluck('detail')
            ->implode(' | ');

        $this->report('scoped list plan', str_contains($plan, 'SCAN clients') ? 'FULL SCAN' : 'index');

        $this->assertStringNotContainsString(
            'SCAN clients',
            $plan,
            "The tenant-scoped list is doing a full table scan: {$plan}",
        );
    }

    /* -------------------------------------------------- switching tenants */

    /**
     * WHAT A QUEUE WORKER PAYS PER JOB.
     *
     * Workers are shared across every tenant, so each job initializes tenancy
     * and ends it. That pair runs as often as jobs do - and unlike a request, a
     * worker has no HTTP overhead to hide it behind. This is the one tenancy
     * cost that is measured in "per job" rather than "per page".
     */
    public function test_switching_tenants_is_cheap_enough_to_do_per_job(): void
    {
        $other = Tenant::create(['name' => 'B', 'slug' => 'b']);

        // Warm: the first initialization resolves and caches more than later ones.
        tenancy()->initialize($this->tenant);
        tenancy()->end();

        $queries = $this->countQueries(function () use ($other): void {
            for ($i = 0; $i < 20; $i++) {
                tenancy()->initialize($i % 2 === 0 ? $this->tenant : $other);
                tenancy()->end();
            }
        });

        // One lookup per initialize is acceptable and expected; anything that
        // scales faster than that means a bootstrapper is doing work per switch.
        $this->report('tenant switch (x20, initialize+end)', sprintf('%d queries, %.1f per switch', $queries, $queries / 20));

        $this->assertLessThanOrEqual(
            40,
            $queries,
            "Twenty tenant switches fired {$queries} queries - more than two per switch. "
            .'A shared worker pays this on every job.',
        );
    }

    /**
     * THE SAME SWITCH, BUT BY ID - which is what a worker actually does.
     *
     * The measurement above passes an already-loaded model, so it skips the
     * lookup entirely and reports zero. That is a real number for the case where
     * the tenant is already in hand, and a misleading one for a queue worker:
     * a job carries a tenant KEY, so the worker has to find the tenant before it
     * can initialize. Reporting only the cheap path would understate the cost
     * that is actually paid per job.
     */
    public function test_switching_by_key_costs_one_lookup_per_job(): void
    {
        $key = $this->tenant->getTenantKey();

        tenancy()->initialize(Tenant::find($key));
        tenancy()->end();

        $queries = $this->countQueries(function () use ($key): void {
            for ($i = 0; $i < 20; $i++) {
                tenancy()->initialize(Tenant::find($key));
                tenancy()->end();
            }
        });

        $this->report('tenant switch by key (x20)', sprintf('%d queries, %.1f per job', $queries, $queries / 20));

        $this->assertLessThanOrEqual(
            20,
            $queries,
            "Resolving and switching tenant 20 times fired {$queries} queries - more than "
            .'one per job. A shared worker pays this on every single job it runs.',
        );
    }

    /* ------------------------------------------------------ bootstrappers */

    /**
     * THE CACHE BOOTSTRAPPER IS ON, and the reference app requires it measured
     * BOTH WAYS. This asserts the configuration rather than a timing, because
     * the property that matters is correctness: without it, a memoized count or
     * a cached schema can be served to the wrong organisation.
     *
     * PrefixCacheBootstrapper now, not stancl's tags one: the guarantee is the
     * same, but a prefix works on every store where tags need redis - see the
     * bootstrapper's own docblock. The cost it adds is a prefix on each cache
     * key - string work, no query - which is why the assertion below is a
     * query count of zero on the suite's array store.
     */
    public function test_the_cache_bootstrapper_is_enabled_and_adds_no_queries(): void
    {
        $this->assertContains(
            PrefixCacheBootstrapper::class,
            config('tenancy.bootstrappers'),
            'Tenant-prefixed cache keys are a correctness property, not an optimisation.',
        );

        tenancy()->initialize($this->tenant);

        cache()->put('probe', 1, 60);
        cache()->get('probe');

        $count = $this->countQueries(function (): void {
            for ($i = 0; $i < 20; $i++) {
                cache()->put("probe-{$i}", $i, 60);
                cache()->get("probe-{$i}");
            }
        });

        tenancy()->end();

        $this->assertSame(
            0,
            $count,
            "Tenant-prefixed cache access fired {$count} queries. Prefixing is string work; "
            .'a query here means the cache store itself is backed by the database.',
        );
    }

    /**
     * A COST THAT SCALES WITH TENANT COUNT would be the serious finding, because
     * it is invisible at five tenants and fatal at five hundred. Resolution must
     * be a keyed lookup, not a walk.
     */
    public function test_resolution_cost_does_not_grow_with_the_number_of_tenants(): void
    {
        $this->actingAs($this->user);

        $few = $this->medianQueries(fn () => $this->get('/clients'));

        for ($i = 0; $i < 50; $i++) {
            Tenant::create(['name' => "T{$i}", 'slug' => "t{$i}"]);
        }

        $many = $this->medianQueries(fn () => $this->get('/clients'));

        $this->report('list cost, 1 tenant vs 51', "{$few} vs {$many} queries");

        $this->assertLessThanOrEqual(
            $few,
            $many,
            "A list cost {$few} queries with 1 tenant and {$many} with 51. Tenant "
            .'resolution must be a keyed lookup, not a scan over tenants.',
        );
    }

    /* --------------------------------------------------------------- setup */

    private function countQueries(callable $work): int
    {
        DB::flushQueryLog();
        DB::enableQueryLog();

        $work();

        $count = count(DB::getQueryLog());

        DB::disableQueryLog();

        return $count;
    }

    /**
     * Print the figure alongside the assertion.
     *
     * A stress test that only says "passed" answers the wrong question. The
     * point of measuring tenancy is to KNOW what it costs, so the number goes
     * where somebody running the suite will see it - and so a slow drift toward
     * a threshold is visible before it crosses one. Matches the reporting the
     * existing performance suite already does.
     */
    private function report(string $label, string $value): void
    {
        fwrite(STDERR, sprintf("\n  %-38s %s\n", $label, $value));
    }

    /** Warm up, then the median of several runs - never a single cold one. */
    private function medianQueries(callable $work): int
    {
        $work();

        $counts = [];

        for ($i = 0; $i < self::RUNS; $i++) {
            $counts[] = $this->countQueries($work);
        }

        sort($counts);

        return $counts[intdiv(count($counts), 2)];
    }

    private function makeClients(int $count): void
    {
        $plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Plan',
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        $router = Router::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Router',
            'ip_address' => '10.0.0.1',
            'model' => 'RB750',
            'status' => 'online',
        ]);

        for ($i = 0; $i < $count; $i++) {
            $unique = uniqid('c', true);

            Client::withoutGlobalScopes()->forceCreate([
                'tenant_id' => $this->tenant->id,
                'plan_id' => $plan->id,
                'router_id' => $router->id,
                'name' => "Client {$unique}",
                'phone' => '+254'.substr((string) crc32($unique), 0, 9),
                'access_code' => strtoupper(substr(md5($unique), 0, 10)),
                'status' => 'active',
                'plan_type' => 'pppoe',
                'expiry_date' => '2026-12-31',
            ]);
        }
    }
}
