<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use PanelKit\Panel\Support\SchemaCache;

/**
 * php artisan panel:cache-clear
 *
 * antipatterns §4.2: every cache incident in the system being replaced required
 * manually clearing keys across all tenants AFTER deploying the fix, because a
 * wrong value with a multi-day TTL survives the code change that caused it. The
 * rule is to ship this command from day one rather than write it under pressure.
 *
 * It bumps a generation counter rather than scanning or enumerating keys -
 * scanning is slow and, on a sharded or clustered store, misses entries.
 */
final class CacheClearCommand extends Command
{
    protected $signature = 'panel:cache-clear';

    protected $description = 'Invalidate every cached panel schema';

    public function handle(SchemaCache $cache): int
    {
        $generation = $cache->bumpGeneration();

        $this->components->info("Panel schema cache invalidated (generation {$generation}).");

        return self::SUCCESS;
    }
}
