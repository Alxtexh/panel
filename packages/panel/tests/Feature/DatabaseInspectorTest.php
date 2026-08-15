<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\DatabaseInspector;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

final class DatabaseInspectorTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_reports_tables_and_row_counts_on_the_default_connection(): void
    {
        $connections = (new DatabaseInspector)->connections();

        $this->assertNotEmpty($connections);

        $default = $connections[0];

        $this->assertTrue($default['available']);
        $this->assertGreaterThan(0, $default['tableCount']);
        $this->assertNotEmpty($default['tables']);
        $this->assertArrayHasKey('rows', $default['tables'][0]);
        $this->assertArrayHasKey('bytes', $default['tables'][0]);
    }
}
