<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;

/**
 * Signature pad, transparent stamps, preview on documents.
 *
 * OPT-IN BY SUBCLASSING. `documents()` is invoice/lease/quote payloads for
 * `PkDocument`. Marks stay in the browser unless you persist them.
 */
abstract class SignatureStudioPage extends Page
{
    protected static string $icon = 'file-text';

    public static function component(): string
    {
        return 'Signatures';
    }

    /**
     * @return list<array{key: string, label: string, document: array<string, mixed>}>
     */
    abstract public static function documents(): array;

    public static function storageKey(): string
    {
        return 'panel.signatures';
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        return [
            'documents' => static::documents(),
            'storageKey' => static::storageKey(),
        ];
    }
}
