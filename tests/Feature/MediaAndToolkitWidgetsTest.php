<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Media\PanelMediaItem;
use Alxtexh\Panel\Pages\MediaLibraryPage;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Widgets\BarcodeWidget;
use Alxtexh\Panel\Widgets\LogTailWidget;
use Alxtexh\Panel\Widgets\Period;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

final class MediaAndToolkitWidgetsTest extends TestCase
{
    public function test_media_library_builds_preview_and_download_urls(): void
    {
        Storage::fake('local');

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        config(['panel.tenancy.resolver' => static fn (): int => $tenant->id]);

        $user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);

        $path = 'tenants/'.$tenant->id.'/media/demo.png';
        Storage::disk('local')->put($path, 'fake-image-bytes');

        $item = PanelMediaItem::query()->create([
            'tenant_id' => $tenant->id,
            'folder' => '',
            'path' => $path,
            'name' => 'demo.png',
            'mime' => 'image/png',
            'size' => 16,
            'uploaded_by' => $user->id,
        ]);

        $preview = MediaLibraryPage::itemUrl($item, 'inline');
        $download = MediaLibraryPage::itemUrl($item, 'attachment');

        $this->assertNotNull($preview);
        $this->assertNotNull($download);
        // Disk temporaryUrl when the driver supports it, else kit /preview|/download.
        $this->assertTrue(
            str_contains((string) $preview, '/preview')
                || str_contains((string) $preview, 'expiration=')
                || str_contains((string) $preview, 'X-Amz-'),
            'Preview URL should be signed or temporary: '.$preview,
        );
        $this->assertTrue(
            str_contains((string) $download, '/download')
                || str_contains((string) $download, 'expiration=')
                || str_contains((string) $download, 'X-Amz-'),
            'Download URL should be signed or temporary: '.$download,
        );

        $request = Request::create('/files/media-library');
        $data = MediaLibraryPage::data($request);

        $this->assertCount(1, $data['items']);
        $this->assertNotNull($data['items'][0]['url']);
        $this->assertNotNull($data['items'][0]['download_url']);
        $this->assertTrue($data['items'][0]['is_image']);
    }

    public function test_media_library_host_override_can_suppress_or_replace_url(): void
    {
        Storage::fake('local');

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        config(['panel.tenancy.resolver' => static fn (): int => $tenant->id]);

        $path = 'tenants/'.$tenant->id.'/media/demo.png';
        Storage::disk('local')->put($path, 'bytes');

        $item = PanelMediaItem::query()->create([
            'tenant_id' => $tenant->id,
            'folder' => '',
            'path' => $path,
            'name' => 'demo.png',
            'mime' => 'image/png',
            'size' => 5,
            'uploaded_by' => null,
        ]);

        $override = new class extends MediaLibraryPage
        {
            protected static function resolveItemUrl(PanelMediaItem $row, string $disposition): ?string
            {
                return $disposition === 'inline'
                    ? 'https://cdn.example.test/'.$row->name
                    : '';
            }
        };

        $this->assertSame('https://cdn.example.test/demo.png', $override::itemUrl($item, 'inline'));
        $this->assertNull($override::itemUrl($item, 'attachment'));
    }

    public function test_barcode_widget_resolves_barcodes_payload(): void
    {
        $chart = BarcodeWidget::make('sku', 'SKU')
            ->format('EAN13')
            ->value(static fn (): string => '5901234123457')
            ->toChartWidget();

        $this->assertSame('barcode', $chart->toArray()['type']);

        $resolved = $chart->resolve(Period::Days30, 'tenant-1');

        $this->assertFalse($resolved['error']);
        $this->assertCount(1, $resolved['barcodes'] ?? []);
        $this->assertSame('5901234123457', $resolved['barcodes'][0]['value']);
        $this->assertSame('EAN13', $resolved['barcodes'][0]['format']);
    }

    public function test_log_tail_widget_resolves_lines_payload(): void
    {
        $dir = sys_get_temp_dir().'/panel-logtail-'.uniqid('', true);
        mkdir($dir);
        file_put_contents($dir.'/laravel.log', "one\ntwo\nthree\n");

        try {
            $chart = LogTailWidget::make('errors', 'Errors')
                ->file('laravel.log')
                ->lines(10)
                ->toChartWidget();

            // Force reader directory via a custom allow-list file that we open
            // through a subclassed resolve by writing into storage/logs is
            // unreliable in Testbench, so resolve via barcodes-style closure
            // path: LogTailWidget uses LogReader on storage_path('logs').
            // Copy into storage/logs when available.
            $storageLogs = storage_path('logs');
            if (! is_dir($storageLogs)) {
                mkdir($storageLogs, 0777, true);
            }
            file_put_contents($storageLogs.'/laravel.log', "alpha\nbeta\n");

            $resolved = $chart->resolve(Period::Days30, 'tenant-1');

            $this->assertFalse($resolved['error']);
            $this->assertSame('laravel.log', $resolved['file']);
            $this->assertNotEmpty($resolved['logLines'] ?? []);
            $this->assertStringContainsString('beta', implode("\n", $resolved['logLines']));
        } finally {
            @unlink($dir.'/laravel.log');
            @rmdir($dir);
        }
    }
}
