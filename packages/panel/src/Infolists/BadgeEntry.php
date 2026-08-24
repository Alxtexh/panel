<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Infolists;

/**
 * A coloured badge on the dedicated view page.
 *
 * Maps a stored value (e.g. a status slug) to a badge colour. The client
 * already knows how to render `type: badge` via PkBadge, so this entry
 * only needs to carry the colour map.
 */
final class BadgeEntry extends Entry
{
    /** @var array<string, string> */
    private array $colors = [];

    private string $defaultColor = 'neutral';

    public function type(): string
    {
        return 'badge';
    }

    /** @param array<string, string> $colors value => success|danger|warning|neutral|info */
    public function colors(array $colors): static
    {
        $this->colors = $colors;

        return $this;
    }

    public function defaultColor(string $color): static
    {
        $this->defaultColor = $color;

        return $this;
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'colors' => $this->colors ?: null,
            'defaultColor' => $this->defaultColor,
        ];
    }
}
