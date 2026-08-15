<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Pages;

use Alxtexh\Panel\Pages\Page;
use Illuminate\Http\Request;

/**
 * A plan-gated screen for ModuleRegistry tests. Always-on Kit pages must not
 * copy this: leave `$module` null unless the plan catalogue grants the key.
 */
final class CampaignsPage extends Page
{
    protected static string $panel = 'admin';

    protected static string $icon = 'megaphone';

    protected static ?string $module = 'campaigns';

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
