<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Step 2 of 3: move the panel's roles and assignments into Spatie's tables.
 *
 * ONE ROLE BECOMES ONE ROLE, and each user keeps exactly what they had - the
 * migration changes what is POSSIBLE, not what is true. Somebody who held
 * Administrator still holds Administrator and nothing else; the difference is
 * that they can now be given a second role, which the old `users.role_id` could
 * never express.
 *
 * PERMISSIONS ARE CREATED FROM WHAT THE ROLES ACTUALLY GRANTED, not from the
 * resource registry. Reading the registry here would be tidier and wrong: a role
 * granting an ability that no longer exists should lose it, and a registry that
 * has grown since would silently hand out abilities nobody approved.
 * `panel:permissions sync --prune` reconciles afterwards, deliberately, where it
 * can be seen.
 *
 * IT IS IDEMPOTENT. `updateOrInsert` throughout, because a migration that is
 * only safe once is one somebody will run twice on a database that half-failed.
 */
return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('panel_legacy_roles')) {
            return;
        }

        $guard = config('auth.defaults.guard', 'web');
        $permissionIds = [];

        foreach (DB::table('panel_legacy_roles')->orderBy('id')->get() as $legacy) {
            $abilities = (array) json_decode((string) $legacy->permissions, true);

            /*
             * PERMISSIONS ARE GLOBAL IN SPATIE even with teams enabled - only
             * the ROLE and the assignment carry a team. That is correct:
             * `update_client` means the same thing everywhere, and duplicating
             * it per tenant would produce thousands of identical rows and a
             * cache to match.
             */
            foreach ($abilities as $ability) {
                if (! isset($permissionIds[$ability])) {
                    DB::table('permissions')->updateOrInsert(
                        ['name' => $ability, 'guard_name' => $guard],
                        ['updated_at' => now(), 'created_at' => now()],
                    );

                    $permissionIds[$ability] = DB::table('permissions')
                        ->where('name', $ability)->where('guard_name', $guard)->value('id');
                }
            }

            DB::table('roles')->updateOrInsert(
                ['name' => $legacy->name, 'guard_name' => $guard, 'tenant_id' => $legacy->tenant_id],
                ['grants_all' => $legacy->grants_all, 'updated_at' => now(), 'created_at' => now()],
            );

            $roleId = DB::table('roles')
                ->where('name', $legacy->name)
                ->where('guard_name', $guard)
                ->where('tenant_id', $legacy->tenant_id)
                ->value('id');

            foreach ($abilities as $ability) {
                DB::table('role_has_permissions')->updateOrInsert(
                    ['permission_id' => $permissionIds[$ability], 'role_id' => $roleId],
                    [],
                );
            }

            /*
             * Everyone who held this role keeps it. `model_has_roles` carries the
             * tenant too, so the same person at two organisations gets two
             * separate assignments rather than one that leaks across.
             */
            $holders = DB::table('users')->where('role_id', $legacy->id)->pluck('id');

            foreach ($holders as $userId) {
                DB::table('model_has_roles')->updateOrInsert(
                    [
                        'role_id' => $roleId,
                        'model_type' => \App\Models\User::class,
                        'model_id' => $userId,
                        'tenant_id' => $legacy->tenant_id,
                    ],
                    [],
                );
            }
        }
    }

    public function down(): void
    {
        // Reversing means emptying Spatie's tables; the legacy table is still
        // there in step 3's `down()`, so nothing is lost.
        DB::table('model_has_roles')->delete();
        DB::table('role_has_permissions')->delete();
        DB::table('roles')->delete();
        DB::table('permissions')->delete();
    }
};
