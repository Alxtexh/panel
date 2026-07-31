<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * When each person last signed in.
 *
 * "JOINED" IS THE WRONG QUESTION ON A USER LIST. The date somebody's account
 * was created stops being interesting the week after it happens; what an
 * operator actually scans this screen for is who is still using the panel -
 * which accounts to revoke, who to chase, whether an invitation was ever taken
 * up. That is the last sign-in, and nothing was recording it.
 *
 * THE ADDRESS COMES WITH IT because "when" alone leaves the more useful half of
 * the question unanswered. An administrator whose last sign-in was from an
 * address nobody recognises is the entire reason to keep this column, and
 * pairing them costs one more field.
 *
 * NULLABLE, AND NULL MEANS NEVER. Every account that exists when this runs has
 * signed in zero times as far as this column can know - backfilling from
 * `created_at` would invent a sign-in that did not happen, on the exact column
 * somebody would later use to justify revoking an account.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table): void {
            $table->timestamp('last_login_at')->nullable()->after('password_changed_at');

            /*
             * 45 CHARACTERS: an IPv6 address is up to 39, and 45 covers the
             * IPv4-mapped form (`::ffff:192.168.0.1`) that a dual-stack proxy
             * hands over. The usual 39 truncates those silently.
             */
            $table->string('last_login_ip', 45)->nullable()->after('last_login_at');

            // The list sorts on it, and "who has not been here for a while" is
            // the query this column exists to answer.
            $table->index(['tenant_id', 'last_login_at']);
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table): void {
            $table->dropIndex(['tenant_id', 'last_login_at']);
            $table->dropColumn(['last_login_at', 'last_login_ip']);
        });
    }
};
