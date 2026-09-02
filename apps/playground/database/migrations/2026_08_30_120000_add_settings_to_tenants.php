<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * The setup wizard's own record: localization (timezone, date format,
 * currency) and the demo splash-page choice, one JSON column - same shape as
 * `billing`/`theme_colors`/`features` on this same model. Null means the
 * defaults, so existing tenants need no backfill.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('tenants', function (Blueprint $table): void {
            $table->json('settings')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('tenants', function (Blueprint $table): void {
            $table->dropColumn('settings');
        });
    }
};
