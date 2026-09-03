<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Alxtexh\Panel\Support\PanelModules;
use Illuminate\Console\Command;

/** Show which optional Panel capability modules are available in this host. */
final class ModulesCommand extends Command
{
    protected $signature = 'panel:modules {--json : Emit a machine-readable report}';

    protected $description = 'Inspect Panel capability modules and optional dependencies';

    public function handle(): int
    {
        $status = PanelModules::status();

        if ($this->option('json')) {
            $this->line((string) json_encode($status, JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR));

            return self::SUCCESS;
        }

        $this->table(
            ['Module', 'Status', 'Optional packages', 'Missing probes'],
            array_map(
                static fn (array $module, string $key): array => [
                    $key,
                    $module['available'] ? 'available' : 'unavailable',
                    $module['packages'] === [] ? '—' : implode(', ', $module['packages']),
                    $module['missing'] === [] ? '—' : implode(', ', $module['missing']),
                ],
                $status,
                array_keys($status),
            ),
        );

        return self::SUCCESS;
    }
}
