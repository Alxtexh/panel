<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Editing `.env` from a browser, without being able to take the site down.
 *
 * THIS IS THE MOST DANGEROUS SCREEN A PANEL CAN HAVE, and saying so is the
 * design. `.env` is read before anything else boots: a file that cannot be
 * parsed is not a broken page, it is every request failing, including the one
 * that would let somebody fix it. Recovery needs a shell - which is precisely
 * what whoever is using this screen does not have.
 *
 * SO THE RULES ARE ALL ABOUT NOT BEING ABLE TO DO THAT:
 *
 *   1. AN ALLOWLIST, NOT FREE TEXT. Only keys `panel.env.editable` names may be
 *      written. A textarea holding the whole file is one keystroke away from an
 *      outage, and the interesting keys are always a handful.
 *
 *   2. BOOT-CRITICAL KEYS ARE REFUSED WHATEVER THE ALLOWLIST SAYS. `APP_KEY`
 *      decrypts every session and every encrypted column; changing it signs
 *      everybody out and makes stored ciphertext unreadable. `DB_*` moves the
 *      database out from under the running process. These are not preferences,
 *      and an installation that allowlists them by mistake still cannot reach
 *      them.
 *
 *   3. VALUES ARE NEVER SENT TO THE BROWSER. A secret in a page prop is a secret
 *      in the browser history, in any proxy that logged the response, and in
 *      whatever the operator's extensions can read. Existing values arrive
 *      MASKED; an empty submission means "leave it alone" rather than "set it to
 *      nothing".
 *
 *   4. THE WRITE IS ATOMIC AND VALIDATED. The new content is parsed before it
 *      goes anywhere, written to a temporary file in the same directory, and
 *      renamed over the original - so a crash mid-write leaves the old file
 *      intact rather than half a new one.
 *
 *   5. THE PREVIOUS FILE IS KEPT. `.env.backup` is written before every change,
 *      because the whole point is that somebody without shell access is making
 *      it.
 *
 * IT DOES NOT RESTART ANYTHING. No `config:cache`, no queue restart, no touching
 * the running process - those are deploy actions, and a web request that
 * performs them is a web request that can take the site down. Where the config
 * is cached, the screen SAYS the change is inert until the next deploy rather
 * than trying to be clever about it.
 */
final class EnvFile
{
    /**
     * Keys that cannot be written, whatever the configuration says.
     *
     * Changing any of these breaks the running application in a way that cannot
     * be undone from the same screen.
     */
    private const REFUSED = [
        'APP_KEY',
        'APP_ENV',
        'APP_DEBUG',
        'DB_CONNECTION',
        'DB_HOST',
        'DB_PORT',
        'DB_DATABASE',
        'DB_USERNAME',
        'DB_PASSWORD',
    ];

    /** Substrings that mark a value as secret, and therefore never displayed. */
    private const SECRET_HINTS = ['KEY', 'SECRET', 'PASSWORD', 'TOKEN', 'DSN', 'CREDENTIAL'];

    public static function path(): string
    {
        return base_path('.env');
    }

    /** Whether this installation offers the screen at all. */
    public static function isEditable(): bool
    {
        return self::editableKeys() !== [] && is_writable(self::path());
    }

    /**
     * The keys an operator may change here.
     *
     * @return list<string>
     */
    public static function editableKeys(): array
    {
        $declared = (array) config('panel.env.editable', []);

        return array_values(array_filter(
            array_map(strval(...), $declared),
            static fn (string $key): bool => ! in_array(strtoupper($key), self::REFUSED, true),
        ));
    }

    /**
     * What the screen shows: keys, whether each is secret, and a masked value.
     *
     * NEVER THE REAL VALUE OF A SECRET. `sk_live_…` in a page prop is
     * `sk_live_…` in the browser history. The mask says only whether something
     * is set, which is the question an operator actually has.
     *
     * @return list<array{key: string, value: string|null, secret: bool, set: bool}>
     */
    public static function entries(): array
    {
        $current = self::parse(self::read());
        $out = [];

        foreach (self::editableKeys() as $key) {
            $value = $current[$key] ?? null;
            $secret = self::isSecret($key);

            $out[] = [
                'key' => $key,
                'value' => $secret ? null : $value,
                'secret' => $secret,
                'set' => $value !== null && $value !== '',
            ];
        }

        return $out;
    }

    /**
     * Apply changes, or explain why not.
     *
     * @param  array<string, string|null>  $changes
     * @return array{ok: bool, message: string, changed: list<string>}
     */
    public static function apply(array $changes): array
    {
        if (! is_writable(self::path())) {
            return ['ok' => false, 'message' => 'The .env file is not writable by the web process.', 'changed' => []];
        }

        $allowed = self::editableKeys();
        $original = self::read();
        $content = $original;
        $changed = [];

        foreach ($changes as $key => $value) {
            $key = strtoupper((string) $key);

            if (! in_array($key, $allowed, true)) {
                // Silently skipping would let a crafted request probe which keys
                // exist; refusing by name says only what the screen already shows.
                return ['ok' => false, 'message' => "[{$key}] is not an editable key.", 'changed' => []];
            }

            /*
             * BLANK MEANS UNCHANGED, NOT EMPTY. The form cannot show a secret's
             * current value, so it arrives blank when untouched - and treating
             * that as "set it to nothing" would wipe an API key every time
             * somebody edited the field beside it.
             */
            if ($value === null || $value === '') {
                continue;
            }

            $content = self::write($content, $key, (string) $value);
            $changed[] = $key;
        }

        if ($changed === []) {
            return ['ok' => true, 'message' => 'Nothing changed.', 'changed' => []];
        }

        /*
         * PARSED BEFORE IT IS SAVED. This is the check that stands between an
         * edit and an unbootable application - if the result cannot be read
         * back, the old file stays exactly where it is.
         */
        if (self::parse($content) === null) {
            return ['ok' => false, 'message' => 'The result could not be parsed, so nothing was written.', 'changed' => []];
        }

        self::backup($original);
        self::atomically($content);

        return [
            'ok' => true,
            'message' => self::cachedNotice(),
            'changed' => $changed,
        ];
    }

    /** Whether a key's value must never be displayed. */
    public static function isSecret(string $key): bool
    {
        foreach (self::SECRET_HINTS as $hint) {
            if (str_contains(strtoupper($key), $hint)) {
                return true;
            }
        }

        return false;
    }

    private static function read(): string
    {
        return is_readable(self::path()) ? (string) file_get_contents(self::path()) : '';
    }

    /**
     * Replace a key's line, or append it.
     *
     * QUOTED WHEN IT HAS TO BE. A value containing a space or a `#` unquoted is
     * a value that parses as something shorter than what was typed - which is
     * how a password ending in a hash becomes a password ending nowhere.
     */
    private static function write(string $content, string $key, string $value): string
    {
        $needsQuotes = preg_match('/[\s#"\']/', $value) === 1;
        $line = $key.'='.($needsQuotes ? '"'.addcslashes($value, '"\\').'"' : $value);

        $pattern = '/^'.preg_quote($key, '/').'=.*$/m';

        if (preg_match($pattern, $content) === 1) {
            return (string) preg_replace($pattern, $line, $content, 1);
        }

        return rtrim($content, "\n")."\n".$line."\n";
    }

    /**
     * Parse, returning null when the content is not a readable env file.
     *
     * @return array<string, string>|null
     */
    private static function parse(string $content): ?array
    {
        $out = [];

        foreach (explode("\n", $content) as $number => $line) {
            $line = trim($line);

            if ($line === '' || str_starts_with($line, '#')) {
                continue;
            }

            if (! str_contains($line, '=')) {
                return null;
            }

            [$key, $value] = explode('=', $line, 2);
            $key = trim($key);

            if ($key === '' || preg_match('/^[A-Za-z_][A-Za-z0-9_]*$/', $key) !== 1) {
                return null;
            }

            $value = trim($value);

            if (str_starts_with($value, '"')) {
                // An opening quote with no close is the classic way a pasted
                // value swallows the rest of the file.
                if (! str_ends_with($value, '"') || strlen($value) < 2) {
                    return null;
                }

                $value = stripcslashes(substr($value, 1, -1));
            }

            $out[$key] = $value;
        }

        return $out;
    }

    /**
     * Keep the previous file, because whoever is using this has no shell.
     */
    private static function backup(string $original): void
    {
        @file_put_contents(base_path('.env.backup'), $original, LOCK_EX);
    }

    /**
     * Write via a temporary file in the same directory, then rename.
     *
     * RENAME IS ATOMIC ON THE SAME FILESYSTEM, which is why the temporary file
     * is beside the target rather than in the system temp directory. A process
     * killed mid-write leaves the old file whole; a `file_put_contents` killed
     * mid-write leaves half an env file and an application that will not boot.
     */
    private static function atomically(string $content): void
    {
        $target = self::path();
        $temporary = $target.'.'.bin2hex(random_bytes(4)).'.tmp';

        file_put_contents($temporary, $content, LOCK_EX);
        @chmod($temporary, 0600);
        rename($temporary, $target);
    }

    /**
     * What to tell the operator afterwards.
     *
     * THIS SCREEN DOES NOT RESTART ANYTHING. Clearing a cached config, bouncing
     * a queue or reloading a worker are deploy actions, and a web request that
     * performs them is a web request that can take the site down. Where the
     * config is cached the change is inert, and saying so is more useful than
     * silently doing nothing.
     */
    private static function cachedNotice(): string
    {
        return app()->configurationIsCached()
            ? 'Saved. The configuration is cached, so this takes effect after the next deploy.'
            : 'Saved. It takes effect on the next request.';
    }
}
