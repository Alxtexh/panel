<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

final class GlobalSearchTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'search@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
        $this->actingAs($this->user);
    }

    public function test_search_endpoint_returns_grouped_results(): void
    {
        $this->getJson('/panel-search?q=test')
            ->assertOk()
            ->assertJsonStructure(['groups']);
    }

    public function test_short_query_returns_empty(): void
    {
        $this->getJson('/panel-search?q=a')
            ->assertOk()
            ->assertJsonPath('groups', []);
    }
}
