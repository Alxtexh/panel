<?php

declare(strict_types=1);

namespace App\Panel\Pages;

use Alxtexh\Panel\Pages\DirectoryPage;

/**
 * Host directory of kit screens. The installer does not write this page;
 * playground Administration is demo-only, so this app adds a thin DirectoryPage
 * using routes that exist after a stock panel:install.
 */
final class AdministrationPage extends DirectoryPage
{
    protected static string $panel = 'admin';

    protected static string $icon = 'layout-grid';

    protected static ?string $group = 'Platform';

    protected static ?int $sort = 5;

    public static function label(): string
    {
        return 'Administration';
    }

    public static function ability(): ?string
    {
        return null;
    }

    public static function heading(): ?string
    {
        return 'Administration';
    }

    public static function description(): ?string
    {
        return 'Jump to people, settings, help, and the dashboard that ship with the kit.';
    }

    /**
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
                    ['label' => 'User management', 'href' => '/user-management', 'icon' => 'users'],
                    ['label' => 'Roles', 'href' => '/roles', 'icon' => 'shield'],
                ],
            ],
            [
                'key' => 'settings',
                'title' => 'Settings',
                'accent' => '#64748b',
                'links' => [
                    ['label' => 'All settings', 'href' => '/settings', 'icon' => 'sliders'],
                    ['label' => 'Organisation', 'href' => '/settings/organisation', 'icon' => 'home'],
                    ['label' => 'Profile', 'href' => '/settings/profile', 'icon' => 'user'],
                    ['label' => 'Security', 'href' => '/settings/security', 'icon' => 'lock'],
                    ['label' => 'Workspaces', 'href' => '/settings/workspaces', 'icon' => 'layout'],
                ],
            ],
            [
                'key' => 'help',
                'title' => 'Help',
                'accent' => '#7c3aed',
                'links' => [
                    ['label' => 'Help centre', 'href' => '/help', 'icon' => 'book'],
                    ['label' => 'FAQ', 'href' => '/faq', 'icon' => 'help-circle'],
                    ['label' => 'About', 'href' => '/about', 'icon' => 'info'],
                    ['label' => "What's new", 'href' => '/whats-new', 'icon' => 'sparkles'],
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
