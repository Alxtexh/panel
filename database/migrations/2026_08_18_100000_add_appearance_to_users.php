<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Per-user appearance, stored on the account rather than only in the browser.
 *
 * JSON rather than seven columns: it is a small bag of display settings,
 * never queried, and it grows a key when a setting is added. Skips when the
 * host already has the column (playground) or has no `users` table.
 */
return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('users') || Schema::hasColumn('users', 'appearance')) {
            return;
        }

        Schema::table('users', function (Blueprint $table): void {
            $table->json('appearance')->nullable();
        });
    }

    public function down(): void
    {
        if (! Schema::hasTable('users') || ! Schema::hasColumn('users', 'appearance')) {
            return;
        }

        Schema::table('users', function (Blueprint $table): void {
            $table->dropColumn('appearance');
        });
    }
};
