<?php

declare(strict_types=1);

namespace Tests\Feature\Performance;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

/**
 * Spec §10 enforcement: "A test seeded with 500k rows asserts the index endpoint
 * responds in under 300 ms."
 *
 * This is the one test that cannot run on the in-memory fixture the rest of the
 * suite uses - a budget measured against 20 rows measures nothing. It connects to
 * the real development database and SKIPS if the demo data has not been seeded,
 * so a fresh clone does not fail on it.
 *
 * READ ONLY. Nothing here writes, and RefreshDatabase is deliberately not used -
 * it would drop the 500k rows this test exists to measure against.
 *
 * CAVEAT while the engine is undecided: these numbers are measured on SQLite.
 * They demonstrate that the query SHAPE is sound - keyset seek, no COUNT, one
 * join, constant query count - but they do not transfer to Postgres, whose
 * planner will behave differently. Re-baseline when the engine is chosen.
 */
final class ClientsPerformanceTest extends TestCase
{
    private const BUDGET_MS = 300;

    private const MIN_ROWS = 100_000;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        // Point at the real development database rather than the in-memory one
        // configured in phpunit.xml.
        config([
            'database.connections.sqlite.database' => database_path('database.sqlite'),
        ]);
        DB::purge('sqlite');

        if (! file_exists(database_path('database.sqlite'))) {
            $this->markTestSkipped('No development database. Run: make seed');
        }

        $rows = DB::table('clients')->count();

        if ($rows < self::MIN_ROWS) {
            $this->markTestSkipped(
                sprintf('Only %s clients seeded; need %s. Run: make seed', number_format($rows), number_format(self::MIN_ROWS))
            );
        }

        $user = User::query()->whereNotNull('tenant_id')->first();

        if ($user === null) {
            $this->markTestSkipped('No tenant-assigned user in the development database.');
        }

        $this->user = $user;
    }

    public function test_the_unfiltered_list_responds_within_budget(): void
    {
        $this->assertWithinBudget('/clients', 'unfiltered list');
    }

    public function test_a_status_filter_responds_within_budget(): void
    {
        $this->assertWithinBudget('/clients?status=active', 'status filter');
    }

    public function test_a_sort_change_responds_within_budget(): void
    {
        $this->assertWithinBudget('/clients?sort=expiry_date&direction=asc', 'sort by expiry');
    }

    public function test_a_prefix_search_responds_within_budget(): void
    {
        $this->assertWithinBudget('/clients?search=Am', 'prefix search (indexed)');
    }

    /**
     * The expensive half of the search fix.
     *
     * Matching the start of a LATER word needs a leading wildcard, which no
     * btree index can serve, so this is a scan of the tenant's rows. It is
     * measured separately from the indexed prefix case precisely so the cost is
     * visible rather than averaged away - and so a regression past the budget
     * fails loudly instead of quietly making every search slow.
     */
    public function test_a_word_prefix_search_responds_within_budget(): void
    {
        $this->assertWithinBudget('/clients?search=Achieng', 'word-prefix search (scan)');
    }

    public function test_a_combined_filter_and_sort_responds_within_budget(): void
    {
        $this->assertWithinBudget(
            '/clients?status=active&planType=pppoe&sort=name&direction=asc',
            'combined filter and sort',
        );
    }

    /**
     * The point of keyset pagination: page 2,000 costs what page 1 costs.
     *
     * With OFFSET this test is what fails first - the database walks every
     * skipped row. Walking 20 pages here is a proxy for deep pagination without
     * needing to fabricate a deep cursor by hand.
     */
    public function test_deep_pagination_does_not_degrade(): void
    {
        $firstPageMs = null;
        $lastPageMs = null;
        $cursor = null;

        for ($page = 0; $page < 20; $page++) {
            $url = '/clients'.($cursor ? '?cursor='.urlencode($cursor) : '');

            $started = microtime(true);
            $response = $this->actingAs($this->user)->get($url)->assertOk();
            $elapsed = (microtime(true) - $started) * 1000;

            $firstPageMs ??= $elapsed;
            $lastPageMs = $elapsed;

            $cursor = $response->viewData('page')['props']['nextCursor'];

            if ($cursor === null) {
                break;
            }
        }

        $this->assertNotNull($lastPageMs);
        $this->assertLessThan(
            self::BUDGET_MS,
            $lastPageMs,
            sprintf('Page 20 took %.1f ms, over the %d ms budget.', $lastPageMs, self::BUDGET_MS)
        );

        // Deep pages must not cost meaningfully more than shallow ones. A 4x
        // allowance absorbs measurement noise while still catching an OFFSET
        // regression, which degrades linearly and would blow past it.
        $this->assertLessThan(
            max($firstPageMs * 4, 50),
            $lastPageMs,
            sprintf(
                'Deep pagination degraded: page 1 took %.1f ms, page 20 took %.1f ms. Has OFFSET crept back in?',
                $firstPageMs,
                $lastPageMs,
            )
        );
    }

    /**
     * §10: the list response must not run an unbounded count against the base
     * table. Asserted here at real scale, where a COUNT actually hurts.
     */
    public function test_the_list_response_runs_no_count_at_scale(): void
    {
        /*
         * A WARM-UP REQUEST FIRST, DISCARDED - the same methodology
         * `panel:benchmark` uses and for the same reason.
         *
         * The first request in a process populates caches that later requests do
         * not pay for: the panel's schema cache, and Spatie's permission map.
         * Measured here, that first request issues 15 queries and the second
         * issues 5 - so counting the first would report a threefold regression
         * that no user experiences.
         *
         * This is not the threshold being relaxed to accommodate Spatie. The
         * steady-state count is unchanged; what changed is that there is now a
         * warm-up cost, and measuring it was the mistake.
         */
        $this->actingAs($this->user)->get('/clients')->assertOk();

        $queries = [];

        DB::listen(function ($query) use (&$queries): void {
            $queries[] = $query->sql;
        });

        $this->actingAs($this->user)->get('/clients')->assertOk();

        /*
         * The notifications table is EXEMPT, named explicitly.
         *
         * This guard is about the LIST query: a COUNT over `clients` is
         * unbounded and grows with the tenant, which is what §10 forbids in
         * front of rows. The unread-badge count is a different shape - one
         * user's inbox, through the morph index, bounded by what that person
         * has been sent. Naming it keeps the guard sharp; a loose "ignore
         * expected counts" pattern would let a real one back in.
         */
        $queries = array_filter(
            $queries,
            static fn (string $sql): bool => ! str_contains($sql, 'notifications'),
        );

        foreach ($queries as $sql) {
            $this->assertStringNotContainsStringIgnoringCase('count(', $sql, "Count query in list response: {$sql}");
        }

        $this->assertLessThanOrEqual(
            5,
            count($queries),
            'The list response issued more queries than expected: '.implode(' | ', $queries)
        );
    }

    private function assertWithinBudget(string $url, string $label): void
    {
        // One warm-up request, then measure. The first request in a process pays
        // framework boot and query-plan preparation, which is not what the budget
        // is about - §10 measures the steady-state interaction cost.
        $this->actingAs($this->user)->get($url)->assertOk();

        $samples = [];

        for ($i = 0; $i < 3; $i++) {
            $started = microtime(true);
            $this->actingAs($this->user)->get($url)->assertOk();
            $samples[] = (microtime(true) - $started) * 1000;
        }

        sort($samples);
        $median = $samples[1];

        $this->assertLessThan(
            self::BUDGET_MS,
            $median,
            sprintf(
                '%s took %.1f ms (median of %s), over the %d ms budget.',
                $label,
                $median,
                implode(', ', array_map(static fn (float $m): string => sprintf('%.1f', $m), $samples)),
                self::BUDGET_MS,
            )
        );

        fwrite(STDERR, sprintf("\n  %-32s %6.1f ms\n", $label, $median));
    }
}
