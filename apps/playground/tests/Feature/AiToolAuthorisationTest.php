<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Ai\Tools\FindSubscriber;
use App\Ai\Tools\SuspendSubscriber;
use App\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Ai\Tools\Request;
use PanelKit\Panel\Support\Abilities;
use Tests\TestCase;

/**
 * What the assistant may and may not do.
 *
 * A TOOL IS A NEW WAY INTO THE SAME DATA, and it does not travel the HTTP path
 * every other guard sits on. There is no policy middleware around a tool call,
 * no route, no controller - the model decides to call it and it runs. So a tool
 * that queries subscribers is an endpoint with no authorisation at all unless it
 * checks for itself.
 *
 * THESE TESTS NEED NO LANGUAGE MODEL, which is the useful part: the security
 * properties are entirely in the tools, so they can be invoked directly with a
 * constructed request. A test that required a real provider would be a test
 * nobody runs.
 *
 * THE PROMPT IS NOT A CONTROL. It is worth stating plainly because it is the
 * mistake this design exists to avoid: instructions telling a model not to do
 * something are a request to a system whose defining property is that its output
 * is not guaranteed. Every assertion below is about a mechanism.
 */
final class AiToolAuthorisationTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private Tenant $theirs;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);
    }

    /** @param list<string> $abilities */
    private function actAs(array $abilities, ?Tenant $tenant = null): User
    {
        $user = User::factory()
            ->withAbilities($abilities)
            ->create(['tenant_id' => ($tenant ?? $this->mine)->id, 'email_verified_at' => now()]);

        $this->actingAs($user);
        tenancy()->initialize($tenant ?? $this->mine);

        return $user;
    }

    private function clientFor(Tenant $tenant, string $name = 'Amina Otieno'): Client
    {
        $client = new Client([
            'name' => $name,
            'phone' => '+2547'.random_int(10000000, 99999999),
            'access_code' => strtoupper(bin2hex(random_bytes(3))),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now()->addMonth(),
        ]);

        $client->forceFill(['tenant_id' => $tenant->id])->save();

        return $client;
    }

    private function request(array $arguments): Request
    {
        return new Request($arguments);
    }

    protected function tearDown(): void
    {
        tenancy()->end();

        parent::tearDown();
    }

    /* ------------------------------------------------------------- reading */

    public function test_a_permitted_user_can_look_a_subscriber_up(): void
    {
        $this->actAs([Abilities::name('viewAny', 'clients')]);
        $client = $this->clientFor($this->mine);

        $result = (string) (new FindSubscriber)->handle($this->request(['query' => $client->access_code]));

        $this->assertStringContainsString('Amina Otieno', $result);
    }

    /**
     * READS ARE AUTHORISED TOO. It is tempting to treat them as harmless, but
     * this returns a person's phone number and service status - data the panel
     * already decided who may see.
     */
    public function test_a_user_without_the_ability_is_refused(): void
    {
        $this->actAs([Abilities::name('viewAny', 'plans')]);
        $client = $this->clientFor($this->mine);

        $result = (string) (new FindSubscriber)->handle($this->request(['query' => $client->access_code]));

        $this->assertStringContainsString('do not have permission', $result);
        $this->assertStringNotContainsString('Amina', $result);
    }

    /** Another organisation's subscriber is simply not there. */
    public function test_another_tenants_subscriber_is_not_found(): void
    {
        $theirs = $this->clientFor($this->theirs, 'Not Yours');

        $this->actAs([Abilities::name('viewAny', 'clients')]);

        $result = (string) (new FindSubscriber)->handle($this->request(['query' => $theirs->access_code]));

        $this->assertStringContainsString('No subscriber here matches', $result);
        $this->assertStringNotContainsString('Not Yours', $result);
    }

    /* ---------------------------------------------------------- suspending */

    public function test_a_permitted_user_can_suspend(): void
    {
        $this->actAs(Abilities::all());
        $client = $this->clientFor($this->mine);

        $result = (string) (new SuspendSubscriber)->handle(
            $this->request(['id' => $client->id, 'reason' => 'Non-payment']),
        );

        $this->assertStringContainsString('Suspended', $result);
        $this->assertSame('suspended', $client->fresh()->status);
    }

    /**
     * THE CENTRAL ONE. A read-only role must not be able to cut somebody's
     * internet off by asking an assistant to do it.
     */
    public function test_a_read_only_role_cannot_suspend(): void
    {
        $this->actAs([
            Abilities::name('viewAny', 'clients'),
            Abilities::name('view', 'clients'),
        ]);

        $client = $this->clientFor($this->mine);

        $result = (string) (new SuspendSubscriber)->handle(
            $this->request(['id' => $client->id, 'reason' => 'Because I said so']),
        );

        $this->assertStringContainsString('do not have permission', $result);
        $this->assertSame('active', $client->fresh()->status, 'And nothing happened.');
    }

    /**
     * NOT FOUND IS REPORTED BEFORE PERMISSION, because the tenant scope has
     * already applied - saying "you do not have permission" about a record
     * belonging to somebody else would confirm that it exists.
     */
    public function test_another_tenants_subscriber_cannot_be_suspended(): void
    {
        $theirs = $this->clientFor($this->theirs);

        $this->actAs(Abilities::all());

        $result = (string) (new SuspendSubscriber)->handle(
            $this->request(['id' => $theirs->id, 'reason' => 'Anything']),
        );

        $this->assertStringContainsString('no subscriber with that id', $result);
        $this->assertSame('active', $theirs->fresh()->status);
    }

    /* ------------------------------------------------------------ approval */

    /**
     * THE DESTRUCTIVE TOOL ALWAYS PAUSES, and the question names the person.
     *
     * "Approve suspend_subscriber?" is a prompt somebody clicks through;
     * "Suspend Amina Otieno (+254…)?" is one they read. That difference is the
     * entire value of the approval step.
     */
    public function test_suspending_always_asks_first_and_names_the_subscriber(): void
    {
        $this->actAs(Abilities::all());
        $client = $this->clientFor($this->mine);

        $approval = (new SuspendSubscriber)->shouldRequestApproval(
            $this->request(['id' => $client->id, 'reason' => 'Non-payment']),
        );

        $this->assertNotNull($approval, 'A destructive tool never runs unasked.');
        $this->assertStringContainsString('Amina Otieno', (string) $approval->reason);
        $this->assertStringContainsString('Non-payment', (string) $approval->reason);
    }

    /** Reading does not ask, because there is nothing to undo. */
    public function test_the_read_tool_is_not_destructive(): void
    {
        $this->assertFalse((new FindSubscriber)->isDestructive());
        $this->assertTrue((new SuspendSubscriber)->isDestructive());
    }
}
