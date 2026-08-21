<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Auth;

use Alxtexh\Panel\Panel;
use Laravel\Socialite\Facades\Socialite;

/**
 * Which sign-in providers this installation actually has, and what to call them.
 *
 * MOVED FROM THE REFERENCE APP unchanged. It was `App\Support\SocialProviders`
 * and there is nothing about it that belongs to an ISP - which is why the demo's
 * login had working provider buttons and a generated portal had none.
 *
 * THE SUPPORTED LIST IS EXTENDED FROM CONFIG, so an application that wires a
 * fourth provider through Socialite gets a button without editing the package.
 * It still has to say whether that provider verifies addresses - see below.
 *
 * CONFIGURED CREDENTIALS ARE THE SWITCH, not a separate list of enabled names.
 * A button for a provider with no client id is a control that cannot work -
 * DESIGN_RULES rule 5 - and it fails at the worst moment, on the sign-in
 * screen, for somebody who cannot get in to report it. Asking the credentials
 * whether they exist means the button and the ability to complete the exchange
 * cannot drift.
 *
 * SOCIALITE IS A SOFT DEPENDENCY. `class_exists` here is what keeps a missing
 * `laravel/socialite` from turning a configured client id into a 500: no class,
 * no buttons, no routes. Composer `suggest` names the package; this is the
 * runtime half of the same decision.
 */
final class SocialProviders
{
    /** @var array<string, string> provider key => human name */
    private const SUPPORTED = [
        'google' => 'Google',
        'github' => 'GitHub',
        'gitlab' => 'GitLab',
        'bitbucket' => 'Bitbucket',
        'facebook' => 'Facebook',
        'linkedin' => 'LinkedIn',
        'linkedin-openid' => 'LinkedIn',
        'microsoft' => 'Microsoft',
        'apple' => 'Apple',
        'twitter' => 'X',
        'x' => 'X',
        'discord' => 'Discord',
        'slack' => 'Slack',
        'twitch' => 'Twitch',
    ];

    /**
     * Whether `laravel/socialite` is actually loaded.
     *
     * CREDENTIALS WITHOUT THE PACKAGE ARE NOT A PROVIDER. Offering a button
     * that fatals on click is worse than no button.
     */
    public static function installed(): bool
    {
        return class_exists(Socialite::class);
    }

    /**
     * Every provider this installation might offer, package list plus config.
     *
     * @return array<string, string>
     */
    private static function supported(?array $extra = null): array
    {
        $named = array_merge(self::SUPPORTED, (array) config('panel.auth.social.providers', []));

        if ($extra === null) {
            return $named;
        }

        foreach ($extra as $key) {
            if (! is_string($key) || $key === '') {
                continue;
            }

            $named[$key] = $named[$key] ?? self::label($key);
        }

        return $named;
    }

    /**
     * Providers with credentials configured, optionally restricted to one panel.
     *
     * A PANEL MAY NARROW THE LIST with `->socialite(['google', 'github'])`.
     * `->socialite(false)` offers none. The default is every provider that has
     * both a client id and a secret in `config/services.php`.
     *
     * @return array<string, string>
     */
    public static function enabled(?Panel $panel = null): array
    {
        if (! self::installed()) {
            return [];
        }

        $only = $panel?->socialiteAllowlist();

        if ($only === []) {
            return [];
        }

        $out = [];

        foreach (self::supported($only) as $key => $label) {
            if ($only !== null && ! in_array($key, $only, true)) {
                continue;
            }

            if (filled(config("services.{$key}.client_id"))
                && filled(config("services.{$key}.client_secret"))) {
                $out[$key] = $label;
            }
        }

        return $out;
    }

    public static function isEnabled(string $provider, ?Panel $panel = null): bool
    {
        return array_key_exists($provider, self::enabled($panel));
    }

    public static function label(string $provider): string
    {
        return self::supported()[$provider] ?? ucfirst($provider);
    }

    /**
     * Whether this provider's asserted email may be trusted to identify a
     * person who has not linked yet.
     *
     * THE WHOLE ACCOUNT-TAKEOVER QUESTION IS HERE. Matching a provider's email
     * against a panel account means whoever controls that address at that
     * provider can sign in as that person - which is exactly what "sign in with
     * Google" is supposed to mean, and a catastrophe at a provider that lets
     * anybody claim any address without proving it.
     *
     * Google and GitHub both verify addresses before returning them, and GitHub
     * returns only verified ones from its API. Microsoft Entra does the same
     * for work accounts. A provider added later starts OUTSIDE this list and
     * has to earn its place by somebody checking, because the failure is silent:
     * the wrong person is simply signed in.
     *
     * @var list<string>
     */
    private const VERIFIES_EMAIL = ['google', 'github', 'microsoft'];

    /**
     * AN APPLICATION MAY ADD TO THIS AND MAY NOT REMOVE FROM IT SILENTLY. The
     * config list is a claim somebody made deliberately about a provider they
     * added; the constant is what this package has checked itself.
     */
    public static function verifiesEmail(string $provider): bool
    {
        $trusted = array_merge(
            self::VERIFIES_EMAIL,
            (array) config('panel.auth.social.verifies_email', []),
        );

        return in_array($provider, $trusted, true);
    }
}
