<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Pages;

use Alxtexh\Panel\Pages\BillingPortalPage;
use Illuminate\Http\Request;

final class SecondBillingPortalPage extends BillingPortalPage
{
    protected static string $panel = 'second';

    public static function ability(): ?string
    {
        return null;
    }

    public static function shouldShowInNavigation(): bool
    {
        return false;
    }

    /**
     * @return array<string, mixed>|null
     */
    public static function subscription(Request $request): ?array
    {
        return ['status' => 'past_due'];
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        return parent::data($request) + ['fixture' => true];
    }
}
