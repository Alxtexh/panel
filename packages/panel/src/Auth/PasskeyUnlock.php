<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Auth;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use RuntimeException;

/**
 * Unlock a locked panel with a passkey belonging to the signed-in user.
 *
 * THE LOGIN ROUTES CANNOT BE REUSED. `laravel/passkeys` registers them behind
 * `guest`, and this person is still authenticated: the session is locked, not
 * ended. Confirmation routes only stamp `password_confirmed_at`. Unlock has to
 * verify the same assertion, then clear the idle-lock flag.
 *
 * SCOPED TO THE ACCOUNT ON SCREEN. Options name that user's credentials, and
 * verification refuses a key that belongs to somebody else, so a passer-by
 * cannot unlock with their own passkey.
 *
 * ABSENT `laravel/passkeys`, every method here no-ops or 404s. The lock screen
 * hides the button when `offered()` returns null.
 */
final class PasskeyUnlock
{
    /**
     * Routes the lock screen button posts to, or null when this person has no
     * passkey (or the installation cannot verify one).
     *
     * @return array{options: string, verify: string}|null
     */
    public static function offered(?Authenticatable $user, ?string $optionsUrl, ?string $verifyUrl): ?array
    {
        if ($optionsUrl === null || $verifyUrl === null) {
            return null;
        }

        if (! Passkeys::available($user) || Passkeys::forUser($user) === []) {
            return null;
        }

        return [
            'options' => $optionsUrl,
            'verify' => $verifyUrl,
        ];
    }

    public static function optionsResponse(Request $request, Authenticatable $user): JsonResponse
    {
        self::assertStack();

        $passkeyUser = 'Laravel\\Passkeys\\Contracts\\PasskeyUser';

        if (! $user instanceof $passkeyUser) {
            throw new RuntimeException('User model must implement the PasskeyUser contract.');
        }

        $generate = app('Laravel\\Passkeys\\Actions\\GenerateVerificationOptions');
        $webauthn = 'Laravel\\Passkeys\\Support\\WebAuthn';
        $options = $generate($user);

        $request->session()->put('passkey.verification_options', $webauthn::toJson($options));

        return response()->json([
            'options' => $webauthn::toBrowserArray($options),
        ]);
    }

    /**
     * Verify the assertion belongs to this user.
     *
     * @throws ValidationException
     */
    public static function verify(Request $request, Authenticatable $user): void
    {
        self::assertStack();

        $passkeyUser = 'Laravel\\Passkeys\\Contracts\\PasskeyUser';

        if (! $user instanceof $passkeyUser) {
            throw new RuntimeException('User model must implement the PasskeyUser contract.');
        }

        $formClass = 'Laravel\\Passkeys\\Http\\Requests\\PasskeyVerificationRequest';
        $form = $formClass::createFrom($request);
        $form->setContainer(app())->setRedirector(app('redirect'));
        $form->validateResolved();

        try {
            app('Laravel\\Passkeys\\Actions\\VerifyPasskey')(
                $form->credential(),
                $form->verificationOptions(),
                $user,
            );
        } catch (\Throwable) {
            throw ValidationException::withMessages([
                'credential' => 'That passkey was not accepted.',
            ]);
        }
    }

    private static function assertStack(): void
    {
        if (! class_exists('Laravel\\Passkeys\\Actions\\GenerateVerificationOptions')
            || ! class_exists('Laravel\\Passkeys\\Actions\\VerifyPasskey')) {
            abort(404);
        }
    }
}
