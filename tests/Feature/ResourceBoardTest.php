<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Resources\Board;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Comment;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Gate;

final class ResourceBoardTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private User $user;

    private Article $article;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $this->mine->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);

        $this->article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Draft one',
            'status' => 'draft',
        ]);
    }

    public function test_board_schema_is_opt_in_structure_only(): void
    {
        $board = Board::make('status')
            ->columns([
                'open' => 'Open',
                'doing' => 'In progress',
                'done' => 'Done',
            ])
            ->title('name')
            ->description('notes');

        $schema = $board->toSchema();

        $this->assertSame('status', $schema['column']);
        $this->assertSame('name', $schema['title']);
        $this->assertSame('notes', $schema['description']);
        $this->assertSame(
            [
                ['value' => 'open', 'label' => 'Open'],
                ['value' => 'doing', 'label' => 'In progress'],
                ['value' => 'done', 'label' => 'Done'],
            ],
            $schema['columns'],
        );
        $this->assertSame(['open', 'doing', 'done'], $board->allowedValues());
    }

    public function test_board_rejects_invalid_column_attribute(): void
    {
        $this->expectException(\InvalidArgumentException::class);

        Board::make('status;drop');
    }

    public function test_board_page_renders_when_declared(): void
    {
        $this->get('/articles/board')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('ResourceKanban')
                ->where('indexUrl', '/articles')
                ->where('moveUrl', '/articles/board-move')
                ->has('columns', 3));
    }

    public function test_board_is_not_found_when_resource_has_no_board(): void
    {
        $this->get('/posts/board')->assertNotFound();
        $this->postJson('/posts/board-move', [
            'id' => 1,
            'column' => 'draft',
        ])->assertNotFound();
    }

    public function test_board_move_persists_an_allowlisted_column(): void
    {
        $this->postJson('/articles/board-move', [
            'id' => $this->article->getKey(),
            'column' => 'published',
        ])
            ->assertOk()
            ->assertJsonPath('ok', true)
            ->assertJsonPath('value', 'published');

        $this->assertSame('published', $this->article->fresh()->status);
    }

    public function test_board_move_rejects_a_column_outside_the_allowlist(): void
    {
        $this->postJson('/articles/board-move', [
            'id' => $this->article->getKey(),
            'column' => 'not-a-column',
        ])->assertStatus(422);

        $this->assertSame('draft', $this->article->fresh()->status);
    }

    public function test_board_move_requires_update_permission(): void
    {
        Gate::before(static function ($user, string $ability) {
            return $ability === 'update' ? false : null;
        });

        $this->postJson('/articles/board-move', [
            'id' => $this->article->getKey(),
            'column' => 'published',
        ])->assertForbidden();

        $this->assertSame('draft', $this->article->fresh()->status);
    }

    public function test_nested_board_uses_parent_prefixed_urls(): void
    {
        Comment::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'article_id' => $this->article->getKey(),
            'body' => 'Nested card',
            'status' => 'open',
        ]);

        $base = "/articles/{$this->article->getKey()}/comments";

        $this->get("{$base}/board")
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('ResourceKanban')
                ->where('indexUrl', $base)
                ->where('moveUrl', "{$base}/board-move"));
    }

    public function test_nested_board_move_updates_the_scoped_row(): void
    {
        $comment = Comment::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'article_id' => $this->article->getKey(),
            'body' => 'Move me',
            'status' => 'open',
        ]);

        $this->postJson("/articles/{$this->article->getKey()}/comments/board-move", [
            'id' => $comment->getKey(),
            'column' => 'done',
        ])
            ->assertOk()
            ->assertJsonPath('value', 'done');

        $this->assertSame('done', $comment->fresh()->status);
    }
}
