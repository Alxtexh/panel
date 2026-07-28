<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * An UPLOADED logo, alongside the existing linked one.
 *
 * `logo_url` and `logo_path` are two different things and neither replaces the
 * other. A URL points at somebody else's server: it is free to store, it costs
 * nothing to serve, and it breaks when that server changes. A path points at a
 * file this panel holds, which is what an organisation uploading its own logo
 * actually wants and the only version that keeps working.
 *
 * The path wins when both are set, because an upload is a deliberate act and a
 * URL is often left over from whatever seeded the row.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('tenants', function (Blueprint $table): void {
            $table->string('logo_path')->nullable()->after('logo_url');
        });
    }

    public function down(): void
    {
        Schema::table('tenants', function (Blueprint $table): void {
            $table->dropColumn('logo_path');
        });
    }
};
