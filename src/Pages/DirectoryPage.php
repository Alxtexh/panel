<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\Ability;
use Alxtexh\Panel\Support\OperationsNav;

/**
 * A searchable directory of links, grouped into cards.
 *
 * OPT-IN BY SUBCLASSING. Discovery routes a subclass in `app/Panel/Pages`.
 * The Vue screen is `Directory`. Override `sections()` for a vertical; the
 * default is chrome only (Settings, Users, Roles, Documents, Backups, Logs,
 * Monitoring, Help). Nothing here knows about clients or routers.
 *
 * A POS, a rental office, or an ISP each pass their own hrefs.
 */
abstract class DirectoryPage extends Page
{
    protected static string $icon = 'layout-grid';

    protected static ?int $sort = -50;

    public static function component(): string
    {
        return 'Directory';
    }

    public static function heading(): ?string
    {
        return 'Directory';
    }

    public static function description(): ?string
    {
        return 'Jump to settings, people, documents, operations, and help.';
    }

    /**
     * Any signed-in operator. Individual cards still hide behind their own
     * abilities and `Panel::offers()`.
     */
    public static function ability(): ?string
    {
        return null;
    }

    /**
     * @return list<array{key: string, title: string, accent?: string, links: list<array{label: string, href: string, icon?: string}>}>
     */
    public static function sections(): array
    {
        return static::chromeSections();
    }

    /**
     * Chrome links that exist on this panel. No merchandising, no ISP.
     *
     * @return list<array{key: string, title: string, accent?: string, links: list<array{label: string, href: string, icon?: string}>}>
     */
    public static function chromeSections(): array
    {
        $user = request()->user();
        $panel = app(PanelManager::class)->currentPanel()
            ?? app(PanelManager::class)->panel(static::panel());

        $workspace = array_values(array_filter([
            self::link('Settings', self::url($panel, 'settings.index'), 'sliders'),
            Ability::allows($user, 'manage_roles')
                ? self::link('Users', self::url($panel, 'pages.user-management', ['tab' => 'users']), 'users')
                : null,
            ($panel?->offers('roles') ?? true) && Ability::allows($user, 'manage_roles')
                ? self::link('Roles', self::url($panel, 'roles'), 'key')
                : null,
            ($panel?->offers('documents') ?? true) && Ability::allows($user, 'manage_documents')
                ? self::link('Documents', self::url($panel, 'documents.index'), 'file-text')
                : null,
        ]));

        $operations = [];

        if ($panel !== null && $panel->offers('operations') && Ability::allows($user, 'view_operations')) {
            $urls = OperationsNav::urls($panel);
            $operations = array_values(array_filter([
                self::link('Backups', $urls['backups'], 'archive'),
                self::link('Logs', $urls['logs'], 'file-text'),
                self::link('Monitoring', $urls['monitoring'], 'gauge'),
            ]));
        }

        $help = array_values(array_filter([
            ($panel?->offers('help') ?? true)
                ? self::link('Help', self::url($panel, 'support.help'), 'help')
                : null,
        ]));

        return array_values(array_filter([
            $workspace === [] ? null : [
                'key' => 'workspace',
                'title' => 'Workspace',
                'accent' => '#64748b',
                'links' => $workspace,
            ],
            $operations === [] ? null : [
                'key' => 'operations',
                'title' => 'Operations',
                'accent' => '#0d9488',
                'links' => $operations,
            ],
            $help === [] ? null : [
                'key' => 'help',
                'title' => 'Help',
                'accent' => '#2563eb',
                'links' => $help,
            ],
        ]));
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        return [
            'sections' => static::sections(),
        ];
    }

    /**
     * @param  array<string, mixed>  $parameters
     */
    private static function url(?\Alxtexh\Panel\Panel $panel, string $suffix, array $parameters = []): ?string
    {
        if ($panel === null) {
            return null;
        }

        $name = $panel->getRouteName().$suffix;

        return Route::has($name) ? route($name, $parameters) : null;
    }

    /**
     * @return array{label: string, href: string, icon: string}|null
     */
    private static function link(string $label, ?string $href, string $icon): ?array
    {
        if ($href === null || $href === '') {
            return null;
        }

        return [
            'label' => $label,
            'href' => $href,
            'icon' => $icon,
        ];
    }
}
