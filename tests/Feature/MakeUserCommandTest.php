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

    public function test_warns_locally_when_the_login_prefill_no_longer_matches(): void
    {
        $this->app['env'] = 'local';
        config(['panel.default' => 'admin', 'panel.auth.admin.prefill.email' => 'admin@example.com']);

        $this->artisan('panel:make-user', [
            '--name' => 'Ada',
            '--email' => 'ada-three@example.test',
            '--password' => 'correct-horse-battery',
        ])
            ->expectsOutputToContain('still pre-filled with [admin@example.com]')
            ->assertSuccessful();
    }

    public function test_says_nothing_when_the_prefill_already_matches(): void
    {
        $this->app['env'] = 'local';
        config(['panel.default' => 'admin', 'panel.auth.admin.prefill.email' => 'ada-four@example.test']);

        $this->artisan('panel:make-user', [
            '--name' => 'Ada',
            '--email' => 'ada-four@example.test',
            '--password' => 'correct-horse-battery',
        ])
            ->doesntExpectOutputToContain('pre-filled')
            ->assertSuccessful();
    }

    public function test_says_nothing_outside_local(): void
    {
        $this->app['env'] = 'testing';
        config(['panel.default' => 'admin', 'panel.auth.admin.prefill.email' => 'admin@example.com']);

        $this->artisan('panel:make-user', [
            '--name' => 'Ada',
            '--email' => 'ada-five@example.test',
            '--password' => 'correct-horse-battery',
        ])
            ->doesntExpectOutputToContain('pre-filled')
            ->assertSuccessful();
    }

    public function test_says_nothing_when_no_prefill_is_configured(): void
    {
        $this->app['env'] = 'local';
        config(['panel.default' => 'admin', 'panel.auth.admin.prefill' => null]);

        $this->artisan('panel:make-user', [
            '--name' => 'Ada',
            '--email' => 'ada-six@example.test',
            '--password' => 'correct-horse-battery',
        ])
            ->doesntExpectOutputToContain('pre-filled')
            ->assertSuccessful();
    }
}
