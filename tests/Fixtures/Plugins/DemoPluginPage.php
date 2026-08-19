<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Illuminate\Http\Request;
use Alxtexh\Panel\Pages\Page;

final class DemoPluginPage extends Page
{
    public static function component(): string
    {
        return 'panel/plugins/DemoPluginPage';
    }

    public static function data(Request $request): array
    {
        return [];
    }
}

