<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Files\FileStore;
use Alxtexh\Panel\Tests\TestCase;
use DateTimeImmutable;
use Illuminate\Support\Facades\Storage;
use Mockery;

final class FileStoreUrlTest extends TestCase
{
    public function test_temporary_url_requires_the_current_tenant_prefix(): void
    {
        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage('does not belong');

        FileStore::temporaryUrl('../secrets.txt', new DateTimeImmutable('+5 minutes'));
    }

    public function test_temporary_url_delegates_signing_to_the_private_storage_disk(): void
    {
        $expiration = new DateTimeImmutable('+5 minutes');
        $disk = Mockery::mock(\Illuminate\Filesystem\FilesystemAdapter::class);
        $disk->shouldReceive('temporaryUrl')
            ->once()
            ->with('tenants/shared/report.pdf', $expiration, ['download' => '1'])
            ->andReturn('https://storage.test/signed-report');
        Storage::shouldReceive('disk')->once()->with('local')->andReturn($disk);

        $this->assertSame(
            'https://storage.test/signed-report',
            FileStore::temporaryUrl('tenants/shared/report.pdf', $expiration, ['download' => '1']),
        );
    }
}
