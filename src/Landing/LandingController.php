<?php

declare(strict_types=1);

namespace PanelKit\Panel\Landing;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\Support\InstallationState;
use PanelKit\Panel\Support\PanelHome;

/**
 * The public face - Part G.9.
 *
 * PANELKIT SHIPS SEVERAL LANDING DESIGNS, not one, because a landing page is
 * the single screen whose job is to sound like the company behind it - and a
 * framework that ships one template makes every deployment sound like the
 * same company. Three voices ship: a modern gradient SaaS page, a quiet
 * typographic one, and a developer-tool console page that shows a real
 * resource class instead of describing one.
 *
 * THE DESIGN IS CONFIGURATION, not a fork. An installation picks one in
 * `config('panel.landing')`; the `?design=` parameter exists so the
 * reference app can demonstrate all three without a redeploy, and is
 * validated against the known set rather than passed through - an
 * unvalidated component name in a render call is a way to ask the server to
 * mount any page in the bundle.
 */
final class LandingController extends Controller
{
    /**
     * ONE COMPONENT, MANY COMPOSITIONS.
     *
     * There were three page components here, one per design. A design is now a
     * named list of SECTIONS - see `LandingPresets` - so the component is the
     * same for all of them and adding a fourth costs no file at all.
     */
    private const PAGE = 'landing/Composed';

    /**
     * Is a landing page wanted at all?
     *
     * OFF UNLESS ASKED FOR, because `/` is the one URL an application is most
     * likely to have its own plans for - and a package that claimed it on
     * install would replace somebody's marketing site with a template. See
     * `panel.landing.route`.
     */
    public static function registers(): bool
    {
        return config('panel.landing.route', false) === true;
    }

    /**
     * WHERE THE PAGE IS ACTUALLY REACHABLE, if anywhere - the single source of
     * truth `LandingPageResource::links()` and `Sitemap` both call.
     *
     * `panel.landing.url` wins when it is set: an installation that composes
     * the page here but serves it from its own route, or a different
     * application entirely, has a URL this package cannot derive from
     * `registers()` alone. Falling back to `/` only when this package is the
     * one routing it keeps the two facts - "is it composed" and "is it
     * routed" - from producing a link to a page nothing answers.
     */
    public static function publicUrl(): ?string
    {
        $url = config('panel.landing.url');

        if (is_string($url) && $url !== '') {
            return $url;
        }

        return self::registers() ? '/' : null;
    }

    public function __invoke(Request $request): Response|RedirectResponse
    {
        /*
         * SOMEBODY WHO IS ALREADY SIGNED IN IS NOT A PROSPECT.
         *
         * The front door was the dashboard until G.9 put a marketing page on
         * it, and nothing reconciled the panel behind it - so an operator who
         * typed the bare domain, or followed a bookmark from before, got the
         * pricing table and the FAQ instead of their work. There is no error
         * to notice and no failed request to find in a log: the app is simply
         * showing the wrong person the wrong screen, forever, and the only
         * symptom is somebody saying the demo does not open.
         *
         * `?design=` STILL WINS, because this reference app exists to show all
         * three designs and whoever is demonstrating them is signed in. An
         * explicit request for a named design is a request to see that page;
         * the bare address is not.
         */
        if ($request->user() !== null && $request->route('design') === null) {
            return redirect(PanelHome::urlFor(null));
        }

        $configured = (string) config('panel.landing.design', 'aurora');

        /*
         * THE ROUTE SEGMENT, NOT A QUERY PARAMETER - see the preview route.
         * `/` carries no design at all and always renders what the
         * installation configured.
         */
        $requested = (string) ($request->route('design') ?? $configured);

        // Unknown names fall back rather than 404: this is the front door,
        // and a typo in a shared link should show the product, not an error.
        $design = in_array($requested, LandingPresets::names(), true)
            ? $requested
            : (in_array($configured, LandingPresets::names(), true) ? $configured : 'aurora');

        /*
         * WHAT WAS EDITED BEATS WHAT SHIPPED, except on a preview - `/preview`
         * exists to show the shipped designs, so it would be useless if it
         * showed the edited page instead.
         *
         * AN EMPTY SAVE IS NOT A BLANK SITE. Deleting every block hands the page
         * back to the preset rather than serving nothing, so the worst an editor
         * can do is return to what shipped.
         */
        $stored = $request->route('design') === null
            ? app(InstallationState::class)->get(LandingPageResource::KEY)
            : null;

        $sections = is_array($stored) && $stored !== []
            ? $stored
            : LandingPresets::get($design);

        return Inertia::render(self::PAGE, [
            'sections' => $sections,
            // The switcher names the design it is showing, so the demo explains
            // itself rather than needing the query string read back.
            'design' => $design,

            /*
             * THE CHROME IS THE APPLICATION'S, and it is sent rather than baked
             * in. The nav and footer used to hardcode this reference app's name
             * and its `/help`, `/about`, `/faq` links - screens it happens to
             * route, so a packaged footer carrying them would put three 404s at
             * the bottom of everybody's front page.
             */
            'brand' => (string) config('panel.landing.brand', config('app.name')),
            'tagline' => (string) config('panel.landing.tagline', ''),
            'footerLinks' => array_values((array) config('panel.landing.footer_links', [])),
            'dashboardHref' => PanelHome::urlFor(null),

            /*
             * THE SWITCHER ONLY WHERE PREVIEWS ARE ROUTED. Three links to
             * alternative versions of the page is a demonstration, and on a real
             * front door it is a mistake a visitor can make.
             */
            'previews' => config('panel.landing.previews', false) === true
                ? LandingPresets::names()
                : [],
        ]);
    }
}
