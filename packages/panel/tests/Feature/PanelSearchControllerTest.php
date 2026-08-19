<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Post;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

final class PanelSearchControllerTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

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
    }

    private function article(string $title): void
    {
        Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'title' => $title,
            'slug' => null,
            'status' => 'draft',
        ]);
    }

    private function createPost(string $title, string $status = 'draft'): void
    {
        Post::create([
            'title' => $title,
            'status' => $status,
        ]);
    }

    public function test_panel_search_returns_grouped_records_shape(): void
    {
        $this->article('Alpha First');
        $this->createPost('Alpha Post', 'published');

        $response = $this->getJson('/panel-search?q='.urlencode('Alpha'))->assertOk();
        $data = $response->json();

        $this->assertIsArray($data['groups'] ?? null);
        $this->assertNotEmpty($data['groups']);

        foreach ($data['groups'] as $group) {
            $this->assertIsString($group['label'] ?? '');
            $this->assertIsArray($group['items'] ?? null);

            foreach ($group['items'] as $item) {
                $this->assertArrayHasKey('id', $item);
                $this->assertIsString($item['title'] ?? '');
                $this->assertArrayHasKey('subtitle', $item);
                $this->assertArrayHasKey('href', $item);
                $this->assertIsString($item['href']);
            }
        }
    }

    public function test_panel_search_sorts_groups_by_resource_weight_and_items_by_relevance(): void
    {
        $this->article('Alpha First');
        $this->article('Second Alpha');

        // `PostResource` ships with a higher `searchWeight()` in our test fixtures.
        $this->createPost('Alpha Post', 'published');

        $response = $this->getJson('/panel-search?q='.urlencode('Alpha'))->assertOk();
        $data = $response->json();

        $groups = $data['groups'] ?? [];
        $this->assertNotEmpty($groups);

        $this->assertSame('Posts', $groups[0]['label']);

        $articles = null;
        foreach ($groups as $group) {
            if (($group['label'] ?? null) === 'Articles') {
                $articles = $group;
                break;
            }
        }

        $this->assertIsArray($articles['items'] ?? null);

        $titles = array_map(static fn (array $i): string => (string) ($i['title'] ?? ''), $articles['items']);

        $this->assertSame('Alpha First', $titles[0] ?? null);
        $this->assertSame('Second Alpha', $titles[1] ?? null);
    }
}

