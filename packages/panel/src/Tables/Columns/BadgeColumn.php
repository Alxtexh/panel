<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Columns;

/**
 * A value rendered as a badge, coloured by a SEMANTIC name.
 *
 * `->colors(['active' => 'success'])` maps a value to an intent, never to a CSS
 * class. Vue owns what "success" looks like - antipatterns §6.1 makes that a
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
    /** @var array<string|int, string> */
    private array $labels = [];

    public function colors(array $colors): static
    {
        $this->colors = $colors;

        return $this;
    }

    /**
     * What each value READS as, when the stored value is not the words.
     *
     * A boolean column has no text of its own - `1` and `0` are not labels -
     * and the client used to fall back to the column's own label for true and
     * "not <label>" for false. That worked only while the label happened to be
     * an adjective: renaming the column to "Status" made every active row read
     * "Status" and every retired one "Not status".
     *
     * Saying it explicitly removes the guess, and lets false be "Retired"
     * rather than the negation of whatever the heading says.
     *
     * @param  array<string|int, string>  $labels
     */
    public function labels(array $labels): static
    {
        $this->labels = $labels;

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
        return array_filter([
            ...parent::toArray(),
            'colors' => $this->colors,
            'defaultColor' => $this->default,
            'labels' => $this->labels === [] ? null : $this->labels,
        ], static fn (mixed $v): bool => $v !== null);
    }
}
