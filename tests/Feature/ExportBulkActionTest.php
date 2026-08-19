<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Actions\ExportBulkAction;
use Alxtexh\Panel\Tests\TestCase;

final class ExportBulkActionTest extends TestCase
{
    public function test_default_schema(): void
    {
        $action = ExportBulkAction::make();
        $schema = $action->toArray();

        $this->assertSame('export', $schema['key']);
        $this->assertSame('Export', $schema['label']);
        $this->assertSame('download', $schema['icon']);
        $this->assertTrue($schema['export']);
        $this->assertSame('csv', $schema['format']);
    }

    public function test_xlsx_format(): void
    {
        $action = ExportBulkAction::make('export-xlsx')->xlsx()->label('Download Excel');
        $schema = $action->toArray();

        $this->assertSame('xlsx', $schema['format']);
        $this->assertSame('Download Excel', $schema['label']);
    }

    public function test_custom_key_and_icon(): void
    {
        $action = ExportBulkAction::make('download-csv')->icon('file-spreadsheet');
        $schema = $action->toArray();

        $this->assertSame('download-csv', $schema['key']);
        $this->assertSame('file-spreadsheet', $schema['icon']);
    }
}
