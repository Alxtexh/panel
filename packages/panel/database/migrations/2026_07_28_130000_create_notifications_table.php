<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Laravel's own `notifications` table, published by the PACKAGE rather than
 * left to the host.
 *
 * THE PANEL DEPENDS ON THIS TABLE EXISTING, not just uses it if present. The
 * Alerts/Inbox bell, every queued export's "your file is ready" ping, every
 * bulk action's completion notice - `ActsAsPanelUser::notifyActor()` calls
 * `$user->notify()`, which without this table throws
 * `SQLSTATE... no such table: notifications` on the FIRST background job any
 * `panel:install` app ever runs. Modern Laravel no longer ships this
 * migration by default (it moved behind `artisan notifications:table`), so a
 * plain install that never ran that command - which is every one of them,
 * since nothing tells an installer to - had no notifications table at all.
 * The failure was caught and logged as a warning inside `notifyActor()`, so
 * it never reached a browser: the panel's own "Finished exports land here"
 * copy in the Inbox tab was a promise nothing behind it could keep.
 *
 * GUARDED, NOT UNCONDITIONAL. A host that already ran
 * `artisan notifications:table` itself, or ships Breeze/Jetstream (which
 * publishes the same migration), already has this table under the same name
 * - `Schema::hasTable()` here is what keeps `php artisan migrate` from
 * failing on that install with "table notifications already exists".
 */
return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('notifications')) {
            return;
        }

        Schema::create('notifications', function (Blueprint $table): void {
            $table->uuid('id')->primary();
            $table->string('type');
            $table->morphs('notifiable');
            $table->text('data');
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
