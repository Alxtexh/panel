<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * TableSelect as a dedicated page that reuses ListQuery. Not a modal.
 */
final class TableSelectPickerTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private Tenant $theirs;

    private User $user;

    private Article $article;

    private Article $other;

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

        $this->other = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Pick me',
            'status' => 'draft',
        ]);

        Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->theirs->id,
            'title' => 'Theirs',
            'status' => 'draft',
        ]);
    }

    public function test_the_picker_is_a_dedicated_page_using_list_query(): void
    {
        $page = $this->get("/articles/{$this->article->getKey()}/comments/pick/article_id")
            ->assertOk()
            ->viewData('page');

        $this->assertSame('ResourcePicker', $page['component'] ?? null);

        $titles = array_column($page['props']['records'] ?? [], 'title');

        $this->assertContains('Pick me', $titles);
        $this->assertContains('Parent', $titles);
        $this->assertNotContains('Theirs', $titles);
        $this->assertSame('article_id', $page['props']['field'] ?? null);
    }

    public function test_choosing_a_row_returns_to_the_form_with_the_id(): void
    {
        $return = "/articles/{$this->article->getKey()}/comments/create";

        $this->get("/articles/{$this->article->getKey()}/comments/pick/article_id/{$this->other->getKey()}?return=".urlencode($return))
            ->assertRedirect();

        $location = $this->get("/articles/{$this->article->getKey()}/comments/pick/article_id/{$this->other->getKey()}?return=".urlencode($return))
            ->headers->get('Location');

        $this->assertNotNull($location);
        $this->assertStringContainsString('article_id='.$this->other->getKey(), $location);
        $this->assertStringContainsString('/comments/create', $location);
    }

    public function test_another_tenants_row_cannot_be_chosen(): void
    {
        $foreign = Article::withoutGlobalScopes()
            ->where('tenant_id', $this->theirs->id)
            ->first();

        $this->get("/articles/{$this->article->getKey()}/comments/pick/article_id/{$foreign->getKey()}")
            ->assertNotFound();
    }

    public function test_a_field_without_table_select_is_not_found(): void
    {
        $this->get("/articles/{$this->article->getKey()}/comments/pick/body")
            ->assertNotFound();
    }

    public function test_the_form_schema_marks_table_select(): void
    {
        $props = $this->get("/articles/{$this->article->getKey()}/comments/create")
            ->assertOk()
            ->viewData('page')['props'];

        $article = collect($props['schema']['form']['fields'] ?? [])->firstWhere('key', 'article_id');

        $this->assertTrue($article['tableSelect'] ?? false);
    }
}
