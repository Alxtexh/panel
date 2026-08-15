<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;

/**
 * Catalog cards plus a register table (leases, lockers, desks).
 *
 * OPT-IN BY SUBCLASSING. `cards()` and `rows()` are the same facts twice.
 */
abstract class CatalogRegisterPage extends Page
{
    protected static string $icon = 'home';

    public static function component(): string
    {
        return 'CatalogRegister';
    }

    /**
     * @return list<array<string, mixed>>
     */
    abstract public static function cards(): array;

    /**
     * @return list<array<string, mixed>>
     */
    abstract public static function rows(): array;

    /**
     * @return list<array<string, mixed>>
     */
    public static function facets(): array
    {
        return [];
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        return [
            'cards' => static::cards(),
            'rows' => static::rows(),
            'facets' => static::facets(),
        ];
    }
}
