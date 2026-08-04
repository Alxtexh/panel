<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\Audit\AuditRecorder;
use PanelKit\Panel\Http\Middleware\ScopeSessionToTenant;
use PanelKit\Panel\Models\Role;
use PanelKit\Panel\Support\Ability;
use PanelKit\Panel\Support\PanelHome;
use PanelKit\Panel\Support\Tenants;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * The organisations this account belongs to, and moving between them.
 *
 * IT NAMES NO MODEL. `Tenants` resolves the organisation class from
 * `panel.tenancy.model` and the membership relation by asking the user model
 * which of three conventional names it answers to - so this works against an
 * application that calls them workspaces, tenants or organisations without any
 * of them renaming anything for a package.
 *
 * IT DEGRADES RATHER THAN FAILING. A single-tenant installation, or one that
 * models no membership relation, gets a screen that says switching is not
 * available here. The alternative - a create button that makes an organisation
 * nobody can reach, because the user's single tenant column is the only way in -
 * is worse than no button.
 *
 * THE SESSION STAMP MOVES WITH THE USER, and that is the one part that cannot be
 * left out. `ScopeSessionToTenant` flushes a session whose stamp disagrees with
 * the acting user's tenant, as a cross-tenant session is exactly what a stolen
 * cookie looks like. Switching without restamping logs the person out at the
 * moment they arrive, which reads as the switch having failed.
 */
final class WorkspacesController
{
    public function edit(Request $request): Response
    {
        $user = $request->user();
        $current = $user?->{Tenants::column()} ?? null;

        return Inertia::render('settings/Workspaces', [
            'available' => Tenants::switchable($request),

            'workspaces' => array_map(
                static fn (Model $tenant): array => Tenants::toArray($tenant) + [
                    'current' => $tenant->getKey() === $current,
                    /*
                     * ASKED THROUGH `method_exists`, because suspension is this
                     * package's feature and an application's own organisation
                     * model need not have adopted it. A missing method is "not
                     * suspended", which is the true answer for a model that has
                     * no concept of it.
                     */
                    'suspended' => method_exists($tenant, 'isSuspended') && $tenant->isSuspended(),
                ],
                Tenants::forUser($request),
            ),

            /*
             * The link to member management, shown only to somebody it will not
             * 403 - the omitted-not-disabled rule the whole panel follows.
             */
            'canManageMembers' => Ability::allows($user, 'manage_roles'),
        ]);
    }

    /**
     * Create one and move into it.
     *
     * THE WHOLE THING IS ONE TRANSACTION because a half-made organisation is
     * worse than none: a row with no member, or a member with no role, is a
     * workspace somebody can see in their list and cannot enter.
     */
    public function store(Request $request): RedirectResponse
    {
        if (! Tenants::switchable($request)) {
            throw new NotFoundHttpException('Workspaces are not available here.');
        }

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:60'],
        ]);

        $user = $request->user();
        $model = Tenants::model();
        $relation = Tenants::relation($user);

        $tenant = DB::transaction(function () use ($user, $validated, $model, $relation): Model {
            $tenant = $model::query()->create([
                'name' => $validated['name'],
                'slug' => self::uniqueSlug($model, $validated['name']),
            ]);

            $user->{$relation}()->syncWithoutDetaching([$tenant->getKey()]);

            self::makeAdministrator($user, $tenant);

            $user->forceFill([Tenants::column() => $tenant->getKey()])->save();

            return $tenant;
        });

        ScopeSessionToTenant::restamp($request, $tenant->getKey());

        app(AuditRecorder::class)->record($user, 'workspace.created', [
            'workspace' => $tenant->name ?? $tenant->getKey(),
        ]);

        return redirect(PanelHome::urlFor(app(\PanelKit\Panel\PanelManager::class)->currentPanel()));
    }

    public function switch(Request $request): RedirectResponse
    {
        if (! Tenants::switchable($request)) {
            throw new NotFoundHttpException('Workspaces are not available here.');
        }

        $validated = $request->validate([
            'workspace' => ['required'],
        ]);

        $user = $request->user();
        $relation = Tenants::relation($user);

        $tenant = $user->{$relation}()->whereKey($validated['workspace'])->first();

        /*
         * 404 RATHER THAN 403, deliberately: a 403 confirms the workspace
         * exists, and "does this id exist" is not a question a non-member gets
         * answered.
         */
        if ($tenant === null) {
            throw new NotFoundHttpException('No such workspace.');
        }

        if (method_exists($tenant, 'isSuspended') && $tenant->isSuspended()) {
            return back()->withErrors([
                'workspace' => __(':name is suspended. Nobody can enter it until the operator lifts that.', [
                    'name' => $tenant->name ?? $tenant->getKey(),
                ]),
            ]);
        }

        $home = PanelHome::urlFor(app(\PanelKit\Panel\PanelManager::class)->currentPanel());

        if ($tenant->getKey() === ($user->{Tenants::column()} ?? null)) {
            return redirect($home);
        }

        $user->forceFill([Tenants::column() => $tenant->getKey()])->save();

        ScopeSessionToTenant::restamp($request, $tenant->getKey());

        /*
         * A SWITCH IS A SECURITY-RELEVANT EVENT. "Who was standing where" is
         * the first question after anything surprising in either organisation,
         * and the row that answers it has to be written at the moment of the
         * move - afterwards there is nothing to reconstruct it from.
         */
        app(AuditRecorder::class)->record($user, 'workspace.switched', [
            'workspace' => $tenant->name ?? $tenant->getKey(),
        ]);

        return redirect($home);
    }

    /**
     * A slug nothing else holds.
     *
     * LOOPS RATHER THAN APPENDING A RANDOM SUFFIX, because "acme-2" is a name
     * somebody can read out over a phone and `acme-8f3c1a` is not.
     */
    private static function uniqueSlug(string $model, string $name): string
    {
        $base = Str::slug($name) !== '' ? Str::slug($name) : 'workspace';
        $slug = $base;
        $suffix = 2;

        while ($model::query()->where('slug', $slug)->exists()) {
            $slug = "{$base}-{$suffix}";
            $suffix++;
        }

        return $slug;
    }

    /**
     * Whoever creates an organisation runs it.
     *
     * A GRANTS-ALL ROLE RATHER THAN A LIST OF ABILITIES, so the founder keeps
     * every permission invented after today. Assigned with the team id set
     * explicitly, because Spatie resolves the team from the registrar - which
     * at this moment still holds the tenant they came FROM, so the role would
     * land in the wrong organisation and the new one would have nobody in it.
     */
    private static function makeAdministrator(mixed $user, Model $tenant): void
    {
        if (! method_exists($user, 'assignRole')) {
            return;
        }

        $role = Role::query()->firstOrCreate(
            ['name' => 'Administrator', 'tenant_id' => $tenant->getKey(), 'guard_name' => 'web'],
            ['grants_all' => true],
        );

        app(\Spatie\Permission\PermissionRegistrar::class)->setPermissionsTeamId($tenant->getKey());

        $user->assignRole($role);
    }
}
