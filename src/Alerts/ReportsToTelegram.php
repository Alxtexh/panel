<?php

declare(strict_types=1);

namespace PanelKit\Panel\Alerts;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Throwable;

/**
 * Unhandled exceptions, in the chat somebody is already watching.
 *
 * THE GAP THIS CLOSES. A panel reports a failed backup and says nothing at all
 * about the exception that made every subscriber screen a 500 - so the failure
 * an operator most needs to know about is the one that waits in a log file
 * until a customer telephones. Wiring it up is two lines in `bootstrap/app.php`
 * and it was never done because there was nothing to call.
 *
 * DEDUPLICATION IS THE WHOLE DESIGN, not a refinement. A broken page does not
 * throw once; it throws for every request, from every open tab, until somebody
 * fixes it. Reporting each one turns the alert channel into the thing that
 * caused the outage - Telegram rate-limits a bot to roughly thirty messages a
 * second and then stops accepting anything, including the messages about the
 * NEXT incident. Worse, a person watching a thousand identical lines scroll
 * past learns to mute the channel, which is a permanent cost paid for a
 * temporary fault.
 *
 * So a signature - class, file, line - is sent at most once per window. The
 * count is not tracked and not reported: "it is still happening" is what the
 * next window's message says, and an exact number is not a number anybody acts
 * on differently.
 *
 * IT NEVER THROWS AND NEVER BLOCKS THE HANDLER. This runs inside the exception
 * path, so an error here would replace the original error - the one case where
 * a monitoring tool can actively destroy the information it exists to carry.
 */
final class ReportsToTelegram
{
    /** How long one signature stays quiet. */
    private const WINDOW_MINUTES = 15;

    /**
     * Report an exception, unless an identical one was reported recently.
     *
     * @return bool Whether a message was sent.
     */
    public static function report(Throwable $e): bool
    {
        if (! (bool) config('panel.alerts.telegram.exceptions', false)) {
            return false;
        }

        if (self::shouldIgnore($e)) {
            return false;
        }

        try {
            $key = 'panel:alert:'.md5($e::class.'|'.$e->getFile().'|'.$e->getLine());

            /*
             * `add` IS THE ATOMIC HALF OF THIS. Read-then-write would let two
             * concurrent requests both see nothing and both send - which is
             * exactly the situation this exists for, since a broken page throws
             * concurrently by definition.
             */
            if (! Cache::add($key, true, now()->addMinutes(self::WINDOW_MINUTES))) {
                return false;
            }

            return Telegram::send(self::text($e));
        } catch (Throwable) {
            /*
             * Not even `report()` here: this IS the reporting path, and calling
             * it would recurse into the handler that called us.
             */
            return false;
        }
    }

    /**
     * Failures that are not incidents.
     *
     * A 404 IS NOT AN EXCEPTION WORTH WAKING UP FOR, and neither is a validation
     * error or an expired session. All three arrive as exceptions and all three
     * are the framework working correctly; alerting on them means the channel is
     * mostly noise within a day, which is the same as having no channel.
     */
    private static function shouldIgnore(Throwable $e): bool
    {
        foreach ((array) config('panel.alerts.telegram.ignore', []) as $class) {
            if (is_string($class) && $e instanceof $class) {
                return true;
            }
        }

        return false;
    }

    /**
     * What arrives in the chat.
     *
     * THE FIRST LINE IS THE ONE THAT GETS READ, on a phone, in a notification
     * preview - so it is the message and the class, not a banner. The location
     * follows, because "where" is the next question and it saves opening a
     * laptop to answer it.
     */
    private static function text(Throwable $e): string
    {
        $app = (string) config('app.name', 'Panel');

        $where = str_replace(base_path().'/', '', $e->getFile()).':'.$e->getLine();

        $message = trim($e->getMessage());

        $lines = [
            $app.' — '.class_basename($e),
            $message === '' ? '(no message)' : Str::limit($message, 300),
            '',
            $where,
        ];

        $url = request()?->fullUrl();

        if (is_string($url) && $url !== '') {
            $lines[] = $url;
        }

        $lines[] = '';
        $lines[] = 'Repeats within '.self::WINDOW_MINUTES.' minutes are not resent.';

        return implode("\n", $lines);
    }
}
