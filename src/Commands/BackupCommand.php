<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Alxtexh\Panel\Support\TenantBackup;
use Alxtexh\Panel\Support\Tenants;

/**
 * Take a backup now, of the installation or of one organisation.
 *
 * `--tenant=` IS THE SAAS HALF. Spatie's `backup:run` covers every database
 * it is configured with. An operator who needs one tenant's dump, and only
 * that dump, names the organisation here.
 */
final class BackupCommand extends Command
{
    protected $signature = 'panel:backup
        {--tenant= : Tenant id or slug; omit for a full Spatie run}';

    protected $description = 'Run a backup, optionally for one tenant only';

    public function handle(): int
    {
        $tenantOption = $this->option('tenant');

        if ($tenantOption === null || $tenantOption === '') {
            $exit = Artisan::call('backup:run');
            $this->output->write(Artisan::output());

            return $exit === 0 ? self::SUCCESS : self::FAILURE;
        }

        $tenant = Tenants::find(is_numeric($tenantOption) ? (int) $tenantOption : (string) $tenantOption);

        if ($tenant === null) {
            $this->components->error("No tenant matched [{$tenantOption}].");

            return self::FAILURE;
        }

        $written = (new TenantBackup)->write($tenant);

        $this->components->info("Wrote {$written['path']} ({$written['bytes']} bytes).");

        return self::SUCCESS;
    }
}
