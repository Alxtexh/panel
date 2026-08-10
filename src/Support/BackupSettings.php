<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Support\Facades\Config;
use Spatie\Backup\Notifications\Notifications\BackupHasFailedNotification;
use Spatie\Backup\Notifications\Notifications\BackupWasSuccessfulNotification;
use Spatie\Backup\Notifications\Notifications\CleanupWasSuccessfulNotification;
use Spatie\Backup\Tasks\Monitor\HealthChecks\MaximumAgeInDays;
use Spatie\Backup\Tasks\Monitor\HealthChecks\MaximumStorageInMegabytes;

/**
 * How this installation backs itself up, as an operator set it.
 *
 * THESE OVERRIDE `config/backup.php` AT RUNTIME rather than replacing it. The
 * published config stays the shipped default and the documented shape; this
 * object is the operator's decision layered on top. Editing the file instead
 * would mean a shell, a deploy and a `config:cache` for "keep backups for 14
 * days rather than 7", which is a decision somebody makes at 2am from a phone.
 *
 * EVERY VALUE IS CLAMPED ON THE WAY OUT, not merely validated on the way in.
 * A retention of zero days is a policy that deletes tonight's backup tomorrow
 * morning; a frequency of "every minute" fills a disk by lunchtime. The form
 * validates, and then this clamps anyway - because the row can also arrive from
 * a migration, a seeder, or a hand-edited database, and a guard that only runs
 * at one entrance is not a guard.
 *
 * `apply()` MUST BE CALLED WHERE THE WORK HAPPENS, not once at boot. A queue
 * worker boots and then runs for hours; config written into it at boot is the
 * policy as it stood when the worker started, which is precisely the staleness
 * that makes an operator change a setting, see it saved, and watch the old one
 * keep running. So the job applies it, the scheduler applies it, and the screen
 * reads the stored values directly.
 */
final class BackupSettings
{
    /** The key everything below lives under, as one JSON document. */
    public const KEY = 'backup';

    /**
     * MONTHLY IS HERE BECAUSE ITS ABSENCE WAS AN OVERSIGHT, not a policy.
     *
     * The first four were written as "how often does a busy installation back
     * up", and monthly did not look like an answer to that. It is a perfectly
     * reasonable one for a panel whose data barely moves - a small reseller, an
     * archive, a staging copy - and leaving it out told those operators the
     * feature was not for them.
     *
     * WHAT IT CHANGES IS THE MONITOR, and that is the part worth being careful
     * about. A monthly schedule under a "backup older than a day is unhealthy"
     * check reports an incident every day for a month, and an alert that cries
     * every day is an alert somebody mutes - after which the real failure is
     * silent. See `maxAgeDays()`.
     */
    public const FREQUENCIES = ['hourly', 'twice-daily', 'daily', 'weekly', 'monthly'];

    private function __construct(
        public readonly string $frequency,
        /** `HH:MM`, ignored when the frequency is hourly. */
        public readonly string $time,
        /** ISO weekday, 1 = Monday. Only meaningful when weekly. */
        public readonly int $weekday,
        /**
         * Day of the month, only meaningful when monthly.
         *
         * CAPPED AT 28, deliberately and not as a rounding error. The 29th,
         * 30th and 31st do not exist in every month, and Laravel's monthly
         * schedule simply does not fire when the day is absent - so "back up on
         * the 31st" silently skips February, April, June, September and
         * November. An operator choosing the end of the month means "monthly",
         * not "seven times a year".
         */
        public readonly int $dayOfMonth,
        /** Snapshots older than this are removed by the nightly cleanup. */
        public readonly int $keepDays,
        /** Oldest snapshots are dropped past this total, or null for no cap. */
        public readonly ?int $maxMegabytes,
        /**
         * Every disk a snapshot is written to.
         *
         * A LIST, NOT A SINGLE CHOICE, and that is the whole point of the
         * off-site option: a copy that only exists on the machine being backed
         * up is not a backup, it is a second file on the same disk. Keeping
         * `local` alongside the remote one means a restore does not wait on
         * somebody else's network.
         *
         * @var list<string>
         */
        public readonly array $destinations,
        public readonly ?string $alertEmail,
        /**
         * The bot that sends the message, and the conversation it goes to.
         *
         * BOTH, OR NEITHER IS ANY USE. The chat id was settable from the panel
         * and the token was read from the environment, which meant an operator
         * could fill in the only field they were shown, save it, see it saved -
         * and get no alerts at all, with nothing on the screen to explain why.
         * A setting that cannot work on its own should not be offered on its
         * own.
         *
         * THE TOKEN IS A CREDENTIAL AND IS TREATED AS ONE. It grants full
         * control of the bot to whoever holds it, so it is never sent back to
         * the browser - see `redacted()` - and never written to the audit trail.
         */
        public readonly ?string $alertTelegramChatId,
        public readonly ?string $alertTelegramToken,
        /**
         * Whether a SUCCESSFUL backup is announced.
         *
         * OFF BY DEFAULT, and the default is the considered position. A nightly
         * "backup succeeded" is filtered into a folder within a week, and once
         * filtered the folder stops being read - so the failure that eventually
         * arrives is filtered with it. Silence on success is what makes noise on
         * failure mean anything. It is offered because some operators are
         * required to evidence that the job ran.
         */
        public readonly bool $notifyOnSuccess,
    ) {}

    public static function load(?PanelSettings $store = null): self
    {
        $store ??= app(PanelSettings::class);
        $raw = $store->get(self::KEY);

        return self::fromArray(is_array($raw) ? $raw : []);
    }

    /** @param array<string, mixed> $raw */
    public static function fromArray(array $raw): self
    {
        $frequency = is_string($raw['frequency'] ?? null) && in_array($raw['frequency'], self::FREQUENCIES, true)
            ? $raw['frequency']
            : 'daily';

        return new self(
            frequency: $frequency,
            time: self::time($raw['time'] ?? null),
            weekday: min(7, max(1, (int) ($raw['weekday'] ?? 7))),
            dayOfMonth: min(28, max(1, (int) ($raw['dayOfMonth'] ?? 1))),
            /*
             * ONE DAY IS THE FLOOR, not zero. Zero reads as "keep nothing",
             * and the cleanup would run tonight against this morning's
             * snapshot. Spatie's strategy never deletes the newest backup, so
             * zero would not empty the directory - it would leave exactly one,
             * which is worse: it looks like a working backup policy.
             */
            keepDays: min(3650, max(1, (int) ($raw['keepDays'] ?? 7))),
            maxMegabytes: isset($raw['maxMegabytes']) && $raw['maxMegabytes'] !== null
                ? max(100, (int) $raw['maxMegabytes'])
                : null,
            destinations: self::destinations($raw['destinations'] ?? null),
            alertEmail: self::string($raw['alertEmail'] ?? null),
            alertTelegramChatId: self::string($raw['alertTelegramChatId'] ?? null),
            alertTelegramToken: self::string($raw['alertTelegramToken'] ?? null),
            notifyOnSuccess: (bool) ($raw['notifyOnSuccess'] ?? false),
        );
    }

    private static function string(mixed $value): ?string
    {
        return is_string($value) && trim($value) !== '' ? trim($value) : null;
    }

    private static function time(mixed $value): string
    {
        return is_string($value) && preg_match('/^([01]\d|2[0-3]):[0-5]\d$/', $value) === 1
            ? $value
            : '01:30';
    }

    /**
     * Disks that exist, with `local` guaranteed.
     *
     * A DISK NAME THAT IS NOT CONFIGURED IS DROPPED rather than passed through.
     * Spatie throws on an unknown disk mid-backup, and `continue_on_failure` is
     * false, so one stale name in this list means NO backup is taken at all -
     * the setting that was meant to add a second copy silently removes the
     * first. The local disk is forced back in for the same reason: a snapshot
     * that exists only somewhere else cannot be restored from when the network
     * to somewhere else is the thing that is broken.
     *
     * @return list<string>
     */
    private static function destinations(mixed $value): array
    {
        $known = array_keys((array) config('filesystems.disks', []));

        $chosen = array_values(array_filter(
            is_array($value) ? $value : [],
            static fn (mixed $disk): bool => is_string($disk) && in_array($disk, $known, true),
        ));

        if (! in_array('local', $chosen, true)) {
            array_unshift($chosen, 'local');
        }

        return array_values(array_unique($chosen));
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return [
            'frequency' => $this->frequency,
            'time' => $this->time,
            'weekday' => $this->weekday,
            'dayOfMonth' => $this->dayOfMonth,
            'keepDays' => $this->keepDays,
            'maxMegabytes' => $this->maxMegabytes,
            'destinations' => $this->destinations,
            'alertEmail' => $this->alertEmail,
            'alertTelegramChatId' => $this->alertTelegramChatId,
            'alertTelegramToken' => $this->alertTelegramToken,
            'notifyOnSuccess' => $this->notifyOnSuccess,
        ];
    }

    /**
     * Push these decisions into the config Spatie will read.
     *
     * CALLED IMMEDIATELY BEFORE THE WORK, never once at boot - see the class
     * note. It is idempotent, so calling it twice costs nothing.
     */
    public function apply(): void
    {
        Config::set('backup.backup.destination.disks', $this->destinations);

        /*
         * THE MONITOR HAS TO WATCH THE SAME DISKS IT WRITES TO. They are two
         * separate config keys, and when they disagree the health check reports
         * on a location nothing writes to any more - a green light over an
         * empty directory, which is the exact failure this screen exists to
         * catch.
         */
        Config::set('backup.monitor_backups.0.disks', $this->destinations);
        Config::set('backup.monitor_backups.0.health_checks', [
            MaximumAgeInDays::class => $this->maxAgeDays(),
            MaximumStorageInMegabytes::class => $this->maxMegabytes ?? 100_000,
        ]);

        /*
         * A FLAT AGE CUTOFF, which is what an operator means by "delete after N
         * days". Spatie's default strategy thins older backups into daily, then
         * weekly, then monthly survivors - sensible, and completely at odds with
         * a retention promise made to a customer. Zeroing the later tiers makes
         * the single number on the settings screen mean what it says.
         *
         * The strategy still refuses to delete the newest backup whatever these
         * say, which is the floor worth having.
         */
        Config::set('backup.cleanup.default_strategy.keep_all_backups_for_days', $this->keepDays);
        Config::set('backup.cleanup.default_strategy.keep_daily_backups_for_days', 0);
        Config::set('backup.cleanup.default_strategy.keep_weekly_backups_for_weeks', 0);
        Config::set('backup.cleanup.default_strategy.keep_monthly_backups_for_months', 0);
        Config::set('backup.cleanup.default_strategy.keep_yearly_backups_for_years', 0);
        Config::set(
            'backup.cleanup.default_strategy.delete_oldest_backups_when_using_more_megabytes_than',
            $this->maxMegabytes,
        );

        if ($this->alertEmail !== null) {
            Config::set('backup.notifications.mail.to', $this->alertEmail);
        }

        if ($this->alertTelegramChatId !== null) {
            Config::set('services.telegram.chat_id', $this->alertTelegramChatId);
        }

        /*
         * THE ENVIRONMENT REMAINS THE FALLBACK, and the order matters. An
         * installation that already sets `TELEGRAM_BOT_TOKEN` keeps working
         * untouched; a null here means "not set in the panel", not "clear it".
         * Overwriting config with null would turn opening the settings screen
         * and pressing Save into a way to silently disable alerting.
         */
        if ($this->alertTelegramToken !== null) {
            Config::set('services.telegram.token', $this->alertTelegramToken);
        }

        $this->applySuccessNotifications();
    }

    /**
     * How stale a backup may be before the monitor calls it unhealthy.
     *
     * DERIVED FROM THE FREQUENCY rather than configured separately. Two numbers
     * that have to agree is one number that will not: somebody moves backups to
     * weekly, the monitor keeps a one-day threshold, and it reports an unhealthy
     * backup every day for a week until the alert is muted - after which a real
     * failure goes unnoticed.
     *
     * One day of slack on top, so a run that starts late is not an incident.
     */
    private function maxAgeDays(): int
    {
        return match ($this->frequency) {
            // A month plus a few days, because months are not the same length
            // and a 31-day gap is normal on a schedule set to the 1st.
            'monthly' => 35,
            'weekly' => 8,
            default => 2,
        };
    }

    /**
     * Announce success over the channels failure already uses, or over none.
     *
     * THE CHANNEL LIST IS BORROWED, NOT BUILT. The application decides what a
     * notification channel is - this installation has a Telegram class of its
     * own - and a package that named those classes would either hardcode an
     * app namespace or grow a registry that has to be kept in step. Whatever an
     * operator configured for "the backup failed" is by definition how they want
     * to be reached about backups.
     */
    private function applySuccessNotifications(): void
    {
        $channels = (array) config('backup.notifications.notifications', []);

        $viaFailure = (array) ($channels[BackupHasFailedNotification::class] ?? ['mail']);

        $success = [
            BackupWasSuccessfulNotification::class,
            CleanupWasSuccessfulNotification::class,
        ];

        foreach ($success as $notification) {
            $channels[$notification] = $this->notifyOnSuccess ? array_values($viaFailure) : [];
        }

        Config::set('backup.notifications.notifications', $channels);
    }

    /**
     * Whether Telegram can actually deliver: a bot AND a conversation.
     *
     * Asked of the RESOLVED values rather than of this object alone, because
     * either half may legitimately come from the environment. A screen that
     * reported "not configured" while `.env` was quietly doing the work would
     * be wrong in the direction that gets a working alert turned off.
     */
    public function telegramReady(): bool
    {
        $token = $this->alertTelegramToken ?? (string) config('services.telegram.token', '');
        $chat = $this->alertTelegramChatId ?? (string) config('services.telegram.chat_id', '');

        return trim((string) $token) !== '' && trim((string) $chat) !== '';
    }

    /**
     * The settings as the BROWSER may see them.
     *
     * THE TOKEN IS REPLACED, NOT OMITTED. Leaving the key out entirely would
     * make the form treat it as empty and post an empty value back, clearing a
     * working credential the moment somebody edits an unrelated field. A
     * placeholder says "there is one, and you did not need to see it".
     *
     * @return array<string, mixed>
     */
    public function redacted(): array
    {
        return [
            ...$this->toArray(),
            'alertTelegramToken' => null,
            'hasTelegramToken' => $this->alertTelegramToken !== null,
            'telegramReady' => $this->telegramReady(),
        ];
    }

    /**
     * A human sentence for the screen, built from the same values the scheduler
     * reads - so the page cannot describe a schedule that is not in force.
     */
    public function describe(): string
    {
        return match ($this->frequency) {
            'hourly' => 'Every hour, on the hour',
            'twice-daily' => "Twice a day, at {$this->time} and twelve hours later",
            'weekly' => 'Every '.self::WEEKDAYS[$this->weekday]." at {$this->time}",
            'monthly' => 'On the '.self::ordinal($this->dayOfMonth)." of each month at {$this->time}",
            default => "Every day at {$this->time}",
        };
    }

    /** "1st", "22nd" - a schedule described as "on the 22 of each month" reads as a typo. */
    private static function ordinal(int $day): string
    {
        if (in_array($day % 100, [11, 12, 13], true)) {
            return $day.'th';
        }

        return $day.match ($day % 10) {
            1 => 'st',
            2 => 'nd',
            3 => 'rd',
            default => 'th',
        };
    }

    public const WEEKDAYS = [
        1 => 'Monday',
        2 => 'Tuesday',
        3 => 'Wednesday',
        4 => 'Thursday',
        5 => 'Friday',
        6 => 'Saturday',
        7 => 'Sunday',
    ];
}
