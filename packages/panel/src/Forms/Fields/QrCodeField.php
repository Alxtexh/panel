<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

/**
 * QR code preview of a string value (or a sibling field).
 *
 * Stores the payload string. The client draws the QR; no third-party CDN.
 *
 *     QrCodeField::make('check_in')
 *         ->size(160);
 *
 *     // Show a sibling URL without storing a second copy:
 *     QrCodeField::make('ticket_qr')->from('public_url')->readOnly();
 */
final class QrCodeField extends Field
{
    private int $size = 160;

    private ?string $from = null;

    public function type(): string
    {
        return 'qrcode';
    }

    public function size(int $pixels): static
    {
        $this->size = max(64, min(512, $pixels));

        return $this;
    }

    /** Read the QR payload from another form value key. */
    public function from(string $fieldKey): static
    {
        $this->from = $fieldKey;

        return $this;
    }

    protected function typeRules(): array
    {
        return ['nullable', 'string', 'max:2048'];
    }

    /** @return array<string, mixed> */
    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'size' => $this->size,
            'from' => $this->from,
        ];
    }
}
