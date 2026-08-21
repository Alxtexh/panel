<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Http\PanelRoutes;
use Alxtexh\Panel\Pages\ApiDocsPage;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\OpenApiSpec;
use Alxtexh\Panel\Support\PanelPages;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

final class ApiDocsTest extends TestCase
{
    use RefreshDatabase;

    public function test_api_docs_is_off_until_enabled(): void
    {
        $this->assertFalse(ApiDocsPage::isEnabled());
        $this->assertFalse(Panel::make('alone')->offersApp('api-docs'));
    }

    public function test_api_docs_shorthand_opts_in(): void
    {
        $panel = Panel::make('docs-demo')->apiDocs();

        $this->assertTrue($panel->offersApp('api-docs'));
        $this->assertNull($panel->getOpenapiUrl());
    }

    public function test_api_docs_accepts_configured_openapi_url(): void
    {
        $panel = Panel::make('docs-url')->apiDocs('https://example.test/openapi.json');

        $this->assertTrue($panel->offersApp('api-docs'));
        $this->assertSame('https://example.test/openapi.json', $panel->getOpenapiUrl());
    }

    public function test_api_docs_is_an_optional_screen_stub(): void
    {
        $this->assertContains('ApiDocs', PanelPages::OPTIONAL_SCREENS);
        $this->assertNotContains('ApiDocs', PanelPages::SCREENS);
        $this->assertStringContainsString('ApiDocs', PanelPages::stub('ApiDocs'));
    }

    public function test_openapi_spec_is_valid_even_without_documented_resources(): void
    {
        $doc = OpenApiSpec::document('Empty');

        $this->assertSame('3.1.0', $doc['openapi']);
        $this->assertSame('Empty', $doc['info']['title']);
        $this->assertIsArray($doc['paths']);
        $this->assertArrayHasKey('bearer', $doc['components']['securitySchemes']);
    }

    public function test_page_data_uses_configured_url(): void
    {
        $admin = app(PanelManager::class)->panel('admin');
        $this->assertNotNull($admin);
        $admin->apiDocs('https://cdn.example/openapi.json');

        $data = ApiDocsPage::data(Request::create('/apps/api-docs'));

        $this->assertSame('https://cdn.example/openapi.json', $data['openapiUrl']);
    }

    public function test_page_data_falls_back_to_generated_spec_href(): void
    {
        $admin = app(PanelManager::class)->panel('admin');
        $this->assertNotNull($admin);
        $admin->apiDocs();

        $data = ApiDocsPage::data(Request::create('/apps/api-docs'));

        $this->assertSame('/apps/api-docs/openapi.json', $data['openapiUrl']);
    }

    public function test_route_registers_when_api_docs_is_enabled(): void
    {
        $panels = app(PanelManager::class);
        $admin = $panels->panel('admin');
        $this->assertNotNull($admin);
        $admin->apiDocs();

        $this->resetPageDiscovery($panels);

        $this->assertTrue(ApiDocsPage::isEnabled());
        $this->assertArrayHasKey('api-docs', $panels->pagesFor('admin'));

        PanelRoutes::register($admin);

        $pageRoute = collect(Route::getRoutes())->first(
            static fn (\Illuminate\Routing\Route $route): bool => $route->uri() === 'apps/api-docs',
        );
        $specRoute = collect(Route::getRoutes())->first(
            static fn (\Illuminate\Routing\Route $route): bool => $route->uri() === 'apps/api-docs/openapi.json',
        );

        $this->assertNotNull($pageRoute);
        $this->assertSame($admin->getRouteName().'pages.api-docs', $pageRoute->getName());
        $this->assertNotNull($specRoute);
        $this->assertSame($admin->getRouteName().'pages.api-docs.spec', $specRoute->getName());
    }

    public function test_spec_action_returns_openapi_json(): void
    {
        $admin = app(PanelManager::class)->panel('admin');
        $this->assertNotNull($admin);
        $admin->apiDocs();

        $response = ApiDocsPage::spec(Request::create('/apps/api-docs/openapi.json'));

        $this->assertSame(200, $response->getStatusCode());
        $payload = $response->getData(true);
        $this->assertSame('3.1.0', $payload['openapi']);
        $this->assertIsArray($payload['paths']);
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
