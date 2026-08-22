<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Auth;

use Alxtexh\Panel\Panel;

/**
 * The sign-in provider list every auth screen and the landing page read.
 *
 * LIVED IN `PanelAuthController` UNTIL v1.2.1, which meant only login received
 * the list and every other screen that wanted the same buttons had to duplicate
 * the shape or hard-code a preview. `SharePanelProps` and this class share one
 * resolution path: `SocialProviders::offered()` for what to list, credentials
 * for whether the button navigates or explains what to set in `.env`.
 */
final class SocialLoginPayload
{
    /**
     * Providers for a panel's sign-in UI, or an empty list when socialite is off.
     *
     * @return list<array{key: string, label: string, url: string, configured: bool, hint: string|null}>
     */
    public static function forPanel(?Panel $panel): array
    {
        if ($panel === null) {
            return [];
        }

        $out = [];

        foreach (SocialProviders::offered($panel) as $key => $label) {
            $configured = SocialProviders::hasCredentials($key);

            $out[] = [
                'key' => $key,
                'label' => $label,
                'url' => self::redirectUrl($panel, $key),
                'configured' => $configured,
                'hint' => $configured ? null : SocialProviders::credentialsHint($key),
            ];
        }

        return $out;
    }

    public static function redirectUrl(Panel $panel, string $provider): string
    {
        return '/'.trim(trim($panel->getPath(), '/')."/auth/{$provider}/redirect", '/');
    }
}
