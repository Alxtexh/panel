<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Alxtexh\Panel\Plugins\Plugin;

final class MissingDependencyPlugin extends Plugin
{
    public function id(): string
    {
        return 'tests/missing-dependency';
    }

    /** @return list<class-string> */
    public function dependencies(): array
    {
        return ['Tests\\Missing\\Dependency'];
    }
}
