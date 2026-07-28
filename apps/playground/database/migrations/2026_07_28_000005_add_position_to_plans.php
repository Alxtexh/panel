<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * The order plans are shown in.
 *
 * A COLUMN, NOT A DERIVED ORDER. "Cheapest first" or "newest first" are sorts;
 * this is a sequence somebody chose - the order a sales page lists packages in,
 * which follows no property of the rows at all. That cannot be computed, so it
 * has to be stored.
 *
 * SPARSE FROM THE START, in steps of 100. Not because this implementation needs
 * gaps - it reuses the positions a page already holds and so never runs out -
 * but because a hand-written `INSERT` or a fixture that wants to slot a row
 * between two others should not have to renumber the table to do it.
 *
 * INDEXED WITH THE TENANT LEADING, because ordering by it is the only reason it
 * exists and grouping taught us what an unindexed ordering costs.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('plans', function (Blueprint $table): void {
            $table->unsignedInteger('position')->default(0)->after('is_active');
        });

        /*
         * Seed the existing rows in their current visible order.
         *
         * A table that arrives all-zero has no order at all, so the first drag
         * would appear to shuffle everything. `id` is the order they were
         * created in, which is the closest thing to an existing sequence.
         */
        foreach (DB::table('plans')->orderBy('id')->pluck('id') as $index => $id) {
            DB::table('plans')->where('id', $id)->update(['position' => ($index + 1) * 100]);
        }

        Schema::table('plans', function (Blueprint $table): void {
            $table->index(['tenant_id', 'position', 'id'], 'plans_tenant_position_idx');
        });
    }

    public function down(): void
    {
        Schema::table('plans', function (Blueprint $table): void {
            $table->dropIndex('plans_tenant_position_idx');
            $table->dropColumn('position');
        });
    }
};
