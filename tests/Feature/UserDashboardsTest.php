<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Tests\TestCase;

final class UserDashboardsTest extends TestCase
{
    public function test_user_dashboards_are_off_by_default(): void
    {
        $panel = Panel::make('admin');

        $this->assertFalse($panel->hasUserDashboards());
    }

    public function test_user_dashboards_opt_in(): void
    {
        $panel = Panel::make('ops')->userDashboards();

        $this->assertTrue($panel->hasUserDashboards());
    }
}
