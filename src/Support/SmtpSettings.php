<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Crypt;

/**
 * The installation's outgoing mail server, from panel settings rather than
 * `.env` - `AiCredentials`'s same reasoning, moved to mail.
 *
 * WHY SETTINGS AND NOT `.env`: an administrator rotating a mail password, or
 * moving providers because the last one started bouncing, should not need
 * shell access and a deploy. `apply()` OVERRIDES the environment when
 * configured and is a no-op when not, so `.env`'s own `MAIL_*` wiring keeps
 * working on every installation that never opens this screen.
 *
 * THE PASSWORD IS ENCRYPTED AT REST and NEVER LEAVES THE SERVER WHOLE -
 * `maskedPassword()` is the last four characters and nothing else; there is
 * deliberately no method returning the plaintext to a caller other than
 * `apply()` and the connection probe, both of which run server-side.
 *
 * A BLANK PASSWORD ON SAVE MEANS UNCHANGED, matching the form: the field is
 * always empty on render (see `MailSettingsPage`), so a blank submission is
 * "I did not touch this", not "clear it". `clear()` is the explicit way to
 * remove one.
 */
final class SmtpSettings
{
    private const HOST_KEY = 'mail.smtp.host';

    private const PORT_KEY = 'mail.smtp.port';

    private const ENCRYPTION_KEY = 'mail.smtp.encryption';

    private const USERNAME_KEY = 'mail.smtp.username';

    private const PASSWORD_KEY = 'mail.smtp.password';

    private const FROM_ADDRESS_KEY = 'mail.smtp.from_address';

    private const FROM_NAME_KEY = 'mail.smtp.from_name';

    public function __construct(private readonly PanelSettings $settings) {}

    /**
     * Everything a settings screen may show whole - never the password.
     *
     * @return array{host: string, port: int, encryption: string|null, username: string|null, fromAddress: string, fromName: string}
     */
    public function config(): array
    {
        return [
            'host' => (string) $this->settings->get(self::HOST_KEY, ''),
            'port' => (int) $this->settings->get(self::PORT_KEY, 587),
            'encryption' => $this->stringOrNull($this->settings->get(self::ENCRYPTION_KEY)),
            'username' => $this->stringOrNull($this->settings->get(self::USERNAME_KEY)),
            'fromAddress' => (string) $this->settings->get(self::FROM_ADDRESS_KEY, ''),
            'fromName' => (string) $this->settings->get(self::FROM_NAME_KEY, ''),
        ];
    }

    public function configured(): bool
    {
        $config = $this->config();

        return $config['host'] !== '' && $config['fromAddress'] !== '';
    }

    /**
     * What a settings screen may show for the stored password: the last four
     * characters and nothing else. Null when none is stored.
     */
    public function maskedPassword(): ?string
    {
        $password = $this->password();

        return $password === null || $password === '' ? null : '••••'.substr($password, -4);
    }

    /**
     * Pushes the stored server into the mail config for THIS request only.
     * A no-op when nothing is configured, so `.env`'s own mailer keeps
     * driving every installation that never saved one here.
     */
    public function apply(): void
    {
        if (! $this->configured()) {
            return;
        }

        $config = $this->config();

        config([
            'mail.default' => 'smtp',
            'mail.mailers.smtp.transport' => 'smtp',
            'mail.mailers.smtp.host' => $config['host'],
            'mail.mailers.smtp.port' => $config['port'],
            'mail.mailers.smtp.encryption' => $config['encryption'],
            'mail.mailers.smtp.username' => $config['username'],
            'mail.mailers.smtp.password' => $this->password(),
            'mail.from.address' => $config['fromAddress'],
            'mail.from.name' => $config['fromName'],
        ]);
    }

    /**
     * @param  array{host: string, port: int, encryption: string|null, username: string|null, password: string|null, from_address: string, from_name: string}  $data
     */
    public function set(array $data, ?string $by = null): void
    {
        $this->settings->put(self::HOST_KEY, $data['host'], $by);
        $this->settings->put(self::PORT_KEY, $data['port'], $by);
        $this->settings->put(self::ENCRYPTION_KEY, $data['encryption'], $by);
        $this->settings->put(self::USERNAME_KEY, $data['username'], $by);
        $this->settings->put(self::FROM_ADDRESS_KEY, $data['from_address'], $by);
        $this->settings->put(self::FROM_NAME_KEY, $data['from_name'], $by);

        // Blank means "leave the stored password alone" - the field never
        // arrives holding the real one to compare against, so an empty
        // submission is the only signal that means "unchanged" rather than
        // "clear it".
        if (($data['password'] ?? '') !== '') {
            $this->settings->put(self::PASSWORD_KEY, Crypt::encryptString($data['password']), $by);
        }
    }

    public function clear(?string $by = null): void
    {
        foreach ([
            self::HOST_KEY, self::PORT_KEY, self::ENCRYPTION_KEY, self::USERNAME_KEY,
            self::PASSWORD_KEY, self::FROM_ADDRESS_KEY, self::FROM_NAME_KEY,
        ] as $key) {
            $this->settings->put($key, null, $by);
        }
    }

    /**
     * The decrypted password, whole. NOT what a settings screen shows -
     * `maskedPassword()` is that - this is what `apply()` and
     * `MailConnectionProbe` need to actually authenticate.
     */
    public function password(): ?string
    {
        $stored = $this->settings->get(self::PASSWORD_KEY);

        if (! is_string($stored) || $stored === '') {
            return null;
        }

        try {
            return Crypt::decryptString($stored);
        } catch (DecryptException) {
            // A rotated APP_KEY orphans the stored secret. Unconfigured is
            // the honest state - an administrator re-enters the password -
            // rather than silently failing every send with no visible cause.
            return null;
        }
    }

    private function stringOrNull(mixed $value): ?string
    {
        return is_string($value) && $value !== '' ? $value : null;
    }
}
