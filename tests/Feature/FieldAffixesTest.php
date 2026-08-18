<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Field affixes serialise into Vue schema, and typing validation round-trips
 * through the existing precognitive store route (JSON, not Livewire).
 */
final class FieldAffixesTest extends TestCase
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

    public function test_prefix_and_suffix_appear_in_schema(): void
    {
        $schema = TextField::make('price')
            ->prefix('KES')
            ->suffix('.00')
            ->prefixIcon('currency')
            ->toSchema();

        $this->assertSame('KES', $schema['prefix']);
        $this->assertSame('.00', $schema['suffix']);
        $this->assertSame('currency', $schema['prefixIcon']);
    }

    public function test_copyable_serialises_a_suffix_copy_action(): void
    {
        $schema = TextField::make('api_key')
            ->hint('Keep this private')
            ->copyable()
            ->toSchema();

        $this->assertSame('Keep this private', $schema['hint']);
        $this->assertTrue($schema['suffixAction']['copy'] ?? false);
        $this->assertSame('Copy', $schema['suffixAction']['label'] ?? null);
    }

    public function test_prefix_and_suffix_actions_serialise(): void
    {
        $schema = TextField::make('slug')
            ->prefixAction(['label' => 'Open', 'url' => 'https://example.test'])
            ->suffixAction(['label' => 'Copy', 'copy' => true])
            ->hintAction(['label' => 'Copy', 'icon' => 'clipboard', 'copy' => true])
            ->toSchema();

        $this->assertSame('Open', $schema['prefixAction']['label'] ?? null);
        $this->assertSame('https://example.test', $schema['prefixAction']['url'] ?? null);
        $this->assertTrue($schema['suffixAction']['copy'] ?? false);
        $this->assertTrue($schema['hintAction']['copy'] ?? false);
    }

    public function test_precognitive_create_rejects_a_missing_required_field(): void
    {
        $this->postJson('/articles', ['status' => 'draft'], [
            'Precognition' => 'true',
            'Precognition-Validate-Only' => 'title',
        ])->assertStatus(422)->assertJsonValidationErrors('title');
    }

    public function test_precognitive_create_accepts_a_valid_field(): void
    {
        $this->postJson('/articles', [
            'title' => 'A real title',
            'status' => 'draft',
        ], [
            'Precognition' => 'true',
            'Precognition-Validate-Only' => 'title',
        ])->assertNoContent()->assertHeader('Precognition-Success', 'true');

        $this->assertDatabaseMissing('articles', ['title' => 'A real title']);
    }
}
