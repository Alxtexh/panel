<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\File;

/**
 * Richer `--generate` output: relations, enums, soft deletes, filters.
 */
final class MakeResourceGenerateTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    /** @var list<string> */
    private array $written = [];

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->actingAs(User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]));

        $this->ensureAppArticleModel();
    }

    protected function tearDown(): void
    {
        foreach ($this->written as $path) {
            if (is_file($path)) {
                unlink($path);
            }
        }

        parent::tearDown();
    }

    public function test_generate_scaffolds_soft_deletes_filters_and_has_many_hints(): void
    {
        $resource = app_path('Panel/Resources/ArticleResource.php');
        $policy = app_path('Policies/ArticlePolicy.php');
        $factory = base_path('database/factories/ArticleFactory.php');
        $contractTest = base_path('tests/Feature/Panel/ArticleResourceTest.php');
        $this->forget($resource, $policy, $factory, $contractTest);

        $this->artisan('make:panel-resource', ['model' => 'Article', '--generate' => true, '--force' => true])
            ->assertSuccessful();

        $code = (string) file_get_contents($resource);

        $this->assertStringContainsString("TextColumn::make('title')", $code);
        $this->assertStringContainsString("SelectField::make('status')", $code);
        $this->assertStringContainsString("SelectFilter::make('status')", $code);
        $this->assertStringContainsString('TrashedFilter::make', $code);
        $this->assertStringContainsString('make:panel-relation-manager Article Comment', $code);
        $this->assertStringNotContainsString("make('deleted_at')", $code);
        $this->assertFileExists($factory);
        $this->assertFileExists($contractTest);
        $this->assertStringContainsString('class ArticleFactory', (string) file_get_contents($factory));
        $this->assertStringContainsString('test_the_generated_resource', (string) file_get_contents($contractTest));

        exec('php -l '.escapeshellarg($resource).' 2>&1', $output, $status);
        $this->assertSame(0, $status, implode("\n", $output));
    }

    private function ensureAppArticleModel(): void
    {
        if (! class_exists(\App\Models\Article::class)) {
            require_once __DIR__.'/../Fixtures/Models/GeneratorArticle.php';
        }
    }

    private function forget(string ...$paths): void
    {
        foreach ($paths as $path) {
            $this->written[] = $path;
            @unlink($path);
        }
    }
}
