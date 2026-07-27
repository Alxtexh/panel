<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Soft deletes for clients.
 *
 * WHY THE INDEXES ARE REBUILT AND NOT JUST ADDED TO.
 *
 * A soft delete turns every list query into `... AND deleted_at IS NULL`. If
 * that column is not in the index, the planner filters AFTER the index seek —
 * so a tenant with 200,000 clients reads all of them through the index and
 * discards the deleted ones. The list stays correct and silently loses the
 * property the index existed to provide.
 *
 * SQLite cannot add a column to an existing index, so the sort indexes are
 * dropped and recreated with `deleted_at` leading the sort columns. On Postgres
 * a partial index (`WHERE deleted_at IS NULL`) would be better still — smaller
 * and not carrying the null in every entry — which is one more thing the engine
 * decision changes.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->softDeletes();
        });

        Schema::table('clients', function (Blueprint $table): void {
            $table->dropIndex('clients_tenant_created_id_idx');
            $table->dropIndex('clients_tenant_name_id_idx');
            $table->dropIndex('clients_tenant_status_created_idx');
        });

        Schema::table('clients', function (Blueprint $table): void {
            // `deleted_at` sits directly after the equality column, before the
            // sort columns, because it is itself an equality predicate.
            $table->index(['tenant_id', 'deleted_at', 'created_at', 'id'], 'clients_tenant_created_id_idx');
            $table->index(['tenant_id', 'deleted_at', 'name', 'id'], 'clients_tenant_name_id_idx');
            $table->index(['tenant_id', 'deleted_at', 'status', 'created_at', 'id'], 'clients_tenant_status_created_idx');
        });
    }

    public function down(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->dropIndex('clients_tenant_created_id_idx');
            $table->dropIndex('clients_tenant_name_id_idx');
            $table->dropIndex('clients_tenant_status_created_idx');
            $table->dropSoftDeletes();
        });

        Schema::table('clients', function (Blueprint $table): void {
            $table->index(['tenant_id', 'created_at', 'id'], 'clients_tenant_created_id_idx');
            $table->index(['tenant_id', 'name', 'id'], 'clients_tenant_name_id_idx');
            $table->index(['tenant_id', 'status', 'created_at', 'id'], 'clients_tenant_status_created_idx');
        });
    }
};
