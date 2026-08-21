<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Schema;

/**
 * A titled group of fields, optionally collapsible.
 *
 * The single highest-value layout component: it turns a wall of inputs into
 * labelled groups, which is most of what makes a long Filament form readable.
 */
final class Section extends Component
{
    private ?string $description = null;

    private int $columns = 1;

    private bool $collapsible = false;

    private bool $collapsed = false;

    /** Semantic icon name from the kit registry; rendered beside the section title. */
    private ?string $icon = null;

    private function __construct(private readonly string $label) {}

    public static function make(string $label): self
    {
        return new self($label);
    }

    public function description(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function icon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    public function columns(int $columns): self
    {
        $this->columns = $columns;

        return $this;
    }

    /** @param bool $collapsed Start closed. Only meaningful when collapsible. */
    public function collapsible(bool $collapsible = true, bool $collapsed = false): self
    {
        $this->collapsible = $collapsible;
        $this->collapsed = $collapsed;

        return $this;
    }

    /**
     * Show this WHOLE SECTION only when another field holds a given value.
     *
     * `visibleWhen` on a `Field` is a hint the client draws and the server
     * turns into `required_if` - the field can still be present in a request
     * and still gets written if it is. This is stronger: `Form::sanitize()`
     * omits every field in an unmet section from the write payload entirely,
     * so a crafted request cannot resurrect a section by including its keys.
     * A hidden section is not merely invisible; it does not exist as far as
     * what a request may contain.
     *
     * A FIELD required INSIDE a conditional section should still declare its
     * OWN `visibleWhen` matching the section's - that is what relaxes its
     * `required` rule to `required_if` so submitting the form without the
     * section open does not fail validation on a field nobody could see.
     * This method does not do that for you; it only governs what gets
     * written, not what gets required.
     */
    public function visibleWhen(string $field, mixed $value): self
    {
        $this->visibleWhen = [$field, $value];

        return $this;
    }

    public function component(): string
    {
        return 'section';
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'label' => $this->label,
            'description' => $this->description,
            'columns' => $this->columns,
            'collapsible' => $this->collapsible,
            'collapsed' => $this->collapsed,
            'icon' => $this->icon,
            /*
             * A HINT, NOT A RULE - see the note on `visibleWhen()`. The client
             * uses this to decide whether to render the section at all;
             * `Form::sanitize()` is the actual enforcement, from the same
             * declaration.
             */
            'visibleWhen' => $this->visibleWhen === null ? null : [
                'field' => $this->visibleWhen[0],
                'value' => $this->visibleWhen[1],
            ],
        ];
    }
}
