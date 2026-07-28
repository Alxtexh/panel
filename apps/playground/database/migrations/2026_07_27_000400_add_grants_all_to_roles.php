<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * A role that always holds every ability, including ones invented later.
 *
 * THE PROBLEM IT SOLVES, found the first time a new ability was added: the sync
 * command prunes names that no longer exist but never grants ones that newly do.
 * So registering a resource - or adding `manage_roles` - left every existing
 * Administrator role without it, and the administrators were locked out of the
 * thing they had just built. Silently, because a role showing forty ticked boxes
 * looks complete.
 *
 * The obvious fix is for sync to top up any role that "looks like" an
 * administrator, and that is the wrong shape: inferring superuser status from a
 * slug or from how many abilities a role happens to hold means a role can become
 * a superuser by accident. An explicit flag cannot.
 *
 * IT IS ALSO A PRIVILEGE ESCALATION SURFACE, which is why it is a column rather
 * than an inference: a role with this set gains every future ability without
 * anybody approving it, so it must be a deliberate, visible, auditable property
 * of exactly the roles that are meant to have it.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('roles', function (Blueprint $table): void {
            $table->boolean('grants_all')->default(false)->after('permissions');
        });

        /*
         * BACKFILL THE ROLES THIS FEATURE WAS BUILT FOR, and nothing else.
         *
         * `panel:permissions sync` creates exactly one role per tenant, slugged
         * `administrator`, holding every ability at the moment of creation.
         * Those are the roles that must not fall behind, and they exist already
         * - so without this the column ships as false everywhere and the first
         * new ability locks out every administrator, which is the precise
         * failure it was added to prevent.
         *
         * Matching on the slug is an inference, and it is acceptable ONLY here:
         * it is a one-time migration over roles that one command generated
         * under one convention. Sync itself never infers - it reads the column.
         */
        DB::table('roles')->where('slug', 'administrator')->update(['grants_all' => true]);
    }

    public function down(): void
    {
        Schema::table('roles', function (Blueprint $table): void {
            $table->dropColumn('grants_all');
        });
    }
};
