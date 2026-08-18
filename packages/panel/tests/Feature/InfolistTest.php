<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
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
        $this->assertSame('title', $entries[0]['key'] ?? null);
        $this->assertSame('status', $entries[1]['key'] ?? null);
        $this->assertSame('published', $page['props']['record']['status'] ?? null);
    }
}
