<?php

declare(strict_types=1);

namespace PanelKit\Panel\Alerts;

use Closure;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Throwable;

/**
 * A declared condition that MAY produce an alert.
 *
 * The closure returns an Alert when the condition holds and null when it does
 * not - "no alert" is the normal, healthy answer, and modelling it as null
 * rather than as a zero-severity alert saves every caller from filtering out
 * non-alerts.
 *
 * A RULE THAT THROWS IS SKIPPED, not fatal, for the same reason a widget that
 * throws does not take the dashboard with it. The alert panel is what an
 * operator opens WHEN something is wrong, so it is the worst possible surface
 * to have fail closed on one bad query.
 */
final class AlertRule
{
    private function __construct(
        public readonly string $key,
        private readonly Closure $resolver,
    ) {}

    /**
     * How many matches a rule counts before it stops caring.
     *
     * A BELL IS NOT A REPORT. "84,846 subscribers are past their expiry date"
     * and "500+ subscribers are past their expiry date" prompt exactly the same
     * action, and only one of them costs a fifth of a second every time somebody
     * opens the dropdown.
     */
    public const CAP = 500;

    /** @param Closure(): ?Alert $resolver */
    public static function make(string $key, Closure $resolver): self
    {
        return new self($key, $resolver);
    }

    /**
     * Count matches, giving up at `$cap`.
     *
     * THIS IS IN THE PACKAGE BECAUSE THE MISTAKE IS. The reference app's rules
     * each read `->count()`, which walks every matching row: on its estate the
     * expiry rule matched 84,846 of them and the bell took 303 ms - sixty times
     * the next slowest screen - while issuing only eight queries, so nothing
     * about the query count looked wrong and the benchmark never touched the
     * path at all. The right index took it to 185 ms and no further, because the
     * cost was never the lookup: an exact count of 84,846 rows costs 84,846
     * steps however good the index is. The fix is to stop asking for one.
     *
     * `limit()` INSIDE A SUBQUERY rather than on the count itself, because
     * `count()` collapses the whole result to one row and a LIMIT applies to
     * THAT - so `->limit(500)->count()` returns the true total and reads every
     * row, which is the bug it looks like it is fixing.
     */
    public static function countUpTo(Builder $query, int $cap = self::CAP): int
    {
        return DB::query()
            ->fromSub($query->select(DB::raw('1'))->limit($cap), 'capped')
            ->count();
    }

    /** "500+" once the cap is hit, so a label never claims more precision than was paid for. */
    public static function describeCount(int $count, int $cap = self::CAP): string
    {
        return $count >= $cap ? $cap.'+' : (string) $count;
    }

    public function resolve(): ?Alert
    {
        try {
            return ($this->resolver)();
        } catch (Throwable $e) {
            Log::error('Panel alert rule failed to resolve.', [
                'component' => 'AlertRule',
                'operation' => 'resolve',
                'rule' => $this->key,
                'exception' => $e->getMessage(),
            ]);

            return null;
        }
    }

    /**
     * Resolve a set of rules, dropping the ones that do not currently apply.
     *
     * @param  list<self>  $rules
     * @return list<array<string, mixed>>
     */
    public static function resolveAll(array $rules): array
    {
        $out = [];

        foreach ($rules as $rule) {
            $alert = $rule->resolve();

            if ($alert !== null) {
                $out[] = $alert->toArray();
            }
        }

        // Most severe first: an operator opening this panel wants the worst
        // thing at the top, not whichever rule happened to be declared first.
        $order = [Alert::DANGER => 0, Alert::WARNING => 1, Alert::INFO => 2];

        usort($out, static fn (array $a, array $b): int => ($order[$a['severity']] ?? 9) <=> ($order[$b['severity']] ?? 9));

        return $out;
    }
}
