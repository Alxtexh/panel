<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Pages\ChatPage;
use Alxtexh\Panel\Pages\MailPage;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Tests\TestCase;

final class PanelAppsTest extends TestCase
{
    public function test_mail_and_chat_pages_are_off_until_apps_enabled(): void
    {
        $this->assertFalse(MailPage::isEnabled());
        $this->assertFalse(ChatPage::isEnabled());
    }

    public function test_panel_apps_opt_in(): void
    {
        $panel = Panel::make('demo')->apps(['mail', 'chat']);

        $this->assertTrue($panel->offersApp('mail'));
        $this->assertTrue($panel->offersApp('chat'));
        $this->assertFalse($panel->offersApp('billing'));
    }

    public function test_panel_without_drops_an_app_after_apps(): void
    {
        $panel = Panel::make('demo')->apps(['mail', 'chat'])->without(['chat']);

        $this->assertTrue($panel->offersApp('mail'));
        $this->assertFalse($panel->offersApp('chat'));
    }
}
