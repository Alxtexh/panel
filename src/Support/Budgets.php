<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Closure;

/**
 * Screens that are not resource lists, and what each is allowed to cost -
 * roadmap 7.6.
 *
 * `panel:benchmark` measured resource lists and nothing else, which covered the
 * screens the panel GENERATES and left uncovered every screen somebody WROTE -
 * the dashboard with its widgets, the document designer, a bulk send. Those are
 * exactly the ones that get slow, because a generated list has one query shape
 * and a hand-written screen has however many somebody added.
 *
 * A REGISTRY RATHER THAN A LIST IN THE COMMAND, because the command ships in a
 * package and the screens do not. An application declares its own from a
 * service provider; a plugin declares the screens it installed. The benchmark
 * asks what exists rather than knowing.
 *
 * ONE BUDGET PER SCREEN, NOT ONE FOR THE PANEL. A dashboard drawing twelve
 * widgets is legitimately dearer than a list of ten rows, and holding both to
 * 300 ms means either the dashboard fails forever or the number is raised until
 * it stops meaning anything. A budget that is never breached is not a budget.
 *
 * THE NUMBER IS A PROMISE, and it goes next to the screen rather than in a
 * spreadsheet: whoever makes a screen slower is the person who has to decide,
 * in the same diff, whether the new cost is worth changing the promise for.
 */
final class Budgets
{
    /** @var array<string, array{budget: int, work: Closure}> */
    private static array $registered = [];

    /**
     * Declare what a screen costs and what it may cost.
     *
     * @param  string  $label  How it appears in the report - a person's name for the screen.
     * @param  int  $budgetMs  What it may take. Chosen from a measurement, never guessed.
     * @param  Closure  $work  Does what the screen does. NOT an HTTP request - see below.
     */
    public static function register(string $label, int $budgetMs, Closure $work): void
    {
        /*
         * LAST REGISTRATION WINS, keyed by label, so an application can lower
         * a budget the package shipped without unregistering anything. The
         * alternative - append - would measure the same screen twice and
         * report two different verdicts about it.
         */
        self::$registered[$label] = ['budget' => $budgetMs, 'work' => $work];
    }

    /** @return array<string, array{budget: int, work: Closure}> */
    public static function all(): array
    {
        return self::$registered;
    }

    /** TESTS ONLY - the registry is boot-time configuration like the panel list. */
    public static function forget(): void
    {
        self::$registered = [];
    }
}
