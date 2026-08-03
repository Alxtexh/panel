<?php

declare(strict_types=1);

namespace PanelKit\Panel\Auth;

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
 * whether they exist means the button and the ability to use it cannot drift.
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
        'twitter' => 'X',
    ];

    /**
     * Every provider this installation might offer, package list plus config.
     *
     * @return array<string, string>
     */
    private static function supported(): array
    {
        return array_merge(self::SUPPORTED, (array) config('panel.auth.social.providers', []));
    }

    /**
     * Providers with credentials configured.
     *
     * @return array<string, string>
     */
    public static function enabled(): array
    {
        $out = [];

        foreach (self::supported() as $key => $label) {
            if (filled(config("services.{$key}.client_id"))
                && filled(config("services.{$key}.client_secret"))) {
                $out[$key] = $label;
            }
        }

        return $out;
    }

    public static function isEnabled(string $provider): bool
    {
        return array_key_exists($provider, self::enabled());
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
     * returns only verified ones from its API. A provider added later starts
     * OUTSIDE this list and has to earn its place by somebody checking, because
     * the failure is silent: the wrong person is simply signed in.
     *
     * @var list<string>
     */
    private const VERIFIES_EMAIL = ['google', 'github'];

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
