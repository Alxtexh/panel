<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Mail\AuthCodeMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use PanelKit\Panel\Auth\OneTimeCredential;
use PanelKit\Panel\Support\TenantContext;

/**
 * Passwordless sign-in by emailed link.
 *
 * OFF BY DEFAULT, AND THAT IS THE MOST IMPORTANT LINE IN THIS FILE. A magic link
 * makes the mailbox a complete account takeover path: anybody who can read the
 * email is that person, with nothing between them and a session. No password, no
 * second factor. That is a legitimate trade for some audiences and a bad one for
 * most, so it is a decision an installation makes rather than a default it
 * inherits.
 *
 * IT NEVER SAYS WHETHER THE ADDRESS EXISTS. The response is identical for a
 * known and an unknown address, because the alternative turns this endpoint into
 * a way to enumerate who works at an organisation - and unlike a login form,
 * this one needs no password to probe with.
 *
 * THE TENANT COMES FROM THE HOST. `users.email` is unique per tenant now, so an
 * address alone does not identify anybody; a link issued on one organisation's
 * host signs you into that organisation and no other.
 */
final class MagicLinkController extends Controller
{
    private const TABLE = 'magic_login_tokens';

    public function request(Request $request): RedirectResponse
    {
        abort_unless(config('panel.auth.magic_link'), 404);

        $validated = $request->validate(['email' => ['required', 'email']]);

        $tenant = app(TenantContext::class)->currentKey();

        $user = User::query()
            ->when($tenant !== null, fn ($q) => $q->where('tenant_id', $tenant))
            ->where('email', $validated['email'])
            ->first();

        /*
         * THE WORK HAPPENS ONLY FOR A REAL USER, but the RESPONSE is the same
         * either way. Sending nothing is invisible to the requester and is the
         * only correct behaviour for an address that does not exist here.
         */
        if ($user !== null) {
            $token = $this->credential()->issue($validated['email'], $tenant, numeric: false);

            $url = URL::temporarySignedRoute(
                'magic-link.consume',
                now()->addMinutes((int) config('panel.auth.magic_link_lifetime', 10)),
                ['email' => $validated['email'], 'token' => $token],
            );

            Mail::to($user->email)->send(new AuthCodeMail(
                heading: 'Sign in to '.($user->tenant?->name ?? 'your account'),
                body: $url."\n\nThis link works once and expires shortly.",
                subjectLine: 'Your sign-in link',
            ));
        }

        return back()->with('status', 'If that address has an account here, a sign-in link is on its way.');
    }

    /**
     * Redeem the link.
     *
     * TWO INDEPENDENT CHECKS, and both are required. The signed URL proves the
     * link was issued by this application and has not been tampered with or
     * expired; the stored credential proves it has not already been used. A
     * signature alone is replayable until it expires, which for a sign-in link
     * is exactly the window an attacker with mailbox access wants.
     */
    public function consume(Request $request): RedirectResponse
    {
        abort_unless(config('panel.auth.magic_link'), 404);
        abort_unless($request->hasValidSignature(), 401);

        $email = (string) $request->query('email');
        $tenant = app(TenantContext::class)->currentKey();

        if (! $this->credential()->redeem($email, $tenant, (string) $request->query('token'))) {
            return redirect()->route('login')
                ->withErrors(['email' => 'That sign-in link has already been used or has expired.']);
        }

        $user = User::query()
            ->when($tenant !== null, fn ($q) => $q->where('tenant_id', $tenant))
            ->where('email', $email)
            ->first();

        if ($user === null) {
            return redirect()->route('login')->withErrors(['email' => 'That link is no longer valid.']);
        }

        auth()->login($user);

        /*
         * A NEW SESSION ID on sign-in, always. Without it a session fixed before
         * authentication stays valid after it, which is the classic fixation
         * attack - and a magic link is the easiest place to plant one, because
         * the attacker chooses the URL the victim clicks.
         */
        $request->session()->regenerate();

        return redirect()->intended('/dashboard');
    }

    private function credential(): OneTimeCredential
    {
        return new OneTimeCredential(
            self::TABLE,
            (int) config('panel.auth.magic_link_lifetime', 10),
        );
    }
}
