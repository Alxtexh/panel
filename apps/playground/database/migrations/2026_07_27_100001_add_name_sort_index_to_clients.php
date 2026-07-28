<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Sorting the client list by name.
 *
 * FOUND BY MEASUREMENT, not by inspection. At 1M clients the combined case -
 * filter by status and plan type, sort by name - took 335 ms against a 300 ms
 * budget. `EXPLAIN QUERY PLAN` showed the status index being used for the
 * filter and then a TEMP B-TREE FOR ORDER BY: roughly 45,000 matching rows
 * sorted in memory to return ten. With this index the same query is 0.3 ms.
 *
 * WHY THIS INDEX AND NOT ONE PER COMBINATION. Spec §10 forbids
 * one-index-per-column precisely because filter/sort pairs multiply: status ×
 * plan type × expiry × four sort columns is a dozen indexes, each written on
 * every insert. This one is different in kind - it is keyed on the SORT, not on
 * a filter, so it serves any filter combination that orders by name. The
 * filters are then applied while walking it, which is cheap because the page
 * needs ten rows and stops as soon as it has them.
 *
 * It is the exact counterpart of `clients_tenant_created_id_idx`, which does the
 * same job for the default `created_at` sort. Two sort columns, two indexes -
 * not one per query.
 *
 * `id` trails, because keyset pagination compares the tuple (name, id) and needs
 * the tiebreaker inside the index or the seek is ambiguous across pages.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->index(['tenant_id', 'name', 'id'], 'clients_tenant_name_id_idx');
        });
    }

    public function down(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->dropIndex('clients_tenant_name_id_idx');
        });
    }
};
