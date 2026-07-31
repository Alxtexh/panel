<?php

declare(strict_types=1);

namespace App\Listeners;

use App\Models\User;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use PanelKit\Panel\Auth\Impersonation;

/**
 * When somebody last signed in, and from where.
 *
 * THE USERS LIST USED TO SHOW "JOINED", which is a fact that stops being
 * interesting the week after it happens. What an operator scans that screen for
 * is who is still using the panel: which accounts to revoke, who to chase,
 * whether an invitation was ever taken up. That is the last sign-in.
 *
 * IMPERSONATION IS NOT A SIGN-IN, and this is the whole reason the listener is
 * more than one line. `Impersonation::start()` calls `auth()->login($target)`,
 * which fires this exact event - so without the guard, every time an operator
 * opened a customer's screen the panel would record that the CUSTOMER had just
 * signed in. Nothing would look wrong; the column would simply be a lie, on the
 * one screen somebody reads to decide whether an account is still in use, and
 * in an investigation into who was online when something happened.
 *
 * The return leg is suppressed too: the operator did not sign in again, they
 * stopped wearing somebody else.
 *
 * WRITTEN WITHOUT TOUCHING `updated_at`. A sign-in is not an edit of the
 * account, and letting it move the timestamp would make "changed recently" -
 * which the audit screens and sync jobs read - mean "logged in recently"
 * instead.
 */
final class RecordLastLogin
{
    public function __construct(private readonly Request $request) {}

    public function handle(Login $event): void
    {
        if (Impersonation::isSwitching()) {
            return;
        }

        $user = $event->user;

        if (! $user instanceof User) {
            return;
        }

        /*
         * A DIRECT UPDATE rather than `save()`, so this cannot fire model
         * events, cannot trip the audit recorder into logging a sign-in as an
         * edit, and cannot collide with an unsaved change somebody else holds
         * on the same instance.
         *
         * `toBase()` IS LOAD-BEARING, not tidiness. Eloquent's `update()` adds
         * `updated_at` to every write, so without this a sign-in would touch
         * the account's modified timestamp - and "changed recently", which the
         * audit screens and sync jobs read, would quietly come to mean "signed
         * in recently". The test asserting `updated_at` is unmoved is what
         * caught it.
         */
        User::query()->withoutGlobalScopes()
            ->whereKey($user->getKey())
            ->toBase()
            ->update([
                'last_login_at' => now(),
                'last_login_ip' => $this->request->ip(),
            ]);
    }
}
