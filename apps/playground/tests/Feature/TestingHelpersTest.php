<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Support\Abilities;
use PanelKit\Panel\Testing\InteractsWithPanels;
use Tests\TestCase;

/**
 * The exported test helpers, used the way somebody else would use them.
 *
 * WHY THIS FILE EXISTS. `InteractsWithPanels` is shipped for people building on
 * the package, and a helper nobody exercises is a helper that breaks the first
 * time the props are renamed - in THEIR suite, on an upgrade, with no way for
 * them to tell whether they or the package are at fault. So the package's own
 * reference application uses them as a consumer would: through HTTP, with no
 * knowledge of internals.
 *
 * IT ALSO KEEPS THEM HONEST ABOUT WHAT THEY PROVE. Each assertion below is
 * followed by its negative - a helper that always passes is worse than none,
 * because it converts an untested resource into one somebody believes is tested.
 */
final class TestingHelpersTest extends TestCase
{
    use InteractsWithPanels;
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $rival;

    private User $operator;

    protected function setUp(): void
    {
        parent::setUp();

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        $this->operator = User::factory()
            ->withAbilities([
                Abilities::name('viewAny', 'clients'),
                Abilities::name('view', 'clients'),
                Abilities::name('create', 'clients'),
            ])
            ->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);
    }

    private function client(Tenant $tenant, string $name): Client
    {
        $plan = Plan::withoutGlobalScopes()->firstOrCreate(
            ['tenant_id' => $tenant->id, 'name' => 'Plan '.$tenant->id],
            ['speed_mbps' => 10, 'price_cents' => 1000],
        );

        $router = Router::withoutGlobalScopes()->firstOrCreate(
            ['tenant_id' => $tenant->id, 'name' => 'Router '.$tenant->id],
            ['ip_address' => '10.0.0.1', 'model' => 'RB750', 'status' => 'online'],
        );

        $client = new Client([
            'name' => $name,
            'phone' => '+2547'.random_int(10_000_000, 99_999_999),
            'access_code' => strtoupper(bin2hex(random_bytes(4))),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now()->addMonth(),
        ]);

        $client->forceFill([
            'tenant_id' => $tenant->id,
            'plan_id' => $plan->id,
            'router_id' => $router->id,
        ])->save();

        return $client;
    }

    /* ------------------------------------------------------------ discovery */

    public function test_it_finds_a_registered_resource(): void
    {
        $this->assertResourceRegistered('clients');
    }

    /**
     * AND SAYS SO USEFULLY when the resource is missing - the "why is my screen
     * not there" case this helper exists for. The message lists what IS
     * registered, because the answer is usually a typo in a key.
     */
    public function test_it_names_the_registered_resources_when_one_is_missing(): void
    {
        try {
            $this->assertResourceRegistered('nonexistent');

            $this->fail('A missing resource should have failed the assertion.');
        } catch (\PHPUnit\Framework\AssertionFailedError $e) {
            $this->assertStringContainsString('nonexistent', $e->getMessage());
            $this->assertStringContainsString('clients', $e->getMessage());
        }
    }

    /** The URL carries the portal's prefix, taken from the registry. */
    public function test_it_builds_urls_with_the_portal_prefix(): void
    {
        $this->assertSame('/clients', $this->panelUrl('clients'));
        $this->assertSame('/reseller/reseller-plans', $this->panelUrl('reseller-plans'));
        $this->assertSame('/clients/12/edit', $this->panelUrl('clients', '12/edit'));
    }

    /* ----------------------------------------------------------------- rows */

    public function test_it_sees_the_records_a_user_can_see(): void
    {
        $mine = $this->client($this->acme, 'Amina Otieno');

        $this->assertResourceListsFor($this->operator, 'clients');
        $this->assertResourceShows($this->operator, 'clients', $mine);
    }

    /**
     * THE ISOLATION HELPER IS THE ONE THAT EARNS ITS PLACE, and it checks the
     * record URL as well as the list - the half people forget, and the half an
     * attacker uses.
     */
    public function test_it_catches_a_record_from_another_organisation(): void
    {
        $theirs = $this->client($this->rival, 'Rival Customer');

        $this->assertTenantIsolation($this->operator, 'clients', $theirs);
    }

    /** And it FAILS when isolation is genuinely absent. */
    public function test_the_isolation_helper_fails_when_a_record_is_visible(): void
    {
        $mine = $this->client($this->acme, 'My Own Customer');

        try {
            // Deliberately wrong: this record IS this user's, so an isolation
            // assertion about it must fail. A helper that passed here would
            // certify every resource as isolated.
            $this->assertTenantIsolation($this->operator, 'clients', $mine);

            $this->fail('The isolation helper passed for a visible record.');
        } catch (\PHPUnit\Framework\AssertionFailedError) {
            $this->addToAssertionCount(1);
        }
    }

    /* ---------------------------------------------------------- permissions */

    public function test_it_catches_a_missing_permission_check(): void
    {
        /*
         * `roleless()`, NOT a plain factory user. The factory attaches an
         * administrator role to anybody who has none - which is right for a
         * fixture and would make this assertion pass for the wrong reason,
         * since an administrator is permitted.
         */
        $stranger = User::factory()->roleless()->create([
            'tenant_id' => $this->acme->id,
            'email_verified_at' => now(),
        ]);

        $this->assertResourceRefuses($stranger, 'clients');
    }

    /** And does not accept a 200 as a refusal. */
    public function test_the_refusal_helper_fails_when_the_screen_is_served(): void
    {
        try {
            $this->assertResourceRefuses($this->operator, 'clients');

            $this->fail('The refusal helper passed for a permitted user.');
        } catch (\PHPUnit\Framework\AssertionFailedError) {
            $this->addToAssertionCount(1);
        }
    }

    /* -------------------------------------------------------------- schema */

    public function test_it_reads_the_columns_and_fields_a_client_receives(): void
    {
        $this->assertSchemaHasColumn($this->operator, 'clients', 'name');

        // Nested inside a tab and a section, which is why the search is
        // depth-first rather than an index into a list.
        $field = $this->assertSchemaHasField($this->operator, 'clients', 'plan_type');

        $this->assertSame('radio', $field['type']);
    }

    /* -------------------------------------------------------------- writes */

    public function test_it_asserts_a_validation_failure_names_the_field(): void
    {
        $this->assertPanelValidationFails(
            $this->operator,
            'clients',
            ['name' => '', 'phone' => '+254700000000'],
            'name',
        );
    }

    public function test_it_asserts_a_record_was_created(): void
    {
        $plan = Plan::withoutGlobalScopes()->firstOrCreate(
            ['tenant_id' => $this->acme->id, 'name' => 'Plan '.$this->acme->id],
            ['speed_mbps' => 10, 'price_cents' => 1000],
        );

        $this->assertPanelCreates(
            $this->operator,
            'clients',
            [
                'name' => 'Created Through The Helper',
                'phone' => '+254700111222',
                'access_code' => 'HELPER-1',
                'status' => 'active',
                'plan_type' => 'pppoe',
                'plan_id' => $plan->id,
                'expiry_date' => now()->addMonth()->toDateString(),
            ],
            ['name' => 'Created Through The Helper', 'tenant_id' => $this->acme->id],
        );
    }
}
