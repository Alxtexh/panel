<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Plugins\Plugin;

/** Fixture plugin with an outdated contract version for doctor tests. */
final class OutdatedContractPlugin extends Plugin
{
    public function id(): string
    {
        return 'fixtures/outdated-contract';
    }

    public function appliesTo(Panel $panel): bool
    {
        return true;
    }

    public function getVersion(): string
    {
        return '1.0.0';
    }
}
