<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Roadmap 4.3's demonstration state: each organisation's billing
 * preferences, one JSON column on their own row. Null means "the defaults" -
 * see BillingSettingsResource - so existing tenants need no backfill.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('tenants', function (Blueprint $table): void {
            $table->json('billing')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('tenants', function (Blueprint $table): void {
            $table->dropColumn('billing');
        });
    }
};
