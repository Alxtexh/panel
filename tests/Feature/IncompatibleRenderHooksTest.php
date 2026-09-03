<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Plugins\IncompatibleRenderHookPlugin;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Contracts\Config\Repository;

final class IncompatibleRenderHooksTest extends TestCase
{
    protected function defineEnvironment($app): void
    {
        parent::defineEnvironment($app);

        $app->make(Repository::class)->set('panel.plugins', [IncompatibleRenderHookPlugin::class]);
    }

    public function test_incompatible_hooks_are_reported_and_not_rendered(): void
    {
        $panels = app(PanelManager::class);
        $report = $panels->renderHookCompatibility('articles', 'admin');
        $future = collect($report)->firstWhere('component', 'FutureFormHook');

        $this->assertIsArray($future);
        $this->assertFalse($future['compatible']);
        $this->assertSame(2, $future['version']);
        $this->assertNotContains(
            'FutureFormHook',
            array_column($panels->renderHooks('articles', 'admin'), 'component'),
        );
    }
}
