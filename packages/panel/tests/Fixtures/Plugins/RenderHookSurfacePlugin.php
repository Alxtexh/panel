<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Plugins\Plugin;
use Alxtexh\Panel\Plugins\PluginContext;
use Alxtexh\Panel\Plugins\RenderHooks;

/**
 * Registers a hook at every position `PageController`/`ResourceController`
 * are supposed to surface, for `RenderHooksSurfaceTest` to check against.
 */
final class RenderHookSurfacePlugin extends Plugin
{
    public function id(): string
    {
        return 'tests/render-hook-surface';
    }

    public function appliesTo(Panel $panel): bool
    {
        return $panel->id === 'admin';
    }

    public function register(PluginContext $context): void
    {
        $context->render(RenderHooks::DASHBOARD_BEFORE, 'FixtureDashboardBefore');
        $context->render(RenderHooks::DASHBOARD_AFTER, 'FixtureDashboardAfter');
        $context->render(RenderHooks::FORM_BEFORE, 'FixtureFormBefore', [], ['articles']);
        $context->render(RenderHooks::FORM_AFTER, 'FixtureFormAfter', [], ['articles']);
        $context->render(RenderHooks::FORM_BEFORE, 'FixtureOtherResourceFormBefore', [], ['tags']);
        $context->render(RenderHooks::LIST_ROW_ACTIONS_BEFORE, 'FixtureRowActionsBefore', [], ['articles']);
        $context->render(RenderHooks::LIST_ROW_ACTIONS_AFTER, 'FixtureRowActionsAfter', [], ['articles']);
        $context->render(RenderHooks::LIST_ROW_ACTIONS_BEFORE, 'FixtureOtherResourceRowActionsBefore', [], ['tags']);
    }
}
