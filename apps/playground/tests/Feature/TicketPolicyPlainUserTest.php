<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Auth\User as AuthUser;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Gate;
use Alxtexh\Panel\Models\Ticket;
use Spatie\Permission\PermissionRegistrar;
use Spatie\Permission\Traits\HasRoles;
use Tests\TestCase;

/**
 * THE PACKAGED POLICY AGAINST A USER MODEL THAT IS NOT THIS APPLICATION'S.
 *
 * Every other ticket test signs in as `App\Models\User`, which carries a
 * hand-rolled `hasPermission()` that knows about grants-all roles AND sets
 * Spatie's team from the user before asking. That method is the reference app's,
 * not the package's, and an installation that never wrote one gets the other
 * half of `TicketPolicy::may()` - plain `can()`.
 *
 * WHICH IS THE HALF NOTHING WAS EXERCISING. The fallback is one line and it was
 * wrong in a way the whole rest of the suite was blind to: `can()` reaches
 * Spatie through `Gate::before`, which filters roles by the team id held in the
 * registrar - a value a REQUEST sets and a console command, a queued job or a
 * test does not. So the same person with the same role is permitted inside a
 * request and denied everywhere else, and the deny is silent.
 *
 * THE STUB IS DELIBERATELY MINIMAL: Spatie's trait and nothing else. It reports
 * `App\Models\User` as its morph class so the pivot rows a role assignment
 * writes are the same rows a real installation would have - the point is a user
 * WITHOUT `hasPermission()`, not a user without roles.
 */
final class TicketPolicyPlainUserTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_user_model_without_has_permission_is_still_authorised(): void
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $real = User::factory()
            ->withAbilities(['view_any_tickets'])
            ->create(['tenant_id' => $tenant->id, 'email_verified_at' => now()]);

        $plain = PlainUser::query()->findOrFail($real->getKey());

        self::assertFalse(
            method_exists($plain, 'hasPermission'),
            'The stub exists to exercise the path taken when the application has NOT written one.',
        );

        config(['panel.tenancy.resolver' => fn () => $tenant->id]);

        /*
         * NOTHING HAS SET THE TEAM, which is the condition under test and the
         * ordinary state of a command, a job or a test. Cleared explicitly
         * rather than assumed, so an earlier test leaving one behind cannot
         * make this pass for the wrong reason.
         */
        app(PermissionRegistrar::class)->setPermissionsTeamId(null);
        app(PermissionRegistrar::class)->forgetCachedPermissions();

        self::assertTrue(
            Gate::forUser($plain)->allows('viewAny', Ticket::class),
            'A granted role went unseen because nobody told Spatie which organisation to filter by.',
        );
    }

    public function test_the_team_is_restored_afterwards(): void
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $real = User::factory()
            ->withAbilities(['view_any_tickets'])
            ->create(['tenant_id' => $tenant->id, 'email_verified_at' => now()]);

        config(['panel.tenancy.resolver' => fn () => $tenant->id]);

        // A DIFFERENT ORGANISATION'S ID, left in place by whatever ran before.
        // Under a long-lived worker the id this policy sets would otherwise
        // become the next request's default - for the wrong customer.
        app(PermissionRegistrar::class)->setPermissionsTeamId(999);

        Gate::forUser(PlainUser::query()->findOrFail($real->getKey()))
            ->allows('viewAny', Ticket::class);

        self::assertSame(
            999,
            app(PermissionRegistrar::class)->getPermissionsTeamId(),
            'The policy kept the team it set. The next question in this process answers for another tenant.',
        );
    }
}

/**
 * A consumer's user model: authenticatable, authorizable, Spatie roles, and no
 * panel-specific method of any kind.
 */
final class PlainUser extends AuthUser
{
    use HasRoles;

    protected $table = 'users';

    public $timestamps = false;

    protected $guarded = [];

    /** So role assignments written against the real model are found here. */
    public function getMorphClass(): string
    {
        return User::class;
    }
}
