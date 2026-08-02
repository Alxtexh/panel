<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Models\Ticket;
use PanelKit\Panel\Models\TicketReply;
use Tests\TestCase;

/**
 * THE CONVERSATION, AND THE ONE SENTENCE THAT MUST NEVER TRAVEL.
 *
 * A ticketing system that loses a ticket has annoyed somebody. One that shows
 * a customer the note reading "third time this month, fob him off" has done
 * damage nobody can take back - so the internal note is what this file is
 * mostly about, and it is asserted at every layer it passes through:
 *
 *   THE DEFAULT: a reply written with no visibility set is internal, so a
 *   forgotten value hides an answer rather than publishing a note.
 *   THE QUERY: an opener's thread does not CONTAIN one, rather than
 *   containing one the front end is trusted to hide.
 *   THE GATE: writing one needs the operator's ability, whatever the request
 *   body claims.
 */
final class TicketThreadTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $operator;

    private User $opener;

    private Ticket $ticket;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        config(['panel.tenancy.resolver' => fn () => $this->tenant->id]);

        $this->operator = User::factory()
            ->withAbilities(['view_any_tickets', 'view_tickets', 'update_tickets'])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $this->opener = User::factory()
            ->withAbilities(['view_any_clients'])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $this->ticket = Ticket::query()->forceCreate([
            'tenant_id' => $this->tenant->id,
            'opened_by' => $this->opener->id,
            'subject' => 'No connection since Tuesday',
            'status' => Ticket::OPEN,
            'priority' => 'normal',
        ]);
    }

    /* ------------------------------------------------------- the note leak */

    /** A reply with no visibility set is INTERNAL - the recoverable mistake. */
    public function test_a_reply_defaults_to_internal(): void
    {
        $reply = TicketReply::query()->forceCreate([
            'tenant_id' => $this->tenant->id,
            'ticket_id' => $this->ticket->id,
            'author_id' => $this->operator->id,
            'body' => 'Somebody forgot to say.',
        ]);

        $this->assertTrue($reply->fresh()->isInternal());
    }

    /**
     * THE ASSERTION THIS FILE EXISTS FOR. The opener's thread does not contain
     * the note - not hidden, not flagged, ABSENT. A note the browser never
     * received cannot be revealed by a devtools tab.
     */
    public function test_an_internal_note_never_reaches_the_opener(): void
    {
        $this->actingAs($this->operator);
        $this->ticket->addReply('We are looking into it.', TicketReply::PUBLIC);
        $this->ticket->addReply('Third time this month, escalate.', TicketReply::INTERNAL);

        $body = $this->actingAs($this->opener)
            ->getJson("/reseller/my-tickets/{$this->ticket->id}/thread")
            ->assertOk()
            ->getContent();

        $this->assertStringContainsString('We are looking into it.', $body);
        $this->assertStringNotContainsString('escalate', $body);
        $this->assertStringNotContainsString('Third time', $body);
    }

    /** And the operator's thread does contain it - or the feature is pointless. */
    public function test_the_operator_sees_both(): void
    {
        $this->actingAs($this->operator);
        $this->ticket->addReply('We are looking into it.', TicketReply::PUBLIC);
        $this->ticket->addReply('Third time this month, escalate.', TicketReply::INTERNAL);

        $this->actingAs($this->operator)
            ->getJson("/tickets/{$this->ticket->id}/thread")
            ->assertOk()
            ->assertJsonPath('canNote', true)
            ->assertJsonCount(2, 'replies');
    }

    /**
     * AND THE OPENER CANNOT WRITE ONE, however the request is shaped. The
     * screen offers no toggle; this is what happens when somebody sends the
     * field anyway.
     */
    public function test_the_opener_cannot_write_an_internal_note(): void
    {
        $this->actingAs($this->opener)
            ->post("/reseller/my-tickets/{$this->ticket->id}/thread", [
                'body' => 'A note about myself',
                'visibility' => TicketReply::INTERNAL,
            ])
            ->assertForbidden();

        $this->assertSame(0, TicketReply::query()->withoutGlobalScopes()->count());
    }

    /* ------------------------------------------------------------ replying */

    public function test_the_opener_can_reply_to_their_own_ticket(): void
    {
        $this->actingAs($this->opener)
            ->post("/reseller/my-tickets/{$this->ticket->id}/thread", [
                'body' => 'Still nothing this morning.',
                'visibility' => TicketReply::PUBLIC,
            ])
            ->assertRedirect();

        $reply = TicketReply::query()->withoutGlobalScopes()->firstOrFail();

        $this->assertSame($this->opener->id, $reply->author_id);
        $this->assertSame(TicketReply::PUBLIC, $reply->visibility);
    }

    /** A resolved ticket takes no more replies, from either side. */
    public function test_a_resolved_ticket_refuses_replies(): void
    {
        $this->ticket->forceFill(['status' => Ticket::RESOLVED])->save();

        $this->actingAs($this->opener)
            ->post("/reseller/my-tickets/{$this->ticket->id}/thread", [
                'body' => 'One more thing',
                'visibility' => TicketReply::PUBLIC,
            ])
            ->assertForbidden();
    }

    /* --------------------------------------------------- the response clock */

    /**
     * `first_response_at` IS THE DESK ANSWERING, and neither of the two things
     * that look like it counts.
     *
     * An internal note is not an answer - nobody outside the desk can read it.
     * The customer replying to their own ticket is not the desk responding.
     * Counting either makes the response-time report flatter than the truth,
     * which is the direction nobody thinks to question.
     */
    public function test_only_a_public_reply_from_the_desk_starts_the_response_clock(): void
    {
        $this->actingAs($this->opener);
        $this->ticket->addReply('Adding more detail.', TicketReply::PUBLIC);

        $this->assertNull($this->ticket->fresh()->first_response_at, 'The opener answered themselves.');

        $this->actingAs($this->operator);
        $this->ticket->addReply('Noting for the team.', TicketReply::INTERNAL);

        $this->assertNull($this->ticket->fresh()->first_response_at, 'A note is not an answer.');

        $this->ticket->addReply('An engineer is on the way.', TicketReply::PUBLIC);

        $this->assertNotNull($this->ticket->fresh()->first_response_at);
    }

    /** And it is stamped once - a second reply does not move it. */
    public function test_the_response_clock_does_not_restart(): void
    {
        $this->actingAs($this->operator);
        $this->ticket->addReply('First answer.', TicketReply::PUBLIC);

        $first = $this->ticket->fresh()->first_response_at;

        $this->travel(5)->minutes();
        $this->ticket->addReply('Second answer.', TicketReply::PUBLIC);

        $this->assertEquals($first, $this->ticket->fresh()->first_response_at);
    }

    /* ---------------------------------------------------------- the cap */

    /**
     * A LONG THREAD IS CAPPED, AND SAYS SO.
     *
     * Unbounded in principle: a ticket reopened weekly for a year gets slower
     * every month, and it degrades for one customer at a time so nobody
     * notices. Silently returning the last few hundred is the version that
     * loses an argument - somebody scrolls up, does not find what they were
     * promised, and concludes the ticket was edited.
     *
     * THE MOST RECENT ARE KEPT, because a conversation is read from the
     * bottom. The oldest message is already the subject at the top of the
     * page.
     */
    public function test_a_long_thread_is_capped_and_the_reader_is_told(): void
    {
        $this->actingAs($this->operator);

        $rows = [];

        for ($i = 1; $i <= 305; $i++) {
            $rows[] = [
                'tenant_id' => $this->tenant->id,
                'ticket_id' => $this->ticket->id,
                'author_id' => $this->operator->id,
                'visibility' => TicketReply::PUBLIC,
                'body' => "message {$i}",
                'created_at' => now()->addSeconds($i),
                'updated_at' => now()->addSeconds($i),
            ];
        }

        TicketReply::query()->insert($rows);

        $body = $this->actingAs($this->operator)
            ->getJson("/tickets/{$this->ticket->id}/thread")
            ->assertOk()
            ->assertJsonPath('capped', true)
            ->assertJsonPath('total', 305)
            ->assertJsonCount(300, 'replies')
            ->getContent();

        // The newest survived and the oldest were dropped - not the reverse.
        $this->assertStringContainsString('message 305', $body);
        $this->assertStringNotContainsString('message 1"', $body);
    }

    /** And a short one is not flagged, or the notice becomes noise. */
    public function test_a_short_thread_is_not_flagged_as_capped(): void
    {
        $this->actingAs($this->operator);
        $this->ticket->addReply('Just the one.', TicketReply::PUBLIC);

        $this->actingAs($this->operator)
            ->getJson("/tickets/{$this->ticket->id}/thread")
            ->assertOk()
            ->assertJsonPath('capped', false)
            ->assertJsonPath('total', 1);
    }

    /* ------------------------------------------------------ another tenant */

    /** Nothing about a thread escapes the organisation that owns the ticket. */
    public function test_another_organisation_cannot_read_the_thread(): void
    {
        $this->actingAs($this->operator);
        $this->ticket->addReply('Internal only.', TicketReply::INTERNAL);

        $rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        $stranger = User::factory()
            ->withAbilities(['view_any_tickets', 'view_tickets', 'update_tickets'])
            ->create(['tenant_id' => $rival->id, 'email_verified_at' => now()]);

        config(['panel.tenancy.resolver' => fn () => $rival->id]);

        $response = $this->actingAs($stranger)
            ->getJson("/tickets/{$this->ticket->id}/thread");

        $this->assertContains($response->status(), [403, 404]);
        $this->assertStringNotContainsString('Internal only.', $response->getContent());
    }
}
