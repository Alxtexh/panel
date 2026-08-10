<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\Support\TenantContext;
use Tests\TestCase;

/**
 * Moving a tenant to their own database must not make them slower.
 *
 * IT DID, BY 20 TO 60 TIMES, and this suite exists because nothing caught it.
 * The panel's own tests all passed, the isolation matrix passed, the row counts
 * were right, and every page returned correct data - it was simply that the
 * customer who had just been upgraded for performance reasons got a full table
 * scan on every screen.
 *
 * The cause is structural rather than a slip. A column-scoped schema indexes
 * `(tenant_id, created_at, id)` because every query in that mode begins
 * `where tenant_id = ?`. In a dedicated database the panel correctly OMITS that
 * predicate, and an index cannot be used for an ORDER BY when its leading column
 * is unconstrained - so all six indexes on `clients` become unusable at once.
 *
 * ASSERT THE PLAN, NOT THE INDEX. A test that checks `create index` ran would
 * pass against an index the planner never chooses, which is the failure being
 * guarded against: the original schema had six perfectly valid indexes on this
 * table and used none of them. `EXPLAIN QUERY PLAN` is the only thing that
 * distinguishes an index that exists from an index that works.
 */
final class DedicatedDatabaseIndexTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        config(['panel.tenancy.mode' => TenantContext::MODE_HYBRID]);
    }

    /** The query a list page actually makes, with no tenant predicate. */
    private const LIST_QUERY = 'select * from clients where deleted_at is null order by created_at desc, id desc limit 11';

    private function plan(string $sql): string
    {
        return implode(' ', array_map(
            static fn (object $r): string => $r->detail,
            DB::select('explain query plan '.$sql),
        ));
    }

    /**
     * THE REGRESSION ITSELF. Without the reindex, the list query on a dedicated
     * database scans the table and sorts it in a temporary B-tree.
     *
     * Asserted as the BEFORE state so the test documents the fault it prevents.
     * If someone changes the schema so this no longer scans, this assertion
     * fails and points at the reason the command exists - which is the right
     * outcome, because the command would then be obsolete rather than broken.
     */
    public function test_tenant_led_indexes_cannot_serve_an_unscoped_list(): void
    {
        $plan = $this->plan(self::LIST_QUERY);

        $this->assertStringContainsString(
            'SCAN clients',
            $plan,
            'Every index on clients leads with tenant_id, so none can serve a query that omits it.',
        );
        $this->assertStringContainsString('TEMP B-TREE', $plan);
    }

    /** And after the command, the same query uses an index. */
    public function test_reindexing_makes_the_list_query_use_an_index(): void
    {
        $this->asDedicatedTenant(function (): void {
            $this->artisan('panel:reindex-tenant')->assertSuccessful();

            $plan = $this->plan(self::LIST_QUERY);

            $this->assertStringContainsString('USING INDEX', $plan);
            $this->assertStringNotContainsString(
                'TEMP B-TREE',
                $plan,
                'The index now supplies the ordering, so nothing needs sorting.',
            );
        });
    }

    /**
     * IT REFUSES ON A SHARED DATABASE. There the tenant-led indexes are the
     * correct ones, and these siblings would be dead weight the planner has to
     * consider on every query - a pure cost, applied to the tenants who are the
     * overwhelming majority.
     */
    public function test_it_refuses_to_run_against_a_column_scoped_connection(): void
    {
        $shared = Tenant::create(['name' => 'Shared', 'slug' => 'shared-idx']);

        tenancy()->initialize($shared);

        try {
            $this->artisan('panel:reindex-tenant')->assertFailed();
        } finally {
            tenancy()->end();
        }
    }

    /** Running it twice is not an error - provisioning is often re-run. */
    public function test_it_is_safe_to_run_twice(): void
    {
        $this->asDedicatedTenant(function (): void {
            $this->artisan('panel:reindex-tenant')->assertSuccessful();
            $this->artisan('panel:reindex-tenant')->assertSuccessful();
        });
    }

    /**
     * Put the context into database mode without provisioning a real database.
     *
     * The command's subject is the CONNECTION IT IS ON, not a particular file:
     * it reads `sqlite_master` for whatever is current. So overriding the mode is
     * enough to exercise it against the test database, and it avoids creating and
     * migrating a second SQLite file for every test in this class - which would
     * dominate the runtime and test stancl rather than this command.
     */
    private function asDedicatedTenant(callable $body): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_DATABASE]);
        app()->forgetInstance(TenantContext::class);

        try {
            $body();
        } finally {
            config(['panel.tenancy.mode' => TenantContext::MODE_HYBRID]);
            app()->forgetInstance(TenantContext::class);
        }
    }
}
