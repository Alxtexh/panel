<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Support\PanelHome;

/**
 * What a portal shows at its own root.
 *
 * IT EXISTS BECAUSE A GENERATED PORTAL 404ED ON ITSELF. `make:panel platform`
 * produced routes at `/platform/tenants` and nothing at `/platform`, so the
 * first thing anybody did with a portal they had just created was hit an error
 * page - which reads as "the generator did not work" rather than as "there is
 * no landing page".
 *
 * IT REDIRECTS WHEN THERE IS ONE OBVIOUS DESTINATION. A portal with a single
 * resource has no decision to offer; showing a page with one link on it is a
 * click somebody has to make for no reason. With several, the index is the
 * honest answer - the panel does not know which one matters.
 *
 * IT IS SCOPED TO THE CURRENT PANEL, like everything else here. Listing the
 * whole registry would put another portal's screens on this portal's home page,
 * linking to paths it does not route - the same mistake the sidebar made.
 *
 * A PORTAL WITH NOTHING IN IT SAYS SO, and says what to run next. That is the
 * state a portal is in for the minute between `make:panel` and the first
 * `make:panel-resource`, and an empty page in that minute looks like a failure.
 */
final class PanelHomeController extends Controller
{
    public function index(PanelManager $panels): Response|RedirectResponse
    {
        $panel = $panels->currentPanel();
        $id = $panel?->id ?? (string) config('panel.default', 'admin');

        $resources = [];

        foreach ($panels->resourcesFor($id) as $key => $class) {
            /*
             * THE SAME TWO FILTERS THE NAVIGATION USES. A resource hidden from
             * the menu, or one this person may not list, must not be offered
             * here either - a home page that links to a 403 is worse than one
             * that links nowhere.
             */
            if (! $class::showsInNavigation() || ! $class::can('viewAny')) {
                continue;
            }

            $resources[] = [
                'key' => $key,
                'title' => $class::pluralLabel(),
                'href' => $this->hrefFor($panel?->getPath() ?? '', $key),
                'icon' => $class::icon(),
                'group' => $class::group(),
            ];
        }

        /*
         * A DASHBOARD OUTRANKS THIS SCREEN. A portal that has one has already
         * said what its landing page is, and a directory of links in front of it
         * is a click on the way to somewhere everybody was going anyway.
         */
        if ($panel !== null && ($dashboard = PanelHome::dashboardUri($panel)) !== '') {
            return redirect($this->hrefFor($panel->getPath(), $dashboard));
        }

        // One destination is not a choice. Sending somebody straight there beats
        // a page whose only content is a single link.
        if (count($resources) === 1) {
            return redirect($resources[0]['href']);
        }

        /*
         * MERGED INTO THE SHARED `panel` PROP, NOT WRITTEN OVER IT.
         *
         * THIS PAGE USED TO SEND ITS OWN FOUR-KEY `panel` OBJECT, and a page
         * prop wins over a shared one - so on every portal whose home is this
         * screen, `SharePanelProps`' version was replaced wholesale. That
         * version is where `account`, `security`, `help`, `faq`, `settings`
         * and `lock` live, which is to say THE ENTIRE ACCOUNT MENU: the user
         * dropdown on the superadmin portal had a name, an email and no links
         * at all, while the demo's was fine because its home is
         * `PanelDashboard` and never collided.
         *
         * Nothing errored. The menu rendered, empty, and read as a portal
         * missing features rather than a prop being overwritten.
         *
         * SPREADING THE SHARED VALUE FIRST keeps this page's own additions
         * without discarding anything it does not know about - and it must not
         * know, because what the shell needs is the shell's business.
         */
        $shared = Inertia::getShared('panel');

        return Inertia::render('PanelHome', [
            'panel' => [
                ...(is_array($resolved = value($shared)) ? $resolved : []),
                'id' => $id,
                'name' => $panel?->resolveBrandName() ?? config('app.name'),
                'path' => '/'.trim($panel?->getPath() ?? '', '/'),
                'central' => (bool) $panel?->isCentral(),
            ],
            'resources' => $resources,
        ]);
    }

    private function hrefFor(string $path, string $key): string
    {
        $prefix = trim($path, '/');

        return '/'.($prefix === '' ? '' : $prefix.'/').$key;
    }
}
