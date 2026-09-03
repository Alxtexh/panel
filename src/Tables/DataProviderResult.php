<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables;

/** One page returned by a custom table data provider. */
final readonly class DataProviderResult
{
    /**
     * @param  list<array<string, mixed>>  $records
     */
    public function __construct(
        public array $records,
        public bool $hasMore,
        public ?string $nextCursor,
        public int $total,
    ) {}
}
