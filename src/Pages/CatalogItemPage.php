<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;

/**
 * One catalog item. Hide it from the sidebar; the grid is the way in.
 *
 * `uri()` should be `{catalog-slug}/{key}`. `find($key)` returns the item
 * array or null (404).
 */
abstract class CatalogItemPage extends Page
{
    protected static string $icon = 'package';

    public static function shouldShowInNavigation(): bool
    {
        return false;
    }

    public static function component(): string
    {
        return 'CatalogItem';
    }

    /**
     * @return array<string, mixed>|null
     */
    abstract public static function find(string $key): ?array;

    public static function catalogHref(): string
    {
        return '/'.trim(str(static::uri())->beforeLast('/{key}')->value(), '/');
    }

    public static function cartHref(): string
    {
        return '/till';
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        $key = (string) $request->route('key');
        $item = static::find($key);

        abort_if($item === null, 404);

        return [
            'item' => $item,
            'catalogHref' => static::catalogHref(),
            'cartHref' => static::cartHref(),
        ];
    }
}
