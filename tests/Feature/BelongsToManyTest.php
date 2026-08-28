<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tag;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

/**
 * BelongsToMany nested resources: attach is a dedicated page, detach is a row
 * action. Another tenant's parent or tag is a 404, never a 403.
 */
final class BelongsToManyTest extends TestCase
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

    private function tag(string $name, ?Tenant $tenant = null): Tag
    {
        return Tag::withoutGlobalScopes()->create([
            'tenant_id' => ($tenant ?? $this->mine)->id,
            'name' => $name,
        ]);
    }

    public function test_the_attach_page_is_dedicated_not_a_modal(): void
    {
        $open = $this->tag('Open');
        $this->article->tags()->attach($this->tag('Already'));

        $page = $this->get("/articles/{$this->article->getKey()}/tags/attach")
            ->assertOk()
            ->viewData('page');

        $this->assertSame('ResourceAttach', $page['component'] ?? null);

        $labels = array_column($page['props']['options'] ?? [], 'label');

        $this->assertContains('Open', $labels);
        $this->assertNotContains('Already', $labels);
        $this->assertSame(
            "/articles/{$this->article->getKey()}/tags/attach",
            $page['props']['schema']['routes']['attach'] ?? null,
        );
    }

    public function test_attach_picks_existing_records(): void
    {
        $tag = $this->tag('Draft');

        $this->post("/articles/{$this->article->getKey()}/tags/attach", [
            'ids' => [$tag->getKey()],
        ])->assertRedirect("/articles/{$this->article->getKey()}/tags");

        $this->assertTrue($this->article->tags()->whereKey($tag->getKey())->exists());
    }

    public function test_detach_is_a_row_action_on_the_nested_index(): void
    {
        $tag = $this->tag('Drop me');
        $this->article->tags()->attach($tag);

        $index = $this->get("/articles/{$this->article->getKey()}/tags")
            ->assertOk()
            ->viewData('page');

        $actions = collect($index['props']['schema']['table']['recordActions'] ?? [])
            ->flatMap(static fn (array $group): array => $group['actions'] ?? [$group]);

        $this->assertTrue(
            $actions->contains(static fn (array $action): bool => ($action['key'] ?? null) === 'detach'),
            'Detach must appear as a row action on the nested index.',
        );

        $this->postJson("/articles/{$this->article->getKey()}/tags/{$tag->getKey()}/action", [
            'action' => 'detach',
        ])->assertSuccessful();

        $this->assertFalse($this->article->tags()->whereKey($tag->getKey())->exists());
        $this->assertNotNull(Tag::query()->find($tag->getKey()), 'Detach must not delete the related row.');
    }

    public function test_another_tenants_parent_is_not_found(): void
    {
        $foreign = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->theirs->id,
            'title' => 'Theirs',
            'status' => 'draft',
        ]);
        $tag = $this->tag('Theirs tag', $this->theirs);
        $foreign->tags()->attach($tag);

        $this->get("/articles/{$foreign->getKey()}/tags")->assertNotFound();
        $this->get("/articles/{$foreign->getKey()}/tags/attach")->assertNotFound();
        $this->post("/articles/{$foreign->getKey()}/tags/attach", ['ids' => [$tag->getKey()]])->assertNotFound();
    }

    public function test_another_tenants_tag_cannot_be_attached(): void
    {
        $foreign = $this->tag('Theirs tag', $this->theirs);

        $this->post("/articles/{$this->article->getKey()}/tags/attach", [
            'ids' => [$foreign->getKey()],
        ])->assertNotFound();

        $this->assertFalse($this->article->tags()->whereKey($foreign->getKey())->exists());
    }

    public function test_the_attach_page_carries_the_pivot_form_schema(): void
    {
        $this->tag('Open');

        $page = $this->get("/articles/{$this->article->getKey()}/tags/attach")
            ->assertOk()
            ->viewData('page');

        $fields = collect($page['props']['pivotForm']['fields'] ?? []);

        $this->assertTrue(
            $fields->contains(static fn (array $field): bool => ($field['key'] ?? null) === 'note'),
            'The declared pivot column must appear in the attach page\'s pivot form.',
        );
    }

    public function test_attach_writes_the_pivot_columns_it_collects(): void
    {
        $tag = $this->tag('Draft');

        $this->post("/articles/{$this->article->getKey()}/tags/attach", [
            'ids' => [$tag->getKey()],
            'pivot' => ['note' => 'Featured this week'],
        ])->assertRedirect("/articles/{$this->article->getKey()}/tags");

        $pivot = $this->article->tags()->whereKey($tag->getKey())->first()?->pivot;

        $this->assertSame('Featured this week', $pivot?->note);
    }

    public function test_attach_applies_the_same_pivot_values_to_every_id_in_the_submission(): void
    {
        $a = $this->tag('A');
        $b = $this->tag('B');

        $this->post("/articles/{$this->article->getKey()}/tags/attach", [
            'ids' => [$a->getKey(), $b->getKey()],
            'pivot' => ['note' => 'Batch note'],
        ])->assertRedirect("/articles/{$this->article->getKey()}/tags");

        $this->assertSame('Batch note', $this->article->tags()->whereKey($a->getKey())->first()?->pivot?->note);
        $this->assertSame('Batch note', $this->article->tags()->whereKey($b->getKey())->first()?->pivot?->note);
    }

    public function test_attach_ignores_a_pivot_key_the_resource_never_declared(): void
    {
        $tag = $this->tag('Draft');

        $this->post("/articles/{$this->article->getKey()}/tags/attach", [
            'ids' => [$tag->getKey()],
            'pivot' => ['note' => 'Kept', 'not_declared' => 'Dropped'],
        ])->assertRedirect("/articles/{$this->article->getKey()}/tags");

        $row = DB::table('article_tag')
            ->where('article_id', $this->article->getKey())
            ->where('tag_id', $tag->getKey())
            ->first();

        $this->assertSame('Kept', $row->note);
        $this->assertFalse(property_exists($row, 'not_declared'));
    }

    public function test_edit_pivot_is_a_row_action_that_updates_the_pivot_without_detaching(): void
    {
        $tag = $this->tag('Existing');
        $this->article->tags()->attach($tag, ['note' => 'Original']);

        $index = $this->get("/articles/{$this->article->getKey()}/tags")
            ->assertOk()
            ->viewData('page');

        $actions = collect($index['props']['schema']['table']['recordActions'] ?? [])
            ->flatMap(static fn (array $group): array => $group['actions'] ?? [$group]);

        $this->assertTrue(
            $actions->contains(static fn (array $action): bool => ($action['key'] ?? null) === 'edit-pivot'),
            'Edit pivot must appear as a row action on the nested index once pivotColumns() is declared.',
        );

        $this->postJson("/articles/{$this->article->getKey()}/tags/{$tag->getKey()}/action", [
            'action' => 'edit-pivot',
            'data' => ['note' => 'Updated'],
        ])->assertSuccessful();

        $pivot = $this->article->tags()->whereKey($tag->getKey())->first()?->pivot;

        $this->assertSame('Updated', $pivot?->note);
        $this->assertTrue(
            $this->article->tags()->whereKey($tag->getKey())->exists(),
            'Editing the pivot must not detach the row.',
        );
    }

    public function test_the_nested_list_only_shows_attached_rows(): void
    {
        $attached = $this->tag('On');
        $this->tag('Off');
        $this->article->tags()->attach($attached);

        $props = $this->get("/articles/{$this->article->getKey()}/tags")
            ->assertOk()
            ->viewData('page')['props'];

        $names = array_column($props['records'] ?? $props['data'] ?? [], 'name');

        $this->assertSame(['On'], $names);
    }
}
