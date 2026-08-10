<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\Ai\AiCredentials;
use Tests\TestCase;

/**
 * Bring-your-own-key for the assistant - E.1.
 *
 * The property under test is not "the key is stored"; it is the three
 * guarantees around it: encrypted at rest, never echoed back whole, and
 * layered OVER the environment rather than replacing it - an installation
 * wired through `.env` at deploy time must keep working untouched.
 */
final class AiCredentialsTest extends TestCase
{
    use RefreshDatabase;

    private function credentials(): AiCredentials
    {
        return app(AiCredentials::class);
    }

    public function test_a_brought_key_is_applied_over_the_environment(): void
    {
        config(['ai.default' => 'openai', 'ai.providers.anthropic.key' => null]);

        $this->credentials()->set('anthropic', 'sk-ant-test-1234');
        $this->credentials()->apply();

        $this->assertSame('anthropic', config('ai.default'));
        $this->assertSame('sk-ant-test-1234', config('ai.providers.anthropic.key'));
    }

    public function test_apply_is_a_no_op_when_nothing_is_brought(): void
    {
        config(['ai.default' => 'openai', 'ai.providers.openai.key' => 'env-key']);

        $this->credentials()->apply();

        $this->assertSame('openai', config('ai.default'));
        $this->assertSame('env-key', config('ai.providers.openai.key'));
    }

    /** ENCRYPTED AT REST: the plaintext never touches the settings table. */
    public function test_the_stored_key_is_not_plaintext(): void
    {
        $this->credentials()->set('anthropic', 'sk-ant-super-secret');

        $stored = DB::table('panel_settings')->pluck('value')->implode(' ');

        $this->assertStringNotContainsString('sk-ant-super-secret', $stored);
    }

    /** NEVER ECHOED WHOLE: a screen gets the last four characters, no more. */
    public function test_the_masked_key_reveals_only_the_tail(): void
    {
        $this->credentials()->set('anthropic', 'sk-ant-super-secret-9876');

        $this->assertSame('••••9876', $this->credentials()->maskedKey());
    }

    public function test_an_unknown_provider_is_refused(): void
    {
        $this->expectException(\InvalidArgumentException::class);

        $this->credentials()->set('made-up-llm', 'whatever');
    }

    public function test_availability_reflects_byok_or_environment(): void
    {
        config(['ai.default' => 'openai', 'ai.providers.openai.key' => null]);
        $this->assertFalse($this->credentials()->available());

        config(['ai.providers.openai.key' => 'env-key']);
        $this->assertTrue($this->credentials()->available());

        config(['ai.providers.openai.key' => null]);
        $this->credentials()->set('anthropic', 'sk-ant-test');
        $this->assertTrue($this->credentials()->available());

        $this->credentials()->clear();
        $this->assertFalse($this->credentials()->available());
    }

    /**
     * AN UNCONFIGURED ASSISTANT IS A SENTENCE, NOT A 500. The stream endpoint
     * answers with a frame the drawer can show; nothing throws, and nothing
     * reaches a provider.
     */
    public function test_the_stream_endpoint_degrades_to_a_setup_hint_without_any_key(): void
    {
        config(['ai.default' => 'openai', 'ai.providers.openai.key' => null]);

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        $response = $this->actingAs($user)->post('/apps/assistant/stream', [
            'message' => 'hello',
            'conversation' => null,
        ]);

        $response->assertOk();
        $this->assertStringContainsString('not configured', $response->streamedContent());
    }

    /* -------------------------------------------------- the settings page */

    private function operator(array $abilities): User
    {
        $slug = 'acme-'.fake()->unique()->numberBetween(1, 999999);
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => $slug]);

        return User::factory()->withAbilities($abilities)
            ->create(['tenant_id' => $tenant->id, 'email_verified_at' => now()]);
    }

    public function test_the_settings_page_is_gated_on_manage_assistant(): void
    {
        $this->actingAs($this->operator(['view_operations']))
            ->get('/settings/assistant')->assertForbidden();

        $this->actingAs($this->operator(['manage_assistant']))
            ->get('/settings/assistant')->assertOk();
    }

    public function test_saving_through_the_page_stores_and_masks(): void
    {
        $user = $this->operator(['manage_assistant']);

        $this->actingAs($user)->put('/settings/assistant', [
            'provider' => 'anthropic',
            'key' => 'sk-ant-page-test-4321',
        ])->assertRedirect();

        $props = $this->actingAs($user)->get('/settings/assistant')
            ->assertOk()->viewData('page')['props'];

        $this->assertSame('anthropic', $props['provider']);
        $this->assertSame('••••4321', $props['maskedKey']);
        $this->assertTrue($props['byok']);

        // The page never carries the secret itself - only the masked tail.
        $this->assertArrayNotHasKey('key', $props);

        $this->actingAs($user)->delete('/settings/assistant')->assertRedirect();

        $this->assertFalse($this->credentials()->configured());
    }

    public function test_a_user_without_the_ability_cannot_write_credentials(): void
    {
        $this->actingAs($this->operator(['view_operations']))
            ->put('/settings/assistant', ['provider' => 'anthropic', 'key' => 'sk-whatever-123'])
            ->assertForbidden();

        $this->assertFalse($this->credentials()->configured());
    }
}
