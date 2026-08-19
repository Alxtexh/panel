<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * live() form-state returns schema and values, not only option lists.
 */
final class FormStateLiveTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
        $this->actingAs($this->user);

        Article::withoutGlobalScopes()->create([
            'tenant_id' => $tenant->id,
            'title' => 'Seed',
            'status' => 'draft',
        ]);
    }

    public function test_form_state_hides_a_field_after_live(): void
    {
        $payload = $this->postJson('/articles/form-state', [
            'field' => 'title',
            'values' => ['title' => 'hide-status', 'status' => 'draft'],
        ])->assertOk()->json();

        $this->assertArrayHasKey('options', $payload);
        $this->assertArrayHasKey('schema', $payload);
        $this->assertArrayHasKey('values', $payload);

        $status = collect($payload['schema']['fields'] ?? [])->firstWhere('key', 'status');

        $this->assertNotNull($status);
        $this->assertTrue($status['hidden'] ?? false);
        $this->assertFalse($status['disabled'] ?? false);
    }

    public function test_form_state_disables_a_field_and_patches_values(): void
    {
        $payload = $this->postJson('/articles/form-state', [
            'field' => 'title',
            'values' => ['title' => 'lock-status', 'status' => 'published'],
        ])->assertOk()->json();

        $status = collect($payload['schema']['fields'] ?? [])->firstWhere('key', 'status');

        $this->assertNotNull($status);
        $this->assertTrue($status['disabled'] ?? false);
        $this->assertFalse($status['hidden'] ?? false);
        $this->assertSame('draft', $payload['values']['status'] ?? null);
    }
}
