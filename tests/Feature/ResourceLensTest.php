<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Post;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Resources\PostResource;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

final class ResourceLensTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::create([
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
    }

    public function test_lens_metadata_is_in_the_cached_schema(): void
    {
        $lenses = PostResource::schema()['lenses'] ?? [];

        $this->assertSame(
            [['key' => 'draft', 'label' => 'Draft only']],
            $lenses,
        );
    }

    public function test_a_lens_scopes_the_index_query(): void
    {
        Post::query()->create(['title' => 'Draft one', 'status' => 'draft']);
        Post::query()->create(['title' => 'Live one', 'status' => 'published']);

        $props = $this->get('/posts?lens=draft')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertSame('draft', $props['lens'] ?? null);
        $this->assertCount(1, $props['records']);
        $this->assertSame('Draft one', $props['records'][0]['title'] ?? null);
    }
}
