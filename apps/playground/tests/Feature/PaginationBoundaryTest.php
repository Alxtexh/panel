<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * The last page has to KNOW it is the last page.
 *
 * "The page came back full, so there is probably more" is a guess, and it is
 * wrong exactly when the row count is a multiple of the page size - which is
 * not a rare case, it is one row count in ten. With 20 routers and a page of
 * 10, page 2 came back full, a cursor was issued, Next stayed enabled, and
 * page 3 rendered an empty table under a paginator reading "3 of 2".
 *
 * The fix reads one row past the page and throws it away. These tests pin the
 * boundary from both sides, because an off-by-one here fails in two opposite
 * ways: offering a page that does not exist, or hiding one that does.
 */
final class PaginationBoundaryTest extends TestCase
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

    /**
     * THE REPORTED BUG: an exact multiple of the page size.
     *
     * 20 rows, 10 per page. Page 2 is full and is also the end.
     */
    public function test_an_exact_multiple_of_the_page_size_ends_cleanly(): void
    {
        $this->plans(20);

        $page1 = $this->page();
        $this->assertCount(10, $page1['records']);
        $this->assertNotNull($page1['nextCursor'], 'Page 1 of 2 must offer a next page.');

        $page2 = $this->page($page1['nextCursor']);
        $this->assertCount(10, $page2['records']);
        $this->assertNull(
            $page2['nextCursor'],
            'A full LAST page still offered a next page - the paginator read "3 of 2".',
        );
    }

    /** One row over: the next page exists and must be offered. */
    public function test_one_row_past_the_page_still_offers_a_next_page(): void
    {
        $this->plans(11);

        $page1 = $this->page();
        $this->assertNotNull($page1['nextCursor']);

        $page2 = $this->page($page1['nextCursor']);
        $this->assertCount(1, $page2['records']);
        $this->assertNull($page2['nextCursor']);
    }

    /** A short first page is the only page. */
    public function test_a_partial_first_page_offers_nothing_further(): void
    {
        $this->plans(4);

        $page = $this->page();

        $this->assertCount(4, $page['records']);
        $this->assertNull($page['nextCursor']);
    }

    /** Exactly one page's worth is one page. */
    public function test_exactly_one_page_is_one_page(): void
    {
        $this->plans(10);

        $this->assertNull($this->page()['nextCursor']);
    }

    public function test_an_empty_table_offers_nothing(): void
    {
        $page = $this->page();

        $this->assertSame([], $page['records']);
        $this->assertNull($page['nextCursor']);
    }

    /**
     * THE PROBE ROW IS NEVER SHOWN.
     *
     * Reading `perPage + 1` to answer "is there more" would be a bug of its own
     * if the extra row reached the page - every page would show 11 rows and the
     * last row of each would repeat as the first of the next.
     */
    public function test_the_probe_row_never_appears_in_the_results(): void
    {
        $this->plans(25);

        $page1 = $this->page();
        $page2 = $this->page($page1['nextCursor']);

        $this->assertCount(10, $page1['records']);
        $this->assertCount(10, $page2['records']);

        $seen = array_merge(
            array_column($page1['records'], 'id'),
            array_column($page2['records'], 'id'),
        );

        $this->assertSame(
            $seen,
            array_values(array_unique($seen)),
            'A row appeared on two pages - the probe row leaked into the results.',
        );
    }

    /** Walking the whole table visits every row exactly once. */
    public function test_walking_every_page_visits_each_row_once(): void
    {
        $this->plans(23);

        $seen = [];
        $cursor = null;

        do {
            $page = $this->page($cursor);
            $seen = [...$seen, ...array_column($page['records'], 'id')];
            $cursor = $page['nextCursor'];
        } while ($cursor !== null);

        $this->assertCount(23, $seen);
        $this->assertSame($seen, array_values(array_unique($seen)));
    }

    /* ---------------------------------------------------------------- setup */

    /** @return array{records: list<array<string, mixed>>, nextCursor: string|null} */
    private function page(?string $cursor = null): array
    {
        $url = '/plans?perPage=10'.($cursor === null ? '' : '&cursor='.urlencode($cursor));

        $props = $this->actingAs($this->user)->get($url)->viewData('page')['props'];

        return ['records' => $props['records'], 'nextCursor' => $props['nextCursor']];
    }

    private function plans(int $count): void
    {
        for ($i = 0; $i < $count; $i++) {
            Plan::withoutGlobalScopes()->create([
                'tenant_id' => $this->tenant->id,
                'name' => sprintf('Plan %03d', $i),
                'speed_mbps' => 10 + $i,
                'price_cents' => 1000,
            ]);
        }
    }
}
