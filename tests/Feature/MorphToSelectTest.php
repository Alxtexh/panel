<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Forms\Fields\SelectField;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Comment;
use Alxtexh\Panel\Tests\Fixtures\Models\Tag;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * MorphTo on SelectField: type + id, scoped Exists, dedicated pages.
 */
final class MorphToSelectTest extends TestCase
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
            'title' => 'Mine article',
            'status' => 'draft',
        ]);

        Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->theirs->id,
            'title' => 'Theirs article',
            'status' => 'draft',
        ]);
    }

    public function test_type_select_toggle_buttons_flag_is_on_schema(): void
    {
        $field = SelectField::make('notable')
            ->morphTo([
                Article::class => 'title',
                Tag::class => 'name',
            ])
            ->typeSelectToggleButtons();

        $schema = $field->toSchema();

        $this->assertSame('toggle-buttons', $schema['morphTypeSelect'] ?? null);
        $this->assertCount(2, $schema['morphTo'] ?? []);
    }

    public function test_the_form_schema_ships_morph_types(): void
    {
        $props = $this->get("/articles/{$this->article->getKey()}/comments/create")
            ->assertOk()
            ->viewData('page')['props'];

        $notable = collect($props['schema']['form']['fields'] ?? [])->firstWhere('key', 'notable');

        $this->assertNotNull($notable);
        $this->assertTrue($notable['searchable'] ?? false);
        $this->assertTrue($notable['live'] ?? false);

        $values = array_column($notable['morphTo'] ?? [], 'value');

        $this->assertContains(Article::class, $values);
        $this->assertContains(Tag::class, $values);
    }

    public function test_morph_search_is_tenant_scoped_for_the_selected_type(): void
    {
        $field = SelectField::make('notable')->morphTo([
            Article::class => 'title',
            Tag::class => 'name',
        ]);

        $labels = array_column($field->search('article', [
            'notable' => ['type' => Article::class],
        ]), 'label');

        $this->assertContains('Mine article', $labels);
        $this->assertNotContains('Theirs article', $labels);
        $this->assertSame([], $field->search('article', ['notable' => ['type' => Tag::class]]));
    }

    public function test_a_comment_can_store_a_morph_target(): void
    {
        $this->post("/articles/{$this->article->getKey()}/comments", [
            'body' => 'About this',
            'article_id' => $this->article->getKey(),
            'notable' => [
                'type' => Article::class,
                'id' => $this->article->getKey(),
            ],
        ])->assertSessionHasNoErrors();

        $comment = Comment::query()->where('body', 'About this')->first();

        $this->assertNotNull($comment);
        $this->assertSame(Article::class, $comment->notable_type);
        $this->assertSame((string) $this->article->getKey(), (string) $comment->notable_id);
    }

    public function test_another_tenants_morph_id_is_invalid(): void
    {
        $foreign = Article::withoutGlobalScopes()
            ->where('tenant_id', $this->theirs->id)
            ->first();

        $this->from("/articles/{$this->article->getKey()}/comments/create")
            ->post("/articles/{$this->article->getKey()}/comments", [
                'body' => 'Nope',
                'article_id' => $this->article->getKey(),
                'notable' => [
                    'type' => Article::class,
                    'id' => $foreign->getKey(),
                ],
            ])
            ->assertSessionHasErrors('notable.id');

        $this->assertSame(0, Comment::query()->where('body', 'Nope')->count());
    }

    public function test_an_undeclared_morph_type_is_invalid(): void
    {
        $this->from("/articles/{$this->article->getKey()}/comments/create")
            ->post("/articles/{$this->article->getKey()}/comments", [
                'body' => 'Nope',
                'article_id' => $this->article->getKey(),
                'notable' => [
                    'type' => User::class,
                    'id' => $this->user->getKey(),
                ],
            ])
            ->assertSessionHasErrors('notable.type');
    }
}
