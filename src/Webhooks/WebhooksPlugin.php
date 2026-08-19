<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Webhooks;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Plugins\Plugin;
use Alxtexh\Panel\Plugins\PluginContext;

/**
 * Internal webhooks package. Endpoints and deliveries live in-tree; not a
 * marketplace zip. Opt in with `Panel::webhooks()` or `->apps(['webhooks'])`.
 */
final class WebhooksPlugin extends Plugin
{
    public function id(): string
    {
        return 'alxtexhpanel/webhooks';
    }

    public function appliesTo(Panel $panel): bool
    {
        return parent::appliesTo($panel) && $panel->offersApp('webhooks');
    }

    public function register(PluginContext $context): void
    {
        // WebhookEndpointsPage is a packaged page; persistence and dispatch
        // live under Alxtexh\Panel\Webhooks.
    }
}
