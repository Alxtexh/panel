<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/** The routers half of the old combined index migration - the demo's. */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('routers', function (Blueprint $table) {
            $table->index(['tenant_id', 'created_at', 'id'], 'routers_tenant_created_id_idx');
            $table->index(['tenant_id', 'status', 'created_at', 'id'], 'routers_tenant_status_created_idx');
            $table->index(['tenant_id', 'last_seen_at', 'id'], 'routers_tenant_seen_id_idx');
        });
    }

    public function down(): void
    {
        Schema::table('routers', function (Blueprint $table) {
            $table->dropIndex('routers_tenant_created_id_idx');
            $table->dropIndex('routers_tenant_status_created_idx');
            $table->dropIndex('routers_tenant_seen_id_idx');
        });
    }
};
