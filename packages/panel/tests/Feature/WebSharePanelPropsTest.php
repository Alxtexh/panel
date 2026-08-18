<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\WebSharePanelProps;
use Alxtexh\Panel\Tests\TestCase;

/**
 * The installer must put SharePanelProps on the web group, or app-owned
 * routes lose the shell.
 */
final class WebSharePanelPropsTest extends TestCase
{
    public function test_a_stock_bootstrap_app_gets_the_web_append(): void
    {
        $source = <<<'PHP'
<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        //
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
PHP;

        $this->assertFalse(WebSharePanelProps::present($source));

        $updated = WebSharePanelProps::add($source);

        $this->assertNotNull($updated);
        $this->assertTrue(WebSharePanelProps::present($updated));
        $this->assertStringContainsString(WebSharePanelProps::IMPORT, $updated);
        $this->assertStringContainsString('SharePanelProps::class', $updated);
        $this->assertStringContainsString('$middleware->web(append:', $updated);
    }

    public function test_an_existing_web_append_gains_the_class(): void
    {
        $source = <<<'PHP'
<?php

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);
    })->create();
PHP;

        $updated = WebSharePanelProps::add($source);

        $this->assertNotNull($updated);
        $this->assertStringContainsString('SharePanelProps::class', $updated);
        $this->assertStringContainsString('HandleInertiaRequests::class', $updated);
        $this->assertStringContainsString(WebSharePanelProps::IMPORT, $updated);
    }

    public function test_a_file_that_already_shares_is_left_byte_stable(): void
    {
        $source = <<<'PHP'
<?php

use Alxtexh\Panel\Http\Middleware\SharePanelProps;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            SharePanelProps::class,
        ]);
    })->create();
PHP;

        $this->assertSame($source, WebSharePanelProps::add($source));
    }
}
