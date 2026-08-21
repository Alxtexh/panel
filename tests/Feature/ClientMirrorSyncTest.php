<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use SplFileInfo;

/**
 * The Composer package ships Vue from resources/client, not packages/ui.
 * Drift after editing packages/ui without `make sync-client` is silent for
 * consumers and only visible in the monorepo playground (Vite alias).
 */
final class ClientMirrorSyncTest extends TestCase
{
    public function test_mirrored_client_matches_packages_ui_when_present(): void
    {
        $panelRoot = dirname(__DIR__, 2);
        $uiRoot = dirname($panelRoot).'/ui';
        $clientRoot = $panelRoot.'/resources/client';

        if (! is_dir($uiRoot.'/inertia')) {
            $this->markTestSkipped('Monorepo packages/ui is not beside packages/panel.');
        }

        $this->assertFileExists(
            $clientRoot.'/package.json',
            'resources/client/package.json missing. Run: make sync-client',
        );
        $this->assertSame(
            (string) file_get_contents($uiRoot.'/package.json'),
            (string) file_get_contents($clientRoot.'/package.json'),
            'package.json drift between packages/ui and resources/client. Run: make sync-client',
        );

        $uiFiles = $this->inertiaFiles($uiRoot.'/inertia');
        $clientFiles = $this->inertiaFiles($clientRoot.'/inertia');

        $this->assertSame(
            array_keys($uiFiles),
            array_keys($clientFiles),
            'inertia path set differs. Run: make sync-client',
        );

        foreach ($uiFiles as $relative => $absolute) {
            $this->assertFileEquals(
                $absolute,
                $clientFiles[$relative],
                "inertia/{$relative} differs from packages/ui. Run: make sync-client",
            );
        }

        $this->assertFileExists($clientRoot.'/dist/kit/app.js');
        $this->assertFileExists($clientRoot.'/dist/kit/app.css');
    }

    /**
     * @return array<string, string> relative path => absolute path
     */
    private function inertiaFiles(string $root): array
    {
        $out = [];
        $iterator = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($root, RecursiveDirectoryIterator::SKIP_DOTS)
        );

        /** @var SplFileInfo $file */
        foreach ($iterator as $file) {
            if (! $file->isFile()) {
                continue;
            }
            if (str_ends_with($file->getFilename(), '.spec.ts')) {
                continue;
            }
            $relative = substr($file->getPathname(), strlen($root) + 1);
            $out[$relative] = $file->getPathname();
        }

        ksort($out);

        return $out;
    }
}
