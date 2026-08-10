<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Gate;
use Alxtexh\Panel\Models\Ticket;
use Tests\TestCase;

/**
 * Roadmap 6.1 - THE POLICY MATRIX, WRITTEN BEFORE ANY TICKET SCREEN EXISTS.
 *
 * A ticket is the first record two sides read under different rules, and that
 * is exactly the kind of thing that is impossible to retrofit: once screens
 * exist, "can the opener see this" gets answered by whichever query the page
 * happened to write, and the answer differs per page. So the rules are pinned
 * here first, and the screens are built against them.
 *
 * THE THREE PARTIES, and every case below is one of them:
 *
 *   THE OPENER - raised the ticket, holds no ticket ability. Reads and replies
 *   to their OWN and nothing else. Cannot resolve.
 *
 *   THE OPERATOR - holds the abilities, opened nothing. Reads and resolves the
 *   whole ORGANISATION'S.
 *
 *   THE OUTSIDER - another organisation, however privileged. Reads nothing,
 *   and this is the case that must hold even when the other two change.
 */
final class TicketPolicyMatrixTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $rival;

    private User $opener;

    private User $operator;

    private User $stranger;

    private Ticket $ticket;

    protected function setUp(): void
    {
        parent::setUp();

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        // NO TICKET ABILITIES AT ALL. Being the person who asked is the
        // entitlement - a portal where a customer needs a granted permission
        // to read their own support request is a portal nobody can use.
        $this->opener = User::factory()
            ->withAbilities(['view_any_clients'])
            ->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);

        $this->operator = User::factory()
            ->withAbilities(['view_any_tickets', 'view_tickets', 'update_tickets'])
            ->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);

        // Privileged, and in the WRONG organisation. The dangerous shape.
        $this->stranger = User::factory()
            ->create(['tenant_id' => $this->rival->id, 'email_verified_at' => now()]);

        $this->ticket = Ticket::query()->forceCreate([
            'tenant_id' => $this->acme->id,
            'opened_by' => $this->opener->id,
            'subject' => 'No connection since Tuesday',
            'status' => Ticket::OPEN,
            'priority' => 'normal',
        ]);
    }

    /** Run `$body` as this user, with their organisation resolved. */
    private function as(User $user, callable $body): mixed
    {
        config(['panel.tenancy.resolver' => fn () => $user->tenant_id]);

        $this->actingAs($user);

        return $body();
    }

    /* ------------------------------------------------------------ the opener */

    public function test_the_opener_reads_their_own_ticket_holding_no_ticket_ability(): void
    {
        $this->assertTrue($this->as(
            $this->opener,
            fn (): bool => Gate::allows('view', $this->ticket),
        ));
    }

    /** And not a colleague's, in the same organisation. */
    public function test_the_opener_does_not_read_a_colleagues_ticket(): void
    {
        $theirs = Ticket::query()->forceCreate([
            'tenant_id' => $this->acme->id,
            'opened_by' => $this->operator->id,
            'subject' => "Somebody else's problem",
            'status' => Ticket::OPEN,
            'priority' => 'normal',
        ]);

        $this->assertFalse($this->as(
            $this->opener,
            fn (): bool => Gate::allows('view', $theirs),
        ));
    }

    public function test_the_opener_may_reply_to_their_own(): void
    {
        $this->assertTrue($this->as(
            $this->opener,
            fn (): bool => Gate::allows('reply', $this->ticket),
        ));
    }

    /**
     * AND MAY NOT RESOLVE IT. Resolution is an operator judgement about
     * whether the problem is fixed; a customer closing their own ticket is a
     * queue reporting success nobody verified.
     */
    public function test_the_opener_may_not_resolve_their_own(): void
    {
        $this->assertFalse($this->as(
            $this->opener,
            fn (): bool => Gate::allows('resolve', $this->ticket),
        ));
    }

    /** Nor delete it - that destroys the record of a complaint. */
    public function test_the_opener_may_not_delete_their_own(): void
    {
        $this->assertFalse($this->as(
            $this->opener,
            fn (): bool => Gate::allows('delete', $this->ticket),
        ));
    }

    /** Editing the RECORD is administration; the opener's channel is the reply. */
    public function test_the_opener_may_not_edit_the_record(): void
    {
        $this->assertFalse($this->as(
            $this->opener,
            fn (): bool => Gate::allows('update', $this->ticket),
        ));
    }

    /* ---------------------------------------------------------- the operator */

    public function test_the_operator_reads_a_ticket_they_did_not_open(): void
    {
        $this->assertTrue($this->as(
            $this->operator,
            fn (): bool => Gate::allows('view', $this->ticket),
        ));
    }

    public function test_the_operator_may_resolve_and_reply(): void
    {
        $this->as($this->operator, function (): void {
            $this->assertTrue(Gate::allows('resolve', $this->ticket));
            $this->assertTrue(Gate::allows('reply', $this->ticket));
        });
    }

    /** Deletion is narrower than resolution, and this operator lacks it. */
    public function test_resolving_does_not_imply_deleting(): void
    {
        $this->assertFalse($this->as(
            $this->operator,
            fn (): bool => Gate::allows('delete', $this->ticket),
        ));
    }

    /* -------------------------------------------------- the closed ticket */

    /**
     * A RESOLVED TICKET TAKES NO MORE REPLIES, from either side. Reopening is
     * an operator action on the record, so a late reply cannot silently
     * revive something the queue has already counted as done.
     */
    public function test_nobody_replies_to_a_resolved_ticket(): void
    {
        $this->ticket->forceFill(['status' => Ticket::RESOLVED])->save();

        $this->as($this->opener, fn () => $this->assertFalse(Gate::allows('reply', $this->ticket)));
        $this->as($this->operator, fn () => $this->assertFalse(Gate::allows('reply', $this->ticket)));
    }

    /* --------------------------------------------------------- the outsider */

    /**
     * THE CASE THAT MUST HOLD WHATEVER ELSE CHANGES. Another organisation's
     * member reads nothing here - not as an opener, because they opened
     * nothing, and not as an operator, because the tenant check runs FIRST.
     */
    public function test_another_organisations_member_reads_nothing(): void
    {
        $this->as($this->stranger, function (): void {
            $this->assertFalse(Gate::allows('view', $this->ticket));
            $this->assertFalse(Gate::allows('reply', $this->ticket));
            $this->assertFalse(Gate::allows('resolve', $this->ticket));
            $this->assertFalse(Gate::allows('delete', $this->ticket));
        });
    }

    /**
     * EVEN HOLDING EVERY TICKET ABILITY. This is the ordering the policy's
     * own note is about: "the opener always reads their own" and "an operator
     * reads the organisation's" are both entitlement rules, and either one
     * evaluated before the tenant boundary is a cross-tenant read that looks
     * like a feature.
     */
    public function test_a_privileged_outsider_still_reads_nothing(): void
    {
        $privileged = User::factory()
            ->withAbilities(['view_any_tickets', 'view_tickets', 'update_tickets', 'delete_tickets'])
            ->create(['tenant_id' => $this->rival->id, 'email_verified_at' => now()]);

        $this->as($privileged, function (): void {
            $this->assertFalse(Gate::allows('view', $this->ticket));
            $this->assertFalse(Gate::allows('resolve', $this->ticket));
            $this->assertFalse(Gate::allows('delete', $this->ticket));
        });
    }

    /* --------------------------------------------------------- no tenant */

    /** A null tenant denies, as everywhere else in the panel. */
    public function test_no_resolved_tenant_denies_everything(): void
    {
        config(['panel.tenancy.resolver' => fn () => null]);

        $this->actingAs($this->operator);

        $this->assertFalse(Gate::allows('view', $this->ticket));
        $this->assertFalse(Gate::allows('viewAny', Ticket::class));
        $this->assertFalse(Gate::allows('create', Ticket::class));
    }

    /* ----------------------------------------------------------- creating */

    /** Anybody signed into an organisation may ask it something. */
    public function test_anybody_in_the_organisation_may_open_a_ticket(): void
    {
        $this->assertTrue($this->as(
            $this->opener,
            fn (): bool => Gate::allows('create', Ticket::class),
        ));
    }
}
