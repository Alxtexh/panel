<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

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
    /** @var array<string, string> design key => Inertia component */
    private const DESIGNS = [
        'aurora' => 'landing/AuroraLanding',
        'editorial' => 'landing/EditorialLanding',
        'console' => 'landing/ConsoleLanding',
    ];

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
        if ($request->user() !== null && $request->query('design') === null) {
            return redirect()->route('dashboard');
        }

        $configured = (string) config('panel.landing', 'aurora');

        $requested = (string) $request->query('design', $configured);

        // Unknown names fall back rather than 404: this is the front door,
        // and a typo in a shared link should show the product, not an error.
        $design = self::DESIGNS[$requested] ?? self::DESIGNS[$configured] ?? self::DESIGNS['aurora'];

        return Inertia::render($design);
    }
}
