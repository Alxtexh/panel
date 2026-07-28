<?php

declare(strict_types=1);

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

/**
 * A reset code or a sign-in link.
 *
 * A MAILABLE RATHER THAN `Mail::raw`, for two reasons that turned out to be the
 * same one. `Mail::fake()` records mailables and does NOT record raw sends - so
 * with `Mail::raw` there is no way to assert the message was sent at all, and a
 * reset that stores a code and silently never emails it would pass every test.
 * That is precisely the failure shape this project keeps finding.
 *
 * The other reason is ordinary: an installation will want to restyle this, and a
 * string concatenated inside a controller is not something anybody can restyle.
 *
 * IT CARRIES NO USER MODEL, only strings. A queued mailable serialises its
 * properties, and putting an Eloquent user in one means the email renders
 * against whatever that row looks like when the queue gets to it - which for a
 * password reset could be after the very change being notified about.
 */
final class AuthCodeMail extends Mailable
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
        return new Content(text: 'mail.auth-code');
    }
}
