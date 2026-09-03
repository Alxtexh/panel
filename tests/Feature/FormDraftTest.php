<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

final class FormDraftTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private Article $article;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
        $this->actingAs($user);
        $this->article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'title' => 'Original',
            'status' => 'draft',
        ]);
    }

    public function test_create_drafts_are_owner_scoped_and_sanitized(): void
    {
        $this->postJson('/articles/draft', [
            'draftKey' => 'new-article',
            'values' => ['title' => 'In progress', 'unknown' => 'discard me'],
        ])->assertOk()->assertJson(['ok' => true]);

        $this->getJson('/articles/draft?draftKey=new-article')
            ->assertOk()
            ->assertJsonPath('draft.values.title', 'In progress')
            ->assertJsonMissingPath('draft.values.unknown');

        $this->deleteJson('/articles/draft', ['draftKey' => 'new-article'])
            ->assertOk()
            ->assertJson(['ok' => true]);

        $this->getJson('/articles/draft?draftKey=new-article')
            ->assertOk()
            ->assertJsonPath('draft', null);
    }

    public function test_edit_drafts_reject_stale_record_versions(): void
    {
        $version = $this->article->updated_at->toIso8601String();

        $this->postJson("/articles/{$this->article->id}/draft", [
            'draftKey' => 'edit-article',
            'version' => $version,
            'values' => ['title' => 'Saved draft'],
        ])->assertOk();

        $this->article->forceFill(['title' => 'Changed elsewhere', 'updated_at' => now()->addSecond()])->save();

        $this->getJson("/articles/{$this->article->id}/draft?draftKey=edit-article")
            ->assertStatus(409)
            ->assertJson(['stale' => true]);
    }
}
