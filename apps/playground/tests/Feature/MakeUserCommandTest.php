<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * `panel:make-user --tenant=` used to build its silently, because it wrote
 * through `create()` and `App\Models\User` declares
 * `#[Fillable(['name', 'email', 'password'])]` - `tenant_id` is not in that
 * list, so mass assignment dropped it without a warning or an exception. The
 * account was created, signed in fine, and a tenant-scoped panel showed it
 * nothing: exactly the failure the command's own comment already warns about
 * for the case where `--tenant` is omitted, except this happened when the
 * operator DID pass it.
 *
 * The command now writes with `forceFill()->save()`, matching the pattern
 * `WorkspacesController::store()` already uses for the same reason: package
 * code writing a host application's tenant column cannot rely on that
 * application's fillable list agreeing with it.
 */
final class MakeUserCommandTest extends TestCase
{
    use RefreshDatabase;

    public function test_the_tenant_option_actually_lands_on_the_row(): void
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme-'.uniqid()]);

        $this->artisan('panel:make-user', [
            '--name' => 'Demo Admin',
            '--email' => 'demo-admin@example.test',
            '--tenant' => (string) $tenant->id,
        ])
            ->expectsQuestion('Password', 'correct-horse-battery')
            ->expectsQuestion('Confirm password', 'correct-horse-battery')
            ->assertExitCode(0);

        $user = User::query()->where('email', 'demo-admin@example.test')->firstOrFail();

        $this->assertSame($tenant->id, $user->tenant_id);
    }
}
