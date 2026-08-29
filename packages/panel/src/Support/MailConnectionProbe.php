<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Support\Facades\Mail;

/**
 * Does this SMTP server actually accept mail? `BackupDestinationProbe`'s same
 * reasoning, moved to mail: "configured" and "working" are different
 * questions, and a settings form can only ever check the first one.
 *
 * A REAL SEND, TO A RECIPIENT WHO ASKED FOR ONE. `Transport::start()` alone
 * would confirm the handshake but not that the credentials the SMTP server
 * accepted at EHLO are the ones it will accept for an actual message some
 * providers challenge harder for AUTH than for connection - and an
 * administrator wiring this up wants to know a message will actually land,
 * not that a socket opened.
 *
 * THE CONFIG IS PUSHED FOR THIS REQUEST ONLY, never persisted here. Saving
 * and testing are two different acts - see `MailSettingsPage` - and this
 * class has no idea which one is happening; it only sends with whatever
 * `config` it is handed and reports what happened.
 *
 * IT NEVER THROWS. This runs from a settings screen; a probe that raises
 * turns "your SMTP password is wrong" into a 500 on the page you would use
 * to fix it.
 */
final class MailConnectionProbe
{
    /**
     * @param  array{host: string, port: int, encryption: string|null, username: string|null, password: string|null, from_address: string, from_name: string}  $config
     * @return array{ok: bool, message: string, ms: int}
     */
    public function send(array $config, string $to): array
    {
        $started = microtime(true);

        $original = config('mail.mailers.smtp');
        $originalDefault = config('mail.default');
        $originalFrom = config('mail.from');

        try {
            config([
                'mail.default' => 'smtp',
                'mail.mailers.smtp.transport' => 'smtp',
                'mail.mailers.smtp.host' => $config['host'],
                'mail.mailers.smtp.port' => $config['port'],
                'mail.mailers.smtp.encryption' => $config['encryption'],
                'mail.mailers.smtp.username' => $config['username'],
                'mail.mailers.smtp.password' => $config['password'],
                // A SHORT TIMEOUT, not the socket default (which can run to
                // several minutes on a host that accepts the TCP connection
                // and then never speaks). An admin testing a typo'd
                // firewall rule should get "could not connect" in seconds,
                // not a spinner they eventually give up on.
                'mail.mailers.smtp.timeout' => 10,
                'mail.from.address' => $config['from_address'],
                'mail.from.name' => $config['from_name'],
            ]);

            // A FRESH TRANSPORT, not the one Laravel may have already built
            // and cached for 'smtp' earlier in this same request from
            // whatever `.env` or a prior `apply()` set up.
            app('mail.manager')->forgetMailers();

            Mail::mailer('smtp')->raw(
                "This is a test message from your panel's SMTP settings.\n\n".
                "If you're reading this, the server accepted it.",
                static function ($message) use ($to, $config): void {
                    $message->to($to)->subject('Test email from '.$config['from_name']);
                },
            );

            return $this->result(true, "Test email sent to {$to}.", $this->since($started));
        } catch (\Throwable $e) {
            report($e);

            return $this->result(false, $this->reason($e), $this->since($started));
        } finally {
            config([
                'mail.mailers.smtp' => $original,
                'mail.default' => $originalDefault,
                'mail.from' => $originalFrom,
            ]);
            app('mail.manager')->forgetMailers();
        }
    }

    /** @return array{ok: bool, message: string, ms: int} */
    private function result(bool $ok, string $message, int $ms): array
    {
        return ['ok' => $ok, 'message' => $message, 'ms' => $ms];
    }

    private function since(float $started): int
    {
        return (int) round((microtime(true) - $started) * 1000);
    }

    /**
     * The driver's own words, trimmed to one line. "Connection could not be
     * established" or "authentication failed" is what tells an administrator
     * whether to fix the host, the port or the password; a generic "could
     * not send" sends them to the logs to find this exact sentence.
     */
    private function reason(\Throwable $e): string
    {
        $first = trim(strtok($e->getMessage(), "\n") ?: '');

        if ($first === '') {
            return 'The mail server could not be reached.';
        }

        return mb_strimwidth($first, 0, 200, '…');
    }
}
