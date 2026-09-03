<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Comment;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

final class RelationshipRepeaterTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    private Article $article;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
        $this->article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'title' => 'Parent',
            'status' => 'draft',
        ]);
    }

    public function test_create_syncs_relationship_rows_and_ignores_undeclared_child_keys(): void
    {
        $this->post('/articles', [
            'title' => 'With comments',
            'comments' => [
                ['body' => 'First', 'status' => 'open', 'is_admin' => true],
                ['body' => 'Second', 'status' => 'closed'],
            ],
        ])->assertRedirect();

        $article = Article::query()->where('title', 'With comments')->firstOrFail();

        $this->assertDatabaseCount('comments', 2);
        $this->assertDatabaseHas('comments', [
            'article_id' => $article->getKey(),
            'tenant_id' => $this->tenant->getKey(),
            'body' => 'First',
            'status' => 'open',
        ]);
        $this->assertDatabaseMissing('comments', ['is_admin' => 1]);
    }

    public function test_update_scopes_existing_rows_to_the_parent_and_removes_omitted_rows(): void
    {
        $keep = Comment::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'article_id' => $this->article->id,
            'body' => 'Old',
        ]);
        $remove = Comment::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'article_id' => $this->article->id,
            'body' => 'Remove',
        ]);

        $this->put("/articles/{$this->article->id}", [
            'title' => 'Parent updated',
            'comments' => [
                ['_id' => (string) $keep->id, 'body' => 'Updated', 'status' => 'open'],
                ['body' => 'New', 'status' => 'closed'],
            ],
        ])->assertRedirect();

        $this->assertDatabaseHas('comments', ['id' => $keep->id, 'body' => 'Updated']);
        $this->assertDatabaseMissing('comments', ['id' => $remove->id]);
        $this->assertDatabaseHas('comments', [
            'article_id' => $this->article->id,
            'tenant_id' => $this->tenant->id,
            'body' => 'New',
        ]);
    }

    public function test_a_row_id_from_another_parent_cannot_be_reassigned(): void
    {
        $other = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'title' => 'Other',
            'status' => 'draft',
        ]);
        $foreign = Comment::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'article_id' => $other->id,
            'body' => 'Protected',
        ]);

        $this->put("/articles/{$this->article->id}", [
            'title' => 'Parent',
            'comments' => [
                ['_id' => (string) $foreign->id, 'body' => 'Hijacked'],
            ],
        ])->assertRedirect();

        $this->assertDatabaseHas('comments', [
            'id' => $foreign->id,
            'article_id' => $other->id,
            'body' => 'Protected',
        ]);
    }
}
