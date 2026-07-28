<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * The index the notification bell needed and nobody had noticed.
 *
 * FOUND BY `panel:journey`, and not findable by the query benchmark. Every hop
 * in the journey came back in 3-6 ms except the notification bell, which took
 * 303 ms while issuing only EIGHT queries - so nothing about the query count
 * looked wrong, and the resource-level benchmark never touches this path at all
 * because notifications are not a resource.
 *
 * The rule is "active subscribers past their expiry date", which is
 * `where tenant_id = ? and status = ? and expiry_date < ?`. The existing indexes
 * are `(tenant_id, expiry_date, id)` and `(tenant_id, status, created_at)`, and
 * NEITHER covers it: the first narrows by date and then has to read every
 * matching row from the table to test `status`, and the second narrows by status
 * and then has to read every matching row to test the date. The planner chose
 * the first and fetched 84,845 rows to count them.
 *
 * THE COLUMN ORDER IS THE WHOLE FIX. Both equality predicates come first, so the
 * index seeks straight to (tenant, active) and the range on `expiry_date` is
 * then a contiguous scan of exactly the rows being counted. Putting the range
 * column earlier - `(tenant_id, expiry_date, status)` - would look equivalent
 * and would not be: after a range, no later column can be used for seeking, so
 * `status` would be back to a per-row test.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->index(['tenant_id', 'status', 'expiry_date'], 'clients_tenant_status_expiry_idx');
        });
    }

    public function down(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->dropIndex('clients_tenant_status_expiry_idx');
        });
    }
};
