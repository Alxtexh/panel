<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
use Tests\TestCase;

/**
 * THE CODE IN THE GUIDE HAS TO BE CODE THAT EXISTS.
 *
 * WHY THIS WAS WRITTEN. `PANELKIT.md` opens with two resource classes - one for
 * a veterinary practice, one for a law firm - whose whole job is to show that
 * the framework has no opinion about a domain. The first draft of that example
 * called `BadgeColumn::colours()`. There is no such method: the British spelling
 * is used for the TYPE names (`ColourColumn`, `ColourField`) and not for that
 * setter, and the guide's own author got it wrong while writing the paragraph
 * about how easy this is.
 *
 * A DOCUMENTATION EXAMPLE IS THE FIRST CODE ANYBODY RUNS. It is copied verbatim,
 * usually by somebody with no way to tell a typo from a version difference, and
 * it fatals. That is a worse first impression than a missing feature.
 *
 * WHAT THIS CHECKS, AND WHAT IT DOES NOT. It reads the PHP fences out of the
 * guide and asserts that every `Class::` and every `->method(` in them actually
 * exists on something the package ships. It does not execute them - a fence is
 * an excerpt and rarely a runnable file - so it cannot catch a wrong ARGUMENT.
 * It catches the whole class of mistake that shipped: a name that is not there.
 */
final class GuideExamplesTest extends TestCase
{
    /**
     * Where the package's classes live, so a bare `TextColumn` in a fence can be
     * resolved without the guide having to spell out every import.
     *
     * @var list<string>
     */
    private const NAMESPACES = [
        'PanelKit\\Panel\\Tables\\Columns\\',
        'PanelKit\\Panel\\Tables\\Filters\\',
        'PanelKit\\Panel\\Tables\\',
        'PanelKit\\Panel\\Forms\\Fields\\',
        'PanelKit\\Panel\\Forms\\',
        'PanelKit\\Panel\\Schema\\',
        'PanelKit\\Panel\\Widgets\\',
        'PanelKit\\Panel\\Actions\\',
        'PanelKit\\Panel\\Resources\\',
        'PanelKit\\Panel\\Pages\\',
        'PanelKit\\Panel\\Support\\',
        'PanelKit\\Panel\\',
    ];

    /**
     * Methods that are not the package's to own.
     *
     * PHP builtins, Laravel's, and the guide's own illustrative closures. A
     * fence showing `route('billing.edit')` is showing Laravel, and asserting
     * PanelKit declares `route()` would be nonsense.
     *
     * @var list<string>
     */
    private const NOT_OURS = [
        'make', 'route', 'config', 'env', 'app', 'auth', 'now', 'json', 'count',
        'get', 'post', 'put', 'delete', 'where', 'query', 'toArray', 'value',
        'sprintf', 'number_format', 'trans', '__', 'collect', 'view', 'redirect',
    ];

    /**
     * `tests/Feature` -> `tests` -> `playground` -> `apps` -> the root. FOUR.
     *
     * Written as three the first time, which resolves to `apps/` - and the
     * second time I have made exactly that mistake today. `file_get_contents`
     * on a missing path warns and returns false, so without the length
     * assertion below this would have "passed" over an empty string.
     */
    private function guide(): string
    {
        return file_get_contents(dirname(__DIR__, 4).'/PANELKIT.md');
    }

    /** Every ```php fence in the guide, concatenated. */
    private function phpFences(): string
    {
        preg_match_all('/```php\n(.*?)```/s', $this->guide(), $matches);

        return implode("\n", $matches[1]);
    }

    /** Resolve a bare class name against the package's namespaces. */
    private function resolve(string $short): ?string
    {
        foreach (self::NAMESPACES as $namespace) {
            if (class_exists($namespace.$short)) {
                return $namespace.$short;
            }
        }

        return class_exists($short) ? $short : null;
    }

    /**
     * THERE IS PHP IN THE GUIDE AT ALL.
     *
     * If the fence pattern ever stops matching - a heading changes, the fences
     * become ```` ```PHP ```` - both tests below pass over an empty string and
     * report success while checking nothing.
     */
    public function test_the_guide_contains_php_examples(): void
    {
        $this->assertGreaterThan(200, strlen($this->phpFences()));
    }

    /** Every class named in an example is a class that exists. */
    public function test_every_class_in_an_example_exists(): void
    {
        preg_match_all('/\b([A-Z][A-Za-z0-9]+)::/', $this->phpFences(), $matches);

        $missing = [];

        foreach (array_unique($matches[1]) as $short) {
            // The guide names a few of the consuming application's own classes
            // in illustrations - `Patient`, `Matter`, `Invoice`. Those are the
            // reader's to write and cannot exist here.
            /*
             * Classes the READER writes, which cannot exist here: the models in
             * the domain illustrations, and their own service provider.
             */
            $theirs = ['Patient', 'Matter', 'Client', 'Plan', 'User', 'Invoice', 'Order', 'AppServiceProvider'];

            if (in_array($short, $theirs, true)) {
                continue;
            }

            if ($this->resolve($short) === null) {
                $missing[] = $short;
            }
        }

        $this->assertSame(
            [],
            $missing,
            "The guide names classes that do not exist. Somebody will copy this.\n  ".implode("\n  ", $missing),
        );
    }

    /**
     * Every method chained in an example is declared somewhere in the package.
     *
     * NOT MATCHED TO ITS RECEIVER, deliberately. Tracking which class a chained
     * `->sortable()` is called on means parsing the expression, and a fence is
     * an excerpt where the receiver is often not in view. Checking the name
     * exists SOMEWHERE catches the real failure - a method that was renamed, or
     * one that was never there - without pretending to a precision this cannot
     * have.
     */
    public function test_every_method_in_an_example_exists_somewhere_in_the_package(): void
    {
        preg_match_all('/->([a-z][A-Za-z0-9]*)\(/', $this->phpFences(), $matches);

        $declared = [];

        $files = new \RecursiveIteratorIterator(
            new \RecursiveDirectoryIterator(dirname(__DIR__, 4).'/packages/panel/src'),
        );

        /** @var \SplFileInfo $file */
        foreach ($files as $file) {
            if ($file->getExtension() !== 'php') {
                continue;
            }

            preg_match_all('/function ([a-zA-Z0-9_]+)\(/', file_get_contents($file->getPathname()), $found);

            foreach ($found[1] as $name) {
                $declared[$name] = true;
            }
        }

        $missing = [];

        foreach (array_unique($matches[1]) as $method) {
            if (in_array($method, self::NOT_OURS, true) || isset($declared[$method])) {
                continue;
            }

            // Laravel's own fluent APIs appear in install and deploy snippets.
            if (method_exists(Builder::class, $method)
                || method_exists(Collection::class, $method)) {
                continue;
            }

            $missing[] = $method;
        }

        $this->assertSame(
            [],
            $missing,
            "The guide chains methods that the package does not declare.\n  ".implode("\n  ", $missing),
        );
    }
}
