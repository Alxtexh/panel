<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\Auth\Devices;
use PanelKit\Panel\Auth\Passkeys;
use PanelKit\Panel\Auth\SocialProviders;
use PanelKit\Panel\Models\ConnectedAccount;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Everything about getting into this account, on one screen.
 *
 * THE PIECES WERE ALL PACKAGED AND THE SCREEN WAS NOT, which is the failure this
 * closes. `ManagePasskeys`, `ManageTwoFactor`, `TwoFactorSetupModal` and
 * `TwoFactorRecoveryCodes` have shipped in the npm package since 0.6, and
 * nothing in any installation but the reference application mounted a single one
 * of them. A component in `node_modules` that no route renders is indisting-
 * uishable, from the outside, from a feature that was never built.
 *
 * ONE SCREEN, NOT FOUR. Password, second factor, passkeys, connected accounts
 * and signed-in devices are one question - "who can get into this account" - and
 * somebody who reaches for any of them is already worried. Splitting them across
 * tabs means half of it gets audited.
 *
 * EVERY SECTION IS OPTIONAL AND SAYS SO HONESTLY. Two-factor needs Fortify,
 * passkeys need it too, connected accounts need a configured provider, and the
 * device list needs the database session driver. Each is asked rather than
 * assumed, and an absent one removes its section rather than failing the render:
 * a security screen that 500s is worse than one that offers less.
 */
final class SecurityController
{
    public function edit(Request $request): Response
    {
        $user = $request->user();

        $props = [
            /*
             * PASSWORD RULES GO TO THE BROWSER as the `passwordrules` attribute,
             * which is what tells a password manager to GENERATE something that
             * will pass. Without it the manager offers its own default, the
             * server rejects it, and the person blames the panel.
             */
            'passwordRules' => Password::defaults()->toPasswordRulesString(),

            /*
             * The devices signed in to this account. Empty on any session driver
             * that keeps no server-side record - see Devices.
             */
            'devices' => Devices::forUser($request),

            /*
             * WHICH PROVIDERS COULD BE ATTACHED, and which already are. Both are
             * needed: the screen offers what is missing and lists what is there,
             * and sending only the second would leave nothing to connect from.
             */
            'socialProviders' => SocialProviders::enabled(),
            'connectedAccounts' => self::connectedAccounts($user?->getAuthIdentifier()),

            /*
             * SERIALISED BY THE PACKAGE, so every panel that shows passkeys
             * shows the same fields under the same names - and answers honestly
             * when Fortify is absent, so this screen renders without the section
             * rather than failing to render.
             */
            'canManagePasskeys' => Passkeys::available($user),
            'passkeys' => Passkeys::forUser($user),
        ];

        return Inertia::render('settings/Security', $props + self::twoFactor($user));
    }

    /**
     * Change the password.
     *
     * THE CURRENT ONE IS REQUIRED, and that is not ceremony. Every other control
     * on this screen is reachable by whoever is sitting at an unlocked laptop;
     * asking for the password is what stops that person quietly changing it to
     * one they know and keeping the account.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => ['required', 'string'],
            'password' => ['required', 'string', 'confirmed', Password::defaults()],
        ]);

        $user = $request->user();

        if ($user === null || ! Hash::check($validated['current_password'], (string) $user->getAuthPassword())) {
            return back()->withErrors(['current_password' => __('That is not your current password.')]);
        }

        $user->forceFill(['password' => Hash::make($validated['password'])])->save();

        /*
         * EVERY OTHER SESSION GOES. A password change is most often a response
         * to "somebody may have my password", and leaving their existing
         * sessions alive answers the wrong half of that: the new password locks
         * the front door while whoever is already inside stays inside.
         */
        Devices::forgetOthers($request);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Password updated. Every other device was signed out.')]);

        return back();
    }

    /** Sign one device out. */
    public function destroyDevice(Request $request, string $id): RedirectResponse
    {
        if (! Devices::forget($request, $id)) {
            throw new NotFoundHttpException('No such session.');
        }

        return back()->with('success', __('That device was signed out.'));
    }

    /** Sign out everywhere but here. */
    public function destroyOtherDevices(Request $request): RedirectResponse
    {
        Devices::forgetOthers($request);

        return back()->with('success', __('Every other device was signed out.'));
    }

    /**
     * @return list<array<string, mixed>>
     */
    private static function connectedAccounts(mixed $userId): array
    {
        if ($userId === null || SocialProviders::enabled() === []) {
            return [];
        }

        return ConnectedAccount::query()
            ->where('user_id', $userId)
            ->orderBy('provider')
            ->get()
            ->map(static fn (ConnectedAccount $a): array => [
                'id' => $a->id,
                'provider' => $a->provider,
                'label' => SocialProviders::label($a->provider),
                'email' => $a->email,
                'nickname' => $a->nickname,
                'lastUsedAt' => $a->last_used_at?->toIso8601String(),
            ])
            ->all();
    }

    /**
     * The two-factor props, or none at all when Fortify is not installed.
     *
     * ASKED THROUGH `class_exists` RATHER THAN ASSUMED. Fortify is a suggestion
     * of this package, not a requirement, and referring to its `Features` class
     * unconditionally turns an optional feature into a fatal error on every
     * installation that declined it.
     *
     * @return array<string, mixed>
     */
    private static function twoFactor(mixed $user): array
    {
        $features = '\Laravel\Fortify\Features';

        if ($user === null || ! class_exists($features)) {
            return ['canManageTwoFactor' => false];
        }

        if (! $features::canManageTwoFactorAuthentication()) {
            return ['canManageTwoFactor' => false];
        }

        return [
            'canManageTwoFactor' => true,
            'twoFactorEnabled' => method_exists($user, 'hasEnabledTwoFactorAuthentication')
                ? $user->hasEnabledTwoFactorAuthentication()
                : $user->two_factor_confirmed_at !== null,
            'requiresConfirmation' => $features::optionEnabled($features::twoFactorAuthentication(), 'confirm'),
        ];
    }
}
