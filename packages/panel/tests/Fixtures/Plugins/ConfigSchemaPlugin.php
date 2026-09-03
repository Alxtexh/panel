<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Alxtexh\Panel\Plugins\Plugin;

final class ConfigSchemaPlugin extends Plugin
{
    public function id(): string
    {
        return 'tests/config-schema';
    }

    public function configKey(): ?string
    {
        return 'tests.plugin';
    }

    public function configRules(): array
    {
        return ['endpoint' => ['required', 'url']];
    }
}
