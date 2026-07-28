<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Magic-link tokens, kept apart from password resets on purpose.
 *
 * THE TWO GRANT DIFFERENT THINGS. A password reset lets somebody CHANGE a
 * credential and still requires them to choose a new one; a magic link IS the
 * credential - redeeming it signs you straight in. Sharing one table would mean
 * one expiry window, one throttle and one audit story for two acts with quite
 * different consequences, and the more dangerous one would inherit the settings
 * chosen for the milder one.
 *
 * TENANT-SCOPED, because `users.email` is only unique per tenant now. Without
 * the tenant in the key, issuing a link to an address that exists at two
 * organisations would overwrite one with the other - and redeeming it would sign
 * the person into whichever row was found first.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('magic_login_tokens', function (Blueprint $table): void {
            $table->foreignId('tenant_id')->nullable()->constrained()->cascadeOnDelete();
            $table->string('email');
            // The HASH, never the token. See OneTimeCredential.
            $table->string('token');
            $table->timestamp('created_at')->nullable();

            $table->primary(['tenant_id', 'email']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('magic_login_tokens');
    }
};
