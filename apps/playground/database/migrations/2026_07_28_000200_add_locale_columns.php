<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Language, on the person and on the organisation.
 *
 * BOTH, IN THAT ORDER OF PRECEDENCE. The organisation's choice is the sensible
 * default for everybody who has not expressed one; the person's overrides it,
 * because somebody working in Arabic at an English-speaking ISP should see
 * Arabic and nobody else should be affected by that.
 *
 * NULLABLE ON BOTH, and null means "inherit". A column defaulted to `'en'` would
 * make every existing row an explicit English preference, so an organisation
 * switching language would leave every existing colleague behind - silently, and
 * looking exactly like the switch had not worked.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table): void {
            $table->string('locale', 12)->nullable()->after('appearance');
        });

        Schema::table('tenants', function (Blueprint $table): void {
            $table->string('locale', 12)->nullable()->after('slug');
        });
    }

    public function down(): void
    {
        Schema::table('users', fn (Blueprint $table) => $table->dropColumn('locale'));
        Schema::table('tenants', fn (Blueprint $table) => $table->dropColumn('locale'));
    }
};
