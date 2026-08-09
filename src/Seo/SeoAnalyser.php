<?php

declare(strict_types=1);

namespace PanelKit\Panel\Seo;

/**
 * What is wrong with this page's metadata, and how wrong.
 *
 * THE ONE IDEA WORTH TAKING FROM `seo-pro`, which is the only one of the three
 * plugins that analyses anything rather than just storing fields. A form with a
 * character counter tells somebody their title is 74 characters; it does not tell
 * them that 74 is the number at which Google truncates it, which is the fact they
 * actually needed.
 *
 * DETERMINISTIC, AND NOT AI. `smart-seo` generates metadata with Gemini, which is
 * a genuinely useful feature and the wrong dependency for a check that runs on
 * every keystroke: it costs money per call, it needs a key before the screen
 * works at all, and it cannot be tested - the same input returns a different
 * answer next week. Every rule here is a documented length or a countable
 * property, so the score is reproducible and a test can pin it.
 *
 * THE THRESHOLDS ARE PUBLISHED ONES, not invented. Titles are measured against
 * ~60 characters and descriptions against ~160 because those are where the major
 * engines truncate in practice; the numbers live in constants so an installation
 * that disagrees can say so in one place rather than by editing rules.
 *
 * SEVERITY IS THREE LEVELS BECAUSE TWO IS A LIE. "Pass or fail" forces a missing
 * title (fatal - the page has no name in the results) and a title of 63
 * characters (fine, just tight) into the same bucket, and an operator who sees
 * five red rows treats all five as noise. `problem` is worth stopping for,
 * `warning` is worth knowing, `good` is what tells somebody they are done.
 */
final class SeoAnalyser
{
    /** Where the major engines truncate a title, in practice. */
    public const TITLE_MAX = 60;

    /** Below this a title is usually leaving ranking signal unused. */
    public const TITLE_MIN = 30;

    public const DESCRIPTION_MAX = 160;

    public const DESCRIPTION_MIN = 70;

    /** Past this, keywords read as stuffing to every engine that reads them. */
    public const KEYWORDS_MAX = 10;

    public const SEVERITY_PROBLEM = 'problem';

    public const SEVERITY_WARNING = 'warning';

    public const SEVERITY_GOOD = 'good';

    /**
     * Every check, as findings plus a score out of 100.
     *
     * THE SCORE IS DERIVED FROM THE FINDINGS rather than tracked alongside them,
     * so the two cannot disagree - a rule added below changes the score without
     * anybody remembering to adjust a weight. That is the failure `seo-pro`'s own
     * documentation describes in its changelog: a score that stopped matching the
     * checks it was supposed to summarise.
     *
     * @return array{score: int, findings: list<array{key: string, severity: string, label: string, detail: string}>}
     */
    public static function analyse(SeoMetadata $metadata): array
    {
        $findings = [
            ...self::title((string) $metadata->title),
            ...self::description((string) $metadata->description),
            ...self::keywords($metadata->keywordList()),
            ...self::social((string) $metadata->og_image),
            ...self::indexing((bool) $metadata->noindex, (string) $metadata->canonical),
        ];

        return ['score' => self::score($findings), 'findings' => $findings];
    }

    /**
     * @return list<array{key: string, severity: string, label: string, detail: string}>
     */
    private static function title(string $title): array
    {
        $title = trim($title);
        $length = mb_strlen($title);

        if ($length === 0) {
            return [self::finding(
                'title',
                self::SEVERITY_PROBLEM,
                'No title',
                'Search results fall back to whatever the page markup offers, which is rarely the sentence you would have chosen.',
            )];
        }

        if ($length > self::TITLE_MAX) {
            return [self::finding(
                'title',
                self::SEVERITY_WARNING,
                "Title is {$length} characters",
                'Past roughly '.self::TITLE_MAX.' it is truncated with an ellipsis, so the end of the sentence is not read by anybody.',
            )];
        }

        if ($length < self::TITLE_MIN) {
            return [self::finding(
                'title',
                self::SEVERITY_WARNING,
                "Title is only {$length} characters",
                'There is room for more of what distinguishes this page, and unused room is unused ranking signal.',
            )];
        }

        return [self::finding(
            'title',
            self::SEVERITY_GOOD,
            "Title is {$length} characters",
            'Inside the length every major engine renders in full.',
        )];
    }

    /**
     * @return list<array{key: string, severity: string, label: string, detail: string}>
     */
    private static function description(string $description): array
    {
        $description = trim($description);
        $length = mb_strlen($description);

        if ($length === 0) {
            return [self::finding(
                'description',
                self::SEVERITY_PROBLEM,
                'No description',
                'The engine writes its own from page text. It is usually a mid-sentence fragment, and it is the only sales copy most people ever read.',
            )];
        }

        if ($length > self::DESCRIPTION_MAX) {
            return [self::finding(
                'description',
                self::SEVERITY_WARNING,
                "Description is {$length} characters",
                'Past roughly '.self::DESCRIPTION_MAX.' it is cut off, so anything at the end - including a call to action - is not shown.',
            )];
        }

        if ($length < self::DESCRIPTION_MIN) {
            return [self::finding(
                'description',
                self::SEVERITY_WARNING,
                "Description is only {$length} characters",
                'Short descriptions are more likely to be discarded in favour of one the engine writes itself.',
            )];
        }

        return [self::finding(
            'description',
            self::SEVERITY_GOOD,
            "Description is {$length} characters",
            'Long enough to be used, short enough to be shown in full.',
        )];
    }

    /**
     * @param  list<string>  $keywords
     * @return list<array{key: string, severity: string, label: string, detail: string}>
     */
    private static function keywords(array $keywords): array
    {
        $count = count($keywords);

        /*
         * ABSENT IS NOT A PROBLEM, and saying otherwise would be dishonest.
         * Google has ignored the keywords meta tag for over a decade. Several
         * other engines still read it, so the field is offered - but a panel that
         * flagged its absence as a fault would be teaching an operator to spend
         * time on the one SEO field with the least evidence behind it.
         */
        if ($count === 0) {
            return [];
        }

        if ($count > self::KEYWORDS_MAX) {
            return [self::finding(
                'keywords',
                self::SEVERITY_WARNING,
                "{$count} keywords",
                'Past '.self::KEYWORDS_MAX.' this reads as stuffing to the engines that still look, which is worse than leaving it empty.',
            )];
        }

        /* Duplicates are worth naming because they are invisible in a token
         * input - two identical chips look like one until they are counted. */
        if (count(array_unique(array_map('mb_strtolower', $keywords))) !== $count) {
            return [self::finding(
                'keywords',
                self::SEVERITY_WARNING,
                'Repeated keywords',
                'The same phrase appears more than once, which adds nothing and counts towards the limit.',
            )];
        }

        return [self::finding(
            'keywords',
            self::SEVERITY_GOOD,
            "{$count} keywords",
            'A focused set rather than a list.',
        )];
    }

    /**
     * @return list<array{key: string, severity: string, label: string, detail: string}>
     */
    private static function social(string $ogImage): array
    {
        if (trim($ogImage) === '') {
            return [self::finding(
                'og_image',
                self::SEVERITY_WARNING,
                'No social image',
                'Shared to a chat or a timeline, this page gets a bare text link. A card with an image is the difference in whether anybody clicks it.',
            )];
        }

        return [self::finding(
            'og_image',
            self::SEVERITY_GOOD,
            'Social image set',
            'Links to this page unfurl as a card rather than as a URL.',
        )];
    }

    /**
     * @return list<array{key: string, severity: string, label: string, detail: string}>
     */
    private static function indexing(bool $noindex, string $canonical): array
    {
        /*
         * NOINDEX IS REPORTED, NOT PENALISED. It is frequently the correct
         * setting - a thank-you page, a duplicate print view - so scoring it as a
         * fault would push somebody to "fix" a deliberate decision. It is
         * surfaced because it is the one setting whose effect is total and whose
         * presence is otherwise invisible from the outside.
         */
        if ($noindex) {
            return [self::finding(
                'noindex',
                self::SEVERITY_WARNING,
                'Excluded from search',
                'This page asks not to be indexed, and the sitemap leaves it out. Deliberate for a private or duplicate page; a mistake anywhere else.',
            )];
        }

        if (trim($canonical) !== '') {
            return [self::finding(
                'canonical',
                self::SEVERITY_GOOD,
                'Canonical URL set',
                'Filtered and paginated variants of this page point here rather than competing with it.',
            )];
        }

        return [];
    }

    /**
     * A score out of 100, from the findings themselves.
     *
     * A PROBLEM COSTS MORE THAN A WARNING, and an empty finding list scores 100
     * rather than 0 - a page with nothing to say about it has nothing wrong with
     * it. The weights are deliberately blunt: this is a prompt to look, not a
     * measurement anybody should report to a client as a number.
     *
     * @param  list<array{key: string, severity: string, label: string, detail: string}>  $findings
     */
    private static function score(array $findings): int
    {
        $score = 100;

        foreach ($findings as $finding) {
            $score -= match ($finding['severity']) {
                self::SEVERITY_PROBLEM => 30,
                self::SEVERITY_WARNING => 10,
                default => 0,
            };
        }

        return max(0, min(100, $score));
    }

    /**
     * @return array{key: string, severity: string, label: string, detail: string}
     */
    private static function finding(string $key, string $severity, string $label, string $detail): array
    {
        return ['key' => $key, 'severity' => $severity, 'label' => $label, 'detail' => $detail];
    }
}
