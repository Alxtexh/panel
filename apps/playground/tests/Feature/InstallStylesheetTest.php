<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Console\Command;
use Illuminate\Console\OutputStyle;
use Illuminate\Console\View\Components\Factory;
use Illuminate\Support\Facades\File;
use PanelKit\Panel\Commands\InstallCommand;
use ReflectionMethod;
use ReflectionProperty;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\NullOutput;
use Tests\TestCase;

/**
 * The stylesheet `panel:install` leaves behind.
 *
 * WHY THIS FILE EXISTS, AND IT IS THE WORST BUG THIS PACKAGE HAS SHIPPED.
 * `panel:install` published its stub with a never-overwrite rule - correct for a
 * bootstrap somebody may have written, and a GUARANTEED failure for the
 * stylesheet, because a stock Laravel application ALWAYS ships
 * `resources/css/app.css`. So the stub was skipped on every first install.
 *
 * Skipping it means Tailwind never scans `node_modules`, generates none of the
 * utilities used only inside the packaged components, and defines none of their
 * tokens. Every route answers 200, every screen renders correct markup, and the
 * whole panel is unstyled - dark text on a dark background, no card, no spacing.
 *
 * NOTHING CAUGHT IT. Not the 1,683 feature tests, which never compile CSS; not
 * the 30 browser tests, which run against the reference app's own stylesheet;
 * not `verify-install.sh`, which asserted `npm run build` produced a manifest
 * without ever looking at a rendered page. It took installing into a fresh
 * application and opening it in a browser.
 *
 * THE THREE CASES BELOW ARE THE FIX. Absent, present-without-sources, and
 * already-wired all have to behave differently, and the middle one is the one
 * that was wrong.
 */
final class InstallStylesheetTest extends TestCase
{
    private string $path;

    private ?string $original = null;

    protected function setUp(): void
    {
        parent::setUp();

        $this->path = resource_path('css/app.css');

        // The reference app HAS a stylesheet, and this test rewrites it.
        $this->original = File::exists($this->path) ? File::get($this->path) : null;
    }

    protected function tearDown(): void
    {
        if ($this->original === null) {
            File::delete($this->path);
        } else {
            File::put($this->path, $this->original);
        }

        parent::tearDown();
    }

    /**
     * Calls the merge directly.
     *
     * THE COMMAND'S OTHER STEPS ARE NOT UNDER TEST and several of them write
     * into `routes/` and `app/` - running the whole installer against the
     * reference application to assert one file would be a test that edits the
     * repository it is testing.
     */
    private function command(): InstallCommand
    {
        $output = new OutputStyle(
            new ArrayInput([]),
            new NullOutput,
        );

        $command = app(InstallCommand::class);
        $command->setLaravel(app());
        $command->setOutput($output);

        /*
         * `components` IS SET IN `Command::run()`, which is not being called
         * here - and the method under test reports what it did through it. A
         * null there is a fatal error rather than a silent skip, which is the
         * right behaviour and still has to be satisfied.
         */
        $components = new ReflectionProperty(Command::class, 'components');
        $components->setValue($command, new Factory($output));

        return $command;
    }

    private function merge(): void
    {
        $method = new ReflectionMethod(InstallCommand::class, 'mergeStylesheet');

        $method->invoke(
            $this->command(),
            dirname(__DIR__, 4).'/packages/panel/resources/stubs/app.css.stub',
        );
    }

    /** A fresh application with no stylesheet gets the stub whole. */
    public function test_it_writes_the_stub_when_there_is_no_stylesheet(): void
    {
        File::delete($this->path);

        $this->merge();

        $css = File::get($this->path);

        $this->assertStringContainsString('@panelkit/ui', $css);
        $this->assertStringContainsString('@panelkit/inertia', $css);
        $this->assertStringContainsString('--background', $css);
    }

    /**
     * THE CASE THAT WAS BROKEN, and the one every first install hits.
     *
     * Stock Laravel's `app.css` exists, so the old rule skipped - and the panel
     * rendered unstyled with nothing anywhere saying why.
     */
    public function test_it_merges_into_a_stock_laravel_stylesheet(): void
    {
        File::put($this->path, "@import 'tailwindcss';\n\n@source '../../storage/framework/views/*.php';\n");

        $this->merge();

        $css = File::get($this->path);

        // What was already there survives.
        $this->assertStringContainsString('storage/framework/views', $css);

        // And Tailwind now reaches the packaged components.
        $this->assertStringContainsString('@panelkit/ui/src', $css);
        $this->assertStringContainsString('@panelkit/inertia/src', $css);

        // Stock Laravel defines no tokens, so these arrive too - without them
        // `bg-background` resolves to nothing and the panel is unreadable.
        $this->assertStringContainsString('--background', $css);
        $this->assertStringContainsString('.dark', $css);
    }

    /**
     * AN APPLICATION WITH ITS OWN PALETTE KEEPS IT.
     *
     * A starter kit defines `--background` already. Appending ours would win by
     * being later in the file and silently retheme somebody's application - so
     * only the `@source` lines, which are the part that is actually missing.
     */
    public function test_it_adds_only_the_sources_when_tokens_already_exist(): void
    {
        File::put($this->path, "@import 'tailwindcss';\n\n:root {\n    --background: hsl(210 40% 98%);\n}\n");

        $this->merge();

        $css = File::get($this->path);

        $this->assertStringContainsString('@panelkit/ui/src', $css);
        $this->assertStringContainsString('hsl(210 40% 98%)', $css);

        // Ours is not appended over theirs.
        $this->assertStringNotContainsString('oklch(1 0 0)', $css);
    }

    /**
     * EVERY TOKEN THE COMPONENTS ASK FOR IS DEFINED.
     *
     * THE STUB WAS SHORT OF SIX OF THEM - popover, accent and secondary, each
     * with a foreground - so the command palette, the account menu, every hover
     * state and every secondary button rendered with NO SURFACE on an
     * installation whose stylesheet was otherwise wired correctly. The login
     * screen looked perfect, because it happens to use only the tokens that
     * were there.
     *
     * DERIVED FROM THE COMPONENTS, NOT LISTED HERE. A hand-written list is a
     * second thing to keep in step; this reads what the packages actually
     * reference, so a component that starts using `bg-warning` tomorrow fails
     * this test rather than rendering invisibly.
     */
    public function test_the_stub_defines_every_token_the_components_use(): void
    {
        $stub = file_get_contents(dirname(__DIR__, 4).'/packages/panel/resources/stubs/app.css.stub');

        $used = [];

        foreach (['ui', 'inertia'] as $package) {
            $root = dirname(__DIR__, 4)."/packages/{$package}/src";

            $files = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($root));

            foreach ($files as $file) {
                if (! $file->isFile() || ! in_array($file->getExtension(), ['vue', 'ts'], true)) {
                    continue;
                }

                preg_match_all(
                    '/\b(?:bg|text|border|ring|fill|stroke|divide|placeholder|outline|caret|accent|decoration|from|to|via)-'
                    .'(background|foreground|card|card-foreground|popover|popover-foreground|primary|primary-foreground'
                    .'|secondary|secondary-foreground|muted|muted-foreground|accent|accent-foreground'
                    .'|destructive|destructive-foreground|border|input|ring)\b/',
                    (string) file_get_contents($file->getPathname()),
                    $matches,
                );

                foreach ($matches[1] as $token) {
                    $used[$token] = true;
                }
            }
        }

        $missing = [];

        foreach (array_keys($used) as $token) {
            if (! str_contains($stub, "--color-{$token}:") || ! str_contains($stub, "--{$token}:")) {
                $missing[] = $token;
            }
        }

        $this->assertSame(
            [],
            $missing,
            'The packaged components use tokens the published stylesheet never defines, so those '
            .'surfaces render with no colour at all: '.implode(', ', $missing),
        );
    }

    /**
     * AND DOCTOR SAYS SO WHEN IT IS WRONG.
     *
     * The merge fixes new installs; this is what tells the thousands of words
     * of existing ones. The failure is silent and looks like a broken build, so
     * the one command people are told to run first has to name it.
     */
    public function test_doctor_reports_a_stylesheet_that_misses_the_packages(): void
    {
        File::put($this->path, "@import 'tailwindcss';\n\n:root {\n    --background: #fff;\n}\n");

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('does not point Tailwind at the packaged components')
            ->assertFailed();
    }

    /** And says nothing when it is right. */
    public function test_doctor_is_quiet_about_a_correct_stylesheet(): void
    {
        $this->merge();

        $this->artisan('panel:doctor')
            ->doesntExpectOutputToContain('does not point Tailwind at the packaged components');
    }

    /**
     * THE ENTRY RENAME IS FOLLOWED INTO THE VIEWS THAT REFERENCE IT.
     *
     * `panel:install` repoints Vite from `app.js` to `app.ts`, and stock
     * Laravel's `welcome.blade.php` still says `@vite([..., 'app.js'])` - an
     * entry that no longer exists in the manifest. So the application's OWN home
     * page answered 500 after installing a panel, which is the opposite of what
     * a non-destructive installer promises.
     *
     * IT IS FOUND BY SIGNING IN, not by visiting the panel: the panel redirects
     * to its home, which for a root-mounted panel is `/`, which is the welcome
     * page. The panel's own screens were all fine.
     */
    public function test_it_repoints_views_at_the_renamed_vite_entry(): void
    {
        $view = resource_path('views/panelkit-install-fixture.blade.php');

        File::put($view, "<head>@vite(['resources/css/app.css', 'resources/js/app.js'])</head>");

        try {
            $method = new ReflectionMethod(InstallCommand::class, 'repointViews');
            $method->invoke($this->command());

            $this->assertStringContainsString('resources/js/app.ts', File::get($view));
            $this->assertStringNotContainsString('resources/js/app.js', File::get($view));
        } finally {
            File::delete($view);
        }
    }

    /**
     * RUNNING IT TWICE CHANGES NOTHING. `panel:install` is expected to be
     * re-runnable, and people do re-run it; a second copy of the tokens would
     * be harmless-looking and would fight the first on every edit.
     */
    public function test_it_is_idempotent(): void
    {
        File::put($this->path, "@import 'tailwindcss';\n");

        $this->merge();
        $once = File::get($this->path);

        $this->merge();

        $this->assertSame($once, File::get($this->path));
    }
}
