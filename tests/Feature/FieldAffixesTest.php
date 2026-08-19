<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Actions\Action;
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
        $this->assertArrayNotHasKey('key', $schema['suffixAction']);
        $this->assertArrayNotHasKey('post', $schema['suffixAction']);
        $this->assertArrayNotHasKey('key', $schema['prefixAction']);
        $this->assertArrayNotHasKey('post', $schema['prefixAction']);
    }

    public function test_named_affix_actions_serialise_a_post_key(): void
    {
        $schema = TextField::make('slug')
            ->suffixAction(
                Action::make('generate')->action(
                    static function (callable $get, callable $set): void {
                        $set('slug', 'x');
                    },
                ),
            )
            ->toSchema();

        $this->assertSame('generate', $schema['suffixAction']['key'] ?? null);
        $this->assertTrue($schema['suffixAction']['post'] ?? false);
        $this->assertSame('Generate', $schema['suffixAction']['label'] ?? null);
        $this->assertArrayNotHasKey('copy', $schema['suffixAction']);
        $this->assertArrayNotHasKey('url', $schema['suffixAction']);
    }

    public function test_suffix_action_post_generates_a_slug_from_title(): void
    {
        $payload = $this->postJson('/articles/form-action', [
            'field' => 'slug',
            'action' => 'generate',
            'values' => ['title' => 'Hello World', 'slug' => '', 'status' => 'draft'],
        ])->assertOk()->json();

        $this->assertSame('hello-world', $payload['values']['slug'] ?? null);
        $this->assertArrayHasKey('schema', $payload);
        $this->assertArrayHasKey('values', $payload);
        $this->assertDatabaseMissing('articles', ['slug' => 'hello-world']);
    }

    public function test_prefix_action_post_patches_the_field(): void
    {
        $payload = $this->postJson('/articles/form-action', [
            'field' => 'slug',
            'action' => 'upper',
            'values' => ['title' => 'Hello', 'slug' => 'hello-world', 'status' => 'draft'],
        ])->assertOk()->json();

        $this->assertSame('HELLO-WORLD', $payload['values']['slug'] ?? null);
    }

    public function test_a_missing_affix_action_name_is_rejected(): void
    {
        $this->postJson('/articles/form-action', [
            'field' => 'slug',
            'values' => ['title' => 'Hello'],
        ])->assertUnprocessable()->assertJsonValidationErrors('action');
    }

    public function test_a_wrong_affix_action_name_is_not_found(): void
    {
        $this->postJson('/articles/form-action', [
            'field' => 'slug',
            'action' => 'nuke',
            'values' => ['title' => 'Hello', 'slug' => ''],
        ])->assertNotFound();
    }

    public function test_copy_and_url_affixes_do_not_register_a_post_action(): void
    {
        $this->postJson('/articles/form-action', [
            'field' => 'title',
            'action' => 'generate',
            'values' => ['title' => 'Hello'],
        ])->assertNotFound();
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
