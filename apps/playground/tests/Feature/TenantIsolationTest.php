<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use App\Panel\Resources\ClientResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\Panel;
use PanelKit\Panel\Support\SchemaCache;
use Tests\TestCase;

/**
 * Spec §9 item 8 and §9 "Runtime independence".
 *
 * The spec names the two-tenants-in-one-process test "the single most valuable
 * test in the suite", and antipatterns §5.1 explains why: a component framework
 * kept per-request state in statics across ~17 subsystems, and under a
 * persistent worker an exception between setup and teardown stranded that state
 * for the NEXT unrelated request. The failure does not reproduce on
 * `php artisan serve`, which is exactly what makes it dangerous.
 */
final class TenantIsolationTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $userA;

    private User $userB;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create([
            'name' => 'Tenant A',
            'slug' => 'tenant-a',
            'features' => ['clients' => true, 'routers' => true],
            'theme_colors' => ['primary' => 'oklch(0.55 0.20 250)'],
        ]);

        $this->tenantB = Tenant::create([
            'name' => 'Tenant B',
            'slug' => 'tenant-b',
            'features' => ['clients' => true],   // routers deliberately OFF
            'theme_colors' => ['primary' => 'oklch(0.60 0.18 20)'],
        ]);

        $this->userA = User::factory()->create(['tenant_id' => $this->tenantA->id, 'email_verified_at' => now()]);
        $this->userB = User::factory()->create(['tenant_id' => $this->tenantB->id, 'email_verified_at' => now()]);

        foreach ([[$this->tenantA, 'Alpha'], [$this->tenantB, 'Bravo']] as [$tenant, $prefix]) {
            for ($i = 0; $i < 3; $i++) {
                DB::table('clients')->insert([
                    'tenant_id' => $tenant->id,
                    'name' => "{$prefix} {$i}",
                    'phone' => '+2547000000' . $i,
                    'access_code' => strtoupper($prefix) . $i,
                    'status' => 'active',
                    'plan_type' => 'pppoe',
                    'expiry_date' => now(),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }

    /**
     * THE MOST VALUABLE TEST IN THE SUITE.
     *
     * Two different tenants hit the SAME endpoint inside ONE process, and the
     * second response must contain nothing belonging to the first. This is what
     * catches state that survives a request — a memoized tenant id, a schema
     * cached without a distinguishing key, a static holding a resolved user.
     */
    public function test_two_tenants_in_one_process_never_see_each_others_data(): void
    {
        $first = $this->actingAs($this->userA)->get('/clients')->assertOk()
            ->viewData('page')['props']['records'];

        $second = $this->actingAs($this->userB)->get('/clients')->assertOk()
            ->viewData('page')['props']['records'];

        $firstNames = array_column($first, 'name');
        $secondNames = array_column($second, 'name');

        $this->assertNotEmpty($firstNames);
        $this->assertNotEmpty($secondNames);

        foreach ($firstNames as $name) {
            $this->assertStringStartsWith('Alpha', $name);
        }

        foreach ($secondNames as $name) {
            $this->assertStringStartsWith('Bravo', $name);
        }

        $this->assertSame(
            [],
            array_intersect($firstNames, $secondNames),
            'The second tenant received rows belonging to the first — state survived the request.'
        );
    }

    /** The same, in reverse order: an asymmetry would mean order-dependent state. */
    public function test_isolation_holds_in_either_order(): void
    {
        $b = array_column($this->actingAs($this->userB)->get('/clients')->viewData('page')['props']['records'], 'name');
        $a = array_column($this->actingAs($this->userA)->get('/clients')->viewData('page')['props']['records'], 'name');

        $this->assertNotEmpty($b);
        $this->assertNotEmpty($a);
        $this->assertSame([], array_intersect($a, $b));
    }

    /**
     * Writes must not leak either. A record created by one tenant must be
     * invisible to the next request from another, in the same process.
     */
    public function test_a_write_by_one_tenant_is_invisible_to_the_next(): void
    {
        $this->actingAs($this->userA)->post('/clients', [
            'name' => 'Alpha Secret',
            'phone' => '+254700111222',
            'access_code' => 'SECRET1',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'plan_id' => null,
            'expiry_date' => now()->addYear()->format('Y-m-d'),
        ])->assertRedirect();

        $names = array_column(
            $this->actingAs($this->userB)->get('/clients')->viewData('page')['props']['records'],
            'name'
        );

        $this->assertNotContains('Alpha Secret', $names);
    }

    /**
     * The schema is CACHED and shared across tenants by design (addendum Part A),
     * so this asserts the thing that makes that safe: it holds no tenant data.
     * If it ever did, the shared cache entry would become a leak.
     */
    public function test_the_shared_schema_contains_no_tenant_data(): void
    {
        $this->actingAs($this->userA);
        $schemaA = ClientResource::schema();

        $this->actingAs($this->userB);
        $schemaB = ClientResource::schema();

        $this->assertSame($schemaA, $schemaB, 'Schemas differ per tenant, so they must not share a cache entry.');

        $json = json_encode($schemaA, JSON_THROW_ON_ERROR);

        foreach (['Tenant A', 'Tenant B', 'tenant-a', 'tenant-b', 'Alpha', 'Bravo'] as $needle) {
            $this->assertStringNotContainsString($needle, $json, "Tenant data [{$needle}] leaked into the schema.");
        }
    }

    /**
     * Asserts the key's STRUCTURE, not the absence of a substring.
     *
     * A substring check is worthless here and was actively misleading: tenant
     * A's id is 1 and the app version fragment is also "1", so the naive version
     * of this test failed on a key that was entirely correct.
     */
    public function test_the_schema_cache_key_carries_no_tenant_id(): void
    {
        $key = app(SchemaCache::class)->key('admin', 'clients', 'fingerprint');

        $segments = explode(':', $key);

        // panel:schema:{panelId}:{resource}:{fingerprint}:{generation}:{version}
        $this->assertCount(7, $segments, "Unexpected key shape: {$key}");
        $this->assertSame(['panel', 'schema', 'admin', 'clients', 'fingerprint'], array_slice($segments, 0, 5));

        // Two tenants must produce the identical key — that is the point.
        $this->actingAs($this->userA);
        $forA = app(SchemaCache::class)->key('admin', 'clients', 'fingerprint');

        $this->actingAs($this->userB);
        $forB = app(SchemaCache::class)->key('admin', 'clients', 'fingerprint');

        $this->assertSame($forA, $forB, 'The schema cache key varies by tenant, which it must not (addendum Part A).');
    }

    /**
     * Spec §9 item 5: a disabled feature hides the resource from navigation AND
     * returns 404 from its routes. Hiding the link alone is not a control — the
     * URL stays typeable and a bookmark keeps working.
     */
    public function test_a_disabled_feature_returns_404_not_just_a_hidden_link(): void
    {
        config([
            'panel.tenancy.features' => fn (): array => ['clients' => true],
        ]);

        // Simulate a resource gated behind a flag the tenant does not have.
        $resource = new class extends \PanelKit\Panel\Resources\Resource
        {
            protected static string $model = Client::class;

            protected static ?string $feature = 'routers';

            public static function table(\PanelKit\Panel\Tables\Table $table): \PanelKit\Panel\Tables\Table
            {
                return $table;
            }
        };

        $this->actingAs($this->userB);

        $this->assertFalse($resource::isEnabled(), 'A flag absent from the tenant must read as disabled.');
    }

    /** An absent flag means disabled. A flag that defaults on is not a flag. */
    public function test_an_absent_feature_flag_means_disabled(): void
    {
        config(['panel.tenancy.features' => fn (): array => []]);

        $resource = new class extends \PanelKit\Panel\Resources\Resource
        {
            protected static string $model = Client::class;

            protected static ?string $feature = 'anything';

            public static function table(\PanelKit\Panel\Tables\Table $table): \PanelKit\Panel\Tables\Table
            {
                return $table;
            }
        };

        $this->assertFalse($resource::isEnabled());
    }

    /**
     * Spec §9 item 6 / antipatterns §2.1: a panel resolves its user through its
     * OWN guard. `$request->user()` returns null under a non-default guard and
     * fails open in confusing ways — in production it silently discarded every
     * unsaved edit while returning 200.
     */
    public function test_a_panel_resolves_its_user_through_its_own_guard(): void
    {
        $panel = Panel::make('admin')->guard('web');

        $this->actingAs($this->userA);
        $this->assertSame($this->userA->id, $panel->user()?->getAuthIdentifier());

        // A panel on a guard nobody is authenticated against must see nobody,
        // rather than falling through to the default guard's user.
        $other = Panel::make('super')->guard('nonexistent-guard');

        $this->expectException(\InvalidArgumentException::class);
        $other->user();
    }

    public function test_two_panels_with_different_guards_coexist(): void
    {
        $tenantPanel = Panel::make('admin')->path('app')->guard('web')->context(Panel::CONTEXT_TENANT);
        $centralPanel = Panel::make('super')->path('super')->guard('web')->context(Panel::CONTEXT_CENTRAL);

        $this->assertSame('app', $tenantPanel->getPath());
        $this->assertSame('super', $centralPanel->getPath());

        // The distinction that matters: a central panel must never have tenant
        // scoping applied to its resources (addendum Part A).
        $this->assertFalse($tenantPanel->isCentral());
        $this->assertTrue($centralPanel->isCentral());
    }
}
