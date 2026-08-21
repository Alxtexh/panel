<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Columns;

/**
 * A list of labels rendered as chips.
 *
 * The cell accepts an array, a JSON array string, or a separator-split string.
 * Relation labels belong in the row payload (a transform, a cast, or
 * `fromRaw()`), not in this column: the schema must stay tenant-free.
 *
 * `->limit(3)` caps how many chips show before a "+N" remainder.
 */
final class TagsColumn extends Column
{
    private ?int $limit = null;

    private string $separator = ',';

    public function type(): string
    {
        return 'tags';
    }

    /**
     * Show at most this many chips; the rest collapse to "+N".
     *
     * Null (default) shows every tag.
     */
    public function limit(?int $limit): static
    {
        $this->limit = $limit;

        return $this;
    }

    /**
     * When the stored value is a single string, split on this separator.
     */
    public function separator(string $separator): static
    {
        $this->separator = $separator;

        return $this;
    }

    public function toArray(): array
    {
        return array_filter(
            [
                ...parent::toArray(),
                'limit' => $this->limit,
                'separator' => $this->separator,
            ],
            static fn (mixed $v): bool => $v !== null,
        );
    }
}
