<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Infolists;

/**
 * A host-registered Vue view on the dedicated record view page.
 *
 * PHP names the view with a string; the application registers the Vue
 * component with `registerEntryView('invoice-summary', Component)`. That is
 * the same extension pattern as `registerFieldControl` / `registerOptionPreview`:
 * no Blade, no class names in schema, no markup in PHP.
 */
final class ViewEntry extends Entry
{
    private string $view = '';

    public function type(): string
    {
        return 'view';
    }

    /**
     * Named Vue view the host registers with `registerEntryView`.
     */
    public function view(string $name): static
    {
        $this->view = $name;

        return $this;
    }

    public function toSchema(): array
    {
        return array_filter([
            ...parent::toSchema(),
            'view' => $this->view !== '' ? $this->view : null,
        ], static fn (mixed $v): bool => $v !== null && $v !== []);
    }
}
