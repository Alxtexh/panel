<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Http\Middleware\HandleInertiaRequests;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Models\Ticket;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\Abilities;
use Alxtexh\Panel\Ticketing\TicketingPlugin;
use RuntimeException;
use Tests\TestCase;

/**
 * TWO SCREENS OVER ONE TABLE - roadmap 6.3 and 6.4.
 *
 * `TicketPolicyMatrixTest` pinned who may do what. This one pins what each
 * SIDE actually shows and lets you do, which is a separate question: a policy
 * that is right and a query that lists everybody's tickets still shows a
 * subscriber their neighbour's complaint.
 *
 * THE ASSERTION THAT MATTERS MOST is that the opener's list contains only
 * their own. It is the one thing no permission check can catch - the opener
 * is entitled to read A ticket, so nothing 403s; the boundary here is a WHERE
 * clause, and a WHERE clause has no gate to fail.
 */
final class TicketScreensTest extends TestCase
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
            ->withAbilities(['view_any_tickets', 'view_tickets', 'create_tickets', 'update_tickets'])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        /*
         * A NARROW ROLE THAT MENTIONS NO TICKET. Not a roleless user and not
         * the factory's default, which is an administrator - both would prove
         * something other than what this file is about. This is somebody who
         * legitimately works here and has never been granted anything to do
         * with the queue.
         */
        $this->opener = User::factory()
            ->withAbilities(['view_any_clients'])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
    }

    private function ticket(User $opener, string $subject, string $status = Ticket::OPEN): Ticket
    {
        return Ticket::query()->forceCreate([
            'tenant_id' => $this->tenant->id,
            'opened_by' => $opener->id,
            'subject' => $subject,
            'status' => $status,
            'priority' => 'normal',
        ]);
    }

    /* ------------------------------------------------------- the two lists */

    /** The queue is the whole organisation's, which is what a rota needs. */
    public function test_the_operator_queue_lists_tickets_they_did_not_open(): void
    {
        $this->ticket($this->opener, 'No connection since Tuesday');
        $this->ticket($this->operator, 'Router keeps rebooting');

        $subjects = $this->subjectsOn('/tickets', $this->operator);

        $this->assertContains('No connection since Tuesday', $subjects);
        $this->assertContains('Router keeps rebooting', $subjects);
    }

    /**
     * AND THE OPENER'S LIST IS ONLY THEIRS.
     *
     * No permission check can catch a regression here: the opener is entitled
     * to read a ticket, so a leaked row 200s exactly like an owned one. The
     * boundary is `MyTicketResource`'s `constrain()`, and this is the test
     * that would notice it going missing.
     */
    public function test_the_opener_list_contains_only_their_own(): void
    {
        $this->ticket($this->opener, 'Mine, and I opened it');
        $this->ticket($this->operator, "Somebody else's problem");

        $subjects = $this->subjectsOn('/reseller/my-tickets', $this->opener);

        $this->assertSame(['Mine, and I opened it'], $subjects);
    }

    /**
     * INCLUDING THE COUNT, which is why the predicate is on `constrain()`
     * rather than `query()`. A count that ignored it would print the
     * organisation's total above a list of one person's tickets - a number
     * that is wrong in the direction people notice and cannot explain.
     */
    public function test_the_opener_total_counts_only_their_own(): void
    {
        $this->ticket($this->opener, 'Mine');
        $this->ticket($this->operator, 'Theirs');
        $this->ticket($this->operator, 'Also theirs');

        /*
         * ASKED FOR ON A PARTIAL RELOAD, because the total is DEFERRED - it
         * must never sit in front of the rows. That is also why it needs its
         * own test: a deferred prop is resolved by a second request, on a
         * fresh query, and a constraint that lives only on the first one would
         * come back with the organisation's count.
         */
        $this->actingAs($this->opener)
            ->get('/reseller/my-tickets', [
                'X-Inertia' => 'true',
                'X-Inertia-Version' => (string) (new HandleInertiaRequests)->version(request()),
                'X-Inertia-Partial-Component' => 'ResourceIndex',
                'X-Inertia-Partial-Data' => 'total',
            ])
            ->assertOk()
            ->assertJsonPath('props.total', 1);
    }

    /* ------------------------------------------------------ the two gates */

    /**
     * The opener reaches their own screen holding no ticket ability, and is
     * refused the queue. Both halves matter: the first is the portal being
     * usable, the second is it not being the operator's.
     */
    public function test_the_opener_reaches_their_screen_and_not_the_queue(): void
    {
        $this->actingAs($this->opener)->get('/reseller/my-tickets')->assertOk();
        $this->actingAs($this->opener)->get('/tickets')->assertForbidden();
    }

    /* --------------------------------------------------------- opening one */

    /**
     * THE OPENER IS STAMPED FROM THE SESSION AND THE PAYLOAD IS IGNORED.
     *
     * `opened_by` is half the policy - it is what "read your own" reads - so
     * accepting it from a request body would be both a way to file a
     * complaint under somebody else's name and a way to hand them read access
     * to it. Neither form exposes the field; this proves that sending it
     * anyway changes nothing.
     */
    public function test_opening_a_ticket_stamps_the_signed_in_user(): void
    {
        $this->actingAs($this->opener)
            ->post('/reseller/my-tickets', [
                'subject' => 'I am offline',
                'priority' => 'urgent',
                // The interesting part of this request.
                'opened_by' => $this->operator->id,
                'tenant_id' => 9999,
            ])
            ->assertRedirect();

        $ticket = Ticket::query()->withoutGlobalScopes()->firstOrFail();

        $this->assertSame($this->opener->id, $ticket->opened_by);
        $this->assertSame($this->tenant->id, $ticket->tenant_id);
    }

    /* ------------------------------------------------ the permission matrix */

    /**
     * THE OPENER'S SIDE CONTRIBUTES NO ABILITIES.
     *
     * Every other resource contributes seven names. There is no such thing as
     * a role that lets somebody read their own support requests - they read
     * them because they opened them - so `view_any_my_tickets` would be
     * grantable, would mean nothing, and would teach whoever administers the
     * matrix that it lies.
     */
    public function test_the_openers_resource_adds_nothing_to_the_permission_matrix(): void
    {
        $names = Abilities::all();

        $this->assertContains('view_any_tickets', $names);

        foreach ($names as $name) {
            $this->assertStringNotContainsString('my_tickets', $name);
        }
    }

    /* --------------------------------------------- the counterpart guard */

    /**
     * BOTH ENDS OR NEITHER - roadmap 6.4.
     *
     * A queue with no way to raise a ticket has nothing in it; a form that
     * raises tickets into a portal where nobody reads them is worse than
     * absent, because somebody types their problem into it and waits. The
     * plugin refuses, naming the missing portal, rather than installing the
     * half it can and staying quiet.
     */
    public function test_the_plugin_refuses_to_install_one_end_without_the_other(): void
    {
        config(['panel.ticketing.opener' => 'a-portal-nobody-registered']);

        $panel = app(PanelManager::class)->panel('admin');

        $this->assertNotNull($panel);

        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('a-portal-nobody-registered');

        (new TicketingPlugin)->appliesTo($panel);
    }

    /** And it installs a DIFFERENT class into each portal. */
    public function test_each_portal_gets_its_own_ticket_resource(): void
    {
        $panels = app(PanelManager::class);

        $this->assertArrayHasKey('tickets', $panels->resourcesFor('admin'));
        $this->assertArrayNotHasKey('my-tickets', $panels->resourcesFor('admin'));

        $this->assertArrayHasKey('my-tickets', $panels->resourcesFor('reseller'));
        $this->assertArrayNotHasKey('tickets', $panels->resourcesFor('reseller'));
    }

    /**
     * @return list<string>
     */
    private function subjectsOn(string $url, User $user): array
    {
        $props = $this->actingAs($user)->get($url)->assertOk()
            ->viewData('page')['props'];

        return array_values(array_map(
            static fn (array $row): string => (string) $row['subject'],
            $props['records'],
        ));
    }
}
