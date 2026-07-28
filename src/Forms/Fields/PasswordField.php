<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

use Illuminate\Support\Facades\Hash;

/**
 * A password, hashed on the way in and never sent on the way out.
 *
 * BLANK MEANS UNCHANGED. An edit form is opened far more often to fix a name
 * than to change a password, so a field that writes whatever it holds would
 * erase the password every time somebody corrects a typo. `omitsFromStorage()`
 * is what makes blank mean "leave it alone" rather than "set it to nothing" -
 * and that is a distinct concept from transforming to null, which would destroy
 * the value just as thoroughly while looking deliberate.
 *
 * IT IS NEVER PRESENTED. `presentValue()` returns null, so the current hash does
 * not travel to the browser inside the edit payload. A hash is not a secret in
 * the way a password is, but it is an offline-cracking head start handed out on
 * every form load, for a field that could not usefully display it anyway.
 *
 * HASHED HERE RATHER THAN IN A MODEL MUTATOR, because "blank means unchanged" is
 * a property of this FORM, not of the model - a seeder assigning an empty
 * password should fail loudly rather than silently keep the old one.
 */
final class PasswordField extends Field
{
    public function type(): string
    {
        return 'password';
    }

    public function omitsFromStorage(mixed $value): bool
    {
        return blank($value);
    }

    public function transformForStorage(mixed $value): mixed
    {
        return Hash::make((string) $value);
    }

    /** Never round-trips the stored hash to the client. */
    public function presentValue(mixed $value): mixed
    {
        return null;
    }
}
