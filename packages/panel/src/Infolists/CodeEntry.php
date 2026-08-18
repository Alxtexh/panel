<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Infolists;

/**
 * A stored blob of code or configuration on the dedicated view page.
 *
 * A table cell truncates to one line. Here the whole value is shown, wrapped,
 * in a block. `language()` is a hint for the label, not a highlighter.
 */
final class CodeEntry extends Entry
{
    private ?string $language = null;

    public function type(): string
    {
        return 'code';
    }

    public function language(string $language): static
    {
        $this->language = $language;

        return $this;
    }

    public function toSchema(): array
    {
        return [...parent::toSchema(), 'language' => $this->language];
    }
}
