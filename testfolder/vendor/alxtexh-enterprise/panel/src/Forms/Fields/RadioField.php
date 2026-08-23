<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

use Illuminate\Validation\Rule;

/**
 * One choice from a handful, all of them visible.
 *
 * WHY IT IS NOT JUST A SELECT. A dropdown hides its options until it is opened,
 * which is right for fifty plans and wrong for three delivery methods: the
 * choices themselves are the information, and hiding them makes somebody click
 * to find out what the question even is. The rule of thumb this exists for is
 * "if reading the options is part of deciding, show them".
 *
 * IT VALIDATES EXACTLY LIKE A SELECT, through `Rule::in` over the resolved
 * options - including when the list resolves EMPTY, which rejects everything
 * rather than accepting anything. A tenant-scoped option list that returns
 * nothing means "there is nothing you may choose", and a field that shrugged and
 * accepted the submitted value would be a hole where the option list is only
 * decoration.
 */
final class RadioField extends Field
{
    use HasChoices;

    private bool $inline = false;

    /**
     * Lay the choices out in a row.
     *
     * LAYOUT INTENT, NOT A CSS CLASS - the schema carries meaning and the client
     * decides what that looks like. Inline suits two or three short labels;
     * stacked is the default because a long label wrapping inside a row is
     * harder to read than the same label on its own line.
     */
    public function inline(bool $inline = true): static
    {
        $this->inline = $inline;

        return $this;
    }

    public function type(): string
    {
        return 'radio';
    }

    protected function typeRules(): array
    {
        return [Rule::in(array_keys($this->resolvedOptionMap()))];
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'inline' => $this->inline,
        ];
    }
}
