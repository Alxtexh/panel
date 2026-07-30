<?php

declare(strict_types=1);

namespace Tests\Feature;

use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Promise\Create;
use GuzzleHttp\Psr7\Response;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Notification as NotificationFacade;
use Illuminate\Validation\ValidationException;
use PanelKit\Panel\Alerts\ReportsToTelegram;
use PanelKit\Panel\Alerts\Telegram;
use PanelKit\Panel\Support\PanelSettings;
use Psr\Http\Message\RequestInterface;
use Spatie\Backup\Notifications\Notifications\BackupHasFailedNotification;
use Spatie\Backup\Notifications\Notifications\CleanupHasFailedNotification;
use Spatie\Backup\Notifications\Notifications\UnhealthyBackupWasFoundNotification;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Tests\TestCase;

/**
 * Telegram delivery, end to end, without a bot.
 *
 * WHY THESE ARE WORTH THE LINES. An alert channel is the one feature whose
 * failure mode is silence - it is not exercised by anybody's day, and the first
 * test of it in production is an incident nobody is told about. Every assertion
 * below is a way it has already been silently broken:
 *
 *   A THIRD-PARTY NOTIFICATION WITH NO `toTelegram()`. The channel package
 *   returns null for those, and `spatie/laravel-backup` ships exactly that -
 *   so a configuration naming Telegram for backup failures read as complete
 *   and delivered nothing.
 *
 *   A TOKEN THE PANEL HAS AND THE CHANNEL HAS NOT. The credentials live in the
 *   panel's settings and the channel reads config, so the bridge between them
 *   is the difference between "configured" and "configured and working".
 *
 *   THE SAME EXCEPTION, A THOUSAND TIMES. A broken page throws per request, and
 *   an alerter without deduplication is the thing that takes the alert channel
 *   down during the incident it was bought for.
 *
 * THE HTTP LAYER IS FAKED AND THE REST IS REAL. Faking the notification system
 * would assert that this test knows how to call Laravel; faking only the
 * outbound request exercises the channel, the fallback, the routing and the
 * client exactly as production does.
 *
 * IT IS FAKED AT GUZZLE, NOT AT `Http::fake()`, and that is not a detail. The
 * channel package builds its own `GuzzleHttp\Client` rather than going through
 * Laravel's HTTP client, so `Http::fake()` intercepts nothing and every
 * assertion passes against zero recorded requests - a test suite that proves
 * the alert works while the alert reaches nobody. Binding the Guzzle client is
 * the only place this can be observed.
 */
final class TelegramAlertsTest extends TestCase
{
    use RefreshDatabase;

    /** @var list<RequestInterface> */
    private array $sent = [];

    protected function setUp(): void
    {
        parent::setUp();

        config([
            'services.telegram.token' => 'test-token',
            'services.telegram.chat_id' => '-100999',
        ]);

        $this->fakeTelegram();
    }

    /**
     * Bind a Guzzle client that records instead of sending.
     *
     * The channel package resolves `GuzzleHttp\Client` from the container on
     * every send, so replacing the binding is enough - nothing has to know it
     * was replaced.
     */
    private function fakeTelegram(?callable $respond = null): void
    {
        $this->sent = [];

        $stack = HandlerStack::create();

        /*
         * ONE RESPONSE PER REQUEST, produced on demand rather than queued.
         * Guzzle's `MockHandler` holds a fixed queue and throws when it runs
         * dry, which would make "was it sent twice?" fail for the wrong reason -
         * and the count is exactly what these tests measure.
         */
        $stack->setHandler(function ($request, $options) use ($respond) {
            $this->sent[] = $request;

            return Create::promiseFor(
                $respond ? $respond($request) : new Response(200, [], (string) json_encode([
                    'ok' => true,
                    'result' => ['message_id' => 1, 'username' => 'panelkit_bot'],
                ])),
            );
        });

        $this->app->bind(GuzzleClient::class, fn (): GuzzleClient => new GuzzleClient(['handler' => $stack]));
    }

    /** @return list<array<string, mixed>> The decoded bodies of what was sent. */
    private function payloads(): array
    {
        return array_map(
            static function (RequestInterface $request): array {
                parse_str((string) $request->getBody(), $form);

                return is_array($form) ? $form : [];
            },
            $this->sent,
        );
    }

    private function assertSentCount(int $expected): void
    {
        $this->assertCount($expected, $this->sent, 'Wrong number of Telegram requests.');
    }

    /** The bare send, which is what most callers want. */
    public function test_it_sends_a_line_of_text(): void
    {
        $this->assertTrue(Telegram::send('Disk at 94% on db-01.'));

        $this->assertSentCount(1);

        $this->assertStringContainsString('/bottest-token/sendMessage', (string) $this->sent[0]->getUri());

        $payload = $this->payloads()[0];

        $this->assertSame('-100999', $payload['chat_id']);
        $this->assertStringContainsString('Disk at 94%', (string) $payload['text']);
    }

    /** With nothing configured it is silent rather than loud. */
    public function test_it_says_nothing_when_unconfigured(): void
    {
        config(['services.telegram.token' => '', 'services.telegram.chat_id' => '']);

        $this->assertFalse(Telegram::send('Nobody is listening.'));

        $this->assertSentCount(0);
    }

    /**
     * THE ONE THAT MATTERS ON THE NIGHT A BACKUP FAILS.
     *
     * `BackupHasFailedNotification` defines `toMail`, `toSlack` and `toDiscord`
     * and no `toTelegram`. The channel package returns null for that and sends
     * nothing; the panel's subclass builds the message from the mail
     * representation, which is written for exactly this reader.
     */
    public function test_a_notification_with_no_telegram_method_still_arrives(): void
    {
        NotificationFacade::route('telegram', '-100999')->notify(new MailOnlyNotification);

        $this->assertSentCount(1);

        $text = (string) $this->payloads()[0]['text'];

        // The subject and the body it wrote for a person, not a class name.
        $this->assertStringContainsString('Backup of Acme failed', $text);
        $this->assertStringContainsString('The disk is full', $text);
        $this->assertStringNotContainsString('MailOnlyNotification', $text);
    }

    /**
     * AND THE NOTIFICATION THIS WAS BUILT FOR REALLY IS SHAPED THAT WAY.
     *
     * The test above uses a local stand-in, because spatie's notification takes
     * an event object that takes a backup destination that takes a filesystem -
     * three constructions to assert one thing. This asserts the one thing
     * directly: if a future version adds `toTelegram()`, the fallback stops
     * being the path that carries backup failures and this says so.
     */
    public function test_the_backup_notifications_still_need_that_fallback(): void
    {
        foreach ([
            BackupHasFailedNotification::class,
            UnhealthyBackupWasFoundNotification::class,
            CleanupHasFailedNotification::class,
        ] as $notification) {
            $this->assertFalse(
                method_exists($notification, 'toTelegram'),
                class_basename($notification).' now speaks Telegram; the fallback is no longer what delivers it.',
            );

            $this->assertTrue(
                method_exists($notification, 'toMail'),
                class_basename($notification).' has no mail representation, so the fallback has nothing to build from.',
            );
        }
    }

    /**
     * THE CREDENTIALS BRIDGE. An administrator types a token into the panel; the
     * channel reads `services.telegram`. Without this step the settings screen
     * accepts a token and nothing ever uses it.
     */
    public function test_the_panels_settings_supply_the_bot(): void
    {
        config(['services.telegram.token' => null, 'services.telegram.chat_id' => null]);

        app(PanelSettings::class)->putMany([
            'alerts.telegram.token' => 'from-settings',
            'alerts.telegram.chat_id' => '-100777',
        ]);

        $this->assertTrue(Telegram::configured());
        $this->assertTrue(Telegram::send('Configured from the panel.'));

        $this->assertStringContainsString('/botfrom-settings/', (string) $this->sent[0]->getUri());
        $this->assertSame('-100777', $this->payloads()[0]['chat_id']);
    }

    /**
     * AND THE BACKUP SCREEN'S OWN FIELDS STILL WORK.
     *
     * Telegram arrived in this panel as "tell me when a backup fails", so every
     * installation that configured it has a token stored under the backup
     * settings. Asking those operators to retype it somewhere else, to keep an
     * alert they already had, is how a working alert gets switched off.
     */
    public function test_a_token_stored_by_the_backup_screen_is_honoured(): void
    {
        config(['services.telegram.token' => null, 'services.telegram.chat_id' => null]);

        app(PanelSettings::class)->put('backup', [
            'alertTelegramToken' => 'from-backup-screen',
            'alertTelegramChatId' => '-100555',
        ]);

        $this->assertTrue(Telegram::configured());

        $this->assertTrue(Telegram::send('Still alerting.'));

        $this->assertStringContainsString('/botfrom-backup-screen/', (string) $this->sent[0]->getUri());
    }

    /* ------------------------------------------------------------ exceptions */

    public function test_an_exception_is_reported_once_per_window(): void
    {
        config(['panel.alerts.telegram.exceptions' => true]);

        $throw = static fn (): \RuntimeException => new \RuntimeException('Column not found');

        $this->assertTrue(ReportsToTelegram::report($throw()));

        // Same class, same file, same line: the second is the same incident.
        $this->assertFalse(ReportsToTelegram::report($throw()));

        $this->assertSentCount(1);
    }

    /** A different fault is a different incident. */
    public function test_a_different_exception_is_reported(): void
    {
        config(['panel.alerts.telegram.exceptions' => true]);

        ReportsToTelegram::report(new \RuntimeException('One'));
        ReportsToTelegram::report(new \LogicException('Two'));

        $this->assertSentCount(2);
    }

    /** And the window ends. */
    public function test_it_reports_again_once_the_window_has_passed(): void
    {
        config(['panel.alerts.telegram.exceptions' => true]);

        $throw = static fn (): \RuntimeException => new \RuntimeException('Still broken');

        ReportsToTelegram::report($throw());

        Cache::flush();

        ReportsToTelegram::report($throw());

        $this->assertSentCount(2);
    }

    /**
     * A 404 IS NOT AN INCIDENT. Nor is a validation error - both are the
     * framework working, and alerting on them makes the channel noise.
     */
    public function test_the_ordinary_failures_are_not_alerts(): void
    {
        config(['panel.alerts.telegram.exceptions' => true]);

        $this->assertFalse(ReportsToTelegram::report(
            new NotFoundHttpException,
        ));

        $this->assertFalse(ReportsToTelegram::report(
            ValidationException::withMessages(['email' => 'Required']),
        ));

        $this->assertSentCount(0);
    }

    /** Off by default, because a channel people mute is worse than none. */
    public function test_exception_alerts_are_opt_in(): void
    {
        $this->assertFalse((bool) config('panel.alerts.telegram.exceptions'));

        $this->assertFalse(ReportsToTelegram::report(new \RuntimeException('Quiet')));

        $this->assertSentCount(0);
    }

    /**
     * THE REPORTER CANNOT BECOME THE INCIDENT. It runs inside the exception
     * path, so anything it throws replaces the original error - the one case
     * where a monitoring tool destroys the information it exists to carry.
     */
    public function test_a_broken_telegram_never_escapes(): void
    {
        config(['panel.alerts.telegram.exceptions' => true]);

        $this->fakeTelegram(static fn (): never => throw new \RuntimeException('Network down'));

        $this->assertFalse(ReportsToTelegram::report(new \RuntimeException('The real problem')));
    }

    /* ---------------------------------------------------------- the test ping */

    public function test_the_test_button_sends_a_real_message(): void
    {
        $result = Telegram::test();

        $this->assertTrue($result['ok'], $result['message']);

        $this->assertSentCount(1);
        $this->assertSame('-100999', $this->payloads()[0]['chat_id']);
        $this->assertStringContainsString('test message', (string) $this->payloads()[0]['text']);
    }

    /** And says what Telegram said when it refuses. */
    public function test_a_rejected_token_reports_why(): void
    {
        $this->fakeTelegram(static fn (): Response => new Response(
            401,
            [],
            (string) json_encode(['ok' => false, 'description' => 'Unauthorized']),
        ));

        $result = Telegram::test();

        $this->assertFalse($result['ok']);

        /*
         * IT NAMES THE FIX, which is the whole reason the reason is surfaced.
         * A rejected token and a chat the bot was never added to both fail
         * here, and an administrator can only act on the difference.
         */
        $this->assertStringContainsString('token', strtolower($result['message']));
    }
}

/**
 * A notification shaped like every third-party one: mail and nothing else.
 *
 * AT FILE SCOPE, NOT INSIDE A METHOD. An anonymous class declared in a test
 * method has crashed this suite before with "Premature end of PHP process" -
 * the notification is serialised as it moves through the channel manager, and
 * an anonymous class cannot be named on the way back.
 */
final class MailOnlyNotification extends Notification
{
    /** @return list<string> */
    public function via(mixed $notifiable): array
    {
        return ['telegram'];
    }

    public function toMail(mixed $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Backup of Acme failed')
            ->line('The disk is full.');
    }
}
