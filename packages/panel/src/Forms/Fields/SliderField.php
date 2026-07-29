<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

/**
 * A number chosen by dragging, within a declared range.
 *
 * IT IS FOR NUMBERS WHERE THE RANGE IS THE POINT. "How much of the plan's speed
 * may this subscriber use", "what percentage triggers the alert" - questions
 * where somebody is picking a position between two known ends rather than typing
 * a figure they already know. For a price or a port number a text input is
 * better: a slider makes an exact value fiddly to hit and hides what the
 * neighbouring values are.
 *
 * THE BOUNDS ARE VALIDATED, NOT JUST DRAWN. A range input is trivially bypassed
 * - the value posts as an ordinary form field - so `min` and `max` become
 * `between`, enforced on the server. Without that the control is a suggestion
 * and the column takes whatever was typed into the request.
 *
 * THE STEP IS ENFORCED TOO, because "between 0 and 100 in tens" that quietly
 * accepts 37 stores a value nothing downstream expects - a tier, a percentage
 * band, a quota bucket - and the first thing to notice is a report that does not
 * add up.
 */
final class SliderField extends Field
{
    private float|int $min = 0;

    private float|int $max = 100;

    private float|int $step = 1;

    private ?string $unit = null;

    public function range(float|int $min, float|int $max): static
    {
        $this->min = $min;
        $this->max = $max;

        return $this;
    }

    public function step(float|int $step): static
    {
        $this->step = $step;

        return $this;
    }

    /**
     * What the number is measured in - `Mbps`, `%`, `days`.
     *
     * SHOWN BESIDE THE VALUE, because a slider reading `40` answers a different
     * question depending on whether that is megabits, percent or days, and the
     * label above it is usually phrased as the question rather than the unit.
     */
    public function unit(string $unit): static
    {
        $this->unit = $unit;

        return $this;
    }

    public function type(): string
    {
        return 'slider';
    }

    protected function typeRules(): array
    {
        return [
            'numeric',
            'between:'.$this->min.','.$this->max,
            /*
             * `multiple_of` rather than a custom closure, so the message somebody
             * sees is Laravel's own and translates with everything else. A step
             * of 1 is still worth declaring: it is what rejects 2.5 on an
             * integer setting.
             */
            'multiple_of:'.$this->step,
        ];
    }

    public function toSchema(): array
    {
        return array_filter([
            ...parent::toSchema(),
            'min' => $this->min,
            'max' => $this->max,
            'step' => $this->step,
            'unit' => $this->unit,
        ], static fn (mixed $v): bool => $v !== null);
    }
}
