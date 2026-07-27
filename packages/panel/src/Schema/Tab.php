<?php

declare(strict_types=1);

namespace PanelKit\Panel\Schema;

/** One tab. Only meaningful inside Tabs. */
final class Tab extends Component
{
    private ?string $icon = null;

    private function __construct(private readonly string $label) {}

    public static function make(string $label): self
    {
        return new self($label);
    }

    public function icon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    public function component(): string
    {
        return 'tab';
    }

    public function toSchema(): array
    {
        return [...parent::toSchema(), 'label' => $this->label, 'icon' => $this->icon];
    }
}
