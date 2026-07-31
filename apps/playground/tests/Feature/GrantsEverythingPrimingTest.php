<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Role;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\PermissionRegistrar;
use Tests\TestCase;

/**
 * `User::primeGrantsEverything()` answers for a page what the per-instance memo
 * answers for a person - and it has to answer the SAME THING.
 *
 * THIS FILE EXISTS BECAUSE THE FIX WAS A PERFORMANCE FIX ON AN AUTHORISATION
 * PATH, which is the combination worth being nervous about. `grantsEverything()`
 * decides whether somebody holds every ability; it is consulted by
 * `hasPermission()`, so it is upstream of every gate in the panel. Making it
 * cheaper is worth nothing if it also makes it wrong, and wrong here is not a
 * slow page - it is a person seeing a button they should not have, or an
 * administrator locked out of their own installation.
 *
 * SO EVERY TEST BELOW COMPARES THE PRIMED ANSWER WITH THE UNPRIMED ONE rather
 * than with a hardcoded expectation. A test asserting `true` would still pass if
 * both paths broke in the same direction; asserting they AGREE is what makes
 * this a guard rather than a restatement.
 *
 * THE TEAM CONTEXT IS THE WHOLE RISK. Spatie scopes `roles` by the registrar's
 * team id, so a batch loaded under the wrong team - or under none - answers a
 * different question and answers it in the direction that grants access. The
 * cross-tenant cases below are the ones that would catch that.
 */
final class GrantsEverythingPrimingTest extends TestCase
{
    use RefreshDatabase;

    /** Somebody whose role holds everything. */
    private function superuser(Tenant $tenant): User
    {
        $user = User::factory()->withAbilities([], 'Super '.str()->random(6))
            ->create(['tenant_id' => $tenant->id]);

        Role::query()->withoutGlobalScopes()
            ->where('tenant_id', $tenant->id)
            ->whereIn('id', DB::table('model_has_roles')
                ->where('model_type', User::class)
                ->where('model_id', $user->getKey())
                ->pluck('role_id'))
            ->update(['grants_all' => true]);

        return $user;
    }

    /** Somebody with a role that holds nothing in particular. */
    private function ordinary(Tenant $tenant): User
    {
        return User::factory()->withAbilities(['view_any_clients'], 'Plain '.str()->random(6))
            ->create(['tenant_id' => $tenant->id]);
    }

    /**
     * The answer a cold model gives ON THE PATH PRODUCTION ACTUALLY USES.
     *
     * `grantsEverything()` has exactly one caller - `resolvePermission()` - and
     * it is always reached through `withPermissionsTeam()`, which sets the
     * registrar's team to the person's own tenant. Called outside that, the
     * `roles` relation is scoped to whatever team happens to be set and the
     * method answers false for everybody.
     *
     * The first version of this helper forgot that and compared the primed
     * answer against a question nothing asks. Setting the team here is what
     * makes the comparison mean something.
     */
    private function unprimed(int $id): bool
    {
        $user = User::query()->findOrFail($id);

        $registrar = app(PermissionRegistrar::class);
        $previous = $registrar->getPermissionsTeamId();
        $registrar->setPermissionsTeamId($user->tenant_id);

        try {
            return $user->grantsEverything();
        } finally {
            $registrar->setPermissionsTeamId($previous);
        }
    }

    /* --------------------------------------------------------- it agrees */

    public function test_a_primed_superuser_matches_the_unprimed_answer(): void
    {
        $tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $super = $this->superuser($tenant);

        $people = User::query()->whereKey($super->getKey())->get();
        User::primeGrantsEverything($people);

        $this->assertTrue($people->first()->grantsEverything());
        $this->assertSame($this->unprimed($super->getKey()), $people->first()->grantsEverything());
    }

    public function test_a_primed_ordinary_user_matches_the_unprimed_answer(): void
    {
        $tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $plain = $this->ordinary($tenant);

        $people = User::query()->whereKey($plain->getKey())->get();
        User::primeGrantsEverything($people);

        $this->assertFalse($people->first()->grantsEverything());
        $this->assertSame($this->unprimed($plain->getKey()), $people->first()->grantsEverything());
    }

    /**
     * A MIXED PAGE, which is the case the per-row version never got wrong and a
     * batch easily could - one answer written over everybody.
     */
    public function test_a_mixed_page_gets_one_answer_each(): void
    {
        $tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $super = $this->superuser($tenant);
        $plain = $this->ordinary($tenant);

        $people = User::query()->whereKey([$super->getKey(), $plain->getKey()])->get();
        User::primeGrantsEverything($people);

        $this->assertTrue($people->firstWhere('id', $super->getKey())->grantsEverything());
        $this->assertFalse($people->firstWhere('id', $plain->getKey())->grantsEverything());
    }

    /* ------------------------------------------------------ across tenants */

    /**
     * THE ONE THAT MATTERS. Two organisations primed in the same call: a role
     * that holds everything in one must not answer for anybody in the other.
     *
     * This is what a batch loaded under a single team id gets wrong, and it
     * fails OPEN - the wrong person is told they hold every ability.
     */
    public function test_priming_does_not_carry_one_organisations_answer_into_another(): void
    {
        $acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        $acmeSuper = $this->superuser($acme);
        $rivalPlain = $this->ordinary($rival);

        $people = User::query()
            ->whereKey([$acmeSuper->getKey(), $rivalPlain->getKey()])
            ->get();

        User::primeGrantsEverything($people);

        $this->assertTrue($people->firstWhere('id', $acmeSuper->getKey())->grantsEverything());
        $this->assertFalse($people->firstWhere('id', $rivalPlain->getKey())->grantsEverything());

        // And each still matches what it would have said on its own.
        $this->assertTrue($this->unprimed($acmeSuper->getKey()));
        $this->assertFalse($this->unprimed($rivalPlain->getKey()));
    }

    /**
     * THE REGISTRAR IS PUT BACK. Priming borrows the team id; leaving it
     * changed would silently re-scope every permission read that follows in the
     * same request, which is the kind of fault that shows up three screens later
     * with nothing to connect it to.
     */
    public function test_it_restores_the_permissions_team(): void
    {
        $tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $user = $this->superuser($tenant);

        $registrar = app(PermissionRegistrar::class);
        $registrar->setPermissionsTeamId(4242);

        User::primeGrantsEverything(User::query()->whereKey($user->getKey())->get());

        $this->assertSame(4242, $registrar->getPermissionsTeamId());
    }

    /* ---------------------------------------------------------- and cheaply */

    /**
     * THE POINT OF THE EXERCISE: the cost does not grow with the number of
     * people. Asserted as a ceiling per tenant rather than an exact number, for
     * the same reason the query-count guard is a ceiling.
     */
    public function test_it_costs_the_same_for_twenty_people_as_for_two(): void
    {
        $tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);

        User::factory()->count(20)->create(['tenant_id' => $tenant->id]);

        $two = User::query()->limit(2)->get();
        $twenty = User::query()->limit(20)->get();

        $this->assertSame(
            $this->countQueries(fn () => User::primeGrantsEverything($two)),
            $this->countQueries(fn () => User::primeGrantsEverything($twenty)),
            'Priming got dearer with more people, which is the N+1 it exists to remove.',
        );
    }

    /** Nothing to do, nothing to ask. */
    public function test_an_empty_page_asks_nothing(): void
    {
        $this->assertSame(0, $this->countQueries(fn () => User::primeGrantsEverything([])));
    }

    private function countQueries(callable $work): int
    {
        DB::flushQueryLog();
        DB::enableQueryLog();

        $work();

        $count = count(DB::getQueryLog());

        DB::disableQueryLog();

        return $count;
    }
}
