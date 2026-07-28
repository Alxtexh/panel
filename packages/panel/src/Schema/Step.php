<?php

declare(strict_types=1);

namespace PanelKit\Panel\Schema;

/**
 * One step of a wizard. Only meaningful inside `Wizard`.
 *
 * IT CARRIES A DESCRIPTION, which a tab does not, and that is the whole reason
 * this is a separate class rather than a reused `Tab`. A tab label is a noun the
 * reader already understands - "Identity", "Billing". A wizard step is a
 * question being asked at a particular moment, and a sentence saying what this
 * step is for is most of what stops somebody abandoning the form.
 */
final class Step extends Component
{
    private ?string $description = null;

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

    public function component(): string
    {
        return 'step';
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'label' => $this->label,
            'description' => $this->description,
            'icon' => $this->icon,
        ];
    }
}
