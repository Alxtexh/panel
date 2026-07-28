<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

/**
 * Dragging rows into a stored order.
 *
 * THE POSITIONS ARE RECYCLED, NOT RECALCULATED, and most of these tests exist
 * to hold that property. The set of positions a page occupies is unchanged by a
 * drag - only which row holds which one moves - which is what makes the write
 * cost bounded by the page rather than the table, keeps rows outside the page
 * untouched, and means gaps can never run out.
 *
 * The dangerous half is authorization: a reorder names ids, and ids are exactly
 * the sort of thing a request can invent.
 */
final class RowReorderTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $alice;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->tenantB = Tenant::create(['name' => 'B', 'slug' => 'b']);

        $this->alice = User::factory()->create([
            'tenant_id' => $this->tenantA->id,
            'email_verified_at' => now(),
        ]);
    }

    /* ------------------------------------------------------------ it works */

    public function test_a_page_can_be_reordered(): void
    {
        $ids = $this->plans(4);

        // Move the first to the end.
        $reordered = [$ids[1], $ids[2], $ids[3], $ids[0]];

        $this->actingAs($this->alice)
            ->postJson('/plans/reorder', ['ids' => $reordered])
            ->assertOk();

        $this->assertSame($reordered, $this->orderedIds());
    }

    /**
     * THE POSITION SET IS INVARIANT.
     *
     * This is what keeps rows outside the page untouched: no value leaves the
     * page's range, so nothing can collide with, or leapfrog, a row that was
     * never on screen.
     */
    public function test_reordering_reuses_the_same_positions(): void
    {
        $ids = $this->plans(5);

        $before = Plan::withoutGlobalScopes()->pluck('position')->sort()->values()->all();

        $this->actingAs($this->alice)
            ->postJson('/plans/reorder', ['ids' => array_reverse($ids)])
            ->assertOk();

        $after = Plan::withoutGlobalScopes()->pluck('position')->sort()->values()->all();

        $this->assertSame($before, $after, 'A drag invented or consumed a position.');
    }

    /**
     * ONLY THE ROWS THAT MOVED ARE WRITTEN.
     *
     * Dragging the last row up one place is two writes, not ten - the
     * difference between a reorder that scales with the page and one that
     * scales with the table.
     */
    public function test_only_moved_rows_are_written(): void
    {
        $ids = $this->plans(6);

        // Swap the last two; everything above them keeps its position.
        $reordered = [$ids[0], $ids[1], $ids[2], $ids[3], $ids[5], $ids[4]];

        DB::flushQueryLog();
        DB::enableQueryLog();

        $this->actingAs($this->alice)->postJson('/plans/reorder', ['ids' => $reordered]);

        $updates = array_filter(
            array_column(DB::getQueryLog(), 'query'),
            static fn (string $sql): bool => str_starts_with(strtolower($sql), 'update'),
        );

        DB::disableQueryLog();

        $this->assertCount(2, $updates, 'A two-row swap wrote more than two rows.');
    }

    /** A no-op drag writes nothing at all. */
    public function test_reordering_into_the_same_order_writes_nothing(): void
    {
        $ids = $this->plans(4);

        $response = $this->actingAs($this->alice)->postJson('/plans/reorder', ['ids' => $ids]);

        $response->assertOk()->assertJsonPath('moved', 0);
    }

    /* ------------------------------------------------- what must not work */

    /**
     * ANOTHER TENANT'S ROW IS NOT REORDERABLE, and not even acknowledgeable.
     *
     * The ids are dropped by the scoped query before anything is written, so a
     * request naming a foreign row reorders nothing rather than reordering
     * something it should not be able to see.
     */
    public function test_another_tenants_rows_are_ignored(): void
    {
        $mine = $this->plans(3);
        $theirs = $this->plans(2, $this->tenantB);

        $before = Plan::withoutGlobalScopes()
            ->whereIn('id', $theirs)
            ->pluck('position', 'id')
            ->all();

        $this->actingAs($this->alice)
            ->postJson('/plans/reorder', ['ids' => [...array_reverse($mine), ...$theirs]])
            ->assertOk();

        $after = Plan::withoutGlobalScopes()
            ->whereIn('id', $theirs)
            ->pluck('position', 'id')
            ->all();

        $this->assertSame($before, $after, "Another tenant's order was rewritten.");
    }

    public function test_a_guest_cannot_reorder(): void
    {
        $ids = $this->plans(3);

        $this->postJson('/plans/reorder', ['ids' => array_reverse($ids)])->assertUnauthorized();

        $this->assertSame($ids, $this->orderedIds());
    }

    /** A table that never declared an order column has nothing to reorder. */
    public function test_a_table_without_an_order_column_refuses(): void
    {
        $this->actingAs($this->alice)
            ->postJson('/clients/reorder', ['ids' => [1, 2]])
            ->assertNotFound();
    }

    /**
     * THE REQUEST IS BOUNDED BY A PAGE.
     *
     * Reordering is a gesture on what is visible. An unbounded list would make
     * this an endpoint for rewriting a whole table's order in one call.
     */
    public function test_an_oversized_request_is_refused(): void
    {
        $this->actingAs($this->alice)
            ->postJson('/plans/reorder', ['ids' => range(1, 500)])
            ->assertStatus(422);
    }

    public function test_an_empty_request_is_refused(): void
    {
        $this->actingAs($this->alice)
            ->postJson('/plans/reorder', ['ids' => []])
            ->assertStatus(422);
    }

    /* ---------------------------------------------------------- the schema */

    public function test_the_schema_declares_the_order_column(): void
    {
        $table = $this->actingAs($this->alice)
            ->get('/plans')
            ->viewData('page')['props']['schema']['table'];

        $this->assertSame('position', $table['reorderable']);

        /*
         * And the table sorts by it, because a drag under any other ordering
         * moves a row somewhere the operator cannot see the effect of.
         */
        $this->assertSame('position', $table['defaultSort']);
    }

    /* ---------------------------------------------------------------- setup */

    /** @return list<int> */
    private function orderedIds(): array
    {
        return Plan::withoutGlobalScopes()
            ->where('tenant_id', $this->tenantA->id)
            ->orderBy('position')
            ->orderBy('id')
            ->pluck('id')
            ->all();
    }

    /** @return list<int> */
    private function plans(int $count, ?Tenant $tenant = null): array
    {
        $tenant ??= $this->tenantA;
        $ids = [];

        for ($i = 0; $i < $count; $i++) {
            $ids[] = Plan::withoutGlobalScopes()->create([
                'tenant_id' => $tenant->id,
                'name' => "Plan {$tenant->id}-{$i}",
                'speed_mbps' => 10 + $i,
                'price_cents' => 1000,
                'position' => ($i + 1) * 100,
            ])->id;
        }

        return $ids;
    }
}
