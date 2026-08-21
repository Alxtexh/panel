<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Http\PanelRoutes;
use Alxtexh\Panel\Pages\ShowcasePage;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelPages;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

final class KitShowcaseTest extends TestCase
{
    use RefreshDatabase;

    public function test_showcase_app_is_off_until_enabled(): void
    {
        $this->assertFalse(ShowcasePage::isEnabled());
        $this->assertFalse(Panel::make('alone')->offersApp('showcase'));
    }

    public function test_kit_showcase_shorthand_opts_in(): void
    {
        $panel = Panel::make('ops')->kitShowcase();

        $this->assertTrue($panel->offersApp('showcase'));
    }

    public function test_showcase_is_an_optional_screen_stub(): void
    {
        $this->assertContains('Showcase', PanelPages::OPTIONAL_SCREENS);
        $this->assertNotContains('Showcase', PanelPages::SCREENS);
        $this->assertStringContainsString('Showcase', PanelPages::stub('Showcase'));
        $this->assertStringContainsString(
            '@alxtexh-enterprise/panel/pages/Showcase.vue',
            PanelPages::stub('Showcase'),
        );
    }

    public function test_route_registers_when_kit_showcase_is_enabled(): void
    {
        $panels = app(PanelManager::class);
        $admin = $panels->panel('admin');
        $this->assertNotNull($admin);
        $admin->kitShowcase();

        $this->resetPageDiscovery($panels);

        $this->assertTrue(ShowcasePage::isEnabled());
        $this->assertArrayHasKey('showcase', $panels->pagesFor('admin'));

        PanelRoutes::register($admin);

        $pageRoute = collect(Route::getRoutes())->first(
            static fn (\Illuminate\Routing\Route $route): bool => $route->uri() === 'apps/showcase',
        );

        $this->assertNotNull($pageRoute);
        $this->assertSame($admin->getRouteName().'pages.showcase', $pageRoute->getName());
    }

    public function test_page_data_is_domain_neutral(): void
    {
        $data = ShowcasePage::data(Request::create('/apps/showcase'));

        $this->assertArrayHasKey('samples', $data);
        $this->assertNotEmpty($data['samples']['fields']);
        $this->assertNotEmpty($data['samples']['columns']);
        $this->assertNotEmpty($data['samples']['rows']);
        $this->assertNotEmpty($data['samples']['widgets']);

        $encoded = json_encode($data);
        $this->assertIsString($encoded);
        $this->assertStringNotContainsString('Nairobi', $encoded);
        $this->assertStringNotContainsString('Fibre', $encoded);
        $this->assertStringNotContainsString('ISP', $encoded);
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
