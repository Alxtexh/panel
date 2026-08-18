<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Filters;

/**
 * One chip for an applied filter.
 *
 * THE CHIP IS A HANDLE ON THE QUERY STRING, not a second copy of the filter.
 * Clearing it drops the same parameter the toolbar's Apply wrote, so a chip
 * and a Reset cannot disagree about what "this filter" is.
 */
final class Indicator
{
    private string $key = '';

    private bool $removable = true;

    private function __construct(private readonly string $label) {}

    public static function make(string $label): self
    {
        return new self($label);
    }

    /**
     * The filter key to clear when this chip is dismissed.
     *
     * Defaults to the filter that produced the chip. Set it when one filter
     * yields several chips that still clear as one (a range whose bounds are
     * two labels but one query parameter).
     */
    public function removeField(string $key): self
    {
        $this->key = $key;

        return $this;
    }

    public function removable(bool $removable = true): self
    {
        $this->removable = $removable;

        return $this;
    }

    /**
     * @return array{key: string, label: string, removable: bool}
     */
    public function toArray(string $fallbackKey): array
    {
        return [
            'key' => $this->key !== '' ? $this->key : $fallbackKey,
            'label' => $this->label,
            'removable' => $this->removable,
        ];
    }
}
