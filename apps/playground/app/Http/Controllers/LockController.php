<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use PanelKit\Panel\Support\PanelHome;
use App\Http\Middleware\EnsurePanelIsUnlocked;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

/**
 * Locking and unlocking the panel.
 *
 * THE PASSWORD CHECK IS THROTTLED, and that is not optional. Without it the
 * unlock form is a password oracle that anybody at the keyboard can hammer -
 * and unlike the login form, they already know the account, so it is a
 * single-factor guess with the username removed. The throttle is on the route.
 *
 * THE REDIRECT TARGET IS THE SESSION'S, NEVER THE REQUEST'S. `intended()` reads
 * a URL the framework stored when the lock kicked in; accepting a `?next=` from
 * the form would make this an open redirect that happens to require a password.
 */
final class LockController extends Controller
{
    /** Lock the panel and send the user to the lock screen. */
    public function lock(Request $request): RedirectResponse
    {
        /*
         * Where they were, remembered before the redirect.
         *
         * Coming back to an empty dashboard is most of why people do not lock
         * their screens - the point is to resume, not to restart.
         */
        $request->session()->put('url.intended', url()->previous());
        $request->session()->put(EnsurePanelIsUnlocked::SESSION_KEY, now()->timestamp);

        return redirect()->route('screens.locked');
    }

    /** Check the password and let them back in. */
    public function unlock(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'password' => ['required', 'string'],
        ]);

        $user = $request->user();

        if ($user === null || ! Hash::check($validated['password'], $user->password)) {
            /*
             * One message, and it says nothing about the account.
             *
             * There is nothing to disclose here that the attacker does not
             * already have - they are looking at the account name on screen -
             * but a message that varied ("no password set", "account locked")
             * would leak state that is none of their business.
             */
            throw ValidationException::withMessages([
                'password' => 'That password is not correct.',
            ]);
        }

        $request->session()->forget(EnsurePanelIsUnlocked::SESSION_KEY);

        /*
         * A new session id on unlock.
         *
         * The lock exists because the machine was left unattended, which is
         * exactly the window in which a session id might have been observed.
         * Regenerating costs nothing and closes it.
         */
        $request->session()->regenerate();

        return redirect()->intended(PanelHome::urlFor(null));
    }
}
