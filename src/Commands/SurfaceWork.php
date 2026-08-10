<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Closure;

/**
 * A benchmarked surface whose setup must not be on the clock.
 *
 * MOST SURFACES DO NOT NEED THIS - a plain closure is the common case. The one
 * that does is the DEFERRED COUNT: the panel sends rows first and resolves the
 * total afterwards, so the count's honest cost is the count alone. Timing the
 * call that produces both charges the count with the page's query and reports a
 * one-query surface as two.
 *
 * Setup re-runs before EVERY sample rather than once, because a value computed
 * once and reused would let the second run measure an already-resolved closure -
 * a count that takes 13 ms would report 0.001 ms and look like a triumph.
 */
final readonly class SurfaceWork
{
    public function __construct(
        /** @var Closure(): mixed Produces the state the timed work needs. Never timed. */
        public Closure $setup,
        /** @var Closure(mixed): mixed The measured work. */
        public Closure $work,
    ) {}
}
