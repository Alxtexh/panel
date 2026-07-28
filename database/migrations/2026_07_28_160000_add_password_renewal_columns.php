<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * When a password was last set, and the ones it may not be set back to.
 *
 * `password_changed_at` IS NULLABLE AND STAYS NULL FOR EXISTING ACCOUNTS. The
 * tempting backfill is `created_at`, and it is wrong in the direction that
 * matters: an installation switching this on would find every account older than
 * the policy immediately expired, and everybody locked into a change-password
 * screen at once - including whoever needs to turn the policy back off. A null
 * means "not known", which `PasswordPolicy` treats as "not yet due" rather than
 * as "overdue since the beginning of time".
 *
 * `password_history` HOLDS HASHES, NOT PASSWORDS. It exists so a renewal cannot
 * be satisfied by setting the same password again, which is what people do when
 * a policy nags them - and a policy that only forces motion produces
 * `Summer2024!` becoming `Summer2025!` and nothing else. Hashes, because storing
 * anything reversible here would turn a routine table into the most valuable one
 * in the database.
 *
 * IT IS BOUNDED, and the bound is enforced when writing rather than here. A
 * column that grows forever is a row that eventually will not fit.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table): void {
            $table->timestamp('password_changed_at')->nullable()->after('password');

            /*
             * JSON rather than a side table, because it is read and written only
             * with the row it belongs to, is never queried across users, and is
             * bounded to a handful of entries. A table would be a join and a
             * cascade for a list that is always fetched whole.
             */
            $table->json('password_history')->nullable()->after('password_changed_at');

            /*
             * A FORCED CHANGE THAT IS NOT ABOUT AGE.
             *
             * An administrator resetting somebody's password, or a suspected
             * compromise, has to be able to demand a change on the next sign-in
             * regardless of how recently the current one was set. Folding that
             * into the age column - by backdating it - would work and would be
             * a lie in a column somebody else reads.
             */
            $table->boolean('must_change_password')->default(false)->after('password_history');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table): void {
            $table->dropColumn(['password_changed_at', 'password_history', 'must_change_password']);
        });
    }
};
