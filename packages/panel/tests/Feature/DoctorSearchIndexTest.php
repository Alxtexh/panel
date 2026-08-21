<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Commands\DoctorCommand;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Support\Facades\Artisan;

final class DoctorSearchIndexTest extends TestCase
{
    public function test_search_index_check_is_wired_and_silent_on_sqlite(): void
    {
        $source = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Commands/DoctorCommand.php'
        );

        $this->assertStringContainsString('checkSearchIndexes', $source);
        $this->assertStringContainsString('panel:search-index', $source);
        $this->assertStringContainsString('approximateRowCount', $source);

        Artisan::call('panel:doctor', ['--json' => true]);
        $findings = json_decode(Artisan::output(), true, 512, JSON_THROW_ON_ERROR);

        $this->assertIsArray($findings);
        $titles = array_column($findings, 'title');
        $this->assertNotContains(
            'Large searchable tables may need panel:search-index',
            $titles,
            'SQLite installs must not get a false search-index nudge.',
        );
    }

    public function test_config_exposes_nudge_threshold(): void
    {
        $this->assertSame(10_000, (int) config('panel.search.index_nudge_rows'));

        config(['panel.search.index_nudge_rows' => 50]);
        $this->assertSame(50, (int) config('panel.search.index_nudge_rows'));
    }

    public function test_approximate_row_count_survives_unknown_table(): void
    {
        $command = app(DoctorCommand::class);
        $method = new \ReflectionMethod($command, 'approximateRowCount');
        $method->setAccessible(true);

        $estimate = $method->invoke($command, 'definitely_missing_table_xyz', 'pgsql');

        $this->assertTrue($estimate === null || is_int($estimate));
    }
}
