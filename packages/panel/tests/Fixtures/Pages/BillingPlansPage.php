<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Pages;

use Alxtexh\Panel\Pages\PlanSetupPage;
use Illuminate\Http\Request;

/**
 * Fixture PlanSetup so the subscription wall can exempt a real billing URI.
 */
final class BillingPlansPage extends PlanSetupPage
{
    protected static string $panel = 'admin';

    public static function ability(): ?string
    {
        return null;
    }

    public static function shouldShowInNavigation(): bool
    {
        return false;
    }

    public static function plans(Request $request): array
    {
        return [];
    }
}
