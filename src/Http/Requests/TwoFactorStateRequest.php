<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Laravel\Fortify\InteractsWithTwoFactorState;

/**
 * Fortify's two-factor state transitions, reachable from a packaged controller.
 *
 * MOVED FROM THE REFERENCE APP, where it was `TwoFactorAuthenticationRequest`
 * and was the only reason that application kept its own security controller.
 * The trait it carries does real work: somebody who opens the two-factor setup,
 * gets a secret issued and then walks away leaves a confirmed-at of null behind,
 * and `ensureStateIsValid` is what disables the half-finished enrolment instead
 * of leaving an account that reads as protected and is not.
 *
 * NEVER TYPE-HINTED, ALWAYS RESOLVED BEHIND `class_exists`. Fortify is a
 * suggestion of this package rather than a requirement, and this class cannot
 * load without it - the trait is Fortify's. A type-hint in a controller
 * signature would load it on every request and turn a declined optional
 * dependency into a fatal error; `app(self::class)` inside a guard loads it only
 * where it can work. The container hydrates it from the current request, so it
 * arrives with the session and the signed-in user the trait needs.
 */
final class TwoFactorStateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Nothing to validate. The work is in the trait, not in the input.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [];
    }

    use InteractsWithTwoFactorState;
}
