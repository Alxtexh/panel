<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * An expiry, so this table can also hold installation STATE and not just settings.
 *
 * THE CACHE TURNED OUT TO BE THE WRONG PLACE FOR STATE THAT IS NOT TENANT
 * SCOPED. `CacheTenancyBootstrapper` prefixes every key with the current tenant
 * - correctly, so a memoized count cannot reach the wrong organisation - which
 * means anything written without a tenant is invisible when read with one.
 * Nothing errors: the read returns null and the caller concludes it never
 * happened. The scheduler heartbeat reported a healthy cron as dead, and the
 * lock that stops two backups running at once was per-tenant, so two
 * organisations could each hold "the" lock at the same moment.
 *
 * A SETTING HAS NO EXPIRY AND STATE DOES, which is the only difference between
 * the two uses - so one nullable column carries both rather than a second table
 * with the same three fields and a different name.
 *
 * NULLABLE MEANS FOREVER, which is what every existing row means already.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('panel_settings', function (Blueprint $table): void {
            $table->timestamp('expires_at')->nullable()->after('value');

            /*
             * Indexed, because the only query that reads it is the lazy sweep -
             * "is this row past its expiry" - which runs on every lock
             * acquisition.
             */
            $table->index('expires_at');
        });
    }

    public function down(): void
    {
        Schema::table('panel_settings', function (Blueprint $table): void {
            $table->dropIndex(['expires_at']);
            $table->dropColumn('expires_at');
        });
    }
};
