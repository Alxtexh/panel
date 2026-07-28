<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Support\Abilities;
use Tests\TestCase;

/**
 * Who may subscribe to what.
 *
 * THIS IS THE ONE HOLE THE REST OF THE SUITE CANNOT SEE. Every other guard -
 * the global scope, the policies, the hostname checks - sits on the HTTP path. A
 * WebSocket subscription is authorised once, by channel name, and thereafter the
 * server pushes whatever is broadcast there. So a channel whose callback returns
 * `true` for any signed-in user is a live feed of every organisation's data, and
 * all 684 other tests still pass.
 *
 * Which is why almost every test here is a REFUSAL, and why they go through the
 * real `/broadcasting/auth` endpoint rather than calling the callbacks directly:
 * a callback that is correct but never reached proves nothing.
 *
 * THE SUITE RUNS A REAL BROADCASTER, set in phpunit.xml - see the note there.
 * Under the development default (`log`) every channel authorises, so none of
 * this is testable, and an earlier version of this file passed every refusal
 * while the callbacks were never once consulted.
 */
final class BroadcastChannelTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private Tenant $theirs;

    private User $me;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);

        $this->me = User::factory()
            ->withAbilities(Abilities::all())
            ->create(['tenant_id' => $this->mine->id, 'email_verified_at' => now()]);

    }

    private function authorise(string $channel): \Illuminate\Testing\TestResponse
    {
        return $this->postJson('/broadcasting/auth', [
            'socket_id' => '1234.5678',
            'channel_name' => $channel,
        ]);
    }

    private function clientFor(Tenant $tenant): Client
    {
        $client = new Client([
            'name' => 'Someone',
            'phone' => '+2547'.random_int(10000000, 99999999),
            'access_code' => strtoupper(bin2hex(random_bytes(3))),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now()->addMonth(),
        ]);

        $client->forceFill(['tenant_id' => $tenant->id])->save();

        return $client;
    }

    /* ------------------------------------------------------------ the allow */

    public function test_a_user_may_subscribe_to_their_own_tenants_resource(): void
    {
        $this->actingAs($this->me)
            ->authorise("private-tenant.{$this->mine->id}.clients")
            ->assertOk();
    }

    /* --------------------------------------------------------- the refusals */

    /**
     * THE CENTRAL ONE. The tenant is a number in a string the client sends, so
     * subscribing to somebody else is a matter of editing it.
     */
    public function test_a_user_cannot_subscribe_to_another_tenant(): void
    {
        $this->actingAs($this->me)
            ->authorise("private-tenant.{$this->theirs->id}.clients")
            ->assertForbidden();
    }

    /**
     * PERMISSION IS CHECKED TOO, not just tenancy. Otherwise a read-only role
     * gets live updates for records the panel refuses to show it - the same
     * data, through a different pipe.
     */
    public function test_a_role_without_the_ability_cannot_subscribe(): void
    {
        $limited = User::factory()
            ->withAbilities([Abilities::name('viewAny', 'plans')])
            ->create(['tenant_id' => $this->mine->id, 'email_verified_at' => now()]);

        $this->actingAs($limited)
            ->authorise("private-tenant.{$this->mine->id}.plans")
            ->assertOk();

        $this->actingAs($limited)
            ->authorise("private-tenant.{$this->mine->id}.clients")
            ->assertForbidden();
    }

    /** An unregistered name is not a channel - every typo would otherwise be one. */
    public function test_an_unknown_resource_is_not_a_channel(): void
    {
        $this->actingAs($this->me)
            ->authorise("private-tenant.{$this->mine->id}.secrets")
            ->assertForbidden();
    }

    public function test_a_guest_cannot_subscribe_to_anything(): void
    {
        $this->authorise("private-tenant.{$this->mine->id}.clients")
            ->assertStatus(403);
    }

    /* ---------------------------------------------------------- presence */

    public function test_presence_on_an_own_record_is_allowed_and_reveals_little(): void
    {
        $record = $this->clientFor($this->mine);

        $response = $this->actingAs($this->me)
            ->authorise("presence-tenant.{$this->mine->id}.clients.{$record->id}")
            ->assertOk();

        $payload = $response->json('channel_data');
        $info = json_decode($payload, true)['user_info'] ?? [];

        $this->assertSame($this->me->name, $info['name'] ?? null);
        $this->assertArrayNotHasKey(
            'email',
            $info,
            'The member payload is broadcast to every other subscriber, so it carries a name and nothing else.',
        );
    }

    /** Another organisation's record is not a room you may stand in. */
    public function test_presence_on_another_tenants_record_is_refused(): void
    {
        $theirs = $this->clientFor($this->theirs);

        $this->actingAs($this->me)
            ->authorise("presence-tenant.{$this->theirs->id}.clients.{$theirs->id}")
            ->assertForbidden();
    }

    /**
     * AND NOT EVEN WITH YOUR OWN TENANT IN THE NAME. Naming your own tenant but
     * another's record id is the interesting attempt, because the tenant check
     * alone would pass it.
     */
    public function test_presence_cannot_borrow_your_own_tenant_id_for_a_foreign_record(): void
    {
        $theirs = $this->clientFor($this->theirs);

        $this->actingAs($this->me)
            ->authorise("presence-tenant.{$this->mine->id}.clients.{$theirs->id}")
            ->assertForbidden();
    }
}
