<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Plugins;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Plugins\Plugin;

/** Fixture that records whether its constructor ran. */
final class LazyConstructPlugin extends Plugin
{
    public static int $constructed = 0;

    public function __construct()
    {
        self::$constructed++;
    }

    public function id(): string
    {
        return 'tests/lazy-construct';
    }

    public function appliesTo(Panel $panel): bool
    {
        return $panel->id === 'lazy-target';
    }

    /** @return list<string> */
    public static function panelIds(): ?array
    {
        return ['lazy-target'];
    }

    public function registerPages(Panel $panel): void {}
}
