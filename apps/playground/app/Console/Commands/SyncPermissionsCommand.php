<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\Models\Role;
use App\Models\Tenant;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\Support\Abilities;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

/**
 * Reconcile every tenant's roles against the abilities that actually exist.
 *
 * A RECONCILIATION, NOT A GENERATOR. Ability names are derived from the resource
 * registry, so the interesting work is not creating them - it is PRUNING the ones
 * that no longer correspond to anything. When a resource is renamed or removed,
 * the old names linger on every role, and a role showing forty granted abilities
 * of which six name nothing looks fully configured and grants less than it
 * claims.
 *
 * ON SPATIE NOW, and the shape barely changed - which is the argument for having
 * had one place that knew about abilities. Permissions are global rows;
 * ROLES and ASSIGNMENTS carry the tenant, via Spatie's teams feature. That split
 * is correct: `update_client` means the same thing everywhere, and duplicating it
 * per tenant would produce thousands of identical rows and a cache to match.
 *
 * IT IS IDEMPOTENT. Provisioning re-runs and deploys re-run; a command that is
 * only safe the first time is one somebody will run twice.
 */
final class SyncPermissionsCommand extends Command
{
    protected $signature = 'panel:permissions
                            {action=sync : sync|list}
                            {--prune : Also remove granted abilities that no longer exist}
                            {--dry-run : Report what would change without changing it}';

    protected $description = 'Reconcile roles and permissions against the registered resources';

    public function handle(): int
    {
        $known = Abilities::all();

        if ($this->argument('action') === 'list') {
            foreach (Abilities::grouped() as $label => $abilities) {
                $this->components->twoColumnDetail(
                    "<fg=cyan>{$label}</>",
                    implode(' ', array_column($abilities, 'action')),
                );
            }

            $this->newLine();
            $this->components->info(count($known).' abilities across '.count(Abilities::grouped()).' resources.');

            return self::SUCCESS;
        }

        $dry = (bool) $this->option('dry-run');
        $guard = config('auth.defaults.guard', 'web');

        $this->ensurePermissionsExist($known, $guard, $dry);

        foreach (Tenant::query()->orderBy('id')->get() as $tenant) {
            $this->reconcile($tenant, $known, $guard, $dry);
        }

        // Spatie caches the permission map; a sync that does not clear it leaves
        // every process answering from the state before the change.
        app(PermissionRegistrar::class)->forgetCachedPermissions();

        $this->newLine();
        $this->components->info($dry ? 'Dry run: nothing was written.' : 'Permissions reconciled.');

        return self::SUCCESS;
    }

    /**
     * Every ability the registry declares exists as a permission row.
     *
     * @param  list<string>  $known
     */
    private function ensurePermissionsExist(array $known, string $guard, bool $dry): void
    {
        $existing = Permission::query()->where('guard_name', $guard)->pluck('name')->all();
        $missing = array_values(array_diff($known, $existing));

        if ($missing === [] || $dry) {
            if ($missing !== []) {
                $this->components->task('  would create '.count($missing).' permission(s)', fn () => true);
            }

            return;
        }

        foreach ($missing as $name) {
            Permission::findOrCreate($name, $guard);
        }

        $this->components->task('  created '.count($missing).' permission(s)', fn () => true);
    }

    /** @param list<string> $known */
    private function reconcile(Tenant $tenant, array $known, string $guard, bool $dry): void
    {
        app(PermissionRegistrar::class)->setPermissionsTeamId($tenant->getKey());

        $roles = Role::query()->where('tenant_id', $tenant->getKey())->get();

        if ($roles->isEmpty()) {
            $this->createAdministrator($tenant, $known, $guard, $dry);
            $roles = Role::query()->where('tenant_id', $tenant->getKey())->get();
        }

        foreach ($roles as $role) {
            /*
             * TOP UP THE SUPERUSER ROLES. Pruning without this is half a
             * reconciliation: it removes names that died and never adds names
             * that were born, so registering a resource leaves every
             * administrator unable to touch it.
             */
            if ($role->grantsEverything()) {
                $missing = array_values(array_diff($known, $role->permissions->pluck('name')->all()));

                if ($missing !== []) {
                    if (! $dry) {
                        $role->syncPermissions($known);
                    }

                    $this->components->task(
                        "  {$tenant->slug}/{$role->name}: granted ".count($missing).' new abilit(y/ies)',
                        fn () => true,
                    );
                }

                continue;
            }

            $granted = $role->permissions->pluck('name')->all();
            $stale = array_values(array_diff($granted, $known));

            if ($stale === []) {
                continue;
            }

            if (! $this->option('prune')) {
                $this->components->warn(
                    "  {$tenant->slug}/{$role->name}: ".count($stale)
                    .' granted abilit(y/ies) name nothing - re-run with --prune to remove: '
                    .implode(', ', array_slice($stale, 0, 5))
                );

                continue;
            }

            if (! $dry) {
                $role->syncPermissions(array_values(array_intersect($granted, $known)));
            }

            $this->components->task("  {$tenant->slug}/{$role->name}: pruned ".count($stale), fn () => true);
        }

        $this->adoptRoleless($tenant, $dry);
    }

    /** @param list<string> $known */
    private function createAdministrator(Tenant $tenant, array $known, string $guard, bool $dry): void
    {
        if ($dry) {
            $this->components->task("  {$tenant->slug}: would create Administrator", fn () => true);

            return;
        }

        $role = Role::create([
            'name' => 'Administrator',
            'guard_name' => $guard,
            'tenant_id' => $tenant->getKey(),
        ]);

        // The administrator role is the one that must never fall behind the
        // registry - see Role::grantsEverything().
        $role->forceFill(['grants_all' => true])->save();
        $role->syncPermissions($known);

        $this->components->task("  {$tenant->slug}: created Administrator with ".count($known).' abilities', fn () => true);
    }

    /**
     * Anybody with no role at all gets the default one.
     *
     * `hasPermission()` denies a user with no roles, which is the correct posture
     * and also means introducing roles to a running panel locks out every
     * existing account at once. A silent, total lockout looks like the panel is
     * broken rather than like a provisioning step was missed.
     */
    private function adoptRoleless(Tenant $tenant, bool $dry): void
    {
        $default = Role::query()->where('tenant_id', $tenant->getKey())->orderBy('id')->first();

        if ($default === null) {
            return;
        }

        $held = DB::table('model_has_roles')
            ->where('model_type', \App\Models\User::class)
            ->where('tenant_id', $tenant->getKey())
            ->pluck('model_id');

        $roleless = DB::table('users')
            ->where('tenant_id', $tenant->getKey())
            ->whereNotIn('id', $held)
            ->pluck('id');

        if ($roleless->isEmpty()) {
            return;
        }

        if (! $dry) {
            foreach ($roleless as $userId) {
                DB::table('model_has_roles')->updateOrInsert([
                    'role_id' => $default->getKey(),
                    'model_type' => \App\Models\User::class,
                    'model_id' => $userId,
                    'tenant_id' => $tenant->getKey(),
                ], []);
            }
        }

        $this->components->task(
            "  {$tenant->slug}: gave {$roleless->count()} user(s) the {$default->name} role",
            fn () => true,
        );
    }
}
