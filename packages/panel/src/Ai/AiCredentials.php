<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Ai;

use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Crypt;
use Alxtexh\Panel\Support\PanelSettings;

/**
 * Bring-your-own-key for the assistant - the installation's AI provider and
 * API key, from panel settings rather than the deploy.
 *
 * WHY SETTINGS AND NOT `.env`: an administrator rotating an API key - or
 * switching provider because the bill moved - should not need shell access
 * and a deploy. The `.env` path still works: BYOK OVERRIDES the environment
 * when configured and falls back to it when not, so an installation that
 * wires `ANTHROPIC_API_KEY` at deploy time keeps working untouched.
 *
 * THE KEY IS ENCRYPTED AT REST with the app key, same as every Laravel
 * secret, and NEVER LEAVES THE SERVER WHOLE: `maskedKey()` is what any
 * screen may show, and there is deliberately no method that returns the
 * plaintext to a caller - `apply()` pushes it straight into the ai config
 * for the current request and nothing else ever needs it.
 *
 * `apply()` IS CALLED AT THE ASSISTANT'S OWN ENTRY POINTS, lazily, rather
 * than at boot: settings live in the database, and a panel that queries
 * them on every request to configure a feature most requests never touch
 * would be paying the assistant's cost everywhere.
 */
final class AiCredentials
{
    private const PROVIDER_KEY = 'ai.byok.provider';

    private const SECRET_KEY = 'ai.byok.key';

    /** The providers an operator may choose. Mirrors config/ai.php's set. */
    public const PROVIDERS = ['anthropic', 'openai', 'gemini', 'deepseek'];

    public function __construct(private readonly PanelSettings $settings) {}

    public function provider(): ?string
    {
        $provider = $this->settings->get(self::PROVIDER_KEY);

        return is_string($provider) && $provider !== '' ? $provider : null;
    }

    /** Whether an operator has brought a key, decryptable and all. */
    public function configured(): bool
    {
        return $this->provider() !== null && $this->secret() !== null;
    }

    /**
     * Whether the assistant can run AT ALL - a brought key, or one already
     * in the environment for the configured default provider. This is what
     * the UI consults to decide between the drawer and a setup hint.
     */
    public function available(): bool
    {
        if ($this->configured()) {
            return true;
        }

        $default = (string) config('ai.default', '');

        return (string) config("ai.providers.{$default}.key", '') !== '';
    }

    /**
     * Pushes the brought credentials into the ai config for this request.
     * A no-op when nothing is configured, so the environment's own wiring
     * stays exactly as the deploy left it.
     */
    public function apply(): void
    {
        $provider = $this->provider();
        $secret = $this->secret();

        if ($provider === null || $secret === null) {
            return;
        }

        config([
            'ai.default' => $provider,
            'ai.default_for_embeddings' => $provider,
            "ai.providers.{$provider}.key" => $secret,
        ]);
    }

    public function set(string $provider, #[\SensitiveParameter] string $key, ?string $by = null): void
    {
        if (! in_array($provider, self::PROVIDERS, true)) {
            throw new \InvalidArgumentException("[{$provider}] is not a supported AI provider.");
        }

        $this->settings->put(self::PROVIDER_KEY, $provider, $by);
        $this->settings->put(self::SECRET_KEY, Crypt::encryptString($key), $by);
    }

    public function clear(?string $by = null): void
    {
        $this->settings->put(self::PROVIDER_KEY, null, $by);
        $this->settings->put(self::SECRET_KEY, null, $by);
    }

    /**
     * What a settings screen may show: the last four characters and nothing
     * else. Echoing a stored secret back whole turns every screen that shows
     * it into a place it can be read over a shoulder or out of a cache.
     */
    public function maskedKey(): ?string
    {
        $secret = $this->secret();

        return $secret === null ? null : '••••'.substr($secret, -4);
    }

    private function secret(): ?string
    {
        $stored = $this->settings->get(self::SECRET_KEY);

        if (! is_string($stored) || $stored === '') {
            return null;
        }

        try {
            return Crypt::decryptString($stored);
        } catch (DecryptException) {
            // A rotated APP_KEY orphans the stored secret. Unconfigured is
            // the honest state - the operator re-enters the key - and quietly
            // erroring on every assistant call would say nothing about why.
            return null;
        }
    }
}
