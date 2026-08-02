<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

/**
 * The screens this package renders, and the one-line files that resolve them.
 *
 * WHY THIS IS NOT INSIDE `InstallCommand` ANY MORE. `panel:update` needs the
 * same list, and a second copy of it is the exact failure this list exists to
 * prevent: a screen added to the PHP half, written by one command and not the
 * other, is a route that resolves to nothing for everybody who upgraded rather
 * than installed fresh.
 *
 * That is not hypothetical. `settings/Roles` shipped in 0.2.0 with no update
 * command in existence, so every 0.1.0 installation that ran `composer update`
 * got a routed permission matrix and no page file for it.
 */
final class PanelPages
{
    /**
     * The screens this package renders, and nothing else.
     *
     * KEPT BESIDE THE `Inertia::render` CALLS THAT NAME THEM. A screen added to
     * the PHP half without a line here is a route that resolves to nothing, so
     * the panel's own test walks the render calls and this list together.
     */
    public const SCREENS = [
        'ResourceIndex',
        'ResourceForm',
        'ResourceView',
        'Trash',
        'PanelHome',

        /*
         * THE WIDGET HOST. `StatWidget` and `ChartWidget` shipped with nowhere
         * to render; `DashboardPage` routes this and this draws them.
         */
        'PanelDashboard',
        'Changelog',
        'Environment',

        /*
         * NESTED NAMES, because the server renders `documents/Templates` and a
         * page name is a path. The writer creates the directory; the component
         * identifier is the basename, since `documents/Templates` is not a
         * legal JavaScript name.
         */
        'documents/Templates',
        'documents/TemplateDesigner',
        'documents/DocumentPrint',

        /*
         * THE TICKET ANALYSIS SCREEN. Routed by `TicketingPlugin` and only when
         * an installation has named an operator panel - but the page file has
         * to exist either way, because `panel:install` cannot know today what
         * `config/panel.php` will say tomorrow, and a screen whose route
         * appears later with no component is the white page this whole class
         * was written to prevent.
         */
        'TicketAnalysis',

        /*
         * THE PERMISSION MATRIX, nested for the same reason. The package now
         * ships the roles system - model, migration, reconciler - and a matrix
         * nobody can open is a permission system nobody can operate.
         */
        'settings/Roles',
    ];

    /**
     * Write any screen file that is not already there.
     *
     * RETURNS WHAT HAPPENED RATHER THAN PRINTING IT, because two commands need
     * the same facts and say different things about them. On an install, three
     * files kept is "you already have these". On an UPDATE it is the interesting
     * half: a screen written today is one the new version routes and the old one
     * did not, and a consumer who never sees that line gets a white page on a
     * route that used to 404.
     *
     * @return array{written: list<string>, skipped: list<string>, directory: ?string}
     */
    public static function write(bool $force = false): array
    {
        $directory = resource_path('js/pages');

        if (! is_dir($directory)) {
            return ['written' => [], 'skipped' => [], 'directory' => null];
        }

        $written = [];
        $skipped = [];

        foreach (self::SCREENS as $screen) {
            $path = $directory.'/'.$screen.'.vue';

            if (file_exists($path) && ! $force) {
                $skipped[] = $screen;

                continue;
            }

            // A nested screen name is a path, so its directory may not exist -
            // and `file_put_contents` into a missing directory fails with a
            // warning and no file, which would be a screen that installs
            // silently as nothing.
            $folder = dirname($path);

            if (! is_dir($folder)) {
                mkdir($folder, 0755, true);
            }

            file_put_contents($path, self::stub($screen));

            $written[] = $screen;
        }

        return ['written' => $written, 'skipped' => $skipped, 'directory' => $directory];
    }

    /**
     * A WRAPPER, NOT A RE-EXPORT, and the difference is not stylistic.
     *
     * `export { default } from '@panelkit/inertia/pages/X.vue'` is the obvious
     * way to write this. It type-checks, it builds, the chunk it emits contains
     * the whole real component - and the page renders NOTHING. An SFC with no
     * `<template>` block compiles to a component with no render function, so
     * Vue mounts it and draws an empty comment node. In a production build there
     * is no warning at all; the only symptom is a blank page under a working
     * header. It cost an afternoon here, and it would cost a consumer their
     * first impression of the package.
     *
     * `$attrs` CARRIES THE PROPS. Inertia hands page props to this component,
     * which declares none, so they arrive as attributes and are forwarded
     * whole - which is also why `inheritAttrs` is off: without it Vue would
     * apply them a second time to the child's root element, and an object prop
     * rendered as a DOM attribute becomes `records="[object Object]"`.
     */
    public static function stub(string $screen): string
    {
        // `documents/Templates` is a page NAME; the component identifier has to
        // be a legal JavaScript one.
        $component = basename($screen);

        return <<<VUE
        <script setup lang="ts">
        /*
         * The panel's {$component} screen, from @panelkit/inertia.
         *
         * WHY THIS FILE EXISTS: Inertia resolves a page name by globbing this
         * directory, so a screen living in node_modules is one it cannot find.
         *
         * IT IS ALSO WHERE YOU OVERRIDE IT. Point the import at your own
         * component and nothing else has to change.
         *
         * KEEP THE TEMPLATE. An SFC with only a script block renders nothing at
         * all, silently, in a production build.
         */
        import {$component} from '@panelkit/inertia/pages/{$screen}.vue'

        defineOptions({ inheritAttrs: false })
        </script>

        <template>
            <!--
                The cast is deliberate. `\$attrs` is `Record<string, unknown>`, so
                the checker cannot see that it holds this screen's props and
                reports every one of them as missing. There is nothing to verify
                either way: these values arrive from the server as JSON and are
                typed where they are USED, inside the packaged component.
            -->
            <{$component} v-bind="(\$attrs as any)" />
        </template>

        VUE;
    }
}
