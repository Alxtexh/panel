<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Comments\MentionParser;
use Alxtexh\Panel\Models\PanelComment;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Resources\PostResource;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Notification;

final class ResourceCommentsTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private User $author;

    private User $mentioned;

    private Article $article;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->author = User::create([
            'tenant_id' => $this->mine->id,
            'name' => 'Taylor Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->mentioned = User::create([
            'tenant_id' => $this->mine->id,
            'name' => 'Jamie Support',
            'email' => 'jamie@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->author);

        $this->article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Needs review',
            'status' => 'draft',
        ]);
    }

    public function test_comments_are_off_by_default(): void
    {
        $this->assertFalse(PostResource::hasComments());
    }

    public function test_comment_index_lists_author_and_timestamp(): void
    {
        PanelComment::query()->create([
            'tenant_id' => $this->mine->id,
            'commentable_type' => $this->article->getMorphClass(),
            'commentable_id' => $this->article->getKey(),
            'user_id' => $this->author->getKey(),
            'body' => 'First note',
        ]);

        $this->getJson("/articles/{$this->article->getKey()}/record-comments")
            ->assertOk()
            ->assertJsonPath('canCreate', true)
            ->assertJsonCount(1, 'comments')
            ->assertJsonPath('comments.0.body', 'First note')
            ->assertJsonPath('comments.0.author.name', 'Taylor Operator')
            ->assertJsonStructure([
                'comments' => [
                    ['id', 'body', 'mentions', 'author' => ['id', 'name'], 'createdAt'],
                ],
            ]);
    }

    public function test_comment_store_persists_and_returns_json(): void
    {
        $this->postJson("/articles/{$this->article->getKey()}/record-comments", [
            'body' => 'Ship when ready.',
        ])
            ->assertCreated()
            ->assertJsonPath('comment.body', 'Ship when ready.')
            ->assertJsonPath('comment.author.name', 'Taylor Operator');

        $this->assertDatabaseHas('panel_comments', [
            'commentable_type' => $this->article->getMorphClass(),
            'commentable_id' => $this->article->getKey(),
            'user_id' => $this->author->getKey(),
            'body' => 'Ship when ready.',
        ]);
    }

    public function test_mention_parser_resolves_email_and_username(): void
    {
        $parser = new MentionParser;

        $byEmail = $parser->parse(
            'Please review @jamie@example.test',
            $this->author,
        );

        $this->assertSame([(string) $this->mentioned->getKey()], array_map('strval', $byEmail));

        $byLocal = $parser->parse(
            'Loop in @jamie please',
            $this->author,
        );

        $this->assertSame([(string) $this->mentioned->getKey()], array_map('strval', $byLocal));
    }

    public function test_mention_parser_skips_the_author(): void
    {
        $parser = new MentionParser;

        $mentions = $parser->parse(
            'Notes to self @operator',
            $this->author,
        );

        $this->assertSame([], $mentions);
    }

    public function test_comment_store_records_mentions_and_notifies(): void
    {
        Notification::fake();

        $this->postJson("/articles/{$this->article->getKey()}/record-comments", [
            'body' => 'Hey @jamie, can you review?',
        ])->assertCreated();

        $comment = PanelComment::query()->first();

        $this->assertNotNull($comment);
        $this->assertSame([(string) $this->mentioned->getKey()], array_map('strval', $comment->mentions ?? []));

        Notification::assertSentTo($this->mentioned, \Alxtexh\Panel\Notifications\BellText::class);
    }

    public function test_comments_return_not_found_when_resource_has_no_comments(): void
    {
        $post = \Alxtexh\Panel\Tests\Fixtures\Models\Post::query()->create([
            'title' => 'Read only',
            'status' => 'draft',
        ]);

        $this->getJson("/posts/{$post->getKey()}/record-comments")->assertNotFound();
        $this->postJson("/posts/{$post->getKey()}/record-comments", ['body' => 'Nope'])->assertNotFound();
    }

    public function test_comment_create_requires_permission(): void
    {
        Gate::before(static function ($user, string $ability) {
            return in_array($ability, ['update', 'comment'], true) ? false : null;
        });

        $this->postJson("/articles/{$this->article->getKey()}/record-comments", [
            'body' => 'Should not save',
        ])->assertForbidden();

        $this->assertDatabaseCount('panel_comments', 0);
    }

    public function test_comment_index_requires_view_permission(): void
    {
        Gate::before(static function ($user, string $ability) {
            return $ability === 'view' ? false : null;
        });

        $this->getJson("/articles/{$this->article->getKey()}/record-comments")->assertForbidden();
    }

    public function test_resource_view_includes_comments_context_when_opted_in(): void
    {
        $this->get("/articles/{$this->article->getKey()}")
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('ResourceView')
                ->has('comments')
                ->where('comments.label', 'Comments')
                ->where('comments.canCreate', true)
                ->where('comments.url', "/articles/{$this->article->getKey()}/record-comments"));
    }
}
