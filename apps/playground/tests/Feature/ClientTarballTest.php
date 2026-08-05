<?php

declare(strict_types=1);

namespace Tests\Feature;

use PanelKit\Panel\Support\ClientTarball;
use Tests\TestCase;

/**
 * The client half travels inside the PHP package.
 *
 * WHY THIS FILE IS WORTH MORE THAN IT LOOKS. PanelKit is two halves, and for
 * several releases the second one had no channel anybody could use: not npmjs
 * (private), not GitHub Packages (the org name was taken, then the publish
 * workflow failed), and never on the machine that needed it. The symptom is the
 * worst kind - the Composer package installs cleanly, every route answers 200,
 * and EVERY SCREEN IS BLANK. Nothing errors, so there is nothing to search for.
 *
 * Vendoring the tarball removes the second channel entirely. But it introduces
 * the one risk vendoring always introduces: a committed binary that quietly
 * falls behind the source it was built from. A stale tarball is WORSE than a
 * missing one, because the panel renders - just not the version you are
 * developing.
 *
 * So the version inside the archive is asserted against `packages/ui`'s
 * `package.json`. Forget to repack before a release and this fails by name.
 */
final class ClientTarballTest extends TestCase
{
    private function sourceVersion(): string
    {
        $manifest = json_decode(
            (string) file_get_contents(dirname(__DIR__, 4).'/packages/ui/package.json'),
            true,
        );

        return (string) $manifest['version'];
    }

    /** It is there at all. Absent means a blank panel and no error. */
    public function test_the_tarball_ships_with_the_package(): void
    {
        $this->assertTrue(
            ClientTarball::exists(),
            'The client tarball is missing from the package. An installation of this build '
            .'would answer 200 on every route and render nothing. Repack it: '
            .'cd packages/ui && npm pack --pack-destination ../panel/client',
        );
    }

    /**
     * AND IT IS THE CURRENT ONE. The check that earns this file's place.
     *
     * A committed artifact rots silently. This is the only thing standing
     * between "vendored" and "vendored a version from three releases ago".
     */
    public function test_the_tarball_is_not_stale(): void
    {
        $this->assertSame(
            $this->sourceVersion(),
            ClientTarball::version(),
            'The vendored client tarball is a different version from packages/ui. Somebody '
            .'released without repacking, so `composer require` would deliver a client that '
            .'does not match the schema payload this PHP sends - screens render with missing '
            .'controls rather than erroring. Repack: '
            .'cd packages/ui && npm pack --pack-destination ../panel/client '
            .'&& mv ../panel/client/alxtexh-enterprise-panel-*.tgz ../panel/client/panelkit-client.tgz',
        );
    }

    /**
     * IT CONTAINS BOTH HALVES OF THE CLIENT, which is not a given.
     *
     * `dist` is compiled and `inertia` ships raw, and a packing mistake that
     * drops one is invisible until a screen fails to resolve. This is the same
     * assertion `verify-install.sh` makes about the published artifact, made
     * here so it fails in seconds rather than in a full install run.
     */
    public function test_the_tarball_carries_the_screens_and_the_compiled_half(): void
    {
        $phar = new \PharData(ClientTarball::path());

        $vue = 0;
        $dist = 0;

        foreach (new \RecursiveIteratorIterator($phar) as $file) {
            $path = $file->getPathname();

            if (str_ends_with($path, '.vue')) {
                $vue++;
            }

            if (str_contains($path, '/dist/')) {
                $dist++;
            }
        }

        $this->assertGreaterThan(
            50,
            $vue,
            'The tarball carries almost no .vue files. The packaged screens are the client '
            .'half - without them the panel has routes and no pages.',
        );

        $this->assertGreaterThan(
            50,
            $dist,
            'The tarball carries no compiled `dist`. The shadcn components declare props with '
            .'imported types, which a consumer\'s Vite cannot resolve across a package '
            .'boundary - that half has to ship built.',
        );
    }

    /**
     * THE INSTALL COMMAND IS PASTEABLE, and relative where it can be.
     *
     * It goes into runbooks and deploy notes. An absolute path leaks one
     * developer's home directory into somebody else's documentation, and then
     * fails on their machine for a reason that reads like a PanelKit bug.
     */
    public function test_the_install_command_is_relative_to_the_application(): void
    {
        $command = ClientTarball::installCommand('/srv/app');

        $this->assertStringContainsString('npm install', $command);
        $this->assertStringContainsString('@vitejs/plugin-vue', $command);
        $this->assertStringNotContainsString(
            '/home/',
            ClientTarball::installCommand(dirname(__DIR__, 4)),
            'The install command names an absolute developer path.',
        );
    }
}
