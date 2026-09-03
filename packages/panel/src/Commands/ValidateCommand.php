<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;

/** The clearer CI-facing name for the existing comprehensive doctor checks. */
final class ValidateCommand extends Command
{
    protected $signature = 'panel:validate {--profile=default : Validation profile to run (default, production)} {--json : Emit a machine-readable report}';

    protected $description = 'Validate panel registration, security, and production configuration';

    public function handle(): int
    {
        return $this->call('panel:doctor', array_filter([
            '--profile' => $this->option('profile'),
            '--json' => $this->option('json') ? true : null,
        ], static fn (mixed $value): bool => $value !== null));
    }
}
