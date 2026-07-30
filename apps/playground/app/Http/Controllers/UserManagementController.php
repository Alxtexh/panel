<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use App\Panel\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\Support\Abilities;
use PanelKit\Panel\Support\RoleTemplates;

/**
 * One screen for the two halves of the same question: who is here, and what may
 * they do.
 *
 * THEY WERE TWO UNRELATED PLACES, and that was wrong. Roles lived under settings
 * and users under the resource routes, so granting somebody access meant knowing
 * that two screens in different sections had to agree. They are one job.
 *
 * THE USERS TAB EMBEDS THE RESOURCE rather than reimplementing it. `UserResource`
 * already owns the columns, the tenant constraint, the policy and the forms, and
 * a second users table here would be a second set of all four - free to write and
 * expensive the first time they disagree. So this asks the resource for its
 * schema and its rows, exactly as a workspace does, and Create and Edit link
 * straight to the resource's own pages.
 */
final class UserManagementController extends Controller
{
    public function index(Request $request, string $tab = 'users'): Response
    {
        /*
         * BOTH TABS NEED `manage_roles`.
         *
         * The users tab could arguably sit behind `view_any_users` instead, and
         * splitting them would mean a screen where one tab 403s - which teaches
         * people that half a page failing is normal. One guard, one screen.
         */
        abort_unless($request->user()?->hasPermission('manage_roles'), 403);

        $tab = in_array($tab, ['users', 'roles'], true) ? $tab : 'users';

        return Inertia::render('settings/UserManagement', [
            'tab' => $tab,

            /*
             * SCOPED BY HAND, and that is not belt-and-braces - it is the only
             * scoping there is.
             *
             * Spatie's teams feature confines PERMISSION CHECKS to a tenant
             * through the registrar; it puts no global scope on the Role model,
             * so a bare `Role::query()` returns every organisation's roles. A
             * global scope is not the fix either: the permission registrar
             * eager-loads roles through Permission and caches the result for
             * every tenant at once, so a scoped load would poison a shared
             * cache with whichever tenant happened to warm it.
             *
             * THE HEADCOUNT IS A DECLARED SUBQUERY, not `withCount('users')`.
             * Spatie's `users()` relation filters the pivot by whatever team id
             * the registrar happens to be holding, so the number it returns
             * depends on middleware having run - and when it has not, every
             * role reports zero people and the screen quietly lies. Naming the
             * tenant here makes the count depend on nothing but this query. It
             * also collapses a per-role query into one.
             */
            'roles' => Role::query()
                ->select('roles.*')
                ->where('tenant_id', $request->user()->tenant_id)
                ->with('permissions:id,name')
                ->addSelect(['user_count' => DB::table('model_has_roles')
                    ->selectRaw('count(*)')
                    ->whereColumn('model_has_roles.role_id', 'roles.id')
                    ->where('model_has_roles.model_type', User::class)
                    ->where('model_has_roles.tenant_id', $request->user()->tenant_id),
                ])
                ->orderBy('id')
                ->get()
                ->map(fn (Role $role, int $index): array => [
                    'id' => $role->id,
                    'name' => $role->name,
                    'grantsAll' => $role->grantsEverything(),
                    /*
                     * THE FIRST ROLE IS PROTECTED, and the client is told so it
                     * can hide the button rather than offer an action that will
                     * be refused. The server refuses regardless - see
                     * RoleController::destroy.
                     *
                     * `$index === 0` IS ONLY CORRECT BECAUSE THE QUERY ABOVE IS
                     * SCOPED AND ORDERED. Unscoped, position 0 would be the
                     * oldest role in the installation, which protects one
                     * organisation's role and leaves every other organisation
                     * able to delete its own last way in.
                     */
                    'isProtected' => $index === 0,
                    'permissions' => $role->permissions->pluck('name')->all(),
                    'userCount' => (int) $role->user_count,
                ])->values(),

            'groups' => Abilities::grouped(),
            // Name AND label, from the server - the Roles tab renders the same
            // component as the standalone matrix, so the two must agree.
            'panelAbilities' => Abilities::panelLabelled(),
            'templates' => RoleTemplates::all(),

            // DEFERRED: the users tab is usually not the one being read first,
            // and its rows cost a query the roles tab does not need.
            'users' => Inertia::defer(fn (): array => [
                'schema' => UserResource::schema(),
                'data' => UserResource::data($request),
            ]),
        ]);
    }
}
