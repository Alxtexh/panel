<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

use Illuminate\Contracts\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable;
use Spatie\Permission\PermissionRegistrar;

/**
 * DOES THIS PERSON HOLD THIS ABILITY - the one place that answers it.
 *
 * EXTRACTED BECAUSE TWO POLICIES NEEDED THE SAME THIRTY LINES, not to be tidy.
 * `TicketPolicy` grew both halves below the hard way, one bug at a time, and
 * `TenantResourcePolicy` arrived needing them exactly. A second hand-written
 * copy is a copy that drifts, and the way it drifts is silent: the two policies
 * would disagree about who may do what, and nothing would say so.
 *
 * TWO THINGS ARE LOAD-BEARING HERE AND BOTH WERE GOT WRONG ONCE.
 *
 * `hasPermission()` FIRST. It is the same duck-typed check `PageController`,
 * `SingularController`, `StatWidget`, `ChartWidget` and `Impersonation` make,
 * and the reason is that `can()` CANNOT EXPRESS A `grants_all` ROLE: a role
 * holding every ability including ones invented later is PanelKit's concept,
 * stored in a column Spatie has never heard of. Spatie's `Gate::before` answers
 * from the pivot tables alone, so a superuser reads as holding nothing.
 * Promoting a policy once replaced `hasPermission()` with `can()` on the correct
 * grounds that a package cannot name an application method, and the result
 * denied every administrator a screen while every test stayed green - because
 * tests grant named abilities and administrators hold none.
 *
 * `can()` IS THE FALLBACK, for an application with no such method: a fresh
 * install with a plain user model, where Spatie's pivot rows are the whole
 * answer and `grants_all` does not exist to be missed.
 *
 * AND THE TEAM IS SET BEFORE EITHER IS ASKED. See `withTeam` below.
 *
 * NOT A REFACTOR OF THE OTHER SIX CALLERS. They work, they are on request paths
 * where the middleware has already set the team, and rewriting them to prove a
 * point is how a promotion becomes a regression. They can move when something
 * else takes them there.
 */
final class Ability
{
    /** @param  Authenticatable&Authorizable  $user */
    public static function held(Authenticatable&Authorizable $user, string $ability): bool
    {
        return self::withTeam(static fn (): bool => method_exists($user, 'hasPermission')
            ? (bool) $user->hasPermission($ability)
            : $user->can($ability));
    }

    /**
     * RUN THE CHECK WITH THIS ORGANISATION AS SPATIE'S TEAM.
     *
     * `can()` reaches Spatie through its `Gate::before` hook, and that hook
     * filters roles by the team id held in the registrar. A REQUEST sets it -
     * see `Auth\SetPermissionsTeam` - and a test, a console command and a queued
     * job do not. Without this the same person with the same roles is permitted
     * inside a request and denied everywhere else, with nothing at the call site
     * to explain why: `panel:permissions`, a scheduled report, a job that closes
     * stale records, all silently authorising nobody.
     *
     * That bug has appeared four times in this codebase. A guard must not depend
     * on ambient state.
     *
     * SET FROM `TenantContext`, NOT FROM THE USER, and not left to whatever was
     * there. It is the same value the middleware sets, so inside a request this
     * changes nothing; everywhere else it supplies what nothing else did. The
     * previous id is restored in a `finally` - under a long-lived worker an id
     * left behind becomes the next request's default, for a different tenant.
     */
    public static function withTeam(callable $body): bool
    {
        if (! class_exists(PermissionRegistrar::class)) {
            return (bool) $body();
        }

        $registrar = app(PermissionRegistrar::class);
        $previous = $registrar->getPermissionsTeamId();

        $registrar->setPermissionsTeamId(app(TenantContext::class)->currentKey());

        try {
            return (bool) $body();
        } finally {
            $registrar->setPermissionsTeamId($previous);
        }
    }
}
