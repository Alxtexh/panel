<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Which guard a connected account belongs to.
 *
 * WITHOUT THIS COLUMN THE TABLE WAS AMBIGUOUS, and the ambiguity authenticated
 * people. `user_id` is an integer with no statement of which table it indexes,
 * and a panel may run any guard - so a row written while signed in to a
 * customer portal (`customers` -> `Customer`) matched a lookup performed on the
 * operator panel (`web` -> `User`), and `Auth::guard('web')->login()` was handed
 * whatever `User` happened to hold that id.
 *
 * The same collision made the security screen list, and let anybody delete,
 * another guard's connected accounts: the ownership test was `user_id === id`
 * with nothing saying which population that id came from.
 *
 * BACKFILLED WITH THE DEFAULT GUARD, because that is what every existing row
 * means. Before this column, the lookup model was hardcoded to
 * `auth.providers.users.model` - the default guard's provider - so rows already
 * in the table were written against exactly that.
 *
 * NOT NULLABLE AFTERWARDS. A null guard is the ambiguity this removes, and a
 * lookup that has to decide what null means would reintroduce it.
 */
return new class extends Migration
{
    private function table(): string
    {
        return (string) config('panel.auth.social.table', 'connected_accounts');
    }

    public function up(): void
    {
        $table = $this->table();

        if (! Schema::hasTable($table) || Schema::hasColumn($table, 'guard')) {
            return;
        }

        Schema::table($table, function (Blueprint $blueprint): void {
            $blueprint->string('guard', 40)->nullable()->after('user_id');
        });

        DB::table($table)->whereNull('guard')->update([
            'guard' => (string) config('auth.defaults.guard', 'web'),
        ]);

        Schema::table($table, function (Blueprint $blueprint): void {
            $blueprint->string('guard', 40)->nullable(false)->change();

            /*
             * A PROVIDER ACCOUNT MAY EXIST ONCE PER GUARD, not once in total.
             * One person legitimately holds an operator account and a customer
             * account and may connect the same Google identity to both; what
             * must not happen is one of those matching a sign-in on the other's
             * portal.
             */
            $blueprint->unique(['provider', 'provider_id', 'guard'], 'connected_accounts_identity_unique');
        });
    }

    public function down(): void
    {
        $table = $this->table();

        if (! Schema::hasTable($table) || ! Schema::hasColumn($table, 'guard')) {
            return;
        }

        Schema::table($table, function (Blueprint $blueprint): void {
            $blueprint->dropUnique('connected_accounts_identity_unique');
            $blueprint->dropColumn('guard');
        });
    }
};
