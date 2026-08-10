<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Concerns\PasswordValidationRules;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Alxtexh\Panel\Auth\PasswordPolicy;
use Alxtexh\Panel\Support\PanelHome;

/**
 * The one screen somebody with an expired password can still open.
 *
 * SEPARATE FROM THE SECURITY SETTINGS PAGE, and the separation is the point.
 * That screen sits behind `RequirePassword`, renders two-factor setup, passkeys
 * and signed-in devices, and is reached through the settings navigation - none
 * of which is available to somebody who has just been stopped at the door. This
 * one asks for two things and does nothing else.
 *
 * IT IS EXEMPT FROM THE MIDDLEWARE THAT SENDS PEOPLE HERE. That exemption is the
 * whole feature: a renewal rule applied uniformly includes the screen that
 * satisfies it, and the result is a loop with no error and no way out.
 *
 * IT DOES NOT NEED THE CURRENT PASSWORD TO BE CONFIRMED SEPARATELY, because the
 * form already asks for it. Layering `RequirePassword` on top would ask for the
 * same secret twice on consecutive screens, which teaches people to type it
 * without reading - the opposite of what a confirmation is for.
 */
final class PasswordRenewalController extends Controller
{
    use PasswordValidationRules;

    public function edit(Request $request): Response
    {
        $policy = PasswordPolicy::fromConfig();
        $user = $request->user();

        return Inertia::render('auth/RenewPassword', [
            /*
             * WHY THEY ARE HERE, in their own words rather than as a rule. "Your
             * password has expired" and "an administrator asked you to change
             * it" are different situations, and somebody who reads the wrong one
             * goes looking for a problem that does not exist.
             */
            'reason' => $user?->getAttribute('must_change_password')
                ? 'requested'
                : 'expired',
            'maxAgeDays' => $policy->maxAgeDays(),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => $this->currentPasswordRules(),
            'password' => $this->passwordRules(),
        ]);

        $user = $request->user();
        $policy = PasswordPolicy::fromConfig();

        /*
         * REUSE IS REFUSED HERE, not in the validation rules, because the check
         * needs the user and the rule set does not have one. It is the part of
         * this feature worth having whatever the expiry is set to: a renewal
         * satisfied by re-entering the same password changed nothing while
         * recording that it did.
         */
        if ($policy->isReused($user, $validated['password'])) {
            throw ValidationException::withMessages([
                'password' => 'That is one of your recent passwords. Choose a different one.',
            ]);
        }

        /*
         * RECORDED BEFORE THE SAVE, so `getOriginal` still holds the hash being
         * replaced. Doing it afterwards pushes the NEW password onto the history
         * and immediately refuses it as reused - a bug that looks like the
         * feature working.
         */
        $policy->recordChange($user);

        $user->forceFill(['password' => $validated['password']])->save();

        /*
         * THE SESSION IS REGENERATED. A password change is a credential change,
         * and the session id that existed before it should not survive it -
         * that is the same reason impersonation regenerates on both transitions.
         */
        $request->session()->regenerate();

        return redirect()->intended(PanelHome::urlFor(null))->with('toast', [
            'type' => 'success',
            'message' => 'Password changed.',
        ]);
    }
}
