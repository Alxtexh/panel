<?php

declare(strict_types=1);

namespace Tests\Feature;

use PHPUnit\Framework\Attributes\DataProvider;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use Tests\TestCase;

/**
 * NOTHING THE PACKAGE SAYS TO A USER MAY ASSUME AN INDUSTRY.
 *
 * The Vue half has had this guard for some time - `industry-neutral.spec.ts`
 * scans rendered markup - and the PHP half never did, which left the larger
 * half of the surface unchecked. PHP is where the words that reach a person
 * mostly live: navigation labels, page titles, notification bodies, seeded
 * help articles, landing copy, validation messages, console output.
 *
 * WHY IT MATTERS ENOUGH TO TEST RATHER THAN TO INTEND. Alxtexhpanel is developed
 * against an ISP billing reference application. That is the right way to build
 * a framework - a demo under real load finds what a toy cannot - and it is
 * also exactly how a framework acquires somebody else's business. The leak is
 * never architectural, and it is never noticed by the person who wrote it: it
 * arrives as a placeholder, a seeded example, a default label. It renders
 * perfectly. Every test passes. It simply reads as software written for
 * somebody else, and the reader is a veterinary practice.
 *
 * IT HAD ALREADY HAPPENED TWICE - a workspace field placeheld with a fibre
 * operator's name, and a dashboard filter dimension called "by router" in a
 * base class no other industry could use. Both were fixed by hand, which fixes
 * the instance and not the cause.
 *
 * COMMENTS ARE DELIBERATELY NOT CHECKED. Explaining a decision with a concrete
 * example - "a subscriber edited daily makes this timeline long" - is good
 * commentary, and flattening it to "a record" would cost real meaning to buy
 * nothing. A developer reading the source knows where Alxtexhpanel came from. A
 * user reading a screen should not have to.
 *
 * @see \packages\ui\inertia\industry-neutral.spec.ts the same rule, other half
 */
final class IndustryNeutralityTest extends TestCase
{
    /**
     * The vocabulary of the reference application's domain.
     *
     * DELIBERATELY NOT "client", "plan", "session" or "device" - those are
     * generic words any application uses, and a list that flagged them would
     * be switched off within a week, taking the useful entries with it. These
     * are words that cannot be anything but an internet provider. `radius` is
     * deliberately absent: CSS border-radius uses the same English word and is
     * everywhere in UI code.
     */
    private const INDUSTRY = '/\b(subscribers?|fibre|fiber|broadband|mikrotik|hotspot|pppoe|mbps|isp)\b/i';

    /**
     * THERE IS NO EXEMPTION LIST, and that is the finding rather than an
     * omission.
     *
     * This was written with one, holding a single speculative entry for a file
     * that does not exist - an exemption invented for a problem nobody had.
     * The guard then ran across all 299 shipped files and found nothing, so
     * the list was never needed.
     *
     * An exemption list is where a guard goes to die: every entry is a place
     * the rule does not apply, and a long list means it applies nowhere.
     * Starting at zero means the first person to add one has to justify it.
     */

    /**
     * Every PHP file the package ships.
     *
     * @return array<string, array{string}>
     */
    public static function packageFiles(): array
    {
        /*
         * `tests/Feature` -> `tests` -> `playground` -> `apps` -> the root.
         *
         * FOUR, AND THE FIRST ATTEMPT SAID THREE. That resolved to `apps/`,
         * which has no `packages/panel/src`, so the provider returned an empty
         * array and PHPUnit reported "No tests found" - the guard passing the
         * suite while checking nothing at all. A data provider that can silently
         * yield nothing needs the assertion below it.
         */
        $root = dirname(__DIR__, 4).'/packages/panel/src';

        $files = [];

        /** @var iterable<\SplFileInfo> $iterator */
        $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root));

        foreach ($iterator as $file) {
            if ($file->getExtension() !== 'php') {
                continue;
            }

            $relative = str_replace($root.'/', '', $file->getPathname());

            $files[$relative] = [$file->getPathname()];
        }

        ksort($files);

        /*
         * A GUARD THAT CHECKS NOTHING MUST NOT REPORT SUCCESS. If the package
         * moves, this provider returns `[]` and the whole file quietly stops
         * running - which is the failure mode the guard exists to prevent,
         * committed against the guard itself.
         */
        if (count($files) < 100) {
            throw new \RuntimeException(
                'Expected the package to have at least 100 PHP files; found '.count($files).' under '
                .dirname(__DIR__, 4).'/packages/panel/src. The path is wrong, so this guard was checking nothing.',
            );
        }

        return $files;
    }

    /**
     * THE STRING LITERALS ONLY, with every comment removed first.
     *
     * `token_get_all` rather than a regex, because a regex cannot tell a
     * string from the inside of a docblock - and this codebase's docblocks are
     * long, discursive and full of exactly the words being looked for. A regex
     * would report every file and be deleted by the end of the week.
     *
     * @return list<string>
     */
    private function literalsIn(string $path): array
    {
        $literals = [];

        foreach (token_get_all(file_get_contents($path)) as $token) {
            if (! is_array($token)) {
                continue;
            }

            /*
             * `T_CONSTANT_ENCAPSED_STRING` is a plain quoted string.
             * `T_ENCAPSED_AND_WHITESPACE` is the literal run inside an
             * interpolated one - "Suspend {$name}" gives "Suspend " here,
             * which is the half a person reads.
             */
            if (in_array($token[0], [T_CONSTANT_ENCAPSED_STRING, T_ENCAPSED_AND_WHITESPACE], true)) {
                $literals[] = $token[1];
            }
        }

        return $literals;
    }

    /**
     * NO SHIPPED PHP FILE PUTS AN INDUSTRY'S WORD IN A STRING.
     *
     * One test per file rather than one for the package, so a failure names
     * the file in its own title and the next person does not have to read a
     * list of two hundred paths to find the one that broke.
     */
    #[DataProvider('packageFiles')]
    public function test_no_shipped_string_assumes_an_industry(string $path): void
    {
        $offending = [];

        foreach ($this->literalsIn($path) as $literal) {
            if (preg_match(self::INDUSTRY, $literal, $matches) === 1) {
                $offending[] = trim($literal)." (matched '{$matches[1]}')";
            }
        }

        $this->assertSame(
            [],
            $offending,
            "This file puts the reference application's industry into a string a user can read.\n\n"
            ."Alxtexhpanel is built against an ISP. Every installation is not one, and a\n"
            ."law firm reading its own admin panel should not be shown an internet\n"
            ."provider's vocabulary as the pattern to follow.\n\n"
            ."If the word belongs to the REFERENCE APPLICATION, it belongs in\n"
            ."apps/playground, which is free to be an ISP because it is one. If it is\n"
            ."an example in a COMMENT, this test does not look at comments - the string\n"
            ."below is a literal.\n\nFound:\n  ".implode("\n  ", $offending)."\n",
        );
    }
}
