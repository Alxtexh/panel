<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Forms\Fields\SelectField;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * BelongsTo options from the related model, plus live form-state over JSON.
 */
final class SelectRelationshipTest extends TestCase
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

    public function test_relationship_search_is_tenant_scoped(): void
    {
        $field = SelectField::make('article_id')->relationship(Article::class, 'title');

        $labels = array_column($field->search('article'), 'label');

        $this->assertContains('Mine article', $labels);
        $this->assertNotContains('Theirs article', $labels);
    }

    public function test_relationship_search_matches_the_title(): void
    {
        $field = SelectField::make('article_id')->relationship(Article::class, 'title');

        $this->assertSame(['Mine article'], array_column($field->search('Mine'), 'label'));
        $this->assertSame([], $field->search('Theirs'));
    }

    public function test_field_options_endpoint_uses_the_relationship(): void
    {
        $options = $this->getJson(
            "/articles/{$this->article->getKey()}/comments/field-options?field=article_id&q=Mine",
        )->assertOk()->json('options');

        $this->assertSame(['Mine article'], array_column($options, 'label'));
    }

    public function test_form_state_returns_option_patches(): void
    {
        $payload = $this->postJson("/articles/{$this->article->getKey()}/comments/form-state", [
            'field' => 'body',
            'values' => ['body' => 'Hello'],
        ])->assertOk()->json();

        $this->assertArrayHasKey('article_id', $payload['options'] ?? []);
        $this->assertSame(['Mine article'], array_column($payload['options']['article_id'], 'label'));
    }

    public function test_live_is_on_the_form_schema(): void
    {
        $props = $this->get("/articles/{$this->article->getKey()}/comments/create")
            ->assertOk()
            ->viewData('page')['props'];

        $fields = $props['schema']['form']['fields'] ?? [];
        $keys = array_column($fields, 'key');

        $this->assertContains('article_id', $keys);
        $article = collect($fields)->firstWhere('key', 'article_id');

        $this->assertTrue($article['live'] ?? false);
        $this->assertTrue($article['searchable'] ?? false);
    }

    public function test_another_tenants_id_fails_relationship_validation(): void
    {
        $foreign = Article::withoutGlobalScopes()
            ->where('tenant_id', $this->theirs->id)
            ->first();

        $this->from("/articles/{$this->article->getKey()}/comments/create")
            ->post("/articles/{$this->article->getKey()}/comments", [
                'body' => 'Nope',
                'article_id' => $foreign->getKey(),
            ])
            ->assertSessionHasErrors('article_id');

        $this->assertSame(
            0,
            \Alxtexh\Panel\Tests\Fixtures\Models\Comment::query()->where('body', 'Nope')->count(),
        );
    }
}
