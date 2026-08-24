<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Resources\ArticleResource;
use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Workflow\WorkflowOverride;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;

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

    public function test_workflow_page_includes_edit_props(): void
    {
        $this->get('/articles/workflow')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('ResourceWorkflow')
                ->has('canEdit')
                ->has('saveUrl'));
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

    // -- PUT workflow: save, reload, and verify --

    public function test_put_workflow_persists_and_get_reflects_new_graph(): void
    {
        $this->putJson('/articles/workflow', [
            'group_label' => 'Phase',
            'states' => [
                'open' => ['label' => 'Open', 'color' => 'info'],
                'closed' => ['label' => 'Closed', 'color' => 'success'],
            ],
            'transitions' => [
                [
                    'key' => 'close',
                    'label' => 'Close it',
                    'to' => 'closed',
                    'from' => ['open'],
                    'ability' => 'update',
                ],
            ],
        ])->assertRedirect();

        $this->assertDatabaseHas('panel_workflow_overrides', [
            'resource_key' => 'articles',
        ]);

        $override = WorkflowOverride::forResource('articles');
        $this->assertNotNull($override);
        $this->assertSame('Phase', $override->group_label);
        $this->assertCount(2, $override->states);
        $this->assertCount(1, $override->transitions);

        $this->get('/articles/workflow')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('ResourceWorkflow')
                ->has('graph.nodes', 2)
                ->has('graph.edges', 1)
                ->where('workflow.group', 'Phase'));
    }

    public function test_put_workflow_rejects_invalid_transition_target(): void
    {
        $this->putJson('/articles/workflow', [
            'states' => [
                'open' => ['label' => 'Open', 'color' => 'info'],
            ],
            'transitions' => [
                [
                    'key' => 'close',
                    'label' => 'Close',
                    'to' => 'nonexistent',
                    'from' => ['open'],
                ],
            ],
        ])->assertUnprocessable();
    }

    public function test_put_workflow_rejects_invalid_transition_source(): void
    {
        $this->putJson('/articles/workflow', [
            'states' => [
                'open' => ['label' => 'Open', 'color' => 'info'],
                'closed' => ['label' => 'Closed', 'color' => 'success'],
            ],
            'transitions' => [
                [
                    'key' => 'close',
                    'label' => 'Close',
                    'to' => 'closed',
                    'from' => ['ghost'],
                ],
            ],
        ])->assertUnprocessable();
    }

    public function test_put_workflow_requires_at_least_one_state(): void
    {
        $this->putJson('/articles/workflow', [
            'states' => [],
            'transitions' => [],
        ])->assertUnprocessable();
    }

    public function test_put_workflow_requires_update_ability(): void
    {
        Gate::before(static function ($user, string $ability) {
            return $ability === 'update' ? false : null;
        });

        $this->putJson('/articles/workflow', [
            'states' => [
                'open' => ['label' => 'Open', 'color' => 'info'],
            ],
            'transitions' => [],
        ])->assertForbidden();
    }

    public function test_db_overlay_beats_php_definition(): void
    {
        WorkflowOverride::create([
            'resource_key' => 'articles',
            'column' => 'status',
            'group_label' => 'Custom',
            'states' => [
                'alpha' => ['label' => 'Alpha', 'color' => 'info'],
                'beta' => ['label' => 'Beta', 'color' => 'success'],
            ],
            'transitions' => [
                [
                    'key' => 'promote',
                    'label' => 'Promote',
                    'to' => 'beta',
                    'from' => ['alpha'],
                    'ability' => 'update',
                ],
            ],
        ]);

        $resolved = ArticleResource::resolvedWorkflow();

        $this->assertNotNull($resolved);
        $this->assertSame('status', $resolved->column());
        $this->assertSame('Custom', $resolved->groupLabel());
        $this->assertCount(2, $resolved->getStates());
        $this->assertArrayHasKey('alpha', $resolved->getStates());
        $this->assertArrayHasKey('beta', $resolved->getStates());
        $this->assertCount(1, $resolved->getTransitions());
    }

    public function test_resolved_workflow_returns_php_when_no_override(): void
    {
        $resolved = ArticleResource::resolvedWorkflow();
        $base = ArticleResource::workflow();

        $this->assertNotNull($resolved);
        $this->assertNotNull($base);
        $this->assertSame($base->column(), $resolved->column());
        $this->assertCount(count($base->getStates()), $resolved->getStates());
    }

    public function test_has_state_transitions_uses_db_overlay(): void
    {
        WorkflowOverride::create([
            'resource_key' => 'articles',
            'column' => 'status',
            'group_label' => 'Status',
            'states' => [
                'draft' => ['label' => 'Draft', 'color' => 'neutral'],
                'review' => ['label' => 'Review', 'color' => 'info'],
                'live' => ['label' => 'Live', 'color' => 'success'],
            ],
            'transitions' => [
                [
                    'key' => 'submit',
                    'label' => 'Submit',
                    'to' => 'review',
                    'from' => ['draft'],
                    'ability' => 'update',
                ],
                [
                    'key' => 'approve',
                    'label' => 'Approve',
                    'to' => 'live',
                    'from' => ['review'],
                    'ability' => 'update',
                ],
            ],
        ]);

        $article = new Article;
        $transitions = $article->stateTransitions();

        $this->assertArrayHasKey('draft', $transitions);
        $this->assertContains('review', $transitions['draft']);
        $this->assertNotContains('live', $transitions['draft']);

        $this->assertArrayHasKey('review', $transitions);
        $this->assertContains('live', $transitions['review']);
    }

    public function test_put_workflow_upserts_on_second_save(): void
    {
        $payload = [
            'states' => [
                'a' => ['label' => 'A', 'color' => 'neutral'],
                'b' => ['label' => 'B', 'color' => 'info'],
            ],
            'transitions' => [
                ['key' => 'go', 'label' => 'Go', 'to' => 'b', 'from' => ['a']],
            ],
        ];

        $this->put('/articles/workflow', $payload)->assertRedirect();
        $this->assertDatabaseCount('panel_workflow_overrides', 1);

        $payload['states']['c'] = ['label' => 'C', 'color' => 'success'];
        $payload['transitions'][] = ['key' => 'advance', 'label' => 'Advance', 'to' => 'c', 'from' => ['b']];

        $this->put('/articles/workflow', $payload)->assertRedirect();
        $this->assertDatabaseCount('panel_workflow_overrides', 1);

        $override = WorkflowOverride::forResource('articles');
        $this->assertCount(3, $override->states);
        $this->assertCount(2, $override->transitions);
    }
}
