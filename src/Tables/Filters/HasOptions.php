<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Filters;

/**
 * A filter whose options are TENANT DATA and ship beside the records.
 *
 * An interface rather than an `instanceof SelectFilter` check, because that
 * check silently excluded MultiSelectFilter - it extends Filter directly, so its
 * options were never sent and the chips rendered empty with no error anywhere.
 * A new option-bearing filter type would have hit the same wall.
 */
interface HasOptions
{
    /** @return list<string> */
    public function resolvedOptions(): array;
}
