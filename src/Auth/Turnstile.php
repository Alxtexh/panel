<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Auth;

use Illuminate\Support\Facades\Http;

/**
 * Cloudflare Turnstile, verified server-side.
 *
 * THE WIDGET IS NOT THE CHECK. Rendering the challenge proves nothing: the token
 * it produces has to be handed back to Cloudflare, from the server, before the
 * request it guards is allowed to proceed. A form that shows a Turnstile and
 * never verifies is decoration that looks like security, which is worse than no
 * Turnstile at all - somebody will stop worrying about the endpoint.
 *
 * IT FAILS CLOSED, and that is the decision worth stating. With the feature
 * enabled and the secret missing or Cloudflare unreachable, this refuses. The
 * tempting alternative - "let people in when the check cannot run" - turns a
 * misconfiguration or an outage into an open door, and it does so silently, at
 * exactly the moment nobody is looking. If Turnstile is on, it is load-bearing.
 *
 * OFF IS A FIRST-CLASS STATE. Missing keys mean the middleware never runs
 * and no token is expected anywhere, so a development machine and a test suite
 * need no keys and no network. There is deliberately no "on but tolerant"
 * once both keys exist: Cloudflare down is a refusal.
 *
 * KEYS ARE THE SWITCH. Hosts set `TURNSTILE_SITE_KEY` and
 * `TURNSTILE_SECRET_KEY`. `PANEL_TURNSTILE=false` still forces it off, for a
 * staging box that has production keys in env and must not challenge.
 */
final class Turnstile
{
    private const ENDPOINT = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

    /**
     * Both Cloudflare keys are present. That is what makes a widget and a
     * server check possible; either missing is "off".
     */
    public static function configured(): bool
    {
        $site = config('panel.auth.turnstile.site_key');
        $secret = config('panel.auth.turnstile.secret_key');

        return is_string($site) && $site !== '' && is_string($secret) && $secret !== '';
    }

    public static function enabled(): bool
    {
        if (! self::configured()) {
            return false;
        }

        $flag = config('panel.auth.turnstile.enabled');

        if ($flag === false || $flag === 0 || $flag === '0' || $flag === 'false') {
            return false;
        }

        return true;
    }

    public static function siteKey(): ?string
    {
        $key = config('panel.auth.turnstile.site_key');

        return is_string($key) && $key !== '' ? $key : null;
    }

    /**
     * Is this token good for this visitor?
     *
     * @param  string|null  $token  What the widget put in the form.
     * @param  string|null  $ip  Passed to Cloudflare so a token minted for one
     *                           visitor cannot be replayed from elsewhere.
     */
    public function verify(?string $token, ?string $ip = null): bool
    {
        $secret = config('panel.auth.turnstile.secret_key');

        /*
         * NO SECRET IS A REFUSAL, not a pass. This is the single most important
         * line here: the obvious implementation returns true when it cannot
         * check, and an installation that enabled Turnstile but never set the
         * secret would then believe it is protected while every request sails
         * through.
         */
        if (! is_string($secret) || $secret === '') {
            report(new \RuntimeException(
                'Turnstile is enabled but no secret key is configured; refusing the request.'
            ));

            return false;
        }

        if (! is_string($token) || $token === '') {
            return false;
        }

        try {
            $response = Http::asForm()
                /*
                 * A SHORT TIMEOUT, because this sits in front of the sign-in
                 * form. Cloudflare being slow must not become the panel being
                 * unreachable - it becomes a refusal, which is recoverable by
                 * trying again, and is logged.
                 */
                ->timeout(5)
                ->post(self::ENDPOINT, array_filter([
                    'secret' => $secret,
                    'response' => $token,
                    'remoteip' => $ip,
                ]));
        } catch (\Throwable $e) {
            report($e);

            return false;
        }

        return $response->successful() && $response->json('success') === true;
    }
}
