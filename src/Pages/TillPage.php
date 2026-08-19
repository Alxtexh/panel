<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;

/**
 * A till: shelf, filters, cart. Empty until the host fills `items()`.
 *
 * OPT-IN BY SUBCLASSING. `taxRate` defaults to 0; nothing here names a
 * jurisdiction. Facets are optional. The Vue screen is `Till` (`CatalogTill`
 * plus header widgets). Generate with `make:panel-page Pos --till`.
 */
abstract class TillPage extends Page
{
    protected static string $icon = 'receipt';

    public static function component(): string
    {
        return 'Till';
    }

    /**
     * @return list<array<string, mixed>>
     */
    public static function items(): array
    {
        return [];
    }

    /**
     * @return list<array<string, mixed>>
     */
    public static function facets(): array
    {
        return [];
    }

    public static function taxRate(): float
    {
        return 0.0;
    }

    public static function taxLabel(): string
    {
        return 'Tax';
    }

    public static function itemPath(): ?string
    {
        return null;
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        return [
            'items' => static::items(),
            'facets' => static::facets(),
            'taxRate' => static::taxRate(),
            'taxLabel' => static::taxLabel(),
            'itemPath' => static::itemPath(),
        ];
    }
}
