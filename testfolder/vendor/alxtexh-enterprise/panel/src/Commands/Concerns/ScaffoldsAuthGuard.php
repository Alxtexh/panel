<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands\Concerns;

/**
 * The `config/auth.php` half of a portal with its own guard.
 *
 * `make:panel reseller --guard=resellers` HAS ALWAYS WRITTEN A BROKEN PORTAL,
 * and written it silently. The generated provider says `->guard('resellers')`
 * and `authMiddleware(['auth:resellers'])`, both correct - and Laravel resolves
 * a guard by looking it up in `config/auth.php`, which the generator never
 * touched. So the command reported success, printed the guard name in its
 * summary, and the first request to that portal died with
 * `Auth guard [resellers] is not defined.`
 *
 * NOTHING IN THE OUTPUT HINTED AT IT. The one line that mentioned the guard was
 * `Guard  resellers`, which reads as a statement of fact rather than as a thing
 * you still have to go and create.
 *
 * A GUARD IS TWO ENTRIES, NOT ONE, and that is the whole reason this is written
 * rather than described in a warning. A guard names a provider; a provider names
 * a model. Adding the guard and forgetting the provider fails exactly like
 * adding neither - `Auth user provider [resellers] is not defined.` - so this
 * writes both or writes nothing at all.
 */
trait ScaffoldsAuthGuard
{
    /**
     * @param  string  $guard     The guard name, also used for its provider.
     * @param  string  $model     The Eloquent model the provider retrieves.
     * @param  bool    $central   A platform portal: no tenant scoping.
     * @return bool               False when nothing was written.
     */
    private function scaffoldAuthGuard(string $guard, string $model, bool $central): bool
    {
        $path = config_path('auth.php');

        /*
         * EVERY REFUSAL BELOW PRINTS THE ENTRIES TO ADD BY HAND. A generator
         * that cannot edit your config and says only "could not edit your
         * config" has left you worse off than one that never tried: you now
         * have a portal pointing at a guard, no guard, and no statement of what
         * the guard should look like.
         */
        if (! file_exists($path)) {
            $this->guardInstructions($guard, $model, $central, 'config/auth.php does not exist.');

            return false;
        }

        $contents = (string) file_get_contents($path);

        /*
         * ALREADY THERE IS A SUCCESS, NOT A FAILURE - and it must not be a
         * second write. Re-running `make:panel --force` on a portal whose guard
         * exists would otherwise append a duplicate key, and PHP keeps the LAST
         * one in an array literal, so a hand-edited guard would be silently
         * replaced by this generator's default.
         */
        if ($this->guardIsDefined($guard)) {
            $this->components->twoColumnDetail('Guard', "{$guard} <fg=gray>(already in config/auth.php - left alone)</>");

            return false;
        }

        /*
         * ANCHORED ON THE STOCK SHAPE, and refusing when it is not there.
         *
         * These two anchors are what a Laravel skeleton ships and what every
         * application still has unless somebody restructured the file. Guessing
         * at a file that does not match - appending to the end, say - would
         * produce a config that no longer parses, which is a worse outcome than
         * four lines of instructions.
         */
        $guardsAt = strpos($contents, "'guards' => [");
        $providersAt = strpos($contents, "'providers' => [");

        if ($guardsAt === false || $providersAt === false) {
            $this->guardInstructions(
                $guard, $model, $central,
                "config/auth.php does not have the expected 'guards' and 'providers' arrays."
            );

            return false;
        }

        /*
         * A PROVIDER NAME COLLIDING IS A REFUSAL, not an overwrite. The guard is
         * new - checked above - but its provider name may not be, and taking
         * over an existing provider would repoint a DIFFERENT guard at this
         * portal's model. That is a silent authentication change: users signing
         * in somewhere unrelated would start being looked up in the wrong table.
         */
        $providerRegion = substr($contents, $providersAt);

        if (config("auth.providers.{$guard}") !== null || str_contains($providerRegion, "'{$guard}' => [")) {
            $this->guardInstructions(
                $guard, $model, $central,
                "auth.providers.{$guard} already exists and points somewhere else."
            );

            return false;
        }

        $contents = $this->insertAfter($contents, "'providers' => [", $this->providerBlock($guard, $model, $central));
        $contents = $this->insertAfter($contents, "'guards' => [", $this->guardBlock($guard));

        file_put_contents($path, $contents);

        $this->components->twoColumnDetail('Guard', "{$guard} <fg=green>(added to config/auth.php)</>");
        $this->components->twoColumnDetail('Provider', $model);

        return true;
    }

    /**
     * Whether `$guard` is already a guard, asked of BOTH the loaded config and
     * the file on disk.
     *
     * NEITHER SOURCE IS SUFFICIENT ALONE, which is the finding here.
     *
     * `config()` misses a guard this command wrote moments ago - the config was
     * loaded at boot and nothing reloads it - so a second invocation in one
     * process appends a duplicate key. PHP keeps the LAST duplicate in an array
     * literal, so that silently replaces whatever the first one had become.
     *
     * The FILE misses a guard that is real but not spelled the way this looks
     * for: registered from a service provider, merged in from elsewhere, or
     * simply formatted differently. It also misses everything under
     * `config:cache`, where the file is no longer what Laravel reads.
     *
     * Both were wrong in practice: the file check was added because the loaded
     * config was empty in the package's own test harness, and the config check
     * kept because the file check cannot see a cached or programmatic guard.
     * Either one saying yes is a yes - the cost of a false positive is a printed
     * instruction, and the cost of a false negative is a corrupted config.
     */
    private function guardIsDefined(string $guard): bool
    {
        if (config("auth.guards.{$guard}") !== null) {
            return true;
        }

        $path = config_path('auth.php');

        if (! file_exists($path)) {
            return false;
        }

        $contents = (string) file_get_contents($path);
        $guardsAt = strpos($contents, "'guards' => [");

        if ($guardsAt === false) {
            return false;
        }

        $providersAt = strpos($contents, "'providers' => [");

        /*
         * SEARCHED IN THE GUARDS REGION ONLY. The two arrays conventionally use
         * the SAME key for a matched pair - `users`/`users`, and this command
         * writes `resellers`/`resellers` - so searching the whole file would
         * report every guard as present the moment its provider existed.
         */
        $region = $providersAt !== false && $providersAt > $guardsAt
            ? substr($contents, $guardsAt, $providersAt - $guardsAt)
            : substr($contents, $guardsAt);

        return str_contains($region, "'{$guard}' => [");
    }

    private function insertAfter(string $contents, string $anchor, string $block): string
    {
        $at = strpos($contents, $anchor);

        if ($at === false) {
            return $contents;
        }

        $after = $at + strlen($anchor);

        return substr($contents, 0, $after)."\n".$block.substr($contents, $after);
    }

    private function guardBlock(string $guard): string
    {
        return <<<PHP

        /*
         * Added by `make:panel`. Sessions are keyed PER GUARD, which is what
         * makes this portal a separate place to sign in rather than the same
         * one with a different menu: somebody signed in on `web` is not signed
         * in here, and vice versa.
         */
        '{$guard}' => [
            'driver' => 'session',
            'provider' => '{$guard}',
        ],

PHP;
    }

    /**
     * THE DRIVER IS THE DECISION THIS MAKES FOR YOU, so it explains itself in
     * the file rather than here.
     */
    private function providerBlock(string $guard, string $model, bool $central): string
    {
        $driver = $central ? 'eloquent' : 'panel-tenant';

        $why = $central
            ? <<<'TXT'
         * `eloquent` because this portal is CENTRAL. It is meant to see across
             * organisations, so looking its operators up across all of them is
             * the correct behaviour rather than a leak.
TXT
            : <<<'TXT'
         * `panel-tenant`, NOT `eloquent`, because this portal is tenant-scoped.
             *
             * `eloquent` would look credentials up across EVERY organisation, so
             * a password valid in one would open this portal against another -
             * an authentication leak that shows no symptom, because signing in
             * is exactly what it looks like.
             *
             * `panel-tenant` looks within the resolved tenant and finds nobody
             * when none resolves. That failure is visible and safe, which is the
             * direction to be wrong in. Switch to `eloquent` only if this
             * portal's users are genuinely shared across organisations.
TXT;

        return <<<PHP

        /*
         * Added by `make:panel`, for the `{$guard}` guard above.
         *
{$why}
         */
        '{$guard}' => [
            'driver' => '{$driver}',
            'model' => {$model}::class,
        ],

PHP;
    }

    private function guardInstructions(string $guard, string $model, bool $central, string $because): void
    {
        $driver = $central ? 'eloquent' : 'panel-tenant';

        $this->components->warn("Could not add the [{$guard}] guard automatically: {$because}");
        $this->components->warn('This portal will not serve a request until it exists. Add to config/auth.php:');

        $this->newLine();
        $this->line("  'guards' => [");
        $this->line("      '{$guard}' => ['driver' => 'session', 'provider' => '{$guard}'],");
        $this->line('  ],');
        $this->line("  'providers' => [");
        $this->line("      '{$guard}' => ['driver' => '{$driver}', 'model' => {$model}::class],");
        $this->line('  ],');
        $this->newLine();
    }
}
