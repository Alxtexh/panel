<?php

declare(strict_types=1);

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\Audit\AuditRecorder;
use PanelKit\Panel\Http\Middleware\ScopeSessionToTenant;
use Spatie\Permission\PermissionRegistrar;

/**
 * The workspaces this person belongs to - roadmap 5.6.
 *
 * WHAT A WORKSPACE IS HERE: a tenant, seen from the inside. The platform panel
 * already creates tenants the operator's way; this page is the member's way -
 * see the workspaces you belong to, switch between them, start a new one. The
 * three verbs the roadmap says were missing.
 *
 * SWITCHING IS ONE COLUMN THROUGH ONE GUARDED ENDPOINT. `users.tenant_id` is
 * what every scope, session and permission check in the panel already reads,
 * so a switch is: prove membership, write the column, done. Nothing about how
 * reads are bounded changes, which is why this feature adds no new leak
 * surface - a person who is not in `tenant_members` cannot arrive anywhere new,
 * and a person who is was always allowed there.
 *
 * MEMBER MANAGEMENT IS NOT REIMPLEMENTED. User management already owns who is
 * in the current workspace and what they may do; this page links to it rather
 * than growing a second users table that would disagree with the first one on
 * the day it matters.
 */
final class WorkspacesController extends Controller
{
    public function edit(Request $request): Response
    {
        /** @var User $user */
        $user = $request->user();

        return Inertia::render('settings/Workspaces', [
            'workspaces' => $user->memberships()
                ->orderBy('name')
                ->get(['tenants.id', 'name', 'suspended_at'])
                ->map(fn (Tenant $tenant): array => [
                    'id' => $tenant->id,
                    'name' => $tenant->name,
                    'current' => $tenant->id === $user->tenant_id,
                    'suspended' => $tenant->isSuspended(),
                ])
                ->values()
                ->all(),
            // The link to member management, shown only to someone it will
            // not 403 - the same omitted-not-disabled rule the settings
            // index follows.
            'canManageMembers' => $user->hasPermission('manage_roles'),
        ]);
    }

    /**
     * Start a new workspace, and stand in it.
     *
     * THE CREATOR BECOMES ITS ADMINISTRATOR, because a workspace nobody can
     * administer is locked on arrival: roles are per-tenant, so none of the
     * creator's existing roles reach into the new one. The role is created
     * grants-all, scoped to the new tenant, and assigned in the same
     * transaction that creates it - a failure anywhere leaves nothing.
     *
     * SWITCHING INTO IT IMMEDIATELY is what "create" means to the person
     * clicking: they are starting something, not filing it for later.
     */
    public function store(Request $request): RedirectResponse
    {
        /** @var User $user */
        $user = $request->user();

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:60'],
        ]);

        $tenant = DB::transaction(function () use ($user, $validated): Tenant {
            $tenant = Tenant::create([
                'name' => $validated['name'],
                'slug' => $this->uniqueSlug($validated['name']),
            ]);

            $user->memberships()->syncWithoutDetaching([$tenant->id]);

            $this->makeAdministrator($user, $tenant);

            $user->forceFill(['tenant_id' => $tenant->id])->save();

            return $tenant;
        });

        // The session's tenant stamp must move WITH the user, or the next
        // request reads as a cross-tenant session and is flushed as hostile -
        // see ScopeSessionToTenant. This is the sanctioned transition.
        ScopeSessionToTenant::restamp($request, $tenant->id);

        app(AuditRecorder::class)->record($user, 'workspace.created', [
            'workspace' => $tenant->name,
        ]);

        return redirect('/dashboard');
    }

    /**
     * Stand in another workspace.
     *
     * MEMBERSHIP IS THE ENTIRE AUTHORISATION, checked against the pivot and
     * nothing else - not a role, not an ability, because belonging to a
     * workspace IS the grant to stand in it. What you may do once there is
     * the permission system's question, asked fresh against the roles you
     * hold in THAT tenant.
     */
    public function switch(Request $request): RedirectResponse
    {
        /** @var User $user */
        $user = $request->user();

        $validated = $request->validate([
            'workspace' => ['required', 'integer'],
        ]);

        /** @var Tenant|null $tenant */
        $tenant = $user->memberships()
            ->whereKey($validated['workspace'])
            ->first();

        // 404 rather than 403, deliberately: a 403 confirms the workspace
        // exists, and "does this id exist" is not a question a non-member
        // gets answered.
        abort_if($tenant === null, 404);

        if ($tenant->isSuspended()) {
            return back()->withErrors([
                'workspace' => "{$tenant->name} is suspended. Nobody can enter it until the operator lifts that.",
            ]);
        }

        if ($tenant->id === $user->tenant_id) {
            return redirect('/dashboard');
        }

        $user->forceFill(['tenant_id' => $tenant->id])->save();

        // Move the session's tenant stamp with the user - the one sanctioned
        // transition past ScopeSessionToTenant's mismatch flush.
        ScopeSessionToTenant::restamp($request, $tenant->id);

        // The switch is a security-relevant event: "who was standing where"
        // is the first question after anything surprising in either tenant.
        app(AuditRecorder::class)->record($user, 'workspace.switched', [
            'workspace' => $tenant->name,
        ]);

        return redirect('/dashboard');
    }

    /**
     * A slug that is not yet taken, from the workspace's name.
     *
     * Suffixed rather than rejected: the person typed a NAME, and "Acme" being
     * taken as a slug by a company they have never heard of is not something
     * they can fix by choosing a better name.
     */
    private function uniqueSlug(string $name): string
    {
        $base = Str::slug($name) !== '' ? Str::slug($name) : 'workspace';
        $slug = $base;
        $suffix = 2;

        while (Tenant::query()->where('slug', $slug)->exists()) {
            $slug = "{$base}-{$suffix}";
            $suffix++;
        }

        return $slug;
    }

    /**
     * A grants-all Administrator in the new tenant, assigned to its creator.
     *
     * THE PIVOT IS WRITTEN WITH THE TENANT EXPLICIT, the same way
     * `UserFactory::attach()` does and for the same reason: `assignRole()`
     * resolves Spatie's ambient team id, which during this request is still
     * the OLD workspace - the assignment would land scoped to the tenant
     * being left, invisible in the one being created.
     */
    private function makeAdministrator(User $user, Tenant $tenant): void
    {
        $registrar = app(PermissionRegistrar::class);
        $previous = $registrar->getPermissionsTeamId();
        $registrar->setPermissionsTeamId($tenant->id);

        try {
            $role = Role::create([
                'name' => 'Administrator',
                'guard_name' => config('auth.defaults.guard', 'web'),
                'tenant_id' => $tenant->id,
            ]);

            $role->forceFill(['grants_all' => true])->save();
        } finally {
            $registrar->setPermissionsTeamId($previous);
        }

        DB::table('model_has_roles')->updateOrInsert([
            'role_id' => $role->getKey(),
            'model_type' => User::class,
            'model_id' => $user->getKey(),
            'tenant_id' => $tenant->id,
        ], []);

        $registrar->forgetCachedPermissions();
    }
}
