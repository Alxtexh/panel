<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Api\ApiToken;
use Tests\TestCase;

/**
 * The public API: a contract, not the panel's own endpoints.
 *
 * THE PANEL'S ENDPOINTS ARE NOT AN API, and conflating them is the mistake this
 * exists to avoid. They are session-authenticated, Inertia-shaped, and free to
 * change whenever a screen changes; anybody who integrated against them would
 * break on a redesign. This is versioned, JSON in and out, and stable.
 *
 * WHAT IS ASSERTED IS MOSTLY REFUSAL. A token is a credential that bypasses the
 * sign-in flow entirely, so the interesting cases are the ones where it must not
 * work: another organisation's record, an ability the token was not granted, an
 * ability its owner has since lost, an expired token, a resource that is not an
 * API surface at all.
 *
 * THE TOKEN IS THE TENANT CONTEXT. There is no session and no host to resolve an
 * organisation from, which makes the isolation tests here different in kind from
 * the panel's: nothing else establishes the boundary.
 */
final class PublicApiTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $rival;

    private User $owner;

    private string $token;

    protected function setUp(): void
    {
        parent::setUp();

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        $this->owner = User::factory()->create([
            'tenant_id' => $this->acme->id,
            'email_verified_at' => now(),
        ]);

        $this->token = ApiToken::issue(
            $this->acme->id,
            $this->owner->getKey(),
            'Test integration',
            ['*'],
        )['plaintext'];
    }

    private function client(Tenant $tenant, string $name, string $code): Client
    {
        return Client::query()->forceCreate([
            'tenant_id' => $tenant->id,
            'name' => $name,
            'access_code' => $code,
            'phone' => '+2547'.random_int(10_000_000, 99_999_999),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now()->addYear(),
        ]);
    }

    /** @param array<string, mixed> $data */
    private function api(string $method, string $uri, array $data = [], ?string $token = null)
    {
        return $this->json($method, $uri, $data, [
            'Authorization' => 'Bearer '.($token ?? $this->token),
        ]);
    }

    /* -------------------------------------------------------- the doorway */

    public function test_a_request_without_a_token_is_unauthenticated(): void
    {
        $this->client($this->acme, 'Grace', 'G-1');

        $this->json('GET', '/api/v1/clients')->assertStatus(401);
    }

    public function test_a_token_that_does_not_exist_is_unauthenticated(): void
    {
        $this->api('GET', '/api/v1/clients', token: 'pk_not-a-real-token')->assertStatus(401);
    }

    /**
     * AN EXPIRED TOKEN IS REFUSED. Not "eventually cleaned up" - refused on the
     * first request after its expiry, because a credential that outlives its
     * stated life is not a credential with a stated life.
     */
    public function test_an_expired_token_is_refused(): void
    {
        $expired = ApiToken::issue(
            $this->acme->id,
            $this->owner->getKey(),
            'Old',
            ['*'],
            now()->subDay(),
        )['plaintext'];

        $this->api('GET', '/api/v1/clients', token: $expired)->assertStatus(401);
    }

    /**
     * A SESSION IS NOT A TOKEN. The API prefix carries no session middleware, so
     * a signed-in browser must not be authenticated here - otherwise the API is
     * a CSRF surface reachable from any page the browser has open.
     */
    public function test_a_browser_session_does_not_authenticate_the_api(): void
    {
        $this->actingAs($this->owner)
            ->json('GET', '/api/v1/clients')
            ->assertStatus(401);
    }

    /* --------------------------------------------------------------- reads */

    public function test_a_list_returns_this_organisations_records(): void
    {
        $this->client($this->acme, 'Grace Wanjiku', 'G-1');
        $this->client($this->rival, 'Somebody Else', 'R-1');

        $response = $this->api('GET', '/api/v1/clients')->assertOk();

        $names = array_column($response->json('data'), 'name');

        $this->assertContains('Grace Wanjiku', $names);
        $this->assertNotContains('Somebody Else', $names, 'Another organisation reached the API.');
    }

    /**
     * A CURSOR, NOT A PAGE NUMBER. An API offering `?page=5000` would offer the
     * one access pattern the rest of this system was built to avoid.
     */
    public function test_the_list_pages_by_cursor(): void
    {
        for ($i = 0; $i < 3; $i++) {
            $this->client($this->acme, "Client {$i}", "C-{$i}");
        }

        $meta = $this->api('GET', '/api/v1/clients?perPage=10')->assertOk()->json('meta');

        $this->assertArrayHasKey('next_cursor', $meta);
        $this->assertArrayNotHasKey('page', $meta);
        $this->assertArrayNotHasKey('last_page', $meta);
    }

    public function test_a_record_can_be_read(): void
    {
        $client = $this->client($this->acme, 'Grace Wanjiku', 'G-1');

        $this->api('GET', "/api/v1/clients/{$client->id}")
            ->assertOk()
            ->assertJsonPath('data.name', 'Grace Wanjiku');
    }

    /**
     * ANOTHER ORGANISATION'S RECORD IS NOT FOUND, never forbidden. A 403
     * confirms the id exists, which over a numeric range is an enumeration
     * oracle - and the panel's own screens have answered this way from the
     * start.
     */
    public function test_another_organisations_record_is_not_found(): void
    {
        $theirs = $this->client($this->rival, 'Somebody Else', 'R-1');

        $this->api('GET', "/api/v1/clients/{$theirs->id}")->assertNotFound();
    }

    /**
     * A RESOURCE THAT IS NOT AN API SURFACE IS NOT REACHABLE BY GUESSING. The
     * same flag that keeps the activity trail out of the reference keeps it out
     * of here.
     */
    public function test_an_undocumented_resource_has_no_api(): void
    {
        $this->api('GET', '/api/v1/activities')->assertNotFound();
    }

    /* -------------------------------------------------------------- writes */

    public function test_a_record_can_be_created(): void
    {
        $response = $this->api('POST', '/api/v1/clients', [
            'name' => 'New Subscriber',
            'phone' => '+254700111222',
            'access_code' => 'NEW-1',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now()->addYear()->toDateString(),
        ]);

        $response->assertStatus(201)->assertJsonPath('data.name', 'New Subscriber');

        /*
         * THE TENANT CAME FROM THE TOKEN, not from the body. A request that
         * could name an organisation would be a request that could write into
         * somebody else's.
         */
        $this->assertSame(
            $this->acme->id,
            Client::query()->where('access_code', 'NEW-1')->value('tenant_id'),
        );
    }

    /** And a body naming another organisation does not move it there. */
    public function test_a_body_cannot_choose_the_organisation(): void
    {
        $this->api('POST', '/api/v1/clients', [
            'name' => 'Smuggled',
            'phone' => '+254700111333',
            'access_code' => 'SMUG-1',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now()->addYear()->toDateString(),
            'tenant_id' => $this->rival->id,
        ])->assertStatus(201);

        $this->assertSame(
            $this->acme->id,
            Client::query()->where('access_code', 'SMUG-1')->value('tenant_id'),
        );
    }

    public function test_an_update_changes_only_what_was_sent(): void
    {
        $client = $this->client($this->acme, 'Grace Wanjiku', 'G-1');

        $this->api('PATCH', "/api/v1/clients/{$client->id}", ['name' => 'Grace W.'])
            ->assertOk()
            ->assertJsonPath('data.name', 'Grace W.');

        $client->refresh();

        $this->assertSame('Grace W.', $client->name);
        // Untouched, rather than nulled by a validation pass that demanded it.
        $this->assertSame('G-1', $client->access_code);
    }

    public function test_a_record_can_be_deleted(): void
    {
        $client = $this->client($this->acme, 'Grace Wanjiku', 'G-1');

        $this->api('DELETE', "/api/v1/clients/{$client->id}")->assertStatus(204);

        $this->assertNull(Client::query()->find($client->id));
    }

    /** And another organisation's cannot. */
    public function test_another_organisations_record_cannot_be_deleted(): void
    {
        $theirs = $this->client($this->rival, 'Somebody Else', 'R-1');

        $this->api('DELETE', "/api/v1/clients/{$theirs->id}")->assertNotFound();

        $this->assertNotNull(Client::withoutGlobalScopes()->find($theirs->id));
    }

    /** Validation is the form's, so the API cannot accept what a screen refuses. */
    public function test_a_create_is_validated_by_the_resource_form(): void
    {
        $this->api('POST', '/api/v1/clients', ['name' => ''])
            ->assertStatus(422)
            ->assertJsonStructure(['message', 'errors']);
    }

    /* --------------------------------------------------------- the abilities */

    /**
     * A TOKEN CAN ONLY EVER NARROW. One granted read cannot write, even though
     * its owner can - which is the entire reason for scoping a key.
     */
    public function test_a_read_only_token_cannot_write(): void
    {
        $readOnly = ApiToken::issue(
            $this->acme->id,
            $this->owner->getKey(),
            'Reporting',
            ['view_any_clients', 'view_clients'],
        )['plaintext'];

        $this->api('GET', '/api/v1/clients', token: $readOnly)->assertOk();

        $this->api('POST', '/api/v1/clients', [
            'name' => 'Nope',
            'phone' => '+254700111444',
            'access_code' => 'NOPE-1',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now()->addYear()->toDateString(),
        ], token: $readOnly)->assertForbidden();
    }

    /**
     * AND A TOKEN CANNOT EXCEED ITS OWNER.
     *
     * A key outliving the permission that justified it is the failure this
     * prevents: somebody loses an ability, and an integration they created a
     * year ago keeps exercising it. `*` means "everything this account may do",
     * evaluated now - not "everything".
     */
    public function test_a_token_cannot_outlive_its_owners_permission(): void
    {
        $narrow = User::factory()
            ->withAbilities(['view_any_clients'])
            ->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);

        $token = ApiToken::issue($this->acme->id, $narrow->getKey(), 'Wide open', ['*'])['plaintext'];

        $this->api('GET', '/api/v1/clients', token: $token)->assertOk();

        // A record that really exists, so the refusal is the ABILITY rather
        // than the record simply not being there - a 404 would pass this test
        // while proving nothing.
        $client = $this->client($this->acme, 'Grace Wanjiku', 'G-9');

        $this->api('DELETE', "/api/v1/clients/{$client->id}", token: $token)->assertForbidden();
    }

    /* ------------------------------------------------------------ the token */

    /** The plaintext is never stored, so a lost token is reissued, not recovered. */
    public function test_the_plaintext_is_not_stored(): void
    {
        $row = ApiToken::query()->first();

        $this->assertNotNull($row);
        $this->assertStringNotContainsString($this->token, json_encode($row->getAttributes()));
        $this->assertSame(64, strlen((string) $row->getAttributes()['token_hash']));
    }

    /** Usage is recorded, so a token nobody uses can be found and removed. */
    public function test_using_a_token_records_that_it_was_used(): void
    {
        $this->assertNull(ApiToken::query()->first()->last_used_at);

        $this->api('GET', '/api/v1/clients')->assertOk();

        $this->assertNotNull(ApiToken::query()->first()->last_used_at);
    }
}
