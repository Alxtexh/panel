<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Alxtexh\Panel\Support\UserDirectory;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;

/**
 * `UserDirectory::roles()` hardcoded the literal string `'tenant_id'` for
 * both the role scope and the per-role headcount subquery, rather than
 * asking Spatie for the column it actually configured - the same question
 * `RoleController::teamColumn()` a few files over already asks correctly.
 *
 * `panel:install` never publishes `config/permission.php`, so a plain
 * install runs on Spatie's own default column, `team_id` - not `tenant_id`.
 * Calling this method 500'd the User Management page's Roles tab on every
 * install that never renamed it, which is every one of them: nothing in
 * this suite called `roles()` directly before, only through routes that
 * happen to use the correctly-resolving RoleController query instead.
 */
final class UserDirectoryRolesTest extends TestCase
{
    use RefreshDatabase;

    public function test_roles_resolves_the_actual_configured_team_column(): void
    {
        $this->artisan('panel:make-user', [
            '--name' => 'Ada',
            '--email' => 'ada@example.test',
            '--password' => 'correct-horse-battery',
        ])->assertSuccessful();

        $user = User::query()->where('email', 'ada@example.test')->firstOrFail();

        $request = Request::create('/user-management/roles');
        $request->setUserResolver(fn () => $user);

        $roles = UserDirectory::roles($request);

        $this->assertNotEmpty($roles, 'UserDirectory::roles() found no roles - the query likely threw and was swallowed.');

        $admin = collect($roles)->firstWhere('name', 'Administrator');

        $this->assertNotNull($admin);
        $this->assertSame(1, $admin['userCount']);
    }
}
