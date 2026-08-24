<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\AppearancePrepaintWiring;
use Alxtexh\Panel\Tests\TestCase;

final class AppearancePrepaintWiringTest extends TestCase
{
    public function test_missing_include_is_a_problem(): void
    {
        $findings = AppearancePrepaintWiring::inspect('<head><title>x</title></head>');

        $this->assertSame('problem', $findings[0]['level']);
        $this->assertStringContainsString('missing panel::appearance-prepaint', $findings[0]['title']);
    }

    public function test_include_after_stylesheet_is_a_problem(): void
    {
        $source = <<<'BLADE'
        <head>
            <link rel="stylesheet" href="/app.css">
            @include('panel::appearance-prepaint')
        </head>
        BLADE;

        $findings = AppearancePrepaintWiring::inspect($source);

        $this->assertSame('problem', $findings[0]['level']);
        $this->assertStringContainsString('runs after CSS', $findings[0]['title']);
    }

    public function test_the_install_stub_is_quiet(): void
    {
        $source = (string) file_get_contents(
            dirname(__DIR__, 2).'/resources/stubs/app.blade.php.stub'
        );

        $this->assertSame([], AppearancePrepaintWiring::inspect($source));
    }
}
