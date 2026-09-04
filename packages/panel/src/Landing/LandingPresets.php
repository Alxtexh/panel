<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Landing;

/** Landing presets are intentionally empty until a reference is ported faithfully. */
final class LandingPresets
{
    /** @return list<string> */
    public static function names(): array
    {
        return [];
    }

    public static function resolve(string $name): string
    {
        return '';
    }

    /** @return list<array{type: string, data: array<string, mixed>}> */
    public static function get(string $name): array
    {
        return [];
    }
}
