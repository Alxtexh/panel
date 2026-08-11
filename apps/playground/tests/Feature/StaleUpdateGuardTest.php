<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

/**
 * The optimistic-concurrency guard, end to end.
 *
 * THE SERVER HALF ALREADY EXISTED. `RecordController::assertNotStale` compares a
 * submitted `_updated_at` against the record's, and `RecordWriteTest` proves it
 * rejects a stale one. What nothing proved is the half in between: that the
 * token reaches the browser at all.
 *
 * THAT GAP IS THE ONE THAT MATTERS, and this project has shipped it before -
 * `StatWidget` composed correct payloads that nothing rendered, and a roles
 * screen was routed with no page file. A guard the client never triggers is
 * indistinguishable from no guard, and it passes its own unit test forever,
 * because the test posts the field by hand.
 *
 * So this asserts the whole chain: the edit screen carries the token, a save
 * that echoes it succeeds, and a save carrying an older one is refused.
 */
final class StaleUpdateGuardTest extends TestCase
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
     * INSERTED THROUGH THE QUERY BUILDER, as `RecordWriteTest` does. `Client`
     * fills its tenant column from the panel's resolved context rather than
     * from anything a caller passes, so seeding a row needs the column stated
     * directly rather than a resolver configured after the container has
     * already answered.
     */
    private function client(User $user): Client
    {
        $id = DB::table('clients')->insertGetId([
            'tenant_id' => $this->tenant->id,
            'name' => 'Subject',
            'phone' => '+254700000999',
            'access_code' => 'AC-CONC',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return Client::withoutGlobalScopes()->findOrFail($id);
    }

    /**
     * THE TOKEN REACHES THE FORM. Without this the guard cannot fire from a
     * browser, and its own test would still pass.
     */
    public function test_the_edit_screen_carries_the_version_token(): void
    {
        $user = $this->operator();
        $client = $this->client($user);

        $props = $this->actingAs($user)
            ->get("/clients/{$client->id}/edit")
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertArrayHasKey(
            '_updated_at',
            $props['values'],
            'The edit screen does not carry _updated_at, so the stale-save guard can never fire from a form.',
        );

        $this->assertSame($client->updated_at->toIso8601String(), $props['values']['_updated_at']);
    }

    /** Echoing the token back saves normally. */
    public function test_a_current_save_succeeds(): void
    {
        $user = $this->operator();
        $client = $this->client($user);

        $this->actingAs($user)
            ->put("/clients/{$client->id}", [
                'name' => 'Renamed',
                'phone' => $client->phone,
                'access_code' => $client->access_code,
                'status' => 'active',
                'plan_type' => 'pppoe',
                '_updated_at' => $client->updated_at->toIso8601String(),
            ])
            ->assertSessionHasNoErrors();

        $this->assertSame('Renamed', $client->fresh()->name);
    }

    /**
     * AND AN OLDER ONE IS REFUSED rather than silently overwriting.
     *
     * Two operators on one record is the ordinary case in a panel, and the
     * failure it produces is invisible: the second save wins, the first
     * person's edit is gone, and nothing anywhere says so.
     */
    public function test_a_stale_save_is_refused(): void
    {
        $user = $this->operator();
        $client = $this->client($user);

        $stale = $client->updated_at->subMinute()->toIso8601String();

        $this->actingAs($user)
            ->put("/clients/{$client->id}", [
                'name' => 'Overwritten',
                'phone' => $client->phone,
                'access_code' => $client->access_code,
                'status' => 'active',
                'plan_type' => 'pppoe',
                '_updated_at' => $stale,
            ])
            ->assertSessionHasErrors('_conflict');

        $this->assertSame('Subject', $client->fresh()->name, 'A stale save overwrote the record.');
    }
}
