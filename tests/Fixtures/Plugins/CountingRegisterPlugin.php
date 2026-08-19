<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Plugins\Plugin;
use Alxtexh\Panel\Plugins\PluginContext;

/** Fixture that counts how many times register() ran. */
final class CountingRegisterPlugin extends Plugin
{
    public static int $registerCalls = 0;

    public function id(): string
    {
        return 'tests/counting-register';
    }

    public function appliesTo(Panel $panel): bool
    {
        return $panel->id === 'counting-panel';
    }

    /** @return list<string> */
    public static function panelIds(): ?array
    {
        return ['counting-panel'];
    }

    public function register(PluginContext $context): void
    {
        self::$registerCalls++;
    }
}
