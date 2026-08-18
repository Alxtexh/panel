<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Support\Facades\File;

final class MakeRelationManagerCommandTest extends TestCase
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

    public function test_it_writes_nested_pages_not_a_modal(): void
    {
        $resource = app_path('Panel/Resources/CommentResource.php');
        $manager = app_path('Panel/RelationManagers/CommentRelationManager.php');
        $this->forget($resource, $manager);

        $this->artisan('make:panel-relation-manager', [
            'parent' => 'Article',
            'related' => 'Comment',
            '--force' => true,
        ])->assertSuccessful();

        $resourceContents = File::get($resource);
        $managerContents = File::get($manager);

        $this->assertStringContainsString('protected static ?string $parent = ArticleResource::class', $resourceContents);
        $this->assertStringContainsString('Dedicated list/create/edit/view pages', $resourceContents);
        $this->assertStringContainsString('->resource(CommentResource::class)', $managerContents);
        $this->assertStringContainsString('Links to CommentResource nested pages', $managerContents);
        $this->assertStringNotContainsString('modal', strtolower($managerContents));
        $this->assertStringNotContainsString('Livewire', $resourceContents);
        $this->assertStringNotContainsString('Livewire', $managerContents);
        $this->assertStringNotContainsString('—', $resourceContents);
        $this->assertStringNotContainsString('–', $resourceContents);
        $this->assertStringNotContainsString('—', $managerContents);
    }

    private function forget(string ...$paths): void
    {
        foreach ($paths as $path) {
            $this->written[] = $path;
            @unlink($path);
        }
    }
}
