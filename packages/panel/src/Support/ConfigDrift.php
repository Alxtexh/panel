<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

/**
 * The config keys a new version added that `mergeConfigFrom` will NOT supply.
 *
 * THIS IS NARROWER THAN "NEW KEYS", deliberately. `mergeConfigFrom` is a
 * shallow merge: a top-level key absent from a published `config/panel.php`
 * still gets the package default, so naming those would be noise on every
 * upgrade. What the merge cannot rescue is a key added INSIDE an array the
 * application already publishes - the published `['env' => [...]]` wins whole,
 * and `env.editable` is simply not there.
 *
 * `config()` THEN READS THAT KEY AS UNSET. How bad that is depends on the call
 * site: one that passes its own default degrades quietly to it, and one that
 * does not gets null. The first case is merely invisible - the value cannot be
 * edited from the file that appears to hold it. The second is silent and shaped
 * like an ABSENT FEATURE: the screen the key enables does not appear, nothing
 * errors, and the reasonable conclusion - "this version did not ship it" - is
 * wrong.
 *
 * IT IS A SEPARATE CLASS BECAUSE IT HAD TO BE TESTABLE WITHOUT A COMMAND. As a
 * private method it could only be reached through `panel:update`'s output, and
 * that command ends by calling `panel:doctor` - so `Artisan::output()` returns
 * DOCTOR's buffer, not the one being asserted on. The test passed run alone and
 * failed in the suite, which is the shape of an assertion that was never really
 * reading what it claimed to.
 */
final class ConfigDrift
{
    /**
     * @param  array<mixed>  $ours  The package's own config file, as an array.
     * @param  array<mixed>  $theirs  The application's published copy.
     * @return list<string> Dot paths, without the `panel.` prefix.
     */
    public static function keysNotSuppliedByMerge(array $ours, array $theirs, string $prefix = ''): array
    {
        $missing = [];

        foreach ($ours as $key => $value) {
            /*
             * A LIST IS A VALUE, NOT A NAMESPACE. An application that shortened
             * `abilities` to the four it actually uses has configured that key,
             * not lost three - reporting the difference would be telling
             * somebody their deliberate edit is drift.
             */
            if (is_int($key)) {
                continue;
            }

            $path = $prefix === '' ? (string) $key : $prefix.'.'.$key;

            if (! array_key_exists($key, $theirs)) {
                // Top level is skipped: the shallow merge covers it.
                if ($prefix !== '') {
                    $missing[] = $path;
                }

                continue;
            }

            // Both sides have the key and both are arrays, so the published one
            // replaces the default whole - which is the condition that makes
            // anything missing below here unreachable.
            if (is_array($value) && is_array($theirs[$key])) {
                $missing = [...$missing, ...self::keysNotSuppliedByMerge($value, $theirs[$key], $path)];
            }
        }

        return $missing;
    }
}
