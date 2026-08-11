<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Keyset-pagination indexes for the Phase 2 screens.
 *
 * Routers (50 rows) and plans (200 rows) are small enough that the planner would
 * happily scan them, so these indexes buy nothing today. They exist anyway
 * because §10 requires each resource to document and create the indexes its
 * filter and sort combinations need, and because the trailing `id` is what makes
 * the keyset seek work at all - a resource that grows past 10k rows later should
 * not need this discovered the hard way.
 *
 * Query shapes:
 *
 *   routers  WHERE tenant_id = ? [AND status = ?]     ORDER BY created_at DESC, id DESC
 *   routers  WHERE tenant_id = ?                      ORDER BY last_seen_at DESC, id DESC
 *   plans    WHERE tenant_id = ? [AND is_active = ?]  ORDER BY created_at DESC, id DESC
 *   plans    WHERE tenant_id = ?                      ORDER BY speed_mbps ASC, id ASC
 *
 * SPLIT WHEN THE ISP DOMAIN WAS FENCED. The routers half moved to
 * `database/migrations/demo`; a migration indexing both meant deleting the
 * demo required editing a file rather than removing one.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('plans', function (Blueprint $table) {
            $table->index(['tenant_id', 'created_at', 'id'], 'plans_tenant_created_id_idx');
            $table->index(['tenant_id', 'is_active', 'created_at', 'id'], 'plans_tenant_active_created_idx');
            $table->index(['tenant_id', 'speed_mbps', 'id'], 'plans_tenant_speed_id_idx');
        });
    }

    public function down(): void
    {
        Schema::table('plans', function (Blueprint $table) {
            $table->dropIndex('plans_tenant_created_id_idx');
            $table->dropIndex('plans_tenant_active_created_idx');
            $table->dropIndex('plans_tenant_speed_id_idx');
        });
    }
};
