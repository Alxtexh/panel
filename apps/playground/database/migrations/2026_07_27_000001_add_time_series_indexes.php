<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Indexes for the dashboard time series.
 *
 * WHY THE EXISTING INDEXES DO NOT SERVE THIS QUERY.
 *
 * `sessions_tenant_client_started_idx` is (tenant_id, client_id, started_at, id)
 * and looks like it covers a `started_at` range for one tenant. It does not:
 * `client_id` sits between the equality column and the range column, so with no
 * predicate on `client_id` the planner cannot seek to a `started_at` position —
 * it has to walk every client's slice. The chart query is
 *
 *     WHERE tenant_id = ? AND started_at BETWEEN ? AND ?  GROUP BY <bucket>
 *
 * which needs `started_at` immediately after the equality column. That is the
 * left-prefix rule, and getting it wrong is invisible on a seeded dev table and
 * a full scan at 2M rows.
 *
 * spec §10 forbids one-index-per-column, so this is ONE composite justified
 * against one query shape, not a column sprinkled with indexes. `clients` needs
 * nothing new — `clients_tenant_created_id_idx` is already (tenant_id,
 * created_at, id) and serves the signups series exactly.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('client_sessions', function (Blueprint $table): void {
            $table->index(['tenant_id', 'started_at'], 'sessions_tenant_started_idx');
        });
    }

    public function down(): void
    {
        Schema::table('client_sessions', function (Blueprint $table): void {
            $table->dropIndex('sessions_tenant_started_idx');
        });
    }
};
