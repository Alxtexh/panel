<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Auth;

use Illuminate\Auth\Events\Login;
use Illuminate\Support\Facades\DB;

/**
 * How many places one account may be signed in at once.
 *
 * THE OLDEST SESSION IS ENDED, NOT THE NEW ONE. Refusing the login instead
 * sounds equivalent and is much worse in practice: the person is at the keyboard
 * NOW, and the session blocking them is one they cannot reach - a laptop at the
 * office, a phone that was reset, a browser that was closed without signing out.
 * They would be locked out by their own past self with no way to fix it.
 *
 * Ending the oldest means the person in front of the machine always gets in, and
 * a shared credential becomes obvious rather than convenient: two people using
 * one account take turns being logged out.
 *
 * OFF BY DEFAULT, and that is deliberate. A limit is a policy decision with real
 * consequences for people who legitimately use a laptop, a desktop and a phone -
 * and a framework that imposes one silently would have every installation
 * discover it as a bug report.
 *
 * IT NEEDS A SERVER-SIDE SESSION STORE. With the `cookie` driver there is no
 * record of who is signed in anywhere, so there is nothing to count and nothing
 * to end. Rather than fail or pretend, it does nothing - and `panel:doctor`
 * reports the combination, because a configured limit that cannot work is worse
 * than no limit at all.
 */
final class EnforceSessionLimit
{
    public function handle(Login $event): void
    {
        $limit = (int) config('panel.security.max_sessions', 0);

        if ($limit < 1) {
            return;
        }

        // See the class note: nothing to count without a stored session.
        if (config('session.driver') !== 'database') {
            return;
        }

        $table = config('session.table', 'sessions');

        if (! DB::getSchemaBuilder()->hasTable($table)) {
            return;
        }

        $userId = $event->user->getAuthIdentifier();

        /*
         * The CURRENT session is excluded from the count and can never be the
         * one ended. It has usually just been written, so by `last_activity` it
         * is the newest - but ordering is not a guarantee, and being logged out
         * by one's own login is the exact failure this class exists to avoid.
         */
        $current = session()->getId();

        $surplus = DB::table($table)
            ->where('user_id', $userId)
            ->where('id', '!=', $current)
            ->orderByDesc('last_activity')
            // Keep `limit - 1` others; this session is the remaining one.
            ->skip(max(0, $limit - 1))
            ->take(PHP_INT_MAX)
            ->pluck('id');

        if ($surplus->isEmpty()) {
            return;
        }

        DB::table($table)->whereIn('id', $surplus->all())->delete();
    }
}
