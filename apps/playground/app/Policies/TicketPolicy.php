<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\Ticket;
use App\Models\User;
use PanelKit\Panel\Support\Abilities;
use PanelKit\Panel\Support\TenantContext;

/**
 * Who may read and act on a ticket - roadmap 6.1, written BEFORE any screen.
 *
 * A TICKET IS THE FIRST RECORD TWO SIDES READ UNDER DIFFERENT RULES, and that
 * is the whole reason this policy exists rather than another
 * `TenantResourcePolicy` subclass. Every other record answers one question -
 * is it yours - and a ticket answers two:
 *
 *   THE OPENER ALWAYS READS THEIR OWN. Somebody who raised a ticket can read
 *   it and reply to it even holding no ticket ability at all, because being
 *   the person who asked IS the entitlement. A subscriber portal where the
 *   customer needs a granted permission to see their own support request is
 *   a portal nobody can use.
 *
 *   THE OPERATOR READS THE ORGANISATION'S, without having opened any. That is
 *   an ordinary ability check - `view_any_tickets` and friends - and it is
 *   what a support rota needs.
 *
 * NEITHER READS ANOTHER ORGANISATION'S, ever, and that check comes FIRST.
 * Ordering matters here in a way it does not elsewhere: "the opener always
 * reads their own" is a rule that, evaluated before the tenant boundary,
 * would let a user carried into the wrong tenant context read a ticket
 * across it. Tenant first, then entitlement.
 *
 * CLOSING IS NOT REPLYING. The opener may reply forever and may not resolve;
 * resolution is an operator judgement about whether the problem is fixed, and
 * a customer who can mark their own ticket resolved is a queue that reports
 * success it did not achieve.
 */
final class TicketPolicy
{
    public function viewAny(User $user): bool
    {
        // A list is the operator's surface. The opener's own tickets reach
        // them through their own screen, which constrains by `opened_by`
        // rather than relying on this.
        return $this->hasTenant() && $this->may($user, 'viewAny');
    }

    /**
     * MAY YOU OPEN A SCREEN OF YOUR OWN TICKETS - which is a different
     * question from `viewAny`, and the reason the opener's side works at all.
     *
     * `viewAny` asks whether you may list the RESOURCE, and for tickets that
     * means the organisation's: it is the operator's grant. Asking it of a
     * subscriber would leave them unable to open a screen showing nothing but
     * their own requests, which is the portal being useless in the name of
     * security.
     *
     * So this grants the SCREEN and nothing else. What appears on it is
     * settled by `MyTicketResource`'s `constrain()` - the gate says you may
     * look, the query decides at what - and every record request still
     * answers to `view` below.
     */
    public function viewOwn(User $user): bool
    {
        return $this->hasTenant();
    }

    public function view(User $user, ?Ticket $ticket = null): bool
    {
        if (! $this->hasTenant()) {
            return false;
        }

        if ($ticket === null) {
            return $this->may($user, 'view') || $this->may($user, 'create');
        }

        // TENANT FIRST. See the class note: reversing these two lines is a
        // cross-tenant read that looks like a feature.
        if (! $this->owns($ticket)) {
            return false;
        }

        return $this->opened($user, $ticket) || $this->may($user, 'view');
    }

    /** Anybody signed into an organisation may ask it something. */
    public function create(User $user): bool
    {
        return $this->hasTenant();
    }

    /**
     * Editing the RECORD - subject, priority, assignment - is operator work.
     * The opener's way to add to a ticket is the conversation, not this.
     */
    public function update(User $user, ?Ticket $ticket = null): bool
    {
        if (! $this->hasTenant()) {
            return false;
        }

        if ($ticket !== null && ! $this->owns($ticket)) {
            return false;
        }

        return $this->may($user, 'update');
    }

    /**
     * REPLYING IS ITS OWN QUESTION, and it is the one the opener passes.
     *
     * Not folded into `update`, because they are different acts with
     * different audiences: adding a message is what the conversation is for,
     * changing the record is administration. A resolved ticket is closed to
     * both - reopening is an operator action, so a reply after resolution
     * cannot silently revive it.
     */
    public function reply(User $user, Ticket $ticket): bool
    {
        if (! $this->hasTenant() || ! $this->owns($ticket)) {
            return false;
        }

        if ($ticket->status === Ticket::RESOLVED) {
            return false;
        }

        return $this->opened($user, $ticket) || $this->may($user, 'update');
    }

    /**
     * MAY YOU WRITE - AND READ - A NOTE THE CUSTOMER NEVER SEES.
     *
     * THE SHARPEST ABILITY IN THIS POLICY, and the reason it is its own
     * method. An internal note says things nobody writes for a customer:
     * "third time this month, escalate", "waive the fee, do not tell them
     * why". A ticketing system that leaks one has done more damage than one
     * that loses a ticket.
     *
     * SO IT IS THE OPERATOR'S GRANT AND NOTHING ELSE - never the opener's,
     * however the request arrives, and no matter that they may read every
     * other line of the same thread. Being the person who asked entitles you
     * to the conversation, not to the desk's private margin notes.
     *
     * READ AND WRITE ARE THE SAME QUESTION HERE, deliberately: anybody
     * entitled to write on the desk's side is on the desk. Splitting them
     * would create a role that can add notes and cannot see the ones already
     * there, which is worse than either.
     *
     * IT IS THE ABILITY ALONE THAT DECIDES, not the ability plus "and you did
     * not open this one". An operator who raises a ticket themselves is still
     * an operator, and the extra clause would have made this stricter than
     * `resolve` - two rules about the same side of the desk disagreeing about
     * where it ends.
     */
    public function note(User $user, Ticket $ticket): bool
    {
        return $this->hasTenant()
            && $this->owns($ticket)
            && $this->may($user, 'update');
    }

    /**
     * RESOLUTION IS AN OPERATOR JUDGEMENT. The opener may reply forever and
     * may not close: a customer marking their own ticket resolved is a queue
     * reporting success nobody verified.
     */
    public function resolve(User $user, Ticket $ticket): bool
    {
        return $this->hasTenant()
            && $this->owns($ticket)
            && $this->may($user, 'update');
    }

    /**
     * DELETING A TICKET DESTROYS THE RECORD OF A COMPLAINT, so it is the
     * narrowest grant here - never the opener's, whatever else they hold.
     */
    public function delete(User $user, ?Ticket $ticket = null): bool
    {
        if (! $this->hasTenant()) {
            return false;
        }

        if ($ticket !== null && ! $this->owns($ticket)) {
            return false;
        }

        return $this->may($user, 'delete');
    }

    public function restore(User $user, ?Ticket $ticket = null): bool
    {
        return $this->delete($user, $ticket);
    }

    public function forceDelete(User $user, ?Ticket $ticket = null): bool
    {
        return $this->delete($user, $ticket);
    }

    private function hasTenant(): bool
    {
        return app(TenantContext::class)->currentKey() !== null;
    }

    /** The ticket belongs to the organisation this request resolved. */
    private function owns(Ticket $ticket): bool
    {
        $context = app(TenantContext::class);

        // Dedicated-database tenancy: the connection is the boundary and the
        // row carries no tenant column to compare - the same reading
        // `TenantResourcePolicy` takes.
        if (! $context->shouldScopeByColumn()) {
            return $context->isIsolated();
        }

        $key = $context->currentKey();

        return $key !== null && (string) $ticket->tenant_id === (string) $key;
    }

    private function opened(User $user, Ticket $ticket): bool
    {
        return (string) $ticket->opened_by === (string) $user->getKey();
    }

    private function may(User $user, string $action): bool
    {
        return $user->hasPermission(Abilities::name($action, 'tickets'));
    }
}
