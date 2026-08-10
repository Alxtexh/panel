<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Support\Ability;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Spatie\Permission\Traits\HasRoles;
use Tests\TestCase;

/**
 * A user model shaped like a CONSUMER'S, not like this application's.
 *
 * THE GAP EVERY OTHER TEST HERE IS BLIND TO. `App\Models\User` defines a
 * `hasPermission()` convenience wrapper, and twenty-four places in the package
 * called it DIRECTLY. That method is not part of Spatie's `HasRoles`, so on any
 * other installation - every installation - `/trash` and `/roles` answered
 * `BadMethodCallException: Call to undefined method User::hasPermission()`.
 *
 * A 500, on a packaged screen, in a fresh install. Fifteen hundred tests passed
 * throughout, because they all run against a model that happens to define it.
 * It was found by installing into a fresh Laravel app and opening the screens.
 *
 * SO THIS FIXTURE DELIBERATELY OMITS IT. Anything the package asks of a user
 * model must work here, or it does not work for anybody but us.
 */
final class ConsumerUserModelTest extends TestCase
{
    use RefreshDatabase;

    private ConsumerUser $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Consumer', 'slug' => 'consumer']);

        $this->user = ConsumerUser::forceCreate([
            'tenant_id' => $tenant->id,
            'name' => 'Ada',
            'email' => 'ada@consumer.test',
            'password' => bcrypt('correct-horse-battery'),
            'email_verified_at' => now(),
        ]);

        $registrar = app(PermissionRegistrar::class);
        $previous = $registrar->getPermissionsTeamId();
        $registrar->setPermissionsTeamId($tenant->id);

        try {
            $this->user->assignRole(Role::findOrCreate('Administrator', 'web'));
        } finally {
            $registrar->setPermissionsTeamId($previous);
        }
    }

    /** The model really is missing the method. Without this the test proves nothing. */
    public function test_the_fixture_has_no_has_permission_method(): void
    {
        $this->assertFalse(
            method_exists(ConsumerUser::class, 'hasPermission'),
            'This fixture exists to be a model WITHOUT that wrapper.',
        );

        $this->assertTrue(method_exists(ConsumerUser::class, 'assignRole'));
    }

    /**
     * `Ability::allows()` ANSWERS RATHER THAN THROWING, which is the whole fix.
     */
    public function test_the_ability_helper_works_on_a_model_without_the_wrapper(): void
    {
        $this->assertIsBool(Ability::allows($this->user, 'view_operations'));
        $this->assertFalse(Ability::allows(null, 'view_operations'));
    }

    /**
     * NO PACKAGED FILE CALLS `hasPermission()` WITHOUT A GUARD.
     *
     * A STATIC CHECK, deliberately, rather than driving the screens with a
     * swapped user model - that route reaches this application's OWN
     * `HandleInertiaRequests`, which may assume its own model because it is not
     * shipped to anybody. What must hold is narrower and checkable: nothing
     * inside `packages/panel` may call a method Spatie's trait does not define
     * unless it has already asked whether it exists.
     *
     * `Ability::allows()` is the answer at every one of those call sites.
     */
    public function test_no_packaged_file_calls_has_permission_unguarded(): void
    {
        /*
         * SEPARATORS NORMALISED BEFORE ANYTHING IS COMPARED. On Windows the
         * directory iterator hands back `src\Support\Ability.php`, so the
         * exclusion below - written with a forward slash - never matched, and
         * the one file holding the GUARDED implementation reported itself as
         * the offender. The test failed on a machine where nothing was wrong,
         * which is the failure mode that teaches people to ignore it.
         */
        $root = str_replace('\\', '/', dirname(__DIR__, 4).'/packages/panel/src');
        $offenders = [];

        $files = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($root));

        foreach ($files as $file) {
            if (! $file->isFile() || $file->getExtension() !== 'php') {
                continue;
            }

            $path = str_replace('\\', '/', $file->getPathname());

            // `Ability` itself holds the guarded implementation.
            if (str_ends_with($path, 'Support/Ability.php')) {
                continue;
            }

            foreach (file($file->getPathname()) as $i => $line) {
                if (! str_contains($line, '->hasPermission(')) {
                    continue;
                }

                // A comment is prose about the method, not a call to it.
                $trimmed = ltrim($line);

                if (str_starts_with($trimmed, '*') || str_starts_with($trimmed, '//')) {
                    continue;
                }

                if (! str_contains($line, 'method_exists')) {
                    $offenders[] = str_replace($root.'/', '', $path).':'.($i + 1);
                }
            }
        }

        $this->assertSame(
            [],
            $offenders,
            "These call `hasPermission()` on a user model that may not define it - Spatie's "
            .'HasRoles does not. Use Ability::allows(). '.implode(', ', $offenders),
        );
    }
}

/**
 * A stock Laravel user with Spatie's trait, and nothing else.
 *
 * `HasRoles` GIVES `assignRole()` AND `can()`, and no `hasPermission()` - which
 * is exactly what a consumer gets from `panel:install`.
 */
final class ConsumerUser extends Authenticatable
{
    use HasRoles;

    protected $table = 'users';

    protected $guarded = [];

    /*
     * NAMED, because Spatie derives the guard from `auth.guards` by matching the
     * provider's model - and this fixture is not the configured model, so the
     * match fails and it resolves to an empty guard name.
     */
    protected string $guard_name = 'web';
}
