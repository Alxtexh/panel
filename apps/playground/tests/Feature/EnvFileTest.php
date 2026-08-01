<?php

declare(strict_types=1);

namespace Tests\Feature;

use PanelKit\Panel\Pages\EnvironmentPage;
use PanelKit\Panel\Support\EnvFile;
use Tests\TestCase;

/**
 * The most dangerous screen a panel can have, and the reasons it is not.
 *
 * `.env` IS READ BEFORE ANYTHING ELSE BOOTS. A file that cannot be parsed is not
 * a broken page - it is every request failing, including the one that would let
 * somebody fix it, and recovery then needs a shell, which is exactly what
 * whoever is using this screen does not have.
 *
 * So the tests here are almost entirely about REFUSAL: what the screen will not
 * write, what it will not show, and what happens when the result would be
 * unreadable. The happy path is one test; the guards are the feature.
 *
 * A REAL FILE IS NEVER TOUCHED. Every case works on a copy in a temporary
 * directory - a test that could rewrite the application's own `.env` is a test
 * nobody should be able to run twice.
 */
final class EnvFileTest extends TestCase
{
    private string $directory;

    protected function setUp(): void
    {
        parent::setUp();

        $this->directory = sys_get_temp_dir().'/panelkit-env-'.bin2hex(random_bytes(4));
        mkdir($this->directory);

        file_put_contents($this->directory.'/.env', <<<'ENV'
        APP_NAME=Panel
        APP_KEY=base64:secret
        DB_PASSWORD=hunter2
        TELEGRAM_BOT_TOKEN=old-token
        SUPPORT_EMAIL=help@example.test
        ENV);

        // `base_path()` is what EnvFile reads; pointing it at the copy is what
        // keeps the real file out of reach.
        $this->app->setBasePath($this->directory);
    }

    protected function tearDown(): void
    {
        foreach (glob($this->directory.'/*') ?: [] as $file) {
            @unlink($file);
        }

        @rmdir($this->directory);

        parent::tearDown();
    }

    private function editable(array $keys): void
    {
        config(['panel.env.editable' => $keys]);
    }

    private function contents(): string
    {
        return (string) file_get_contents($this->directory.'/.env');
    }

    /* --------------------------------------------------------- what it refuses */

    /**
     * BOOT-CRITICAL KEYS ARE REFUSED WHATEVER THE ALLOWLIST SAYS.
     *
     * `APP_KEY` decrypts every session and every encrypted column - changing it
     * signs everybody out and makes stored ciphertext unreadable. `DB_*` moves
     * the database out from under the running process. An installation that
     * allowlists them by mistake still cannot reach them.
     */
    public function test_boot_critical_keys_are_not_editable_even_if_allowlisted(): void
    {
        $this->editable(['APP_KEY', 'DB_PASSWORD', 'APP_DEBUG', 'SUPPORT_EMAIL']);

        $this->assertSame(['SUPPORT_EMAIL'], EnvFile::editableKeys());

        $result = EnvFile::apply(['APP_KEY' => 'base64:mine']);

        $this->assertFalse($result['ok']);
        $this->assertStringContainsString('base64:secret', $this->contents(), 'APP_KEY was rewritten.');
    }

    /** A key nobody allowlisted is refused by name rather than silently skipped. */
    public function test_an_unlisted_key_is_refused(): void
    {
        $this->editable(['SUPPORT_EMAIL']);

        $result = EnvFile::apply(['MAIL_HOST' => 'smtp.example.test']);

        $this->assertFalse($result['ok']);
        $this->assertStringNotContainsString('MAIL_HOST', $this->contents());
    }

    /**
     * SECRETS ARE NEVER SENT TO THE BROWSER. A value in a page prop is a value
     * in the browser history and in any proxy that logged the response.
     */
    public function test_a_secret_value_is_never_returned(): void
    {
        $this->editable(['TELEGRAM_BOT_TOKEN', 'SUPPORT_EMAIL']);

        $entries = collect(EnvFile::entries())->keyBy('key');

        $this->assertTrue($entries['TELEGRAM_BOT_TOKEN']['secret']);
        $this->assertNull($entries['TELEGRAM_BOT_TOKEN']['value'], 'A secret value reached the client.');
        $this->assertTrue($entries['TELEGRAM_BOT_TOKEN']['set'], 'The screen should still say it is set.');

        // A non-secret is shown, because hiding it would be theatre.
        $this->assertSame('help@example.test', $entries['SUPPORT_EMAIL']['value']);
    }

    /**
     * BLANK MEANS UNCHANGED, NOT EMPTY.
     *
     * A secret's field arrives blank when untouched, because it was never shown.
     * Treating that as "set it to nothing" would wipe an API key every time
     * somebody edited the field beside it.
     */
    public function test_a_blank_submission_keeps_the_existing_value(): void
    {
        $this->editable(['TELEGRAM_BOT_TOKEN', 'SUPPORT_EMAIL']);

        EnvFile::apply(['TELEGRAM_BOT_TOKEN' => '', 'SUPPORT_EMAIL' => 'new@example.test']);

        $this->assertStringContainsString('TELEGRAM_BOT_TOKEN=old-token', $this->contents());
        $this->assertStringContainsString('SUPPORT_EMAIL=new@example.test', $this->contents());
    }

    /* ---------------------------------------------------------- what it does */

    /** The ordinary case, and the previous file is kept. */
    public function test_a_change_is_written_and_the_previous_file_kept(): void
    {
        $this->editable(['SUPPORT_EMAIL']);

        $result = EnvFile::apply(['SUPPORT_EMAIL' => 'ops@example.test']);

        $this->assertTrue($result['ok']);
        $this->assertSame(['SUPPORT_EMAIL'], $result['changed']);
        $this->assertStringContainsString('SUPPORT_EMAIL=ops@example.test', $this->contents());

        $this->assertFileExists(
            $this->directory.'/.env.backup',
            'No backup was kept, and whoever uses this screen has no shell.',
        );
        $this->assertStringContainsString('help@example.test', (string) file_get_contents($this->directory.'/.env.backup'));
    }

    /**
     * A VALUE THAT NEEDS QUOTING GETS THEM.
     *
     * Unquoted, a value containing a `#` parses as something shorter than what
     * was typed - which is how a password ending in a hash becomes a password
     * ending nowhere.
     */
    public function test_a_value_with_spaces_or_hashes_is_quoted(): void
    {
        $this->editable(['SUPPORT_EMAIL']);

        EnvFile::apply(['SUPPORT_EMAIL' => 'a b#c']);

        $this->assertStringContainsString('SUPPORT_EMAIL="a b#c"', $this->contents());
    }

    /** Everything still parses afterwards - the property the whole design protects. */
    public function test_the_file_is_still_readable_after_a_write(): void
    {
        $this->editable(['SUPPORT_EMAIL']);

        EnvFile::apply(['SUPPORT_EMAIL' => 'ops@example.test']);

        foreach (explode("\n", trim($this->contents())) as $line) {
            $this->assertStringContainsString('=', $line, "A line without '=' would break boot: {$line}");
        }
    }

    /* ------------------------------------------------------------- the screen */

    /** The page hides itself unless an installation asked for it. */
    public function test_the_page_does_not_exist_until_keys_are_declared(): void
    {
        // Absent, not hidden - a routed screen saying "nothing is editable" is a
        // dead end reachable from no menu.
        $this->editable([]);
        $this->assertFalse(EnvironmentPage::isEnabled());

        $this->editable(['SUPPORT_EMAIL']);
        $this->assertTrue(EnvironmentPage::isEnabled());
    }

    /** And seeing is a different grant from saving. */
    public function test_reading_and_writing_are_separate_abilities(): void
    {
        $this->assertSame('view_environment', EnvironmentPage::ability());
        $this->assertSame('manage_environment', EnvironmentPage::actions()['update']);
    }
}
