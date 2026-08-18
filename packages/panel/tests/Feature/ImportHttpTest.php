<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;

/**
 * Opt-in CSV import over HTTP: inspect, queue, failed-row download.
 */
final class ImportHttpTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
        $this->app['config']->set('queue.default', 'sync');
    }

    public function test_a_resource_that_is_not_importable_is_not_found(): void
    {
        $csv = UploadedFile::fake()->createWithContent('rows.csv', "title\nNope\n");

        $this->post('/posts/import/inspect', ['file' => $csv])->assertNotFound();
        $this->post('/posts/import', [
            'file' => $csv,
            'mapping' => ['title' => 'title'],
        ])->assertNotFound();
    }

    public function test_inspect_returns_headers_and_fields(): void
    {
        $csv = UploadedFile::fake()->createWithContent('rows.csv', "Heading,State\nOne,draft\n");

        $payload = $this->post('/articles/import/inspect', ['file' => $csv])
            ->assertOk()
            ->json();

        $this->assertSame(['Heading', 'State'], $payload['headers']);
        $this->assertContains('title', array_column($payload['fields'], 'key'));
    }

    public function test_a_dry_run_writes_nothing(): void
    {
        $csv = UploadedFile::fake()->createWithContent('rows.csv', "title,status\nImported,draft\n");

        $payload = $this->post('/articles/import', [
            'file' => $csv,
            'mapping' => ['title' => 'title', 'status' => 'status'],
            'dryRun' => '1',
        ])->assertOk()->json();

        $this->assertSame(1, $payload['importable']);
        $this->assertSame(0, $payload['failed']);
        $this->assertSame(0, Article::query()->where('title', 'Imported')->count());
    }

    public function test_a_real_import_writes_rows(): void
    {
        $csv = UploadedFile::fake()->createWithContent('rows.csv', "title,status\nImported,draft\n");

        $payload = $this->post('/articles/import', [
            'file' => $csv,
            'mapping' => ['title' => 'title', 'status' => 'status'],
            'dryRun' => '0',
        ])->assertOk()->json();

        $this->assertSame(1, $payload['written'] ?? null);
        $this->assertSame(1, Article::query()->where('title', 'Imported')->count());
        $this->assertSame($this->user->tenant_id, Article::query()->where('title', 'Imported')->value('tenant_id'));
    }

    public function test_failed_rows_are_downloadable(): void
    {
        $csv = UploadedFile::fake()->createWithContent('rows.csv', "title,status\n,draft\n");

        $payload = $this->post('/articles/import', [
            'file' => $csv,
            'mapping' => ['title' => 'title', 'status' => 'status'],
            'dryRun' => '0',
        ])->assertOk()->json();

        $this->assertGreaterThan(0, $payload['failed'] ?? 0);
        $this->assertNotEmpty($payload['failuresDownload'] ?? null);

        $this->get($payload['failuresDownload'])
            ->assertOk()
            ->assertHeader('content-disposition');
    }
}
