<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Alxtexh\Panel\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;
use Tests\TestCase;

/**
 * The package's permission migration, exercised on the path nothing else takes.
 *
 * THE REFERENCE APP CANNOT TEST THIS BY EXISTING. Its own migration chain built
 * these tables years before the package owned any of them, so every other test
 * in this suite runs against a schema the package migration merely declines to
 * touch. The guarded no-op is well covered by accident; the branch that actually
 * CREATES the tables - the one every new consumer runs, and the only one that
 * matters for "it works on install" - is covered by nothing.
 *
 * So this drops them and runs the package migration alone, which is the closest
 * this repository can get to a fresh `composer require` without being one. What
 * it asserts is not that five tables appeared: it is that a role created
 * afterwards can hold a permission, and that a role belonging to one tenant does
 * not answer for another. Tables are the mechanism; those two are the product.
 */
final class PackagePermissionMigrationTest extends TestCase
{
    use RefreshDatabase;

    /** Rebuild the permission schema from the package migration alone. */
    private function rebuildFromPackageMigration(): void
    {
        Schema::disableForeignKeyConstraints();

        foreach (['role_has_permissions', 'model_has_roles', 'model_has_permissions', 'roles', 'permissions'] as $table) {
            Schema::dropIfExists($table);
        }

        Schema::enableForeignKeyConstraints();

        $migration = require dirname(__DIR__, 4)
            .'/packages/panel/database/migrations/2026_08_01_000000_create_panel_permission_tables.php';

        $migration->up();

        app(PermissionRegistrar::class)->forgetCachedPermissions();
    }

    public function test_it_builds_a_permission_system_from_nothing(): void
    {
        $this->rebuildFromPackageMigration();

        foreach (['permissions', 'roles', 'model_has_roles', 'model_has_permissions', 'role_has_permissions'] as $table) {
            $this->assertTrue(Schema::hasTable($table), "The package migration did not create {$table}.");
        }

        // The one column that is the panel's rather than Spatie's.
        $this->assertTrue(Schema::hasColumn('roles', 'grants_all'));
    }

    /** The tables are only worth having if a role can actually hold an ability. */
    public function test_a_role_created_afterwards_grants_an_ability(): void
    {
        $this->rebuildFromPackageMigration();

        app(PermissionRegistrar::class)->setPermissionsTeamId(1);

        Permission::findOrCreate('view_any_clients', 'web');

        $role = Role::create(['name' => 'Support', 'guard_name' => 'web', 'tenant_id' => 1]);
        $role->syncPermissions(['view_any_clients']);

        $this->assertTrue($role->fresh()->grants('view_any_clients'));
        $this->assertFalse($role->fresh()->grants('delete_clients'));
    }

    /**
     * AND THE TENANT COLUMN IS LOAD-BEARING, not decoration.
     *
     * Two roles of the same name in different organisations is the ordinary
     * case, and the unique index has to allow it - an index on `(name,
     * guard_name)` alone would reject the second tenant's Administrator, which
     * surfaces as provisioning failing for every customer after the first.
     */
    public function test_two_tenants_may_each_have_a_role_of_the_same_name(): void
    {
        $this->rebuildFromPackageMigration();

        Role::create(['name' => 'Administrator', 'guard_name' => 'web', 'tenant_id' => 1]);
        Role::create(['name' => 'Administrator', 'guard_name' => 'web', 'tenant_id' => 2]);

        $this->assertSame(2, Role::query()->where('name', 'Administrator')->count());
        $this->assertSame(1, Role::query()->where('tenant_id', 1)->count());
    }

    /**
     * RUNNING IT TWICE CHANGES NOTHING - the property the guards exist for.
     *
     * Consumers who already use Spatie run this migration against live tables.
     * If it were not idempotent, their deploy would halt on a table that has
     * been there for years.
     */
    public function test_it_is_a_no_op_against_a_schema_that_already_has_the_tables(): void
    {
        $this->rebuildFromPackageMigration();

        Permission::findOrCreate('view_any_clients', 'web');
        $role = Role::create(['name' => 'Support', 'guard_name' => 'web', 'tenant_id' => 1]);

        $migration = require dirname(__DIR__, 4)
            .'/packages/panel/database/migrations/2026_08_01_000000_create_panel_permission_tables.php';

        $migration->up();

        $this->assertSame(1, DB::table('roles')->count(), 'A second run disturbed existing rows.');
        $this->assertTrue(Role::query()->whereKey($role->getKey())->exists());
    }
}
