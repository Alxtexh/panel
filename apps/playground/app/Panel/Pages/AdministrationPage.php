<?php

declare(strict_types=1);

namespace App\Panel\Pages;

use Alxtexh\Panel\Pages\DirectoryPage;
use Illuminate\Http\Request;

/**
 * Splynx-style directory of real playground screens, grouped into cards.
 */
final class AdministrationPage extends DirectoryPage
{
    protected static string $panel = 'admin';

    protected static string $icon = 'layout-grid';

    protected static ?string $group = 'Platform';

    protected static ?int $sort = 5;

    public static function shouldShowInNavigation(): bool
    {
        return false;
    }

    public static function label(): string
    {
        return 'Administration';
    }

    public static function ability(): ?string
    {
        return null;
    }

    public static function component(): string
    {
        return 'Administration';
    }

    public static function heading(): ?string
    {
        return 'Administration';
    }

    public static function description(): ?string
    {
        return 'Jump to people, network, billing, settings, operations, kit, support, and reports.';
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        return parent::data($request);
    }

    /**
     * Only hrefs that already route in this playground.
     *
     * @return list<array{key: string, title: string, accent: string, links: list<array{label: string, href: string, icon: string}>}>
     */
    public static function sections(): array
    {
        return [
            [
                'key' => 'people',
                'title' => 'People',
                'accent' => '#2563eb',
                'links' => [
                    ['label' => 'Clients', 'href' => '/clients', 'icon' => 'users'],
                    ['label' => 'Tickets', 'href' => '/tickets', 'icon' => 'chat'],
                ],
            ],
            [
                'key' => 'network',
                'title' => 'Network',
                'accent' => '#0d9488',
                'links' => [
                    ['label' => 'Routers', 'href' => '/routers', 'icon' => 'router'],
                ],
            ],
            [
                'key' => 'billing',
                'title' => 'Billing',
                'accent' => '#d97706',
                'links' => [
                    ['label' => 'ISP plans', 'href' => '/plans', 'icon' => 'package'],
                    ['label' => 'Subscription plans', 'href' => '/settings/plans', 'icon' => 'package'],
                    ['label' => 'Documents', 'href' => '/documents', 'icon' => 'file-text'],
                    ['label' => 'Billing', 'href' => '/billing-settings', 'icon' => 'sliders'],
                ],
            ],
            [
                'key' => 'settings',
                'title' => 'Settings',
                'accent' => '#64748b',
                'links' => [
                    ['label' => 'Organisation', 'href' => '/settings/organisation', 'icon' => 'sliders'],
                    ['label' => 'Payments', 'href' => '/settings/payments', 'icon' => 'sliders'],
                ],
            ],
            [
                'key' => 'reports',
                'title' => 'Reports',
                'accent' => '#059669',
                'links' => [
                    ['label' => 'Dashboard', 'href' => '/dashboard', 'icon' => 'home'],
                ],
            ],
        ];
    }
}
