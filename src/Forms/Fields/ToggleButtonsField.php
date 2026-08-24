<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

use Illuminate\Validation\Rule;

/**
 * One (or several) choices drawn as buttons, not radios or a dropdown.
 *
 * WHY IT IS NOT RadioField. Radios are fine when the label is enough.
 * Toggle buttons carry colour and optional icons so a status or a yes/no
 * decision reads at a glance: draft / scheduled / published with tones, or
 * Yes / No with check and x. Filament's ToggleButtons without Livewire.
 *
 * VALIDATES LIKE RadioField (single) or CheckboxListField (multiple):
 * empty option lists reject everything rather than accepting anything.
 */
final class ToggleButtonsField extends Field
{
    use HasChoices;

    /** @var array<string|int, string> value => success|warning|danger|info|primary|neutral */
    private array $colors = [];

    /** @var array<string|int, string> value => semantic icon name */
    private array $icons = [];

    /** @var array<string|int, string> value => tooltip */
    private array $tooltips = [];

    private bool $multiple = false;

    private bool $inline = true;

    private bool $grouped = false;

    private bool $hiddenLabels = false;

    private ?int $columns = null;

    /**
     * @param  array<string|int, string>  $colors  value => tone name
     */
    public function colors(array $colors): static
    {
        $this->colors = $colors;

        return $this;
    }

    /**
     * @param  array<string|int, string>  $icons  value => icon name from the kit set
     */
    public function icons(array $icons): static
    {
        $this->icons = $icons;

        return $this;
    }

    /**
     * @param  array<string|int, string>  $tooltips  value => hover / title text
     */
    public function tooltips(array $tooltips): static
    {
        $this->tooltips = $tooltips;

        return $this;
    }

    /** Yes / No with success and danger tones, stored as 1 / 0. */
    public function boolean(string $trueLabel = 'Yes', string $falseLabel = 'No'): static
    {
        $this->options([
            1 => $trueLabel,
            0 => $falseLabel,
        ]);
        $this->colors([
            1 => 'success',
            0 => 'danger',
        ]);
        $this->icons([
            1 => 'check',
            0 => 'x',
        ]);

        return $this;
    }

    /** Allow several values; stored as an array. */
    public function multiple(bool $multiple = true): static
    {
        $this->multiple = $multiple;

        return $this;
    }

    /** Lay buttons in a wrapping row (default) instead of a column grid. */
    public function inline(bool $inline = true): static
    {
        $this->inline = $inline;

        return $this;
    }

    /** Join buttons into one segmented control. */
    public function grouped(bool $grouped = true): static
    {
        $this->grouped = $grouped;

        return $this;
    }

    /** Show only icons (labels stay as aria-label / title). */
    public function hiddenLabels(bool $hidden = true): static
    {
        $this->hiddenLabels = $hidden;

        return $this;
    }

    /** Grid columns when not inline. */
    public function columns(int $columns): static
    {
        $this->columns = max(1, $columns);

        return $this;
    }

    public function type(): string
    {
        return 'toggle-buttons';
    }

    protected function typeRules(): array
    {
        if ($this->multiple) {
            return ['array'];
        }

        return [Rule::in(array_keys($this->resolvedOptionMap()))];
    }

    /**
     * @return array<string, list<mixed>>
     */
    public function additionalRules(): array
    {
        if (! $this->multiple) {
            return [];
        }

        return [
            $this->key.'.*' => [Rule::in(array_keys($this->resolvedOptionMap()))],
        ];
    }

    public function toSchema(): array
    {
        return array_filter([
            ...parent::toSchema(),
            'colors' => $this->colors === [] ? null : $this->stringKeyed($this->colors),
            'icons' => $this->icons === [] ? null : $this->stringKeyed($this->icons),
            'tooltips' => $this->tooltips === [] ? null : $this->stringKeyed($this->tooltips),
            'multiple' => $this->multiple ?: null,
            'inline' => $this->inline,
            'grouped' => $this->grouped ?: null,
            'hiddenLabels' => $this->hiddenLabels ?: null,
            'columns' => $this->columns,
        ], static fn (mixed $v): bool => $v !== null);
    }

    /**
     * JSON object keys are strings; keep option maps addressable after round-trip.
     *
     * @param  array<string|int, string>  $map
     * @return array<string, string>
     */
    private function stringKeyed(array $map): array
    {
        $out = [];

        foreach ($map as $key => $value) {
            $out[(string) $key] = $value;
        }

        return $out;
    }
}
