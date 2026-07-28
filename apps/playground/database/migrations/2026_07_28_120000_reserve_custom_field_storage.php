<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Somewhere for tenant-defined fields to live, reserved before anything needs it.
 *
 * ADDED NOW BECAUSE ADDING IT LATER IS THE EXPENSIVE PART. A nullable column on
 * an empty-ish table is instant; the same column on `clients` at a million rows
 * is a table rewrite on MySQL and a lock somebody schedules a maintenance window
 * around. Reserving it while these tables are small costs nothing and removes a
 * migration from the critical path of actually building the feature.
 *
 * ONE JSON COLUMN, NOT AN EAV TABLE, and that is the decision worth recording.
 * EAV - a row per field per record - is the textbook shape and is wrong for this
 * panel: the list's whole performance argument is a constant query count over
 * 250,000 rows, and EAV turns every custom field into a join or an aggregate. A
 * JSON column travels with the row that owns it, costs nothing when empty, and
 * is indexable on MySQL and Postgres through a generated column when a tenant
 * eventually wants to filter on one.
 *
 * IT IS NOT `fillable`, ANYWHERE. The form layer already drops anything it did
 * not declare, and a JSON column reachable by mass assignment is a way to write
 * arbitrary structure into a record from a crafted request. Whatever eventually
 * writes to this will do so explicitly, from a validated field definition.
 *
 * `users` IS DELIBERATELY EXCLUDED. An account is panel machinery rather than
 * an organisation's own record - its shape is the framework's business, and a
 * tenant adding fields to it would be extending something they do not own.
 */
return new class extends Migration
{
    /**
     * Tenant-owned tables, named explicitly.
     *
     * A LIST RATHER THAN A LOOP OVER EVERY TABLE, because "every table with a
     * tenant_id" would also catch pivots, sessions and the audit trail - none of
     * which anybody should be attaching fields to.
     */
    private const TABLES = ['clients', 'routers', 'plans'];

    public function up(): void
    {
        foreach (self::TABLES as $table) {
            if (! Schema::hasTable($table) || Schema::hasColumn($table, 'custom')) {
                continue;
            }

            Schema::table($table, function (Blueprint $blueprint): void {
                /*
                 * NULLABLE WITH NO DEFAULT. An empty object as the default would
                 * write bytes to every existing row for a feature nobody uses,
                 * and would make "has no custom fields" and "has an empty set"
                 * indistinguishable. Null means the question was never asked.
                 */
                $blueprint->json('custom')->nullable();
            });
        }
    }

    public function down(): void
    {
        foreach (self::TABLES as $table) {
            if (! Schema::hasTable($table) || ! Schema::hasColumn($table, 'custom')) {
                continue;
            }

            Schema::table($table, function (Blueprint $blueprint): void {
                $blueprint->dropColumn('custom');
            });
        }
    }
};
