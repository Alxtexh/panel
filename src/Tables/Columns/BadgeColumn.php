<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables\Columns;

/**
 * A value rendered as a badge, coloured by a SEMANTIC name.
 *
 * `->colors(['active' => 'success'])` maps a value to an intent, never to a CSS
 * class. Vue owns what "success" looks like — antipatterns §6.1 makes that a
 * hard boundary, because a class string authored in PHP is invisible to the CSS
 * scanner and gets purged without an error.
 *
 * The map is a plain array, not a closure: it must serialise into the cached
 * schema, and a closure cannot. Anything genuinely dynamic belongs in the data
 * payload rather than the schema.
 */
final class BadgeColumn extends Column
{
    /** @var array<string, string> value => semantic intent */
    private array $colors = [];

    private string $default = 'neutral';

    /** @param array<string, string> $colors */
    public function colors(array $colors): static
    {
        $this->colors = $colors;

        return $this;
    }

    public function defaultColor(string $intent): static
    {
        $this->default = $intent;

        return $this;
    }

    public function type(): string
    {
        return 'badge';
    }

    public function toArray(): array
    {
        return [...parent::toArray(), 'colors' => $this->colors, 'defaultColor' => $this->default];
    }
}
