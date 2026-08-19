<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Email OTP as an MFA factor. Null means off.
 *
 * Skips when the host already has the column or has no `users` table.
 */
return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('users') || Schema::hasColumn('users', 'email_two_factor_confirmed_at')) {
            return;
        }

        Schema::table('users', function (Blueprint $table): void {
            $table->timestamp('email_two_factor_confirmed_at')->nullable();
        });
    }

    public function down(): void
    {
        if (! Schema::hasTable('users') || ! Schema::hasColumn('users', 'email_two_factor_confirmed_at')) {
            return;
        }

        Schema::table('users', function (Blueprint $table): void {
            $table->dropColumn('email_two_factor_confirmed_at');
        });
    }
};
