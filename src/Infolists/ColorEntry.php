<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Infolists;

/**
 * A stored colour, shown as the colour, on the dedicated view page.
 *
 * Named ColorEntry to match Filament. The schema type is `color`; the client
 * also accepts `colour` so ColourColumn fallbacks stay consistent.
 *
 * An empty or malformed value renders as nothing rather than as black.
 */
final class ColorEntry extends Entry
{
    private bool $showValue = true;

    public function type(): string
    {
        return 'color';
    }

    public function swatchOnly(): static
    {
        $this->showValue = false;

        return $this;
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'showValue' => $this->showValue,
        ];
    }
}
