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
 * OFF IS A FIRST-CLASS STATE. `enabled` false means the middleware never runs
 * and no token is expected anywhere, so a development machine and a test suite
 * need no keys and no network. There is deliberately no "on but tolerant".
 */
final class Turnstile
{
    private const ENDPOINT = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

    public static function enabled(): bool
    {
        return (bool) config('panel.auth.turnstile.enabled', false);
    }

    public static function siteKey(): ?string
    {
        return config('panel.auth.turnstile.site_key');
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
