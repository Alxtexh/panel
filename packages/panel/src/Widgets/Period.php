<?php

declare(strict_types=1);

namespace PanelKit\Panel\Widgets;

use DateTimeImmutable;

/**
 * A dashboard time window: "last 7 days", "last 12 months".
 *
 * A period carries THREE things, and the third is the one that is easy to
 * forget: its own range, the bucket granularity that suits that range, and the
 * PRECEDING range of equal length. Without the third, a trend indicator has
 * nothing to compare against, and "▲ 4%" gets computed against an arbitrary
 * baseline — a number that looks authoritative and means nothing.
 *
 * The bucket is chosen here rather than by the caller because the pairing is
 * what keeps a chart readable: a year bucketed by hour is 8,760 points through
 * a 600-pixel-wide card, and a day bucketed by month is one bar.
 *
 * `$now` is always injected, never read from the ambient clock inside the query
 * path. Two widgets resolving either side of midnight would otherwise silently
 * disagree about which day "today" is.
 */
enum Period: string
{
    case Today = 'today';
    case Days7 = '7d';
    case Days30 = '30d';
    case Days90 = '90d';
    case Months12 = '12m';

    /** The default when a request names no period, or names an invalid one. */
    public static function default(): self
    {
        return self::Days30;
    }

    /**
     * Resolve an untrusted string to a period.
     *
     * Falls back rather than throwing: a stale bookmark or a hand-edited query
     * string is not an error worth a 500, and the alternative — interpolating
     * whatever arrived into a date expression — is how a query string becomes
     * an injection surface.
     */
    public static function fromRequest(?string $value): self
    {
        return self::tryFrom((string) $value) ?? self::default();
    }

    public function label(): string
    {
        return match ($this) {
            self::Today => 'Today',
            self::Days7 => '7 days',
            self::Days30 => '30 days',
            self::Days90 => '90 days',
            self::Months12 => '12 months',
        };
    }

    /** What one point on the chart covers. */
    public function bucket(): Bucket
    {
        return match ($this) {
            self::Today => Bucket::Hour,
            self::Days7, self::Days30, self::Days90 => Bucket::Day,
            self::Months12 => Bucket::Month,
        };
    }

    /** The inclusive start of the window, snapped to a bucket boundary. */
    public function start(DateTimeImmutable $now): DateTimeImmutable
    {
        $bucket = $this->bucket();

        return $bucket->floor(match ($this) {
            self::Today => $now->setTime(0, 0),
            self::Days7 => $now->modify('-6 days'),
            self::Days30 => $now->modify('-29 days'),
            self::Days90 => $now->modify('-89 days'),
            self::Months12 => $now->modify('-11 months'),
        });
    }

    /** The exclusive end of the window: the start of the bucket after `$now`. */
    public function end(DateTimeImmutable $now): DateTimeImmutable
    {
        return $this->bucket()->next($this->bucket()->floor($now));
    }

    /**
     * The equally-long window immediately before this one.
     *
     * Equal LENGTH, not equal calendar unit — comparing a 30-day window against
     * "last month" compares 30 days against 28, 30 or 31 and manufactures a
     * trend out of the calendar.
     *
     * @return array{0: DateTimeImmutable, 1: DateTimeImmutable} [start, end)
     */
    public function previous(DateTimeImmutable $now): array
    {
        $start = $this->start($now);
        $length = $this->end($now)->getTimestamp() - $start->getTimestamp();

        return [$start->modify("-{$length} seconds"), $start];
    }

    /** How the trend reads in prose: "vs previous 30 days". */
    public function comparisonLabel(): string
    {
        return match ($this) {
            self::Today => 'vs yesterday',
            self::Days7 => 'vs previous 7 days',
            self::Days30 => 'vs previous 30 days',
            self::Days90 => 'vs previous 90 days',
            self::Months12 => 'vs previous 12 months',
        };
    }

    /** @return list<array{value: string, label: string}> For the UI selector. */
    public static function options(): array
    {
        return array_map(
            static fn (self $p): array => ['value' => $p->value, 'label' => $p->label()],
            self::cases(),
        );
    }
}
