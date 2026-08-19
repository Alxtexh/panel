<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Schema;

/**
 * A titled group of fields, without the card.
 *
 * WHEN THIS AND NOT `Section`. A section is a surface - its own card, its own
 * border, its own place on the page. Nesting one inside another gives you a
 * card inside a card, which reads as two separate things when it is one thing
 * with a part named.
 *
 * A fieldset is that named part: a heading, a rule, and the fields under it,
 * sharing the surface of whatever contains it. "Billing address" inside a
 * "Customer" section is a fieldset. "Billing" as a peer of "Customer" is a
 * section.
 *
 * IT IS A `<fieldset>` WITH A `<legend>` in the markup, not a styled div. A
 * screen reader announces the legend before each control inside it, so "Line 1"
 * is heard as "Billing address, Line 1" - which is the entire reason grouped
 * inputs have had this element since 1997.
 */
final class Fieldset extends Component
{
    private int $columns = 1;

    private ?string $description = null;

    private function __construct(private readonly string $label) {}

    public static function make(string $label): self
    {
        return new self($label);
    }

    public function columns(int $columns): self
    {
        $this->columns = $columns;

        return $this;
    }

    public function description(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function component(): string
    {
        return 'fieldset';
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'label' => $this->label,
            'columns' => $this->columns,
            'description' => $this->description,
        ];
    }
}
