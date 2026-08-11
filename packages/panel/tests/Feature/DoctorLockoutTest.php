<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

/**
 * The lockout check, in both directions.
 *
 * `checkSomebodyCanOpenThePanel` exists to catch the install where every screen
 * answers 403 for everybody - INCLUDING the roles screen, which is the one that
 * would grant a way out. It is the sharpest check the doctor has, because the
 * failure it names is total and says nothing about itself.
 *
 * IT USED TO FIRE ON HEALTHY INSTALLS. Written as `whereHas('roles')`, it went
 * through Spatie's team scoping; a console run resolves no team, so the relation
 * was constrained to a null team and counted zero while the pivot plainly held
 * rows. The doctor announced "nobody can open the panel" seconds after somebody
 * had signed in - a false alarm from the one check that exists to catch silent
 * lockout, which is precisely how a diagnostic teaches people to ignore it.
 *
 * IT WAS FIXED AND NOT TESTED, which is why this file exists. `whereHas('roles')`
 * is the obvious way to write this check and the wrong one, so the fix is a
 * refactor away from being undone - by somebody tidying a raw `DB::table()` call
 * into "proper" Eloquent, with every test still green.
 *
 * TEAMS ARE ON HERE DELIBERATELY. With teams off, `whereHas('roles')` works
 * fine and this file would pass against the bug it exists to prevent. The
 * multi-tenant configuration is both the real one for this package and the only
 * one where the distinction is observable.
 */
final class DoctorLockoutTest extends TestCase
{
    use RefreshDatabase;

    private const LOCKOUT = 'none holds a role';

    protected function defineEnvironment($app): void
    {
        parent::defineEnvironment($app);

        tap($app->make(Repository::class), static function (Repository $config): void {
            /*
             * The configuration `panel:doctor` itself tells installations to
             * use - a tenant-scoped panel with Spatie teams on, keyed by
             * `tenant_id`. Without it the bug under test cannot occur.
             */
            $config->set('permission.teams', true);
            $config->set('permission.column_names.team_foreign_key', 'tenant_id');
        });
    }

    /**
     * A ROLE HELD INSIDE A TEAM, then the team forgotten - which is not a
     * contrived state, it is every console run. `SetPermissionsTeam` resolves a
     * tenant from the request, and a command has no request.
     */
    private function grantARoleInsideATeam(int $team = 1): void
    {
        $registrar = app(PermissionRegistrar::class);
        $registrar->setPermissionsTeamId($team);

        $user = User::query()->create([
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'x',
            'tenant_id' => $team,
        ]);

        $user->assignRole(Role::findOrCreate('Administrator', 'web'));

        // What a command sees: no request, so no team was ever resolved.
        $registrar->setPermissionsTeamId(null);
        $registrar->forgetCachedPermissions();
    }

    /**
     * THE REGRESSION TEST. Rewriting the check as `whereHas('roles')` makes
     * exactly this fail, and nothing else in either suite notices.
     */
    public function test_it_stays_quiet_when_a_role_is_held_in_a_team_the_cli_cannot_see(): void
    {
        $this->grantARoleInsideATeam();

        $this->artisan('panel:doctor')
            ->doesntExpectOutputToContain(self::LOCKOUT);
    }

    /**
     * AND IT STILL FIRES, which is the half that makes the fix a fix rather
     * than a deletion. A check silenced into never reporting anything is worse
     * than one that cries wolf: the wolf is why it was written.
     */
    public function test_it_reports_accounts_that_hold_no_role_at_all(): void
    {
        User::query()->create([
            'name' => 'Nobody',
            'email' => 'nobody@example.test',
            'password' => 'x',
            'tenant_id' => 1,
        ]);

        $this->artisan('panel:doctor')
            ->expectsOutputToContain(self::LOCKOUT);
    }

    /**
     * NO ACCOUNTS IS NOT A LOCKOUT. That is a fresh installation waiting for
     * `panel:make-user`, which grants as it creates - so reporting it would put
     * a false alarm on every first run, which is the same disease in a
     * different place.
     */
    public function test_it_stays_quiet_on_an_installation_with_no_accounts(): void
    {
        $this->assertSame(0, User::query()->count());

        $this->artisan('panel:doctor')
            ->doesntExpectOutputToContain(self::LOCKOUT);
    }

    /**
     * A PIVOT ROW WHOSE ACCOUNT IS GONE MUST NOT VOUCH FOR THE PANEL. Deleting
     * a user does not necessarily take the pivot row with it, and a check that
     * counted the pivot alone would read an orphaned row as "somebody can get
     * in" - reporting health on an installation nobody can open, which is the
     * false NEGATIVE of the bug this file is about.
     */
    public function test_an_orphaned_pivot_row_does_not_vouch_for_the_panel(): void
    {
        $this->grantARoleInsideATeam();

        // The account goes; whatever the pivot still holds is now meaningless.
        User::query()->delete();

        User::query()->create([
            'name' => 'Nobody',
            'email' => 'nobody@example.test',
            'password' => 'x',
            'tenant_id' => 1,
        ]);

        $this->artisan('panel:doctor')
            ->expectsOutputToContain(self::LOCKOUT);
    }
}
