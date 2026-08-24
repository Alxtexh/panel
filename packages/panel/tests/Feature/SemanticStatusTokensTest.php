<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\SemanticStatusTokens;
use Alxtexh\Panel\Tests\TestCase;

final class SemanticStatusTokensTest extends TestCase
{
    public function test_snippet_registers_theme_and_palette(): void
    {
        $snippet = SemanticStatusTokens::snippet();

        $this->assertStringContainsString('--color-success:', $snippet);
        $this->assertStringContainsString('--color-warning:', $snippet);
        $this->assertStringContainsString('--color-info:', $snippet);
        $this->assertStringContainsString('--success:', $snippet);
        $this->assertStringContainsString('--warning:', $snippet);
        $this->assertStringContainsString('--info:', $snippet);
        $this->assertStringContainsString('.dark', $snippet);
    }

    public function test_inspect_reports_when_status_tokens_are_missing(): void
    {
        $findings = SemanticStatusTokens::inspect(":root { --destructive: red; }\n");

        $this->assertCount(1, $findings);
        $this->assertSame('problem', $findings[0]['level']);
        $this->assertStringContainsString('success / warning / info', $findings[0]['title']);
    }

    public function test_inspect_is_quiet_when_complete(): void
    {
        $css = file_get_contents(dirname(__DIR__, 2).'/resources/stubs/app.css.stub');

        $this->assertNotFalse($css);
        $this->assertSame([], SemanticStatusTokens::inspect($css));
        $this->assertTrue(SemanticStatusTokens::isComplete($css));
    }

    public function test_ensure_in_file_is_idempotent(): void
    {
        $path = sys_get_temp_dir().'/panel-status-tokens-'.uniqid('', true).'.css';

        try {
            file_put_contents($path, "@import 'tailwindcss';\n:root { --background: white; }\n");

            $this->assertTrue(SemanticStatusTokens::ensureInFile($path));
            $once = (string) file_get_contents($path);
            $this->assertStringContainsString('--color-success:', $once);
            $this->assertStringContainsString('--success:', $once);

            $this->assertFalse(SemanticStatusTokens::ensureInFile($path));
            $this->assertSame($once, (string) file_get_contents($path));
        } finally {
            @unlink($path);
        }
    }
}
