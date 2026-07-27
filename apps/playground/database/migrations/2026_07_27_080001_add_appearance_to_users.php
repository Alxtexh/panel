<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Per-user appearance, stored on the ACCOUNT rather than only in the browser.
 *
 * WHY THIS COLUMN EXISTS. The preference lived solely in localStorage, which is
 * scoped to one browser profile on one machine. Signing into the same account
 * from a second browser produced a different theme, because the second browser
 * had never been told — nothing was broken, the setting simply had no way to
 * travel with the account.
 *
 * JSON rather than seven columns: it is a small bag of display settings read
 * and written as a whole, never queried, never filtered on, and it will grow
 * another key every time a setting is added. Seven columns would mean a
 * migration per preference for no benefit.
 *
 * NOT INDEXED, deliberately — nothing ever searches by theme.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table): void {
            $table->json('appearance')->nullable()->after('email_verified_at');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table): void {
            $table->dropColumn('appearance');
        });
    }
};
