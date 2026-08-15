<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;

/**
 * A searchable directory of links, grouped into cards.
 *
 * OPT-IN BY SUBCLASSING. Declare `sections()` and discovery routes it. The
 * Vue screen is `Directory` (`DirectoryPage` from `@alxtexh-enterprise/panel`).
 *
 * A POS, a rental office, or an ISP each pass their own hrefs. Nothing here
 * knows about clients or routers.
 */
abstract class DirectoryPage extends Page
{
    protected static string $icon = 'layout-grid';

    public static function component(): string
    {
        return 'Directory';
    }

    /**
     * @return list<array{key: string, title: string, accent?: string, links: list<array{label: string, href: string, icon?: string}>}>
     */
    abstract public static function sections(): array;

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        return [
            'sections' => static::sections(),
        ];
    }
}
