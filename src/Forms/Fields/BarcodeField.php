<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

/**
 * Barcode preview of a string value (or a sibling field).
 *
 * Stores the payload string. The client draws via JsBarcode (bundled, lazy-loaded).
 *
 *     BarcodeField::make('sku')->format('CODE128')->height(80);
 *
 *     // Show a sibling without storing a second copy:
 *     BarcodeField::make('ean_preview')->from('ean')->format('EAN13')->readOnly();
 */
final class BarcodeField extends Field
{
    private string $format = 'CODE128';

    private int $height = 80;

    private int $width = 2;

    private bool $displayValue = true;

    private ?string $from = null;

    public function type(): string
    {
        return 'barcode';
    }

    /**
     * JsBarcode format name. Common: CODE128, EAN13, EAN8, UPC, CODE39.
     */
    public function format(string $format): static
    {
        $this->format = strtoupper(trim($format));

        return $this;
    }

    public function height(int $pixels): static
    {
        $this->height = max(24, min(240, $pixels));

        return $this;
    }

    /** Module bar width in pixels (JsBarcode `width`). */
    public function barWidth(int $pixels): static
    {
        $this->width = max(1, min(6, $pixels));

        return $this;
    }

    public function hideValue(bool $hide = true): static
    {
        $this->displayValue = ! $hide;

        return $this;
    }

    /** Read the barcode payload from another form value key. */
    public function from(string $fieldKey): static
    {
        $this->from = $fieldKey;

        return $this;
    }

    protected function typeRules(): array
    {
        return ['nullable', 'string', 'max:512'];
    }

    /** @return array<string, mixed> */
    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'format' => $this->format,
            'height' => $this->height,
            'width' => $this->width,
            'displayValue' => $this->displayValue,
            'from' => $this->from,
        ];
    }
}
