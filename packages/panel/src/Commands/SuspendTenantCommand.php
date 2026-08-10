<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;

/**
 * Lock an organisation out of the panel, or let it back in.
 *
 * A COMMAND RATHER THAN A SCREEN, for now and deliberately. Suspension is a
 * PLATFORM action, not a tenant one: nobody inside an organisation should be
 * able to suspend it, and nobody inside another organisation should see it
 * exists. Until there is a platform panel to put it in, a console command is the
 * honest home - it is reachable only by someone with server access, which is
 * exactly the audience.
 *
 * IT REFUSES TO GUESS. No `--all`, no pattern matching, no "the first tenant
 * matching". A mistyped slug does nothing and says so; the alternative is
 * locking out an organisation nobody meant to touch, which has no in-panel
 * recovery for the people on the other end.
 */
final class SuspendTenantCommand extends Command
{
    protected $signature = 'panel:tenant-suspension
        {slug : The tenant to act on}
        {--lift : Restore access instead of suspending}
        {--reason= : Shown on the wall the operator sees}';

    protected $description = 'Suspend a tenant from the panel, or lift a suspension';

    public function handle(): int
    {
        $model = config('tenancy.tenant_model');

        if (! class_exists($model)) {
            $this->components->error('No tenant model is configured.');

            return self::FAILURE;
        }

        $tenant = $model::query()->where('slug', $this->argument('slug'))->first();

        if ($tenant === null) {
            $this->components->error("No tenant with slug [{$this->argument('slug')}].");

            return self::FAILURE;
        }

        if (! method_exists($tenant, 'suspend')) {
            $this->components->error('This tenant model has not adopted suspension.');

            return self::FAILURE;
        }

        if ($this->option('lift')) {
            $tenant->unsuspend();
            $this->components->info("{$tenant->name} can use the panel again.");

            return self::SUCCESS;
        }

        $tenant->suspend($this->option('reason') ?: null);

        /*
         * THE COUNT IS REPORTED because "suspended" is abstract and "42 people
         * are now locked out" is not. Whoever runs this should find out how big
         * the action was from the command, not from the support queue.
         */
        $affected = method_exists($tenant, 'users')
            ? $tenant->users()->count()
            : null;

        $this->components->warn(
            "{$tenant->name} is suspended".($affected === null ? '.' : ", locking out {$affected} account(s).")
        );

        if (! $this->option('reason')) {
            $this->components->warn('No reason given - the wall will not say why. Consider --reason.');
        }

        return self::SUCCESS;
    }
}
