<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;

/**
 * Design-freeze gate for admin chrome (PAGE_SHELL / no mx-auto + max-w-*).
 *
 * The shell lives in packages/ui; this Pest test runs the monorepo script so a
 * synthetic violation is proven without committing congested markup.
 */
final class PageShellFreezeTest extends TestCase
{
    public function test_check_page_shell_self_test_catches_synthetic_violation(): void
    {
        $script = $this->monorepoScript('check-page-shell.sh');

        if ($script === null) {
            $this->markTestSkipped('Monorepo scripts/check-page-shell.sh is not beside packages/panel.');
        }

        $output = [];
        $code = 0;
        exec('bash '.escapeshellarg($script).' --self-test 2>&1', $output, $code);

        $this->assertSame(
            0,
            $code,
            "check-page-shell --self-test failed:\n".implode("\n", $output),
        );
        $this->assertStringContainsString('self-test ok', implode("\n", $output));
    }

    public function test_kit_admin_chrome_passes_page_shell_freeze(): void
    {
        $script = $this->monorepoScript('check-page-shell.sh');

        if ($script === null) {
            $this->markTestSkipped('Monorepo scripts/check-page-shell.sh is not beside packages/panel.');
        }

        $output = [];
        $code = 0;
        exec('bash '.escapeshellarg($script).' 2>&1', $output, $code);

        $this->assertSame(
            0,
            $code,
            "check-page-shell reported congested admin chrome:\n".implode("\n", $output),
        );
    }

    private function monorepoScript(string $name): ?string
    {
        $root = dirname(__DIR__, 4);
        $path = $root.'/scripts/'.$name;

        return is_file($path) ? $path : null;
    }
}
