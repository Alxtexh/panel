<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Landing;

/**
 * Landing presets are intentionally empty.
 *
 * The previous release shipped generic compositions that were presented as
 * samples even though they did not match the supplied reference templates.
 * Keeping those names would make a consuming application start from the wrong
 * visual language. The reusable landing section primitives and editor remain
 * available for a future, reference-verified catalog.
 */
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
