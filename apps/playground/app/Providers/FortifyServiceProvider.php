<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Support\DemoLogin;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use Laravel\Fortify\Fortify;
use Alxtexh\Panel\Auth\Passkeys;
use Alxtexh\Panel\Auth\SocialLoginPayload;
use Alxtexh\Panel\PanelManager;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureActions();
        $this->configureViews();
        $this->configureRateLimiting();
    }

    /**
     * Configure Fortify actions.
     */
    private function configureActions(): void
    {
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);
        Fortify::createUsersUsing(CreateNewUser::class);
    }

    /**
     * Configure Fortify views.
     */
    private function configureViews(): void
    {
        Fortify::loginView(fn (Request $request) => Inertia::render('auth/Login', [
            'canResetPassword' => Features::enabled(Features::resetPasswords()),
            'status' => $request->session()->get('status'),
            /*
             * THE PACKAGED CATALOGUE WHEN SOCIALITE IS LOADED. Credentials still
             * gate the OAuth start; unconfigured buttons stay visible and say
             * what to set in `.env`. See `SocialProviders::offered()`.
             */
            'socialProviders' => SocialLoginPayload::forPanel(app(PanelManager::class)->currentPanel()),

            /*
             * A SEEDED ACCOUNT, TYPED IN FOR YOU, on a local machine only.
             *
             * Null everywhere else, and `DemoLogin` decides that from the
             * ENVIRONMENT rather than from a config key alone - a prop that
             * carried a password would otherwise be one bad `.env` copy away
             * from a real sign-in page.
             */
            'prefill' => DemoLogin::credentials(),

            /*
             * THE PASSKEY ROUTES, WHICH THIS VIEW STOPPED SENDING.
             *
             * The sign-in screen moved into `@alxtexh-enterprise/panel` and its passkey
             * button is gated on this prop; nothing here ever sent it, so the
             * button silently disappeared from a screen that had it before.
             * Nothing failed and no test noticed - the page renders, signs
             * people in, and is simply missing a way in.
             *
             * The packaged screen now defaults these routes rather than
             * requiring them, so this line is belt and braces: it is also what
             * a consumer with passkeys mounted somewhere else would write.
             */
            'passkeys' => Passkeys::signInRoutes(),
            'magicLinkUrl' => self::magicLinkUrlForLogin(),
        ]));

        Fortify::resetPasswordView(fn (Request $request) => Inertia::render('auth/ResetPassword', [
            'email' => $request->email,
            'token' => $request->route('token'),
            'passwordRules' => Password::defaults()->toPasswordRulesString(),
        ]));

        Fortify::requestPasswordResetLinkView(fn (Request $request) => Inertia::render('auth/ForgotPassword', [
            'status' => $request->session()->get('status'),
        ]));

        Fortify::verifyEmailView(fn (Request $request) => Inertia::render('auth/VerifyEmail', [
            'status' => $request->session()->get('status'),
        ]));

        Fortify::registerView(fn () => Inertia::render('auth/Register', [
            'passwordRules' => Password::defaults()->toPasswordRulesString(),
        ]));

        Fortify::twoFactorChallengeView(fn () => Inertia::render('auth/TwoFactorChallenge'));

        Fortify::confirmPasswordView(fn () => Inertia::render('auth/ConfirmPassword'));
    }

    private static function magicLinkUrlForLogin(): ?string
    {
        if (! filter_var(config('panel.auth.magic_link', false), FILTER_VALIDATE_BOOLEAN)) {
            return null;
        }

        foreach (app(PanelManager::class)->panels() as $panel) {
            if ($panel->hasPasswordless()) {
                return url('/auth/magic-link');
            }
        }

        return null;
    }

    /**
     * Configure rate limiting.
     */
    private function configureRateLimiting(): void
    {
        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });

        RateLimiter::for('login', function (Request $request) {
            $throttleKey = Str::transliterate(Str::lower($request->input(Fortify::username())).'|'.$request->ip());

            return Limit::perMinute(5)->by($throttleKey);
        });

        RateLimiter::for('passkeys', function (Request $request) {
            return Limit::perMinute(10)->by(
                ($request->input('credential.id') ?: $request->session()->getId()).'|'.$request->ip(),
            );
        });
    }
}
