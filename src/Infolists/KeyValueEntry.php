<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Infolists;

/**
 * A map, shown as labelled pairs on the dedicated view page.
 *
 * The table cell summarises a map as a count. Here there is room, so the
 * pairs themselves render. A non-map value is shown as itself rather than as
 * an empty map.
 */
final class KeyValueEntry extends Entry
{
    private ?string $keyLabel = null;

    private ?string $valueLabel = null;

    public function type(): string
    {
        return 'keyvalue';
    }

    public function labels(string $key, string $value): static
    {
        $this->keyLabel = $key;
        $this->valueLabel = $value;

        return $this;
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'keyLabel' => $this->keyLabel,
            'valueLabel' => $this->valueLabel,
        ];
    }
}
