<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

/**
 * Side-by-side text diff (read-only by default).
 *
 * Compares two sibling form values, or `original` / `modified` keys on its own
 * value. Useful on audit / config screens.
 *
 *     DiffField::make('patch')
 *         ->original('before')
 *         ->modified('after');
 */
final class DiffField extends Field
{
    private ?string $originalKey = null;

    private ?string $modifiedKey = null;

    private int $rows = 12;

    public function type(): string
    {
        return 'diff';
    }

    public function original(string $fieldKey): static
    {
        $this->originalKey = $fieldKey;

        return $this;
    }

    public function modified(string $fieldKey): static
    {
        $this->modifiedKey = $fieldKey;

        return $this;
    }

    public function rows(int $rows): static
    {
        $this->rows = max(4, min(40, $rows));

        return $this;
    }

    protected function typeRules(): array
    {
        return ['nullable', 'array'];
    }

    /** @return array<string, mixed> */
    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'originalKey' => $this->originalKey,
            'modifiedKey' => $this->modifiedKey,
            'rows' => $this->rows,
        ];
    }
}
