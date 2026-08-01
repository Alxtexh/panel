<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * The roles a panel needs, for an application that has not already built them.
 *
 * EVERY STEP IS GUARDED, and that is not defensive habit - it is the only shape
 * that can be correct here. Three populations run this migration and they are in
 * different states:
 *
 *   - a fresh install, with nothing;
 *   - an application that ALREADY HAS spatie/laravel-permission, published its
 *     migrations years ago and has live data in these tables;
 *   - the reference app, which arrived at this schema through a chain of its own
 *     migrations before the package owned any of it.
 *
 * An unguarded `Schema::create('roles')` is fine for the first and DESTROYS the
 * install for the other two - the migration throws, the deploy halts, and the
 * error names a table the operator did not know PanelKit wanted. So each piece
 * asks whether it is needed. Running this against a fully-populated database is
 * a no-op, which is what makes it safe to ship to people who are already using
 * Spatie for their own purposes.
 *
 * `grants_all` IS THE ONE COLUMN THAT IS OURS. Spatie has no notion of a role
 * that holds abilities invented after it was created; see `Role::grantsEverything()`
 * for why inferring it from "currently holds everything" is wrong. It is added
 * to an existing `roles` table when the rest is already there.
 */
return new class extends Migration
{
    public function up(): void
    {
        $tables = config('permission.table_names');
        $columns = config('permission.column_names');
        $team = $columns['team_foreign_key'] ?? 'tenant_id';

        if (! Schema::hasTable($tables['permissions'])) {
            Schema::create($tables['permissions'], function (Blueprint $table): void {
                $table->bigIncrements('id');
                $table->string('name');
                $table->string('guard_name');
                $table->timestamps();

                $table->unique(['name', 'guard_name']);
            });
        }

        if (! Schema::hasTable($tables['roles'])) {
            Schema::create($tables['roles'], function (Blueprint $table) use ($team): void {
                $table->bigIncrements('id');

                /*
                 * NULLABLE, and indexed with the name rather than alone. A role
                 * belongs to one organisation; null is the single-tenant case and
                 * the shape `SetPermissionsTeam` sets when nothing resolved.
                 */
                $table->unsignedBigInteger($team)->nullable();
                $table->index($team);

                $table->string('name');
                $table->string('guard_name');
                $table->boolean('grants_all')->default(false);
                $table->timestamps();

                $table->unique([$team, 'name', 'guard_name']);
            });
        } elseif (! Schema::hasColumn($tables['roles'], 'grants_all')) {
            Schema::table($tables['roles'], function (Blueprint $table): void {
                $table->boolean('grants_all')->default(false);
            });
        }

        if (! Schema::hasTable($tables['model_has_permissions'])) {
            Schema::create($tables['model_has_permissions'], function (Blueprint $table) use ($tables, $columns, $team): void {
                $table->unsignedBigInteger($columns['permission_pivot_key'] ?? 'permission_id');
                $table->string('model_type');
                $table->unsignedBigInteger($columns['model_morph_key']);
                $table->index([$columns['model_morph_key'], 'model_type']);

                $table->foreign($columns['permission_pivot_key'] ?? 'permission_id')
                    ->references('id')->on($tables['permissions'])->cascadeOnDelete();

                $table->unsignedBigInteger($team)->nullable();
                $table->index($team);

                $table->primary(
                    [$team, $columns['permission_pivot_key'] ?? 'permission_id', $columns['model_morph_key'], 'model_type'],
                    'model_has_permissions_permission_model_type_primary',
                );
            });
        }

        if (! Schema::hasTable($tables['model_has_roles'])) {
            Schema::create($tables['model_has_roles'], function (Blueprint $table) use ($tables, $columns, $team): void {
                $table->unsignedBigInteger($columns['role_pivot_key'] ?? 'role_id');
                $table->string('model_type');
                $table->unsignedBigInteger($columns['model_morph_key']);
                $table->index([$columns['model_morph_key'], 'model_type']);

                $table->foreign($columns['role_pivot_key'] ?? 'role_id')
                    ->references('id')->on($tables['roles'])->cascadeOnDelete();

                $table->unsignedBigInteger($team)->nullable();
                $table->index($team);

                $table->primary(
                    [$team, $columns['role_pivot_key'] ?? 'role_id', $columns['model_morph_key'], 'model_type'],
                    'model_has_roles_role_model_type_primary',
                );
            });
        }

        if (! Schema::hasTable($tables['role_has_permissions'])) {
            Schema::create($tables['role_has_permissions'], function (Blueprint $table) use ($tables, $columns): void {
                $table->unsignedBigInteger($columns['permission_pivot_key'] ?? 'permission_id');
                $table->unsignedBigInteger($columns['role_pivot_key'] ?? 'role_id');

                $table->foreign($columns['permission_pivot_key'] ?? 'permission_id')
                    ->references('id')->on($tables['permissions'])->cascadeOnDelete();

                $table->foreign($columns['role_pivot_key'] ?? 'role_id')
                    ->references('id')->on($tables['roles'])->cascadeOnDelete();

                $table->primary(
                    [$columns['permission_pivot_key'] ?? 'permission_id', $columns['role_pivot_key'] ?? 'role_id'],
                    'role_has_permissions_permission_id_role_id_primary',
                );
            });
        }
    }

    /**
     * NOTHING IS DROPPED, and that is deliberate.
     *
     * This migration may have created none of these tables. Rolling it back
     * cannot tell the difference between a table it made and one that predated
     * it by three years, so dropping would delete an application's entire
     * permission system on a routine `migrate:rollback`. The `grants_all`
     * column is left too: it is one boolean, and its absence breaks the panel
     * while its presence breaks nothing.
     */
    public function down(): void {}
};
