<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Alxtexh\Panel\Plugins\Plugin;

final class HealthCheckPlugin extends Plugin
{
    public function id(): string
    {
        return 'tests/health-check';
    }

    /** @return list<class-string> */
    public function dependencies(): array
    {
        return [\stdClass::class];
    }

    /** @return list<array{level: 'note', title: string, detail: string}> */
    public function health(): array
    {
        return [[
            'level' => 'note',
            'title' => 'Fixture is healthy',
            'detail' => 'The plugin health hook was executed.',
        ]];
    }
}
