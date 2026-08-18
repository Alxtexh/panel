<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Alxtexh\Panel\Pages\BillingPortalPage;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Illuminate\Support\Arr;

final class BillingAccess
{
    /**
     * @param  array<string, mixed>|null  $state
     * @return array<string, mixed>
     */
    public static function normalize(?array $state, Panel $panel): array
    {
        $status = self::normalizeStatus((string) ($state['status'] ?? 'active'));
        $blocks = array_key_exists('blocksAccess', $state ?? [])
            ? (bool) $state['blocksAccess']
            : in_array($status, ['suspended', 'canceled', 'expired'], true);

        $plan = self::normalizePlan($state);
        $reason = self::stringOrNull($state['reason'] ?? $state['message'] ?? $state['detail'] ?? null);
        $due = self::stringOrNull($state['dueMessage'] ?? $state['due_message'] ?? null);
        $renewal = self::stringOrNull($state['renewalMessage'] ?? $state['renewal_message'] ?? null);
        $title = self::stringOrNull($state['title'] ?? null) ?? self::defaultTitle($status);
        $body = self::stringOrNull($state['body'] ?? null) ?? self::defaultBody($status, $plan['name'] ?? null);

        return [
            'status' => $status,
            'statusLabel' => self::label($status),
            'blocksAccess' => $blocks,
            'title' => $title,
            'body' => $body,
            'reason' => $reason,
            'dueMessage' => $due,
            'renewalMessage' => $renewal,
            'plan' => $plan,
            'billingHref' => self::billingHref($panel, $state ?? []),
            'billingLabel' => self::stringOrNull($state['billingLabel'] ?? Arr::get($state, 'actions.billing.label')) ?? 'Manage subscription',
            'logoutHref' => self::logoutHref($panel),
            'logoutLabel' => self::stringOrNull($state['logoutLabel'] ?? Arr::get($state, 'actions.logout.label')) ?? 'Sign out',
            'supportEmail' => config('panel.support_email'),
        ];
    }

    public static function blocks(Panel $panel): bool
    {
        return (bool) ($panel->resolveBillingState()['blocksAccess'] ?? false);
    }

    public static function label(string $status): string
    {
        return match ($status) {
            'past_due' => 'Past due',
            'suspended' => 'Suspended',
            'canceled' => 'Canceled',
            'expired' => 'Expired',
            default => 'Active',
        };
    }

    public static function billingHref(Panel $panel, array $state = []): string
    {
        $fromState = self::stringOrNull(
            Arr::get($state, 'billingHref')
            ?? Arr::get($state, 'actions.billing.href')
            ?? Arr::get($state, 'actions.portal.href')
            ?? Arr::get($state, 'actions.manage.href')
        );

        if ($fromState !== null) {
            return $fromState;
        }

        $pages = app(PanelManager::class)->pagesFor($panel->id);

        foreach ($pages as $slug => $class) {
            if (! is_a($class, BillingPortalPage::class, true)) {
                continue;
            }

            return '/'.trim($panel->getPath().'/'.$class::navigationPath(), '/');
        }

        return $panel->subscriptionBillingPath();
    }

    public static function logoutHref(Panel $panel): ?string
    {
        $route = rtrim($panel->getRouteName(), '.').'.logout';

        return app('router')->getRoutes()->getByName($route) !== null
            ? route($route)
            : null;
    }

    private static function normalizeStatus(string $status): string
    {
        $normalized = str_replace('-', '_', strtolower(trim($status)));

        return match ($normalized) {
            'pastdue', 'past_due' => 'past_due',
            'suspend', 'suspended' => 'suspended',
            'cancelled', 'canceled' => 'canceled',
            'expire', 'expired' => 'expired',
            default => 'active',
        };
    }

    /**
     * @param  array<string, mixed>|null  $state
     * @return array{name: ?string, price: ?string, interval: ?string}
     */
    private static function normalizePlan(?array $state): array
    {
        $plan = $state['plan'] ?? null;

        if (is_array($plan)) {
            return [
                'name' => self::stringOrNull($plan['name'] ?? $plan['label'] ?? null),
                'price' => self::stringOrNull($plan['price'] ?? null),
                'interval' => self::stringOrNull($plan['interval'] ?? null),
            ];
        }

        return [
            'name' => self::stringOrNull($plan),
            'price' => null,
            'interval' => null,
        ];
    }

    private static function defaultTitle(string $status): string
    {
        return match ($status) {
            'past_due' => 'Payment is due',
            'suspended' => 'Subscription suspended',
            'canceled' => 'Subscription canceled',
            'expired' => 'Subscription expired',
            default => 'Subscription active',
        };
    }

    private static function defaultBody(string $status, ?string $plan): string
    {
        $planCopy = $plan !== null && $plan !== '' ? " for {$plan}" : '';

        return match ($status) {
            'past_due' => "Your billing is behind{$planCopy}. Update payment details to avoid interruption.",
            'suspended' => "Access is paused{$planCopy} until billing is brought back into good standing.",
            'canceled' => "This subscription{$planCopy} has been canceled. Choose a plan to restore access.",
            'expired' => "This subscription{$planCopy} has ended. Renew or change plan to continue.",
            default => "This subscription{$planCopy} is active.",
        };
    }

    private static function stringOrNull(mixed $value): ?string
    {
        if (! is_string($value)) {
            return null;
        }

        $value = trim($value);

        return $value === '' ? null : $value;
    }
}
