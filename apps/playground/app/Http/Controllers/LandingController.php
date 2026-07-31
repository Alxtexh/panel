<?php

declare(strict_types=1);

namespace App\Http\Controllers;

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

    public function __invoke(Request $request): Response
    {
        $configured = (string) config('panel.landing', 'aurora');

        $requested = (string) $request->query('design', $configured);

        // Unknown names fall back rather than 404: this is the front door,
        // and a typo in a shared link should show the product, not an error.
        $design = self::DESIGNS[$requested] ?? self::DESIGNS[$configured] ?? self::DESIGNS['aurora'];

        return Inertia::render($design);
    }
}
