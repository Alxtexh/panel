<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\ThemeChromeTokens;
use Alxtexh\Panel\Tests\TestCase;

final class ThemeChromeTokensTest extends TestCase
{
    public function test_snippet_registers_chrome_and_soft_shell(): void
    {
        $snippet = ThemeChromeTokens::snippet();

        foreach (ThemeChromeTokens::REQUIRED as $needle) {
            $this->assertStringContainsString($needle, $snippet);
        }

        $this->assertStringContainsString('.dark', $snippet);
        $this->assertStringContainsString('overflow: hidden', $snippet);
    }

    public function test_inspect_reports_when_chrome_tokens_are_missing(): void
    {
        $findings = ThemeChromeTokens::inspect(":root { --background: white; }\n");

        $this->assertCount(1, $findings);
        $this->assertSame('problem', $findings[0]['level']);
        $this->assertStringContainsString('sidebar / popover / chart / radius', $findings[0]['title']);
    }

    public function test_inspect_is_quiet_when_complete(): void
    {
        $css = file_get_contents(dirname(__DIR__, 2).'/resources/stubs/app.css.stub');

        $this->assertNotFalse($css);
        $this->assertSame([], ThemeChromeTokens::inspect($css));
        $this->assertTrue(ThemeChromeTokens::isComplete($css));
    }

    public function test_ensure_in_file_is_idempotent(): void
    {
        $path = sys_get_temp_dir().'/panel-chrome-tokens-'.uniqid('', true).'.css';

        try {
            file_put_contents($path, "@import 'tailwindcss';\n:root { --background: white; }\n");

            $this->assertTrue(ThemeChromeTokens::ensureInFile($path));
            $once = (string) file_get_contents($path);
            $this->assertStringContainsString('--color-sidebar:', $once);
            $this->assertStringContainsString('--popover:', $once);
            $this->assertStringContainsString('html:has(.pk-shell)', $once);

            $this->assertFalse(ThemeChromeTokens::ensureInFile($path));
            $this->assertSame($once, (string) file_get_contents($path));
        } finally {
            @unlink($path);
        }
    }
}
