<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

/**
 * A phone number, stored as E.164 when possible.
 *
 *     PhoneField::make('mobile');
 *
 * Validation is intentionally strict on the wire format (+ and digits) so the
 * value is safe to dial or pass to a gateway. Display formatting stays client-side.
 */
final class PhoneField extends Field
{
    private const PATTERN = '/^\+[1-9]\d{6,14}$/';

    public function type(): string
    {
        return 'phone';
    }

    protected function typeRules(): array
    {
        return ['string', 'regex:'.self::PATTERN];
    }
}
