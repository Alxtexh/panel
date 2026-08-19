<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Plugins\Plugin;
use Alxtexh\Panel\Plugins\PluginContext;
use Alxtexh\Panel\Tests\Fixtures\Second\ReportResource;

/**
 * A plugin that installs a screen, gated on config.
 *
 * SHAPED LIKE `AnnouncementsPlugin`, deliberately - including the gate that
 * one was missing. A plugin present in the default `plugins` list is
 * REGISTERED on every install; whether it APPLIES is a separate question, and
 * conflating the two is how a CRUD screen and an API endpoint arrived with no
 * configuration touched at all.
 */
final class DemoPlugin extends Plugin
{
    public function id(): string
    {
        return 'tests/demo';
    }

    public function appliesTo(Panel $panel): bool
    {
        return config('tests.demo_plugin.enabled', false) === true
            && $panel->id === 'admin';
    }

    public function register(PluginContext $context): void
    {
        $context->page('Demo screen', '/demo', 'sparkles');
    }
}
