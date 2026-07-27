<?php

declare(strict_types=1);

namespace PanelKit\Panel\Widgets;

use DateTimeImmutable;
use InvalidArgumentException;
use RuntimeException;

/**
 * The granularity of one point on a time series, and the SQL that produces it.
 *
 * WHY THIS IS A STRATEGY AND NOT A HARDCODED EXPRESSION.
 *
 * Truncating a timestamp to an hour/day/month is the one thing in this package
 * that genuinely cannot be written portably: SQLite has `strftime`, MySQL has
 * `DATE_FORMAT`, Postgres has `date_trunc`, and they share no spelling. The
 * alternative to a strategy is picking a dialect and forcing it on every
 * consumer, which is exactly the mandate this framework refuses to make.
 *
 * So the dialect is looked up, never assumed, and an UNKNOWN driver throws
 * instead of guessing. A wrong guess here does not error — it returns a chart
 * with plausible, silently incorrect buckets, which is the worst failure shape
 * available.
 */
enum Bucket: string
{
    case Hour = 'hour';
    case Day = 'day';
    case Month = 'month';

    /**
     * The SQL expression that truncates `$column` to this bucket.
     *
     * All drivers emit the SAME string shape, so PHP can parse one format
     * regardless of database. That is deliberate: the gap-filling and labelling
     * downstream must not need to know which engine answered.
     *
     * @param  string  $driver  The connection driver name (`sqlite`, `mysql`, …).
     * @param  string  $column  A validated column identifier.
     */
    public function expression(string $driver, string $column): string
    {
        /*
         * The column is interpolated into raw SQL, so it is validated as a bare
         * identifier first. These strings come from developer-authored widget
         * definitions rather than from a request, but "not currently reachable
         * from user input" is a property of today's callers, not of this
         * method — and it is one refactor away from being false.
         */
        if (preg_match('/^[a-zA-Z_][a-zA-Z0-9_]*$/', $column) !== 1) {
            throw new InvalidArgumentException(
                "[{$column}] is not a valid column identifier for a time series bucket."
            );
        }

        return match ($driver) {
            'sqlite' => sprintf("strftime('%s', %s)", $this->sqliteFormat(), $column),
            'mysql', 'mariadb' => sprintf("DATE_FORMAT(%s, '%s')", $column, $this->mysqlFormat()),
            'pgsql' => sprintf("to_char(date_trunc('%s', %s), '%s')", $this->value, $column, $this->pgsqlFormat()),
            'sqlsrv' => sprintf("FORMAT(%s, '%s')", $column, $this->sqlsrvFormat()),
            default => throw new RuntimeException(
                "No time series bucketing strategy for database driver [{$driver}]. "
                . 'Truncating a timestamp has no portable spelling, so this must be '
                . 'declared explicitly rather than guessed — a guess here produces a '
                . 'chart that is wrong without being broken.'
            ),
        };
    }

    /** The PHP format producing the same string the SQL above emits. */
    public function phpFormat(): string
    {
        return match ($this) {
            self::Hour => 'Y-m-d H:00:00',
            self::Day => 'Y-m-d',
            self::Month => 'Y-m',
        };
    }

    /** Advance one bucket. Used to walk the range when gap-filling. */
    public function next(DateTimeImmutable $at): DateTimeImmutable
    {
        return match ($this) {
            self::Hour => $at->modify('+1 hour'),
            self::Day => $at->modify('+1 day'),
            self::Month => $at->modify('+1 month'),
        };
    }

    /** Snap a moment down to the start of its bucket. */
    public function floor(DateTimeImmutable $at): DateTimeImmutable
    {
        return match ($this) {
            self::Hour => $at->setTime((int) $at->format('H'), 0),
            self::Day => $at->setTime(0, 0),
            self::Month => $at->setDate((int) $at->format('Y'), (int) $at->format('n'), 1)->setTime(0, 0),
        };
    }

    /** The human label for one point, e.g. `14:00`, `3 Feb`, `Feb 2026`. */
    public function label(DateTimeImmutable $at): string
    {
        return match ($this) {
            self::Hour => $at->format('H:i'),
            self::Day => $at->format('j M'),
            self::Month => $at->format('M Y'),
        };
    }

    private function sqliteFormat(): string
    {
        return match ($this) {
            self::Hour => '%Y-%m-%d %H:00:00',
            self::Day => '%Y-%m-%d',
            self::Month => '%Y-%m',
        };
    }

    private function mysqlFormat(): string
    {
        return match ($this) {
            self::Hour => '%Y-%m-%d %H:00:00',
            self::Day => '%Y-%m-%d',
            self::Month => '%Y-%m',
        };
    }

    private function pgsqlFormat(): string
    {
        return match ($this) {
            self::Hour => 'YYYY-MM-DD HH24:00:00',
            self::Day => 'YYYY-MM-DD',
            self::Month => 'YYYY-MM',
        };
    }

    private function sqlsrvFormat(): string
    {
        return match ($this) {
            self::Hour => 'yyyy-MM-dd HH:00:00',
            self::Day => 'yyyy-MM-dd',
            self::Month => 'yyyy-MM',
        };
    }
}
