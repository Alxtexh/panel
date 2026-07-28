<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Mail\AuthCodeMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rules\Password;
use PanelKit\Panel\Auth\OneTimeCredential;
use PanelKit\Panel\Support\TenantContext;

/**
 * Resetting a password with a short numeric code instead of a link.
 *
 * BOTH ARE OFFERED BECAUSE THE RIGHT ANSWER DEPENDS ON THE AUDIENCE, not on
 * which is better in the abstract, and `panel.auth.password_reset` is how an
 * installation says which. A link is fewer steps, and fails badly wherever mail
 * is read on a different device from the browser - which is ordinary on shared
 * office machines, and exactly the situation an ISP back office is in. A code
 * survives that, and is easier to phish, because somebody can be talked into
 * reading six digits down a phone.
 *
 * NEITHER IS THE SAFE CHOICE. They fail differently, which is the whole reason
 * the decision belongs to whoever knows the people using it.
 *
 * THE CODE IS SHORT, SO THE THROTTLE IS THE SECURITY. Six digits is a million
 * possibilities, which is nothing to a script; what makes it safe is that the
 * routes limit attempts and the credential is deleted on first successful use.
 * A long code nobody can type is not a better answer - it just becomes a link.
 */
final class OtpPasswordResetController extends Controller
{
    private const TABLE = 'password_reset_tokens';

    /** Email a code, saying nothing about whether the address exists. */
    public function send(Request $request): RedirectResponse
    {
        $this->abortUnlessOtpMode();

        $validated = $request->validate(['email' => ['required', 'email']]);

        $tenant = app(TenantContext::class)->currentKey();
        $user = $this->find($validated['email'], $tenant);

        if ($user !== null) {
            $code = $this->credential()->issue($validated['email'], $tenant);

            Mail::to($user->email)->send(new AuthCodeMail(
                heading: 'Your password reset code is '.$code,
                body: 'It expires in '.config('panel.auth.otp_lifetime', 10).' minutes and works once.',
                subjectLine: 'Your password reset code',
            ));
        }

        return back()->with('status', 'If that address has an account here, a code is on its way.');
    }

    /**
     * Verify the code and set the new password.
     *
     * THE CODE IS SPENT BEFORE THE PASSWORD RULES ARE APPLIED - deliberately.
     * Validating the password first would let somebody test codes for free by
     * submitting a deliberately invalid password: the request fails validation,
     * the code is never consumed, and they try the next one. Redeeming first
     * means every attempt costs a code.
     */
    public function reset(Request $request): RedirectResponse
    {
        $this->abortUnlessOtpMode();

        $validated = $request->validate([
            'email' => ['required', 'email'],
            'code' => ['required', 'string'],
            'password' => ['required', 'confirmed', Password::default()],
        ]);

        $tenant = app(TenantContext::class)->currentKey();

        if (! $this->credential()->redeem($validated['email'], $tenant, $validated['code'])) {
            return back()->withErrors(['code' => 'That code is wrong, already used, or expired.']);
        }

        $user = $this->find($validated['email'], $tenant);

        if ($user === null) {
            return back()->withErrors(['email' => 'That code is no longer valid.']);
        }

        $user->forceFill([
            'password' => Hash::make($validated['password']),
            /*
             * REMEMBER-ME TOKENS ARE INVALIDATED. A password reset is very often
             * a response to a suspected compromise, and leaving the old token
             * alive means whoever prompted the reset stays signed in on their
             * own machine - which is the one outcome the person resetting
             * assumes cannot happen.
             */
            'remember_token' => null,
        ])->save();

        return redirect()->route('login')
            ->with('status', 'Your password has been reset. You can sign in now.');
    }

    private function find(string $email, int|string|null $tenant): ?User
    {
        return User::query()
            ->when($tenant !== null, fn ($q) => $q->where('tenant_id', $tenant))
            ->where('email', $email)
            ->first();
    }

    /** A 404 rather than a 403: in link mode these routes do not exist. */
    private function abortUnlessOtpMode(): void
    {
        abort_unless(config('panel.auth.password_reset') === 'otp', 404);
    }

    private function credential(): OneTimeCredential
    {
        return new OneTimeCredential(self::TABLE, (int) config('panel.auth.otp_lifetime', 10));
    }
}
