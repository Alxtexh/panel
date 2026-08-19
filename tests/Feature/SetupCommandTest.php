<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;

final class SetupCommandTest extends TestCase
{
    public function test_setup_command_prints_core_checklist_items(): void
    {
        $this->artisan('panel:setup')
            ->expectsOutputToContain('Panel setup checklist')
            ->expectsOutputToContain('Mail delivery configured')
            ->expectsOutputToContain('Application key present')
            ->assertSuccessful();
    }

    public function test_setup_command_json_lists_items(): void
    {
        $this->artisan('panel:setup', ['--json' => true])
            ->expectsOutputToContain('"key": "mail"')
            ->expectsOutputToContain('tenancy')
            ->assertSuccessful();
    }
}
