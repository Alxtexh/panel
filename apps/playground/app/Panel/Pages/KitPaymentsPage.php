<?php

declare(strict_types=1);

namespace App\Panel\Pages;

use Alxtexh\Panel\Pages\Page;
use Illuminate\Http\Request;

/**
 * Old Kit URL. The Vue page sends the operator to Settings.
 *
 * STILL ROUTED so bookmarks and the previous sidebar href do not 404.
 */
final class KitPaymentsPage extends Page
{
    protected static string $panel = 'admin';

    protected static string $icon = 'credit-card';

    protected static ?string $group = 'Kit';

    protected static ?int $sort = 30;

    public static function shouldShowInNavigation(): bool
    {
        return false;
    }

    public static function label(): string
    {
        return 'Payments';
    }

    public static function ability(): ?string
    {
        return null;
    }

    public static function component(): string
    {
        return 'KitPayments';
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        return [
            'redirectTo' => '/settings/payments',
        ];
    }
}
