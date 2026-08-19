<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Comment;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Nested child pages: list/create/edit/view under the parent URL, not a modal.
 */
final class NestedResourceTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private Tenant $theirs;

    private User $user;

    private Article $article;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);

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
            'title' => 'Parent',
            'status' => 'draft',
        ]);
    }

    private function comment(string $body, ?Article $on = null, ?Tenant $tenant = null): Comment
    {
        return Comment::withoutGlobalScopes()->create([
            'tenant_id' => ($tenant ?? $this->mine)->id,
            'article_id' => ($on ?? $this->article)->getKey(),
            'body' => $body,
        ]);
    }

    public function test_the_nested_list_is_a_dedicated_page(): void
    {
        $this->comment('On this article');

        $props = $this->get("/articles/{$this->article->getKey()}/comments")
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertSame(
            "/articles/{$this->article->getKey()}/comments",
            $props['schema']['routes']['index'] ?? null,
        );
        $this->assertSame(
            "/articles/{$this->article->getKey()}/comments/create",
            $props['schema']['routes']['create'] ?? null,
        );
        $this->assertSame('On this article', $props['records'][0]['body'] ?? $props['data'][0]['body'] ?? null);
    }

    public function test_a_flat_child_url_is_not_found(): void
    {
        $this->get('/comments')->assertNotFound();
        $this->get('/comments/create')->assertNotFound();
    }

    public function test_create_stamps_the_parent_from_the_url(): void
    {
        $other = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Other',
            'status' => 'draft',
        ]);

        $this->post("/articles/{$this->article->getKey()}/comments", [
            'body' => 'Nested',
            'article_id' => $other->getKey(),
        ])->assertRedirect();

        $row = Comment::query()->where('body', 'Nested')->first();

        $this->assertNotNull($row);
        $this->assertSame(
            (string) $this->article->getKey(),
            (string) $row->article_id,
            'A submitted parent id must not move the row off the URL parent.',
        );
        $this->assertSame($this->mine->id, $row->tenant_id);
    }

    public function test_update_re_stamps_the_parent_from_the_url(): void
    {
        $comment = $this->comment('Original');
        $other = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Other',
            'status' => 'draft',
        ]);

        $this->put("/articles/{$this->article->getKey()}/comments/{$comment->getKey()}", [
            'body' => 'Updated',
            'article_id' => $other->getKey(),
        ])->assertRedirect();

        $comment->refresh();

        $this->assertSame('Updated', $comment->body);
        $this->assertSame((string) $this->article->getKey(), (string) $comment->article_id);
    }

    public function test_another_tenants_parent_is_not_found(): void
    {
        $foreign = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->theirs->id,
            'title' => 'Theirs',
            'status' => 'draft',
        ]);

        $this->get("/articles/{$foreign->getKey()}/comments")->assertNotFound();
        $this->get("/articles/{$foreign->getKey()}/comments/create")->assertNotFound();
        $this->post("/articles/{$foreign->getKey()}/comments", ['body' => 'Nope'])->assertNotFound();
    }

    public function test_a_mismatched_parent_pairing_is_not_found(): void
    {
        $other = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Other',
            'status' => 'draft',
        ]);
        $comment = $this->comment('Belongs to parent');

        $this->get("/articles/{$other->getKey()}/comments/{$comment->getKey()}")->assertNotFound();
        $this->get("/articles/{$other->getKey()}/comments/{$comment->getKey()}/edit")->assertNotFound();
    }

    public function test_create_and_edit_are_pages_not_modals(): void
    {
        $comment = $this->comment('Edit me');

        $create = $this->get("/articles/{$this->article->getKey()}/comments/create")
            ->assertOk()
            ->viewData('page');

        $this->assertSame('ResourceForm', $create['component'] ?? null);
        $this->assertArrayHasKey('record', $create['props']);
        $this->assertNull($create['props']['record']);

        $edit = $this->get("/articles/{$this->article->getKey()}/comments/{$comment->getKey()}/edit")
            ->assertOk()
            ->viewData('page');

        $this->assertSame('ResourceForm', $edit['component'] ?? null);
        $this->assertSame($comment->getKey(), $edit['props']['record']['id'] ?? null);

        $show = $this->get("/articles/{$this->article->getKey()}/comments/{$comment->getKey()}")
            ->assertOk()
            ->viewData('page');

        $this->assertSame('ResourceView', $show['component'] ?? null);
    }
}
