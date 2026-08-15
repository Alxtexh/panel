<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;

/**
 * Merchandising grid: tabs, Filters sheet, Tiles/List, pagination.
 *
 * OPT-IN BY SUBCLASSING. `tabs()` is your catalog. The Vue screen is
 * `Catalog` (`CatalogBrowser`). Selecting a tile visits `{uri}/{key}` unless
 * you override `itemPath()` .
 */
abstract class CatalogBrowserPage extends Page
{
    protected static string $icon = 'shopping-bag';

    public static function component(): string
    {
        return 'Catalog';
    }

    /**
     * @return list<array<string, mixed>>
     */
    abstract public static function tabs(): array;

    public static function itemPath(): string
    {
        return '/'.trim(static::uri(), '/');
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        return [
            'tabs' => static::tabs(),
            'itemPath' => static::itemPath(),
        ];
    }
}
