<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * A sign-in provider somebody has attached to their account.
 *
 * ONE ROW IS AN ASSERTION OF IDENTITY AND NOTHING ELSE. It says "the Google
 * account with this id is this person" - which is all that signing in needs.
 *
 * NO TOKENS ARE STORED, deliberately. An access or refresh token is a
 * credential for somebody's mailbox, calendar or repositories, and keeping one
 * turns a panel database leak into a breach of every service they connected.
 * The panel does not act on their behalf at those providers, so it has no use
 * for the token past the moment it verifies who they are - and a credential you
 * do not keep cannot be stolen from you.
 *
 * THE UNIQUE KEY IS (provider, provider_id), not provider alone: one person may
 * hold several accounts at one provider, and two people must never resolve to
 * the same one. Without it, a second user linking the same Google account would
 * quietly make sign-in ambiguous - and the winner would be whichever row the
 * database returned first.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('connected_accounts', function (Blueprint $table): void {
            $table->id();

            $table->foreignId('user_id')->constrained()->cascadeOnDelete();

            $table->string('provider', 40);
            $table->string('provider_id');

            /*
             * SHOWN BACK TO THE PERSON so they can tell two Google accounts
             * apart on the settings screen. Not used for matching, ever: an
             * email at the provider can change, and matching on it after the
             * link is made would let a changed address move the account.
             */
            $table->string('email')->nullable();
            $table->string('nickname')->nullable();
            $table->string('avatar_url')->nullable();

            $table->timestamp('last_used_at')->nullable();
            $table->timestamps();

            $table->unique(['provider', 'provider_id']);
            $table->index(['user_id', 'provider']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('connected_accounts');
    }
};
