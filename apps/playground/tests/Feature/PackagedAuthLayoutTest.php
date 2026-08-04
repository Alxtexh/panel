<?php

declare(strict_types=1);

namespace Tests\Feature;

use Tests\TestCase;

/**
 * A page that renders a packaged auth screen must decline this app's layout.
 *
 * THE FAILURE IS TWO OF EVERYTHING, and it is visible rather than fatal: the
 * packaged screens render `AuthLayout` themselves, because a fresh installation
 * has none to apply. When `app.ts` also applies this application's, the result
 * is two product names, two theme toggles and a form pushed half a screen down.
 *
 * IT HAPPENED, AND NOT FOR AN INTERESTING REASON. An edit that added
 * `auth/Register` to the resolver's list matched nothing, because Prettier had
 * already reformatted the array from one line onto five - so the change reported
 * success and did nothing. Nothing else could catch it: the page still returns
 * 200, `vue-tsc` is happy, and the build succeeds.
 *
 * SO THE TWO LISTS ARE COMPARED rather than trusted. What imports a packaged
 * screen is a fact in the page file; what the resolver excuses is a fact in
 * `app.ts`; and this fails when they disagree in either direction - a page that
 * imports and is not listed renders twice, and a listing with no page is a stale
 * excuse that will silently swallow a future layout.
 */
final class PackagedAuthLayoutTest extends TestCase
{
    public function test_every_packaged_auth_page_is_excused_from_the_apps_layout(): void
    {
        $pages = glob(resource_path('js/pages/auth/*.vue')) ?: [];

        $importing = [];

        foreach ($pages as $path) {
            $contents = (string) file_get_contents($path);

            if (str_contains($contents, '@panelkit/panel/inertia')) {
                $importing[] = 'auth/'.basename($path, '.vue');
            }
        }

        sort($importing);

        $listed = $this->packagedAuthList();

        $this->assertSame(
            $importing,
            $listed,
            "The resolver's PACKAGED_AUTH list and the pages that actually import a packaged "
            .'auth screen disagree. A page that imports one and is not listed renders inside '
            .'two layouts; a listing with no page is a stale excuse.',
        );
    }

    /**
     * The names in `app.ts`, read from the source.
     *
     * PARSED RATHER THAN DUPLICATED HERE. A copy in the test is a third list to
     * keep in step, and it would agree with itself while both drifted from the
     * pages.
     *
     * @return list<string>
     */
    private function packagedAuthList(): array
    {
        $source = (string) file_get_contents(resource_path('js/app.ts'));

        if (! preg_match('/const PACKAGED_AUTH = \[(.*?)\];/s', $source, $matches)) {
            $this->fail('PACKAGED_AUTH was not found in resources/js/app.ts.');
        }

        preg_match_all("/'([^']+)'/", $matches[1], $names);

        $listed = $names[1];
        sort($listed);

        return $listed;
    }
}
