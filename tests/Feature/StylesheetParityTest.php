<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\CriticalStylesheetBlocks;
use Alxtexh\Panel\Support\SemanticStatusTokens;
use Alxtexh\Panel\Support\ThemeChromeTokens;
use Alxtexh\Panel\Tests\TestCase;

/**
 * Stub, kit, and playground CSS must carry the same critical blocks.
 */
final class StylesheetParityTest extends TestCase
{
    public function test_canonical_stylesheets_define_critical_blocks(): void
    {
        $root = dirname(__DIR__, 4);

        foreach (CriticalStylesheetBlocks::canonicalPaths($root) as $path) {
            $css = file_get_contents($path);

            $this->assertNotFalse($css, "Missing stylesheet: {$path}");

            foreach (CriticalStylesheetBlocks::REQUIRED as $needle) {
                $this->assertStringContainsString(
                    $needle,
                    $css,
                    "{$path} is missing {$needle}",
                );
            }

            $this->assertTrue(
                SemanticStatusTokens::isComplete($css),
                "{$path} is missing semantic status tokens",
            );

            $this->assertTrue(
                ThemeChromeTokens::isComplete($css),
                "{$path} is missing theme chrome tokens",
            );
        }
    }

    public function test_snippet_registers_form_gap_and_landing_typography(): void
    {
        $snippet = CriticalStylesheetBlocks::snippet();

        foreach (CriticalStylesheetBlocks::REQUIRED as $needle) {
            $this->assertStringContainsString($needle, $snippet);
        }
    }

    public function test_inspect_reports_when_critical_blocks_are_missing(): void
    {
        $findings = CriticalStylesheetBlocks::inspect(":root { --background: white; }\n");

        $this->assertCount(1, $findings);
        $this->assertSame('problem', $findings[0]['level']);
        $this->assertStringContainsString('form gap', $findings[0]['title']);
    }

    public function test_inspect_is_quiet_when_complete(): void
    {
        $css = file_get_contents(dirname(__DIR__, 2).'/resources/stubs/app.css.stub');

        $this->assertNotFalse($css);
        $this->assertSame([], CriticalStylesheetBlocks::inspect($css));
        $this->assertTrue(CriticalStylesheetBlocks::isComplete($css));
    }

    public function test_ensure_in_file_is_idempotent(): void
    {
        $path = sys_get_temp_dir().'/panel-critical-css-'.uniqid('', true).'.css';

        try {
            file_put_contents($path, "@import 'tailwindcss';\n:root { --background: white; }\n");

            $this->assertTrue(CriticalStylesheetBlocks::ensureInFile($path));
            $once = (string) file_get_contents($path);
            $this->assertStringContainsString('--pk-form-gap:', $once);
            $this->assertStringContainsString('.pk-editorial {', $once);

            $this->assertFalse(CriticalStylesheetBlocks::ensureInFile($path));
            $this->assertSame($once, (string) file_get_contents($path));
        } finally {
            @unlink($path);
        }
    }
}
