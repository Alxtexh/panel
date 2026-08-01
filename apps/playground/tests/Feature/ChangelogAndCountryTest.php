<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Forms\Fields\CountryField;
use PanelKit\Panel\Pages\ChangelogPage;
use PanelKit\Panel\Support\Changelog;
use PanelKit\Panel\Support\Countries;
use Tests\TestCase;

/**
 * The last two things the Filament plugins did that PanelKit did not.
 *
 * A CHANGELOG AND A COUNTRY FIELD are unglamorous and both were real gaps. The
 * first is why "where did the export button go?" reaches support; the second is
 * the array every application writes for the twenty countries it currently sells
 * to, before meeting the twenty-first customer.
 */
final class ChangelogAndCountryTest extends TestCase
{
    use RefreshDatabase;

    /*
     * THE REGISTRY IS STATIC, so a test that registers releases must hand the
     * next one a clean slate - otherwise the failure appears in a different test
     * than the one that caused it.
     */
    protected function tearDown(): void
    {
        Changelog::forget();

        parent::tearDown();
    }

    /* ----------------------------------------------------------- changelog */

    /**
     * THE MECHANISM SHIPS, THE CONTENT DOES NOT - the same rule the landing
     * presets and the seeders follow. A framework shipping its own release notes
     * would put PanelKit's version history on somebody else's operations screen.
     */
    public function test_releases_come_from_the_application(): void
    {
        config(['panel.changelog' => [
            ['version' => '2.1', 'date' => '3 March', 'added' => ['A thing']],
        ]]);

        $releases = Changelog::releases();

        $this->assertCount(1, $releases);
        $this->assertSame('2.1', $releases[0]['version']);
        $this->assertSame(['A thing'], $releases[0]['added']);
    }

    /**
     * MISSING SECTIONS ARE FILLED IN, so the screen can assume the shape.
     *
     * Somebody writing this by hand omits `fixed` on a release that fixed
     * nothing. A template guarding every key with `v-if` is one where a typo in
     * a key name renders nothing and reports nothing.
     */
    public function test_absent_sections_normalise_to_empty_lists(): void
    {
        Changelog::set([['version' => '1.0']]);

        $release = Changelog::releases()[0];

        $this->assertSame([], $release['added']);
        $this->assertSame([], $release['changed']);
        $this->assertSame([], $release['fixed']);
        $this->assertNull($release['highlight']);

        Changelog::forget();
    }

    /** An entry with no version is not a release, and is skipped rather than shown. */
    public function test_a_malformed_entry_is_ignored(): void
    {
        config(['panel.changelog' => [['date' => 'yesterday'], ['version' => '1.0']]]);

        $this->assertCount(1, Changelog::releases());
    }

    /**
     * THE PAGE HIDES ITSELF WHEN THERE IS NOTHING TO SAY. A fresh installation
     * has no releases, and a menu entry leading to an empty page reads as a
     * broken screen rather than an unused feature.
     */
    public function test_the_page_does_not_exist_until_there_is_a_release(): void
    {
        /*
         * NOT ENABLED, not merely hidden. Registering unconditionally took
         * `/whats-new` from an application that already had its own changelog
         * there - same URI, later registration wins.
         */
        config(['panel.changelog' => []]);
        $this->assertFalse(ChangelogPage::isEnabled());

        config(['panel.changelog' => [['version' => '1.0']]]);
        $this->assertTrue(ChangelogPage::isEnabled());
    }

    /** And it is open to everybody - a grant here withholds the answer to "what changed". */
    public function test_the_changelog_needs_no_ability(): void
    {
        $this->assertNull(ChangelogPage::ability());
        $this->assertSame('whats-new', ChangelogPage::slug());
    }

    /* ------------------------------------------------------------ countries */

    /**
     * ISO CODES ARE STORED, NOT NAMES. A name is a display decision that changes
     * with locale and politics; `CI` does not. A column holding "Ivory Coast"
     * and another holding "Côte d'Ivoire" are the same country and will not
     * join.
     */
    public function test_the_default_field_stores_iso_codes(): void
    {
        $options = CountryField::make('country')->resolvedOptionMap();

        $this->assertSame('Kenya', $options['KE']);
        $this->assertSame('United Kingdom', $options['GB']);
    }

    /** In name order, because the list is read by somebody looking for a word. */
    public function test_countries_are_listed_by_name_not_by_code(): void
    {
        $names = array_values(Countries::nameMap());

        $sorted = $names;
        sort($sorted);

        $this->assertSame($sorted, $names);
    }

    /**
     * DIALLING MODE STORES THE CODE WITH ITS PLUS. A stored `254` is ambiguous
     * the moment it is concatenated with a local number that also starts with a
     * zero; the plus is what makes E.164 unambiguous.
     */
    public function test_dialling_mode_stores_the_code_and_shows_the_country(): void
    {
        $options = CountryField::dialling('dial')->resolvedOptionMap();

        $this->assertArrayHasKey('+254', $options);
        $this->assertStringContainsString('Kenya', $options['+254']);
        $this->assertStringContainsString('+254', $options['+254']);
    }

    /**
     * SHARED DIALLING CODES COLLAPSE TO ONE ENTRY.
     *
     * `+1` is the United States, Canada, Jamaica and the Dominican Republic.
     * Four identical-looking options is worse than one arbitrary label, and it
     * is the argument for storing the ISO code wherever there is a choice.
     */
    public function test_a_shared_dialling_code_appears_once(): void
    {
        $options = CountryField::dialling('dial')->resolvedOptionMap();

        $this->assertCount(
            1,
            array_filter(array_keys($options), fn (string $k): bool => $k === '+1'),
        );
    }

    /** An installation may narrow the list to what it serves. */
    public function test_the_list_can_be_narrowed(): void
    {
        $options = CountryField::make('country', ['ke', 'UG', 'TZ'])->resolvedOptionMap();

        $this->assertCount(3, $options);
        $this->assertSame(['KE', 'TZ', 'UG'], array_keys($options));
    }

    /** A typo narrows the dropdown; it does not break the form the field is on. */
    public function test_an_unknown_code_is_dropped_rather_than_fatal(): void
    {
        $options = CountryField::make('country', ['KE', 'ZZ'])->resolvedOptionMap();

        $this->assertSame(['KE' => 'Kenya'], $options);
    }

    /** Lookups both ways, for code that has one and needs the other. */
    public function test_single_lookups(): void
    {
        $this->assertSame('+254', Countries::dialling('ke'));
        $this->assertSame('Kenya', Countries::name('KE'));
        $this->assertNull(Countries::dialling('ZZ'));
    }
}
