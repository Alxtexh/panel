<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Widgets;

/**
 * How `blocks` dashboard layout places charts.
 *
 * dashboard-01 is a row of section cards, then ONE full-width time-series
 * card, then whatever is left. Classic packing is independent column tracks
 * from the first chart, so a doughnut sits beside the area plot and the
 * hero never reads as a hero.
 *
 * AREA / LINE TYPES ONLY. A `span(2)` pie is still a pie: stretching it
 * full-width is not the ChartAreaInteractive pattern. Tables, catalogs and
 * remaining plots sit below so they do not compete with the hero for the
 * first viewport.
 *
 * PURE AND ORDER-PRESERVING. The first qualifying chart is the hero; every
 * other key keeps declaration order. Vue applies the same rule to the
 * currently visible charts so hiding the hero promotes the next series.
 */
final class DashboardPacking
{
    /** @var list<string> */
    public const HERO_TYPES = ['area', 'line', 'steppedLine', 'multiAxis'];

    /**
     * @param  list<array{key: string, type?: string}>  $charts
     * @return array{hero: string|null, rest: list<string>}
     */
    public static function pack(array $charts): array
    {
        $hero = null;
        $rest = [];

        foreach ($charts as $chart) {
            $key = $chart['key'] ?? null;

            if (! is_string($key) || $key === '') {
                continue;
            }

            $type = is_string($chart['type'] ?? null) ? $chart['type'] : '';

            if ($hero === null && in_array($type, self::HERO_TYPES, true)) {
                $hero = $key;

                continue;
            }

            $rest[] = $key;
        }

        return ['hero' => $hero, 'rest' => $rest];
    }
}
