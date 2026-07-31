<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\Ticket;
use App\Models\TicketReply;
use App\Models\User;
use App\Support\TicketStats;
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Promise\Create;
use GuzzleHttp\Psr7\Response;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Gate;
use Psr\Http\Message\RequestInterface;
use Tests\TestCase;

/**
 * What the queue TELLS somebody - roadmap H.2, H.3, H.6 and 6.5.
 *
 * The numbers above a list, the badge on a row, the message that reaches a
 * phone out of hours, and the cap that stops a broken integration filling the
 * queue. Different features, one subject: whether the desk finds out.
 */
final class TicketQueueTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $operator;

    private User $opener;

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
    }

    private function ticket(string $subject, string $status = Ticket::OPEN, string $priority = 'normal'): Ticket
    {
        return Ticket::query()->forceCreate([
            'tenant_id' => $this->tenant->id,
            'opened_by' => $this->opener->id,
            'subject' => $subject,
            'status' => $status,
            'priority' => $priority,
        ]);
    }

    /* --------------------------------------------------------- the numbers */

    /**
     * UNANSWERED IS NOT THE SAME AS OPEN, and the difference is the whole
     * reason that card exists. An open ticket somebody has already replied to
     * is work in progress; an open ticket nobody has answered is a person
     * sitting in silence.
     */
    public function test_unanswered_counts_only_tickets_nobody_has_answered(): void
    {
        $answered = $this->ticket('Answered already');
        $this->ticket('Nobody has looked');
        $this->ticket('Also nobody');

        $this->actingAs($this->operator);
        $answered->addReply('On it.', TicketReply::PUBLIC);

        $stats = TicketStats::for();

        $this->assertSame(3, $stats['open']);
        $this->assertSame(2, $stats['unanswered']);
    }

    /** A resolved ticket is not waiting on anybody, answered or not. */
    public function test_a_resolved_ticket_is_not_unanswered(): void
    {
        $this->ticket('Closed without a reply', Ticket::RESOLVED);

        $this->assertSame(0, TicketStats::for()['unanswered']);
    }

    /**
     * MEDIAN, NEVER MEAN. One ticket left over a weekend drags an average past
     * every real number in the set, and somebody reads it as the desk failing
     * when four out of five were answered in minutes.
     */
    public function test_the_typical_first_reply_is_a_median_not_an_average(): void
    {
        $this->actingAs($this->operator);

        // Four fast, one catastrophic. The mean would be over three hours.
        foreach ([5, 10, 15, 20, 60 * 24] as $minutes) {
            $ticket = $this->ticket("Waited {$minutes}");

            $ticket->forceFill([
                'first_response_at' => $ticket->created_at->copy()->addMinutes($minutes),
            ])->save();
        }

        $this->assertSame(15, TicketStats::for()['medianFirstResponse']);
    }

    /**
     * NULL, NOT ZERO, when nothing has been answered. Zero is a claim - "we
     * answer instantly" - that a desk with no answered tickets has not earned.
     */
    public function test_the_typical_first_reply_is_null_when_nothing_is_answered(): void
    {
        $this->ticket('Waiting');

        $this->assertNull(TicketStats::for()['medianFirstResponse']);
    }

    /** Every day in the window appears, including the quiet ones. */
    public function test_the_volume_series_includes_days_with_nothing(): void
    {
        $this->ticket('One today');

        $volume = TicketStats::for()['volume'];

        $this->assertCount(14, $volume['labels']);
        $this->assertCount(14, $volume['opened']);
        $this->assertSame(1, $volume['opened'][13], 'Today should carry the ticket.');
        $this->assertSame(0, $volume['opened'][0]);
    }

    /** The summary is the operator's; a subscriber may not count the queue. */
    public function test_the_stats_endpoint_refuses_somebody_who_may_not_list_tickets(): void
    {
        $this->actingAs($this->opener)->getJson('/tickets/stats')->assertForbidden();
        $this->actingAs($this->operator)->getJson('/tickets/stats')->assertOk();
    }

    /* ---------------------------------------------------------- the badge */

    /**
     * A TICKET NOBODY HAS OPENED IS NEW TO THE DESK even with no replies - the
     * subject IS the first message. A badge that waited for a reply would
     * leave every brand-new ticket looking attended to.
     */
    public function test_a_new_ticket_is_unread_for_the_desk_and_not_for_its_opener(): void
    {
        $ticket = $this->ticket('Just raised');

        $this->assertTrue($ticket->isUnreadFor('desk'));
        $this->assertFalse($ticket->isUnreadFor('opener'));
    }

    /** Opening the thread clears it - no "mark as read" chore. */
    public function test_reading_the_thread_marks_that_side_read(): void
    {
        $ticket = $this->ticket('Just raised');

        $this->actingAs($this->operator)
            ->getJson("/tickets/{$ticket->id}/thread")
            ->assertOk();

        $this->assertFalse($ticket->fresh()->isUnreadFor('desk'));
    }

    /** And a later reply makes it unread again, for the other side. */
    public function test_a_reply_makes_the_ticket_unread_for_the_other_side(): void
    {
        $ticket = $this->ticket('Just raised');

        $this->actingAs($this->operator)->getJson("/tickets/{$ticket->id}/thread")->assertOk();

        $this->actingAs($this->opener);
        $ticket->addReply('Still broken.', TicketReply::PUBLIC);

        $this->assertTrue($ticket->fresh()->isUnreadFor('desk'));
    }

    /* ------------------------------------------------------- the rate cap */

    /**
     * THE CAP LIVES IN THE POLICY so it covers every path in, not just the
     * form. The next entry point is always the one an integration uses.
     */
    public function test_a_runaway_opener_is_capped(): void
    {
        config(['panel.ticketing.max_per_hour' => 3]);

        $this->actingAs($this->opener);

        for ($i = 0; $i < 3; $i++) {
            $this->assertTrue(Gate::allows('create', Ticket::class), "Ticket {$i} should be allowed.");
            $this->ticket("Attempt {$i}");
        }

        $this->assertFalse(Gate::allows('create', Ticket::class));
    }

    /** Zero means no cap, never no tickets. */
    public function test_a_zero_limit_turns_the_cap_off(): void
    {
        config(['panel.ticketing.max_per_hour' => 0, 'panel.ticketing.max_per_day' => 0]);

        $this->actingAs($this->opener);

        for ($i = 0; $i < 25; $i++) {
            $this->ticket("Attempt {$i}");
        }

        $this->assertTrue(Gate::allows('create', Ticket::class));
    }

    /** And one person's flood does not lock out their colleague. */
    public function test_the_cap_is_per_person(): void
    {
        config(['panel.ticketing.max_per_hour' => 2]);

        $this->actingAs($this->opener);
        $this->ticket('One');
        $this->ticket('Two');

        $this->assertFalse(Gate::allows('create', Ticket::class));

        $this->actingAs($this->operator);
        $this->assertTrue(Gate::allows('create', Ticket::class));
    }

    /* ------------------------------------------------------- the alert */

    /**
     * URGENT ONLY BY DEFAULT. An alert on every ticket is noise inside a week,
     * and a muted channel is worse than no channel - it is one everybody
     * believes is working.
     *
     * FAKED AT GUZZLE, NOT AT `Http::fake()`, for the reason
     * `TelegramAlertsTest` records: the channel builds its own client, so
     * `Http::fake()` intercepts nothing and every assertion here would pass
     * against zero requests - a test proving an alert that reaches nobody.
     */
    public function test_only_an_urgent_ticket_reaches_telegram(): void
    {
        $sent = $this->fakeTelegram();

        $this->ticket('Slow in the evenings', Ticket::OPEN, 'normal');

        $this->assertCount(0, $sent, 'A normal ticket should not page anybody.');

        $this->ticket('Whole estate is down', Ticket::OPEN, 'urgent');

        $this->assertCount(1, $sent);
        $this->assertStringContainsString('Whole estate is down', urldecode((string) $sent[0]->getBody()));
    }

    /**
     * A TICKET IS SAVED WHETHER OR NOT THE CHAT API ANSWERS. A failed
     * notification is one somebody misses; a failed save is a complaint that
     * vanished, and the customer has no way to know which happened.
     */
    public function test_a_ticket_survives_a_failed_alert(): void
    {
        $this->fakeTelegram(fails: true);

        $ticket = $this->ticket('Whole estate is down', Ticket::OPEN, 'urgent');

        $this->assertNotNull(Ticket::query()->find($ticket->getKey()));
    }

    /**
     * Bind a Guzzle client that records instead of sending.
     *
     * @return \ArrayObject<int, RequestInterface>
     */
    private function fakeTelegram(bool $fails = false): \ArrayObject
    {
        config([
            'services.telegram.token' => 'test-token',
            'services.telegram.chat_id' => '-100999',
        ]);

        /** @var \ArrayObject<int, RequestInterface> $sent */
        $sent = new \ArrayObject;

        $stack = HandlerStack::create();

        $stack->setHandler(static function ($request) use ($sent, $fails) {
            $sent[] = $request;

            return Create::promiseFor(new Response($fails ? 500 : 200, [], '{"ok":true}'));
        });

        $this->app->bind(Client::class, static fn (): Client => new Client(['handler' => $stack]));

        return $sent;
    }
}
