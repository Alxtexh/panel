<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Resources\ArticleResource;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

final class WorkflowTransitionHttpTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    private Article $article;

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

        $this->article = Article::create([
            'tenant_id' => $tenant->id,
            'title' => 'Draft one',
            'status' => 'draft',
        ]);
    }

    public function test_workflow_schema_is_exposed_on_the_resource(): void
    {
        $schema = ArticleResource::schema();

        $this->assertArrayHasKey('workflow', $schema);
        $this->assertSame('status', $schema['workflow']['column']);
        $this->assertNotEmpty($schema['workflow']['transitions']);
    }

    public function test_a_declared_workflow_transition_succeeds_over_http(): void
    {
        $this->postJson("/articles/{$this->article->getKey()}/action", ['action' => 'publish'])
            ->assertSuccessful();

        $this->assertSame('published', $this->article->fresh()->status);
    }
}
