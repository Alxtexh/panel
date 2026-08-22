<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Alxtexh\Panel\Support\CommentTables;

/**
 * Polymorphic comments for resources that opt in via `Resource::comments()`.
 *
 * Skips when the table already exists so an application pointing config at its
 * own comments table is not blocked on upgrade.
 */
return new class extends Migration
{
    public function up(): void
    {
        $table = CommentTables::comments();

        if (Schema::hasTable($table)) {
            return;
        }

        Schema::create($table, function (Blueprint $blueprint) use ($table): void {
            $blueprint->id();

            /*
             * Tenant when the host uses column tenancy. Nullable so resources
             * without tenancy still store comments.
             */
            $blueprint->unsignedBigInteger('tenant_id')->nullable()->index();

            $blueprint->morphs('commentable');

            /*
             * No FK to users: the user model class comes from auth config and
             * the table name is not fixed across installations.
             */
            $blueprint->unsignedBigInteger('user_id')->index();

            $blueprint->text('body');

            /** Resolved user ids for @mentions, for notifications and audit. */
            $blueprint->json('mentions')->nullable();

            $blueprint->timestamps();

            $blueprint->index(['commentable_type', 'commentable_id', 'created_at']);
        });
    }

    public function down(): void
    {
        /*
         * Nothing is dropped. The table may predate this migration or hold data
         * the application owns under a configured name.
         */
    }
};
