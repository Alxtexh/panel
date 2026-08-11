<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * 2,000,000 rows. This is the table that makes or breaks the performance story,
 * and the one the live-update tier (Phase 8) patches row-by-row from broadcasts.
 *
 * Named `client_sessions`, not `sessions` - Laravel's own session driver owns
 * that table name, and colliding with it breaks the database session driver in
 * any consuming app that uses it.
 *
 * Documented query shapes:
 *
 *   A. live sessions   WHERE tenant_id = ? AND ended_at IS NULL  ORDER BY started_at DESC, id DESC
 *   B. client history  WHERE tenant_id = ? AND client_id = ?     ORDER BY started_at DESC, id DESC
 *   C. router activity WHERE tenant_id = ? AND router_id = ?     ORDER BY started_at DESC, id DESC
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('client_sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();
            $table->foreignId('client_id')->constrained()->cascadeOnDelete();
            $table->foreignId('router_id')->nullable()->constrained()->nullOnDelete();

            $table->string('status');       // online|offline
            $table->string('ip_address')->nullable();
            $table->unsignedBigInteger('bytes_in')->default(0);
            $table->unsignedBigInteger('bytes_out')->default(0);
            $table->timestamp('started_at');
            $table->timestamp('ended_at')->nullable();
            $table->timestamps();

            // A - the live view. Partial index would be better on Postgres
            // (WHERE ended_at IS NULL); SQLite supports partial indexes too, but
            // the engine is still undecided, so this stays portable for now and
            // gets revisited when bootstrap-db.sh is written.
            $table->index(['tenant_id', 'ended_at', 'started_at', 'id'], 'sessions_tenant_live_idx');

            // B - per-client history, the drill-down from the clients list
            $table->index(['tenant_id', 'client_id', 'started_at', 'id'], 'sessions_tenant_client_started_idx');

            // C - per-router activity
            $table->index(['tenant_id', 'router_id', 'started_at', 'id'], 'sessions_tenant_router_started_idx');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('client_sessions');
    }
};
