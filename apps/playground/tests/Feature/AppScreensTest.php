<?php

declare(strict_types=1);

namespace Tests\Feature;

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
 * Both are scoped TWICE - by tenant and by user - and the tests below check
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

        $rows = $this->prop('/apps/mail', 'messages')['rows'];

        $this->assertCount(3, $rows, "A colleague's inbox must not appear.");
    }

    /**
     * The rail's badges cost the SAME whether there is one folder in use or
     * seven - addendum C1.
     *
     * Asserting a fixed number would only pin today's implementation; asserting
     * that the number does not MOVE when the data spreads across every folder
     * and label is the property that actually matters. A per-folder count would
     * fail this by construction.
     */
    public function test_the_rail_costs_the_same_however_many_folders_are_in_use(): void
    {
        $this->mail($this->alice, 2, ['folder' => 'inbox', 'category' => 'Support']);

        $narrow = $this->railQueries();

        foreach (['sent', 'archived', 'spam', 'trash'] as $folder) {
            $this->mail($this->alice, 2, ['folder' => $folder, 'category' => 'Finance']);
        }

        $this->mail($this->alice, 1, ['is_starred' => true, 'category' => 'Security']);
        $this->mail($this->alice, 1, ['is_important' => true, 'category' => 'HR']);

        $this->assertSame(
            $narrow,
            $this->railQueries(),
            'The rail must not cost one query per folder or per label.',
        );
    }

    public function test_opening_a_thread_marks_it_read(): void
    {
        $id = $this->mail($this->alice, 1, ['is_read' => false])[0];

        $this->actingAs($this->alice)->get("/apps/mail/{$id}")->assertOk();

        $this->assertTrue(MailMessage::withoutGlobalScopes()->find($id)->is_read);
    }

    /* -------------------------------------------------------------- threads */

    /**
     * A CONVERSATION IS ONE ROW.
     *
     * A message and its reply share a subject; listing both is the artefact of
     * a flat list rather than a mailbox, and it is how an inbox of ten
     * conversations reads as twenty.
     */
    public function test_the_list_shows_one_row_per_thread(): void
    {
        $root = $this->mail($this->alice, 1, ['subject' => 'Invoice query'])[0];
        $this->mail($this->alice, 2, ['subject' => 'Invoice query', 'thread_id' => $root]);
        $this->mail($this->alice, 1, ['subject' => 'Something else']);

        $rows = $this->prop('/apps/mail', 'messages')['rows'];

        $this->assertCount(2, $rows);

        $thread = collect($rows)->firstWhere('subject', 'Invoice query');

        $this->assertSame(3, $thread['count'], 'The row must carry how many messages it stands for.');
    }

    /**
     * A message created without a thread is its OWN thread, never the null one.
     *
     * Collapsing groups by `thread_id`, so a null there does not mean "outside
     * every thread" - it means "in the null thread, with everything else". The
     * inbox showed fewer rows the more mail arrived.
     */
    public function test_a_message_with_no_thread_does_not_join_every_other_one(): void
    {
        $this->mail($this->alice, 3);

        $rows = $this->prop('/apps/mail', 'messages')['rows'];

        $this->assertCount(3, $rows);
    }

    /** The whole conversation, oldest first. */
    public function test_a_thread_page_shows_every_message_in_order(): void
    {
        $root = $this->mail($this->alice, 1, ['subject' => 'Router replacement', 'received_at' => now()->subHour()])[0];
        $this->mail($this->alice, 1, ['subject' => 'Router replacement', 'thread_id' => $root, 'received_at' => now()]);

        $this->actingAs($this->alice);

        $response = $this->get("/apps/mail/{$root}");
        $messages = $response->viewData('page')['props']['messages'];

        $this->assertCount(2, $messages);
        $this->assertSame($root, $messages[0]['id'], 'A conversation reads downwards.');
    }

    /** A colleague's thread is not reachable by guessing its id. */
    public function test_a_colleagues_thread_cannot_be_opened(): void
    {
        $id = $this->mail($this->bob, 1)[0];

        $this->actingAs($this->alice)->get("/apps/mail/{$id}")->assertNotFound();
    }

    /**
     * THE FROM COLUMN NAMES THE CORRESPONDENT, NOT THE SENDER.
     *
     * A thread's newest message is often the reader's own reply, so showing its
     * sender fills the inbox with the reader's own name - which identifies
     * nothing, because every row could say it.
     */
    public function test_the_list_names_the_other_party_when_the_last_word_was_ours(): void
    {
        $root = $this->mail($this->alice, 1, [
            'from_name' => 'Amina Achieng',
            'from_email' => 'amina@example.test',
            'to_name' => $this->alice->name,
            'to_email' => $this->alice->email,
            'received_at' => now()->subHour(),
        ])[0];

        // Alice answered, so hers is the newest message in the thread.
        $this->mail($this->alice, 1, [
            'thread_id' => $root,
            'from_name' => $this->alice->name,
            'from_email' => $this->alice->email,
            'to_name' => 'Amina Achieng',
            'to_email' => 'amina@example.test',
            'received_at' => now(),
        ]);

        $rows = $this->prop('/apps/mail', 'messages')['rows'];

        $this->assertCount(1, $rows);
        $this->assertSame('Amina Achieng', $rows[0]['from']);
    }

    /* ----------------------------------------------------------- categories */

    /** A label narrows a folder; it is not a folder of its own. */
    public function test_a_category_filters_within_the_folder(): void
    {
        $this->mail($this->alice, 2, ['category' => 'Security']);
        $this->mail($this->alice, 3, ['category' => 'Finance']);

        $rows = $this->prop('/apps/mail?category=Security', 'messages')['rows'];

        $this->assertCount(2, $rows);
    }

    /** An unknown label is ignored rather than showing an empty mailbox. */
    public function test_an_unknown_category_is_ignored(): void
    {
        $this->mail($this->alice, 2, ['category' => 'Security']);

        $rows = $this->prop('/apps/mail?category=Nonsense', 'messages')['rows'];

        $this->assertCount(2, $rows);
    }

    /** Important, like starred, is a flag across folders. */
    public function test_the_important_view_crosses_folders_but_excludes_trash(): void
    {
        $this->mail($this->alice, 1, ['is_important' => true, 'folder' => 'inbox']);
        $this->mail($this->alice, 1, ['is_important' => true, 'folder' => 'sent']);
        $this->mail($this->alice, 1, ['is_important' => true, 'folder' => 'trash']);

        $rows = $this->prop('/apps/mail?folder=important', 'messages')['rows'];

        $this->assertCount(2, $rows);
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

        $rows = $this->prop('/apps/mail?folder=starred', 'messages')['rows'];

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

        $list = $this->prop('/apps/chat', 'conversations');

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

        $thread = $this->prop("/apps/chat?id={$conversation->id}", 'thread');

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
     * Read a prop off the rendered page.
     *
     * These were deferred props and are not any more: navigation on both
     * screens preserves state, so the component never remounts and the deferred
     * follow-up never fired - the reading pane simply never filled. Deferral is
     * for aggregates that would block first paint, and neither of these is one.
     *
     * @return array<mixed>
     */
    /** How many grouped counts one mailbox render costs. */
    private function railQueries(): int
    {
        $this->actingAs($this->alice);

        DB::flushQueryLog();
        DB::enableQueryLog();
        $this->get('/apps/mail')->assertOk();
        $queries = array_column(DB::getQueryLog(), 'query');
        DB::disableQueryLog();

        return count(array_filter(
            $queries,
            static fn (string $q): bool => str_contains($q, 'group by') && str_contains($q, 'mail_messages'),
        ));
    }

    private function prop(string $url, string $prop): array
    {
        return $this->actingAs($this->alice)
            ->get($url)
            ->assertOk()
            ->viewData('page')['props'][$prop];
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
                'from_name' => 'Sender '.$i,
                'from_email' => "s{$i}@example.test",
                'subject' => 'Subject '.$i,
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
            'contact_email' => strtolower($name).'@example.test',
            'status' => 'online',
            'last_message' => 'Hello',
            'last_message_at' => now(),
            'unread_count' => 0,
        ]);
    }
}
