<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Capability modules exposed by the meta-package.
 *
 * The manifest is deliberately data, not a second service container. It lets
 * a host inspect optional capability availability before registering routes or
 * rendering navigation, while the existing add-only APIs remain unchanged.
 */
final class PanelModules
{
    /** @return array<string, array{label: string, packages: list<string>, probes: list<string>}> */
    public static function manifest(): array
    {
        return [
            'core' => ['label' => 'Core', 'packages' => [], 'probes' => ['Alxtexh\\Panel\\Panel']],
            'tables' => ['label' => 'Tables', 'packages' => [], 'probes' => ['Alxtexh\\Panel\\Tables\\Table']],
            'forms' => ['label' => 'Forms', 'packages' => [], 'probes' => ['Alxtexh\\Panel\\Forms\\Form']],
            'infolists' => ['label' => 'Infolists', 'packages' => [], 'probes' => ['Alxtexh\\Panel\\Infolists\\TextEntry']],
            'widgets' => ['label' => 'Widgets', 'packages' => [], 'probes' => ['Alxtexh\\Panel\\Widgets\\WidgetSet']],
            'auth' => ['label' => 'Authentication', 'packages' => [], 'probes' => ['Alxtexh\\Panel\\Auth\\TwoFactor']],
            'tenancy' => ['label' => 'Tenancy', 'packages' => ['stancl/tenancy'], 'probes' => ['Stancl\\Tenancy\\TenancyServiceProvider']],
            'notifications' => ['label' => 'Notifications', 'packages' => [], 'probes' => ['Illuminate\\Notifications\\Notification']],
            'telegram' => ['label' => 'Telegram delivery', 'packages' => ['alxtexh-enterprise/panel-telegram', 'laravel-notification-channels/telegram'], 'probes' => ['Alxtexh\\Panel\\Alerts\\Telegram', 'Alxtexh\\Panel\\Notifications\\Channels\\TelegramChannel']],
            'documents' => ['label' => 'Documents', 'packages' => [], 'probes' => ['Alxtexh\\Panel\\Documents\\DocumentRenderer']],
            'billing' => ['label' => 'Billing', 'packages' => ['alxtexh-enterprise/panel-billing'], 'probes' => ['Alxtexh\\Panel\\Billing\\GenericBillingWebhookAdapter', 'Alxtexh\\Panel\\Billing\\SignedHeaderWebhookVerifier']],
            'ai' => ['label' => 'AI', 'packages' => ['alxtexh-enterprise/panel-ai', 'laravel/ai'], 'probes' => ['Laravel\\Ai\\Ai', 'Alxtexh\\Panel\\Knowledge\\ProviderEmbedder', 'Alxtexh\\Panel\\Ai\\TenantScopedConversations']],
            'operations' => ['label' => 'Operations', 'packages' => ['alxtexh-enterprise/panel-operations'], 'probes' => [
                'Alxtexh\\Panel\\Actions\\JobStatus',
                'Alxtexh\\Panel\\Jobs\\ExportRecords',
                'Alxtexh\\Panel\\Imports\\Importer',
                'Alxtexh\\Panel\\Reports\\ScheduledReport',
            ]],
        ];
    }

    /** @return array<string, array{label: string, packages: list<string>, probes: list<string>, available: bool, missing: list<string>}> */
    public static function status(): array
    {
        $result = [];

        foreach (self::manifest() as $key => $module) {
            $missing = array_values(array_filter(
                $module['probes'],
                static fn (string $class): bool => ! class_exists($class) && ! interface_exists($class),
            ));

            $result[$key] = [...$module, 'available' => $missing === [], 'missing' => $missing];
        }

        return $result;
    }
}
