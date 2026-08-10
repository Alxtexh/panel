<?php

declare(strict_types=1);

namespace App\Policies;

use Illuminate\Contracts\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable;
use Alxtexh\Panel\Models\Ticket;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Policies\TicketPolicy as PackagedTicketPolicy;
use Alxtexh\Panel\Support\Ability;

/**
 * ONE MODEL, TWO DESKS - and, as with `PlanPolicy`, that is forced rather than
 * chosen.
 *
 * LARAVEL RESOLVES A POLICY BY MODEL, NEVER BY PANEL. `Ticket` is exposed
 * twice: the packaged desk inside a tenant portal, and the superadmin portal's
 * cross-tenant list at `/superadmin/all-tickets`. Different panels, different
 * contexts, different ability names - and exactly one policy class between
 * them, because they name the same model. This is the second time that shape
 * has come up here; `PlanPolicy` is where it is written out at length.
 *
 * THE PACKAGED POLICY IS RIGHT AND STAYS IN CHARGE. It refuses when no tenant
 * is resolved, which is correct for every tenant portal and exactly wrong for a
 * desk whose entire job is seeing across tenants - so the central branch is
 * added IN FRONT of it rather than replacing it. Delegation, not inheritance:
 * the packaged class is final, and this composes it rather than forking its
 * rules, so a fix there is a fix here.
 *
 * THE CENTRAL BRANCH IS NARROW ON PURPOSE. It answers only inside a panel that
 * declared itself central, and only for somebody holding the superadmin
 * resource's OWN abilities (`*_all_tickets`, derived from its key). Both halves
 * matter: without the context check the abilities would open the packaged desk
 * too, and without the ability check the context alone would let any operator
 * in a central portal read every tenant's tickets.
 */
final class TicketPolicy
{
    public function __construct(private readonly PackagedTicketPolicy $packaged) {}

    public function viewAny(Authenticatable&Authorizable $user): bool
    {
        return $this->centrally($user, 'view_any_all_tickets')
            || $this->packaged->viewAny($user);
    }

    public function view(Authenticatable&Authorizable $user, ?Ticket $ticket = null): bool
    {
        return $this->centrally($user, 'view_all_tickets')
            || $this->packaged->view($user, $ticket);
    }

    /*
     * EVERY PUBLIC METHOD OF THE PACKAGED POLICY IS FORWARDED, INCLUDING THE
     * ONES THIS CLASS HAS NOTHING TO ADD TO.
     *
     * Composition replaces the class Laravel resolves, so a method that is not
     * declared here does not exist as far as the Gate is concerned - it does
     * not fall through to the wrapped object, because `Gate` looks the method
     * up with `method_exists`. Omitting `viewOwn`, `reply`, `note` and
     * `resolve` therefore did not leave them alone: it DELETED them, and the
     * opener's own ticket screen started answering 403 while the superadmin
     * list this class was written for worked perfectly.
     *
     * `__call` would not rescue it either, for the same `method_exists`
     * reason. If the packaged policy grows a method, it must be added here -
     * which is the honest cost of wrapping a final class, and cheaper than
     * the alternative of forking its rules.
     */
    public function viewOwn(Authenticatable&Authorizable $user): bool
    {
        return $this->packaged->viewOwn($user);
    }

    public function create(Authenticatable&Authorizable $user): bool
    {
        return $this->packaged->create($user);
    }

    public function reply(Authenticatable&Authorizable $user, Ticket $ticket): bool
    {
        return $this->packaged->reply($user, $ticket);
    }

    public function note(Authenticatable&Authorizable $user, Ticket $ticket): bool
    {
        return $this->packaged->note($user, $ticket);
    }

    public function resolve(Authenticatable&Authorizable $user, Ticket $ticket): bool
    {
        return $this->packaged->resolve($user, $ticket);
    }

    /*
     * EVERY RECORD ARGUMENT IS NULLABLE, MATCHING THE PACKAGED SIGNATURES.
     *
     * A list screen asks "may this action be offered at all" before it has a
     * row in hand, so the panel calls these with the user alone. Declaring a
     * required `Ticket` turned that question into an ArgumentCountError - a
     * 500 on a screen whose permissions were perfectly correct. Delegating to
     * a policy means matching its shape, not approximating it.
     */
    public function update(Authenticatable&Authorizable $user, ?Ticket $ticket = null): bool
    {
        return $this->centrally($user, 'update_all_tickets')
            || $this->packaged->update($user, $ticket);
    }

    public function delete(Authenticatable&Authorizable $user, ?Ticket $ticket = null): bool
    {
        return $this->centrally($user, 'delete_all_tickets')
            || $this->packaged->delete($user, $ticket);
    }

    public function restore(Authenticatable&Authorizable $user, ?Ticket $ticket = null): bool
    {
        return $this->centrally($user, 'restore_all_tickets')
            || $this->packaged->restore($user, $ticket);
    }

    public function forceDelete(Authenticatable&Authorizable $user, ?Ticket $ticket = null): bool
    {
        return $this->centrally($user, 'force_delete_all_tickets')
            || $this->packaged->forceDelete($user, $ticket);
    }

    /**
     * A central panel AND the superadmin resource's own ability.
     *
     * `Ability::allows` rather than a bare `can`, because it is the guarded
     * check that works on a user model without the reference app's own
     * `hasPermission()` wrapper - the same one every packaged policy uses.
     */
    private function centrally(Authenticatable&Authorizable $user, string $ability): bool
    {
        return app(PanelManager::class)->currentPanel()?->isCentral() === true
            && Ability::allows($user, $ability);
    }
}
