<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Ai\Middleware\MeterPerTenant;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\RateLimiter;
use Laravel\Ai\Models\Conversation;
use RuntimeException;
use Tests\TestCase;

/**
 * Conversations belong to one organisation, and one organisation cannot spend
 * another's budget.
 *
 * THE SDK'S TABLES ARRIVE WITHOUT A TENANT. That is not a fault on its part - it
 * has no idea this application is multi-tenant - but it means a chat history is
 * unscoped until something scopes it, and a chat history is among the most
 * revealing things here: a transcript of what somebody asked about their own
 * customers, in their own words, including the questions they thought better of.
 *
 * THE SCOPE IS ATTACHED, NOT FORKED. `laravel/ai` is pinned at 0.10.1 and its
 * models are not swappable by config, so the boundary is added through Eloquent's
 * static hooks. A fork would have to be re-applied on every upgrade, silently, by
 * whoever runs `composer update`.
 */
final class AiTenancyAndMeteringTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private Tenant $theirs;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);

        RateLimiter::clear("panel-ai:{$this->mine->id}");
        RateLimiter::clear("panel-ai:{$this->theirs->id}");
    }

    protected function tearDown(): void
    {
        tenancy()->end();

        parent::tearDown();
    }

    private function conversationFor(Tenant $tenant, string $title): Conversation
    {
        tenancy()->end();
        tenancy()->initialize($tenant);

        $conversation = new Conversation;
        $conversation->id = (string) \Illuminate\Support\Str::uuid();
        $conversation->title = $title;
        $conversation->save();

        return $conversation;
    }

    /* -------------------------------------------------------- conversations */

    /** A conversation is stamped with the organisation that created it. */
    public function test_a_conversation_records_its_tenant(): void
    {
        $conversation = $this->conversationFor($this->mine, 'About a subscriber');

        $this->assertSame(
            $this->mine->id,
            DB::table('agent_conversations')->where('id', $conversation->id)->value('tenant_id'),
        );
    }

    /**
     * THE ONE THAT MATTERS. Another organisation's transcript is invisible, and
     * it is invisible through the ordinary query - nobody has to remember to
     * filter.
     */
    public function test_another_tenants_conversation_is_not_visible(): void
    {
        $this->conversationFor($this->theirs, 'Their private conversation');
        $mine = $this->conversationFor($this->mine, 'Mine');

        $titles = Conversation::query()->pluck('title')->all();

        $this->assertSame(['Mine'], $titles);
        $this->assertNotNull(Conversation::query()->find($mine->id));
    }

    /** And it really does exist - the scope is hiding it, not the absence of data. */
    public function test_the_hidden_conversation_exists(): void
    {
        $this->conversationFor($this->theirs, 'Theirs');

        $this->assertSame(1, DB::table('agent_conversations')->count());
    }

    /**
     * NO TENANT MEANS NOTHING IS VISIBLE, matching every other scope in the
     * panel. A conversation whose organisation is unknown is shown to nobody
     * rather than to everybody.
     */
    public function test_no_tenant_shows_no_conversations(): void
    {
        $this->conversationFor($this->mine, 'Mine');

        tenancy()->end();

        $this->assertSame(0, Conversation::query()->count());
    }

    /* ------------------------------------------------------------ metering */

    public function test_a_prompt_without_an_organisation_is_refused(): void
    {
        tenancy()->end();

        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('cannot be attributed or billed');

        (new MeterPerTenant)->handle($this->prompt(), fn ($p) => $p);
    }

    public function test_prompts_are_counted_against_the_organisation(): void
    {
        tenancy()->initialize($this->mine);
        config(['panel.ai.prompts_per_hour' => 3]);

        $middleware = new MeterPerTenant;

        for ($i = 0; $i < 3; $i++) {
            $middleware->handle($this->prompt(), fn ($p) => $p);
        }

        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('reached its assistant limit');

        $middleware->handle($this->prompt(), fn ($p) => $p);
    }

    /**
     * KEYED BY TENANT, so one organisation exhausting its allowance leaves every
     * other one untouched. A per-user key would be widened by adding colleagues;
     * an IP key would punish a whole office behind one address.
     */
    public function test_one_organisation_cannot_exhaust_anothers_allowance(): void
    {
        config(['panel.ai.prompts_per_hour' => 2]);

        $middleware = new MeterPerTenant;

        tenancy()->initialize($this->mine);
        $middleware->handle($this->prompt(), fn ($p) => $p);
        $middleware->handle($this->prompt(), fn ($p) => $p);

        tenancy()->end();
        tenancy()->initialize($this->theirs);

        // Not throwing IS the assertion.
        $middleware->handle($this->prompt(), fn ($p) => $p);

        $this->assertTrue(true);
    }

    public function test_the_limit_can_be_turned_off(): void
    {
        tenancy()->initialize($this->mine);
        config(['panel.ai.prompts_per_hour' => 0]);

        $middleware = new MeterPerTenant;

        for ($i = 0; $i < 10; $i++) {
            $middleware->handle($this->prompt(), fn ($p) => $p);
        }

        $this->assertTrue(true);
    }

    /**
     * A stand-in for the SDK's prompt object.
     *
     * The middleware only passes it through, so its shape is irrelevant to what
     * is under test - and constructing a real `AgentPrompt` would drag a provider
     * into a test about counting.
     */
    private function prompt(): object
    {
        return new class {};
    }
}
