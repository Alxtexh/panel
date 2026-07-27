<?php

declare(strict_types=1);

namespace PanelKit\Panel\Schema;

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
        ];
    }
}
