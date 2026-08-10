<?php

declare(strict_types=1);

namespace Tests\Feature;

use Alxtexh\Panel\Support\ConfigMerge;
use Tests\TestCase;

/**
 * A setting a new version adds INSIDE an array reaches an existing install.
 *
 * REPORTED FROM A REAL PORT, and true of this repository while it was reported:
 * `mergeConfigFrom` is a shallow `array_merge`, so a published
 * `config/panel.php` supplies `auth` WHOLE and `auth.max_attempts` is simply
 * not there. `config()` reads it as unset - which, where the call site has no
 * default of its own, is shaped like an ABSENT FEATURE rather than a missing
 * setting. The screen does not appear, nothing errors, and "this version did
 * not ship it" is the reasonable and wrong conclusion.
 *
 * THE FIRST TEST IS THE ONE THAT MATTERS. The rest pin the rule; that one pins
 * that the provider actually calls it, against this application's own published
 * config, which really is missing those keys.
 */
final class ConfigMergeTest extends TestCase
{
    /**
     * THE REFERENCE APP'S PUBLISHED CONFIG HAS NO `auth` BLOCK AT ALL BELOW THE
     * KEYS IT SETS, so every one of these was unreachable until the merge went
     * deep. Read from `config()` rather than from `ConfigMerge` directly -
     * a correct merge nobody calls is the failure this codebase keeps naming.
     */
    public function test_a_nested_default_survives_a_published_config(): void
    {
        $published = require config_path('panel.php');

        $this->assertArrayNotHasKey(
            'max_attempts',
            (array) ($published['auth'] ?? []),
            'This application now publishes the key, so the assertion below proves nothing. '
            .'Pick another key the package supplies and it does not.',
        );

        $this->assertSame(5, config('panel.auth.max_attempts'));
        $this->assertSame(true, config('panel.auth.password.refuse_reuse'));
    }

    /** What the application DOES say still wins, at every depth. */
    public function test_a_published_value_wins(): void
    {
        $merged = ConfigMerge::deep(
            ['auth' => ['max_attempts' => 5, 'password' => ['max_age_days' => 0]]],
            ['auth' => ['password' => ['max_age_days' => 90]]],
        );

        $this->assertSame(90, $merged['auth']['password']['max_age_days']);
        $this->assertSame(5, $merged['auth']['max_attempts']);
    }

    /**
     * A LIST IS A VALUE, NOT A NAMESPACE - the rule the whole design rests on.
     *
     * An application that cut `abilities` to the four it uses has CONFIGURED
     * that key. Merging the package's back in would overrule a deliberate edit,
     * and for `plugins` it would silently reinstall something somebody removed
     * - the one array here where a wrong merge mounts screens rather than
     * changing a number.
     */
    public function test_a_published_list_wins_whole(): void
    {
        $merged = ConfigMerge::deep(
            ['plugins' => ['Packaged\\Ticketing', 'Packaged\\Announcements']],
            ['plugins' => ['Packaged\\Ticketing']],
        );

        $this->assertSame(['Packaged\\Ticketing'], $merged['plugins']);
    }

    /**
     * AND SO DOES A MAP KEYED BY PATH. `discover` carries its namespace in the
     * key, so the package's default names a directory in the package author's
     * own application; merging it in would add a path that means nothing where
     * it landed.
     */
    public function test_the_discovery_map_is_a_value_too(): void
    {
        $merged = ConfigMerge::deep(
            ['discover' => ['/package/app/Panel/Resources' => 'App\\Panel\\Resources']],
            ['discover' => ['/their/src/Admin' => 'Their\\Admin']],
        );

        $this->assertSame(['/their/src/Admin' => 'Their\\Admin'], $merged['discover']);
    }

    /**
     * A KEY THE PACKAGE DOES NOT HAVE IS KEPT. An installation's own additions
     * to a packaged array - an extra `tenancy` flag its resolver reads - are
     * not the package's to drop.
     */
    public function test_an_application_only_key_is_kept(): void
    {
        $merged = ConfigMerge::deep(
            ['tenancy' => ['mode' => 'shared']],
            ['tenancy' => ['mode' => 'dedicated', 'their_own_flag' => true]],
        );

        $this->assertSame(
            ['mode' => 'dedicated', 'their_own_flag' => true],
            $merged['tenancy'],
        );
    }

    /**
     * AND A PUBLISHED SCALAR REPLACES A PACKAGED ARRAY RATHER THAN MERGING
     * INTO IT. Types differing means the application redefined the key, and
     * merging across that would produce a shape neither side wrote.
     */
    public function test_a_type_change_replaces(): void
    {
        $merged = ConfigMerge::deep(['ticketing' => ['operator' => 'admin']], ['ticketing' => false]);

        $this->assertFalse($merged['ticketing']);
    }
}
