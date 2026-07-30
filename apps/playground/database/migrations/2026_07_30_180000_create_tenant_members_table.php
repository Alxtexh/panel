<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Roadmap 5.6: a user may belong to several workspaces.
 *
 * `users.tenant_id` DOES NOT MOVE. It remains the CURRENT workspace - the one
 * every scope, session and permission check already reads - which is what makes
 * this table safe to add: switching workspaces updates one column through one
 * audited endpoint, and every isolation guarantee in the panel keeps holding
 * because nothing about how reads are bounded has changed. This table answers
 * only the new question: which workspaces MAY this person switch to.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tenant_members', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->timestamps();

            // One membership per (workspace, person). The switch endpoint
            // trusts this table, so a duplicate row is only noise - but noise
            // in an authorisation table is worth a constraint.
            $table->unique(['tenant_id', 'user_id']);
        });

        /*
         * EVERY EXISTING USER IS A MEMBER OF THEIR OWN WORKSPACE. Without the
         * backfill, the switcher would tell a decade-old account it belongs
         * nowhere - membership is being introduced as a NEW way to record a
         * fact that was always true.
         */
        $now = now();

        DB::table('users')
            ->whereNotNull('tenant_id')
            ->orderBy('id')
            ->chunkById(500, function ($users) use ($now): void {
                DB::table('tenant_members')->insertOrIgnore(
                    $users->map(fn ($user): array => [
                        'tenant_id' => $user->tenant_id,
                        'user_id' => $user->id,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ])->all(),
                );
            });
    }

    public function down(): void
    {
        Schema::dropIfExists('tenant_members');
    }
};
