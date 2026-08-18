<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Pages;

use Alxtexh\Panel\Pages\DashboardPage as BaseDashboardPage;

/** Empty dashboard so first-run onboarding can be requested over HTTP. */
final class DashboardPage extends BaseDashboardPage
{
    protected static string $panel = 'admin';
}
