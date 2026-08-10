<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Queue;
use Illuminate\Testing\TestResponse;
use PanelKit\Panel\Jobs\RunBulkAction;
use Tests\TestCase;

/**
 * A SELECTION CAN BE BOUNDED AND STILL TOO BIG TO RUN IN A REQUEST.
 *
 * THE OLD RULE HAD TWO CASES AND NEEDED THREE. "Select all matching" was
 * queued because it can be the whole table, and an explicit selection ran
 * inline because it is bounded by what a person can tick - which is correct
 * reasoning and an incomplete conclusion. The cap on an explicit selection is
 * a THOUSAND rows, and a thousand rows through a handler that touches a
 * relation or sends a message is not a forty-millisecond round trip. It is a
 * request that runs until the web server's timeout kills it partway, leaving
 * a partial write and a 504 that says nothing about how far it got.
 *
 * NO `COUNT(*)` WAS ADDED TO DECIDE THIS. The number is `count($ids)`, already
 * in hand - which is why the threshold does not reintroduce the blocking count
 * this codebase rejects everywhere else.
 *
 * THE IDS TRAVEL, NOT THE FILTERS, and that distinction is the reason this
 * file asserts the job's payload rather than only that a job was queued. For
 * select-all the filters ARE the set and re-deriving it at execution time is
 * correct; for an explicit selection the filters would match a DIFFERENT set,
 * so dispatching without the ids would silently apply the action to rows
 * nobody ticked.
 */
final class BulkQueueThresholdTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
    }

    private function operator(): User
    {
        return User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /**
     * Rows built the way `BulkActionTest` builds them - `forceCreate` past the
     * tenant scope, because this is setting up state rather than exercising
     * the scope.
     *
     * @return list<int>
     */
    private function clients(int $count): array
    {
        $plan = Plan::withoutGlobalScopes()->firstOrCreate(
            ['tenant_id' => $this->tenant->id, 'name' => 'Plan'],
            ['speed_mbps' => 10, 'price_cents' => 1000],
        );

        $router = Router::withoutGlobalScopes()->firstOrCreate(
            ['tenant_id' => $this->tenant->id, 'name' => 'Router'],
            ['ip_address' => '10.0.0.1', 'model' => 'RB750', 'status' => 'online'],
        );

        $ids = [];

        for ($i = 0; $i < $count; $i++) {
            $unique = uniqid((string) $this->tenant->id, true);

            $ids[] = Client::withoutGlobalScopes()->forceCreate([
                'tenant_id' => $this->tenant->id,
                'plan_id' => $plan->id,
                'router_id' => $router->id,
                'name' => "Client {$unique}",
                'phone' => '+254'.substr((string) crc32($unique), 0, 9),
                'access_code' => strtoupper(substr(md5($unique), 0, 10)),
                'status' => 'active',
                'plan_type' => 'pppoe',
                'expiry_date' => '2026-12-31',
            ])->id;
        }

        return $ids;
    }

    /** @param list<int> $ids */
    private function suspend(array $ids): TestResponse
    {
        return $this->actingAs($this->operator(), 'web')
            ->postJson('/clients/bulk', ['action' => 'suspend', 'ids' => $ids]);
    }

    /**
     * A SMALL SELECTION STILL RUNS INLINE. Handing a five-row update to a
     * worker and then polling for it is slower than doing it, and the
     * threshold exists to catch the expensive case rather than to move every
     * case off the request.
     */
    public function test_a_small_explicit_selection_runs_inline(): void
    {
        Queue::fake();
        config()->set('panel.bulk.queue_threshold', 250);

        $this->suspend($this->clients(5))
            ->assertOk()
            ->assertJson(['status' => 'done', 'affected' => 5]);

        Queue::assertNothingPushed();

        $this->assertSame(5, Client::withoutGlobalScopes()->where('status', 'suspended')->count());
    }

    /**
     * THE ONE THAT WOULD HAVE CAUGHT IT. Past the threshold the answer is a
     * token to poll, not a request held open.
     */
    public function test_a_large_explicit_selection_is_queued_instead(): void
    {
        Queue::fake();
        config()->set('panel.bulk.queue_threshold', 3);

        $ids = $this->clients(5);

        $response = $this->suspend($ids)->assertOk();

        $this->assertSame('pending', $response->json('status'));
        $this->assertNotEmpty($response->json('token'), 'A queued run must return a token to poll.');

        Queue::assertPushed(RunBulkAction::class);

        // Nothing was written in the request itself - that is the point.
        $this->assertSame(0, Client::withoutGlobalScopes()->where('status', 'suspended')->count());
    }

    /**
     * THE QUEUED JOB CARRIES THE TICKED ROWS. Without this the job would
     * re-derive its set from the filters and suspend every active client
     * rather than the five that were selected - a silent over-write that
     * "a job was queued" would not have caught.
     */
    public function test_the_queued_job_acts_on_exactly_the_selected_rows(): void
    {
        config()->set('panel.bulk.queue_threshold', 3);

        // Selected, plus one that must be left alone.
        $selected = $this->clients(4);
        $untouched = $this->clients(1)[0];

        $this->suspend($selected)->assertOk();

        sort($selected);

        $this->assertSame(
            $selected,
            Client::withoutGlobalScopes()->where('status', 'suspended')->orderBy('id')->pluck('id')->all(),
            'The job must suspend the ticked rows and only those.',
        );

        $this->assertSame(
            'active',
            Client::withoutGlobalScopes()->find($untouched)->status,
            'A row that was never ticked must survive a queued bulk run untouched.',
        );
    }
}
