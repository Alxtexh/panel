<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Plugins\Plugin;
use Alxtexh\Panel\Plugins\PluginContext;
use Alxtexh\Panel\Plugins\RenderHooks;

final class IncompatibleRenderHookPlugin extends Plugin
{
    public function id(): string
    {
        return 'tests/incompatible-render-hook';
    }

    public function appliesTo(Panel $panel): bool
    {
        return $panel->id === 'admin';
    }

    public function register(PluginContext $context): void
    {
        $context->render(RenderHooks::FORM_BEFORE, 'FutureFormHook', [], ['articles'], RenderHooks::VERSION + 1);
    }
}
