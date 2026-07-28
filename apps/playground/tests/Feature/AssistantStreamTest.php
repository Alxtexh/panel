<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * The assistant has a way in, and its answers arrive as they are written.
 *
 * IT HAD NEITHER. `PanelAssistant` was written, tenant-scoped, metered and
 * tested, and nothing in the panel could reach it - the same disappearing-page
 * problem as the backup screens, one layer down. A model with no endpoint is a
 * class with tests.
 *
 * THE MODEL IS NOT CALLED HERE. A test that reaches a provider is a test that
 * fails when somebody else's service is slow, costs money per run, and cannot
 * run in CI - so what is asserted is the transport: the route exists, it is
 * guarded, it refuses nonsense, and it answers with a stream rather than a page.
 */
final class AssistantStreamTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /**
     * THERE IS NO ASSISTANT PAGE, and that is the assertion.
     *
     * It is a drawer in the topbar now - opened over whatever screen somebody is
     * on, so the filters and the half-typed form behind it survive the question.
     * A page left behind after the drawer landed would be a second, diverging
     * copy of the same conversation, reachable by anyone with the old link.
     */
    public function test_there_is_no_dedicated_assistant_page(): void
    {
        $this->actingAs($this->user)->get('/apps/assistant')->assertNotFound();
    }

    /** The drawer is in the shell, so it arrives with every authenticated page. */
    public function test_the_assistant_is_reachable_from_an_ordinary_screen(): void
    {
        $this->actingAs($this->user)->get('/dashboard')->assertOk();

        $this->assertStringContainsString(
            'AssistantDrawer',
            file_get_contents(resource_path('js/components/AppSidebarHeader.vue')),
            'The topbar no longer mounts the assistant, so nothing can open it.',
        );
    }

    public function test_it_is_behind_authentication(): void
    {
        $this->post('/apps/assistant/stream', ['message' => 'hello'])->assertRedirect();
    }

    /**
     * A MESSAGE IS REQUIRED AND BOUNDED. The endpoint bills per token; an
     * unbounded body is an unbounded invoice, and an empty one is a paid-for
     * round trip that asks nothing.
     */
    public function test_an_empty_message_is_refused(): void
    {
        $this->actingAs($this->user)
            ->post('/apps/assistant/stream', ['message' => ''])
            ->assertSessionHasErrors('message');
    }

    public function test_an_oversized_message_is_refused(): void
    {
        $this->actingAs($this->user)
            ->post('/apps/assistant/stream', ['message' => str_repeat('a', 2_001)])
            ->assertSessionHasErrors('message');
    }

    /**
     * IT ANSWERS AS A STREAM, not as a page.
     *
     * The header is what tells the browser to hand the body over in pieces
     * rather than waiting for the end - without it the client code works and
     * the reply still arrives all at once, which is the whole benefit gone with
     * no symptom.
     */
    public function test_it_answers_with_an_event_stream(): void
    {
        $response = $this->actingAs($this->user)
            ->post('/apps/assistant/stream', ['message' => 'hello']);

        $response->assertOk();
        $response->assertHeader('Content-Type', 'text/event-stream; charset=UTF-8');

        /*
         * `X-Accel-Buffering` IS NOT DECORATION. nginx buffers proxied responses
         * by default, which turns a stream into a single delivery at the end -
         * invisible in development, where nothing sits in front of PHP.
         */
        $response->assertHeader('X-Accel-Buffering', 'no');
    }

    /**
     * A FAILING PROVIDER IS A FRAME, NOT A DROPPED CONNECTION.
     *
     * There is no API key in the test environment, so the call fails - which is
     * exactly the case worth asserting. An abandoned stream leaves the client
     * showing a cursor that never resolves, and nothing distinguishes that from
     * a slow answer, so it waits forever.
     */
    public function test_a_provider_failure_is_reported_in_the_stream(): void
    {
        $body = $this->actingAs($this->user)
            ->post('/apps/assistant/stream', ['message' => 'hello'])
            ->streamedContent();

        $this->assertStringContainsString('data: ', $body, 'The stream carried no frames at all.');
        $this->assertStringContainsString('"type":"error"', $body);
    }

    /**
     * AND THE FRAME CARRIES NO PROVIDER DETAIL. Provider errors quote API keys,
     * request bodies and prompt text, and this one goes to a browser.
     */
    public function test_the_error_frame_leaks_nothing(): void
    {
        config()->set('ai.providers.openai.key', 'sk-a-very-secret-key');

        $body = $this->actingAs($this->user)
            ->post('/apps/assistant/stream', ['message' => 'hello'])
            ->streamedContent();

        $this->assertStringNotContainsString('sk-a-very-secret-key', $body);
    }
}
