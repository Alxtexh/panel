<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Resources\ArticleResource;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

final class ResourceWorkflowTest extends TestCase
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

    public function test_schema_exposes_a_workflow_route_when_declared(): void
    {
        $schema = ArticleResource::schema();

        $this->assertSame('/articles/workflow', $schema['routes']['workflow']);
        $this->assertArrayHasKey('graph', $schema['workflow']);
        $this->assertNotEmpty($schema['workflow']['graph']['nodes']);
        $this->assertNotEmpty($schema['workflow']['graph']['edges']);
    }

    public function test_workflow_page_renders_for_a_declared_workflow(): void
    {
        $this->get('/articles/workflow')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('ResourceWorkflow')
                ->where('indexUrl', '/articles')
                ->has('graph.nodes')
                ->has('graph.edges'));
    }

    public function test_record_view_includes_workflow_history_after_a_transition(): void
    {
        $this->postJson("/articles/{$this->article->getKey()}/action", ['action' => 'publish'])
            ->assertSuccessful();

        $this->assertSame(1, DB::table('audit_entries')
            ->where('event', 'state_transition')
            ->count());

        $this->get("/articles/{$this->article->getKey()}")
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('ResourceView')
                ->where('workflow.current', 'published')
                ->where('workflow.diagramUrl', '/articles/workflow')
                ->has('workflow.history', 1));
    }
}
