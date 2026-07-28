<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Which tenants have a database of their own.
 *
 * WITHOUT THIS COLUMN, HYBRID TENANCY CANNOT SURVIVE A REQUEST. `TenantContext`
 * decides a tenant is database-isolated when `getInternal('db_name')` is set,
 * and this model kept internal keys in a plain array for the lifetime of the
 * instance - which is fine for the bootstrappers that write them mid-request,
 * and useless for the question "is THIS tenant database-isolated?", asked on a
 * tenant just loaded from the central connection.
 *
 * So every tenant answered "no" on every fresh request, and hybrid mode silently
 * degraded to column mode for all of them. Stage 5's tests did not catch it
 * because they call `setInternal()` in-process, which proves the CHECK is right
 * and never proves a tenant can be in database mode at all.
 *
 * Nullable is the whole point: null means "shared database, scoped by column",
 * which is what most tenants are and what a tenant created by the ordinary path
 * gets. Unique because two tenants pointing at one database is the exact
 * scenario database isolation exists to prevent, and a constraint is a better
 * place to find that out than a support ticket.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('tenants', function (Blueprint $table): void {
            $table->string('tenancy_db_name')->nullable()->unique()->after('slug');
        });
    }

    public function down(): void
    {
        Schema::table('tenants', function (Blueprint $table): void {
            $table->dropColumn('tenancy_db_name');
        });
    }
};
