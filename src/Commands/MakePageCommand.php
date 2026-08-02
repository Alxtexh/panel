<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use PanelKit\Panel\PanelManager;

/**
 * Generate a panel page, and the one-line Vue file that resolves it.
 *
 * BOTH HALVES OR NEITHER. A page class with no component is a route that
 * resolves to nothing - a white page with a console error naming a file the
 * developer has never seen, which is the exact failure `@panelkit/inertia`
 * exists to prevent. Writing the class alone would reintroduce it one screen at
 * a time.
 *
 * `--dashboard` GENERATES A WIDGET HOST instead, extending `DashboardPage`: it
 * needs no component of its own, because the packaged `PanelDashboard` screen
 * draws whatever `stats()` and `charts()` declare.
 */
final class MakePageCommand extends Command
{
    protected $signature = 'make:panel-page
                            {name : The page class, e.g. ServerHealth}
                            {--dashboard : A widget host, extending DashboardPage}
                            {--panel= : The panel this screen belongs to. Defaults to panel.default}
                            {--force : Overwrite an existing class or component}';

    protected $description = 'Create a panel page (a screen that is not a resource)';

    public function handle(): int
    {
        $name = Str::studly(str_replace(['Page', '.php'], '', (string) $this->argument('name')));
        $class = $name.'Page';
        $slug = Str::kebab($name);

        $directory = app_path('Panel/Pages');
        $path = $directory.'/'.$class.'.php';

        if (! is_dir($directory)) {
            mkdir($directory, 0755, true);
        }

        if (file_exists($path) && ! $this->option('force')) {
            $this->components->error("app/Panel/Pages/{$class}.php already exists. Use --force to replace it.");

            return self::FAILURE;
        }

        $dashboard = (bool) $this->option('dashboard');

        try {
            $panel = $this->targetPanel();
        } catch (\RuntimeException $e) {
            $this->components->error($e->getMessage());

            return self::FAILURE;
        }

        file_put_contents($path, $dashboard
            ? $this->dashboardStub($class, $slug, $panel)
            : $this->pageStub($class, $slug, $name, $panel));

        $this->components->info("Created app/Panel/Pages/{$class}.php");
        $this->components->twoColumnDetail('Panel', $panel);

        if (! $dashboard) {
            $this->writeComponent($name, $slug);
        }

        $this->newLine();
        $this->components->info("Visit /{$slug}. Discovery registers it; there is no route to add.");

        /*
         * THE ABILITY IS NAMED, because it is derived and therefore easy to
         * miss. A page defaults to `view_{slug}` and denies anybody without it -
         * which is the safe posture and looks exactly like a broken screen to
         * whoever forgot to grant it.
         */
        $this->line('  It requires the ability `view_'.Str::snake($slug).'`.');
        $this->line('  Run `php artisan panel:permissions sync` to add it to the matrix,');
        $this->line('  or return null from ability() for every signed-in operator.');

        return self::SUCCESS;
    }

    /**
     * The one-line page file, in the same shape `panel:install` writes.
     *
     * A DASHBOARD NEEDS NONE: it renders the packaged `PanelDashboard`, whose
     * page file already exists.
     */
    private function writeComponent(string $name, string $slug): void
    {
        $directory = resource_path('js/pages');

        if (! is_dir($directory)) {
            $this->components->warn(
                'No resources/js/pages directory, so no component was written. The page will '
                .'render nothing until one exists at '.$name.'.vue'
            );

            return;
        }

        $path = $directory.'/'.$name.'.vue';

        if (file_exists($path) && ! $this->option('force')) {
            $this->components->warn("resources/js/pages/{$name}.vue already exists, keeping yours.");

            return;
        }

        file_put_contents($path, <<<VUE
        <script setup lang="ts">
        /*
         * The {$name} screen.
         *
         * ITS PROPS COME FROM `{$name}Page::data()`. Declare them here as you
         * would for any component - they arrive as ordinary Inertia page props.
         *
         * KEEP THE TEMPLATE. An SFC with only a script block renders nothing at
         * all, silently, in a production build.
         */
        defineProps<{
            pageHeading?: string
            pageDescription?: string | null
        }>()
        </script>

        <template>
            <div class="space-y-6">
                <header v-if="pageHeading">
                    <h1 class="text-2xl font-semibold tracking-tight">{{ pageHeading }}</h1>
                    <p v-if="pageDescription" class="mt-1 text-sm text-muted-foreground">
                        {{ pageDescription }}
                    </p>
                </header>

                <p class="text-sm text-muted-foreground">
                    Nothing here yet. Return props from <code>data()</code> and render them.
                </p>
            </div>
        </template>
        VUE);

        $this->components->info("Created resources/js/pages/{$name}.vue");
    }

    /**
     * WHICH PANEL THIS SCREEN BELONGS TO.
     *
     * `make:panel-resource` HAS TAKEN `--panel` SINCE IT EXISTED AND THIS DID
     * NOT, which on a multi-panel application put every generated page in the
     * DEFAULT panel - so thirteen platform screens landed in a tenant sidebar
     * and had `panel()` patched into each of them afterwards by a script. That
     * is the exact failure `Pages` warns about in its own docblock.
     *
     * THE PROPERTY IS ALWAYS WRITTEN, even for the default panel. `Page` carries
     * `protected static string $panel = 'admin'` - a literal, not the configured
     * default - so an application that renamed its only panel generated pages
     * declaring one that does not exist: discovered, registered and reachable
     * from nowhere, with no error.
     *
     * THE DIRECTORY DOES NOT CHANGE. Unlike resources, pages are discovered from
     * one place and say which panel they are for, so a second portal's screens
     * live beside the first's and nothing needs a new discovery path.
     */
    private function targetPanel(): string
    {
        $requested = $this->option('panel');
        $id = $requested !== null ? (string) $requested : (string) config('panel.default', 'admin');

        $panels = app(PanelManager::class)->panels();

        if ($requested !== null && ! array_key_exists($id, $panels)) {
            $known = $panels === [] ? 'none are registered' : implode(', ', array_keys($panels));

            throw new \RuntimeException("No panel [{$id}]. Registered: {$known}.");
        }

        return $id;
    }

    private function pageStub(string $class, string $slug, string $name, string $panel): string
    {
        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Panel\\Pages;

        use Illuminate\\Http\\Request;
        use PanelKit\\Panel\\Pages\\Page;

        /**
         * TODO: say what this screen is for, and why it is not a resource.
         */
        final class {$class} extends Page
        {
            protected static string \$panel = '{$panel}';

            protected static string \$icon = 'file';

            protected static ?string \$group = null;

            public static function component(): string
            {
                return '{$name}';
            }

            /**
             * MAY QUERY, unlike a resource's table() and form(). This runs per
             * request for one signed-in person and returns their data.
             *
             * @return array<string, mixed>
             */
            public static function data(Request \$request): array
            {
                return [];
            }

            /*
             * Endpoints this page owns, each with its own ability - seeing and
             * doing are different grants. The handler is a static method here
             * named for the action.
             *
             * public static function actions(): array
             * {
             *     return ['save' => 'manage_{$slug}'];
             * }
             */
        }

        PHP;
    }

    private function dashboardStub(string $class, string $slug, string $panel): string
    {
        return <<<PHP
        <?php

        declare(strict_types=1);

        namespace App\\Panel\\Pages;

        use PanelKit\\Panel\\Pages\\DashboardPage;
        use PanelKit\\Panel\\Widgets\\ChartWidget;
        use PanelKit\\Panel\\Widgets\\StatWidget;

        /**
         * TODO: say what this dashboard answers.
         */
        final class {$class} extends DashboardPage
        {
            protected static string \$panel = '{$panel}';

            protected static ?string \$group = null;

            /**
             * WIDGETS RESOLVE ONE AT A TIME, each in its own deferred prop, so
             * the layout arrives before any query has run and one slow
             * aggregate delays only itself.
             *
             * @return list<StatWidget>
             */
            public static function stats(): array
            {
                return [
                    // StatWidget::make('clients', 'Clients')
                    //     ->value(fn (): int => Client::query()->count())
                    //     ->ability('view_commercial_widgets'),
                ];
            }

            /** @return list<ChartWidget> */
            public static function charts(): array
            {
                return [
                    // ChartWidget::make('signups', 'Sign-ups')
                    //     ->type('line')
                    //     ->withPeriods()
                    //     ->data(fn (\$period, \$now): array => [...]),
                ];
            }
        }

        PHP;
    }
}
