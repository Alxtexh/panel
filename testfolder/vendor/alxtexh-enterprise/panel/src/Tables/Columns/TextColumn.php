<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Columns;

final class TextColumn extends Column
{
    private bool $mono = false;

    private ?string $transform = null;

    /** Monospace rendering, for codes and identifiers. */
    public function mono(bool $mono = true): static
    {
        $this->mono = $mono;

        return $this;
    }

    /** `upper` or `lower`. A semantic instruction, not a CSS class. */
    public function transform(string $transform): static
    {
        $this->transform = $transform;

        return $this;
    }

    public function type(): string
    {
        return 'text';
    }

    public function toArray(): array
    {
        return array_filter(
            [...parent::toArray(), 'mono' => $this->mono, 'transform' => $this->transform],
            static fn (mixed $v): bool => $v !== null && $v !== false,
        );
    }
}
