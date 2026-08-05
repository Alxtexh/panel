<?php

declare(strict_types=1);

namespace Tests\Feature;

use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

/**
 * GAP_ANALYSIS.md describes the package that exists, or it misleads.
 *
 * WHY THIS FILE EXISTS. The previous GAP_ANALYSIS.md said PanelKit shipped 6
 * form field types against Filament's 33. The real numbers, counted the day
 * this test was written, were 22 and 20. It had been correct once - early in
 * the project - and then nobody recounted it, so for months the document that
 * existed to plan a Filament migration understated the package FOURFOLD.
 *
 * That is worse than having no comparison at all. A migration planned from it,
 * by a person or by an agent, would rebuild a dozen things that already
 * shipped, and would treat "we are 20% of Filament" as a reason to keep paying
 * for Filament.
 *
 * A COMPARISON NOBODY RE-MEASURES BECOMES FICTION IN ABOUT A MONTH. So the
 * counts are asserted against the tree, and adding a field type without
 * updating the document fails here, by name.
 *
 * WHAT IT DELIBERATELY DOES NOT ASSERT is Filament's side. Those numbers came
 * from Filament's live documentation on the day of the audit and this suite
 * cannot re-read the web. They are dated in the document instead, which is the
 * honest way to carry a fact that can go out of date without warning.
 */
final class FilamentParityTest extends TestCase
{
    private function document(): string
    {
        return (string) file_get_contents(dirname(__DIR__, 4).'/GAP_ANALYSIS.md');
    }

    /**
     * Concrete types only.
     *
     * `Field`, `Column` and `Filter` are base classes and `HasChoices` /
     * `HasOptions` are traits. Counting those as types is how the old
     * scoreboard managed to be wrong in both directions at once.
     */
    private function concreteCount(string $directory, array $exclude): int
    {
        $files = glob(dirname(__DIR__, 4).'/packages/panel/src/'.$directory.'/*.php') ?: [];

        $names = array_map(
            static fn (string $path): string => basename($path, '.php'),
            $files,
        );

        return count(array_diff($names, $exclude));
    }

    public static function counts(): array
    {
        return [
            'form fields' => ['Forms/Fields', ['Field', 'HasChoices'], 24],
            'table columns' => ['Tables/Columns', ['Column'], 13],
        ];
    }

    #[DataProvider('counts')]
    public function test_the_document_states_the_count_the_tree_actually_has(
        string $directory,
        array $exclude,
        int $documented,
    ): void {
        $actual = $this->concreteCount($directory, $exclude);

        $this->assertSame(
            $documented,
            $actual,
            "GAP_ANALYSIS.md says {$documented} concrete types in {$directory}; the tree has "
            ."{$actual}. Recount and update the document - a Filament comparison that is out of "
            .'date is planned from, and produces work that was already done.',
        );

        $this->assertStringContainsString(
            "| **{$actual}** |",
            $this->document(),
            "The scoreboard in GAP_ANALYSIS.md does not show {$actual} for {$directory}.",
        );
    }

    /**
     * THE RECORD PAGE RENDERS WHAT THE LIST RENDERS.
     *
     * This page special-cased `badge` and turned everything else into a string,
     * against Filament's seven infolist entry types - the largest gap the
     * 2026-08-05 audit found. It now reuses the table's own cell components,
     * which is the point: a column type that rendered one way in a list and
     * another on the record is the bug this shape grows, and it HAD it. `money`
     * was not formatted here at all, so a row showing a currency in the list
     * showed raw minor units on its own page.
     *
     * ASSERTED AS A SET, NOT A COUNT. A count passes when somebody swaps one
     * type for another; the set says which types are covered, and fails by
     * naming exactly what changed.
     */
    public function test_the_record_page_renders_every_type_the_list_does(): void
    {
        $view = (string) file_get_contents(
            dirname(__DIR__, 4).'/packages/ui/inertia/pages/ResourceView.vue',
        );

        preg_match_all("/column\??\.type === '([a-z]+)'/", $view, $matches);

        $rendered = array_values(array_unique($matches[1]));
        sort($rendered);

        $expected = [
            'badge', 'checkbox', 'code', 'colour', 'date', 'datetime',
            'icon', 'image', 'keyvalue', 'money', 'toggle',
        ];

        $this->assertSame(
            $expected,
            $rendered,
            'ResourceView renders a different set of types than GAP_ANALYSIS.md §5 describes. '
            .'Added: '.implode(', ', array_diff($rendered, $expected) ?: ['none']).'. '
            .'Removed: '.implode(', ', array_diff($expected, $rendered) ?: ['none']).'. '
            .'Update §5 and the scoreboard - a document that misstates the package is how the '
            .'last one became useless.',
        );
    }

    /**
     * The audit is dated, because half of it describes somebody else's package.
     *
     * Filament's counts were read from its documentation on one day and cannot
     * be re-verified from here. An undated comparison reads as current forever;
     * a dated one tells the reader exactly how much to trust it.
     */
    public function test_the_audit_carries_the_date_it_was_taken(): void
    {
        $this->assertMatchesRegularExpression(
            '/\*\*Audited \d{4}-\d{2}-\d{2}\.\*\*/',
            $this->document(),
            'GAP_ANALYSIS.md has no audit date. Half of it describes Filament, which this suite '
            .'cannot re-check, so the date is the only thing telling a reader how stale it may be.',
        );
    }
}
