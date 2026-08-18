<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Alxtexh\Panel\Billing\BillingState;
use Alxtexh\Panel\Support\BillingStateStore;
use Illuminate\Console\Command;

final class BillingCheckCommand extends Command
{
    protected $signature = 'panel:billing-check';

    protected $description = 'Apply grace-period billing transitions.';

    public function handle(): int
    {
        $count = 0;

        BillingState::query()
            ->where('status', 'past_due')
            ->whereNotNull('grace_ends_at')
            ->where('grace_ends_at', '<=', now())
            ->orderBy('id')
            ->chunkById(200, function ($rows) use (&$count): void {
                foreach ($rows as $row) {
                    $result = BillingStateStore::suspendIfPastDueBeyondGrace(
                        (string) $row->billable_type,
                        (string) $row->billable_key,
                    );

                    if (($result['updated'] ?? false) === true) {
                        $count++;
                    }
                }
            });

        $this->info("Suspended {$count} account(s).");

        return self::SUCCESS;
    }
}

