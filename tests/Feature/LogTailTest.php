<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Http\PanelRoutes;
use Alxtexh\Panel\Pages\LogsPage;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\LogReader;
use Alxtexh\Panel\Support\PanelPages;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

final class LogTailTest extends TestCase
{
    use RefreshDatabase;

    public function test_logs_app_is_off_until_enabled(): void
    {
        $this->assertFalse(LogsPage::isEnabled());
        $this->assertFalse(Panel::make('alone')->offersApp('logs'));
    }

    public function test_log_tail_shorthand_opts_in(): void
    {
        $panel = Panel::make('ops')->logTail();

        $this->assertTrue($panel->offersApp('logs'));
        $this->assertSame('laravel.log', $panel->getLogTailDefault());
        $this->assertNull($panel->getLogTailAllowlist());
    }

    public function test_log_tail_accepts_allowlist_and_default(): void
    {
        $panel = Panel::make('ops')->logTail('laravel.log', ['laravel.log', 'queue.log']);

        $this->assertSame('laravel.log', $panel->getLogTailDefault());
        $this->assertSame(['laravel.log', 'queue.log'], $panel->getLogTailAllowlist());
    }

    public function test_logs_is_an_optional_screen_stub(): void
    {
        $this->assertContains('Logs', PanelPages::OPTIONAL_SCREENS);
        $this->assertNotContains('Logs', PanelPages::SCREENS);
        $this->assertStringContainsString('Logs', PanelPages::stub('Logs'));
        $this->assertStringContainsString('@alxtexh-enterprise/panel/pages/Logs.vue', PanelPages::stub('Logs'));
    }

    public function test_log_reader_refuses_unknown_names(): void
    {
        $dir = sys_get_temp_dir().'/panel-log-'.uniqid();
        mkdir($dir);
        file_put_contents($dir.'/laravel.log', "one\ntwo\nthree\n");

        try {
            $reader = new LogReader(allowlist: ['laravel.log'], directory: $dir);
            $ok = $reader->tail('laravel.log', lines: 10);
            $this->assertSame('laravel.log', $ok['name']);
            $this->assertSame(['one', 'two', 'three'], $ok['lines']);

            $blocked = $reader->tail('../../.env', lines: 10);
            $this->assertSame('laravel.log', $blocked['name']);
            $this->assertStringNotContainsString('APP_KEY', implode("\n", $blocked['lines']));
        } finally {
            @unlink($dir.'/laravel.log');
            @rmdir($dir);
        }
    }

    public function test_route_registers_when_log_tail_is_enabled(): void
    {
        $panels = app(PanelManager::class);
        $admin = $panels->panel('admin');
        $this->assertNotNull($admin);
        $admin->logTail();

        $this->resetPageDiscovery($panels);

        $this->assertTrue(LogsPage::isEnabled());
        $this->assertArrayHasKey('logs', $panels->pagesFor('admin'));

        PanelRoutes::register($admin);

        $pageRoute = collect(Route::getRoutes())->first(
            static fn (\Illuminate\Routing\Route $route): bool => $route->uri() === 'apps/logs',
        );
        $tailRoute = collect(Route::getRoutes())->first(
            static fn (\Illuminate\Routing\Route $route): bool => $route->uri() === 'apps/logs/tail',
        );

        $this->assertNotNull($pageRoute);
        $this->assertSame($admin->getRouteName().'pages.logs', $pageRoute->getName());
        $this->assertNotNull($tailRoute);
        $this->assertSame($admin->getRouteName().'pages.logs.tail', $tailRoute->getName());
    }

    public function test_page_data_includes_poll_routes(): void
    {
        $admin = app(PanelManager::class)->panel('admin');
        $this->assertNotNull($admin);
        $admin->logTail();

        $data = LogsPage::data(Request::create('/apps/logs'));

        $this->assertSame('/apps/logs', $data['routes']['logs']);
        $this->assertSame('/apps/logs/tail', $data['routes']['tail']);
        $this->assertSame(5, $data['pollSeconds']);
        $this->assertIsArray($data['files']);
        $this->assertIsArray($data['tail']['lines']);
    }

    private function resetPageDiscovery(PanelManager $panels): void
    {
        $ref = new \ReflectionClass($panels);

        foreach (['pagesDiscovered' => false, 'pages' => [], 'panelPageMap' => []] as $property => $value) {
            $prop = $ref->getProperty($property);
            $prop->setAccessible(true);
            $prop->setValue($panels, $value);
        }
    }
}
