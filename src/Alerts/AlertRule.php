<?php

declare(strict_types=1);

namespace PanelKit\Panel\Alerts;

use Closure;
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

    /** @param Closure(): ?Alert $resolver */
    public static function make(string $key, Closure $resolver): self
    {
        return new self($key, $resolver);
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
