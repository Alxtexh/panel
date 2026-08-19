<?php

declare(strict_types=1);

namespace App\Panel\Disposable\Pages;

use Alxtexh\Panel\Pages\DirectoryPage as AlxtexhpanelDirectory;

/**
 * Chrome hub: Settings, Users, Roles, Documents, Backups, Logs,
 * Monitoring, Help. Inherits DirectoryPage::chromeSections() and
 * filters by this panel's offers() and abilities. Override sections()
 * for your vertical. No clients, routers, or catalog.
 */
final class DirectoryPage extends AlxtexhpanelDirectory
{
    protected static string $panel = 'disposable';

    protected static ?int $sort = -50;
}
