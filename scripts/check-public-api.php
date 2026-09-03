<?php

declare(strict_types=1);

/**
 * Check the small, intentional public API surface that consumers extend.
 * This is a compatibility floor, not a replacement for semantic versioning:
 * removing or renaming one of these symbols must be a deliberate release
 * decision and should fail before packaging.
 */
$root = dirname(__DIR__);
$autoload = $root.'/apps/playground/vendor/autoload.php';
$manifest = $root.'/docs/public-api.json';

if (! is_file($autoload) || ! is_file($manifest)) {
    fwrite(STDERR, "Public API check requires the playground dependencies and manifest.\n");
    exit(2);
}

require $autoload;

/** @var array<string, list<string>> $expected */
$expected = json_decode((string) file_get_contents($manifest), true, 512, JSON_THROW_ON_ERROR);
$missing = [];

foreach ($expected as $class => $methods) {
    if (! interface_exists($class) && ! class_exists($class) && ! trait_exists($class)) {
        $missing[] = "missing symbol {$class}";
        continue;
    }

    $reflection = new ReflectionClass($class);

    foreach ($methods as $method) {
        if (! $reflection->hasMethod($method)) {
            $missing[] = "missing method {$class}::{$method}()";
        }
    }
}

if ($missing !== []) {
    fwrite(STDERR, "Public API compatibility check failed:\n");
    fwrite(STDERR, implode("\n", array_map(static fn (string $item): string => "- {$item}", $missing))."\n");
    exit(1);
}

fwrite(STDOUT, 'Public API compatibility check passed ('.count($expected).' symbols).'.PHP_EOL);
