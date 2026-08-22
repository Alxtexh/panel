<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

/**
 * A reset code, a sign-in link, or any other one-line auth message.
 *
 * A MAILABLE RATHER THAN `Mail::raw`, so `Mail::fake()` can assert delivery and
 * an installation can restyle the template without forking a controller.
 */
final class AuthPlainMail extends Mailable
{
    use Queueable;
    use SerializesModels;

    public function __construct(
        public readonly string $heading,
        public readonly string $body,
        public readonly string $subjectLine,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(subject: $this->subjectLine);
    }

    public function content(): Content
    {
        return new Content(text: 'panel::mail.auth-plain');
    }
}
