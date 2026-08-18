<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Alxtexh\Panel\PanelManager;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;

final class BillingSuspendedController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $panel = app(PanelManager::class)->currentPanel();

        abort_if($panel === null, 404);

        return Inertia::render($panel->getSuspendedPageComponent(), array_merge(
            $panel->resolveBillingState(),
            [
                'pageHeading' => 'Subscription access',
                'pageDescription' => 'Billing needs attention before access to this panel can continue.',
            ],
        ));
    }
}
