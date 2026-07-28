<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Identity becomes per-tenant, which is what hostname tenancy requires.
 *
 * THE THREE FACTS THAT BLOCKED IT, found by inspection before any code:
 *
 *   1. `users.email` was globally UNIQUE, so one person could not hold accounts
 *      at two organisations - the second signup collided on an index. That is
 *      fine while everybody shares one login page and impossible once each
 *      tenant has its own, because "the same person administers two ISPs" is an
 *      ordinary fact that the schema forbade.
 *
 *   2. `password_reset_tokens.email` was the PRIMARY KEY, so a reset token was
 *      global to an address. Two tenants could not have a pending reset for the
 *      same person, and the second request silently overwrote the first.
 *
 * Both become unique per `(tenant_id, email)` instead. The pair is still unique,
 * so nothing about a single organisation changes; what changes is that the
 * organisation is now part of the identity.
 *
 * THE AUTH LOOKUP MUST THEN CARRY A TENANT. That is the other half of this
 * change and it lives in the user provider - an email alone no longer identifies
 * anybody, so a login form that does not know its tenant can no longer resolve
 * one. Which is precisely the property that makes a per-tenant login page real
 * rather than cosmetic.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table): void {
            $table->dropUnique(['email']);
            $table->unique(['tenant_id', 'email']);
        });

        /*
         * REBUILT rather than altered. The email column is the primary key, and
         * dropping a primary key is the one schema change SQLite will not do in
         * place - so the table is recreated with the key it should have had.
         * Losing in-flight reset tokens is acceptable: they expire in an hour
         * and the person simply asks again.
         */
        Schema::dropIfExists('password_reset_tokens');

        Schema::create('password_reset_tokens', function (Blueprint $table): void {
            $table->foreignId('tenant_id')->nullable()->constrained()->cascadeOnDelete();
            $table->string('email');
            $table->string('token');
            $table->timestamp('created_at')->nullable();

            $table->primary(['tenant_id', 'email']);
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table): void {
            $table->dropUnique(['tenant_id', 'email']);
            $table->unique(['email']);
        });

        Schema::dropIfExists('password_reset_tokens');

        Schema::create('password_reset_tokens', function (Blueprint $table): void {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });
    }
};
