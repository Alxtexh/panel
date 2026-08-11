<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Clustering rows under headings.
 *
 * GROUPING IS AN ORDERING, NOT AN AGGREGATION, and every test here exists to
 * keep it that way. The naive implementation fetches the whole table and
 * buckets it in PHP - fine at 200 rows, fatal at a million - so what is
 * asserted is that rows arrive already clustered from ONE page query, that
 * pagination still walks them exactly once, and that the seek can resume in the
 * middle of a group.
 */
final class TableGroupingTest extends TestCase
{
    use RefreshDatabase;

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

    /** The grouping declaration travels once, as structure. */
    public function test_the_schema_declares_the_grouping(): void
    {
        $group = $this->actingAs($this->user)
            ->get('/routers')
            ->viewData('page')['props']['schema']['table']['groupBy'];

        $this->assertSame('status', $group['key']);
        $this->assertSame('Status', $group['label']);
    }

    /** A table that does not group says so, rather than omitting the key. */
    public function test_an_ungrouped_table_declares_no_grouping(): void
    {
        $group = $this->actingAs($this->user)
            ->get('/plans')
            ->viewData('page')['props']['schema']['table']['groupBy'] ?? null;

        $this->assertNull($group);
    }

    /**
     * THE HEADLINE: rows come back already clustered.
     *
     * Asserted as "a group never reappears after it ended", which is exactly
     * what lets the client insert a heading on change and nothing else.
     */
    public function test_rows_arrive_clustered_by_the_group(): void
    {
        $this->routers(4, 'online');
        $this->routers(4, 'offline');
        $this->routers(2, 'degraded');

        $seen = [];
        $previous = null;

        foreach (array_column($this->page(), 'status') as $status) {
            if ($status === $previous) {
                continue;
            }

            $this->assertNotContains($status, $seen, "Group [{$status}] was interrupted and resumed.");

            $seen[] = $status;
            $previous = $status;
        }

        $this->assertGreaterThan(1, count($seen), 'The fixture needs more than one group to prove anything.');
    }

    /**
     * A GROUP MAY SPAN A PAGE, and the next page resumes inside it.
     *
     * This is the case the cursor had to be generalised for: the seek carries
     * the group value AND the sort value, because resuming on the sort value
     * alone would land in the wrong group.
     */
    public function test_a_group_spanning_a_page_boundary_resumes_correctly(): void
    {
        $this->routers(14, 'online');
        $this->routers(6, 'offline');

        $page1 = $this->pageWithCursor();
        $page2 = $this->pageWithCursor($page1['cursor']);

        $this->assertCount(10, $page1['rows']);
        $this->assertSame('online', $page1['rows'][9]['status']);
        $this->assertSame('online', $page2['rows'][0]['status'], 'Page 2 did not resume inside the group.');
    }

    /**
     * EVERY ROW EXACTLY ONCE, across the whole table.
     *
     * The generalised seek is where an off-by-one shows up as rows repeating or
     * vanishing at a page boundary - the failure that looks like data loss
     * rather than like a pagination bug.
     */
    public function test_walking_a_grouped_table_visits_each_row_once(): void
    {
        $this->routers(9, 'online');
        $this->routers(9, 'offline');
        $this->routers(5, 'degraded');

        $seen = [];
        $cursor = null;

        do {
            $page = $this->pageWithCursor($cursor);
            $seen = [...$seen, ...array_column($page['rows'], 'id')];
            $cursor = $page['cursor'];
        } while ($cursor !== null);

        $this->assertCount(23, $seen);
        $this->assertSame($seen, array_values(array_unique($seen)), 'A row appeared on two pages.');
    }

    /**
     * ONE PAGE IS STILL ONE PAGE.
     *
     * If grouping ever starts fetching everything to bucket it, this is what
     * notices - the row count stops matching the page size long before anybody
     * sees a slow page.
     */
    public function test_a_grouped_page_is_still_one_page(): void
    {
        $this->routers(30, 'online');

        $this->assertCount(10, $this->page(), 'Grouping must not widen the page.');
    }

    /* ---------------------------------------------------------------- setup */

    /** @return list<array<string, mixed>> */
    private function page(): array
    {
        return $this->actingAs($this->user)->get('/routers')->viewData('page')['props']['records'];
    }

    /** @return array{rows: list<array<string, mixed>>, cursor: string|null} */
    private function pageWithCursor(?string $cursor = null): array
    {
        $url = '/routers'.($cursor === null ? '' : '?cursor='.urlencode($cursor));

        $props = $this->actingAs($this->user)->get($url)->viewData('page')['props'];

        return ['rows' => $props['records'], 'cursor' => $props['nextCursor']];
    }

    private function routers(int $count, string $status = 'online'): void
    {
        for ($i = 0; $i < $count; $i++) {
            Router::withoutGlobalScopes()->create([
                'tenant_id' => $this->tenant->id,
                'name' => sprintf('RTR-%s-%03d', $status, $i),
                'model' => 'MikroTik hEX S',
                'ip_address' => '10.0.0.'.($i + 1),
                'status' => $status,
                'last_seen_at' => now()->subMinutes($i),
            ]);
        }
    }
}
