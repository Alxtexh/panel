<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Auth;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

/**
 * The six-digit code mailed at the email-OTP challenge.
 *
 * PUBLIC `$code` IS FOR TESTS. Notification::fake() is how the suite reads
 * the value login just issued, rather than a second generator that can drift.
 */
final class EmailTwoFactorCode extends Notification
{
    public function __construct(public readonly string $code) {}

    /** @return list<string> */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        $minutes = max(1, (int) config('panel.auth.email_otp.lifetime_minutes', 10));

        return (new MailMessage)
            ->subject('Your sign-in code')
            ->line('Your one-time sign-in code is:')
            ->line($this->code)
            ->line("This code expires in {$minutes} minutes. If you did not try to sign in, you can ignore this message.");
    }
}
