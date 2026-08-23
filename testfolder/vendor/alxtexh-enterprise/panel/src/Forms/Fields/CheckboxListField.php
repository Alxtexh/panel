<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

use Illuminate\Validation\Rule;

/**
 * Several choices from a handful, all of them visible.
 *
 * WHAT IT IS NOT. `MultiSelectField` is a token input: options are hidden until
 * you type, which is right for choosing four routers out of nine hundred. This
 * is for the case where the options are a SHORT, KNOWN list and reading them is
 * part of the decision - which notification channels, which days of the week -
 * and a control that hides them makes somebody open it just to learn what the
 * question is.
 *
 * THE VALIDATION IS TWO RULES, and this is the part worth copying. `array`
 * guards the field and `key.*` guards each MEMBER: a rule set that validates
 * only the array accepts `['email', 'anything']`, because the array is indeed an
 * array. That hole is the reason `additionalRules()` exists at all.
 *
 * AN EMPTY OPTION LIST REJECTS EVERYTHING rather than accepting anything. A
 * tenant-scoped list resolving to nothing means "there is nothing you may
 * choose", and the alternative reading - "no constraint" - is how one
 * organisation's ids end up written against another's record.
 */
final class CheckboxListField extends Field
{
    use HasChoices;

    private ?int $columns = null;

    /**
     * Lay the boxes out in several columns.
     *
     * A NUMBER, NOT A CLASS. The schema carries layout INTENT and the client
     * decides what that means at each width - a grid declared here as `md:grid-
     * cols-3` would be a CSS decision taken on the server, where nothing knows
     * how wide the form is.
     */
    public function columns(int $columns): static
    {
        $this->columns = max(1, $columns);

        return $this;
    }

    public function type(): string
    {
        return 'checkboxlist';
    }

    /**
     * `array`, and never `required` on its own.
     *
     * An unticked list submits nothing at all, so `required` alone rejects the
     * legitimate "none of these" answer with a message about a missing field.
     * `required` combined with `array` is what a caller means by "at least one",
     * and they declare it themselves.
     */
    protected function typeRules(): array
    {
        return ['array'];
    }

    /**
     * The member rule - the one that makes the option list mean something.
     *
     * @return array<string, list<mixed>>
     */
    public function additionalRules(): array
    {
        return [
            $this->key.'.*' => [Rule::in(array_keys($this->resolvedOptionMap()))],
        ];
    }

    public function toSchema(): array
    {
        return array_filter([
            ...parent::toSchema(),
            'columns' => $this->columns,
        ], static fn (mixed $v): bool => $v !== null);
    }
}
