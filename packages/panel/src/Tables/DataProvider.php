<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables;

use Illuminate\Http\Request;

/** Read-only data source for a table that is not backed by Eloquent. */
interface DataProvider
{
    /**
     * Apply the table state (search, filters, sort, and cursor) in the source.
     *
     * @param  array<string, mixed>  $state
     */
    public function provide(Request $request, array $state, int $perPage): DataProviderResult;
}
