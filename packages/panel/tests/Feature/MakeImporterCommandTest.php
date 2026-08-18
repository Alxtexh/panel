<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Support\Facades\File;

final class MakeImporterCommandTest extends TestCase
{
    /** @var list<string> */
    private array $written = [];

    protected function tearDown(): void
    {
        foreach ($this->written as $path) {
            if (is_file($path)) {
                unlink($path);
            }
        }

        parent::tearDown();
    }

    public function test_it_writes_an_empty_importer_the_resource_can_name(): void
    {
        $path = app_path('Panel/Importers/OrderImporter.php');
        $this->written[] = $path;
        @unlink($path);

        $this->artisan('make:panel-importer', ['resource' => 'Order', '--force' => true])
            ->assertSuccessful();

        $contents = File::get($path);

        $this->assertStringContainsString('final class OrderImporter', $contents);
        $this->assertStringContainsString('OrderResource::class', $contents);
        $this->assertStringContainsString('Empty canvas', $contents);
        $this->assertStringContainsString('importable()', $contents);
        $this->assertStringNotContainsString('Livewire', $contents);
        $this->assertStringNotContainsString('—', $contents);
        $this->assertStringNotContainsString('–', $contents);
    }
}
