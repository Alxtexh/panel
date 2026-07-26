<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables;

use Closure;

/**
 * The outcome of a list query, shaped for Inertia props.
 *
 * `total` is a Closure rather than an int on purpose. §10 forbids blocking a
 * list response on COUNT(*), so the caller wraps it in Inertia::defer() and the
 * rows paint before the count runs. Returning an int here would make it
 * impossible for a caller to honour that, however careful they were.
 */
final readonly class ListResult
{
    /**
     * @param  list<array<string, mixed>>  $records
     * @param  array{search: string, sort: string, direction: string, cursor: string|null, filters: array<string, mixed>}  $state
     * @param  list<array<string, mixed>>  $filterSchema
     * @param  Closure(): int  $total
     */
    public function __construct(
        public array $records,
        public array $state,
        public array $filterSchema,
        public ?string $nextCursor,
        public int $perPage,
        public Closure $total,
    ) {}

    /**
     * Props every list screen shares, minus the deferred total.
     *
     * The caller adds `'total' => Inertia::defer($result->total)` itself rather
     * than this class reaching for Inertia — packages/panel stays usable outside
     * an Inertia request, and the deferral stays visible at the call site where
     * someone might otherwise remove it without noticing what it was for.
     *
     * @return array<string, mixed>
     */
    public function toProps(): array
    {
        return [
            'records' => $this->records,
            'filters' => $this->state['filters'],
            'search' => $this->state['search'],
            'sort' => $this->state['sort'],
            'direction' => $this->state['direction'],
            'filterSchema' => $this->filterSchema,
            'nextCursor' => $this->nextCursor,
            'perPage' => $this->perPage,
        ];
    }
}
