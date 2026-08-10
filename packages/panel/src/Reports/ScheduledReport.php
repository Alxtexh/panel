<?php

declare(strict_types=1);

namespace PanelKit\Panel\Reports;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * A filtered list, on a schedule, emailed as a CSV.
 *
 * IT IS THE EXPORT BUTTON, MINUS THE PERSON. Every operations team has somebody
 * who opens the panel each Monday, applies four filters, presses Export and
 * forwards the file - and that person exists because the panel could not do it.
 *
 * `isDue()` IS ASKED ONCE A MINUTE AND MUST BE CHEAP AND EXACT. Cheap because it
 * runs for every report on every tick; exact because "roughly weekly" means a
 * report that goes out twice one week and not at all the next, and the second
 * half of that is invisible.
 *
 * IT IS DUE ON THE MINUTE, ONCE. `last_sent_at` is what makes that true: a
 * scheduler that fires twice in the same minute, or a second worker picking the
 * same tick, would otherwise send the same report twice - and a report arriving
 * twice teaches people to ignore it.
 */
/**
 * THE COLUMNS, SO STATIC ANALYSIS CAN SEE THEM - see `Alerts\Announcement` for
 * why every model in this package is getting this block.
 *
 * `state` AND `recipients` ARE `array<...>`, NOT `array`, because a bare
 * `array` trades one finding for another: `missingType.iterableValue` is the
 * fourth-largest category in this package's baseline, and annotating a model
 * without its value types is how that category grows while this one shrinks.
 *
 * NULLABILITY COPIED FROM THE MIGRATION - only `last_sent_at` and
 * `last_result` are nullable, and a report that has never run is exactly the
 * case those two exist for.
 *
 * @property int $id
 * @property int $tenant_id
 * @property int $user_id
 * @property string $name
 * @property string $resource
 * @property array<string, mixed> $state
 * @property string $frequency
 * @property int $weekday
 * @property int $day_of_month
 * @property list<string> $recipients
 * @property bool $is_active
 * @property \Carbon\CarbonImmutable|null $last_sent_at
 * @property string|null $last_result
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 */
final class ScheduledReport extends Model
{
    protected $table = 'panel_scheduled_reports';

    protected $guarded = [];

    public const FREQUENCIES = ['daily', 'weekly', 'monthly'];

    protected function casts(): array
    {
        return [
            'state' => 'array',
            'recipients' => 'array',
            'is_active' => 'boolean',
            'last_sent_at' => 'datetime',
        ];
    }

    /**
     * Whether this report should go out right now.
     *
     * THE CLOCK IS PASSED IN rather than read here, so a test can ask "is this
     * due at 07:00 on a Monday" without waiting until Monday - and so that every
     * report on one tick is judged against exactly the same moment. Two reports
     * evaluated either side of a minute boundary would otherwise disagree about
     * what time it is.
     */
    public function isDue(Carbon $now): bool
    {
        if (! $this->is_active) {
            return false;
        }

        if ($this->time !== $now->format('H:i')) {
            return false;
        }

        /*
         * ALREADY SENT THIS MINUTE IS NOT DUE. The guard against a doubled tick,
         * a retried worker, or two servers both running the scheduler - and a
         * report arriving twice teaches people to ignore it.
         */
        if ($this->last_sent_at !== null && $this->last_sent_at->format('Y-m-d H:i') === $now->format('Y-m-d H:i')) {
            return false;
        }

        return match ($this->frequency) {
            'daily' => true,
            // ISO weekday, so 1 is Monday everywhere rather than depending on
            // which end of the week the locale thinks it starts.
            'weekly' => (int) $this->weekday === $now->dayOfWeekIso,
            'monthly' => (int) $this->day_of_month === $now->day,
            default => false,
        };
    }

    /**
     * A sentence for the screen, built from the same values the scheduler reads.
     *
     * ONE SOURCE, so a screen cannot describe a schedule that is not in force -
     * which is the failure that makes somebody wait for an email that was never
     * going to arrive.
     */
    public function describe(): string
    {
        return match ($this->frequency) {
            'daily' => "Every day at {$this->time}",
            'weekly' => 'Every '.self::WEEKDAYS[(int) $this->weekday].' at '.$this->time,
            'monthly' => 'On day '.$this->day_of_month." of each month at {$this->time}",
            default => 'Never',
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
