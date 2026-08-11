<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\Transaction;
use RuntimeException;
use Tests\TestCase;

/**
 * A write that fails partway through leaves nothing behind.
 *
 * THE FAILURE THIS PREVENTS IS HALF A RECORD. A create is rarely one INSERT -
 * custom fields fold into a JSON column, an observer writes the audit entry,
 * a counter is bumped - so something throwing in the middle leaves the row
 * saved and its trail missing. The operator sees an error page, retries, and
 * produces the duplicate the first attempt half-made.
 */
final class DatabaseTransactionsTest extends TestCase
{
    use RefreshDatabase;

    private User $operator;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->operator = User::factory()
            ->create(['tenant_id' => $tenant->id, 'email_verified_at' => now()]);
    }

    /** The demo's operator portal declares it, so the wiring is real. */
    public function test_the_admin_panel_declares_transactions(): void
    {
        $this->assertTrue(
            app(PanelManager::class)->panel('admin')?->hasDatabaseTransactions(),
        );
    }

    /**
     * ROLLED BACK MEANS ROLLED BACK - the row written before the failure is
     * gone, not merely unreported.
     */
    public function test_a_failure_midway_leaves_no_row(): void
    {
        $this->actingAs($this->operator)->get('/dashboard'); // resolves the panel

        $before = Client::withoutGlobalScopes()->count();

        try {
            Transaction::run(function (): void {
                Client::withoutGlobalScopes()->forceCreate([
                    'tenant_id' => $this->operator->tenant_id,
                    'name' => 'Half a record',
                    'phone' => '+254700000999',
                    'access_code' => 'TXN001',
                    'status' => 'active',
                    'plan_type' => 'pppoe',
                    'expiry_date' => now(),
                ]);

                throw new RuntimeException('the observer blew up');
            });
        } catch (RuntimeException) {
            // The point of the test is what the database looks like now.
        }

        $this->assertSame($before, Client::withoutGlobalScopes()->count());
        $this->assertDatabaseMissing('clients', ['access_code' => 'TXN001']);
    }

    /**
     * IT NESTS BY DESIGN, as a SAVEPOINT.
     *
     * Refusing to open one inside an existing transaction sounds careful and
     * throws away the guarantee: a nested `DB::transaction` is a savepoint, so
     * an inner failure rolls back the inner work and leaves the outer alone -
     * which is what a bulk run wants when one row of five hundred throws. It
     * also made this a no-op under any caller holding a transaction already,
     * `RefreshDatabase` included, so the protection did not exist where it was
     * being tested.
     */
    public function test_it_opens_a_savepoint_inside_an_existing_transaction(): void
    {
        $this->actingAs($this->operator)->get('/dashboard');

        $outer = DB::transactionLevel();

        $inner = null;
        Transaction::run(function () use (&$inner): void {
            $inner = DB::transactionLevel();
        });

        $this->assertSame($outer + 1, $inner, 'A nested run must open a savepoint, not skip.');
        $this->assertSame($outer, DB::transactionLevel(), 'And must release it on the way out.');
    }

    /**
     * AND A PANEL THAT NEVER ASKED IS UNTOUCHED - the closure simply runs, so
     * nothing about failure behaviour changes for portals that did not opt in.
     */
    public function test_a_panel_without_the_declaration_opens_nothing(): void
    {
        // The platform portal declares no transactions.
        $this->actingAs($this->operator)->get('/platform');

        $before = DB::transactionLevel();

        $inside = null;
        Transaction::run(function () use (&$inside): void {
            $inside = DB::transactionLevel();
        });

        $this->assertSame($before, $inside);
    }
}
