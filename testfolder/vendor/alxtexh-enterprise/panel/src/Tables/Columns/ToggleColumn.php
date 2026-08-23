<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Columns;

use InvalidArgumentException;

/**
 * A boolean switched directly in the row.
 *
 * The value is normalised through `filter_var` rather than a cast, because the
 * strings that arrive over JSON are not what a PHP cast expects: `(bool) "false"`
 * is TRUE, and `(bool) "0"` is false. A column that silently turns "false" into
 * true is a bug that only shows up through one specific client.
 */
final class ToggleColumn extends EditableColumn
{
    private ?string $onLabel = null;

    private ?string $offLabel = null;

    public function type(): string
    {
        return 'toggle';
    }

    public function labels(string $on, string $off): self
    {
        $this->onLabel = $on;
        $this->offLabel = $off;

        return $this;
    }

    public function castValue(mixed $value): bool
    {
        $cast = filter_var($value, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);

        if ($cast === null) {
            throw new InvalidArgumentException('Expected a boolean.');
        }

        return $cast;
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return [
            ...parent::toArray(),
            'onLabel' => $this->onLabel,
            'offLabel' => $this->offLabel,
        ];
    }
}
