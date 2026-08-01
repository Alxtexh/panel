<?php

declare(strict_types=1);

namespace Tests\Feature;

use Tests\TestCase;

/**
 * The upgrade guide, against the releases that actually happened.
 *
 * WHY THIS EXISTS. `UPGRADING.md` said "Nothing here yet - `0.1.0` is the first
 * tagged release" on the day `0.3.0` was tagged. Two releases had shipped
 * underneath it, one of them BREAKING - 0.2.0 took over the permission system -
 * and the one file whose entire job is to answer "I am on an old version, what
 * do I do" answered that there was nothing to do.
 *
 * NOBODY NOTICES THIS FROM INSIDE THE REPOSITORY. The changelog gets written
 * because writing it is part of tagging; the upgrade guide is a separate file
 * that nothing forces anybody to open. It is read exclusively by people who are
 * not here - which is why the only defence is a test.
 *
 * THE RULE IS ONE-DIRECTIONAL, deliberately. Every release in the changelog
 * needs a section in the upgrade guide, because a release with no upgrade note
 * is one somebody has to guess at. The reverse is fine: the guide may carry a
 * note about something that never got its own release heading.
 */
final class UpgradeGuideTest extends TestCase
{
    private function read(string $file): string
    {
        $path = __DIR__.'/../../../../'.$file;

        $this->assertFileExists($path, "{$file} is gone, and it is the file consumers upgrade from.");

        return (string) file_get_contents($path);
    }

    /**
     * @return list<string>
     */
    private function releases(): array
    {
        preg_match_all('/^## (\d+\.\d+\.\d+)$/m', $this->read('CHANGELOG.md'), $matches);

        $this->assertNotEmpty($matches[1], 'The changelog lists no releases at all.');

        return $matches[1];
    }

    /**
     * EVERY RELEASE IS UPGRADABLE TO, or says why it needs nothing.
     *
     * A version that appears in the changelog and nowhere in the upgrade guide
     * leaves whoever is on the previous one reading a feature list and
     * inferring the steps.
     */
    public function test_every_release_has_an_upgrade_note(): void
    {
        $guide = $this->read('UPGRADING.md');

        foreach ($this->releases() as $version) {
            // The first release has nothing to upgrade FROM. Every other one is
            // named as the destination of a `x → y` heading.
            if ($version === '0.1.0') {
                continue;
            }

            $this->assertStringContainsString(
                "→ {$version}",
                $guide,
                "UPGRADING.md has no section for {$version}. Somebody on the previous version has "
                .'the changelog and a guess.',
            );
        }
    }

    /**
     * AND THE PLACEHOLDER IS GONE. It survived two releases because it reads
     * like prose rather than like a TODO.
     */
    public function test_the_guide_does_not_still_claim_there_is_nothing_to_say(): void
    {
        $this->assertStringNotContainsString(
            'Nothing here yet',
            $this->read('UPGRADING.md'),
            'The version-notes placeholder is still there, and releases have shipped past it.',
        );
    }

    /**
     * THE UPGRADE PATH NAMES THE COMMAND THAT PERFORMS IT.
     *
     * `panel:update` was written precisely because the manual sequence in this
     * file was one nobody ran - and for one release the file did not mention the
     * command that replaced it. A guide describing the older, longer, easier-to-
     * get-wrong path is worse than one describing none.
     */
    public function test_the_upgrade_path_names_panel_update(): void
    {
        $this->assertStringContainsString('panel:update', $this->read('UPGRADING.md'));
    }

    /**
     * AND THE CURRENT VERSION IS THE ONE IT TELLS PEOPLE TO PIN.
     *
     * A constraint example naming an old minor is advice to install the version
     * before the one being released - `^0.1.0` resolves to `<0.2.0`, so
     * following it verbatim after 0.3.0 shipped installs 0.1.x and none of this
     * applies.
     */
    public function test_the_constraint_example_matches_the_current_version(): void
    {
        $package = json_decode(
            $this->read('packages/ui/package.json'),
            true,
            flags: JSON_THROW_ON_ERROR,
        );

        [$major, $minor] = explode('.', (string) $package['version']);

        $this->assertStringContainsString(
            "\"panelkit/panel\": \"^{$major}.{$minor}.",
            $this->read('UPGRADING.md'),
            'The version-constraint example pins a minor that is no longer current.',
        );
    }
}
