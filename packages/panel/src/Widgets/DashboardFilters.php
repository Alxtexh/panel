<?php

declare(strict_types=1);

namespace PanelKit\Panel\Widgets;

use DateTimeImmutable;
use Illuminate\Http\Request;
use Throwable;

/**
 * The dashboard-wide filter: a date range, and sets of ids per dimension.
 *
 * THE DIMENSIONS ARE DECLARED, NOT BUILT IN. This class used to have a public
 * `routers` array on it, because the reference application filters its dashboard
 * by router - so every installation of this package carried an ISP's vocabulary
 * in a base class, and a panel about invoices had a filter dimension it could
 * neither use nor remove. A dashboard declares its dimensions in
 * `filterDimensions()` and they arrive here as keys.
 *
 * WHAT IT DOES TO PER-CHART PERIODS. When a range is set it OVERRIDES every
 * chart's own period selector, and the selectors are hidden while it is active.
 * The alternative - letting both apply - produces a dashboard where one card
 * says "last 7 days" and another says "March", and nobody can tell whether two
 * numbers beside each other cover the same time. A global filter has to be
 * global or it is a trap.
 *
 * EVERY VALUE IS PARSED, NEVER INTERPOLATED. Dates come in as strings from a
 * query string and reach date expressions; ids reach a `whereIn`. Both are
 * coerced to real types here so nothing downstream has to remember to.
 *
 * AN UNPARSEABLE DATE IS DROPPED, NOT AN ERROR. A hand-edited or stale URL
 * should show an unfiltered dashboard, not a 500 - the filter is a convenience,
 * and failing it closed would make a bad bookmark look like an outage.
 */
final class DashboardFilters
{
    /**
     * @param  array<string, list<int>>  $selections  dimension key => chosen ids
     */
    private function __construct(
        public readonly ?Window $window,
        public readonly array $selections,
        public readonly ?string $from,
        public readonly ?string $to,
    ) {}

    /**
     * @param  list<string>  $dimensions  the keys this dashboard declared
     */
    public static function fromRequest(Request $request, DateTimeImmutable $now, array $dimensions = []): self
    {
        $from = self::parseDate($request->query('from'));
        $to = self::parseDate($request->query('to'));

        $window = null;

        if ($from !== null && $to !== null) {
            $window = Window::between($from, $to);
        } elseif ($from !== null) {
            // An open-ended range means "since then", which is a reasonable
            // reading and much friendlier than refusing a half-filled form.
            $window = Window::between($from, $now);
        }

        $selections = [];

        /*
         * ONLY DECLARED KEYS ARE READ. A query string can name anything; taking
         * whatever it names would let a URL invent a dimension the dashboard
         * never offered, and the value would then travel into whatever the page
         * does with `selected()`.
         */
        foreach ($dimensions as $key) {
            $selections[$key] = self::parseIds($request->query($key));
        }

        return new self(
            $window,
            $selections,
            $from?->format('Y-m-d'),
            $to?->format('Y-m-d'),
        );
    }

    /**
     * The ids chosen for one dimension - empty meaning "no filter", not "none".
     *
     * @return list<int>
     */
    public function selected(string $dimension): array
    {
        return $this->selections[$dimension] ?? [];
    }

    public function isActive(): bool
    {
        foreach ($this->selections as $ids) {
            if ($ids !== []) {
                return true;
            }
        }

        return $this->window !== null;
    }

    /** The window to plot, given a chart's own period as the fallback. */
    public function windowFor(Period $period, DateTimeImmutable $now): Window
    {
        return $this->window ?? Window::fromPeriod($period, $now);
    }

    /** @return array<string, mixed> For the client, so the panel reflects the URL. */
    public function toArray(): array
    {
        return [
            'from' => $this->from,
            'to' => $this->to,
            'selections' => (object) $this->selections,
            'active' => $this->isActive(),
            'label' => $this->window?->label(),
        ];
    }

    private static function parseDate(mixed $value): ?DateTimeImmutable
    {
        if (! is_string($value) || trim($value) === '') {
            return null;
        }

        try {
            // A date-only string means the START of that day; letting it default
            // to the current time would exclude everything earlier today.
            $date = new DateTimeImmutable(trim($value));
        } catch (Throwable) {
            return null;
        }

        return $date->setTime(0, 0);
    }

    /**
     * @return list<int>
     */
    private static function parseIds(mixed $value): array
    {
        $raw = is_string($value) ? explode(',', $value) : (is_array($value) ? $value : []);

        $ids = [];

        foreach ($raw as $id) {
            if (is_numeric($id) && (int) $id > 0) {
                $ids[] = (int) $id;
            }
        }

        // Bounded: this reaches a whereIn, and an unbounded list from a query
        // string is a way to build an arbitrarily large query.
        return array_slice(array_values(array_unique($ids)), 0, 100);
    }
}
