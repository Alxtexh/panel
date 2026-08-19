<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Illuminate\Http\Request;
use Alxtexh\Panel\Pages\Page;

/** Second page claiming the demo-plugin slug for collision tests. */
final class DuplicateDemoPluginPage extends Page
{
    protected static string $panel = 'admin';

    public static function slug(): string
    {
        return 'demo-plugin';
    }

    public static function ability(): ?string
    {
        return null;
    }

    public static function component(): string
    {
        return 'Campaigns';
    }

    public static function data(Request $request): array
    {
        return [];
    }
}
