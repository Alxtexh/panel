<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Pages;

use Alxtexh\Panel\Pages\PlanCatalogPage;
use Illuminate\Http\Request;

final class FixturePlanCatalogPage extends PlanCatalogPage
{
    protected static string $panel = 'admin';

    public static function shouldShowInNavigation(): bool
    {
        return false;
    }

    public static function plans(Request $request): array
    {
        return [
            ['id' => 'starter', 'name' => 'Starter', 'price' => 10],
            ['id' => 'pro', 'name' => 'Pro', 'price' => 30, 'recommended' => true],
        ];
    }
}
