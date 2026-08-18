<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Models\Role;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * The first account must be an Administrator with grants_all, or day one is
 * an empty sidebar.
 */
final class MakeUserCommandTest extends TestCase
{
    use RefreshDatabase;

    public function test_the_user_path_creates_an_administrator_with_grants_all(): void
    {
        $this->artisan('panel:make-user', [
            '--name' => 'Ada',
            '--email' => 'ada@example.test',
            '--password' => 'correct-horse-battery',
        ])->assertSuccessful();

        $user = User::query()->where('email', 'ada@example.test')->first();

        $this->assertNotNull($user);
        $this->assertTrue($user->hasRole('Administrator'));

        $role = Role::query()->where('name', 'Administrator')->first();

        $this->assertNotNull($role);
        $this->assertTrue((bool) $role->grants_all);
    }

    public function test_non_interactive_without_a_password_is_refused(): void
    {
        $this->artisan('panel:make-user', [
            '--name' => 'Ada',
            '--email' => 'ada-two@example.test',
            '--no-interaction' => true,
        ])->assertFailed();

        $this->assertNull(User::query()->where('email', 'ada-two@example.test')->first());
    }
}
