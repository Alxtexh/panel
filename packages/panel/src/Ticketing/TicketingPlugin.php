<?php

declare(strict_types=1);

namespace PanelKit\Panel\Ticketing;

use PanelKit\Panel\Http\Controllers\Ticketing\TicketAnalysisController;
use PanelKit\Panel\Http\Controllers\Ticketing\TicketStatsController;
use PanelKit\Panel\Http\Controllers\Ticketing\TicketThreadController;
use Illuminate\Support\Facades\Route;
use PanelKit\Panel\Panel;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Plugins\Plugin;
use PanelKit\Panel\Plugins\PluginContext;
use PanelKit\Panel\Plugins\RenderHooks;
use RuntimeException;

/**
 * Ticketing, installed into TWO portals at once - roadmap 6.4.
 *
 * THE FIRST PLUGIN THAT SPANS PANELS, and that is the whole exercise.
 * `AnnouncementsPlugin` proved a package can install a working CRUD screen
 * into one portal without the application registering anything. A ticket is
 * harder in the way real features are harder: it has two ends, they live in
 * different portals, and NEITHER END IS WORTH INSTALLING ALONE. A queue with
 * no way to raise a ticket has nothing in it; a form that raises tickets into
 * a portal where nobody reads them is worse than absent, because somebody
 * types their problem into it and waits.
 *
 * SO IT REFUSES, LOUDLY, when only one of its two portals exists. That is the
 * counterpart guard, and it is the interesting part of this class:
 *
 *   The alternative is to install whichever side it can and stay quiet, which
 *   is the failure mode this whole codebase is written against - a screen that
 *   returns 200 and does nothing useful, discovered by a customer rather than
 *   by a deploy. A missing portal is a configuration mistake, it is made once,
 *   at boot, by somebody who can fix it in a minute, and the only version of
 *   this that reaches them is the one that throws.
 *
 *   IT THROWS ON THE FIRST PANEL EITHER WAY. Panels are registered by their
 *   providers before plugins run, so by the time `appliesTo` is asked anything
 *   the full set is known - which is what makes checking the counterpart
 *   possible here rather than a race.
 *
 * WHICH PORTALS, FROM CONFIG, because a package cannot know what an
 * installation called them. `panel.ticketing.operator` and
 * `panel.ticketing.opener` - see `config/panel.php`. Hardcoding `'admin'` and
 * `'reseller'` would work here and nowhere else, which is exactly the bug the
 * plugin API's own notes warn about.
 */
final class TicketingPlugin extends Plugin
{
    public function id(): string
    {
        return 'panelkit/ticketing';
    }

    public function appliesTo(Panel $panel): bool
    {
        $operator = $this->operatorPanel();
        $opener = $this->openerPanel();

        /*
         * NEITHER NAMED IS OFF, and off is a supported state rather than an
         * oversight. The package registers this plugin by default, so every
         * installation that never asked for a support desk boots with it
         * present - and must get no route, no navigation entry and no error.
         *
         * THE DEFAULT USED TO BE `admin` AND `reseller`, which read as harmless
         * and was not: registered by default it would have demanded a
         * `reseller` portal from every fresh application, throwing at boot over
         * a feature nobody had turned on.
         */
        if ($operator === null && $opener === null) {
            return false;
        }

        /*
         * ONE NAMED IS A MISTAKE, AND IT IS SAID HERE rather than resolved into
         * silence. Skipping quietly is the same failure as installing one end:
         * somebody configured a support desk, everything reported success and
         * no screen exists. See the class note - the only version of this that
         * reaches them is the one that throws.
         */
        if ($operator === null || $opener === null) {
            $named = $operator ?? $opener;
            $missing = $operator === null ? 'operator' : 'opener';

            throw new RuntimeException(
                "Ticketing is half configured: panel [{$named}] is named and panel.ticketing.{$missing} is not. "
                .'Name both, or neither. One end alone is either a queue nobody can write to '
                .'or a form nobody reads.',
            );
        }

        if ($panel->id !== $operator && $panel->id !== $opener) {
            return false;
        }

        $this->requireBothPanels($operator, $opener);

        return true;
    }

    public function register(PluginContext $context): void
    {
        /*
         * ONE CLASS PER PORTAL, NEVER THE SAME ONE TWICE. A resource belongs
         * to exactly one panel - its key is a URL segment - and registering a
         * single class into both would throw at the manager. The two ends
         * genuinely differ anyway; see each class's own note on what changes
         * and why.
         */
        $context->resources([
            $context->panel->id === $this->operatorPanel()
                ? TicketResource::class
                : MyTicketResource::class,
        ]);

        /*
         * THE CONVERSATION, ON WHICHEVER RECORD PAGE THIS PORTAL SERVES.
         *
         * Both ends get the same component and the same endpoint; what
         * differs is what comes back, which is decided by the policy rather
         * than by which screen asked. An opener's thread contains no internal
         * notes because the query excludes them - not because the opener's
         * portal was given a quieter component.
         *
         * A RENDER HOOK RATHER THAN AN EDIT TO `ResourceView`, which is the
         * point of the hook mechanism: ticketing adds a whole conversation to
         * a record page without a line changing in a screen every other
         * resource shares.
         */
        $operator = $context->panel->id === $this->operatorPanel();
        $key = $operator ? 'tickets' : 'my-tickets';

        $context->render(RenderHooks::VIEW_AFTER, 'TicketThread', [], [$key]);

        /*
         * THE NUMBERS, ON THE OPERATOR'S QUEUE ONLY. A subscriber's own
         * screen has nothing to summarise - four tickets do not need a chart -
         * and the endpoint behind this is authorised as "may list the whole
         * organisation's", which they are not.
         */
        /*
         * A NAVIGATION ENTRY FOR THE ANALYSIS, beside the queue it describes.
         * The prefix is added by `page()` from the panel's own path, so this
         * lands correctly in whichever portal accepted the plugin.
         */
        if ($operator) {
            $context->page('Ticket analysis', "{$key}/analysis", 'chart', 'Organisation');
        }

        /*
         * MOUNTED INSIDE THE PANEL'S GROUP, so the route is authenticated and
         * tenant-scoped exactly like a built-in one and carries the portal's
         * own prefix. A plugin registering this in a service provider would
         * get none of that.
         */
        $context->routes(function (Panel $panel) use ($key, $operator): void {
            Route::get("{$key}/{ticket}/thread", [TicketThreadController::class, 'show'])
                ->name("{$panel->id}.{$key}.thread");

            Route::post("{$key}/{ticket}/thread", [TicketThreadController::class, 'store'])
                ->name("{$panel->id}.{$key}.thread.store");

            /*
             * THE SUMMARY IS THE OPERATOR PORTAL'S ONLY, matching the widget
             * it feeds. Registered here it would exist on the subscriber's
             * portal too and answer 403 to everybody who could reach it - a
             * route that can only ever refuse is a dead control with a URL,
             * and dead controls are what DESIGN_RULES rule 5 is about.
             *
             * BEFORE the `{resource}/{id}` routes would see it, which a
             * plugin's routes are: they are registered inside the panel's
             * group ahead of the generic resource ones, so `stats` is matched
             * as a word rather than looked up as an id.
             */
            if ($operator) {
                Route::get("{$key}/stats", TicketStatsController::class)
                    ->name("{$panel->id}.{$key}.stats");

                /*
                 * THE ANALYSIS IS ITS OWN SCREEN. See the controller for why
                 * it is not a strip above the queue: two questions, two
                 * audiences, two rhythms of opening.
                 */
                Route::get("{$key}/analysis", TicketAnalysisController::class)
                    ->name("{$panel->id}.{$key}.analysis");
            }
        });
    }

    /**
     * BOTH ENDS OR NEITHER.
     *
     * Written as its own method because the message is the feature: it names
     * the portal that is missing, the config key that names it, and what the
     * consequence would have been - which is the difference between a minute
     * of work and an afternoon of reading a stack trace.
     */
    private function requireBothPanels(string $operator, string $opener): void
    {
        $panels = app(PanelManager::class);

        foreach ([$operator => $opener, $opener => $operator] as $present => $missing) {
            if ($panels->panel($present) !== null && $panels->panel($missing) === null) {
                throw new RuntimeException(
                    "Ticketing needs both of its portals and panel [{$missing}] is not registered. "
                    .'Register it, or change panel.ticketing to name a portal that exists. '
                    .'Installing only one end would leave either a queue nobody can write to '
                    .'or a form nobody reads.',
                );
            }
        }
    }

    /**
     * NULL MEANS NOT CONFIGURED, which is why neither of these falls back to a
     * panel id. A default of `admin` / `reseller` is a guess about somebody
     * else's application, and the guess is load-bearing now that the plugin
     * ships registered: it would mount ticketing on a portal nobody chose, or
     * demand one that does not exist.
     */
    private function operatorPanel(): ?string
    {
        $id = config('panel.ticketing.operator');

        return is_string($id) && $id !== '' ? $id : null;
    }

    private function openerPanel(): ?string
    {
        $id = config('panel.ticketing.opener');

        return is_string($id) && $id !== '' ? $id : null;
    }
}
