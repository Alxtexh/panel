<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables\Columns;

/**
 * A date or datetime, rendered client-side.
 *
 * Formatting is NOT done here. The schema declares the intent (`date` vs
 * `datetime`) and the client formats using the viewer's locale.
 *
 * Addendum C also requires display in the TENANT's timezone with UTC storage.
 * The timezone is tenant data, so it cannot live in the schema — it ships as a
 * shared prop and the client applies it. That keeps this column identical for
 * every tenant and the schema cacheable without a tenant key.
 */
final class DateColumn extends Column
{
    private bool $withTime = false;

    public function withTime(bool $withTime = true): static
    {
        $this->withTime = $withTime;

        return $this;
    }

    public function type(): string
    {
        return $this->withTime ? 'datetime' : 'date';
    }
}
