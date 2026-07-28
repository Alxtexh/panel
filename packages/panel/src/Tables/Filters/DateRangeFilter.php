<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables\Filters;

use Illuminate\Database\Query\Builder;
use Illuminate\Support\Carbon;
use Throwable;

/**
 * A date range, with named presets.
 *
 * The sharpest omission for a billing panel: "clients expiring this week" was
 * not expressible at all.
 *
 * BOUNDARIES ARE COMPUTED IN THE TENANT'S TIMEZONE and converted to UTC for the
 * query (addendum C). "Today" in Nairobi is not "today" in UTC, and a range
 * computed in the wrong zone silently returns the wrong rows for three hours
 * either side of midnight - the sort of error nobody notices until a report
 * disagrees with a customer.
 *
 * The end of the range is EXCLUSIVE (`< next day`) rather than `<= end of day`.
 * A `<=` against a datetime column misses everything between 00:00:00 and
 * 23:59:59.999 on the final day depending on precision, which is a genuinely
 * confusing off-by-one to debug.
 */
final class DateRangeFilter extends Filter
{
    /** @var array<string, string> preset => label */
    private const PRESETS = [
        'today' => 'Today',
        'yesterday' => 'Yesterday',
        'last_7_days' => 'Last 7 days',
        'last_30_days' => 'Last 30 days',
        'this_month' => 'This month',
        'last_month' => 'Last month',
        'next_7_days' => 'Next 7 days',
        'next_30_days' => 'Next 30 days',
    ];

    private ?string $timezone = null;

    /** Defaults to the application timezone; pass the tenant's when known. */
    public function timezone(string $timezone): static
    {
        $this->timezone = $timezone;

        return $this;
    }

    private function zone(): string
    {
        return $this->timezone ?? (string) config('app.timezone', 'UTC');
    }

    /**
     * A preset name, or an explicit `from..to` pair of Y-m-d dates.
     *
     * @return array{from: string, to: string}|null
     */
    public function normalise(mixed $raw): ?array
    {
        if (! is_string($raw) || $raw === '') {
            return null;
        }

        if (array_key_exists($raw, self::PRESETS)) {
            // The RAW value is carried alongside the resolved range so the URL
            // keeps saying 'this_month' rather than a pair of absolute
            // timestamps. A shared link then still means "this month" tomorrow,
            // which is almost always what the person sharing it meant.
            return [...$this->resolvePreset($raw), 'preset' => $raw];
        }

        // Explicit range: 2026-01-01..2026-01-31
        if (str_contains($raw, '..')) {
            [$from, $to] = array_pad(explode('..', $raw, 2), 2, '');

            try {
                $start = Carbon::parse($from, $this->zone())->startOfDay();
                // Exclusive end. See the class docblock.
                $end = Carbon::parse($to, $this->zone())->startOfDay()->addDay();
            } catch (Throwable) {
                return null;
            }

            return [
                'from' => $start->utc()->toDateTimeString(),
                'to' => $end->utc()->toDateTimeString(),
                'preset' => $raw,
            ];
        }

        return null;
    }

    /** @return array{from: string, to: string} */
    private function resolvePreset(string $preset): array
    {
        $now = Carbon::now($this->zone());

        [$start, $end] = match ($preset) {
            'today' => [$now->copy()->startOfDay(), $now->copy()->startOfDay()->addDay()],
            'yesterday' => [$now->copy()->subDay()->startOfDay(), $now->copy()->startOfDay()],
            'last_7_days' => [$now->copy()->subDays(6)->startOfDay(), $now->copy()->startOfDay()->addDay()],
            'last_30_days' => [$now->copy()->subDays(29)->startOfDay(), $now->copy()->startOfDay()->addDay()],
            'this_month' => [$now->copy()->startOfMonth(), $now->copy()->startOfMonth()->addMonth()],
            'last_month' => [$now->copy()->subMonth()->startOfMonth(), $now->copy()->startOfMonth()],
            'next_7_days' => [$now->copy()->startOfDay(), $now->copy()->startOfDay()->addDays(7)],
            'next_30_days' => [$now->copy()->startOfDay(), $now->copy()->startOfDay()->addDays(30)],
            default => [$now->copy()->startOfDay(), $now->copy()->startOfDay()->addDay()],
        };

        return ['from' => $start->utc()->toDateTimeString(), 'to' => $end->utc()->toDateTimeString()];
    }

    public function apply(Builder $query, mixed $value): void
    {
        // Half-open interval: >= from, < to. Inclusive on both ends would
        // double-count a row sitting exactly on a boundary when two ranges abut.
        $query->where($this->resolvedColumn(), '>=', $value['from'])
            ->where($this->resolvedColumn(), '<', $value['to']);
    }

    public function toQueryValue(mixed $value): string
    {
        return is_array($value) ? ($value['preset'] ?? '') : (string) $value;
    }

    protected function schemaType(): string
    {
        return 'daterange';
    }

    public function toArray(): array
    {
        return [
            'key' => $this->key,
            'label' => $this->resolvedLabel(),
            'type' => 'daterange',
            'presets' => self::PRESETS,
        ];
    }

    public function toSchema(): array
    {
        // Presets are STRUCTURE, not tenant data, so they belong in the cached
        // schema - unlike a select's options, which are rows.
        return [...parent::toSchema(), 'presets' => self::PRESETS];
    }
}
