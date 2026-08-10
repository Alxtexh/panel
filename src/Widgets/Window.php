<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Widgets;

use DateTimeImmutable;
use InvalidArgumentException;

/**
 * An explicit time window: a start, an end, and the bucket that suits them.
 *
 * WHY THIS EXISTS ALONGSIDE Period. A Period is a NAMED window relative to now
 * ("last 30 days") and knows its own bucket. A dashboard filter produces an
 * ARBITRARY window - two dates a person picked - which has no name and no
 * obvious granularity. Expressing that as a Period would mean inventing a
 * `Custom` case that lies about being relative to now, and every method that
 * computes a range from `$now` would need a special branch for it.
 *
 * So Period converts INTO a Window and everything downstream takes a Window.
 * There is one code path for "last 7 days" and for "3 March to 19 April".
 *
 * THE BUCKET IS DERIVED FROM THE SPAN, because a person choosing dates has no
 * reason to think about granularity: two days wants hours, two years wants
 * months, and picking wrong gives either 17,000 points or one.
 */
final class Window
{
    public function __construct(
        public readonly DateTimeImmutable $start,
        public readonly DateTimeImmutable $end,
        public readonly Bucket $bucket,
    ) {
        if ($end <= $start) {
            throw new InvalidArgumentException('A window must end after it starts.');
        }
    }

    public static function fromPeriod(Period $period, DateTimeImmutable $now): self
    {
        return new self($period->start($now), $period->end($now), $period->bucket());
    }

    /**
     * An arbitrary range from two picked DATES.
     *
     * THE END DATE IS INCLUSIVE, and getting that wrong is invisible. `to` is a
     * date a person selected, not a moment: choosing 27 July means "up to and
     * including the 27th". Treating it as an exclusive instant - start of the
     * 27th - silently drops the last day of every range, so a filter ending
     * "today" showed everything except today and the chart simply appeared to
     * stop a day early.
     *
     * So the exclusive end is the start of the day AFTER `to`, whatever the
     * bucket. The start is floored to a bucket boundary, so a range beginning
     * mid-afternoon does not produce a first bucket covering four hours while
     * the rest cover twenty-four.
     */
    public static function between(DateTimeImmutable $from, DateTimeImmutable $to): self
    {
        $start = $from->setTime(0, 0);
        // Inclusive: the whole of the chosen end date is inside the window.
        $end = $to->setTime(0, 0)->modify('+1 day');

        if ($end <= $start) {
            // `to` before `from` is a mis-entry rather than a request for an
            // empty window; one day is the least surprising reading.
            $end = $start->modify('+1 day');
        }

        $days = max(1, (int) round(($end->getTimestamp() - $start->getTimestamp()) / 86400));

        $bucket = match (true) {
            $days <= 3 => Bucket::Hour,
            $days <= 120 => Bucket::Day,
            default => Bucket::Month,
        };

        return new self($bucket->floor($start), $end, $bucket);
    }

    /**
     * The equally-long window immediately before this one, for a trend.
     *
     * Equal LENGTH, not equal calendar unit - the same reasoning Period uses.
     */
    public function previous(): self
    {
        $length = $this->end->getTimestamp() - $this->start->getTimestamp();

        return new self(
            $this->start->modify("-{$length} seconds"),
            $this->start,
            $this->bucket,
        );
    }

    public function label(): string
    {
        return $this->start->format('j M Y').' - '.$this->end->modify('-1 second')->format('j M Y');
    }
}
