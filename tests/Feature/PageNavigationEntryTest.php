<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Pages\BillingPlansPage;
use Alxtexh\Panel\Tests\Fixtures\Pages\SecondBillingPortalPage;
use Alxtexh\Panel\Tests\TestCase;

/**
 * `Page::navigationEntry()`'s href must be absolute regardless of which
 * panel the page lives on.
 *
 * FOUND BY CLICKING A SIDEBAR LINK WHILE ALREADY ON THE PAGE IT POINTS TO,
 * on a panel whose path is not empty (`client`, not `admin`). `getPath()`
 * returns the raw path a host declared (`'client'`), not `'/client'`, and
 * the old code trusted it to already carry the leading slash. On `admin`
 * (`path('')`) that bug is invisible - an empty prefix plus the leading `/`
 * this method inserts before `navigationPath()` happens to produce an
 * absolute path anyway. A relative href only shows itself when the browser
 * resolves it against the current page's own URL, which is exactly what
 * clicking a page's own sidebar entry does: `client/account/plans` resolved
 * against `/client/account/plans` becomes `/client/account/client/account/plans`.
 */
final class PageNavigationEntryTest extends TestCase
{
    public function test_href_is_absolute_on_a_panel_with_a_non_empty_path(): void
    {
        $entry = SecondBillingPortalPage::navigationEntry('second');

        $this->assertSame('/second/account/billing', $entry['href']);
    }

    /**
     * THE EXACT REPRODUCTION: without a leading `/`, this href resolves as a
     * RELATIVE url against the page's OWN current location - a click from
     * `/second/account/billing` on `second/account/billing` (no leading
     * slash) lands the browser on `/second/account/second/account/billing`,
     * not back on the page it named.
     */
    public function test_href_starts_with_a_slash_so_it_cannot_resolve_relative_to_the_current_page(): void
    {
        $entry = SecondBillingPortalPage::navigationEntry('second');

        $this->assertStringStartsWith('/', $entry['href']);
    }

    /** The admin panel's empty path prefix was the case that hid this bug. */
    public function test_href_is_still_correct_on_a_panel_with_an_empty_path(): void
    {
        $entry = BillingPlansPage::navigationEntry('');

        $this->assertSame('/settings/plans', $entry['href']);
    }

    public function test_a_prefix_with_or_without_its_own_slashes_normalises_the_same(): void
    {
        $this->assertSame(
            SecondBillingPortalPage::navigationEntry('second')['href'],
            SecondBillingPortalPage::navigationEntry('/second/')['href'],
        );
    }
}
