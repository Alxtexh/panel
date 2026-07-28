<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * A named set of table settings, saved by one person for one resource.
 *
 * "Expiring this week, sorted by plan, without the address columns" is a
 * question somebody asks every Monday, and reconstructing it by hand each time
 * is most of what makes an admin panel tiring. It is the single most-requested
 * enterprise table feature and the panel has not had it.
 *
 * SCOPED TO A USER, NOT A ROLE. A shared view sounds better until two people
 * disagree about what "Overdue" means, and then one of them silently changes the
 * other's Monday. Sharing can be added later as an explicit act; starting shared
 * cannot be undone without taking something away.
 *
 * THE STATE IS JSON AND IS NOT TRUSTED. It is a *request* to be re-validated
 * against the resource's declared columns and filters when applied - the same
 * allowlists a URL goes through. A saved view is a stored query string, and a
 * stored query string from months ago can name a column that no longer exists,
 * or one that never should have been sortable.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('saved_views', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();

            // The resource KEY, not a class name: a class can be renamed and a
            // stored class name then points at nothing.
            $table->string('resource', 64);
            $table->string('name', 80);
            $table->json('state');

            /*
             * At most one default per user per resource, enforced in code
             * rather than by a unique index.
             *
             * A partial unique index on `is_default = 1` is the tidy answer and
             * is not portable - the syntax differs across engines and SQLite
             * needs a different form again. The rule is "clear the others when
             * setting one", which is a transaction either way.
             */
            $table->boolean('is_default')->default(false);
            $table->timestamps();

            /*
             * The only query this table serves: "my views for this resource".
             * Leading with `user_id` because a view is always looked up for one
             * person - the tenant is already implied by the user, and putting
             * `tenant_id` first would make the index serve a question nobody
             * asks.
             */
            $table->index(['user_id', 'resource', 'name'], 'saved_views_user_resource_idx');

            // Two views called "Overdue" on one resource is a mistake, not a
            // feature - the second silently shadows the first in every list.
            $table->unique(['user_id', 'resource', 'name'], 'saved_views_unique_name');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('saved_views');
    }
};
