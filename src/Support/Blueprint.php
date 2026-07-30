<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

use PanelKit\Panel\PanelManager;

/**
 * The instructions an AI agent needs to build in this panel without guessing.
 *
 * WHAT IT IS FOR. An agent asked to "add an invoices screen" will otherwise
 * invent a controller, a route and a Blade view - all of which work, none of
 * which is how this panel does anything, and every one of which quietly skips
 * the tenant scope and the policy. The cost is not the wasted attempt; it is
 * that the result LOOKS right. A resource with no policy is invisible; a query
 * that forgets the scope returns another organisation's rows and a 200.
 *
 * SO IT LEADS WITH THE RULES THAT FAIL SILENTLY, not with a feature tour.
 * Anything an agent can discover by reading a class - method names, options - is
 * left out; what goes in is the part that is invisible in the code and expensive
 * to get wrong.
 *
 * IT IS GENERATED, NOT WRITTEN DOWN TWICE. The resource list, the commands, the
 * field types and the panel layout all come from the running application, so an
 * instruction file that named a resource somebody deleted last week cannot
 * happen. That matters more here than in ordinary documentation: a person
 * notices a stale claim, and an agent acts on it.
 *
 * IT IS MARKDOWN because that is what every agent already reads - `AGENTS.md`,
 * `CLAUDE.md`, a pasted prompt - and because a human has to be able to check it.
 */
final class Blueprint
{
    public static function markdown(): string
    {
        return implode("\n\n", array_filter([
            self::heading(),
            self::rules(),
            self::shape(),
            self::recipes(),
            self::assistant(),
            self::inventory(),
            self::commands(),
            self::verification(),
        ]))."\n";
    }

    /**
     * The assistant's charter, for an agent EXTENDING it - E.3.
     *
     * An agent asked to "add a tool to the assistant" without this section
     * writes a tool that queries models directly, which is an endpoint with
     * no authorisation reachable by asking politely. The charter here is the
     * builder's half; the operator's half is a help article the assistant
     * itself retrieves and cites.
     */
    private static function assistant(): string
    {
        return <<<'MD'
        ## The assistant, if you extend it

        The assistant is `laravel/ai` behind three hard rules. Break any of
        them and you have built a data leak that answers politely:

        1. **Every tool that touches records extends `PanelTool` and calls
           `$this->authorise(action, resourceKey, $record)` first.** That is
           the SAME `Resource::can()` gate the buttons use - not a similar
           one, and never a prompt instruction. A tool refuses with a
           returned sentence, not an exception.
        2. **Anything destructive declares `isDestructive(): true`** and
           pauses for human approval before running.
        3. **Retrieval is tenant-scoped by construction.** `KnowledgeBase`
           refuses to search without a tenant; a new `KnowledgeSource` that
           indexes RECORDS (not public help text) must also gate retrieval
           per-asker with `authorise()`, because then it answers questions
           the screen would refuse.

        Credentials are BYOK: `AiCredentials` (panel settings, encrypted)
        layered over `.env`. Never read or log the key; `apply()` at the
        entry point is all any caller needs. With no key at all the
        assistant degrades to a setup sentence - keep it that way.

        What the assistant may do is documented for operators in the help
        centre (`assistant-charter`); if you add a capability, update that
        article in the same change so the assistant keeps citing the truth
        about itself.
        MD;
    }

    private static function heading(): string
    {
        $name = (string) config('app.name');

        return <<<MD
        # Building in this panel

        This application uses PanelKit: administration screens are declared as PHP
        classes and rendered by Inertia and Vue. `{$name}` is the application; the
        panel is the framework it is built with.

        Read this before adding a screen. It describes the conventions that are not
        visible in a single file, and the mistakes that return HTTP 200.
        MD;
    }

    /**
     * The rules that fail silently.
     *
     * ORDERED BY WHAT THE FAILURE COSTS, not by how often it happens. Every one
     * of these produces a working-looking screen, which is exactly why they need
     * saying: an agent has no way to notice that a list is missing a predicate.
     */
    private static function rules(): string
    {
        return <<<'MD'
        ## Rules that fail silently

        1. **Never write a controller for a resource screen.** Declare a `Resource`
           subclass. The panel generates the list, the record pages, the routes, the
           permissions and the navigation entry. A hand-written controller bypasses
           the tenant scope and the policy, and looks perfectly fine doing it.

        2. **A resource with no policy is invisible to everybody.** That is the safe
           default, and it looks identical to a permissions bug. Register one:
           `Gate::policy(Model::class, ModelPolicy::class)`.

        3. **Definitions must not query.** `table()` and `form()` build a cached
           description. A query inside one runs before anybody has asked for a row,
           for every user, and can be cached and served to the wrong tenant. Option
           lists that come from the database are closures.

        4. **A null tenant is a deny, never "all tenants".** Every path fails closed.
           If you add a query that reaches around the model - raw SQL, a join, a
           `withoutGlobalScopes()` - you have taken responsibility for the predicate.

        5. **Validate the members of a multi-value field, not just the array.**
           `['array']` accepts `['email', 'anything']`, because the array is an
           array. Fields that hold several values declare a `key.*` rule.

        6. **Never use `window.confirm`.** It is suppressed in embedded browsers: it
           returns false without showing anything, so a destructive action silently
           does nothing for some people and everything for others. Use `PkModal`.

        7. **Do not put a class name in a schema.** Columns, fields and actions emit
           semantic values - an icon NAME, a colour INTENT, a column count - and the
           client decides what those look like.

        8. **Every screen needs a way in.** A page that is in no menu is
           indistinguishable from one nobody wrote. Resources place themselves;
           anything else goes in `App\Panel\Pages` or the coverage test fails.
        MD;
    }

    private static function shape(): string
    {
        $manager = app(PanelManager::class);

        $panels = [];

        foreach ($manager->panels() as $panel) {
            $path = trim($panel->getPath(), '/');

            $panels[] = sprintf(
                '- `%s` — mounted at `/%s`, guard `%s`, %s context',
                $panel->id,
                $path,
                $panel->getGuard(),
                $panel->getContext(),
            );
        }

        $panelList = implode("\n", $panels) ?: '- (none registered)';

        $discover = [];

        foreach ((array) config('panel.discover', []) as $directory => $namespace) {
            $discover[] = '- `'.str_replace(base_path().'/', '', (string) $directory).'` → `'.$namespace.'`';
        }

        $discoverList = implode("\n", $discover) ?: '- (nothing discovered)';

        return <<<MD
        ## Where things live

        Panels registered in this application:

        {$panelList}

        Resources are discovered from:

        {$discoverList}

        A resource belongs to exactly one panel — its key is a URL segment and an
        ability name, both globally unique. A second portal needing the same screen
        gets a subclass with its own `key()`.

        - Resources: `app/Panel/Resources`
        - Policies: `app/Policies`, extending the tenant-aware base policy
        - Non-resource pages: declared in `app/Panel/Pages`, rendered from `resources/js/pages`
        - Panel providers: `app/Providers/Panels`
        MD;
    }

    /**
     * The five things somebody actually asks for.
     *
     * WHOLE COMMANDS AND WHOLE CLASSES, because a recipe that stops at "then
     * configure the resource" is one an agent finishes by inventing. Each of
     * these is the complete path from nothing to a working screen.
     */
    private static function recipes(): string
    {
        return <<<'MD'
        ## Recipes

        ### Add a screen for a model

        ```bash
        php artisan make:panel-resource Invoice --generate
        ```

        Then: register a policy, check the columns it guessed, and add filters. The
        route, the navigation entry and the abilities already exist. Nothing needs
        adding to `routes/web.php`.

        ### Group several resources under one sidebar entry

        Write a `Cluster` class and point each member's `$cluster` at it. The
        sidebar shows the cluster's label once; the members become a shared
        sub-navigation on every screen inside, permission-filtered per person.
        Use a cluster for facets of ONE subject; keep an ordinary `$group` for
        peers someone jumps between from anywhere.

        ```php
        final class NetworkCluster extends Cluster
        {
            protected static string $icon = 'router';
        }

        // on each member resource:
        protected static ?string $cluster = NetworkCluster::class;
        ```

        ### Add a portal

        ```bash
        php artisan make:panel reseller --path=reseller
        ```

        A provider, a resource directory and the routes. Use `--central` only for a
        portal that must see every organisation at once; it turns tenant scoping off.

        ### Add a field type

        Subclass `Field`, return a new `type()`, add your keys to `toSchema()`, and
        register a Vue control for that type with `registerFieldControl('your-type',
        Control)`. An option-bearing field must also override `resolveOptions()`, or
        it renders with nothing to choose and reports no error.

        ### Add a permission-gated action

        ```php
        RecordAction::make('suspend')
            ->label('Suspend')->icon('ban')->ability('update')
            ->confirm('Suspend this subscriber? Their connection drops immediately.')
            ->run(fn (Client $client) => $client->update(['status' => 'suspended']));
        ```

        The ability is checked against THAT record before the button renders and
        again before it runs.

        ### Ship it as a package

        Implement `PanelPlugin`, call `PanelManager::plugin(new YourPlugin)` from your
        service provider, and register resources, pages and routes through the
        `PluginContext`. A plugin can only add; it never receives the `Panel`.
        MD;
    }

    /**
     * What this installation actually contains.
     *
     * GENERATED FROM THE REGISTRY, which is the whole reason this file is a
     * command rather than a document somebody maintains. An agent told about a
     * resource that was deleted last week will confidently write code against it.
     */
    private static function inventory(): string
    {
        $manager = app(PanelManager::class);

        $rows = [];

        foreach ($manager->resources() as $key => $class) {
            $rows[] = sprintf(
                '| `%s` | `%s` | `%s` |',
                $key,
                class_basename($class),
                $manager->panel($class::panel()) !== null ? $class::panel() : 'unregistered',
            );
        }

        if ($rows === []) {
            return '';
        }

        $table = implode("\n", $rows);

        return <<<MD
        ## Resources in this installation

        | Key | Class | Panel |
        | --- | --- | --- |
        {$table}

        Ability names are derived from the key: `view_any_clients`, `update_clients`,
        `restore_clients`, `force_delete_clients`.
        MD;
    }

    private static function commands(): string
    {
        $lines = [];

        foreach (\Illuminate\Support\Facades\Artisan::all() as $name => $command) {
            if (! str_starts_with($name, 'panel:') && ! str_starts_with($name, 'make:panel')) {
                continue;
            }

            $lines[] = '- `php artisan '.$name.'` — '.$command->getDescription();
        }

        sort($lines);

        $list = implode("\n", $lines);

        return <<<MD
        ## Commands

        {$list}
        MD;
    }

    /**
     * How to know it worked.
     *
     * THE MOST VALUABLE SECTION FOR AN AGENT, because the failure modes here are
     * invisible: a screen that renders is not a screen that is scoped, and a
     * suite that passes is not a suite that covered the new resource.
     */
    private static function verification(): string
    {
        return <<<'MD'
        ## Before you call it done

        ```bash
        php artisan panel:doctor        # configuration that is silently wrong
        php artisan test                # the suite
        npx vue-tsc --noEmit            # the client half
        ```

        For a new resource, write these three assertions first — they are the
        failures that return 200:

        ```php
        use PanelKit\Panel\Testing\InteractsWithPanels;

        $this->assertResourceRegistered('invoices');
        $this->assertTenantIsolation($this->operator, 'invoices', $foreignRecord);
        $this->assertResourceRefuses($this->stranger, 'invoices');
        ```

        `assertTenantIsolation` checks the record URL as well as the list. The list
        is the obvious half; the record URL is the half people forget, and the one
        an attacker uses.
        MD;
    }
}
