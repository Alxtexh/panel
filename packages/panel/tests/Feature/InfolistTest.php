<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Post;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Dedicated view pages render infolist entries, not only table columns.
 */
final class InfolistTest extends TestCase
{
    use RefreshDatabase;

    public function test_the_view_page_ships_text_and_icon_entries(): void
    {
        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
        $this->actingAs($user);

        $article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'title' => 'Headline',
            'status' => 'published',
        ]);

        $page = $this->get("/articles/{$article->getKey()}")
            ->assertOk()
            ->viewData('page');

        $this->assertSame('ResourceView', $page['component'] ?? null);

        $entries = $page['props']['schema']['infolist'] ?? [];
        $types = array_column($entries, 'type');

        $this->assertContains('text', $types);
        $this->assertContains('icon', $types);
        $this->assertContains('image', $types);
        $this->assertContains('keyvalue', $types);
        $this->assertContains('color', $types);
        $this->assertContains('code', $types);
        $this->assertContains('repeatable', $types);
        $this->assertContains('badge', $types);
        $this->assertContains('datetime', $types);
        $this->assertContains('money', $types);
        $this->assertContains('view', $types);
        $this->assertSame('title', $entries[0]['key'] ?? null);
        $this->assertSame('https://example.test/articles', $entries[0]['url'] ?? null);
        $this->assertSame('copy', $entries[0]['action']['key'] ?? null);
        $this->assertSame('Copy', $entries[0]['action']['label'] ?? null);
        $this->assertSame('status', $entries[1]['key'] ?? null);
        $this->assertSame('cover', $entries[2]['key'] ?? null);
        $this->assertSame('meta', $entries[3]['key'] ?? null);
        $this->assertSame('accent', $entries[4]['key'] ?? null);
        $this->assertSame('json', $entries[5]['language'] ?? null);
        $this->assertSame('label', $entries[6]['entries'][0]['key'] ?? null);
        $viewEntry = collect($entries)->firstWhere('type', 'view');
        $this->assertSame('article-title-preview', $viewEntry['view'] ?? null);
        $this->assertSame('published', $page['props']['record']['status'] ?? null);
    }

    public function test_an_empty_infolist_falls_back_to_table_columns(): void
    {
        $user = User::create([
            'tenant_id' => Tenant::create(['name' => 'Mine', 'slug' => 'mine'])->id,
            'name' => 'Operator',
            'email' => 'empty-infolist@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
        $this->actingAs($user);

        $post = Post::create([
            'title' => 'Plain',
            'status' => 'draft',
        ]);

        $page = $this->get("/posts/{$post->getKey()}")
            ->assertOk()
            ->viewData('page');

        $this->assertSame('ResourceView', $page['component'] ?? null);
        $this->assertSame([], $page['props']['schema']['infolist'] ?? ['missing']);
        $this->assertNotEmpty($page['props']['schema']['table']['columns'] ?? []);
    }

    public function test_an_infolist_action_posts_to_the_view_record(): void
    {
        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
        $this->actingAs($user);

        $article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'title' => 'Headline',
            'status' => 'published',
        ]);

        $this->postJson("/articles/{$article->getKey()}/infolist-action", ['action' => 'copy'])
            ->assertSuccessful();

        $this->assertSame('copied', $article->fresh()->status);
    }

    public function test_an_undeclared_infolist_action_is_not_found(): void
    {
        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
        $this->actingAs($user);

        $article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'title' => 'Headline',
            'status' => 'published',
        ]);

        $this->postJson("/articles/{$article->getKey()}/infolist-action", ['action' => 'nuke'])
            ->assertNotFound();
    }

    public function test_badge_entry_schema_includes_colors_and_default(): void
    {
        $entry = \Alxtexh\Panel\Infolists\BadgeEntry::make('status')
            ->colors(['draft' => 'neutral', 'published' => 'success'])
            ->defaultColor('warning');

        $schema = $entry->toSchema();

        $this->assertSame('badge', $schema['type']);
        $this->assertSame(['draft' => 'neutral', 'published' => 'success'], $schema['colors']);
        $this->assertSame('warning', $schema['defaultColor']);
    }

    public function test_datetime_entry_defaults_to_datetime_type(): void
    {
        $entry = \Alxtexh\Panel\Infolists\DateTimeEntry::make('created_at');
        $this->assertSame('datetime', $entry->toSchema()['type']);

        $entry->date();
        $this->assertSame('date', $entry->toSchema()['type']);

        $entry->dateTime();
        $this->assertSame('datetime', $entry->toSchema()['type']);
    }

    public function test_money_entry_schema_includes_currency_and_divisor(): void
    {
        $entry = \Alxtexh\Panel\Infolists\MoneyEntry::make('price')
            ->currency('EUR')
            ->divideBy(1);

        $schema = $entry->toSchema();

        $this->assertSame('money', $schema['type']);
        $this->assertSame('EUR', $schema['currency']);
        $this->assertSame(1, $schema['divideBy']);
    }

    public function test_money_entry_defaults_to_usd_and_100_divisor(): void
    {
        $schema = \Alxtexh\Panel\Infolists\MoneyEntry::make('amount')->toSchema();

        $this->assertSame('USD', $schema['currency']);
        $this->assertSame(100, $schema['divideBy']);
    }

    public function test_view_entry_schema_includes_named_view(): void
    {
        $entry = \Alxtexh\Panel\Infolists\ViewEntry::make('preview')
            ->label('Preview')
            ->view('invoice-summary');

        $schema = $entry->toSchema();

        $this->assertSame('view', $schema['type']);
        $this->assertSame('preview', $schema['key']);
        $this->assertSame('Preview', $schema['label']);
        $this->assertSame('invoice-summary', $schema['view']);
        $this->assertSame('entry', $schema['component']);
    }
}
