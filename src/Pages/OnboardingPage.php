<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\OnboardingSteps;

/**
 * Onboarding wizard. OFF until `apps(['onboarding'])`.
 *
 * Redirect once after first login: check `onboarding:dismissed` in host
 * middleware and send to this page's URI when steps remain.
 */
class OnboardingPage extends Page
{
    protected static string $icon = 'rocket';

    protected static ?string $group = null;

    protected static ?int $sort = -40;

    public static function uri(): string
    {
        return 'get-started';
    }

    public static function label(): string
    {
        return 'Get started';
    }

    public static function component(): string
    {
        return 'Onboarding';
    }

    public static function isEnabled(): bool
    {
        $panel = app(PanelManager::class)->panel(static::panel());

        return $panel !== null && $panel->offersApp('onboarding');
    }

    /**
     * @return list<array{key: string, label: string, done: bool, href: string|null, description?: string, actionLabel?: string}>
     */
    public static function steps(Request $request): array
    {
        return OnboardingSteps::items($request);
    }

    public static function actions(): array
    {
        return [
            'dismiss' => null,
        ];
    }

    public static function actionUris(): array
    {
        return ['dismiss' => 'dismiss'];
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        return [
            'steps' => static::steps($request),
            'dismissed' => OnboardingSteps::isDone($request),
        ];
    }

    public static function dismiss(Request $request): RedirectResponse
    {
        OnboardingSteps::persistDone($request);

        return redirect('/')->withCookie(OnboardingSteps::doneCookie(true));
    }
}
