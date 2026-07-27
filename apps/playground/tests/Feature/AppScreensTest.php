<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Http\Middleware\HandleInertiaRequests;
use App\Models\ChatConversation;
use App\Models\ChatMessage;
use App\Models\MailMessage;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

/**
 * The mail and chat screens.
 *
 * Both are scoped TWICE — by tenant and by user — and the tests below check
 * each separately, because they cover different failures: the tenant scope
 * stops another organisation's data being reachable at all, and the user filter
 * stops a colleague's inbox being readable within one organisation.
 */
final class AppScreensTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $alice;

    private User $bob;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->tenantB = Tenant::create(['name' => 'B', 'slug' => 'b']);

        $this->alice = User::factory()->create(['tenant_id' => $this->tenantA->id, 'email_verified_at' => now()]);
        // Same tenant as Alice: this is the colleague case.
        $this->bob = User::factory()->create(['tenant_id' => $this->tenantA->id, 'email_verified_at' => now()]);
    }

    /* ---------------------------------------------------------------- mail */

    public function test_the_mailbox_lists_only_the_acting_users_mail(): void
    {
        $this->mail($this->alice, 3);
        $this->mail($this->bob, 5);

        $rows = $this->deferred('/apps/mail', 'apps/Mail', 'messages')['rows'];

        $this->assertCount(3, $rows, "A colleague's inbox must not appear.");
    }

    /** The folder rail's badges are ONE grouped query, not one per folder. */
    public function test_folder_counts_are_a_single_query(): void
    {
        $this->mail($this->alice, 6);

        $this->actingAs($this->alice);

        DB::enableQueryLog();
        $this->get('/apps/mail')->assertOk();
        $queries = array_column(DB::getQueryLog(), 'query');
        DB::disableQueryLog();

        $grouped = array_filter($queries, static fn (string $q): bool => str_contains($q, 'group by') && str_contains($q, 'mail_messages'));

        $this->assertLessThanOrEqual(
            1,
            count($grouped),
            'Six folders must not mean six counts — addendum C1.',
        );
    }

    public function test_opening_a_message_marks_it_read(): void
    {
        $id = $this->mail($this->alice, 1, ['is_read' => false])[0];

        $this->deferred("/apps/mail?id={$id}", 'apps/Mail', 'message');

        $this->assertTrue(MailMessage::withoutGlobalScopes()->find($id)->is_read);
    }

    public function test_a_message_can_be_starred_and_moved(): void
    {
        $id = $this->mail($this->alice, 1)[0];

        $this->actingAs($this->alice)
            ->patchJson("/apps/mail/{$id}", ['action' => 'star'])
            ->assertOk();

        $this->assertTrue(MailMessage::withoutGlobalScopes()->find($id)->is_starred);

        $this->actingAs($this->alice)
            ->patchJson("/apps/mail/{$id}", ['action' => 'move', 'folder' => 'archived'])
            ->assertOk();

        $this->assertSame('archived', MailMessage::withoutGlobalScopes()->find($id)->folder);
    }

    /** `starred` is a flag across folders, not a destination to move into. */
    public function test_a_message_cannot_be_moved_into_the_starred_view(): void
    {
        $id = $this->mail($this->alice, 1)[0];

        $this->actingAs($this->alice)
            ->patchJson("/apps/mail/{$id}", ['action' => 'move', 'folder' => 'starred'])
            ->assertStatus(422);
    }

    public function test_a_colleagues_message_cannot_be_modified(): void
    {
        $id = $this->mail($this->bob, 1)[0];

        $this->actingAs($this->alice)
            ->patchJson("/apps/mail/{$id}", ['action' => 'star'])
            ->assertNotFound();

        $this->assertFalse(MailMessage::withoutGlobalScopes()->find($id)->is_starred);
    }

    public function test_the_starred_view_crosses_folders_but_excludes_trash(): void
    {
        $this->mail($this->alice, 1, ['is_starred' => true, 'folder' => 'inbox']);
        $this->mail($this->alice, 1, ['is_starred' => true, 'folder' => 'archived']);
        $this->mail($this->alice, 1, ['is_starred' => true, 'folder' => 'trash']);

        $rows = $this->deferred('/apps/mail?folder=starred', 'apps/Mail', 'messages')['rows'];

        $this->assertCount(2, $rows, 'Starred spans folders, but deleted mail is deleted.');
    }

    /** A stale bookmark shows the inbox rather than a 404. */
    public function test_an_unknown_folder_falls_back_to_the_inbox(): void
    {
        $this->mail($this->alice, 2);

        $this->actingAs($this->alice)
            ->get('/apps/mail?folder=nonsense')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('folder', 'inbox'));
    }

    /* ---------------------------------------------------------------- chat */

    public function test_the_conversation_list_is_scoped_to_the_user(): void
    {
        $this->conversation($this->alice, 'Amina');
        $this->conversation($this->bob, 'Felix');

        $list = $this->deferred('/apps/chat', 'apps/Chat', 'conversations');

        $this->assertCount(1, $list);
        $this->assertSame('Amina', $list[0]['name']);
    }

    /**
     * A thread is BOUNDED. The natural `orderBy('sent_at')->get()` reads the
     * whole conversation to reach its end, which is fine at forty messages and
     * ruinous at forty thousand.
     */
    public function test_a_thread_is_bounded_and_returned_oldest_first(): void
    {
        $conversation = $this->conversation($this->alice, 'Amina');

        for ($i = 0; $i < 80; $i++) {
            ChatMessage::withoutGlobalScopes()->create([
                'conversation_id' => $conversation->id,
                'tenant_id' => $this->tenantA->id,
                'direction' => 'incoming',
                'body' => "message {$i}",
                'sent_at' => now()->subMinutes(80 - $i),
            ]);
        }

        $thread = $this->deferred("/apps/chat?id={$conversation->id}", 'apps/Chat', 'thread');

        $this->assertCount(60, $thread['messages'], 'The thread must be capped.');
        // Newest 60, displayed oldest first.
        $this->assertSame('message 20', $thread['messages'][0]['body']);
        $this->assertSame('message 79', $thread['messages'][59]['body']);
    }

    public function test_sending_a_message_updates_the_conversation_preview(): void
    {
        $conversation = $this->conversation($this->alice, 'Amina');

        $this->actingAs($this->alice)
            ->postJson("/apps/chat/{$conversation->id}", ['body' => 'On my way.'])
            ->assertOk()
            ->assertJsonPath('message.direction', 'outgoing');

        $fresh = ChatConversation::withoutGlobalScopes()->find($conversation->id);

        // Denormalised so the list can order and preview without a subquery
        // per row.
        $this->assertSame('On my way.', $fresh->last_message);
        $this->assertNotNull($fresh->last_message_at);
    }

    public function test_a_message_body_is_bounded(): void
    {
        $conversation = $this->conversation($this->alice, 'Amina');

        $this->actingAs($this->alice)
            ->postJson("/apps/chat/{$conversation->id}", ['body' => str_repeat('a', 2001)])
            ->assertStatus(422);
    }

    public function test_cannot_send_into_a_colleagues_conversation(): void
    {
        $conversation = $this->conversation($this->bob, 'Felix');

        $this->actingAs($this->alice)
            ->postJson("/apps/chat/{$conversation->id}", ['body' => 'hello'])
            ->assertNotFound();

        $this->assertSame(0, ChatMessage::withoutGlobalScopes()->count());
    }

    /** The tenant scope is the outer wall, independent of the user filter. */
    public function test_another_tenants_conversation_is_unreachable(): void
    {
        $foreign = User::factory()->create(['tenant_id' => $this->tenantB->id, 'email_verified_at' => now()]);
        $conversation = $this->conversation($foreign, 'Outsider');

        $this->actingAs($this->alice)
            ->postJson("/apps/chat/{$conversation->id}", ['body' => 'hello'])
            ->assertNotFound();
    }

    /* --------------------------------------------------------------- setup */

    /**
     * Read a deferred prop, which is where the queries actually run.
     *
     * `$component` is the INERTIA component name — `apps/Mail`, not `Mail`.
     * A mismatch is not an error: Inertia decides the partial does not apply to
     * this component and returns the full page, so the prop is simply absent
     * and every assertion below it passes vacuously.
     *
     * @return array<mixed>
     */
    private function deferred(string $url, string $component, string $prop): array
    {
        return $this->actingAs($this->alice)
            ->withHeaders([
                'X-Inertia' => 'true',
                'X-Inertia-Version' => (string) app(HandleInertiaRequests::class)->version(request()),
                'X-Inertia-Partial-Component' => $component,
                'X-Inertia-Partial-Data' => $prop,
            ])
            ->getJson($url)
            ->assertOk()
            ->json("props.{$prop}");
    }

    /**
     * @param  array<string, mixed>  $overrides
     * @return list<int>
     */
    private function mail(User $user, int $count, array $overrides = []): array
    {
        $ids = [];

        for ($i = 0; $i < $count; $i++) {
            $ids[] = MailMessage::withoutGlobalScopes()->create([
                'user_id' => $user->id,
                'tenant_id' => $user->tenant_id,
                'folder' => 'inbox',
                'from_name' => 'Sender ' . $i,
                'from_email' => "s{$i}@example.test",
                'subject' => 'Subject ' . $i,
                'preview' => 'Preview',
                'body' => 'Body',
                'is_read' => true,
                'is_starred' => false,
                'has_attachment' => false,
                'received_at' => now()->subMinutes($i),
                ...$overrides,
            ])->id;
        }

        return $ids;
    }

    private function conversation(User $user, string $name): ChatConversation
    {
        return ChatConversation::withoutGlobalScopes()->create([
            'user_id' => $user->id,
            'tenant_id' => $user->tenant_id,
            'contact_name' => $name,
            'contact_email' => strtolower($name) . '@example.test',
            'status' => 'online',
            'last_message' => 'Hello',
            'last_message_at' => now(),
            'unread_count' => 0,
        ]);
    }
}
