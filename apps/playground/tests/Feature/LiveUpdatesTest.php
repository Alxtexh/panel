<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\Live\LiveConfig;
use RuntimeException;
use Tests\TestCase;

/**
 * Live updates must not require Reverb.
 *
 * The transport is a driver; the patching rules are shared. These cover the
 * server half - the diff endpoint that makes the default `poll` driver cheap
 * enough to be the default at all.
 */
final class LiveUpdatesTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $userA;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->tenantB = Tenant::create(['name' => 'B', 'slug' => 'b']);
        $this->userA = User::factory()->create(['tenant_id' => $this->tenantA->id, 'email_verified_at' => now()]);
    }

    private function makeClient(Tenant $tenant, string $name): int
    {
        return DB::table('clients')->insertGetId([
            'tenant_id' => $tenant->id,
            'name' => $name,
            'phone' => '+254700000000',
            'access_code' => strtoupper($name),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now(),
            'created_at' => now()->subHour(),
            'updated_at' => now()->subHour(),
        ]);
    }

    public function test_it_returns_nothing_when_nothing_changed(): void
    {
        $id = $this->makeClient($this->tenantA, 'alpha');

        $body = $this->actingAs($this->userA)
            ->getJson("/clients/updates?ids={$id}&since=".urlencode(now()->toIso8601String()))
            ->assertOk()
            ->json();

        $this->assertSame([], $body['records']);
        $this->assertNotEmpty($body['at']);
    }

    public function test_it_returns_a_row_that_changed(): void
    {
        $id = $this->makeClient($this->tenantA, 'alpha');
        $since = now()->subMinutes(30)->toIso8601String();

        DB::table('clients')->where('id', $id)->update(['status' => 'suspended', 'updated_at' => now()]);

        $records = $this->actingAs($this->userA)
            ->getJson("/clients/updates?ids={$id}&since=".urlencode($since))
            ->assertOk()
            ->json('records');

        $this->assertCount(1, $records);
        $this->assertSame('suspended', $records[0]['status']);
    }

    /**
     * The id list comes from the client and is therefore untrusted. Tenant
     * scoping must apply to it exactly as it does to the list itself - this is
     * the one endpoint where a caller names records directly.
     */
    public function test_it_never_returns_another_tenants_row_even_when_asked_by_id(): void
    {
        $mine = $this->makeClient($this->tenantA, 'mine');
        $theirs = $this->makeClient($this->tenantB, 'theirs');

        DB::table('clients')->whereIn('id', [$mine, $theirs])->update(['updated_at' => now()]);

        $records = $this->actingAs($this->userA)
            ->getJson("/clients/updates?ids={$mine},{$theirs}&since=".urlencode(now()->subHour()->toIso8601String()))
            ->assertOk()
            ->json('records');

        $this->assertCount(1, $records);
        $this->assertSame('mine', $records[0]['name']);
    }

    /**
     * The query must be O(page), never O(table). An unbounded id list would
     * turn a cheap poll into a full scan on request.
     */
    public function test_the_id_list_is_bounded(): void
    {
        $ids = [];

        for ($i = 0; $i < 30; $i++) {
            $ids[] = $this->makeClient($this->tenantA, "c{$i}");
        }

        DB::table('clients')->whereIn('id', $ids)->update(['updated_at' => now()]);

        // Ask about far more ids than any page could hold.
        $padded = implode(',', [...$ids, ...range(900000, 900500)]);

        $records = $this->actingAs($this->userA)
            ->getJson('/clients/updates?ids='.$padded.'&since='.urlencode(now()->subHour()->toIso8601String()))
            ->assertOk()
            ->json('records');

        $this->assertLessThanOrEqual(100, count($records));
    }

    public function test_the_endpoint_issues_one_query(): void
    {
        $id = $this->makeClient($this->tenantA, 'alpha');
        DB::table('clients')->where('id', $id)->update(['updated_at' => now()]);

        /*
         * WARM THE CLIENTS LIST, not the dashboard - neither is part of the
         * diff, but only one of them warms what the diff shares.
         *
         * The diff endpoint calls `ClientResource::definition()`, which since
         * roadmap 5.1 reads the custom-field definitions (and the one-time
         * "has that table been migrated" check). Both are memoized per
         * process by whichever request touches a resource first - see
         * `CustomField::byResource()` - and a dashboard request never touches
         * one. Measuring without this made the diff look like it cost four
         * queries, when a real poll, arriving after the list the operator is
         * already watching, costs one.
         */
        $this->actingAs($this->userA)->get('/clients');

        DB::flushQueryLog();
        DB::enableQueryLog();

        $this->actingAs($this->userA)
            ->getJson("/clients/updates?ids={$id}&since=".urlencode(now()->subHour()->toIso8601String()))
            ->assertOk();

        $this->assertLessThanOrEqual(
            2,
            count(DB::getQueryLog()),
            'The diff endpoint should cost one bounded query, not a page render.'
        );
    }

    public function test_guests_cannot_poll(): void
    {
        $this->getJson('/clients/updates?ids=1&since=x')->assertUnauthorized();
    }

    /* ------------------------------------------------------------- config */

    public function test_poll_is_the_default_driver_so_no_reverb_is_required(): void
    {
        $this->assertSame(LiveConfig::DRIVER_POLL, LiveConfig::fromConfig()->driver);
    }

    /**
     * A broadcast driver with no channel would listen to nothing and never
     * update - silently, which is the failure mode this project is built
     * against.
     */
    public function test_broadcast_without_a_channel_throws(): void
    {
        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('requires a channel');

        new LiveConfig(LiveConfig::DRIVER_BROADCAST);
    }

    public function test_an_absurd_poll_interval_is_refused(): void
    {
        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('denial of service');

        LiveConfig::poll(100);
    }

    public function test_an_unknown_driver_throws(): void
    {
        $this->expectException(RuntimeException::class);

        new LiveConfig('carrier-pigeon');
    }
}
