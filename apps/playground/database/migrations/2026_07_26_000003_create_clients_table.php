<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * 500,000 rows across 5 tenants. Every index below is justified against a query
 * shape Phase 1 will actually run — spec §10 forbids one-index-per-column, which
 * produces indexes the planner cannot combine efficiently and bloats writes.
 *
 * Documented query shapes (spec §10 requires each resource to declare these):
 *
 *   A. default list      WHERE tenant_id = ?                ORDER BY created_at DESC, id DESC
 *   B. status filter     WHERE tenant_id = ? AND status = ? ORDER BY created_at DESC, id DESC
 *   C. expiry sort       WHERE tenant_id = ?                ORDER BY expiry_date ASC, id ASC
 *   D. access code seek  WHERE tenant_id = ? AND access_code = ?
 *
 * `id` is the trailing column on every sort index because keyset pagination
 * compares the tuple (sort_col, id) and needs the tiebreaker inside the index —
 * otherwise the seek degrades to a sort.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();
            $table->foreignId('plan_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('router_id')->nullable()->constrained()->nullOnDelete();

            $table->string('name');
            $table->string('phone');
            $table->string('access_code');
            $table->string('status');       // active|expired|suspended
            $table->string('plan_type');    // pppoe|hotspot|static
            $table->timestamp('expiry_date')->nullable();
            $table->timestamps();

            // A — default list + keyset tiebreaker
            $table->index(['tenant_id', 'created_at', 'id'], 'clients_tenant_created_id_idx');

            // B — status filter, the most common narrowing
            $table->index(['tenant_id', 'status', 'created_at', 'id'], 'clients_tenant_status_created_idx');

            // C — expiry sort, drives the renewals view
            $table->index(['tenant_id', 'expiry_date', 'id'], 'clients_tenant_expiry_id_idx');

            // D — access code lookup. Unique per tenant, not globally: two tenants
            // may legitimately issue the same code, and a global unique constraint
            // here would leak the existence of another tenant's row on insert.
            $table->unique(['tenant_id', 'access_code'], 'clients_tenant_access_code_uniq');

            // Relation join for the plan_type filter combined with tenant scope.
            $table->index(['tenant_id', 'plan_id'], 'clients_tenant_plan_idx');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
