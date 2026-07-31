<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\PasswordUpdateRequest;
use App\Http\Requests\Settings\TwoFactorAuthenticationRequest;
use App\Models\ConnectedAccount;
use App\Support\SocialProviders;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Fortify\Features;
use PanelKit\Panel\Auth\PasswordPolicy;

class SecurityController extends Controller
{
    /**
     * Show the user's security settings page.
     */
    public function edit(TwoFactorAuthenticationRequest $request): Response
    {
        $props = [
            /*
             * The devices signed in to this account.
             *
             * On the SECURITY page rather than anywhere else, because "where
             * am I logged in" is the same question as "who has my password" -
             * somebody who reaches for it is already worried, and it belongs
             * beside the password and two-factor controls they will use next.
             */
            'devices' => DeviceController::forUser($request),

            /*
             * WHICH PROVIDERS COULD BE ATTACHED, and which already are. Both
             * are needed: the screen offers what is missing and lists what is
             * there, and sending only the second would leave nothing to
             * connect from.
             */
            'socialProviders' => SocialProviders::enabled(),
            'connectedAccounts' => ConnectedAccount::query()
                ->where('user_id', $request->user()?->getKey())
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
                ->all(),
            'canManageTwoFactor' => Features::canManageTwoFactorAuthentication(),
            'canManagePasskeys' => Features::canManagePasskeys(),
            'passkeys' => Features::canManagePasskeys()
                ? $request->user()
                    ->passkeys()
                    ->select(['id', 'name', 'credential', 'created_at', 'last_used_at'])
                    ->latest()
                    ->get()
                    ->map(fn ($passkey) => [
                        'id' => $passkey->id,
                        'name' => $passkey->name,
                        'authenticator' => $passkey->authenticator,
                        'created_at_diff' => $passkey->created_at->diffForHumans(),
                        'last_used_at_diff' => $passkey->last_used_at?->diffForHumans(),
                    ])
                    ->values()
                    ->all()
                : [],
            'passwordRules' => Password::defaults()->toPasswordRulesString(),
        ];

        if (Features::canManageTwoFactorAuthentication()) {
            $request->ensureStateIsValid();

            $props['twoFactorEnabled'] = $request->user()->hasEnabledTwoFactorAuthentication();
            $props['requiresConfirmation'] = Features::optionEnabled(Features::twoFactorAuthentication(), 'confirm');
        }

        return Inertia::render('settings/Security', $props);
    }

    /**
     * Update the user's password.
     */
    public function update(PasswordUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();
        $policy = PasswordPolicy::fromConfig();

        /*
         * THE SAME REFUSAL AS THE RENEWAL SCREEN, because this is the other way
         * to change a password and a rule enforced at one entrance is not
         * enforced. Somebody caught by the age policy who happens to be on the
         * settings page would otherwise satisfy it by re-entering what they
         * already had.
         */
        if ($policy->isReused($user, $request->password)) {
            throw ValidationException::withMessages([
                'password' => 'That is one of your recent passwords. Choose a different one.',
            ]);
        }

        // Before the save, so the history holds the password being replaced -
        // see `PasswordPolicy::recordChange`.
        $policy->recordChange($user);

        $user->forceFill(['password' => $request->password])->save();

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Password updated.')]);

        return back();
    }
}
