<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use PanelKit\Panel\Auth\SocialProviders;
use PanelKit\Panel\Models\ConnectedAccount;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Support\PanelHome;
use Symfony\Component\HttpFoundation\RedirectResponse as SymfonyRedirect;

/**
 * Signing in with Google or GitHub, and attaching one to an existing account.
 *
 * THIS PANEL DOES NOT CREATE ACCOUNTS FROM A SOCIAL CALLBACK, and that is the
 * decision the rest of the file follows from. Operators are INVITED: an account
 * carries a tenant and a role, and neither is knowable from "somebody signed in
 * with Google". A callback that matched nobody could only produce a user with
 * no organisation and no permissions - a person who is signed in and can see
 * nothing, which reads as a broken panel rather than as a refusal. So an
 * unrecognised provider account is turned away with a sentence explaining what
 * to do instead.
 *
 * THE TAKEOVER THIS AVOIDS. The tempting shortcut is to match the provider's
 * email against `users.email` and sign that person in. That is safe exactly
 * when the provider proves the address belongs to whoever is holding it, and a
 * catastrophe when it does not: at a provider that lets anybody claim any
 * address, an attacker registers with the address of an administrator here and
 * signs in as them. Two conditions therefore both have to hold - see
 * `SocialProviders::verifiesEmail()` and the verification check below - and a
 * provider added later starts untrusted.
 *
 * LINKING WHILE SIGNED IN IS THE OTHER ROUTE, and it needs none of that: the
 * person has already proved who they are with a password, so the provider only
 * has to say which account at ITS end is theirs.
 */
final class SocialLoginController extends Controller
{
    /*
     * MOVED FROM THE REFERENCE APP, with three things generalised and nothing
     * else touched: the user model comes from `auth.providers.users.model`, the
     * guard and the landing page come from the PANEL, and the settings screen it
     * returns to is config rather than a literal. Every judgement above - no
     * account creation, the takeover the email match avoids, tokens never
     * stored - is the demo's and is why this was worth moving rather than
     * rewriting.
     *
     * SOCIALITE IS A SOFT DEPENDENCY. The routes are registered only where a
     * provider has credentials, and `Socialite` is referenced only inside those
     * actions - so an installation without the package pays nothing and sees
     * no buttons.
     */
    private function users(): Builder
    {
        $model = (string) config('auth.providers.users.model', 'App\\Models\\User');

        return $model::query();
    }

    /** Where a signed-in person lands, which is the panel's home. */
    private function home(): string
    {
        return PanelHome::urlFor(app(PanelManager::class)->currentPanel());
    }

    /** Where a link attempt returns to - the security screen, named in config. */
    private function securityUrl(): string
    {
        return (string) config('panel.auth.social.settings_url', '/settings/security');
    }

    /** Where a refused sign-in returns to. */
    private function loginUrl(): string
    {
        $panel = app(PanelManager::class)->currentPanel();

        foreach ([$panel?->id.'.login', 'login'] as $name) {
            if ($name !== '.login' && app('router')->has($name)) {
                return route($name);
            }
        }

        return '/login';
    }

    /** Off to the provider. */
    public function redirect(Request $request, string $provider): SymfonyRedirect|RedirectResponse
    {
        abort_unless(SocialProviders::isEnabled($provider), 404);

        /*
         * WHY WE ARE GOING IS REMEMBERED HERE rather than inferred on the way
         * back. The callback is the same URL either way, and "was this a
         * sign-in or somebody attaching a second account" changes what a match
         * against another user MEANS - refuse, or hand them somebody else's
         * account.
         */
        $request->session()->put('social.intent', Auth::guard($this->guard())->check() ? 'link' : 'login');

        return Socialite::driver($provider)->redirect();
    }

    /** And back again. */
    public function callback(Request $request, string $provider): RedirectResponse
    {
        abort_unless(SocialProviders::isEnabled($provider), 404);

        $intent = $request->session()->pull('social.intent', 'login');

        try {
            $account = Socialite::driver($provider)->user();
        } catch (\Throwable) {
            /*
             * A FAILED EXCHANGE IS NOT AN ERROR PAGE. It happens when somebody
             * presses back, denies consent, or lets the request go stale, and
             * none of those deserve a stack trace - they deserve the screen
             * they were trying to reach.
             */
            return $this->back($intent, 'That sign-in was not completed.');
        }

        $existing = ConnectedAccount::query()
            ->where('provider', $provider)
            ->where('provider_id', (string) $account->getId())
            ->first();

        return $intent === 'link'
            ? $this->link($request, $provider, $account, $existing)
            : $this->login($provider, $account, $existing);
    }

    /** Detach a provider from the signed-in account. */
    public function destroy(Request $request, ConnectedAccount $connectedAccount): RedirectResponse
    {
        /*
         * OWNERSHIP IS CHECKED, not assumed from the id in the URL. The route is
         * behind `auth`, which proves somebody is signed in and says nothing
         * about whose row this is.
         */
        abort_unless($connectedAccount->user_id === $request->user($this->guard())?->getAuthIdentifier(), 403);

        $label = SocialProviders::label($connectedAccount->provider);

        $connectedAccount->delete();

        return back()->with('status', "{$label} is no longer connected.");
    }

    /* ------------------------------------------------------------ the paths */

    private function login(string $provider, mixed $account, ?ConnectedAccount $existing): RedirectResponse
    {
        if ($existing !== null) {
            $existing->forceFill(['last_used_at' => now()])->save();

            Auth::guard($this->guard())->login($existing->user);

            return redirect()->intended($this->home());
        }

        $user = $this->matchByVerifiedEmail($provider, $account);

        if ($user === null) {
            return $this->back('login',
                'No account here is connected to that '.SocialProviders::label($provider)
                .' account. Sign in with your password first, then connect it from '
                .'your security settings.',
            );
        }

        $this->attach($user, $provider, $account);

        Auth::guard($this->guard())->login($user);

        return redirect()->intended($this->home());
    }

    private function link(Request $request, string $provider, mixed $account, ?ConnectedAccount $existing): RedirectResponse
    {
        $user = $request->user($this->guard());

        if ($user === null) {
            return $this->back('login', 'Sign in first, then connect an account.');
        }

        /*
         * ALREADY SOMEBODY ELSE'S. Silently moving the link would let anybody
         * who can reach that provider account take over sign-in for the person
         * who had it - so it is refused, and named, because the honest reading
         * is usually "I connected this to my other account".
         */
        if ($existing !== null && $existing->user_id !== $user->getKey()) {
            return $this->back('link',
                'That '.SocialProviders::label($provider)
                .' account is already connected to a different user.',
            );
        }

        $this->attach($user, $provider, $account);

        return $this->back('link', SocialProviders::label($provider).' is now connected.');
    }

    /**
     * The one place a provider identity is allowed to find an account it has
     * never been linked to.
     */
    private function guard(): ?string
    {
        return app(PanelManager::class)->currentPanel()?->getGuard();
    }

    private function matchByVerifiedEmail(string $provider, mixed $account): ?Authenticatable
    {
        if (! SocialProviders::verifiesEmail($provider)) {
            return null;
        }

        $email = $account->getEmail();

        if (! is_string($email) || $email === '') {
            return null;
        }

        /*
         * SOME PROVIDERS SAY SO PER ADDRESS, and when they do it is the answer
         * that counts - a Google account can hold an unverified alias. Absent
         * the flag we fall back to the provider-level judgement above.
         */
        $raw = (array) ($account->user ?? []);

        if (array_key_exists('email_verified', $raw) && $raw['email_verified'] !== true) {
            return null;
        }

        /*
         * AND THE PANEL'S OWN ADDRESS MUST BE VERIFIED TOO. An unverified
         * address here is one somebody typed on an invitation and never proved;
         * matching against it would let the provider decide who that invitation
         * belonged to.
         */
        return $this->users()
            ->whereRaw('lower(email) = ?', [mb_strtolower($email)])
            ->whereNotNull('email_verified_at')
            ->first();
    }

    private function attach(Authenticatable $user, string $provider, mixed $account): void
    {
        ConnectedAccount::query()->updateOrCreate(
            ['provider' => $provider, 'provider_id' => (string) $account->getId()],
            [
                'user_id' => $user->getKey(),
                'email' => $account->getEmail(),
                'nickname' => $account->getNickname() ?: $account->getName(),
                'avatar_url' => $account->getAvatar(),
                'last_used_at' => now(),
            ],
        );
    }

    private function back(string $intent, string $message): RedirectResponse
    {
        $to = $intent === 'link' ? $this->securityUrl() : $this->loginUrl();

        return redirect($to)->with('status', $message);
    }
}
