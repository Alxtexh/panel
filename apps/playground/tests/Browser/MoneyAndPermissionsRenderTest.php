<?php

declare(strict_types=1);

namespace Tests\Browser;

use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTruncation;
use Laravel\Dusk\Browser;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Tests\DuskTestCase;

/**
 * The two paths where a silent wrong answer costs money rather than annoys.
 *
 * WHY THIS FILE EXISTS, AND IT IS A DIRECT ANSWER TO A REAL FAILURE.
 * `MoneyColumn` had unit tests asserting its schema, and NO SCREEN IN THIS
 * APPLICATION EVER RENDERED ONE. So when the record page turned out not to
 * format money at all - the list showing a currency and the record page for the
 * same row showing `250000` - nothing failed. Two orders of magnitude out, on
 * the screen somebody opens to check what a customer owes, past 1,700 green
 * tests.
 *
 * A COLUMN TYPE WITH TESTS AND NO CONSUMER IS A TYPE NOBODY HAS LOOKED AT. So
 * the reference app now uses one, and this asserts the rendered text on BOTH
 * surfaces - because the bug was that they disagreed.
 *
 * THE SECOND HALF IS PERMISSIONS, for the same reason in the other direction.
 * A denial that renders as an empty table is indistinguishable from a resource
 * with no rows, and "the screen looked fine" is how an authorisation hole
 * survives review. This asserts an operator WITHOUT the grant does not see the
 * data an operator WITH it does.
 */
final class MoneyAndPermissionsRenderTest extends DuskTestCase
{
    use DatabaseTruncation;

    private int|string|null $grantedId = null;

    private int|string|null $ungrantedId = null;

    private int|string|null $planId = null;

    /**
     * Two operators in one tenant: one holding a role, one holding none.
     *
     * SAME TENANT ON PURPOSE. A second tenant would prove tenancy, which the
     * isolation matrix already covers; the question here is narrower and less
     * tested - whether the ABILITY check is what hides the data, rather than
     * the scope happening to.
     */
    private function seedOperators(): void
    {
        $tenant = Tenant::create(['name' => 'Lakeside Fibre', 'slug' => 'lakeside-money']);

        $granted = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        /*
         * `roleless()`, AND THE DEFAULT IS THE TRAP.
         *
         * `User::factory()` deliberately grants an Administrator role - it says
         * so at length, because `hasPermission()` denies a user with no role and
         * 129 tests that were about exports and uploads would otherwise have
         * been about roles. The factory documents the risk that creates and
         * names the test that covers it.
         *
         * So a test asserting a REFUSAL must opt out explicitly. Written
         * without this, this file reported an authorisation hole that did not
         * exist - the "ungranted" operator was an administrator.
         */
        $ungranted = User::factory()->roleless()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        /*
         * The team is set before the role is assigned - roles are team-scoped
         * by `tenant_id`, and Spatie reads that team from a registrar a REQUEST
         * populates. A test does not.
         */
        $registrar = app(PermissionRegistrar::class);
        $previous = $registrar->getPermissionsTeamId();
        $registrar->setPermissionsTeamId($tenant->id);

        try {
            $granted->assignRole(Role::findOrCreate('Administrator', 'web'));
        } finally {
            $registrar->setPermissionsTeamId($previous);
        }

        $this->grantedId = $granted->getKey();
        $this->ungrantedId = $ungranted->getKey();

        /*
         * 250,000 MINOR UNITS. Chosen so the formatted and unformatted forms
         * cannot be confused for one another: `2,500.00` and `250000` share no
         * substring long enough for an assertion to pass by accident.
         */
        $this->planId = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->id,
            'name' => 'Money Path Plan',
            'speed_mbps' => 20,
            'price_cents' => 250_000,
            'position' => 1,
            'is_active' => true,
        ])->getKey();
    }

    /**
     * THE LIST FORMATS MONEY.
     *
     * Half of the pair. On its own it passes the bug that shipped, which is
     * exactly why the record-page test below exists beside it.
     */
    public function test_the_list_renders_money_formatted_not_as_minor_units(): void
    {
        $this->seedOperators();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->grantedId)
                ->visit('/plans')
                ->waitForText('Money Path Plan', 15)
                ->assertSee('2,500.00')
                ->assertDontSee('250000');
        });
    }

    /**
     * AND SO DOES THE RECORD PAGE. This is the assertion that would have caught
     * it: the same row, the other screen, the same number.
     */
    public function test_the_record_page_renders_money_formatted_not_as_minor_units(): void
    {
        $this->seedOperators();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->grantedId)
                ->visit('/plans/'.$this->planId)
                ->waitForText('Money Path Plan', 15)
                ->assertSee('2,500.00')
                ->assertDontSee('250000');
        });
    }

    /**
     * AN OPERATOR WITH THE GRANT SEES THE DATA.
     *
     * The control for the test below. Without it, "the ungranted operator saw
     * nothing" is satisfied by a screen that is broken for everybody.
     */
    public function test_an_operator_holding_the_role_sees_the_plan(): void
    {
        $this->seedOperators();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->grantedId)
                ->visit('/plans')
                ->waitForText('Money Path Plan', 15)
                ->assertSee('Money Path Plan');
        });
    }

    /**
     * AND AN OPERATOR WITHOUT IT DOES NOT.
     *
     * The panel denies any ability whose model has no grant, so this account
     * holds nothing at all. What it must never see is the row - whether the
     * screen answers 403, redirects, or renders an empty state is the
     * panel's choice; showing the data is not.
     */
    public function test_an_operator_without_the_role_never_sees_the_plan(): void
    {
        $this->seedOperators();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->ungrantedId)
                ->visit('/plans')
                ->pause(2000)
                ->assertDontSee('Money Path Plan')
                ->assertDontSee('2,500.00');
        });
    }

    /**
     * AND NOT ON THE RECORD PAGE EITHER, reached directly by its URL.
     *
     * A list that filters by ability and a record page that does not is a
     * common shape: the row is hidden from the index and served to anybody who
     * knows the id. The URL is guessable - it is a sequential integer.
     */
    public function test_an_operator_without_the_role_cannot_open_the_record_by_url(): void
    {
        $this->seedOperators();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->ungrantedId)
                ->visit('/plans/'.$this->planId)
                ->pause(2000)
                ->assertDontSee('2,500.00');
        });
    }
}
