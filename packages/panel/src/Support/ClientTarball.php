<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

/**
 * The client half, shipped inside the PHP package.
 *
 * WHY THIS EXISTS, AND IT IS THE SINGLE MOST EXPENSIVE LESSON THIS PROJECT HAS
 * LEARNED. PanelKit is two halves: PHP on Composer and Vue on npm. For several
 * releases the second half had no distribution channel anybody could actually
 * use - not on npmjs.com (private), not on GitHub Packages (the org name was
 * taken, and once that was solved the publish workflow failed), and never on
 * the machine that needed it. The symptom is uniquely bad: the Composer package
 * installs cleanly, every route answers 200, every policy and migration works,
 * and EVERY SCREEN IS BLANK. There is no error to search for, because nothing
 * errored.
 *
 * THE FIX IS TO STOP HAVING TWO PROBLEMS. The tarball travels inside the
 * Composer package, so:
 *
 *   - one credential installs both halves; there is no second registry, no
 *     `.npmrc`, and no token whose absence fails silently
 *   - the two halves CANNOT drift. A `panelkit/panel` at 0.9.2 physically
 *     carries the 0.9.2 client. Mismatched majors were previously possible and
 *     produced a rendered screen with a missing control - a wrong answer with
 *     a 200 status
 *   - it works offline, on a build server with no registry access, and behind
 *     whatever proxy the customer has
 *
 * THE FILENAME IS DEliberately STABLE - `panelkit-client.tgz`, not
 * `...-0.9.2.tgz`. The install command printed in the docs, in `panel:install`
 * and in every runbook then never changes between versions, so an upgrade is
 * `npm install <same path>` rather than a version number somebody has to
 * notice. The version lives inside, in `package.json`, where tooling reads it.
 *
 * The GitHub Release also carries a copy for anyone who wants it standalone.
 * That is a convenience; this is the supported path.
 */
final class ClientTarball
{
    public const NAME = 'panelkit-client.tgz';

    /** Where it lives inside the package, wherever Composer put that. */
    public static function path(): string
    {
        return dirname(__DIR__, 2).'/client/'.self::NAME;
    }

    public static function exists(): bool
    {
        return is_file(self::path());
    }

    /**
     * The version inside the archive, read from its `package.json`.
     *
     * READ FROM THE ARCHIVE, NEVER FROM A CONSTANT. A constant is a second
     * place to update and therefore a place that will one day disagree with
     * the file it describes - which is exactly the drift this class exists to
     * make impossible.
     */
    public static function version(): ?string
    {
        if (! self::exists() || ! class_exists(\PharData::class)) {
            return null;
        }

        try {
            $phar = new \PharData(self::path());

            foreach (new \RecursiveIteratorIterator($phar) as $file) {
                if ($file->getFilename() !== 'package.json') {
                    continue;
                }

                $manifest = json_decode((string) file_get_contents($file->getPathname()), true);

                if (is_array($manifest) && isset($manifest['version'])) {
                    return (string) $manifest['version'];
                }
            }
        } catch (\Throwable) {
            // An unreadable archive is reported by `exists()` being true and
            // this being null, which is what the doctor check wants to say.
        }

        return null;
    }

    /**
     * The command to run, with the path already resolved.
     *
     * RELATIVE TO THE APPLICATION ROOT when it can be, because that is what
     * somebody pastes into a runbook and what survives being run on a different
     * machine. An absolute path leaks this developer's home directory into
     * somebody else's deploy notes.
     */
    public static function installCommand(?string $base = null): string
    {
        $path = self::path();
        $base = rtrim($base ?? (function_exists('base_path') ? base_path() : ''), '/');

        if ($base !== '' && str_starts_with($path, $base.'/')) {
            $path = './'.substr($path, strlen($base) + 1);
        }

        return 'npm install '.$path.' @vitejs/plugin-vue';
    }
}
