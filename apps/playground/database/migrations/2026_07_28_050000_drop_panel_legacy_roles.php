<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

/**
 * Step 3 of 3: retire the hand-rolled roles table.
 *
 * IT IS A SEPARATE MIGRATION FROM THE COPY, and deliberately so. Steps 1 and 2
 * moved the data and left the old table sitting untouched beside the new one, so
 * that an installation could deploy, run, and - if the new permission stack
 * misbehaved - still have every original row to look at. Dropping in the same
 * breath as copying would have made the first deploy the point of no return.
 *
 * `users.role_id` GOES WITH IT. It is the other half of the old model: exactly
 * one role per person, expressed as a foreign key. Spatie's `model_has_roles`
 * replaces it, and leaving the column behind would leave a second, stale answer
 * to "what can this person do" that nothing updates and something will
 * eventually read.
 *
 * THE REVERSE REBUILDS FROM THE NEW TABLES rather than restoring a backup,
 * because by the time anybody rolls back, the new tables are where the edits
 * have been happening. It is faithful with ONE exception, stated plainly: the
 * old shape held a single role per user, so anybody who has since been given a
 * second role comes back holding only their oldest. That is a real loss, and it
 * is the reason to think before rolling back rather than a footnote.
 */
return new class extends Migration
{
    public function up(): void
    {
        /*
         * THE COLUMN FIRST, THEN THE TABLE. `users.role_id` carries a foreign
         * key into `panel_legacy_roles`; dropping the table underneath a live
         * constraint is what leaves a database that will not open on a driver
         * that enforces them.
         */
        if (Schema::hasColumn('users', 'role_id')) {
            Schema::table('users', function (Blueprint $table): void {
                /*
                 * BOTH COMMANDS IN ONE BLUEPRINT, and on SQLite that is not a
                 * tidiness point - it is the only thing that works.
                 *
                 * Since 3.35 SQLite drops a column in place rather than
                 * rebuilding the table, and it then refuses, because the table
                 * still carries a foreign key naming the column that just left:
                 * "unknown column role_id in foreign key definition". Naming
                 * the constraint here puts an alter command in the blueprint,
                 * which is what makes Laravel rebuild the table instead - and
                 * a rebuild emits the new definition without either half.
                 */
                $table->dropForeign(['role_id']);
                $table->dropColumn('role_id');
            });
        }

        Schema::dropIfExists('panel_legacy_roles');
    }

    public function down(): void
    {
        Schema::create('panel_legacy_roles', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('tenant_id')->nullable()->constrained()->nullOnDelete();
            $table->string('name');
            $table->string('slug');
            $table->json('permissions');
            $table->boolean('is_default')->default(false);
            $table->boolean('grants_all')->default(false);
            $table->timestamps();

            $table->unique(['tenant_id', 'slug']);
        });

        /*
         * IDS ARE PRESERVED. The reverse of this migration also restores
         * `users.role_id`, which points at them - rebuilding with fresh
         * autoincrement ids would produce a table of the right shape whose
         * every reference pointed at the wrong row.
         */
        foreach (DB::table('roles')->orderBy('id')->cursor() as $role) {
            DB::table('panel_legacy_roles')->insert([
                'id' => $role->id,
                'tenant_id' => $role->tenant_id,
                'name' => $role->name,
                'slug' => Str::slug($role->name),
                'permissions' => json_encode(
                    DB::table('role_has_permissions')
                        ->join('permissions', 'permissions.id', '=', 'role_has_permissions.permission_id')
                        ->where('role_has_permissions.role_id', $role->id)
                        ->orderBy('permissions.name')
                        ->pluck('permissions.name')
                        ->all(),
                ),
                'is_default' => false,
                'grants_all' => $role->grants_all ?? false,
                'created_at' => $role->created_at,
                'updated_at' => $role->updated_at,
            ]);
        }

        Schema::table('users', function (Blueprint $table): void {
            $table->foreignId('role_id')->nullable()->after('tenant_id')
                ->constrained('panel_legacy_roles')->nullOnDelete();
        });

        /*
         * THE OLDEST ROLE WINS where somebody holds several - see the class
         * note. There is no correct answer here; oldest is at least stable and
         * matches which role they would have held before the migration.
         */
        $assignments = DB::table('model_has_roles')
            ->where('model_type', App\Models\User::class)
            ->orderBy('role_id')
            ->get();

        $seen = [];

        foreach ($assignments as $row) {
            if (isset($seen[$row->model_id])) {
                continue;
            }

            $seen[$row->model_id] = true;

            DB::table('users')->where('id', $row->model_id)->update(['role_id' => $row->role_id]);
        }
    }
};
