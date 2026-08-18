<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

/**
 * Filament-shaped prefix, suffix, and hint chrome, serialised into Vue schema.
 *
 * No Livewire. The client draws text, icons, and copy/hint actions from JSON.
 *
 *     TextField::make('price')->prefix('KES')->suffix('.00');
 *     TextField::make('slug')->suffixAction(['label' => 'Copy', 'copy' => true]);
 *     TextField::make('api_key')->hint('Keep this private')->copyable();
 */
trait HasAffixes
{
    protected ?string $prefix = null;

    protected ?string $suffix = null;

    protected ?string $prefixIcon = null;

    protected ?string $suffixIcon = null;

    protected ?string $hint = null;

    protected ?string $hintIcon = null;

    /** @var array{label?: string, icon?: string, copy?: bool, url?: string}|null */
    protected ?array $prefixAction = null;

    /** @var array{label?: string, icon?: string, copy?: bool, url?: string}|null */
    protected ?array $suffixAction = null;

    /** @var array{label?: string, icon?: string, copy?: bool, url?: string}|null */
    protected ?array $hintAction = null;

    public function prefix(?string $prefix): static
    {
        $this->prefix = $prefix;

        return $this;
    }

    public function suffix(?string $suffix): static
    {
        $this->suffix = $suffix;

        return $this;
    }

    public function prefixIcon(?string $icon): static
    {
        $this->prefixIcon = $icon;

        return $this;
    }

    public function suffixIcon(?string $icon): static
    {
        $this->suffixIcon = $icon;

        return $this;
    }

    /**
     * @param  array{label?: string, icon?: string, copy?: bool, url?: string}|null  $action
     */
    public function prefixAction(?array $action): static
    {
        $this->prefixAction = $action;

        return $this;
    }

    /**
     * @param  array{label?: string, icon?: string, copy?: bool, url?: string}|null  $action
     */
    public function suffixAction(?array $action): static
    {
        $this->suffixAction = $action;

        return $this;
    }

    public function hint(?string $hint): static
    {
        $this->hint = $hint;

        return $this;
    }

    public function hintIcon(?string $icon): static
    {
        $this->hintIcon = $icon;

        return $this;
    }

    /**
     * @param  array{label?: string, icon?: string, copy?: bool, url?: string}|null  $action
     */
    public function hintAction(?array $action): static
    {
        $this->hintAction = $action;

        return $this;
    }

    /**
     * A suffix copy action for the current value, like Filament's copyable hint.
     */
    public function copyable(bool $copyable = true): static
    {
        $this->suffixAction = $copyable
            ? ['label' => 'Copy', 'icon' => 'clipboard', 'copy' => true]
            : null;

        return $this;
    }

    /** @return array<string, mixed> */
    protected function affixSchema(): array
    {
        return array_filter([
            'prefix' => $this->prefix,
            'suffix' => $this->suffix,
            'prefixIcon' => $this->prefixIcon,
            'suffixIcon' => $this->suffixIcon,
            'hint' => $this->hint,
            'hintIcon' => $this->hintIcon,
            'prefixAction' => $this->actionSchema($this->prefixAction),
            'suffixAction' => $this->actionSchema($this->suffixAction),
            'hintAction' => $this->actionSchema($this->hintAction),
        ], static fn (mixed $v): bool => $v !== null && $v !== false && $v !== []);
    }

    /**
     * @param  array{label?: string, icon?: string, copy?: bool, url?: string}|null  $action
     * @return array<string, mixed>|null
     */
    private function actionSchema(?array $action): ?array
    {
        if ($action === null) {
            return null;
        }

        $schema = array_filter([
            'label' => $action['label'] ?? null,
            'icon' => $action['icon'] ?? null,
            'copy' => ($action['copy'] ?? false) ? true : null,
            'url' => $action['url'] ?? null,
        ], static fn (mixed $v): bool => $v !== null && $v !== false);

        return $schema === [] ? null : $schema;
    }
}
